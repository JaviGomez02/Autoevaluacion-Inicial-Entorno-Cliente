function inicializar(){
    let nombre;
    let array=[];

    for (let i=0;i<5;i++){
        let salir=false;
        nombre=prompt("Introduce un nombre");
        while (salir==false){
            let indice=array.indexOf(nombre);
            if (indice==-1){
                salir=true
            }
            else{
                nombre=prompt("Nombre repetido, introduce otro nombre");
            }
        }
        array[i]=nombre;
    }

    array.sort();
    
    for (let i=0;i<5;i++){
        console.log(array[i].charAt(0).toUpperCase());
    }
    
}