class billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}

var caja = [];
var entregados = [];

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero=parseInt(t.value);

    for(var bi of caja)
    {
        if (dinero> 0)
        {
            div = Math.floor(dinero/bi.valor);
            if ( div > bi.cantidad)
            {
                papeles= bi.cantidad;
            }
            else
            {
                papeles = div;         
            }

            entregados.push( new billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if (dinero > 0)
    {
        resultado.innerHTML = "No hay dinero suficiente";
    }
    else
    { 
        for (var e of entregados)

            if (e.cantidad>0)
            {
                resultado.innerHTML +=  e.cantidad + " billetes de $" + e.valor + "<br/>";
            }
    }
}

caja.push(new billete(50,3));
caja.push(new billete(20,2));
caja.push(new billete(10,2));

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);