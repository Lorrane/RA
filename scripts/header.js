nome = window.name;
let ancora = document.querySelector("#"+nome);

window.addEventListener('load', () => {

    if (nome === "index") {
        ancora.classList.add("selected");
    } else if (nome === "servicos") {
        ancora.classList.add("selected");
    } else if (nome == "contatos") {
        ancora.classList.add("selected");
    }
})