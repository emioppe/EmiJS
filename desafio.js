/* ejercicio edad de messi*/

let i = prompt("ingrese la edad de Messi");
  while ( i  != "34"){ 
        
     i = prompt(i + " No es la edad de Messi");
       
  } 
  alert("Felicitaciones! " + i 
  + " es la edad de Messi");


/* listado de nombres en pantalla*/

  let nombres = "";

for (i = 0; i <5 ; i ++){
  
     nombres += prompt("ingrese 5 nombres ")+"\n";
}
alert("los nombres ingresados son: " + nombres); 





/* ejemplos de IF */

let usuario = prompt("Ingrese su nombre");

alert("Hola : " + usuario);

let edad = prompt ("¿Cuantos años tienes?");


if (edad < 18){
     alert("Eres menor de edad porque tienes " + edad + " años");
}
else if ( (edad >= 18) && (edad < 30) )    {
    alert("Eres mayor de edad");
} 

else if ( (edad >= 30) && (edad <= 50) )  {
      alert("eres adulto");
}

else { 
    alert("eres viejo");
}


