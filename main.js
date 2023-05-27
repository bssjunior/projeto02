const formContato = document.getElementById('form-contato');
const tabelaContatos = document.getElementById('tabela-contatos');
const tbodyContatos = tabelaContatos.querySelector('tbody');

const contatos = [];

formContato.addEventListener('submit', function (e) {
  e.preventDefault();

  cadastrarContato();
});

function cadastrarContato() {
  const inputNome = document.getElementById('nome');
  const inputTelefone = document.getElementById('telefone');

  const nome = inputNome.value;
  const telefone = inputTelefone.value;

  const contatoExistente = contatos.find(contato => contato.nome === nome || contato.telefone === telefone);
  
  if (contatoExistente) {
    alert('Esse contato ou número já foi adicionado na agenda.');
    return;
  }

  const linha = document.createElement('tr');
  linha.innerHTML = `
    <td>${nome}</td>
    <td>${telefone}</td>
  `;

  tbodyContatos.appendChild(linha);

  contatos.push({ nome, telefone });

  inputNome.value = '';
  inputTelefone.value = '';
}