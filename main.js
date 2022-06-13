function criaCalculadora(){
    return {
        display:document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        inicia(){
            this.cliqueBotoes()
            this.pressEnter();
        },
        pressEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keycode === 13){
                    this.igualResultado();
                }
            });
        },
        clearDisplay(){
            this.display.value = ''
        },
        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },
        igualResultado(){
            var conta = this.display.value;
            try{
                conta = eval(conta);
                if(!conta){
                alert('conta invalida');
                return;
            }
            this.display.value = String(conta); 
        }catch(e) {
            alert('conta invalida');
            return;
            }
        },
        cliqueBotoes(){
            document.addEventListener('click', e => {
                const element = e.target;
                if(element.classList.contains('btn-num')){
                    this.btnParaDisplay(element.innerText);
                }
                if(element.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(element.classList.contains('btn-del')){
                    this.apagaUm();
                }
                if(element.classList.contains('btn-equal')){
                    this.igualResultado();
                }
            });
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}
const calculadora = criaCalculadora();
calculadora.inicia();