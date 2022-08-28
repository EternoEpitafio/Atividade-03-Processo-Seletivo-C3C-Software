function bhaskara(ax2, bx, c) {
    const delta = bx ** 2 - 4 * ax2 * c;
    if (delta >= 0) {
        const res = [];
        v1 = (-bx + Math.sqrt(delta))/( 2 * ax2);
        res.push(v1);
        v2 = (-bx - Math.sqrt(delta))/( 2 * ax2);
        res.push(v2);
        return res;
    } else {
        return "Delta é negativo";
    }
}

console.log("Exemplo 1: \nPara 3x² - 5x + 12 : "+bhaskara(3, -5, 12));
console.log("\nExemplo 2: \nPara x² - 3x + 2 : "+bhaskara(1, -3, 2));