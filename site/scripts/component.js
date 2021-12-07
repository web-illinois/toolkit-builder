document.addEventListener("DOMContentLoaded", function(event) {
    let templates = document.querySelectorAll('.template-information');
    let templateOption = document.getElementsByClassName('template-option')[0];
    let templateOptions = document.getElementById('template-options');
    if (templates.length == 0) {
        document.getElementById('template').disabled = true;
        document.getElementById('template-title').innerHTML = 'This component does not support HTML';
        templateOption.style.display = 'none';
    } else {
        document.getElementById('template').innerHTML = templates[0].innerHTML;
        if (templates.length == 1) {
            templateOption.style.display = 'none';
        }
        else {
            templateOption.style.display = '';
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
    let styleList = document.querySelectorAll('#style-list input');
    styleList.forEach(s => { if (s.value != '') builderObject.style.cssText += s.id + ': ' + s.value + '; ' });
    builderObject.innerHTML = document.getElementById('template').value;
    buildingCode.innerText = builderObject.outerHTML;
    builder.append(builderObject);
    window.scrollTo(0, 0);
}

function checkLink(id) {
    var url = document.getElementById(id).value
    if (url !== '') {
        window.open(url, '_blank');
    }
    return false;
}