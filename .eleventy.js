const dateFilter = require('./src/filters/date-filter.js');
const date24HourFilter = require('./src/filters/date24Hours-filter.js');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/_includes/css": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/_includes/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/_includes/scripts": "assets" });

  eleventyConfig.addWatchTarget("./src/");

  eleventyConfig.addFilter("log", (value) => {
    console.log(value);
  });
  eleventyConfig.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });
  eleventyConfig.addFilter('dateFilter', dateFilter);
  eleventyConfig.addFilter('date24HourFilter', date24HourFilter);
  eleventyConfig.addPlugin(require("@11ty/eleventy-navigation"));
  
  return {
    dir: { input: "src", output: "_site", data: "_data" },
    templateFormats: ["njk", "md", "css", "html", "yml"],
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
