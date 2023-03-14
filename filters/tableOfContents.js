module.exports = class TableOfContents {

    static buildEnvironmentList(title, environments) {
        let returnValue = '<h2>Web Component Alternate Environment List</h2> <table><caption class="il-invisible">Environment Information</caption>';
        returnValue += "<tr><th scope='col'>Name</th><th scope='col'>Type</th><th scope='col'>Environment Details</th>";
        environments.forEach(environment => {
            if (environment.type != 'production' && environment.slug != 'localhost') {
                returnValue += `<tr><td><a href='/${environment.type}/${environment.slug}/index.html'>${environment.name}</a></td>`;
                returnValue += `<td>${environment.type}</td>`;
                returnValue += `<td><a href='/${environment.slug}/index.html'>View environment details</a></td></tr>`;
            }
        });
        returnValue += `</table>`;
        return returnValue;
    }

    static buildProduction(title, components, environments) {
        let returnValue = '';
        environments.forEach(environment => {
            if (environment.type == 'production') {
                returnValue = "<h2>Web Component List for " + environment.name + "</h2><table><caption class='il-invisible'>Component Information</caption>";
                returnValue += "<tr><th scope='col'>Name</th>";
                returnValue += "<th scope='col'>Preview</th>";
                returnValue += "<th scope='col'>Build</th>";
                returnValue += "<th scope='col'>Introduced</th>";
                returnValue += `<tr><th scope='row'>Setup Information (start with this)</th>`;
                returnValue += `<td> -- </td><td><a href='/${environment.slug}/index.html'>Get HTML Header</a></td><td> -- </td>`;        
                returnValue += "</tr>";
                components.forEach(c => {
                    if (c.environment == null || c.environment == '' || c.environment == environment.type) {
                        returnValue += `<tr><th scope='row'>${c.title}</th>`;
                        if (c.sample != null) {
                            returnValue += `<td><a href='/${environment.slug}/${c.slug}-preview/index.html'>Preview</a></td>`;
                        } else {
                            returnValue += '<td> No preview </td>';
                        }
                        returnValue += `<td><a href='/${environment.slug}/${c.slug}/index.html'>Build</a></td>`;
                        let statusItems = c.status.split(';');
                        if (statusItems.length >= 3) {
                            returnValue += `<td>${statusItems[1].trim()} (${statusItems[2].trim()})</td>`;
                        } else if (statusItems.length >= 2) {
                            returnValue += `<td>${statusItems[1].trim()}</td>`;
                        } else {
                            returnValue += `<td> no information </td>`;
                        }
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
        returnValue += "<tr><th scope='col'>Name</th>";
        returnValue += "<th scope='col'>Preview</th>";
        returnValue += "<th scope='col'>Build</th>";
        returnValue += "<th scope='col'>Introduced</th>";
        returnValue += `<tr><th scope='row'>Setup Information (start with this)</th>`;
        returnValue += `<td> -- </td><td><a href='/${environment.slug}/index.html'>Get HTML Header</a></td><td> -- </td>`;
        returnValue += "</tr>";
        components.forEach(c => {
            if (c.environment == null || c.environment == '' || c.environment == environment.type) {
                returnValue += `<tr><th scope='row'>${c.title}</th>`;
                if (c.sample != null) {
                    returnValue += `<td><a href='/${environment.slug}/${c.slug}-preview/index.html'>Preview</a></td>`;
                } else {
                    returnValue += '<td> No preview </td>';
                }
                returnValue += `<td><a href='/${environment.slug}/${c.slug}/index.html'>Build</a></td>`;
                let statusItems = c.status.split(';');
                if (statusItems.length >= 3) {
                    returnValue += `<td>${statusItems[1].trim()} (${statusItems[2].trim()})</td>`;
                } else if (statusItems.length >= 2) {
                    returnValue += `<td>${statusItems[1].trim()}</td>`;
                } else {
                    returnValue += `<td> no information </td>`;
                }
                returnValue += "</tr>";
            }
        });
        returnValue += "</table>";
        return returnValue;
    }
}