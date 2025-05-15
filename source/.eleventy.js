const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets", "assets");
  eleventyConfig.addFilter("readableDate", (dateStr) => {
    return DateTime.fromISO(dateStr).toFormat("LLL dd, yyyy");
  });

  return {
    dir: {
      input: ".",
      output: "_site",
    },
  };
};
