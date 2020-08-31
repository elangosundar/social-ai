'use strict';

const _getSocialLinks = (socialData, {owner, repo}) => {

	const getSocialLink = ( socialName, username ) => {
		const imgLink = `https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/${socialName}.svg`;

		return `<a href="${username}" target="_blank"><img align="center" src="${imgLink}" alt="${username}" height="20" width="20" /></a>`;
	};
// console.log(socialData);
	const socialList = [];
	if (socialData) {
		console.log(socialData);
		console.log(typeof socialData);
		const socialArr = [...socialData];
		console.log(typeof socialArr);
		console.log(socialArr);
		socialArr.forEach((social, index) => {
			let socialLink;
			console.log(typeof social);
			// const socialName = element.socialName.toLowerCase().trim();
			// const username = element.userName.toLowerCase().trim();
			// console.log(socialName+'------'+username);
			// switch (socialName) {
			// 	case 'twitter':
			// 		socialLink = getSocialLink(socialName, username);
			// 		socialList.push(socialLink);
			// 		break;

			// 	case 'facebook':
			// 		socialLink = getSocialLink(socialName, username);
			// 		socialList.push(socialLink);
			// 		break;

			// 	default:
			// 		break;
			// }
		});
	}

	return socialList.join(',').replace(/,/gm, ' ');
};

module.exports = {
	_getSocialLinks
};
