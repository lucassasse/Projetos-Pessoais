function Saudacao({ nome }) {
  function gerarSaudacao(algumNome) {
    return `Olá ${algumNome}, tudo bom?`
  }

  return (
    <>
      {nome && <p>{gerarSaudacao(nome)}</p>}
    </>
  )
}

export default Saudacao
