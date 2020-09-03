'use strict';

const social = require('./social');

// Form the social links
const _getSocialLinks = (socialData) => {
	const socialInfo = iterateSocialInfo(socialData);

	return socialInfo.join(',').replace(/,/gm, ' ');
};

// Iterate the social links
const iterateSocialInfo = (socialData) => {
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

	return socialList;
}

// Form the social icon with link based actions input
const getSocialLink = ( socialName, username ) => {
	const socialLinks = social.socialLinks;
	const imgLink = `https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/${socialName}.svg`;
	const socLink = socialLinks[socialName] ? socialLinks[socialName] : '';
	const finalSocLink = socialName == 'medium' ? `${socLink}/@${username}` : `${socLink}/${username}`;

	return `<a href="${finalSocLink}" target="_blank"><img align="center" src="${imgLink}" alt="${username}" height="20" width="20" /></a>`;
};

module.exports = {
	_getSocialLinks
};
