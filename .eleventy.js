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

  eleventyConfig.addFilter("addDescription", function (name, components) {
    let returnValue = '';
    components.forEach(component => {
      if (component.slug === name) {
        returnValue = `<p>${component.description} <a href='${component.documentation}'>Read the full documentation about this component</a>.</p>`;
      }
    });
    return returnValue;
  });

  eleventyConfig.addFilter("buildAttributes", function (name, components) {
    let returnValue = '';
    components.forEach(component => {
      if (component.slug === name) {
        if (component.attributes != null) {
          component.attributes.forEach(attribute => {
            if (attribute.type == "dropdown") {
              returnValue = returnValue + `<label>${attribute.name} (<em>${attribute.description}</em>)<select name="${attribute.name}" id="${attribute.name}">`;
              attribute.values.forEach(v => returnValue = returnValue + `<option value="${v}">${v}</option>`);
              returnValue = returnValue + "</select></label>";
            } else if (attribute.type == "url" || attribute.type == "length" || attribute.type == "string") {
              returnValue = returnValue + `<label>${attribute.name} (<em>${attribute.description}</em>)
                <input name="${attribute.name}" id="${attribute.name}" value="${attribute.value}"></label>`;
            } else if (c.type == "fixed") {
              returnValue = returnValue + `<input type="hidden" name="${attribute.name}" id="${attribute.name}" value="${attribute.value}">`;
            }
          });
        } else {
          returnValue = "<p>N/A</p>";
        }
      }
    });
    return returnValue;
  });

  eleventyConfig.addFilter("buildClassList", function (name, components) {
    let returnValue = '';
    components.forEach(component => {
      if (component.slug === name) {
        if (component.classes != null) {
          component.classes.forEach((c, i) => {
            if (c.type == "dropdown") {
              returnValue = returnValue + `<label>${c.description}<select name="class-${i}" id="class-${i}">`;
              c.values.forEach(v => returnValue = returnValue + `<option value="${v}">${v}</option>`);
              returnValue = returnValue + "</select></label>";
            } else if (c.type == "fixed") {
              returnValue = returnValue + `<input type="hidden" name="class-${i}" id="class-${i}" value="${c.value}">`;
            }
          });
        } else {
          returnValue = "<p>N/A</p>";
        }
      }
    });
    return returnValue;
  });

  eleventyConfig.addFilter("buildTableOfContents", function (title, components, environments) {
    let returnValue = "<h3>" + title + "</h3><table><caption class='il-invisible'>Component Information</caption>";
    returnValue += "<tr><th scope='col'>Name</th><th scope='col'>Documentation</th>";

    environments.forEach(e => {
      returnValue += "<th scope='col'>" + e.name + "</th>";
    });

    returnValue += `<tr><th scope='row'>Setup Information</th>`;
    returnValue += `<td><a href='https://github.com/web-illinois/toolkit/wiki/Recommended-HTML-Header'>Read Documentation</a></td>`;
    environments.forEach(e => {
      returnValue += `<td><a href='/${e.slug}/index.html'>Try Out</a></td>`;
    });

    returnValue += "</tr>";
    components.forEach(c => {
      returnValue += `<tr><th scope='row'>${c.title}</th>`;
      returnValue += `<td><a href='${c.documentation}'>Read Documentation</a></td>`;
      environments.forEach(e => {
        returnValue += `<td><a href='/${e.slug}/${c.slug}/index.html'>Try Out</a></td>`;
      });
      returnValue += "</tr>";
    });
    returnValue += "</table>";
    return returnValue;
  });

  eleventyConfig.addFilter("buildHeader", function (name, environments) {
    let returnValue = '';
    environments.forEach(environment => {
      if (environment.name === name) {
        returnValue = `
        &lt;meta charset="UTF-8"&gt;<br>
        &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;<br>
        &lt;link rel="dns-prefetch" href="${environment.prefetch}"&gt;<br>
        &lt;link rel="icon" href="https://cdn.brand.illinois.edu/favicon.ico"&gt;<br>
        &lt;link rel="stylesheet" href="${environment.path}/toolkit.css" media="all"&gt;<br>
        &lt;script src="${environment.path}/toolkit.js"&gt;&lt;/script&gt;
        `;
      }
    });
    return returnValue;
  });


  return {
    dir: {
      input: "site"
    }
  };
};
