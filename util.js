'use strict';

const _getSocialLinks = (socialData, {owner, repo}, style = '') => {
	const socialArray = socialData.split(',');
	const socialList = [];

	const getSocialLink = ( socialName, username ) => {
		const imgLink = `https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/${socialName}.svg`;

		return `<a href="${username}" target="_blank"><img align="center" src="${imgLink}" alt="${username}" height="20" width="20" /></a>`;
	};

	for (let social of socialArray) {
		let socialName = 'twitter'; //social.toLowerCase().trim();
		let username = 'elango_sundar';
		let socialLink;
		switch (social) {
			case 'twitter':
				socialLink = getSocialLink(socialName, username);
			 	socialList.push(socialLink);
				break;

			default:
				break;
		}
	}

	return socialList.join(',').replace(/,/gm, ' ');
};

module.exports = {
	_getSocialLinks
};
