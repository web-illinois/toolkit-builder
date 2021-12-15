module.exports = class Attributes {
    static build(name, components) {
        let returnValue = '';
        components.forEach(component => {
            if (component.slug === name) {
                if (component.attributes != null) {
                    component.attributes.forEach(attribute => {
                        if (attribute.type == "dropdown") {
                            returnValue = returnValue + `<label>${attribute.name} (<em>${attribute.description}</em>)<select name="${attribute.name}" id="${attribute.name}">`;
                            attribute.values.forEach(v => returnValue = returnValue + `<option value="${v}">${v}</option>`);
                            returnValue = returnValue + "</select></label>";
                        } else if (attribute.type == "string") {
                            returnValue = returnValue + `<label>${attribute.name} (<em>${attribute.description}</em>)<input class="single" name="${attribute.name}" id="${attribute.name}" value="${attribute.value}"></label>`;
                        } else if (attribute.type == "url") {
                            returnValue = returnValue + `<label>${attribute.name} (<em>${attribute.description}</em>)<input class="single" name="${attribute.name}" id="${attribute.name}" value="${attribute.value}"><a href="#" class="checklink" onclick="return checkLink('${attribute.name}');">Test link</a></label>`;
                        } else if (attribute.type == "length") {
                            let lengthValue = attribute.value.replace('px', '');
                            returnValue = returnValue + `<label>${attribute.name} (<em>${attribute.description}</em>)
                    <input class="length" name="${attribute.name}" id="${attribute.name}" value="${lengthValue}">
                    <select class="unit" name="${attribute.name}unit" id="${attribute.name}unit" ><option value="px">px</option><option value="rem">rem</option><option value="em">em</option><option value="%">%</option></select></label>`;
                        } else if (attribute.type == "fixed") {
                            returnValue = returnValue + `<input type="hidden" name="${attribute.name}" id="${attribute.name}" value="${attribute.value}">`;
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