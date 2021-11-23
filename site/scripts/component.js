document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('template').innerHTML = document.getElementById('template-information').innerHTML;
    build();
});

function build() {
    let builder = document.getElementById('builder');
    builder.innerHTML = '';
    let buildingCode = document.getElementById('buildingCode');
    let builderObject = document.createElement(document.getElementById('component-name').value);
    let attributes = document.querySelectorAll('#options input, #options select');
    attributes.forEach(a => { if (a.value != '') builderObject.setAttribute(a.id, a.value) });
    let classList = document.querySelectorAll('#class-list input, #class-list select');
    classList.forEach(c => { if (c.value != '') builderObject.classList.add(c.value) });
    builderObject.innerHTML = document.getElementById('template').value;
    buildingCode.innerText = builderObject.outerHTML;
    builder.append(builderObject);
    window.scrollTo(0, 0);
}