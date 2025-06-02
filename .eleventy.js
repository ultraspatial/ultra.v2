module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"source/assets": "assets"});
  eleventyConfig.addFilter("readableDate", (dateStr) =>
    DateTime.fromISO(dateStr).toFormat("LLL dd, yyyy")
  );
  return {
    dir: {
      input: "source",
      output: "public",
    },
    templateFormats: ["md", "njk", "html"],
  };
};