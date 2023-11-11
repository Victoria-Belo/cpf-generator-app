const { formataCPF, calculoDigitoVerificador, regiaoFiscal } = require('./generate') 

function gerarCPF(){
    const elem = 'RS'; //vai precisar puxar pelo componente    

    const random = Math.random().toFixed(8).split('.');

    const numeroPorRegiaoFiscal = regiaoFiscal(elem);
    const resultado = random[1].concat(numeroPorRegiaoFiscal);
    const r = calculoDigitoVerificador(resultado.split(''));
    const resultado1 = resultado.concat(r);

    // regra: calculo do segundo dígito deve remover primeiro elemento
    let removendoPrimeiroElemento = resultado1.split('');
    removendoPrimeiroElemento.shift();
    const r1 = calculoDigitoVerificador(removendoPrimeiroElemento.join('').split(''));

    const cpfFormado =  resultado1.concat(r1);
    
    const resultadoFinal = formataCPF(cpfFormado);

    console.log('resultadoFinal ', resultadoFinal);
    // const r = formataCPF(resultado);
}

gerarCPF();