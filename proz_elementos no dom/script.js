// 1 - Criei um elemento <li></li>
let elementoJavaScript = document.createElement("li");

// 2 -Adicionei a ele um texto
elementoJavaScript.innerText = "JavaScript";

// 3 - Adicionei um id ao elemento <li id="ling-js"></li>
elementoJavaScript.id = "ling-js"; // adiciona um id ao elemento
// console.log(elementoJavaScript);

// 4 - Capturei o elemento <ul></ul> e adicionei o elemento <li id="ling-js">JavaScript</li> criado
let listaLinguagens = document.querySelector(".lista-linguagens");
listaLinguagens.appendChild(elementoJavaScript);

// Usando o innerHTML
const postagemJavaScript = document.createElement("div");
postagemJavaScript.innerHTML = `
<h2 class="post-titulo">JavaScript</h2>
<p class="post-texto">
  JavaScript é uma linguagem de programação
</p>
`;

// Capturando o elemento pai da nossa postagem e salvamos ele em uma variável
const postagens = document.querySelector(".postagens");
postagens.appendChild(postagemJavaScript);

// Adicionando um título
let novoTitulo = document.createElement("h1");
novoTitulo.innerText = "Adicionando um H1";
novoTitulo.id = "titulo";
let tituloPrincipal = document.querySelector("main");
tituloPrincipal.appendChild(novoTitulo);