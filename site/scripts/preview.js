document.addEventListener("DOMContentLoaded", function(event) {
    let templates = document.querySelectorAll('.template-information');
    let samples = document.getElementById('samples');
    
    if (templates.length > 0) {
        for (let i = 0; i < samples.children.length; i++) {
            if (!samples.children[i].classList.contains('header-info')) {
                samples.children[i].innerHTML = templates[0].innerHTML;
            }
        }
    }
});