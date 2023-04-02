const previousOperationText = document.querySelector('#previous-operation');
const currentOperationText = document.querySelector('#current-operation');
const buttons = document.querySelectorAll('#calc-buttons');

class Calculator {

}

buttons.forEach( (btn) => { 
    btn.addEventListener('click', (e) => {
        let value = e.target.innerText

        if(+value >= 0 || value === '.') {
            console.log(value)
        } else {
            console.log('op: ' + value)
        }
    })
})

