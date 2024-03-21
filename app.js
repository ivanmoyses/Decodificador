const textInput = document.querySelector(".input");
const textOutput = document.querySelector(".output");
const btnCript = document.querySelector(".quadro__Esquerda__Botoes button#cript");
const btnDecript = document.querySelector(".quadro__Esquerda__Botoes button#decript");
const btnCopy = document.querySelector(".quadro__Direita button#copy");
const btnTransfer = document.querySelector(".quadro__Direita button#transfer");


const handleCriptText = e => {
    let textToCript = criptText(textInput.value);
    textOutput.value = textToCript;
}

const handleDecriptText = e => {
    let textToDecript = criptText(textInput.value, false);
    textOutput.value = textToDecript;
}

function copyText() {
    let textToCopy = textOutput.value;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            textOutput.value = ""
        })
        .catch(() => {
            alert ("Não foi possivel copiar o texto");
        })
}

function transferText() {
    textInput.value = textOutput.value;
}

const criptText= (text, cript = true) => {
    let result = text;
    if(cript){
        result = result.replace("e","rob")
            .replace("i","ones")
            .replace("a","uia")
            .replace("o","ober")
            .replace("u","lau")
    }else{
        result = result.replace("rob","e")
        .replace("ones","i")
        .replace("uia","a")
        .replace("ober","o")
        .replace("lau","u")
    }
    return result;
}

btnCript.addEventListener("click", handleCriptText);
btnDecript.addEventListener("click", handleDecriptText);
btnCopy.addEventListener("click", copyText)
btnTransfer.addEventListener("click", transferText);