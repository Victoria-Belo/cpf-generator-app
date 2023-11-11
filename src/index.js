const { formataCPF, calculoDigitoVerificador, regiaoFiscal, validarCPF } = require('./generate') 

function gerarCPF(){
    const elem = 'RS'; //vai precisar puxar pelo componente    

    const random = Math.random().toFixed(8).split('.');

    const numeroPorRegiaoFiscal = regiaoFiscal(elem);
    const resultadoConcatenado = random[1].concat(numeroPorRegiaoFiscal);
    const resultadoDigitoVerificador = calculoDigitoVerificador(resultadoConcatenado.split(''));
    const primeiroResultadoDV = resultadoConcatenado.concat(resultadoDigitoVerificador);

    // regra: calculo do segundo dígito deve remover primeiro elemento
    let removendoPrimeiroElemento = primeiroResultadoDV.split('');
    removendoPrimeiroElemento.shift();
    const segundoResultadoDV = calculoDigitoVerificador(removendoPrimeiroElemento.join('').split(''));

    const cpfFormatado =  primeiroResultadoDV.concat(segundoResultadoDV);
    
    const final = formataCPF(cpfFormatado);

    console.log('resultado Final ', final);

    validarCPF(final);
}

gerarCPF();