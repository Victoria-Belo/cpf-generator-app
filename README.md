# cpf-generator-app

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-%238A4182?style=for-the-badge&logo=node.js&logoColor=white" />  
  <img src = "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/css-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/CONCLUÍDO-green?logo=github&label=STATUS" />
   <img src="https://img.shields.io/badge/ON-green?logo=github&label=GITPAGE" />
</p>


## Como é formado o CPF?

Toda pessoa que se inscreve no Cadastro de Pessoas Físicas da Receita Federal do Brasil recebe um número de inscrição de onze dígitos decimais com o seguinte padrão: 

```plaintext
ABC.DEF.GHI-JK
```

### Formato do Número

- [x] Os primeiros 8 dígitos, ABCDEFGH, formam o número-base definido pela Receita Federal no momento da inscrição
- [x] O 9º dígito, I, define a Região Fiscal responsável pela inscrição
- [x] O 10º dígito, J, é o dígito verificador dos nove primeiros seguindo o cálculo <img src = "https://wikimedia.org/api/rest_v1/media/math/render/svg/0684b21d4f00daf8788965c0d67f7c975172bb3e" style="max-width:50%; height:auto;" /> 
- [x] O 11º dígito, K, é o dígito verificador dos noves anteriores a ele seguindo a fórmula <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/ff9a75b1f2c01dc6ab178fbe4da2052188dbe8a8" style="max-width:50%; height:auto;" />
      

      
### Exemplo:
```plaintext
123.456.789-09
```

### VALORES POR ESTADO :

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
