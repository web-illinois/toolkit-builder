module.exports = class ComponentFilters {
    static build(name, componentName, components) {
        let returnValue = '';
        let attributes = '';
        let classes = '';
        components.forEach(component => {
            if (component.slug === name) {
                let componentSampleText = component.sample;

                if (component.attributes != null) {
                    component.attributes.forEach((c, i) => {
                        if (c.depreciated != null && !c.depreciated && (c.type == "url" || c.type == "string")) {
                            attributes = attributes + `${c.name}="${c.value}" `;
                        } 
                    });
                }

                if (component.classes != null) {
                    component.classes.forEach((c, i) => {
                        if (c.type == "fixed" || c.type == "string") {
                            classes = classes + `${c.value} `;
                        } 
                    });
                }
                
                if (component.attributes != null) {
                    component.attributes.forEach((c, i) => {
                        if (c.depreciated != null && !c.depreciated && c.type == "dropdown") {
                            c.values.forEach((v, i2) => {
                                if (v != '') {
                                    returnValue = returnValue + `<div class='il-formatted header-info'><h2>Attribute: ${c.name} is ${v}</h2></div>`;
                                    returnValue = returnValue + `<${componentName} ${attributes} ${c.name}="${v}" class="${classes}">${componentSampleText}</${componentName}>`;
                                }
                            });
                        } 
                    });
                }

                let constantClass = false;
                if (component.classes != null) {
                    component.classes.forEach((c, i) => {
                        if (c.type == "dropdown") {
                            if (!constantClass) {
                                constantClass = c.values;
                                c.values.forEach((v, i2) => {
                                    if (v != '') {
                                        returnValue = returnValue + `<div class='il-formatted header-info'><h2>Class: ${v}</h2></div>`;
                                        returnValue = returnValue + `<${componentName} ${attributes} class="${classes}${v.trim()}">${componentSampleText}</${componentName}>`;
                                    } else {
                                        returnValue = returnValue + `<div class='il-formatted header-info'><h2>No class information</h2></div>`;
                                        returnValue = returnValue + `<${componentName} ${attributes} class="${classes}">${componentSampleText}</${componentName}>`;
                                    }
                                });
                            } else {
                                constantClass.forEach((cclass, iclass) => {
                                    c.values.forEach((v, i2) => {
                                        if (v != '') {
                                            returnValue = returnValue + `<div class='il-formatted header-info'><h2>Class: ${cclass} ${v}</h2></div>`;
                                            returnValue = returnValue + `<${componentName} ${attributes} class="${classes} ${v.trim()} ${cclass.trim()}">${componentSampleText}</${componentName}>`;
                                        }
                                    });
                                });
                            }
                        } 
                    });
                }
                if (returnValue == '') {
                    returnValue = returnValue + `<div class='il-formatted header-info'><h2>Default Information</h2></div>`;
                    returnValue = returnValue + `<${componentName} ${attributes} class="${classes}">${componentSampleText}</${componentName}>`;
                }
            }
        });
        return returnValue;
    }

    static icons(name, componentName, components, icons) {
        let returnValue = '';
        let attributes = '';
        let classes = '';
        components.forEach(component => {
            if (component.slug === name) {
                if (component.attributes != null) {
                    component.attributes.forEach((c, i) => {
                        if (c.type == "url" || c.type == "string") {
                            attributes = attributes + `${c.name}="${c.value}" `;
                        } 
                    });
                }

                if (component.classes != null) {
                    component.classes.forEach((c, i) => {
                        if (c.type == "fixed" || c.type == "string") {
                            classes = classes + `${c.value} `;
                        } 
                    });
                }
                
                if (component.classes != null) {
                    component.classes.forEach((c, i) => {
                        if (c.type == "dropdown") {
                            c.values.forEach((v, i2) => {
                                if (v != '') {
                                    returnValue = returnValue + `<div class='il-formatted header-info'><h2>Class: ${v}</h2></div><div class='grid'>`;
                                    icons.forEach((icon, i3) => {
                                        returnValue = returnValue + `<div><div ${attributes} class="${classes}${v.trim()}">${icon.ligatures[0]}</div><div>${icon.ligatures[0]}</div></div>`;
                                    });
                                    returnValue = returnValue + `</div>`;
                                }
                            });
                        } 
                    });
                }

            }
        });
        return returnValue;
    }
}