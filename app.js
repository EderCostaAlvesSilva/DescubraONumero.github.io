const numero = document.getElementById('Numero');
const btnJogar = document.getElementById('btnJogar');
const btns = document.getElementById('btns');
const error = document.getElementById('erros');
const tentativa = document.getElementById('tentativa');
const dica = document.getElementById('dica');

let erros = Array();
let vida = 6;
let aleatorio = Math.floor((Math.random() * 100))

function play(){
    let n = Number(numero.value);
    
    //confira se o input é numero ou vazio
    if(n == '' || isNaN(n) || n > 100){
        alert('insira todos os dados corretamente, faz favor ae');
        numero.focus();
        return; 
    }
    
    tentativa.textContent = vida
    if(aleatorio < n){
        dica.textContent = '';
        dica.textContent =  `Dica: tente um número Menor que o número ${n}`;

        erros.push(n)
        error.textContent = '';
        error.textContent = `(${erros})`;
    
        tentativa.textContent = '';
        tentativa.textContent = vida -= 1;


        numero.value = ''
        numero.focus()
    } else if(aleatorio > n){
        dica.textContent = '';
        dica.textContent =  `Dica: tente um número Maior que o número ${n}`;

        erros.push(n);
        error.textContent = '';
        error.textContent = `${erros.length} (${erros})`;
    
        tentativa.textContent = '';
        tentativa.textContent = vida -= 1;

        numero.value = ''
        numero.focus()
    } else if(aleatorio == n){
        alert('Parabéns você acertou o número !');
        let criarbtn = document.createElement('button');
        
        btnJogar.disabled = true;

        criarbtn.innerHTML = 'Reiniciar';
        criarbtn.setAttribute('id', 'btnReinicia')
        btns.appendChild(criarbtn)

        dica.textContent = `O número sorteado foi: ${aleatorio}`

        function reinicia(){
            location.reload();
            numero.focus();
            return;
        }
        criarbtn.addEventListener('click', reinicia)
    } 
    if(vida == 0){
        vida = 0;
        alert('Suas chances acabaram, reinicie o jogo para tentar novamente !');
        let criarbtn = document.createElement('button');
        
        btnJogar.disabled = true;

        criarbtn.innerHTML = 'Reiniciar';
        criarbtn.setAttribute('id', 'btnReinicia')
        btns.appendChild(criarbtn)

        dica.textContent = `Fim de jogo !! Número sorteado ${aleatorio}`

        function reinicia(){
            location.reload();
            numero.focus();
            return;
        }
        criarbtn.addEventListener('click', reinicia);
        
    }
    
    
    console.log(erros, aleatorio, vida)
}
btnJogar.addEventListener('click', play)