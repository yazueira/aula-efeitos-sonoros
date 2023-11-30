function tocaSom (idElementoAudio) {
   const elemento =  document.querySelector(idElementoAudio).play();

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play()
    }
    else {
        //alert('Elemento não encontrado')
        console.log('Elemento não encontrado ou seletor inválido');
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){
        
        console.log(evento.code)

        if( evento.code = 'Espaço' || evento.code === 'Enter') { 
        tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
    }
}
