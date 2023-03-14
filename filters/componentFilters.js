module.exports = class ComponentFilters {
    static buildDescription(name, components) {
        let returnValue = '';
        components.forEach(component => {
            if (component.slug === name) {
                returnValue = `<p><a href='../${component.slug}-preview/index.html'><br>Preview this component</a> (${component.status})</p>`;
            }
        });
        return returnValue;
    }

    static buildBuilder(name, components) {
        let returnValue = '';
        components.forEach(component => {
            if (component.slug === name) {
                returnValue = `<p><a href='../${component.slug}/index.html'><br>Edit this component</a> (${component.status})</p>`;
            }
        });
        return returnValue;
    }

    static buildIconInformation(name, icons) {
        let returnValue = '';
        icons.forEach(icon => {
            returnValue += '<div class="template-information" data-name="' + icon.ligatures[0] + '">' + icon.ligatures[0] + '</div>'
        });
        return returnValue;
    }

    static buildClassInfo(name, components) {
        let returnValue = '';
        components.forEach(component => {
            if (component.slug === name && component.className != null) {
                returnValue = component.className;
            }
        });
        return returnValue;
    }
}