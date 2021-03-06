module.exports = class TableOfContents {

    static buildEnvironmentList(title, environments) {
        let returnValue = '<h2>Web Component Development Environment</h2> <ul>';
        environments.forEach(environment => {
            if (environment.type != 'production') {
                returnValue += `<li><a href='/development/${environment.slug}/index.html'>${environment.name}</a></li>`;
            }
        });
        returnValue += `</ul>`;
        return returnValue;
    }

    static buildProduction(title, components, environments) {
        let returnValue = '';
        environments.forEach(environment => {
            if (environment.type == 'production') {
                returnValue = "<h2>Web Component List for " + environment.name + "</h2><table><caption class='il-invisible'>Component Information</caption>";
                returnValue += "<tr><th scope='col'>Name</th><th scope='col'>Documentation</th>";
        
                returnValue += "<th scope='col'>Preview</th>";
        
                returnValue += "<th scope='col'>Build</th>";
        
                returnValue += `<tr><th scope='row'>Setup Information (start with this)</th>`;
                returnValue += `<td><a href='https://github.com/web-illinois/toolkit/wiki/Recommended-HTML-Header'>Read Documentation</a></td>`;
                returnValue += `<td> -- </td><td><a href='/${environment.slug}/index.html'>Get HTML Header</a></td>`;
        
                returnValue += "</tr>";
                components.forEach(c => {
                    if (c.environment == null || c.environment == '' || c.environment == environment.type) {
                        returnValue += `<tr><th scope='row'>${c.title}</th>`;
                        returnValue += `<td><a href='${c.documentation}'>Read Documentation</a></td>`;
                        if (c.preview != null && c.preview) {
                            returnValue += `<td><a href='/${environment.slug}/${c.slug}-preview/index.html'>Preview</a></td>`;
                        } else {
                            returnValue += '<td> -- </td>';
                        }
                        returnValue += `<td><a href='/${environment.slug}/${c.slug}/index.html'>Build</a></td>`;
                        returnValue += "</tr>";
                    }
                });
                returnValue += "</table>";
            }
        });
        return returnValue;
    }

    static build(environment, components) {
        let returnValue = "<h2>Web Component List for " + environment.name + "</h2><table><caption class='il-invisible'>Component Information</caption>";
        returnValue += "<tr><th scope='col'>Name</th><th scope='col'>Documentation</th>";

        returnValue += "<th scope='col'>Preview</th>";

        returnValue += "<th scope='col'>Build</th>";

        returnValue += `<tr><th scope='row'>Setup Information (start with this)</th>`;
        returnValue += `<td><a href='https://github.com/web-illinois/toolkit/wiki/Recommended-HTML-Header'>Read Documentation</a></td>`;
        returnValue += `<td> -- </td><td><a href='/${environment.slug}/index.html'>Get HTML Header</a></td>`;

        returnValue += "</tr>";
        components.forEach(c => {
            if (c.environment == null || c.environment == '' || c.environment == environment.type) {
                returnValue += `<tr><th scope='row'>${c.title}</th>`;
                returnValue += `<td><a href='${c.documentation}'>Read Documentation</a></td>`;
                if (c.preview != null && c.preview) {
                    returnValue += `<td><a href='/${environment.slug}/${c.slug}-preview/index.html'>Preview</a></td>`;
                } else {
                    returnValue += '<td> -- </td>';
                }
                returnValue += `<td><a href='/${environment.slug}/${c.slug}/index.html'>Build</a></td>`;
                returnValue += "</tr>";
            }
        });
        returnValue += "</table>";
        return returnValue;
    }
}