# cpf-generator-app

# REGRAS
## Descrição do Número de Inscrição no CPF

Toda pessoa que se inscreve no Cadastro de Pessoas Físicas da Receita Federal do Brasil recebe um número de inscrição de onze dígitos decimais com a seguinte configuração: ABC.DEF.GHI-JK.

## Formato do Número

Os primeiros oito dígitos (ABCDEFGH) formam o número-base definido pela Receita Federal no momento da inscrição. O nono dígito (I) define a Região Fiscal responsável pela inscrição. O penúltimo dígito (J) é o dígito verificador dos nove primeiros, e o último dígito (K) é o dígito verificador dos nove anteriores a ele.

## Exemplo:
```plaintext
123.456.789-09
