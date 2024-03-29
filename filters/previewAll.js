module.exports = class Preview {
    static buildAll(name, components) {
        let returnValue = '';
        components.forEach(component => {
            let attributes = '';
            let classes = '';

            if (component.fullname && component.sample) {
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

                let componentTitle = component.slug;
                let componentName = component.fullname;
                let componentSampleText = component.sample;
                let componentParentClass = '';
                if (component.className) {
                    componentParentClass = component.className;
                }

                returnValue = returnValue + `<div class='il-formatted headingarea text'><h2>Base Information for ${componentTitle}</h2> <a href="/prod/${componentTitle}/index.html">(go to production component)</a></div>`;
                returnValue = returnValue + `<div class='${componentParentClass}'><${componentName} ${attributes} class="${classes}">${componentSampleText}</${componentName}></div>`;

                if (component.attributes != null) {
                    component.attributes.forEach((c, i) => {
                        if (c.depreciated != null && !c.depreciated && c.type == "dropdown") {
                            c.values.forEach((v, i2) => {
                                if (v != '') {
                                    returnValue = returnValue + `<div class='il-formatted headingarea text'><h3>${componentName} -- Attribute: ${c.name} is ${v}</h3></div>`;
                                    returnValue = returnValue + `<div class='${componentParentClass}'><${componentName} ${attributes} ${c.name}="${v}" class="${classes}">${componentSampleText}</${componentName}></div>`;
                                }
                            });
                        } 
                    });
                }

                if (component.classes != null) {
                    component.classes.forEach((c, i) => {
                        if (c.type == "dropdown") {
                            c.values.forEach((v, i2) => {
                                if (v != '') {
                                    returnValue = returnValue + `<div class='il-formatted headingarea text'><h3>${componentName} -- Class: ${v}</h3></div>`;
                                    returnValue = returnValue + `<div class='${componentParentClass}'><${componentName} ${attributes} class="${classes}${v.trim()}">${componentSampleText}</${componentName}></div>`;
                                } 
                            });
                        } 
                    });
                }
            }
        });
        return returnValue;
    }

    static buildDefault(name, components) {
        let returnValue = '';
        components.forEach(component => {
            let attributes = '';
            let classes = '';

            if (component.fullname && component.sample) {
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

                let componentTitle = component.slug;
                let componentName = component.fullname;
                let componentSampleText = component.sample;
                let componentParentClass = '';
                if (component.className) {
                    componentParentClass = component.className;
                }

                returnValue = returnValue + `<div class='il-formatted headingarea text'><h2>Base Information for ${componentTitle}</h2> <a href="/prod/${componentTitle}/index.html">(go to production component)</a></div>`;
                returnValue = returnValue + `<div class='${componentParentClass}'><${componentName} ${attributes} class="${classes}">${componentSampleText}</${componentName}></div>`;
            }
        });
        return returnValue;
    }
}