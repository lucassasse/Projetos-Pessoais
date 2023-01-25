function Pessoa({ nome, idade, profissao, foto }) {
  return (
    <div>
      <h2>Nome: {nome}</h2>
      <img src={foto} alt={nome} />
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  )
}

export default Pessoa
