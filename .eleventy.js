const EnvironmentFilters = require("./filters/environmentFilters");
const ComponentFilters = require("./filters/componentFilters");
const TableOfContents = require("./filters/tableOfContents");
const Attributes = require("./filters/attributes");
const ClassList = require("./filters/classList");
const Styles = require("./filters/styles");
const ColorCheck = require("./filters/colorCheck");
const Preview = require("./filters/preview");
const PreviewAll = require("./filters/previewAll");
const Theme = require("./filters/theme");

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

  // Create description, builder, class information, icons, attributes, styles for components
  eleventyConfig.addFilter("addDescription", ComponentFilters.buildDescription);

  eleventyConfig.addFilter("addBuilder", ComponentFilters.buildBuilder);

  eleventyConfig.addFilter("addIconList", ComponentFilters.buildIconInformation);

  eleventyConfig.addFilter("addClassInfo", ComponentFilters.buildClassInfo);

  eleventyConfig.addFilter("buildAttributes", Attributes.build);

  eleventyConfig.addFilter("buildClassListHighlighted", ClassList.buildHighlighted);
  
  eleventyConfig.addFilter("buildClassList", ClassList.build);

  eleventyConfig.addFilter("buildStyles", Styles.build);

  // Create environment list for dev/legacy
  eleventyConfig.addFilter("buildEnvironmentList", TableOfContents.buildEnvironmentList);

  // Create table of contents (for production and all dev/legacy environments)
  eleventyConfig.addFilter("buildTableOfContents", TableOfContents.build);
  
  eleventyConfig.addFilter("buildProductionTableOfContents", TableOfContents.buildProduction);

  // Build header information for environment - main, pre, and post
  eleventyConfig.addFilter("buildHeader", EnvironmentFilters.buildHeader);

  eleventyConfig.addFilter("buildPrecode", EnvironmentFilters.buildPreCode);

  eleventyConfig.addFilter("buildPostcode", EnvironmentFilters.buildPostCode);

  // Build color array for color accessibility tester
  eleventyConfig.addFilter("addColors", ColorCheck.build);

  // Build previews
  eleventyConfig.addFilter("preview", Preview.build);

  eleventyConfig.addFilter("previewIcons", Preview.icons);

  // Build themes (il-orange, il-blue, etc.)
  eleventyConfig.addFilter("theme", Theme.build);

  // Build all components
  eleventyConfig.addFilter("previewAll", PreviewAll.buildAll);

  eleventyConfig.addFilter("previewDefault", PreviewAll.buildDefault);
  

  return {
    dir: {
      input: "site"
    }
  };
};
