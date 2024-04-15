document.addEventListener("DOMContentLoaded", function(event) {
    let templates = document.querySelectorAll('.template-information');
    let templateGroup = document.querySelector('.template-group');
    let templateOptions = document.querySelector('.template-option-group');
    if (templates.length == 0) {
        templateGroup.style.display = 'none';
        templateOptions.style.display = 'none';
    } else {
        templateGroup.style.display = '';
        document.getElementById('template').innerHTML = templates[0].innerHTML;
        document.getElementById('template').value = templates[0].innerHTML;
        let templateParents = document.querySelectorAll('.template-information-parent');
        let templateParentStyles = document.querySelectorAll('.template-information-parent-style');
        let templateAttributeText = document.querySelectorAll('.template-information-attributes');
        if (templateParents.length > 0) {
            document.getElementById('wrapping-html').value = templateParents[0].innerHTML;
            document.getElementById('wrapping-style').value = templateParentStyles[0].innerHTML;
            document.getElementById('attribute-text').value = templateAttributeText[0].innerHTML;
        }
    
        if (templates.length == 1) {
            templateOptions.style.display = 'none';
        } else {
            templateOptions.style.display = '';
            let templateSelectList = document.getElementById('template-options');
            templates.forEach((element, index) => {
                let opt = document.createElement('option');
                opt.value = index;
                opt.innerHTML = element.getAttribute('data-name');
                templateSelectList.append(opt);
            });
        }
    }
    build();
});

function changeTemplate(e) {
    let templates = document.querySelectorAll('.template-information');
    document.getElementById('template').innerHTML = templates[e.value].innerHTML;
    document.getElementById('template').value = templates[e.value].innerHTML;
    let templateParents = document.querySelectorAll('.template-information-parent');
    let templateParentStyles = document.querySelectorAll('.template-information-parent-style');
    let templateAttributeText = document.querySelectorAll('.template-information-attributes');
    if (templateParents.length > 0) {
        document.getElementById('wrapping-html').value = templateParents[e.value].innerHTML;
        document.getElementById('wrapping-style').value = templateParentStyles[e.value].innerHTML;
        document.getElementById('attribute-text').value = templateAttributeText[e.value].innerHTML;
    }
    build();
}

function build() {
    let builder = document.getElementById('builder');
    let buildingCode = document.getElementById('buildingCode');
    let htmlName = document.getElementById('component-name').value;
    builder.innerHTML = '';
    buildingCode.innerHTML = '';

    // create object, add attributes, classes, theme
    let builderObject = document.createElement(htmlName);

    let attributes = document.querySelectorAll('#options input, #options select');
    attributes.forEach(a => { if (a.value != '') builderObject.setAttribute(a.id, a.value) });

    let classList = document.querySelectorAll('#class-list input, #class-list select');
    classList.forEach(c => { if (c.value != '') builderObject.classList.add(c.value) });

    let themeOption = document.getElementById('theme-options');
    if (themeOption != null && themeOption.value != "") { 
        builderObject.classList.add(themeOption.value); 
    }

    var templateAttribute = document.getElementById('attribute-text').value;
    if (templateAttribute != '') {
        let templateArray = templateAttribute.split(" ");
        templateArray.forEach(ta => {
            let templateStringArray = ta.split("=");
            if (templateStringArray.length > 1) {
                builderObject.setAttribute(templateStringArray[0], templateStringArray[1].replaceAll("\"","").replaceAll("'",""));
            } else {
                builderObject.setAttribute(templateStringArray[0], true);
            }
        });
    }

    // add information from template
    builderObject.innerHTML = document.getElementById('template').value;

    // add style information
    let cssStyle = '';
    let cssVariableList = document.querySelectorAll('#cssVariable-list input');
    cssVariableList.forEach(c => { if (c.value != '') cssStyle += c.getAttribute('data-name') + ': ' + c.value + '; '; });

    // check to see if there's a wrapping area - if there isn't and CSS styles are added, create one to add styles
    let parentElement = document.getElementById('wrapping-html').value;
    if (cssStyle != '' && parentElement == '') {
        parentElement = 'div';
    }
    if (parentElement != '') {
        let parentObject = document.createElement(parentElement);
        if (document.getElementById('wrapping-class').value != '') {
            parentObject.classList.add(document.getElementById('wrapping-class').value)
        }
        if (document.getElementById('wrapping-style').value != '') {
            parentObject.style = document.getElementById('wrapping-style').value;
        }
        if (document.getElementById('wrapping-pre').value != '') {
            let parentStyleObject = document.createElement('style');
            parentStyleObject.innerHTML = document.getElementById('wrapping-pre').value;
            parentObject.append(parentStyleObject);
        }
        if (cssStyle != '') {
            let cssElement = document.createElement('style');
            cssElement.innerHTML = htmlName + ' { ' + cssStyle + ' }';
            parentObject.append(cssElement);
        }
        parentObject.append(builderObject);
        builder.append(parentObject);
        if (document.getElementById('wrapping-included').checked) {
            buildingCode.innerText = builder.innerHTML.replace('#builder ', '');
        } else {
            buildingCode.innerText = builderObject.outerHTML;
        }
    } else {
        buildingCode.innerText = builderObject.outerHTML;
        builder.append(builderObject);
        if (cssStyle != '') {
            let cssElement = document.createElement('style');
            cssElement.innerHTML = '#builder ' + document.getElementById('component-name').value + ' { ' + cssStyle + ' }';
            builder.append(cssElement);
        }
    }
}

function buildNewWindow() {
    build();
    let builder = document.getElementById('builder');
    let htmlText = builder.outerHTML;
    let headerText = '';
    document.head.querySelectorAll('head script, head link').forEach((item) => {
        headerText = headerText + item.outerHTML;
    });
    const winHtml = '<html><head><meta http-equiv="content-type" content="text/html; charset=utf-8" /><title>Preview</title>' + headerText + '</head><body style="margin: 0; padding: 0;">' + htmlText + '</body></html>';
    const winUrl = URL.createObjectURL(
        new Blob([winHtml], { type: "text/html" })
    );
    let w = window.open(winUrl, 'preview');
}

function checkLink(id) {
    var url = document.getElementById(id).value
    if (url !== '') {
        window.open(url, '_blank');
    }
    return false;
}