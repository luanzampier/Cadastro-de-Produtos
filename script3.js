let tbody = document.querySelector("#tbody");
let modal = document.querySelector(".modal-container");
const btnSalvar = document.querySelector(".salvar");
let ID = document.querySelector("#cod-produto").value;
let desc = document.querySelector("#desc-produto").value;
let qnt = document.querySelector("#qnt-produto").value;
let size = document.querySelector("#size-produto").value;
let btnEditar = document.querySelector(".editar");
let btnExcluir = document.querySelector(".excluir");

function abrirModal() {
  modal.style.visibility = "visible";
}

btnSalvar.addEventListener("click", function () {
  
  class Produto {
    constructor(id, arrayProdutos) {
      this.id = 0;
    }

    salvarProdutos() {
      let arrayProdutos = [];

      if (ID != "" && desc != "" && qnt != "" && size != "") {
        arrayProdutos = [ID, desc, qnt, size, btnEditar, btnExcluir];
      }

      for (let i = 0; i < arrayProdutos.length; i++) {
        this.id = i;
        let produto = new Produto(i, arrayProdutos);
        console.log(produto);
      }
      salvarProdutos()
    }
    
  }
  
});
