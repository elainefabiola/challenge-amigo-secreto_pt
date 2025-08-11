let listaAmigos= [];

function adicionarAmigo() {
  let amigo = document.querySelector('input').value.trim();
  if (amigo === "") {
    alert("Por favor, digite o nome do amigo.");
    return;
  }

  listaAmigos.push(amigo); 
  console.log(listaAmigos);
  let exibirNome = document.getElementById('listaAmigos');
      exibirNome.innerHTML = listaAmigos.join('<br>');
    
}
function sortearAmigo(){
    let numeroLista = listaAmigos.length;
    let amigoEscolhido = parseInt(Math.random() * numeroLista +1);
     let amigoSorteado = listaAmigos[amigoEscolhido];
      document.getElementById('resultado').innerHTML = amigoSorteado;
}
