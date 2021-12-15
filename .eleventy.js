const EnvironmentFilters = require("./filters/environmentFilters");
const ComponentFilters = require("./filters/componentFilters");
const TableOfContents = require("./filters/tableOfContents");
const AttributeList = require("./filters/attributes");
const ClassList = require("./filters/classList");
const Styles = require("./filters/styles");

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

  eleventyConfig.setLibrary("md", markdownIt);

  eleventyConfig.addFilter("addDescription", ComponentFilters.buildDescription);

  eleventyConfig.addFilter("buildAttributes", AttributeList.build);

  eleventyConfig.addFilter("buildClassList", ClassList.build);

  eleventyConfig.addFilter("buildStyles", Styles.build);

  eleventyConfig.addFilter("buildTableOfContents", TableOfContents.build);

  eleventyConfig.addFilter("buildHeader", EnvironmentFilters.buildHeader);

  eleventyConfig.addFilter("buildPrecode", EnvironmentFilters.buildPreCode);

  eleventyConfig.addFilter("buildPostcode", EnvironmentFilters.buildPostCode);

  return {
    dir: {
      input: "site"
    }
  };
};
