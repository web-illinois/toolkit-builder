module.exports = class TableOfContents {

    static build(environmenttype, components, environments) {
        let returnValue = "<h3>Web Component List for " + environmenttype + "</h3><table><caption class='il-invisible'>Component Information</caption>";
        returnValue += "<tr><th scope='col'>Name</th><th scope='col'>Documentation</th>";

        if (environmenttype == "production") {
            returnValue += "<th scope='col'>Preview</th>";
        }

        environments.forEach(e => {
            if (environmenttype == e.type) {
                returnValue += "<th scope='col'>" + e.name + "</th>";
            }
        });

        returnValue += `<tr><th scope='row'>Setup Information</th>`;
        returnValue += `<td><a href='https://github.com/web-illinois/toolkit/wiki/Recommended-HTML-Header'>Read Documentation</a></td><td> -- </td>`;
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
                if (environmenttype == "production") {
                    if (c.preview != null && c.preview) {
                        returnValue += `<td><a href='/preview/${c.slug}/index.html'>Preview</a></td>`;
                    } else {
                        returnValue += '<td> -- </td>';
                    }
                }
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
    }
}