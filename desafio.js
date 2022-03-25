



                                  


function CantResultado(){

let cantidad = prompt("Ingrese la cantidad de carteras que va a comprar");

alert ("Usted compro " + cantidad + " carteras");
} 
 CantResultado ();


let color = prompt("Ingrese el color de la cartera que va a comprar");

  while ( (color != "rojo") && (color != "negro") && (color != "blanco") && (color != "azul") ) {
           
     color = prompt ("No tenemos de ese color");
 }
   alert("Usted elijio el color " + color );

   
   const porcentaje = (monto) => monto * 20/100
    monto = prompt ("ingrese el monto de la cartera para obtener el %20 de descuento");
   let resultado = monto - porcentaje (monto);
   alert ("Su descuento es de: $" + porcentaje (monto) + ", el total seria: $"+ resultado);  



   let dato = prompt("Elija una opcion para pagar en cuotas:  \n 1 -  2/cuotas \n 2 -  3/cuotas \n 3 -  6/cuotas ");
 
   if (dato == "1"){
      alert("Elejiste pagar en 2 cuotas");
       let dato = prompt ("ingrese el total del monto para saber el valor de las cuotas");
       let montocuotas = dato / 2;
           alert("pagara " + montocuotas + " en dos meses.");
   
   }
      else if (dato == "2"){
           alert("Elejiste pagar en 3 cuotas");
           let dato = prompt ("ingrese el total del monto para saber el valor de las cuotas");
           let montocuotas = dato / 3;
             alert("pagara " + montocuotas + " en tres meses.");

      }

      else if (dato == "3"){
           alert("Elejiste pagar en 6 cuotas");
           let dato = prompt ("ingrese el total del monto para saber el valor de las cuotas");
           let montocuotas = dato / 6;
             alert("pagara " + montocuotas + " en 6 meses.");
      }

      else {
            alert("no existe esa opcion");
      }

      





   



   


