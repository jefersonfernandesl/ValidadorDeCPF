let userCpfToArray = '';
function UserCpfVerify(userCpf) {


    this.userCpf = userCpf.replace(/-/g, "").replace(/\./g, "");
    userCpfToArray = this.convertToArray(this.userCpf);
};


UserCpfVerify.prototype.returnResult = function () {

    let resultOne = returnResultOne();
    let resultTwo = returnResultTwo();

    if(parseInt(userCpfToArray[9]) === resultOne && parseInt(userCpfToArray[10]) === resultTwo) {
        console.log('CPF VÁLIDO');
    }
    else {
        console.log('CPF INVÁLIDO');
    }
    
    
    function returnResultOne() {

        let userCpfArrayResult = userCpfToArray;
        let count = 0;
        let arrayResults = [];

        for (let i = 10; i >= 2; i--) {
            let number = parseInt(userCpfArrayResult[count]);
            arrayResults.push(number * i);
            count++;
        }

        let someArray = someArrayFunction(arrayResults);
        let calcResult = 11 - (someArray % 11);
        if (calcResult > 9) {
            calcResult = 0;
        };

        return calcResult;
    }

    function returnResultTwo() {

        let userCpfArrayResult = userCpfToArray;
        userCpfArrayResult.push(resultOne);
        let count = 0;
        let arrayResults = [];

        for (let i = 11; i >= 2; i--) {
            let number = parseInt(userCpfArrayResult[count]);
            arrayResults.push(number * i);
            count++;
        }

        let someArray = someArrayFunction(arrayResults);
        let calcResult = 11 - (someArray % 11);
        if (calcResult > 9) {
            calcResult = 0;
        };

        return calcResult;
    }

    function someArrayFunction(arrayS) {
        let resultSoma = 0;

        for (let i = 0; i < arrayS.length; i++) {
            resultSoma = resultSoma + arrayS[i];
        }
        return resultSoma;
    }

};

UserCpfVerify.prototype.convertToArray = function (wordToArray) {
    let arrayWord = [];
    for (let j = 0; j < 11; j++) {

        arrayWord.push(wordToArray.slice(j, (j + 1)));

    }
    return arrayWord;
};

const userOne = new UserCpfVerify('093.301.990-98');
userOne.returnResult();



