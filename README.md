# Calculadora de Partidas Rankeadas

## Descrição
Esta é uma calculadora simples em JavaScript que determina o nível de um jogador com base na quantidade de vitórias e derrotas em partidas ranqueadas.

## Como Usar
1. Abra o arquivo `calculadora-rankeadas.js` no seu editor de código preferido.
2. Modifique as variáveis `vitorias` e `derrotas` com os valores desejados.
3. Execute o script JavaScript em um ambiente que suporte Node.js ou abra o console do seu navegador.
4. O resultado, mostrando o saldo de vitórias e o nível, será exibido.

## Funcionalidades
- A função `calcularNivel` recebe a quantidade de vitórias e derrotas e determina o nível do jogador.
- O saldo de vitórias é calculado usando a função `Math.abs()` para garantir que seja sempre positivo.

## Níveis
- Menos de 10 vitórias: Ferro
- 11 a 20 vitórias: Bronze
- 21 a 50 vitórias: Prata
- 51 a 80 vitórias: Ouro
- 81 a 90 vitórias: Diamante
- 91 a 100 vitórias: Lendário
- 101 ou mais vitórias: Imortal

## Exemplo
```javascript
var vitorias = 75;
var derrotas = 20;

var resultado = calcularNivel(vitorias, derrotas);

console.log("O Herói tem saldo de " + resultado.saldoVitorias + " está no nível de " + resultado.nivel);
