document.addEventListener("DOMContentLoaded", function(event) {
    let templates = document.querySelectorAll('.template-information');
    let templateHeader = document.getElementById('template-header');
    let templateOptions = document.getElementById('template-options');
    if (templates.length == 0) {
        document.getElementById('template').disabled = true;
        document.getElementById('template-title').innerHTML = 'This component does not support HTML';
        templateHeader.style.display = 'none';
        templateOptions.style.display = 'none';
    } else {
        document.getElementById('template').innerHTML = templates[0].innerHTML;
        if (templates.length == 1) {
            templateHeader.style.display = 'none';
            templateOptions.style.display = 'none';
        } else {
            templateHeader.style.display = '';
            templateOptions.style.display = '';
            templates.forEach((element, index) => {
                let opt = document.createElement('option');
                opt.value = index;
                opt.innerHTML = element.getAttribute('data-name');
                templateOptions.append(opt);
            });
        }
    }
    build();
});

function changeTemplate(e) {
    let templates = document.querySelectorAll('.template-information');
    document.getElementById('template').innerHTML = templates[e.value].innerHTML;
    build();
}

function build() {
    let builder = document.getElementById('builder');
    builder.innerHTML = '';
    let builderPre = document.getElementById('builder');
    builderPre.innerHTML = document.getElementById('pre').value;
    let buildingCode = document.getElementById('buildingCode');
    let builderObject = document.createElement(document.getElementById('component-name').value);
    let attributes = document.querySelectorAll('#options input:not(.length), #options select:not(.unit)');
    attributes.forEach(a => { if (a.value != '') builderObject.setAttribute(a.id, a.value) });
    let attributesLength = document.querySelectorAll('#options input.length');
    attributesLength.forEach(a => { if (a.value != '') { 
        let unit = document.getElementById(a.id + 'unit'); 
        builderObject.setAttribute(a.id, a.value + unit.value); 
    } });
    let classList = document.querySelectorAll('#class-list input, #class-list select');
    classList.forEach(c => { if (c.value != '') builderObject.classList.add(c.value) });

    builderObject.innerHTML = document.getElementById('template').value;

    let styleObject =  document.createElement('style');
    let useCustomStyles = false;
    let styleList = document.querySelectorAll('#style-list input');
    styleObject.innerHTML = `${document.getElementById('component-name').value}.builder-custom { `;
    styleList.forEach(s => { if (s.value != '') { useCustomStyles = true; styleObject.innerHTML += s.id + ': ' + s.value + '; '; } });
    styleObject.innerHTML += '}';
    let warning = document.getElementById('buildingCode-warning');

    if (useCustomStyles) {
        builderObject.classList.add('builder-custom');
        buildingCode.innerText = styleObject.outerHTML + '\n' + builderObject.outerHTML;
        builder.append(styleObject);
        builder.append(builderObject);
        warning.style.display = '';
    } else {
        buildingCode.innerText = builderObject.outerHTML;
        builder.append(builderObject);
        warning.style.display = 'none';
    }
}

function buildNewWindow() {
    build();
    let builder = document.getElementById('builder');
    let htmlText = builder.outerHTML;
    builder.innerHTML = '';
    let headerText = '';
    document.head.querySelectorAll('head script, head link').forEach((item) => {
        headerText = headerText + item.outerHTML;
    });
    let w = window.open('');
    w.document.writeln('<html><head><title>Preview</title>' + headerText + '</head><body style="margin: 0; padding: 0;">' + htmlText + '</body></html>');
    w.opener.location.reload();
}

function checkLink(id) {
    var url = document.getElementById(id).value
    if (url !== '') {
        window.open(url, '_blank');
    }
    return false;
}

function toggleDepreciated(e) {
    let list = document.querySelectorAll('.depreciated'); 
    if (e.checked) { 
        list.forEach(el => el.style.display = 'block');
    } else {
        list.forEach(el => el.style.display = 'none');
    }
}