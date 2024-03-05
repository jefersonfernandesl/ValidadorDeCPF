const userCpfInput = '030.785.210-52';
let usrCpfConvertido = userCpfInput.replace(/\./g, '').replace(/\-/g, '');
let userCpfArray = [];

for(let i = 0; i < usrCpfConvertido.length; i++) {
    let numeroLoop  = usrCpfConvertido.slice(i, (i+1))
    userCpfArray.push(numeroLoop);
}