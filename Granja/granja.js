var vp = document.getElementById("granja_animales");
var papel = vp.getContext("2d");

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

var fondo = {
  url: "tile.png",
  cargaOK: false,
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false,
  x: 0,
  y: 0,
};

var vaca = {
  url: "vaca.png",
  cargaOK: false,
};

var pollo = {
  url: "pollo.png",
  cargaOK: false,
};

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
document.addEventListener("keyup", moverCerdo);

var movimiento = 10;
var x = 0;
var y = 0;

function moverCerdo(evento, xinicial, yinicial, xfinal, yfinal) {
  cerdo.cargaOK = true;
  switch (evento.keyCode) {
    case teclas.DOWN:
      moverCerdo(x, y, x, y + movimiento);
      y = y + movimiento;
      papel.clearRect(0, 0, papel.width, papel.height);
      dibujar();
      papel.drawImage(cerdo.imagen, x, y);

      break;
    case teclas.UP:
      moverCerdo(x, y, x, y - movimiento);
      y = y - movimiento;
      papel.clearRect(0, 0, papel.width, papel.height);
      dibujar();
      papel.drawImage(cerdo.imagen, x, y);

      break;
    case teclas.LEFT:
      moverCerdo(x, y, x - movimiento, y);
      x = x - movimiento;
      papel.clearRect(0, 0, papel.width, papel.height);
      dibujar();
      papel.drawImage(cerdo.imagen, x, y);

      break;
    case teclas.RIGHT:
      moverCerdo(x, y, x + movimiento, y);
      x = x + movimiento;
      papel.clearRect(0, 0, papel.width, papel.height);
      dibujar();
      papel.drawImage(cerdo.imagen, x, y);
      break;
  }
  return;
}

function dibujar() {
  if (fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK)
    {
        var cantidad = aleatorio(5,15);
        console.log(cantidad);
        for (var i =0 ; i<cantidad ; i++)
        {
            var x = aleatorio (6 , 0);
            var y = aleatorio (6 , 0);
            var x = x * 80;
            var y = y * 80;
            
            papel.drawImage(vaca.imagen, x, y);
        }      
    }

    if (cerdo.cargaOK)
    {
        var cantidad = aleatorio(5,15);
        console.log(cantidad);
        for (var i =0 ; i<cantidad ; i++)
        {
            var x = aleatorio (7 , 0);
            var y = aleatorio (7 , 0);
            var x = x * 60;
            var y = y * 60;
            
            papel.drawImage(cerdo.imagen, x, y);
        }       
    }

    if (pollo.cargaOK)
    {
        var cantidad = aleatorio(0,40);
        console.log(cantidad);
        for (var i =0 ; i<cantidad ; i++)
        {
            var x = aleatorio (10 , 0);
            var y = aleatorio (10, 0);
            var x = x * 60;
            var y = y * 60;
            
            papel.drawImage(pollo.imagen, x, y);
        }       
    }    

}

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollos() {
  pollo.cargaOK = true;
  dibujar();
}

function aleatorio(mini, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
  return resultado;
}
