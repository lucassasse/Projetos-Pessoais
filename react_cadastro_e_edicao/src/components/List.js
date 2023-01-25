import Item from './Item'

function List() {
  return (
    <>
      <h1>Minha lista</h1>
      <ul>
        <Item marca="Xiaomi" lancamento={2018} />
        <Item lancamento={2007} />
        <Item marca="Apple" />
      </ul>
    </>
  )
}

export default List
