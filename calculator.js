let screen=document.querySelector('#screen');
let btn=document.querySelectorAll('.btn');

for(item of btn) {
    item.addEventListener('click',(e)=>{

        btntext = e.target.innerText;

        if(btntext =='×') {
            btntext= '*';
        }

        if(btntext=='÷') {
            btntext='/';
        }        

        screen.value+=btntext;
    });
}

let squaredResponse = () =>{
    screen.value = Math.pow(screen.value,2);
}

let sqrtResponse = () => {
    screen.value = Math.sqrt(screen.value,2);
}

let generalResponse = () => {
    if(screen.value.includes('^')){
        let sv = screen.value;
        let base = sv.slice(0, (sv.indexOf('^')));
        let exponent = sv.slice((sv.indexOf('^')+1), sv.length);
        screen.value = eval('Math.pow(base, exponent)');
    } else {
        screen.value=eval(screen.value);
    }
} 