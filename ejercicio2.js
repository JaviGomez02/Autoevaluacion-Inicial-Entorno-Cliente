function insertar(){
    let numero=prompt("Introduce el numero del empleado");
    let dni=prompt("Introduce el DNI del empleado");
    let nombre=prompt("Introduce el nombre del empleado");
    let apellidos=prompt("Introduce los apellidos del empleado");
    let existe=false;

    let tabla=document.getElementById("tabla");
    let arrayFilas=tabla.getElementsByTagName("tr");

    for(let i=0; i<arrayFilas.length; i++){
        let fila=arrayFilas[i];
        let columna=fila.getElementsByTagName("td")[1];
        let cadena=columna.textContent;
        if (cadena==dni){
            filaBorrar=arrayFilas[i];
            existe=true;
        }
    }

    if (existe==true){
        alert("El empleado ya existe");
    }
    else{
        let columna1=document.createElement("td");
        let columna2=document.createElement("td");
        let columna3=document.createElement("td");
        let columna4=document.createElement("td");

        columna1.appendChild(document.createTextNode(numero));
        columna2.appendChild(document.createTextNode(dni));
        columna3.appendChild(document.createTextNode(nombre));
        columna4.appendChild(document.createTextNode(apellidos));

        let fila=document.createElement("tr");
        fila.appendChild(columna1);
        fila.appendChild(columna2);
        fila.appendChild(columna3);
        fila.appendChild(columna4);
        //console.log(fila);

        tabla.appendChild(fila);

        let numEmpleado=document.getElementById("numEmpleados");
        numEmpleado.textContent=parseInt(numEmpleado.textContent)+1;
    }

}

function borrar(){
    let dni=prompt("Introduce el DNI del empleado a borrar");
    let borrar=false;
    let tabla=document.getElementById("tabla");

    let arrayFilas=tabla.getElementsByTagName("tr");

    for(let i=0; i<arrayFilas.length; i++){
        let fila=arrayFilas[i];
        let columna=fila.getElementsByTagName("td")[1];
        let cadena=columna.textContent;
        if (cadena==dni){
            filaBorrar=arrayFilas[i];
            borrar=true;
        }
    }
    if (borrar==true){
        //console.log(filaBorrar);
        filaBorrar.remove();
        let numEmpleado=document.getElementById("numEmpleados");
        numEmpleado.textContent=parseInt(numEmpleado.textContent)-1;
    }
    else{
        alert("El empleado no existe");
    }
    
}

function modificar(){
    let dni=prompt("Introduce el DNI del empleado a modificar");
    let mod=false;
    let tabla=document.getElementById("tabla");

    let arrayFilas=tabla.getElementsByTagName("tr");

    for(let i=0; i<arrayFilas.length; i++){
        let fila=arrayFilas[i];
        let columna=fila.getElementsByTagName("td")[1];
        let cadena=columna.textContent;
        if (cadena==dni){
            filaCambiar=arrayFilas[i];
            mod=true;
        }
    }
    if (mod==true){
        //console.log(filaCambiar);
        let numero=prompt("Introduce el nuevo numero del empleado");
        let nombre=prompt("Introduce el nuevo nombre del empleado");
        let apellidos=prompt("Introduce los nuevos apellidos del empleado");
        
        let columnaNumero=filaCambiar.getElementsByTagName("td")[0];
        let columnaNombre=filaCambiar.getElementsByTagName("td")[2];
        let columnaApellidos=filaCambiar.getElementsByTagName("td")[3];

        columnaNumero.textContent=numero;
        columnaNombre.textContent=nombre;
        columnaApellidos.textContent=apellidos;
    }
    else{
        alert("El empleado no existe");
    }
    
}