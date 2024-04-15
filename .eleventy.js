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
const ComponentChoices = require("./filters/componentChoices");

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

  // OLD -- Create description, builder, class information, icons, attributes, styles for components
  eleventyConfig.addFilter("addDescription", ComponentFilters.buildDescription);

  eleventyConfig.addFilter("addBuilder", ComponentFilters.buildBuilder);

  eleventyConfig.addFilter("addIconList", ComponentFilters.buildIconInformation);

  eleventyConfig.addFilter("addClassInfo", ComponentFilters.buildClassInfo);

  eleventyConfig.addFilter("buildClassListHighlighted", ClassList.buildHighlighted);
  
  eleventyConfig.addFilter("buildClassList", ClassList.build);

  eleventyConfig.addFilter("buildStyles", Styles.build);

  // Used in site homepage 
  eleventyConfig.addFilter("buildComponentTableOfContents", TableOfContents.buildComponents);

  // Used in site homepage
  eleventyConfig.addFilter("buildPreviewTableOfContents", TableOfContents.buildPreviews);

  // Used to build sample for component
  eleventyConfig.addFilter("buildSamples", ComponentChoices.buildSamples);

  // Used to build themes for component
  eleventyConfig.addFilter("buildThemes", ComponentChoices.buildThemes);

  // Used to build classes, attributes, css variables for component
  eleventyConfig.addFilter("buildClasses", ComponentChoices.buildClasses);

  eleventyConfig.addFilter("buildAttributes", ComponentChoices.buildAttributes);

  eleventyConfig.addFilter("buildCssVariables", ComponentChoices.buildCssVariables);

  // Used to get tag name for component
  eleventyConfig.addFilter("getTagName", ComponentChoices.getTagName);

  // Used to get tag name for component
  eleventyConfig.addFilter("getDefaultParentElement", ComponentChoices.getDefaultParentElement);

  // Used to get tag name for component
  eleventyConfig.addFilter("getDefaultParentElementStyle", ComponentChoices.getDefaultParentElementStyle);

  // OLD -- Build header information for environment - main, pre, and post
  eleventyConfig.addFilter("buildHeader", EnvironmentFilters.buildHeader);

  eleventyConfig.addFilter("buildPrecode", EnvironmentFilters.buildPreCode);

  eleventyConfig.addFilter("buildPostcode", EnvironmentFilters.buildPostCode);

  // OLD -- Build color array for color accessibility tester
  eleventyConfig.addFilter("addColors", ColorCheck.build);

  // Used to preview for component
  eleventyConfig.addFilter("preview", Preview.build);

  // OLD -- Build previews
  eleventyConfig.addFilter("previewIcons", Preview.icons);

  // OLD -- Build themes (il-orange, il-blue, etc.)
  eleventyConfig.addFilter("theme", Theme.build);

  // OLD -- Build all components
  eleventyConfig.addFilter("previewAll", PreviewAll.buildAll);

  eleventyConfig.addFilter("previewDefault", PreviewAll.buildDefault);
  

  return {
    dir: {
      input: "site",
      output: "_site"
    }
  };
};
