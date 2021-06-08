var subtotal= (13+1)*5;
var frete= 0.5*(13+1);
var total= subtotal+frete;
var cif= ' R$: '

var subResultado= document.getElementById('subtotalValor');
subResultado.textContent+= cif+subtotal; // textContent pega o conteudo da tag 'h2'

var freteResultado= document.getElementById('freteValor'); 
freteResultado.textContent+= cif+frete;

var totalResultado= document.getElementById('totalValor');
totalResultado.textContent+= cif+total;

document.writeln('esse método imprime. mesmo system.out.println');

