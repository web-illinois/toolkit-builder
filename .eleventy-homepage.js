const Homepage = require("./filters/homepage");

module.exports = function (eleventyConfig) {

  eleventyConfig.setTemplateFormats(['html', 'md', 'njk', '11ty.js', 'css', 'jpg', 'json', 'js']);

  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  var markdownIt = require("markdown-it")(options);
  var markdownItAttrs = require('markdown-it-attrs');

  markdownIt.use(markdownItAttrs, {
    leftDelimiter: '{',
    rightDelimiter: '}',
    allowedAttributes: []
  });

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.setLibrary("md", markdownIt);

  eleventyConfig.addFilter("buildHomepage", Homepage.build);

  return {
    dir: {
      input: "homepage",
      output: "_homepage"
    }
  };
};
