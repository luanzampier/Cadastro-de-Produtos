let tbody = document.querySelector("#tbody");
let modal = document.querySelector("#modal-container");
let modalCadastro = document.querySelector('#modal-cadastro')



function abrirModal() {
  modal.classList.toggle('md-container')
}

//guardando os valores numa array
function salvarProdutos() {
  ID = document.querySelector("#cod-produto").value;
  desc = document.querySelector("#desc-produto").value;
  qnt = document.querySelector("#qnt-produto").value;
  size = document.querySelector("#size-produto").value;

  if (ID != "" && desc != "" && qnt != "" && size != "") {
    let arrayProdutos = [];
    arrayProdutos.push(`
    <td>${ID}</td>
    <td>${desc}</td>
    <td>${qnt}</td>
    <td>${size}</td>
    <td><img onclick="editar()" src="editar.png" alt=""></td>
    <td><img onclick="excluir()" src="excluir.png" alt=""></td>`);

    let tr = document.createElement("tr");
    localStorage.setItem(ID, arrayProdutos);
    tr.innerHTML = arrayProdutos;

    tbody.appendChild(tr);

    modal.style.visibility = "hidden";
  }
}
/* funçoes de editar e excluir */
function editar() {
  let confirmCodigo = window.alert("confirme o codigo");
}
function excluir() {
  let codExcluir = window.prompt("confirme o codigo");
  localStorage.removeItem(codExcluir);
  location.reload();
}
/* evento para buscar os produtos quando a pagina recarregar */
window.addEventListener("load", function () {
  let produtosSalvos = Object.keys(localStorage);

  for (let i = 0; i < produtosSalvos.length; i++) {
    buscarProdutos = localStorage.getItem(produtosSalvos[i]);
    let tr = document.createElement("tr");
    tr.innerHTML = buscarProdutos;
    tbody.appendChild(tr);
  }
});
