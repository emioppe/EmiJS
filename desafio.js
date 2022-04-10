let productoElegido;

class Producto {
      constructor(id, nombre, precio) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
     }
 }




     const carteraflecos = new Producto(1, "carteraflecos", 3500);
     const carteratiras = new Producto(2, "carteratiras", 3000);
     const bolsodeportivo = new Producto(3, "bolsodeportivo", 3500);
     const mochilachica = new Producto(4, "mochilachica", 2500);

     const productos = [carteraflecos, carteratiras, bolsodeportivo, mochilachica];

     const carrito = [];

     let container = document.querySelector(".container");

     const saludar = () => {
          alert("Bienvenido a No estoy loca Carteras");

     let nombre = prompt("Ingrese su nombre:");

                    /*si se ingresa un numero continua el while*/
     while (nombre === "" || !isNaN(parseInt(nombre))) { 
          nombre = prompt("Ingrese su nombre:");
     }

     container.innerHTML = `<h1> Hola ${nombre} </h1>`;
};
saludar();
     



     const consultarProductos = () => {
          let texto = "";
          for (const p of productos) {
               texto += `${p.id}) ${p.nombre}\n`;
          }
               let prod = parseInt(prompt(`Que producto llevara?\n ${texto}`));

               while (prod < 1 || prod > 4 || isNaN(prod)){
                    prod = parseInt(prompt(`Que producto llevara?\n ${texto}`));
               }
               return prod;
      };



      const llevarProducto = () => {
             let buscarProducto = productos.find((element) => element.id === productoElegido);
              
      let existe = carrito.some( (element) => element.id === productoElegido);

            if (existe){
                  buscarProducto.cantidad++;
            }  else {
                 buscarProducto.cantidad = 1;
                 carrito.push(buscarProducto);
            }


          let agregar = confirm ("Desea agregar otro producto?");

          if (agregar) {
               productoElegido = consultarProductos();
               llevarProducto();
          };
     
     };


            /* mostrar todos los productos que tengo en el CRRITO*/
         const mostrarProductos = () => {
               const divCaja = document.createElement ("div");
               divCaja.className = "caja";
               container.appendChild(divCaja);

               /* el MAP lo q hace es devolver un arreglo*/
               let carrMap = carrito.map (
                     (e) => `<div>
                     <h4> ${e.nombre.toUpperCase()} </h4>
                     <h4> ${e.precio} c/u </h4>
                     <h3> Subtotal: ${e.precio * e.cantidad} </h3>
                     <p> CANTIDAD: ${e.cantidad} </p>
                     </div>`
               );
               divCaja.innerHTML = carrMap;

         };

           saludar();
           productoElegido = consultarProductos();
           llevarProducto();






   



   


