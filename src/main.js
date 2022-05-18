// FUNCIONES

const opcionProducto = (op) =>{
    switch(op){
        case 1:
            return "Pizza"
        case 2:
            return "Helado"
        case 3:
            return "Pollo"
        case 4:
            return "Bombones"
        case 5:
            return "Jugo"
        case 6:
            return "Limonada"
        default:
            return "NA"
    }
}
const opcionCosto = (op) =>{
    switch(op){
        case 1:
            return 20
        case 2:
            return 5
        case 3:
            return 16
        case 4:
            return 4
        case 5:
            return 3
        case 6:
            return 2
        default:
            return "NA"
    }
}
// SALIDA

const salida = () =>{
    let select = Number(document.getElementById("select").value);
    let cantidad = Number(document.getElementById("cantidad").value);

    let salidaProducto = opcionProducto(select);
    document.getElementById("producto").innerHTML = salidaProducto;
    let salidaCosto = opcionCosto(select);
    document.getElementById("costo").innerHTML = "$" + salidaCosto;
    document.getElementById("cantidadSalida").innerHTML = cantidad;
    document.getElementById("total").innerHTML = "$" + salidaCosto * cantidad;
}
const reset = () =>{
    document.getElementById("producto").innerHTML = "--";
    document.getElementById("costo").innerHTML = "$0";
    document.getElementById("cantidadSalida").innerHTML = "0";
    document.getElementById("total").innerHTML = "$0";
}