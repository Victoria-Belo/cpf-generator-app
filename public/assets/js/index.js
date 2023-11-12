
window.gerarCPF = function(){
    const random = Math.random().toFixed(8).split('.');
    const elem = document.getElementById("floatingSelectGrid").value;   
    let cpfGerado = document.getElementById('floatingInputGrid');    

    const numeroPorRegiaoFiscal = regiaoFiscal(elem);
    const resultadoConcatenado = random[1].concat(numeroPorRegiaoFiscal);
    const resultadoDigitoVerificador = calculoDigitoVerificador(resultadoConcatenado.split(''));
    const primeiroResultadoDV = resultadoConcatenado.concat(resultadoDigitoVerificador);

    // regra: calculo do segundo dígito deve remover primeiro elemento
    let removendoPrimeiroElemento = primeiroResultadoDV.split('');
    removendoPrimeiroElemento.shift();
    const segundoResultadoDV = calculoDigitoVerificador(removendoPrimeiroElemento.join('').split(''));

    const cpfFormatado =  primeiroResultadoDV.concat(segundoResultadoDV);
    
    cpfGerado.value = formataCPF(cpfFormatado);      
}

window.validarCPF = function(){
    const cpf = document.getElementById('floatingInputGridValidar').value;
    let validacao = document.getElementById('floatingInputGridRespostaValidar'); 
    const cpfSemPontuacao = cpf.replace(/\D/g, ''); 
    const novePrimeirosDigitos = cpfSemPontuacao.substring(0, 9);
    const dezPrimeirosDigitos = cpfSemPontuacao.substring(0, 10);
    const array = novePrimeirosDigitos.split('');
    const array02 = dezPrimeirosDigitos.split('');

    const dv01 = calculoDigitoVerificador(array);

    const originalArrayCPF = cpfSemPontuacao.split('');
    const checkingDV1 = parseInt(originalArrayCPF[9]) === dv01;

    array02.shift();
    const dv02 = calculoDigitoVerificador(array02.join('').split(''));
  
    const checkingDV2 = parseInt(originalArrayCPF[10]) === dv02;

    const resposta = !(!checkingDV1 || !checkingDV2);  
    validacao.value = resposta ? 'CPF válido' : 'CPF inválido';    
}   




