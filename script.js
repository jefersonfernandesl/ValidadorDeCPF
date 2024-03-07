function UserCpfVerify(userCpf) {

    this.userCpf = userCpf.replace(/-/g, "").replace(/\./g, "");
    this.userCpfToArray = this.convertToArray(this.userCpf);

};

UserCpfVerify.prototype.returnResult = function () {

    let userCpfArrayResult = this.userCpfToArray;

    let count = 0;
    let arrayResults = [];

    for (let i = userCpfArrayResult; i >= 2; i--) {
        let number = parseInt(userCpfArrayResult[count]);
        arrayResults.push(number * i);
        count++;
    }

    let someArray = someArrayFunction(parseInt(arrayResults));

    let calResult = 11 - (someArray % 11);
    if (calResult > 9) {
        calResult = 0;
    };

    console.log(calResult);

    let teste2 = teste22(calResult);

    function teste22(value) {
        let count = 0;
        let arrayResults = [value];
        userCpfArrayResult.push();
        for (let i = 11; i >= 2; i--) {

            let number = parseInt(userCpfArrayResult[count]);
            arrayResults.push(number * i);
            count++;

        };

        let someArray = someArrayFunction(parseInt(arrayResults));
        let calResult = 11 - (someArray % 11);
        if (calResult > 9) {

            calResult = 0;

        };
        console.log(calResult);


        return calResult;
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

const userOne = new UserCpfVerify('479.607.870-34');
userOne.returnResult();





