document.addEventListener('DOMContentLoaded', () => {
    const switchBall = document.querySelector('.switchBall');
    const body = document.querySelector('body');
    const btn = document.querySelector('.btnContainer > button');
    let btnBool = 0;
    let status = 1;

    switchBall.addEventListener('click', () => {
        if (!switchBall.classList.contains('on')) {
            switchBall.classList.add('on');
            body.classList.add('decrypt');
            btn.innerHTML = 'Decrypt';
            status = 0;
            clearTextAreas();
        } else {
            switchBall.classList.remove('on');
            body.classList.remove('decrypt');
            btn.innerHTML = 'Encrypt';
            status = 1;
            clearTextAreas();
        }
    });

    const inputText = document.querySelector('.inputText');

    inputText.addEventListener('input', function () {
        let lengthInput = inputText.value.length;
        if (lengthInput > 0) {
            btnBool = 1;
            checkBtn();
        } else {
            btnBool = 0;
            checkBtn();
        }
    });

    function checkBtn() {
        if (btnBool) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    }
    let charCode;
    let codes = [];
    const outputText = document.querySelector('.outputText');

    btn.addEventListener('click', () => {
        codes = [];
        let value = inputText.value;
        let valueLength = value.length;
        if (status) {
            for (let i = 0; i < valueLength; i++) {
                charCode = value.charCodeAt(i);
                charCode += 1;
                charCode -= 33;
                charCode += 20;
                if (charCode % 2 === 0) {
                    charCode += 40;
                } else {
                    charCode += 100;
                }
                codes.push(charCode);
            }
        } else {
            for (let i = 0; i < valueLength; i++) {
                charCode = value.charCodeAt(i);
                charCode -= 1;
                charCode += 33;
                charCode -= 20;
                if (charCode % 2 === 0) {
                    charCode -= 40;
                } else {
                    charCode -= 100;
                }
                codes.push(charCode);
            }
        }

        outputText.innerHTML = String.fromCharCode(...codes);
    });
    function clearTextAreas() {
        inputText.value = '';
        outputText.innerHTML = '';
    }
    //end
});
