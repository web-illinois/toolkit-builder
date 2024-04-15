module.exports = class TableOfContents {
    static buildComponents(title, components, currentEnvironment) {
        let returnValue = "<table><caption class='il-invisible'>Component Information</caption>";
        returnValue += "<tr><th scope='col'>Name</th>";
        returnValue += "<th scope='col'>Description</th>";
        returnValue += "<th scope='col'>Build</th>";
        returnValue += "<th scope='col'>Notes</th></tr>";
        components.forEach(c => {
            if (c.title != null) {
                returnValue += `<tr><th scope='row'>${c.title}`;
                if (currentEnvironment.flagNewComponents && c.version != null && currentEnvironment.componentVersion == c.version) {
                    returnValue += ' <span class="new-component"> (new component)</span>';
                }
                returnValue += '</th>';
                if (c.description != null && c.description != '') {
                    returnValue += `<td>${c.description}</td>`;
                } else {
                    returnValue += `<td></td>`;
                }
                if (c.name != null && c.tagName != null && c.type != null) {
                    returnValue += `<td><a href='builder-basic/${c.name}/index.html'>Basic</a> / <a href='builder/${c.name}/index.html'>Advanced</a></td>`;
                } else {
                    returnValue += '<td>See notes</td>';
                }
                returnValue += `<td><a href='notes/${c.name}/index.html'>Notes</a></td>`;
                returnValue += "</tr>";
            }
        });
        returnValue += "</table>";
        return returnValue;
    }

    static buildPreviews(title, themes) {
        let returnValue = "<ul>";
        returnValue += '<li><a href="preview-default/index.html">Default version of all the components</a></li>';
        returnValue += '<li><a href="preview-all/index.html">All variations of all the components</a> (long)</li>';
        themes.forEach(t => { returnValue += `<li><a href='themes/${t.name}/index.html'><strong>'${t.name}'</strong> theme</a></li>`; });
        returnValue += "</ul>";
        return '<p>Still working on this</p>';
        return returnValue;
    }
}
