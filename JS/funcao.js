// uma função simples
function helloWorld(){
    document.write('Olá mundo!');
}

//Chamando a Função
helloWorld();

//Uma função que recebe parâmetros
function helloWorldName(nome){
    return document.write('<br><br>Olá mundo, meu nome é: '+nome);
}

//chamando a função com argumento
helloWorldName('Fernando');

//Vejamos uma fução que retorna um valor numérico
function calculaAreaRetangulo(base, altura){
    var area= base*altura;
    return area;
}

//Podemos chamar a função para atribuir valores a variaveis
var retangulo= calculaAreaRetangulo(16,4)


//Exibir o resultado
document.write('<br><br>Área do retangulo é: '+retangulo);

//Recebendo multiplos valores
function calculaAreaVolume(altura, largura, profundidade){
    var area= altura*largura;
    var volume= altura*largura*profundidade;
    var resultadoAreaVolume= [area,volume];
    return resultadoAreaVolume;
}

//Utilizando a função e armazenando a posição desejada do array
var calculoCaixaArea= calculaAreaVolume(10,20,30)[0];
var calculoCaixaVolume= calculaAreaVolume(10,20,30)[1];

//Exibindo os resultados
document.write('<br><br>Área da caixa é: '+calculoCaixaArea);
document.write('<br><br>Volume da caixa é: '+calculoCaixaVolume);

//Podemos chamar a função diretamente na declaração da variável. Isso é uma função anonima.
var areaCaixa= (function(){
    var calculoArea=10*20;
    return calculoArea;
}());

//Exibindo o resultado
document.write('<br><br>A função anonima faz a mesma coisa: '+areaCaixa);

document.getElementById('')