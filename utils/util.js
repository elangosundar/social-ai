'use strict';

const socialLinks = require('./social');

const _getSocialLinks = (socialData) => {

	const getSocialLink = ( socialName, username ) => {
		const imgLink = `https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/${socialName}.svg`;
		const socLink = socialLinks[socialName] ? socialLinks[socialName].userName : '';
console.log(socLink);
		return `<a href="${socLink}" target="_blank"><img align="center" src="${imgLink}" alt="${username}" height="20" width="20" /></a>`;
	};

	const socialList = [];
	if (socialData) {
		const socialArr = JSON.parse(socialData);

		socialArr.forEach(
			(social) => {
				let socialLink;
				const socialName = social.socialName.toLowerCase().trim();
				const username = social.userName.toLowerCase().trim();

				switch (socialName) {
					case 'twitter':
					case 'facebook':
					case 'github':
					case 'dev-dot-to':
					case 'codepen':
					case 'codesandbox':
					case 'stackoverflow':
					case 'linkedin':
					case 'kaggle':
					case 'behance':
					case 'medium':
					case 'instagram':
					case 'dribbble':
					case 'youtube':
						socialLink = getSocialLink(socialName, username);
						socialList.push(socialLink);
						break;

					default:
						break;
				}
			}
		);

	}

	return socialList.join(',').replace(/,/gm, ' ');
};

module.exports = {
	_getSocialLinks
};
