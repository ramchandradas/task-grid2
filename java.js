let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.button){
            case 'C':
                display.button = 'button';
                break;
           
            default:
                display.innerText += e.target.innerText;
        }
    })
})