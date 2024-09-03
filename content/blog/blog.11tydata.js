module.exports = {
	tags: ["posts"],
	permalink:
		"{{ page.date | readableDate('yyyy/MM/dd') }}/{{ page.fileSlug }}/",
	layout: "layouts/post.njk",
};
