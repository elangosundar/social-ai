'use strict';

const _getSocialLinks = (socialData, {owner, repo}) => {

	const getSocialLink = ( socialName, username ) => {
		const imgLink = `https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/${socialName}.svg`;

		return `<a href="${username}" target="_blank"><img align="center" src="${imgLink}" alt="${username}" height="20" width="20" /></a>`;
	};
console.log(socialData);
	const socialList = [];
	if (socialData) {
		console.log(socialData);		
		[...socialData].forEach((element, index) => {
			let socialLink;
			const socialName = element.socialName.toLowerCase().trim();
			const username = element.userName.toLowerCase().trim();
			
			switch (socialName) {
				case 'twitter':
					socialLink = getSocialLink(socialName, username);
					socialList.push(socialLink);
					break;

				case 'facebook':
					socialLink = getSocialLink(socialName, username);
					socialList.push(socialLink);
					break;

				default:
					break;
			}
		});
	}

	return socialList.join(',').replace(/,/gm, ' ');
};

module.exports = {
	_getSocialLinks
};
