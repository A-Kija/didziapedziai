function mutateColor(hex) {
    hex = hex.replace(/^\s*#|\s*$/g, '');
    let dec = parseInt(hex, 16);
    return dec > 10000000 ? '#000000' : '#ffffff';
}
export default mutateColor;