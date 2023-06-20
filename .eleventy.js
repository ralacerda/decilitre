const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPassthroughCopy("docs/src/favicon.svg");

  // Return your Object options:
  return {
    dir: {
      input: "docs/src",
      output: "docs/dist",
    },
    pathPrefix: "/decilitre",
  };
};
