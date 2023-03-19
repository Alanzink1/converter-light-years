//Variáveis
var user = document.getElementById("user");
var anosLuz = document.getElementById("anos-luz");
var distanceTitle = document.querySelector("#distance");
var distances = document.getElementById('distances');

//Funções
//Verifica a Distância Selecionada
function Separate(distance, value) {
  
  if(distance === "m") {
      Metros(value);
    } else {
     Kilometers(value);
    };
};

//Calcula Velocidade da Luz

          //Valor & Distância
function luzCalc(v, d) {
  //Váriavel "m" == Metro
  if(d === "m"){
    v = parseFloat(v);
    //Conta de VL para M
    var contaMetro = v * 9.461e15;
    //Altera o Input Metro
    user.value = contaMetro;
    
  } else {
    
    v = parseFloat(v);
    //Conta de VL para Km
    var contaKm = v * 9.461e12;

    //Altera o Input Kilometro
    user.value = contaKm;
    
  }
}

//Calcula Velocidade Metro
function Metros(v) {
  //Altera o Título
  distanceTitle.innerHTML = "Metros";
  //Altera o Txt Input
  user.placeholder = "Metros";
  v = parseFloat(v);
  //Calcula de M para VL
  var contaLuz = v * 1.057e16;
  //Altera o Resultado Luz
  console.log(contaLuz)
  anosLuz.value = contaLuz;
  
}

//Calcula Velocidade Metro
function Kilometers(v) {
  //Altera o Título
  distanceTitle.innerHTML = "Quilômetros";
  user.placeholder = "Quilômetros";
  //Altera o Txt Input
  v = parseFloat(v);
  //Calcula de Km para VL
  var contaLuz = v * 1.057e13;
  //Altera o Resultado Luz
  anosLuz.value = contaLuz;
};

//Cuida do Valor Inserido Pelo Usuário
function userValue() {
  
  //Verifica Distância Selecionada
  var distance = distances.value;
  var valueUser = user.value;
  Separate(distance, valueUser);
  
}

//Cuida da Seleção de Distâncias
var select = document.querySelector('select').addEventListener('change', function(){
    userValue();
});

//Pega o Valor do Input Luz
function distanceLuz() {
  var luzValue = anosLuz.value;
  luzCalc(luzValue, distances.value);
  
};


//Gera Valores para Posições de Cada Estrela
//↓↓↓ Pego do StackOverflow ↓↓↓
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const STAR_COUNT = 100
let result = ""
for(let i = 0; i < STAR_COUNT; i++){
    result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`
}
//↗↗↗ Pego do StackOverflow ↖↖↖

  //Gera as Estrelas
  var alterate = document.getElementById('stars').style.boxShadow = result.substring(0, result.length - 1);

randomNumber();