let listaAmigos = [];
let amigosSorteados = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo === '') {
        alert('Por favor, insira um nome.');
    } else if (listaAmigos.includes(amigo)) {
        return adicionarAmigo();
    } else {
        listaAmigos.push(amigo);
        limparCampo();
        exibirAmigos();
        return listaAmigos;
    }
}

function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = '';
}

function exibirAmigos() {
    let lista = document.querySelector('ul');
    lista.innerHTML = '';
    listaAmigos.forEach((amigo) => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('A lista de amigos está vazia.');
        return;
    }

    if (amigosSorteados.length === listaAmigos.length) {
        alert('Todos os nomes foram sorteados.');
        return;
    }

    let sorteio;
    do {
        sorteio = Math.floor(Math.random() * listaAmigos.length);
    } while (amigosSorteados.includes(listaAmigos[sorteio]));

    let amigoSorteado = listaAmigos[sorteio];
    amigosSorteados.push(amigoSorteado);

    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`;
    document.querySelector('ul').innerHTML = ''; // Esconde a lista de amigos
}