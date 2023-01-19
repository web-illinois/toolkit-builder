module.exports = class ClassList {
    static build(name, components) {
        let returnValue = '';
        components.forEach(component => {
            if (component.slug === name) {
                if (component.classes != null) {
                    component.classes.forEach((c, i) => {
                        if (c.type == "dropdown" && !c.highlighted) {
                            returnValue = returnValue + `<label>${c.description}<select name="class-${i}" id="class-${i}" onchange="build();">`;
                            c.values.forEach(v => returnValue = returnValue + `<option value="${v}">${v}</option>`);
                            returnValue = returnValue + "</select></label>";
                        } else if (c.type == "fixed" && !c.highlighted) {
                            returnValue = returnValue + `<input type="hidden" name="class-${i}" id="class-${i}" value="${c.value}">`;
                        }
                    });
                } else {
                    returnValue = "<p>N/A</p>";
                }
            }
        });
        return returnValue;
    }

    static buildHighlighted(name, components) {
        let returnValue = '';
        components.forEach(component => {
            if (component.slug === name) {
                if (component.classes != null) {
                    component.classes.forEach((c, i) => {
                        if (c.type == "dropdown" && c.highlighted) {
                            returnValue = returnValue + `<label>${c.description}<select name="class-${i}" id="class-${i}" onchange="build();"">`;
                            c.values.forEach(v => returnValue = returnValue + `<option value="${v}">${v}</option>`);
                            returnValue = returnValue + "</select></label>";
                        } else if (c.type == "fixed" && c.highlighted) {
                            returnValue = returnValue + `<input type="hidden" name="class-${i}" id="class-${i}" value="${c.value}">`;
                        }
                    });
                } else {
                    returnValue = "<p>N/A</p>";
                }
            }
        });
        return returnValue;
    }
}