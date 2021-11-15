const paso1 = () => {
    document.getElementById('gallery').innerHTML = `
        <h1>soy la primera pagina<h1>
        <button id="alpaso2">vamos al paso 2</button>
    `
}

const paso2 = () => {
    document.getElementById('gallery').innerHTML = `
        <h1>soy la segunda pagina<h1>
        <button id="alpaso1">vamos al paso 1</button>
    `
}

paso1()

document.getElementById("gallery").addEventListener("click", (e) => {
    if ( e.target.id === 'alpaso2') paso2()
    if ( e.target.id === 'alpaso1') paso1()
});