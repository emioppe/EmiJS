



const btnBoton = document.createElement("button");

btnBoton.id = "btnNucleo";

btnBoton.innerHTML = "Presione el boton ";

btnBoton.addEventListener("click", function () {
    const h3 = document.createElement("h3");
    h3.innerHTML = "Hola Bienvenido";
    document.body.appendChild(h3);
})

document.body.appendChild(btnBoton);




    

   



   


