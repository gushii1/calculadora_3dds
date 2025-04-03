let resultado = document.getElementById('resultado');
let expressao = '';

function adicionar(valor) {
  expressao += valor;
  resultado.value = expressao;
}

function adicionarOperador(operador) {
  if (expressao.length > 0 && !isNaN(expressao[expressao.length - 1])) {
    expressao += operador;
    resultado.value = expressao;
  }
}

function calcular() {
  try {
    expressao = eval(expressao).toString();
    resultado.value = expressao;
  } catch (e) {
    resultado.value = 'Erro';
    expressao = '';
  }
}

function limpar() {
  expressao = '';
  resultado.value = '';
}


