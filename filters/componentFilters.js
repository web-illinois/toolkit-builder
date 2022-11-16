module.exports = class ComponentFilters {
    static buildDescription(name, components) {
        let returnValue = '';
        components.forEach(component => {
            if (component.slug === name) {
                returnValue = `<p>${component.description} <a href='../${component.slug}-preview/index.html'>Preview this component</a> or <a href='${component.documentation}'>read the full documentation about this component</a>.</p>`;
            }
        });
        return returnValue;
    }

    static buildBuilder(name, components) {
        let returnValue = '';
        components.forEach(component => {
            if (component.slug === name) {
                returnValue = `<p>${component.description} <a href='../${component.slug}/index.html'>Edit this component</a> or <a href='${component.documentation}'>read the full documentation about this component</a>.</p>`;
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