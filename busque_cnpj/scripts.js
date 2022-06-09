//https://brasilapi.com.br/api/cnpj/v1/{cnpj}

/*
{
  "cnpj": "19131243000197",
  "razao_social": "OPEN KNOWLEDGE BRASIL",
  "nome_fantasia": "REDE PELO CONHECIMENTO LIVRE",
  "descricao_situacao_cadastral": "Ativa",
  "data_situacao_cadastral": "2013-10-03",
  "motivo_situacao_cadastral": 0,
  "data_inicio_atividade": "2013-10-03",
  "cnae_fiscal_descricao": "Atividades de associações de defesa de direitos sociais",
  "descricao_tipo_logradouro": "ALAMEDA",
  "logradouro": "FRANCA",
  "numero": "144",
  "complemento": "APT   34",
  "bairro": "JARDIM PAULISTA",
  "cep": 1422000,
  "uf": "SP",
  "municipio": "SAO PAULO",
  "ddd_telefone_1": "11  23851939",
  "ddd_telefone_2": null,
  "qualificacao_do_responsavel": 10,
  "capital_social": 0,
  "qsa": [
    {
      "identificador_de_socio": 2,
      "nome_socio": "NATALIA PASSOS MAZOTTE CORTEZ",
      "cnpj_cpf_do_socio": "***059967**",
      "percentual_capital_social": 0,
      "data_entrada_sociedade": "2019-02-14",
    }
  ]
}
*/

const input = document.getElementById('input')
const output = document.getElementById('divOutput')
let cnpj = ''

document.getElementById('button').addEventListener('click', function (e) {
  e.preventDefault()
  cnpj = input.value
  input.value = ''
  getData(cnpj)
})

const getData = async cnpj => {
  const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
  const data = await response.json()
  addInfos(data)
}

function addInfos(data) {
  console.log(data) // 17728978000177

  let newElement = document.createElement('p')
  newElement.innerHTML = `<p>${data.uf}</p>`
  output.appendChild(newElement)
}
