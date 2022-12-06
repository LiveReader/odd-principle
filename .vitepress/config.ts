import fs from "fs";

const title = "ODD Principle";
const description = "Documentation for the ODD Principle Ontologies and associated Methodologies";
const socialImgURL = "https://odd-principle.org/social-banner.png";
const tiwtterImgURL = "https://odd-principle.org/twitter-banner.png";

export default {
	lang: "en-US",
	title: title,
	description: description,
	head: [
		["meta", { name: "author", content: "LiveReader GmbH" }],
		["meta", { name: "keywords", content: "semanticweb, ontology, data-driven" }],
		["meta", { property: "og:title", content: title }],
		["meta", { property: "og:description", content: description }],
		["meta", { property: "og:url", content: "https://odd-principle.org/" }],
		["meta", { property: "og:image", content: socialImgURL }],
		["meta", { name: "twitter:title", content: title }],
		["meta", { name: "twitter:description", content: description }],
		["meta", { name: "twitter:image", content: tiwtterImgURL }],
		["meta", { name: "twitter:card", content: "summary_large_image" }],
	],
	lastUpdated: true,
	themeConfig: {
		siteTitle: title,
		logo: "/icons/odd-frame.png",
		nav: [
			{
				text: "LiveReader",
				items: [
					{
						items: [
							{ text: "Home Page", link: "https://livereader.com/" },
							{ text: "Legal Notice", link: "https://livereader.com/legal-notice" },
							{ text: "Privacy Policy", link: "https://livereader.com/privacy-policy" },
						],
					},
				],
			},
		],
		socialLinks: [
			{ icon: "discord", link: "https://discord.gg/NdtkFFRuXa" },
			{ icon: "twitter", link: "https://twitter.com/LiveReaderCom" },
			{ icon: "linkedin", link: "https://www.linkedin.com/company/livereader-gmbh" },
			{ icon: "github", link: "https://github.com/livereader/odd-principle" },
		],
		sidebar: {},
		footer: {
			message: "ODD Principle Documentation",
			copyright: `Copyright © ${new Date().getFullYear()} LiveReader GmbH`,
		},
	},
};

function sidebarItem(title: string, route: string) {
	const filesPath = __dirname + "/.." + route;
	const files = fs.readdirSync(filesPath);
	const items: { index: number; text: string; link: string }[] = [];
	for (const file of files) {
		if (fs.statSync(filesPath + "/" + file).isDirectory() || !file.endsWith(".md")) return;
		const fileName = file.split(".")[0];
		const index = fileName === "index" ? -1 : 0;
		const words = file.split(".")[0].split("_");
		const title = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
		items.push({
			index,
			text: fileName === "index" ? "Introduction" : title,
			link: route + (fileName === "index" ? "" : fileName),
		});
	}
	items.sort((a, b) => a.index - b.index);
	return [
		{
			text: title,
			items: items,
		},
	];
}
