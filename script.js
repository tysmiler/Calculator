let numberEl = document.querySelectorAll('.number')
let clearEl = document.querySelector('.clear.span-two');
let delEl = document.querySelector('.delete')
let operationEl = document.querySelectorAll('.operation')
let previousOutputEl = document.querySelector('.previous-output')
let currentOutputEl = document.querySelector('.current-output')
//clears all content in output

class Calculator {
    constructor(currentOutputEl,previousOutputEl){
        this.currentOutputEl = currentOutputEl;
        this.previousOutputEl = previousOutputEl;
        this.clear();
        this.delete();
        this.appendNumber();
        this.chooseOperation();
    }

    clear() {
    clearEl.addEventListener('click', () =>{
      previousOutputEl.innerHTML = "";
      currentOutputEl.innerHTML = "";
      this.operation = undefined;
    })
    }

    delete() {
    delEl.addEventListener('click',() => {
        currentOutputEl.innerHTML = currentOutputEl.innerHTML.slice(0, -1)
    })
       
    }

    appendNumber(number) {
        
        numberEl.forEach(button => {
            button.addEventListener("click", () => {
                currentOutputEl.innerHTML = currentOutputEl.innerHTML + button.innerText
            })
        })
    }

    chooseOperation(operation) {
        operationEl.forEach(button => {
            button.addEventListener("click", () =>{
                this.compute(button.innerText)
            })
        })
    }
    
    compute(operation) {
    if(operation === "÷"){
        currentOutputEl.innerHTML
    }
    if(operation === "="){
         currentOutputEl.innerHTML = eval(currentOutputEl.innerHTML)
    }

    } updateDisplay() {
        this.currentOutputEl.innerText = this.currentOutputEl
    }
    

  
}

calculator = new Calculator(currentOutputEl, previousOutputEl)

