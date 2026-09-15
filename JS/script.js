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
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const gerador = (geradorLowerCase, geradorUpperCase, geradorNumber, geradorSymbols) => {
    let senha = "";

    const senhaTamanho = 10;

    const geradoresTudo = [geradorLowerCase, geradorUpperCase, geradorNumber, geradorSymbols]

    for(i = 0; i < senhaTamanho; i = i + geradoresTudo.length) {
        geradoresTudo.forEach(() => {
            const geradorRandomFuncoes = [Math.floor(Math.random() * geradoresTudo.length)]();

            senha += geradorRandomFuncoes;

            console.log(geradorRandomFuncoes);
        });
    }
}

btnGeradorSeNHA.addEventListener("click", () => {
    gerador(geradorLowerCase, geradorUpperCase, geradorNumber, geradorSymbols);


});