// Alterando o H1
const tituloH1 = document.querySelector('#titulo');
tituloH1.innerText = 'Título com H1';
// console.log(tituloH1)

// Alterando a tag <a>
const link = document.querySelector('a');
link.innerText = 'Link para o site da PROz';

// Alterando a tag <ol>
const elementoOL = document.querySelector('#lista-ordenada');
elementoOL.innerHTML = `
<ol>
    <li><a href="https://prozeducacao.com.br" target=_blank> Link 01 </a></li>
    <li><a href="https://prozeducacao.com.br" target=_blank> Link 02 </a></li>
    <li><a href="https://prozeducacao.com.br" target=_blank> Link 03 </a></li>
</ol>
`