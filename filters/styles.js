module.exports = class Styles {
    static build(name, components, colors) {
        let returnValue = '';

        components.forEach(component => {
            if (component.slug === name) {
                if (component.styles != null) {
                    component.styles.forEach(styleInfo => {
                        if (styleInfo.type == "dropdown") {
                            returnValue = returnValue + `<label>${styleInfo.name} (<em>${styleInfo.description}</em>)<br>`;
                            returnValue = returnValue + `<input name="${styleInfo.name}" id="${styleInfo.name}">`;
                            returnValue = returnValue + `<select id="${styleInfo.name}-options" onchange="document.getElementById('${styleInfo.name}').value = this.value">`;
                            returnValue = returnValue + `<option value="">Blank</option>`;
                            styleInfo.values.forEach(v => returnValue = returnValue + `<option value="${v}">${v}</option>`);
                            returnValue = returnValue + "</select></label>";
                        } else if (styleInfo.type == "colors") {
                            returnValue = returnValue + `<label>${styleInfo.name} (<em>${styleInfo.description}</em>)<br>`;
                            returnValue = returnValue + `<input name="${styleInfo.name}" id="${styleInfo.name}">`;
                            returnValue = returnValue + `<select id="${styleInfo.name}-options" onchange="document.getElementById('${styleInfo.name}').value = this.value">`;
                            returnValue = returnValue + `<option value="">Blank</option>`;
                            returnValue = returnValue + `<option value="white">white</option>`;
                            returnValue = returnValue + `<option value="black">black</option>`;
                            colors.forEach(c => returnValue = returnValue + `<option value="var(--${c.name})">${c.name}</option>`);
                            returnValue = returnValue + "</select></label>";
                        } else if (styleInfo.type == "string") {
                            returnValue = returnValue + `<label>${styleInfo.name} (<em>${styleInfo.description}</em>)<input class="single" name="${styleInfo.name}" id="${styleInfo.name}" value="${styleInfo.value}"></label>`;
                        } else if (styleInfo.type == "url") {
                            returnValue = returnValue + `<label>${styleInfo.name} (<em>${styleInfo.description}</em>)<input class="single" name="${styleInfo.name}" id="${styleInfo.name}" value="${styleInfo.value}"><a href="#" class="checklink" onclick="return checkLink('${styleInfo.name}');">Test link</a></label>`;
                        } else if (styleInfo.type == "length") {
                            let lengthValue = styleInfo.value.replace('px', '');
                            returnValue = returnValue + `<label>${styleInfo.name} (<em>${styleInfo.description}</em>)
                                <input class="length" name="${styleInfo.name}" id="${attribute.name}" value="${lengthValue}">
                                <select class="unit" name="${styleInfo.name}unit" id="${styleInfo.name}unit" ><option value="px">px</option><option value="rem">rem</option><option value="em">em</option><option value="%">%</option></select></label>`;
                        } else if (styleInfo.type == "fixed") {
                            returnValue = returnValue + `<input type="hidden" name="${styleInfo.name}" id="${styleInfo.name}" value="${styleInfo.value}">`;
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