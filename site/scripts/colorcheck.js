const headingText = 'Lorem ipsum dolor';
const bodyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('btnTestColor').addEventListener('click', checkColorsFull);

    document.getElementById('checkallfore').addEventListener('click', function() { document.querySelectorAll('#foreground input').forEach(i => i.checked = true)});
    document.getElementById('checkallback').addEventListener('click', function() { document.querySelectorAll('#background input').forEach(i => i.checked = true)});
    document.getElementById('checknonefore').addEventListener('click', function() { document.querySelectorAll('#foreground input').forEach(i => i.checked = false)});
    document.getElementById('checknoneback').addEventListener('click', function() { document.querySelectorAll('#background input').forEach(i => i.checked = false)});

    let foreground = document.getElementById('foreground');
    let background = document.getElementById('background');

    for (let colorIndex = 0; colorIndex < colorList.length; colorIndex++) {
        let colorItems = colorList[colorIndex].split(';');
        foreground.innerHTML = foreground.innerHTML + `<div><input type='checkbox' value='${colorList[colorIndex]}' id='fore-${colorItems[1]}'><label for='fore-${colorItems[1]}'>${colorItems[0]} (${colorItems[1]})<span class='swatch' role='presentation' style='background-color: ${colorItems[1]};'></span></label></div>`;
        background.innerHTML = background.innerHTML + `<div><input type='checkbox' value='${colorList[colorIndex]}' id='back-${colorItems[1]}'><label for='back-${colorItems[1]}'>${colorItems[0]}<span class='swatch' role='presentation' style='background-color: ${colorItems[1]};'></span></label></div>`;
    }
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('fore') != '' && urlParams.get('back') != '') {
        if (urlParams.get('custom') == 'fore')
        {
            document.getElementById('customcolor').value = '#' + urlParams.get('fore');
            urlParams.get('back').split(',').forEach(element => {
                document.getElementById('back-#' + element).checked = true;
            });
            document.getElementById('runOptions').value = 'foreground';
        } else if (urlParams.get('custom') == 'back') {
            document.getElementById('customcolor').value = '#' + urlParams.get('back');
            urlParams.get('fore').split(',').forEach(element => {
                document.getElementById('fore-#' + element).checked = true;
            });
            document.getElementById('runOptions').value = 'background';
        } else {
            urlParams.get('fore').split(',').forEach(element => {
                document.getElementById('fore-#' + element).checked = true;
            });
            urlParams.get('back').split(',').forEach(element => {
                document.getElementById('back-#' + element).checked = true;
            });
        }
        checkColorsFull();
    }
});

function checkColorsFull() {
    let hex = document.getElementById('customcolor').value.replace('#', '');
    let customColor = [ '#' + hex + ';#' + hex ]
    let colorOption = document.getElementById('runOptions');
    if (colorOption.value == "all") {
        checkColors(colorList, colorList, '');
    } else if (colorOption.value == "selected") {
        var backgroundList = Array.from(document.querySelectorAll('#background input:checked')).map(e => e.value);
        var foregroundList = Array.from(document.querySelectorAll('#foreground input:checked')).map(e => e.value);
        checkColors(backgroundList, foregroundList, '');
    } else if (colorOption.value == "foreground") {
        checkColors(colorList, customColor, '&custom=fore');
    } else if (colorOption.value == "background") {
        checkColors(customColor, colorList, '&custom=back');
    }
}

function checkColors(backgroundList, foregroundList, linkType) {
    let colors = document.getElementById('colors');
    let displayOption = document.getElementById('displayOptions').value;
    let foregroundLink = foregroundList.map(f => f.split(';')[1].replace('#', '')).join(',');
    let backgroundLink = backgroundList.map(b => b.split(';')[1].replace('#', '')).join(',');
    document.getElementById('link').innerHTML = `<a href='https://builder.toolkit.illinois.edu/colorcheck/index.html?fore=${foregroundLink}&back=${backgroundLink}${linkType}'>https://builder.toolkit.illinois.edu/colorcheck/index.html?fore=${foregroundLink}&back=${backgroundLink}${linkType}</a>`;
    colors.innerHTML = '';
    for (let backgroundIndex = 0; backgroundIndex < backgroundList.length; backgroundIndex++) {
        for (let foregroundIndex = 0; foregroundIndex < foregroundList.length; foregroundIndex++) {
            if (foregroundList[foregroundIndex] != backgroundList[backgroundIndex]) {
                let foregroundItemArray = foregroundList[foregroundIndex].split(';');
                let foregroundName = foregroundItemArray[0];
                let foregroundHex = foregroundItemArray[1];
                let backgroundItemArray = backgroundList[backgroundIndex].split(';');
                let backgroundName = backgroundItemArray[0];
                let backgroundHex = backgroundItemArray[1];

                var data = getRatio(foregroundHex, backgroundHex);
                if (foregroundName == '') {
                    foregroundName = 'Custom Color #' + foregroundHex;
                }
                if (backgroundName == '') {
                    backgroundName = 'Custom Color #' + backgroundHex;
                }
                let title = foregroundName + ' on ' + backgroundName;
                if (data.AA == "pass") {
                    addColorsToGridAll(title, foregroundHex, backgroundHex, data.ratio);
                } else if (data.AALarge == "pass" && (displayOption == 'pass' || displayOption == 'all')) {
                    addColorsToGridLarge(title, foregroundHex, backgroundHex, data.ratio);
                } else if (displayOption == 'all') {
                    addColorsToGridNone(title, foregroundHex, backgroundHex, data.ratio);
                }
            }
        }
    } 
}

