//https://brasilapi.com.br/api/cnpj/v1/{cnpj}

const input = document.getElementById('input')
const output = document.getElementById('divOutput')
const button = document.getElementById('button')
let cnpj = ''

input.addEventListener('input', function (e) {
  var x = e.target.value
    .replace(/\D/g, '')
    .match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/)
  e.target.value = !x[2]
    ? x[1]
    : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '')
})

button.addEventListener('click', function (e) {
  e.preventDefault()
  cnpj = input.value
  input.value = ''
  getData(cnpj.replace(/[^0-9]/g, ''))
})

const getData = async cnpj => {
  const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
  const data = await response.json()
  addInfos(data)
}

function addInfos(data) {
  console.log(data) // 17728978000177

  output.innerHTML = ''

  let newElement = document.createElement('div')

  newElement.innerHTML = `<p><span>CNPJ:</span> ${data.cnpj}</p>`
  newElement.innerHTML += `<p><span>Razão Social:</span> ${data.razao_social}</p>`
  newElement.innerHTML += `<p><span>Nome Fantasia:</span> ${data.nome_fantasia}</p>`
  newElement.innerHTML += `<p><span>Situação Cadastral:</span> ${data.descricao_situacao_cadastral}</p>`
  newElement.innerHTML += `<p><span>Inicio da Atividade:</span> ${data.data_inicio_atividade}</p>`
  newElement.innerHTML += `<p><span>Endereço:</span> n° ${data.numero}, BAIRRO ${data.bairro}, ${data.municipio} (${data.uf}) - CEP ${data.cep}</p>`
  newElement.innerHTML += `<p><span>Complemento:</span> ${data.complemento}</p>`
  newElement.innerHTML += `<p><span>Telefone:</span> ${data.ddd_telefone_1}</p>`
  newElement.innerHTML += `<p><span>Capital Social:</span> ${data.capital_social}</p>`
  newElement.innerHTML += `<p><span>Socios:</span> ${data.qsa[0].identificador_de_socio}</p>`
  newElement.innerHTML += `<br>`

  for (let i = 0; i < data.qsa.length; i++) {
    newElement.innerHTML += `<p><span>Nome do Socio:</span> ${data.qsa[i].nome_socio}</p>`
    newElement.innerHTML += `<p><span>CPF/CNPJ do Socio:</span> ${data.qsa[i].cnpj_cpf_do_socio}</p>`
    newElement.innerHTML += `<br>`
  }
  output.appendChild(newElement)
}
