import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Street from '../pages/Street'
import Store from '../pages/Store'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/street" element={<Street />}></Route>
      <Route exact path="/store" element={<Store />}></Route>
    </Routes>
  )
}
