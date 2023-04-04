const previousOperationText = document.querySelector('#previous-operation');
const currentOperationText = document.querySelector('#current-operation');
const buttons = document.querySelectorAll('#calc-buttons');

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

    addDigit(digit) {

        if(digit === "." && this.currentOperationText.innerText.includes(".")) {
            return;
        }

        this.currentOperation = digit;
        this.updateScreen();
    }

    processOperation(operation) {
        let operationValue;
        let previous = +this.previousOperationText.innerText.split(" ")[0];
        let current = +this.currentOperationText.innerText;7

        if(this.currentOperationText.innerText === "") {
            if(this.previousOperationText.innerText !== "") {
                this.changeOperation(operation)
            }
                return;
        }

        switch(operation) {
            case "+":   
            operationValue = previous + current;
            this.updateScreen(operationValue, operation, current, previous)
                break; 
            
            case "-":
            operationValue = previous - current;
            this.updateScreen(operationValue, operation, current, previous)
                break;
                
            case "*":
            operationValue = previous * current;
            this.updateScreen(operationValue, operation, current, previous)
                break;

            case "/":
            operationValue = previous / current;
            this.updateScreen(operationValue, operation, current, previous)
                break;

            case "DEL":
            this.processDelOperator()
                break;
            
            case "C":
            this.processCOperator()
                break;
            
            case "CE":
            this.processCEOperator()
                break;

            case "=":
            this.processEqualButton()
                break;

        default:
            return;
        
        }
    }

    updateScreen
    (operationValue = null, 
    operation = null, 
    current = null, 
    previous = null) 
    {

        if(operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation;
        } else {
            if(previous === 0) {
                operationValue = current;
            }

            this.previousOperationText.innerText =`${operationValue} ${operation}`
            this.currentOperationText.innerText = '';
        }
    }

    changeOperation(operation) {
        const mathOperations = ["*", "-", "+", "/"];
    
        if (!mathOperations.includes(operation)) {
          return;
        }
    
        this.previousOperationText.innerText =
          this.previousOperationText.innerText.slice(0, -1) + operation;
      }

      processDelOperator() {
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1)
      }

      processCOperator() {
        this.currentOperationText.innerText = '';
        this.previousOperationText.innerText = '';
      }

      processCEOperator() {
        if(this.previousOperationText.innerText === '') {
            this.currentOperationText.innerText = '';            
        } else if(currentOperationText.innerText === '') {
            this.previousOperationText = '';
        } else {
            this.currentOperationText.innerText = '';        
        }
      }

      processEqualButton() {
        const operation = previousOperationText.innerText.split(" ")[1];

        this.processOperation(operation)
      }

}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach( (btn) => { 
    btn.addEventListener('click', (e) => {
        let value = e.target.innerText

        if(+value >= 0 || value === '.') {
            calc.addDigit(value)

        } else {
            calc.processOperation(value)
        }
    })
})

