let monto = document.getElementById("pad");
let billNumber=parseInt(monto.value);

let personas = document.getElementById("personas");
let peopleNumber=parseInt(personas.value);
let predeterminado=document.getElementById("default");
let tipResult=document.getElementById("total_persona");
let totalTotal=document.getElementById("total_total");
let custom=document.getElementById("custom");




let porcent=5;



let btnReset=document.getElementById("reset");
btnReset.addEventListener('click',()=>{
    button.forEach(element=>{
        element.classList.remove('colores');
    })
    predeterminado.classList.add("colores");
    porcent=5;
    monto.value=0;
    personas.value=0;
    billNumber=0;
    peopleNumber=0;
    tipResult.innerHTML=0;
    totalTotal.innerHTML=0;
    custom.value='';
    calculartodo();
})




let button = document.querySelectorAll(".btns_button");

button.forEach(element => {
    element.addEventListener('click', event =>{
        //Quitarle los estilos a los botones
        button.forEach(element=>{
            element.classList.remove("colores");
        })
        // Darle estilo al boton al darle click
        element.classList.add("colores");

        porcent = parseInt(event.target.innerText.slice(0,-1));
        console.log(porcent)
        tipResult.innerHTML=(billNumber*porcent)/(100*peopleNumber);
        totalTotal.innerHTML=(billNumber*(100+porcent)/(100*(peopleNumber))).toFixed(2);
        calculartodo();
    });
});

monto.addEventListener('input',()=>{
    billNumber=parseFloat(monto.value);
    calculartodo();
})

personas.addEventListener('input',()=>{
    peopleNumber=parseFloat(personas.value);
    calculartodo();
})


function calculartodo(){
    if (isNaN(billNumber) || (isNaN(peopleNumber)||(peopleNumber==0))|| (isNaN(custom.value)) ){
        tipResult.innerHTML=0;
        totalTotal.innerHTML=0;
    }else{
        tipResult.innerHTML=((billNumber*porcent)/(100*peopleNumber)).toFixed(2);
        totalTotal.innerHTML=(billNumber*(100+porcent)/(100*(peopleNumber))).toFixed(2);
    }
}


custom.addEventListener('input',()=>{
    if (isNaN(custom.value)||custom.value==''){
        predeterminado.classList.add("colores");
        custom.classList.remove("colores");
        porcent=5;
        console.log("el custom esta vacio, no es un valor numerico o es cero");
        tipResult.innerHTML=0;
        totalTotal.innerHTML=0;
    }else{
        console.log("ahora estas aqui papa");
        button.forEach(element=>{
            element.classList.remove("colores");
        custom.classList.add("colores");
        porcent=custom.value;
        calculartodo();
        })
    }
})

custom.addEventListener('click',()=>{
    if (isNaN(custom.value)||custom.value==''){
        predeterminado.classList.add("colores");
        custom.classList.remove("colores");
        porcent=5;
        console.log("el custom esta vacio, no es un valor numerico o es cero");
        tipResult.innerHTML=0;
        totalTotal.innerHTML=0;
    }else{
        console.log("ahora estas aqui papa");
        button.forEach(element=>{
            element.classList.remove("colores");
        custom.classList.add("colores");
        porcent=custom.value;
        calculartodo();
        })
    }
})