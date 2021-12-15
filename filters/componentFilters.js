module.exports = class ComponentFilters {
    static buildDescription(name, components) {
        let returnValue = '';
        components.forEach(component => {
            if (component.slug === name) {
                returnValue = `<p>${component.description} <a href='${component.documentation}'>Read the full documentation about this component</a>.</p>`;
            }
        });
        return returnValue;
    }
}