function addColorsToGridAll(title, foreground, background, ratio) {
    let colors = document.getElementById('colors');
    let sampleText = document.getElementById('sampletext').value;
    let sampleBody = document.getElementById('sampletext').value;
    if (sampleText == '') {
        sampleText = headingText;
    }
    if (sampleBody == '') {
        sampleBody = bodyText;
    }
    let div = document.createElement('div');
    let divTitle = document.createElement('h3');
    divTitle.innerHTML = `${title} - All Sizes`;
    let divRatio = document.createElement('div');
    divRatio.innerHTML = `(ratio ${ratio}:1)`;
    let divExamples = document.createElement('div');
    divExamples.classList.add('flex');
    divExamples.style.backgroundColor = background;
    let divLarge = document.createElement('div');
    let divBold = document.createElement('div');
    let divNormal = document.createElement('div');
    divLarge.innerHTML = sampleText + ' <br>(24px font minimum)';
    divLarge.classList.add('large');
    divLarge.style.color = foreground;
    divBold.innerHTML = sampleText + ' <br>(19px bold font minimum)';
    divBold.classList.add('bold');
    divBold.style.color = foreground;
    divNormal.innerHTML = sampleBody + ' <br>(16px font example or any font size is acceptable)';
    divNormal.classList.add('normal');
    divNormal.style.color = foreground;
    divExamples.appendChild(divLarge);
    divExamples.appendChild(divBold);
    divExamples.appendChild(divNormal);
    div.append(divTitle);
    div.append(divRatio);
    div.append(divExamples);
    colors.append(div);
}

function addColorsToGridLarge(title, foreground, background, ratio) {
    let colors = document.getElementById('colors');
    let sampleText = document.getElementById('sampletext').value;
    if (sampleText == '') {
        sampleText = headingText;
    }
    let div = document.createElement('div');
    let divTitle = document.createElement('h3');
    divTitle.innerHTML = `${title} - minimum 24px or 18.5px bold only`;
    let divRatio = document.createElement('div');
    divRatio.innerHTML = `(ratio ${ratio}:1)`;
    let divExamples = document.createElement('div');
    divExamples.classList.add('flex');
    divExamples.style.backgroundColor = background;
    let divLarge = document.createElement('div');
    let divBold = document.createElement('div');
    divLarge.innerHTML = sampleText + ' <br>(24px font minimum)';
    divLarge.classList.add('large');
    divLarge.style.color = foreground;
    divBold.innerHTML = sampleText + ' <br> (19px bold font minimum)';
    divBold.classList.add('bold');
    divBold.style.color = foreground;
    divExamples.appendChild(divLarge);
    divExamples.appendChild(divBold);
    div.append(divTitle);
    div.append(divRatio);
    div.append(divExamples);    
    colors.append(div);
}

function addColorsToGridNone(title, foreground, background, ratio) {
    let colors = document.getElementById('colors');
    let sampleText = document.getElementById('sampletext').value;
    if (sampleText == '') {
        sampleText = headingText;
    }
    let div = document.createElement('div');
    let divTitle = document.createElement('h3');
    divTitle.innerHTML = `${title} - Inaccessible`;
    let divRatio = document.createElement('div');
    divRatio.innerHTML = `(ratio ${ratio}:1)`;
    let divExamples = document.createElement('div');
    divExamples.classList.add('flex');
    divExamples.style.backgroundColor = background;
    let divLarge = document.createElement('div');
    divLarge.innerHTML = sampleText + ' <br>(24px font)';
    divLarge.classList.add('large');
    divLarge.style.color = foreground;
    divExamples.appendChild(divLarge);
    div.append(divTitle);
    div.append(divRatio);
    div.append(divExamples);
    colors.append(div);
}

/* 
Code from: 
https://dev.to/alvaromontoro/building-your-own-color-contrast-checker-4j7o
https://toolkit.marketing.web.illinois.edu/_assets/colors.js
*/

function getRatio(foreground, background) {
    let rgb1 = hexToRgb(foreground);
    let rgb2 = hexToRgb(background);
    let luminanceFront = getLuminance(rgb1.r, rgb1.g, rgb1.b);
    let luminanceBack  = getLuminance(rgb2.r, rgb2.g, rgb2.b);
    let ratioValue = luminanceBack > luminanceFront ? ((luminanceFront + 0.05) / (luminanceBack + 0.05)) : ((luminanceBack + 0.05) / (luminanceFront + 0.05));

    let aanormal = 0.22222;
    let aalarge = 0.33333;
    return { AA: (aanormal > ratioValue ? 'pass' : ''), AALarge: (aalarge > ratioValue ? 'pass' : ''), ratio: (Math.round(1 / ratioValue * 100) / 100) }
}

function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function getLuminance(r, g, b) {
    var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow( (v + 0.055) / 1.055, 2.4 );
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
