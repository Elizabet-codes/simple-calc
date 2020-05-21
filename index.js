const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn=document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-yellow-clear');


btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        let number=btn.getAttribute('data-num');
        screen.value+=number;
    })
})

equalBtn.addEventListener('click', function(){
    if(screen.value==''){
      return;
    }
    else{

        let value=eval(screen.value);
        screen.value=value;
    }
    
})

clearBtn.addEventListener('click', function(){
    screen.value='';
})