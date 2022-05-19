function calcMedia() {
    let resultado = 0;

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== "number") {
            throw Error ("Only numbers)");
        }
        resultado += arguments[i];
    }
        return (resultado / arguments.length) || 0;
}

console.log(calcMedia());
console.log(calcMedia(10, 10, 10, 7, 9, 157, 7, 1));
console.log(calcMedia(10, 10, 10, 7, 9, 157, 7, 1, "a"));