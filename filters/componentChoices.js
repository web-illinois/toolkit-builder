module.exports = class ComponentChoices {
    static buildSamples(name, components) {
        let returnValue = '';
        let component = ComponentChoices.getComponent(name, components);
        if (component != null && component.samples != null) {
            component.samples.forEach(sample => {
                returnValue += `<div class="template-information" data-name="${sample.name}">${sample.text}</div>`;
                returnValue += `<div class="template-information-parent" data-name="${sample.name}-parent">${sample.defaultParentElement}</div>`;
                returnValue += `<div class="template-information-parent-style" data-name="${sample.name}-parent-style">${sample.defaultParentElementStyle}</div>`;
                returnValue += `<div class="template-information-attributes" data-name="${sample.name}-attributes">${sample.defaultAttributeText}</div>`;
            });
        } 
        return returnValue;
    }

    static buildThemes(name, components) {
        let component = ComponentChoices.getComponent(name, components);
        if (component != null && component.themes != null) {
            let returnValue = '<div class="theme-option-group"><h3><label for="theme-options">Themes</label></h3>';
            returnValue += '<select name="theme-options" id="theme-options" onchange="build();">';
            returnValue += `<option value="">No theme</option>`;
            component.themes.forEach(theme => {
                returnValue += `<option value="${theme}">${theme}</option>`;
            });
            returnValue += '</select></div>';
            return returnValue;
        } else {
            return "";
        }
    }

    static buildClasses(name, components) {
        let component = ComponentChoices.getComponent(name, components);
        if (component != null && component.classes != null) {
            let returnValue = '<div id="class-list">';
            let showHeader = false;
            component.classes.forEach((c, i) => {
                if (c.type == "dropdown") {
                    returnValue += `<div><label for="class-${i}">${c.description}</label><select name="class-${i}" id="class-${i}" onchange="build();">`;
                    c.values.forEach(v => returnValue += `<option value="${v}">${v}</option>`);
                    returnValue += "</select></div>";
                    showHeader = true;
                } else if (c.type == "fixed") {
                    returnValue = returnValue + `<input type="hidden" name="class-${i}" id="class-${i}" value="${c.value}">`;
                } else if (c.type == "text") {
                    returnValue += `<div><label for="class-${i}">${c.description}</label><input type="text" name="class-${i}" id="class-${i}" onchange="build();" value="${c.value}"></div>`
                    showHeader = true;
                }
            });
            if (showHeader) {
                returnValue = '<h3>Classes</h3>' + returnValue;
            }
            returnValue += '</div>';
            return returnValue;
        } else {
            return "";
        }
    }

    static buildAttributes(name, components) {
        let component = ComponentChoices.getComponent(name, components);
        if (component != null && component.attributes != null) {
            let returnValue = '<div id="options">';
            let showHeader = false;
            component.attributes.forEach((c, i) => {
                if (c.type == "dropdown") {
                    returnValue += `<div><label for="${c.name}">${c.description}</label><select name="${c.name}" id="${c.name}" onchange="build();">`;
                    c.values.forEach(v => returnValue += `<option value="${v}">${v}</option>`);
                    returnValue += "</select></div>";
                    showHeader = true;
                } else if (c.type == "fixed") {
                    returnValue = returnValue + `<input type="hidden" name="class-${i}" id="class-${i}" value="${c.value}">`;
                } else if (c.type == "text") {
                    returnValue += `<div><label for="${c.name}">${c.description}</label><input type="text" name="${c.name}" id="${c.name}" onchange="build();" value="${c.value}"></div>`
                    showHeader = true;
                }
            });
            if (showHeader) {
                returnValue = '<h3>Attributes</h3>' + returnValue;
            }
            returnValue += '</div>';
            return returnValue;
        } else {
            return "";
        }
    }

    static buildCssVariables(name, components) {
        let component = ComponentChoices.getComponent(name, components);
        if (component != null && component.cssVariables != null) {
            let returnValue = '<h3>CSS Variables (advanced use only)</h3><div id="cssVariable-list">';
            component.cssVariables.forEach((c, i) => {
                returnValue += `<div><label for="css-${i}">${c.name}</label><input type="text" data-name="${c.name}" name="css-${i}" id="css-${i}" onchange="build();" value=""></div>`;
            });
            returnValue += '</div>';
            return returnValue;
        } else {
            return "";
        }
    }

    static getTagName(name, components) {
        let component = ComponentChoices.getComponent(name, components);
        return component != null && component.tagName != null ? component.tagName : "";
    }

    static getDefaultParentElement(name, components) {
        let component = ComponentChoices.getComponent(name, components);
        return component != null && component.defaultParentElement != null ? component.defaultParentElement : "";
    }

    static getDefaultParentElementStyle(name, components) {
        let component = ComponentChoices.getComponent(name, components);
        return component != null && component.defaultParentElementStyle != null ? component.defaultParentElementStyle : "";
    }

    // private
    static getComponent(name, components) {
        let returnValue = null;
        components.forEach(component => {
            if (component.name === name) {
                returnValue = component;
            }
        });
        return returnValue;
    }
}