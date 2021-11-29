document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('template').innerHTML = document.getElementById('template-information').innerHTML;
    build();
});

function build() {
    let builder = document.getElementById('builder');
    builder.innerHTML = '';
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