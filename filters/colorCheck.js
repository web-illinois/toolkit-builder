module.exports = class ColorCheck {
    static build(name, colors) {
        let returnValue = 'const colorList = [';
        colors.forEach(color => {
            returnValue = returnValue + `'${color.name};${color.value}',`;
        });
        returnValue = returnValue.slice(0, -1) + '];'
        return returnValue;
    }
}