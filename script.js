let fechaAnuncio = document.getElementById('container');
let score = 0;
let cont = 0;
let dificuldade = 5000;
let facil = document.getElementById('facil');
let medio = document.getElementById('medio');
let dificil = document.getElementById('dificil');

facil.addEventListener("click", function(event){
    event.preventDefault();
    console.log('MODO FACIL');
    setInterval(posicaoAnuncio, 10000);
});

function contador(){
    cont--;
}

medio.addEventListener("click", function(event){
    event.preventDefault();
    cont = 5;    
    setInterval(posicaoAnuncio, 5000);
});

dificil.addEventListener("click", function(event){
    event.preventDefault();
    
    setInterval(posicaoAnuncio, 3000);
});

fechaAnuncio.addEventListener("click", function(event){
    event.preventDefault();
    score++;
    console.log('SCORE', score);
    posicaoAnuncio();
    document.getElementById('score').innerHTML = `Pontos: ${score}`;
});

const posicaoAnuncio = () =>{
    let posicaoAnuncios = ['flex-end', 
                            'flex-start', 
                            'center', 
                            'left',
                            'right',
                            'start'];
    let index = Math.floor(Math.random()* 6);
    let indexPosition = Math.floor(Math.random()* 3);
    let position = ['100px', '200px', '300px'];
    fechaAnuncio.style.justifyContent=posicaoAnuncios[index];
    fechaAnuncio.style.marginTop=position[indexPosition];
    fechaAnuncio.style.marginBottom=position[indexPosition];
    fechaAnuncio.style.marginLeft=position[indexPosition];
    fechaAnuncio.style.marginRight=position[indexPosition];
};

//Fazer uma função que muda a posição a cada tanto tempo
