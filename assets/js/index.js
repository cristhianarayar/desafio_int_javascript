var precio = 400000
var valor=0
var a_can=0 

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = parseInt(precio)

function fnsumar()
{
    a_can++
    var cantSpan = document.querySelector(".cantidad").innerHTML = a_can
    valor= parseInt(precio*a_can)
    valorSpan = document.querySelector(".valor-total").innerHTML = valor
    console.log('cantidad -> ' +cantSpan+ ' y valor ' +valorSpan)
} 
function fnrestar()
{
    if (a_can > 0){
        a_can--
        var cantSpan = document.querySelector(".cantidad").innerHTML = a_can
        valor= parseInt(precio*a_can)
        valorSpan = document.querySelector(".valor-total").innerHTML = valor
    }
    console.log('cantidad -> ' +cantSpan+ ' y valor ' +valorSpan)
} 

function fncantidad(valor)
{
    if(valor == 'sumar') 
    {
        a_can++
    }else{
        if(a_can>0)
        {
        a_can--
        }
    }
    valor= parseInt(precio)*parseInt(a_can)
    var cantSpan = document.querySelector(".cantidad").innerHTML = a_can
    var valorSpan = document.querySelector(".valor-total").innerHTML = valor
    console.log('cantidad -> ' +cantSpan+ ' y valor ' +valorSpan)
}