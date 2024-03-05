const userCpfInput = '030.785.210-52';
let userCpfFormatado = userCpfInput.replace(/\./g, '').replace(/\-/g, '');
let userCpfConvertido = parseInt(userCpfFormatado);
let userCpfArray = [];

for(let i = 0; i < userCpfFormatado.length; i++) {
    let numeroLoop  = userCpfConvertido.slice(i, (i+1))
    userCpfArray.push(numeroLoop);
}

console.log(typeof(userCpfArray));

function verificarCpf() {
    let resultadoLoop = [];
    let contador = 0
    for(let i = 10; i > 1; i--) {
        console.log(i);
        resultadoLoop.push(teste);
    }

    console.log(resultadoLoop);
};