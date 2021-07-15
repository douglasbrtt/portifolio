document.querySelector(".hamburguer").addEventListener("click", ()=>
   document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#qtde").addEventListener("change", atualizarPreço)
document.querySelector("#js").addEventListener("change", atualizarPreço)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreço)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreço)
document.querySelector("#prazo").addEventListener("change", function() {
   
   const prazo = document.querySelector("#prazo").value   
   document.querySelector ("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
   atualizarPreco()
})

function atualizarPreço(){
   const qtde = document.querySelector("#qtde").value
   const temJS = document.querySelector("#js").checked
   const incluiLayout = document.querySelector("#layout-sim").checked
   const prazo = document.querySelector("#prazo").value

   let preco = qtde * 200;
   if (temJS) preco *= 1.1
   if (incluiLayout) preco += 500
   let taxaUrgencia = 1 - prazo*0.1;
   preco *= 1 + taxaUrgencia

   document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}