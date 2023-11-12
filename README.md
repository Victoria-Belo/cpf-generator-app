# cpf-generator-app

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-%238A4182?style=for-the-badge&logo=node.js&logoColor=white" />  
  <img src = "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/css-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/CONCLUÍDO-green?logo=github&label=STATUS" />
   <img src="https://img.shields.io/badge/ON-green?logo=github&label=GITPAGE" />
</p>

## BRANCHS
<p><img src="https://img.shields.io/badge/MAIN-8A2BE2?logo=git&label=BRANCH&labelColor=white"/> https://victoria-belo.github.io/cpf-generator-app/</p>
<br>
<p><img src="https://img.shields.io/badge/DEV-8A2BE2?logo=git&label=BRANCH&labelColor=white" /> Configurado para localhost. Baixe, instale e acesse http://localhost:8080/ </p>
<br>

## Como é formado o CPF?

Toda pessoa que se inscreve no Cadastro de Pessoas Físicas da Receita Federal do Brasil recebe um número de inscrição de onze dígitos decimais com o seguinte padrão: 

```plaintext
ABC.DEF.GHI-JK
```

### Formato do Número

- [x] Os primeiros 8 dígitos, ABCDEFGH, formam o número-base definido pela Receita Federal no momento da inscrição
- [x] O 9º dígito, I, define a Região Fiscal responsável pela inscrição
- [x] O 10º dígito, J, é o dígito verificador dos nove primeiros
- [x] O 11º dígito, K, é o dígito verificador dos noves anteriores a ele 


### VALOR NONO DÍGITO:

| Código | Região Fiscal                |
|--------|-----------------------------|
| 1      | DF, GO, MS, MT e TO          |
| 2      | AC, AM, AP, PA, RO e RR      |
| 3      | CE, MA e PI                  |
| 4      | AL, PB, PE, RN               |
| 5      | BA e SE                      |
| 6      | MG                            |
| 7      | ES e RJ                      |
| 8      | SP                            |
| 9      | PR e SC                      |
| 0      | RS                            |


### Dígito Verificador

- [x] Os nove primeiros dígitos são ordenadamente multiplicados pela sequência 10 a 2, ou seja, dígito A sendo multiplicado por 10, B por 9 e assim por diante. Em seguida, calcula-se o resto (r) da divisão da soma dos resultados por 11. Isso é:
      (A * 10) = v1, (B * 9) = v2(...); A soma então é v1 + v2 + v3(...)
      O resultado da soma dividido por 11 para obter o resto.

- [x]  O segundo Dígito Verificador é calculado pela mesma regra, na qual os números a serem multiplicados pela sequência 10 são contados a partir do segundo dígito, sendo então o dv1 o último algarismo.  Como antes, calcula-se o resto (r) da divisão da soma dos resultados por 11.

- [x] Para ambos dígitos verificadores, se o valor do resto for menor ou igual a 1, o dig. verificador é 0. Se não, aplica-se: 11 - resto 


### Resultado:
```plaintext
123.456.789-09
```

