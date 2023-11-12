// nono dígito
function regiaoFiscal(estado){   
    const federacoes = {
        'DF': 1, 'GO': 1, 'MS': 1, 'MT': 1, 'TO': 1,
        'AC': 2, 'AM': 2, 'AP': 2, 'PA': 2, 'RO': 2, 'RR': 2,
        'CE': 3, 'MA': 3, 'PI': 3,
        'AL': 4, 'PB': 4, 'PE': 4, 'RN': 4,
        'BA': 5, 'SE': 5,
        'MG': 6,
        'ES': 7, 'RJ': 7,
        'SP': 8,
        'PR': 9, 'SC': 9
    };
    return federacoes[estado] || 0;
}

function calculoDigitoVerificador(array){
    const dv = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    let soma = 0;
    let resto = 0;
    for (let i = 0; i < dv.length; i++){
        soma += (array[i] * dv[i]);
    }
    resto =  soma % 11;  
    return resto <= 1 ? 0 : 11 - resto; 
}

function formataCPF(n){    
    const digitos = n.split('');  
    let CPFformatado = [];   
    for(let i = 0; i <= digitos.length; i++){       
        if(i === 3 || i === 6){       
            CPFformatado.push('.');           
        }
        if(i === 9) {            
            CPFformatado.push('-');        
        }
        CPFformatado.push(digitos[i]);
    }
    return CPFformatado.join('');
}


