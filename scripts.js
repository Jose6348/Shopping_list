const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault()


const itemDaLista = document.createElement("li");
const containerItemLista = document.createElement("div");
containerItemLista.classList.add("lista-item-container");

const containerNomeDoItem = document.createElement("div");

const containerCheckbox = document.createElement("div");
containerCheckbox.classList.add("container-checkbox");

const checkboxInput = document.createElement("input");
checkboxInput.type = "checkbox";
checkboxInput.classList.add("input-checkbox");
checkboxInput.id = "checkbox-" + contador++;

const checkboxLabel = document.createElement("label");
checkboxLabel.setAttribute("for", checkboxInput.id);

const checkboxCustomizado = document.createElement("div");
checkboxCustomizado.classList.add("checkbox-customizado");

checkboxLabel.appendChild(checkboxInput);
checkboxLabel.appendChild(checkboxCustomizado);

containerCheckbox.appendChild(checkboxLabel);
containerNomeDoItem.appendChild(containerCheckbox)



const nomeDoItem = document.createElement("p");
nomeDoItem.innerText = item.value;
containerNomeDoItem.appendChild(nomeDoItem)

const containerBotoes = document.createElement("div");
const botaoRemover = document.createElement("button");
botaoRemover.classList.add("item-lista-button");

const imagemRemover = document.createElement("img");
imagemRemover.src = "img/delete.svg";
imagemRemover.alt = "Remover";

botaoRemover.appendChild(imagemRemover);
containerBotoes.appendChild(botaoRemover);

// const imagemEditar = document.createElement("img");
// imagemEditar.src = "img/edit.svg";
// imagemEditar.alt = "Editar";

// botaoEditar.appendChild(imagemEditar);
// containerBotoes.appendChild(botaoEditar);

containerItemLista.appendChild(containerNomeDoItem);
containerItemLista.appendChild(containerBotoes);
 itemDaLista.appendChild(containerItemLista);
 listaDeCompras.appendChild(itemDaLista);
}