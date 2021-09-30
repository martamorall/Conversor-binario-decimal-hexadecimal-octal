
var opcion=document.getElementById("modo");

opcion.addEventListener("change", calcular, false);

function calcular(){
    //options es el array de opciones del select
    var elemento=this.options[this.selectedIndex].value; //obtengo el valor de lo que he seleccionado
    //declaro numero porque va a ser comun para el switch
    var numero=document.getElementById("numero").value;
    var nn=parseInt(numero);
    var resultado=document.getElementById("resultado");
    
    switch(elemento){
        case "1":
            //Pasa de decimal a binario
            resultado.value=nn.toString(2);
        break;
        case "2":
            //Pasa de decimal a octal
            resultado.value=nn.toString(8);
        break;
        case "3":
            //Pasa de decimal a hexadecimal
            resultado.value=nn.toString(16);
        break;
        case "4":
            //Pasa de binario a decimal
            resultado.value=parseInt(nn, 2);
        break;
        case "5":
            //Pasa de octal a decimal
            resultado.value=parseInt(nn, 8);
        
        break;
        case "6":
            //Pasa de hexadecimal a decimal 
            resultado.value=parseInt(nn, 16);
        
        break;

    }
}





    


