function relogio(){
    function getTimeFromSeconds(seconds){
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }
    
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let seconds = 0;
    let timer;
    
    function startTimer(){
        timer = setInterval(() => {
            seconds++;
            relogio.innerHTML = getTimeFromSeconds(seconds);
        },1000)
    }
    //Foi adicionado um addEventListener em todo o document para os eventos de cliques dos três botaos. Usamos o método target com ifs para comprimir o código.
    document.addEventListener('click', function(e){
        const el = e.target;    //O metodo target retorna o elemento que foi clicado.
    
        if (el.classList.contains('zerar')){
           // console.log('Você clicou em zerar!');
            clearInterval(timer)
            seconds = 0;
            relogio.innerHTML = '00:00:00'
        }
    
        if (el.classList.contains('pausar')){
            relogio.classList.add('pausado')
            clearInterval(timer)
        }
    
        if (el.classList.contains('iniciar')){
            relogio.classList.remove('pausado')
            clearInterval(timer)
            startTimer()
        }
    })
    
}
relogio()
//iniciar.addEventListener('click', e =>{
//   relogio.classList.remove('pausado')
//    clearInterval(timer)
//    startTimer()
//})

//pausar.addEventListener('click', e =>{
//    relogio.classList.add('pausado')
//    clearInterval(timer)
//})

//zerar.addEventListener('click', e =>{
//    clearInterval(timer)
//    seconds = 0;
//    relogio.innerHTML = '00:00:00'
//})