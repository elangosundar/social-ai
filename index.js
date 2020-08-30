const core = require('@actions/core');
const github = require('@actions/github');
const showdown = require('showdown');
const jsDom = require('jsdom');
const {JSDOM} = jsDom;
const {_encode, _decode} = require('node-encoder');
const util = require('./util');

/**
 * Generates the social icons
 */
class GenerateSocialIcon {
	constructor() {
		this.token = core.getInput('GITHUB_TOKEN');
		this.inputSocialIcon = core.getInput('social-icons');

		this.octokit = github.getOctokit(this.token);
		this.repoInfo = github.context.repo;
		this.repoSha = github.context.sha;
		this.action = github.context.payload.action;
		this.mdParser = new showdown.Converter();
	}

	_addSocialIcon(content) {
		const socialIcon = util._getSocialLinks(this.inputSocialIcon, this.repoInfo);

		// If the readme header is in html then don't markdown it.
		if (content.includes('<h1>')) {
			const {window: {document}} = new JSDOM(content);
			const header = document.querySelector('h1:nth-child(1)');

			const newHeader = `<h1 align="center">${header.textContent}</h1><p align="center"> ${socialIcon}</p>`;
			const updatedReadme = content.replace(header.outerHTML, newHeader);

			return updatedReadme;
		} 

		// If header is in markdown then make it html
		const htmlContent = this.mdParser.makeHtml(content);
		const {window: {document}} = new JSDOM(htmlContent);

		const header = document.querySelector('h1:nth-child(1)');
		const headerMd = this.mdParser.makeMarkdown(header.outerHTML, document);;

		const newHeader = `<h1>${header.textContent}</h1> ${socialIcon}`;
		const newHeaderMd = this.mdParser.makeMarkdown(newHeader, document).replace(/,/gm, ' ');

		const updatedReadme = content.replace(headerMd, newHeaderMd);

		return updatedReadme;
	}

	_getReadmeEndpoint() {
		return `/repos/${this.repoInfo.owner}/${this.repoInfo.repo}/readme`;
	}

	_getUpdateEndpint() {
		return `/repos/${this.repoInfo.owner}/${this.repoInfo.repo}/contents/README.md`;
	}

	async init() {
		try {
			if (this.action && this.action !== 'closed') {
				return;
			}

			const {data: {sha, content: preContent}} = await this.octokit.request(
				`GET ${this._getReadmeEndpoint()}`,
				{
					headers: {
						authorization: `token ${this.token}`
					}
				}
			);

			const readmeContent = _decode(preContent);
			const updatedContent = this._addSocialIcon(readmeContent);
			const encoded64Content = _encode(updatedContent);
			const blob = await this.octokit.git.createBlob({
				...this.repoInfo,
				content: encoded64Content,
				encoding: 'base64'
			});

			if (sha !== blob.data.sha) {
				await this.octokit.request(`PUT ${this._getUpdateEndpint()}`, {
					headers: {
						authorization: `token ${this.token}`
					},
					message: 'chore: add social icons :unicorn:',
					content: encoded64Content,
					sha
				});
			}
		} catch (error) {
			core.setFailed(error);
		}
	}
}

const genSocialIcon = new GenerateSocialIcon();
(async () => {
	await genSocialIcon.init();
})();
