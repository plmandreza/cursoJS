<h1>JavaScript - Curso em Vídeo</h1>

<h2>Aulas 01 a 04</h2>

Cliente x Servidor

JS é uma tecnologia “client side”

HTML (Hypertext Markup Language) e CSS(Cascading Style Sheets) não são linguagens de programação, o correto é “desenvolver em…”

<h3>JS vs. ECMAScript:</h3>
ECMA - "padronização ISO da Europa", versão padronizada do JS
1.0 - ES5 - ES 20… (por ano)

Java ≠ JavaScript (herdou o nome, mas não são do mesmo criador)

Jscript (micrsoft) ≠ JS (netscape-mozilla) 

Nodejs == máquina que roda JS fora do navegador/no lado do servidor

Tecnologias - nodejs, angular (google), react (meta)/reactnative (mobile), jquery (mozilla), vue, electron (github-interfaces gráficas-vscode…), ionic (sdk-mobile), cordova, phaser (gaming), pixijs, impact etc → conjunto de bibliotecas e frameworks

<h2>Aula 05</h2>

var -> variável (guarda dados)

null -> nulo

= -> atribuição

string -> cadeia de caracteres dentro de "" '' ``

identificador -> nome de cada variável / REGRAS: podem começar com letra, $, _ / não podem começar com números, mas podem ser utilizados / aceita acentos e símbolos / não podem conter espaços / não podem ser palavras reservadas (ex.: function, alert, var...) / case sensitive / utilizar nomes coerentes (ex.: nome, salario, idade...)

não é necessário colocar ; no final de cada linha de código

digitar "node" no terminal do vscode para iniciar o nodejs

ctrl + L limpa o terminal

Tipos primitivos (data types): number (infinity/NaN not a number), string, boolean (true/false), null, undefined, object (Array), function

typeof <i>variável, número, [ ], { }, function( ){ }...</i> - para saber o tipo de dado

<h2>Aula 06</h2>

Principais: number e string

+adição -> concatenação

string + string = concatenação -> Só junta os números, não soma. Precisa fazer a conversão de tipos. 

number + number = soma

Conversão de tipos:
Number.parseInt(n) -> parse é "converter" / Int -> inteiro

Number.parseFloat(n) -> Float -> ponto flutuante / real

Simplificada: Number(n) -> as anteriores "forçam" a conversão

String(n) / n.toString()

CTRL + Shift + ' -> abre novo terminal

Formatando strings: template string -> `crase ${ } crase`  " -> ${ } == placeholder

s.length -> atributo -> conta quantos caracteres a string tem (<i>s</i> é a variável)

s.toUpperCase() -> MAIÚSCULAS

s.toLowerCase() -> minúsculas

ln -> line / quebra de linha ex.: document.writeln

"menor br/ maior" break row (html)

Formatando números: n1.toFixed(2) fixo com 2 casas -> método interno

n1.toFixed(2).replace('.', ',') troca ponto por vírgula

n1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) -> string localizada / { } objeto -> ex.: 'R$ 1.545,50'

<h2>Aula 07</h2>
Operadores: aritméticos, atribuição, relacionais, lógicos, ternário...

ex.: typeof n

Aritméticos -> cálculos -> +, -, *, /, % resto da divisão inteira, ** potência -> binários

Precedência de operadores -> ex.: em 5 + 3 / 2, a divisão será feita antes da soma, o resultado será 6.5. (5 + 3) / 2 é 4

Ordem de precedência: ( ) -> ** -> * / % (a prioridade é do que vier primeiro) -> + -

A linguagem só dá erro quando for erro sintático (sintax error)

Atribuição -> simples: = (recebe valores)

<strong>n</strong> = <strong>n</strong> + 4 -> <strong>n</strong> += 4 (autorreferência) -> simplificador

-=, *=, /=...

Incremento -> ++, -- (+=, -=) -> simplificador

Pré-incremento -> ++n (soma antes, o padrão é depois)

<h2>Aula 08</h2>
 Relacionais -> >, <, >=, <=, ==, != -> o resultado será sempre verdadeiro ou falso (booleano) -> não tem uma ordem, é o que vier primeiro

 5 == 5 -> true e 5 == '5' -> true

 Identidade (igualdade restrita): === (mesmo valor e mesmo tipo), !==...

 5 === '5' -> false
 
 Lógicos -> ! negação (operador unário -> um operando -> true / false), && conjunção E (operador binário -> 2 valores lógicos), | | disjunção OU (operador binário -> 2 valores lógicos)

 Ordem de execução dos oper. lógicos: NÃO -> E -> OU

 true && true -> true

 true && false -> false

 false && false -> false

 false && true -> false

 false && false -> false



 true | | true -> true

 true | | false -> true

 false | | true -> true

 false | | false -> false

 a > b && b % 2 == 0
 -> false  AND true == false

 Ordem de precedência: Aritméticos -> Relacionais -> Lógicos

 Ternários -> ? e : dentro de uma mesma expressão. é sempre o último na ordem.

 3 blocos/operandos -> teste ? true : false
 
 teste ? true (o que vai acontecer se o teste lógico for verdadeiro) : false (o que vai acontecer se o teste lógico for falso)


ex.: média >= 7.0 ? 'Aprovado' : 'Reprovado'

Atalhos: setas cima/baixo navegam/repetem as linhas de comando 

ex.: var idade = 19

var r = idade >= 18 ? 'MAIOR' : 'MENOR' -> true ('MAIOR')

<h2>Aula 09</h2>

DOM - Documento Object Model -> vertente web do js, ferramenta dentro do navegador, conjunto de objetos do js no tratamento de componentes visuais.
Conjunto de objetos dentro do navegador que dá acesso aos componentes internos do website (não funciona dentro do NodeJS).

Árvore DOM - estrutura 

raiz: window (objeto onde fica tudo dentro do js)

-> location: url, qual a pág. atual/anterior...

-> document (parent): documento atual -> html (child) (parent) --> head (child) ---> meta e title --> body (child) ---> h1, p, p (----> strong), div

-> history: guarda de onde veio e aonde vai...

são ELEMENTOS (parent/child)

Métodos de acesso: 1. por Marca (Tag) document.getElementsByTagName( ) - para muitos objetos; 2. por ID document.getElementById( ) - para um objeto; 3. por Nome document.getElementsByName( ) - para muitos objetos; 4. por Classe document.getElementsByClassName( ); 5. por Seletor (CSS) querySelector( ) querySelectorAll( ) - plural.

<h2>Aula 10</h2>

Eventos DOM: tudo o que pode acontecer com o elemento; mais comuns -> eventos de mouse ex.: mouseenter, mousemove, mousedown, mouseup, click, mouseout...

javascript dom events list https://yari-demos.prod.mdn.mozit.cloud/pt-BR/docs/Web/Events

touch events -> touchscreen

"disparar"

Funções: conjunto de linhas/códigos que vão ser executadas só quando o evento ocorres. 

linhas ->  bloco
function ação(parâmetros){ 
    bloco
}

"function" nomeia

Eventos podem ser configurados diretamente no HTML ou no script.

Listeners -> também dispara eventos -> usado para simplificar -> ligação entre HTML e JS. Ex.: area.addEventListener('click', clicar)

Detecção de erros: botão direito -> Inspecionar (devtools) ->  x (em vermelho) erro








