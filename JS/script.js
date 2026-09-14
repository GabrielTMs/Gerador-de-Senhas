const btnGeradorSeNHA = document.querySelector("#novaSenhaGerador");
const campSenhaGerada = document.querySelector("#senhaResultCamp");

const geradorLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const geradorUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const geradorNumber = () => {
    return Math.floor(Math.random() * 10).toString();
}

const geradorSymbols = () => {
    const symbols = "*&¨%$#@!-=+_";
    return symbols[Match.floor(Math.random() * symbols.lenght)];
}

console.log(geradorSymbols());

btnGeradorSeNHA.addEventListener("click", () => {
    console.log("Teste");
})