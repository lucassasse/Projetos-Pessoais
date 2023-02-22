/*
? DESAFIO - Shopping Cart:

Desenvolver um carrinho de compras funcional. Utilize a API CruCrud.
Funcionalidades que esperamos que você desenvolva:

* todo - fazer um placeholder para quando o carrinho estiver vazio
* todo - inserção de novos produtos no carrinho
* todo - remoção de produtos já inseridos
* todo - alteração de quantidade de cada item 
* todo - cálculo do preço total dos itens inseridos

todo - FUNCIONALIDADE EXTRA: aplicação de cupom de desconto
*/
import './styles.scss'

import PageHeader from './layout/PageHeader'
import PageTitle from './layout/PageTitle'
import Summary from './Summary'
import TableRow from './TableRow'
import { useEffect, useState } from 'react'
import { api } from './provider'

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function App() {
  const [cart, setCart] = useState([])

  const productObject = {
    name: 'product',
    category: 'categoria',
    price: randomNumber(300, 1200),
    quantity: 1
  }

  const fetchData = () => {
    api.get('/cart').then(response => setCart(response.data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleAddItem = () => {
    api.post('/cart', productObject).then(response => {
      fetchData()
    })
  }

  const handleRemoveItem = item => {
    api.delete(`/cart/${item._id}`).then(response => {
      fetchData()
    })
  }

  const handleUpdateItem = (item, action) => {
    let newQuantity = item.quantity

    if (action === 'decrease') {
      if (newQuantity === 1) {
        return
      }
      newQuantity -= 1
    }
    if (action === 'increase') {
      newQuantity += 1
    }

    const newData = { ...item, quantity: newQuantity }
    delete newData._id
    api.put(`/cart/${item._id}`, newData).then(() => {
      fetchData()
    })
  }

  const getTotal = () => {
    let sum = 0

    for (let item of cart) {
      sum += item.price * item.quantity
    }

    return sum
  }

  const cartTotal = getTotal()

  return (
    <>
      <PageHeader />
      <main>
        <PageTitle data={'Seu carrinho'} />
        <div className="content">
          <section>
            <button
              onClick={handleAddItem}
              style={{ padding: '5px 10px', marginBottom: '15px' }}
            >
              Add to cart
            </button>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <TableRow
                    key={item.id}
                    data={item}
                    handleRemoveItem={handleRemoveItem}
                    handleUpdateItem={handleUpdateItem}
                  />
                ))}
                {cart.length === 0 && (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center' }}>
                      <b>Carrinho de compras vazio.</b>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
          <aside>
            <Summary total={cartTotal} />
          </aside>
        </div>
      </main>
    </>
  )
}

export default App
