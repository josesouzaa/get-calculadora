const calculadora = document.querySelector('form')
const button = document.querySelector('button')
const resultado = document.querySelector('#resultado')
const tmb = document.querySelector('[data-tmb]')
const tdee = document.querySelector('[data-tdee]')

const dados = {
  atividade: 'escolha',
}

function digitou(event) {
  const name = event.target.name
  const value = event.target.value
  dados[name] = value
}

function darResultado() {
  resultado.classList.add('ativo')
  tmb.textContent = dados.tmb.toFixed()
  tdee.textContent = dados.tdee.toFixed()
}

const possuiGeneroeAtividade = (genero) => dados.genero === genero && dados.atividade !== 'escolha'

function calcular(event) {
  if (Object.keys(dados).length >= 5) {
    event.preventDefault()
  }

  if (possuiGeneroeAtividade('masculino') && Object.keys(dados).length >= 5) {
    dados.tmb = (10 * +dados.peso) + (6.25 * +dados.altura) - (5 * +dados.idade) + 5
    dados.tdee = +dados.tmb * +dados.atividade
    darResultado()
  } else if (possuiGeneroeAtividade('feminino') && Object.keys(dados).length >= 5) {
    dados.tmb = (10 * +dados.peso) + (6.25 * +dados.altura) - (5 * +dados.idade) - 161
    dados.tdee = +dados.tmb * +dados.atividade
    darResultado()
  } else {
    resultado.classList.remove('ativo')
  }
}

button.addEventListener('click', calcular)

calculadora.addEventListener('change', digitou)