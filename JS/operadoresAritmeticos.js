var subtotal= (13+1)*5;
var frete= 0.5*(13+1);
var total= subtotal+frete;

var subResultado= document.getElementById('subtotalValor');
subResultado.textContent= subtotal;

var freteResultado= document.getElementById('freteValor'); 
freteResultado.textContent= frete;

var totalResultado= document.getElementById('totalValor');
totalResultado.textContent= total;