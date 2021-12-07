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
            } else if (attribute.type == "string") {
              returnValue = returnValue + `<label>${attribute.name} (<em>${attribute.description}</em>)
                <input name="${attribute.name}" id="${attribute.name}" value="${attribute.value}"></label>`;
            } else if (attribute.type == "url") {
              returnValue = returnValue + `<label>${attribute.name} (<em>${attribute.description}</em>)
                <input name="${attribute.name}" id="${attribute.name}" value="${attribute.value}"><a href="#" class="checklink" onclick="return checkLink('${attribute.name}');">Test link</a></label>`;
            } else if (attribute.type == "length") {
              let lengthValue = attribute.value.replace('px', '');
              returnValue = returnValue + `<label>${attribute.name} (<em>${attribute.description}</em>)
                <input class="length" name="${attribute.name}" id="${attribute.name}" value="${lengthValue}">
                <select class="unit" name="${attribute.name}unit" id="${attribute.name}unit" ><option value="px">px</option><option value="rem">rem</option><option value="em">em</option><option value="%">%</option></select></label>`;
            } else if (attribute.type == "fixed") {
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

  eleventyConfig.addFilter("buildStyles", function (name, components) {
    let returnValue = '';
    components.forEach(component => {
      if (component.slug === name) {
        if (component.styles != null) {
          component.styles.forEach(styleInfo => {
            if (styleInfo.type == "dropdown") {
              returnValue = returnValue + `<label>${styleInfo.name} (<em>${styleInfo.description}</em>)<br>`;
              returnValue = returnValue + `<input name="${styleInfo.name}" id="${styleInfo.name}">`;
              returnValue = returnValue + `<select id="${styleInfo.name}-options" onchange="document.getElementById('${styleInfo.name}').value = this.value">`;
              returnValue = returnValue + `<option value="">Blank</option>`;
              styleInfo.values.forEach(v => returnValue = returnValue + `<option value="${v}">${v}</option>`);
              returnValue = returnValue + "</select></label>";
            } else if (styleInfo.type == "string") {
              returnValue = returnValue + `<label>${styleInfo.name} (<em>${styleInfo.description}</em>)
                <input name="${styleInfo.name}" id="${styleInfo.name}" value="${styleInfo.value}"></label>`;
            } else if (styleInfo.type == "url") {
              returnValue = returnValue + `<label>${styleInfo.name} (<em>${styleInfo.description}</em>)
                <input name="${styleInfo.name}" id="${styleInfo.name}" value="${styleInfo.value}"><a href="#" class="checklink" onclick="return checkLink('${styleInfo.name}');">Test link</a></label>`;
            } else if (styleInfo.type == "length") {
              let lengthValue = styleInfo.value.replace('px', '');
              returnValue = returnValue + `<label>${styleInfo.name} (<em>${styleInfo.description}</em>)
                <input class="length" name="${styleInfo.name}" id="${attribute.name}" value="${lengthValue}">
                <select class="unit" name="${styleInfo.name}unit" id="${styleInfo.name}unit" ><option value="px">px</option><option value="rem">rem</option><option value="em">em</option><option value="%">%</option></select></label>`;
            } else if (styleInfo.type == "fixed") {
              returnValue = returnValue + `<input type="hidden" name="${styleInfo.name}" id="${styleInfo.name}" value="${styleInfo.value}">`;
            }
          });
        } else {
          returnValue = "<p>N/A</p>";
        }
      }
    });
    return returnValue;
  });

  eleventyConfig.addFilter("buildTableOfContents", function (environmenttype, components, environments) {
    let returnValue = "<h3>Web Component List for " + environmenttype + "</h3><table><caption class='il-invisible'>Component Information</caption>";
    returnValue += "<tr><th scope='col'>Name</th><th scope='col'>Documentation</th>";

    environments.forEach(e => {
      if (environmenttype == e.type) {
        returnValue += "<th scope='col'>" + e.name + "</th>";
      }
    });

    returnValue += `<tr><th scope='row'>Setup Information</th>`;
    returnValue += `<td><a href='https://github.com/web-illinois/toolkit/wiki/Recommended-HTML-Header'>Read Documentation</a></td>`;
    environments.forEach(e => {
      if (environmenttype == e.type) {
        returnValue += `<td><a href='/${e.slug}/index.html'>Get Header</a></td>`;
      }
    });

    returnValue += "</tr>";
    components.forEach(c => {
      if (c.environment == null || c.environment == '' || c.environment == environmenttype) {
        returnValue += `<tr><th scope='row'>${c.title}</th>`;
        returnValue += `<td><a href='${c.documentation}'>Read Documentation</a></td>`;
        environments.forEach(e => {
          if (environmenttype == e.type) {
            returnValue += `<td><a href='/${e.slug}/${c.slug}/index.html'>Build</a></td>`;
          }
        });
        returnValue += "</tr>";
      }
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

  eleventyConfig.addFilter("buildPrecode", function (name, environments) {
    let returnValue = '';
    environments.forEach(environment => {
      if (environment.name === name) {
        returnValue = environment.externalCodePre.replace(/</gi, '&lt;').replace(/>/gi, '&gt;<br>');
      }
    });
    return returnValue;
  });

  eleventyConfig.addFilter("buildPostcode", function (name, environments) {
    let returnValue = '';
    environments.forEach(environment => {
      if (environment.name === name) {
        returnValue = environment.externalCodePost.replace(/</gi, '&lt;').replace(/>/gi, '&gt;<br>');
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
