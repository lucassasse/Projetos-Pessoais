function SeuNome({ setNome }) {
  return (
    <div>
      <p>Qual seu nome?</p>
      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={e => setNome(e.target.value)}
      ></input>
    </div>
  )
}

export default SeuNome
