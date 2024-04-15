module.exports = class ComponentFilters {
    static build(name, components) {
        let returnValue = '';
        let fixedAttributes = '';
        let fixedClasses = '';
        let id = 1;

        components.forEach(component => {
            if (component.name === name && component.usePreview) {
                component.classes.forEach(c => {
                    if (c.type == 'fixed') {
                        fixedClasses += c.value + ' ';
                    }
                });

                component.samples.forEach(sample => {
                    if (sample.usePreview) {
                        returnValue += `<il-content><div class="builder-frame-sample"><h2 class="builder-frame">Sample: ${sample.name}</h2></div></il-content>`;
                        returnValue += `<il-content><h3 class="builder-frame">Default</h3></il-content>`;
                        let outerTag = '';
                        let outerTagEnd = '';
                        if (sample.defaultParentElement != '') {
                            outerTag = `<${sample.defaultParentElement} style='${sample.defaultParentElementStyle}'>`;
                            outerTagEnd = `</${sample.defaultParentElement}>`;
                        }
                        let tag = `<${component.tagName} ${fixedAttributes} ${ComponentFilters.fixId(sample.defaultAttributeText, id)} class='${fixedClasses}'>`;
                        let tagEnd = `</${component.tagName}>`;
                        returnValue += outerTag + tag + ComponentFilters.fixId(sample.text, id) + tagEnd + outerTagEnd;
                        id = id + 1;
                        component.classes.forEach(c => {
                            if (c.type == 'dropdown') {
                                c.values.forEach(v => {
                                    if (v != '') {
                                        returnValue += `<il-content><h3 class="builder-frame">${c.description}: ${v}</h3></il-content>`;
                                        let tag = `<${component.tagName} ${fixedAttributes} ${ComponentFilters.fixId(sample.defaultAttributeText, id)} class='${fixedClasses} ${v}'>`;
                                        returnValue += outerTag + tag + ComponentFilters.fixId(sample.text, id) + tagEnd + outerTagEnd;
                                        id = id + 1;
                                    }
                                });
                            }
                        });
                        component.themes.forEach(theme => {
                            returnValue += `<il-content><h3 class="builder-frame">Theme: ${theme}</h3></il-content>`;
                            let tag = `<${component.tagName} ${fixedAttributes} ${ComponentFilters.fixId(sample.defaultAttributeText, id)} class='${fixedClasses} ${theme}'>`;
                            returnValue += outerTag + tag + ComponentFilters.fixId(sample.text, id) + tagEnd + outerTagEnd;
                            id = id + 1;
                            component.classes.forEach(c => {
                                if (c.type == 'dropdown') {
                                    c.values.forEach(v => {
                                        if (v != '') {
                                            returnValue += `<il-content><h3 class="builder-frame">Theme: ${theme} and ${c.description}: ${v}</h3></il-content>`;
                                            let tag = `<${component.tagName} ${fixedAttributes} ${ComponentFilters.fixId(sample.defaultAttributeText, id)} class='${fixedClasses} ${theme} ${v}'>`;
                                            returnValue += outerTag + tag + ComponentFilters.fixId(sample.text, id) + tagEnd + outerTagEnd;
                                            id = id + 1;
                                        }
                                    });
                                }
                            });
                        });
                    }
                });

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

    static fixId(item, id) {
        return item.replaceAll('\"example-id\"', '\"id' + id + '\"').replaceAll("'example-id'", "'id" + id + "'");
    }
}