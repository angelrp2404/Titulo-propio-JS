//if 
let nota = 6
let numeroDos = 7

/* if (nota<0 || nota>10) {
    alert(" la nota introducida no es valida")
} else if( nota>5){
    alert("has aprobado")
    
}else{
    alert("has suspendido")
} */

// if ternario

//nota>5 ? alert("aprobado"): alert("suspendo");


nota =6;
/* while (nota<10){
    alert (`la nota es ${nota}`)
    nota++;
} */


/* let acierto=false;
let contador=1;
let numeroRamdom= Math.round(Math.random()*10)

do{
    
    let numeroTeclado= Number(prompt(`Dime el numero a ver si aciertas ${numeroRamdom}`))
    if (numeroTeclado!=numeroRamdom) {
      contador++  
      
    } else {
        
        alert(`muy bien has acertado en ${contador} intentos`)
        acierto= true;
    }

}while(acierto!=true) */

// for
let coleccionPalabras= ["uno","dos","tres","cuatro","cinco","pollo",1,3,4,5,true,false]
/* for (let index = 0; index < coleccionPalabras.length; index++) {
   
    console.log(coleccionPalabras[index]);
    console.log( typeof coleccionPalabras[index]);
    
} */
coleccionPalabras.forEach(e=>console.log(e))
