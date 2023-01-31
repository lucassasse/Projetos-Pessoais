/*
React Challenge.
Desenvolva uma aplicação em que:

- o usuário pode clicar em qualquer lugar da página.
- deve-se renderizar um pequeno círculo na posição clicada.
- a cada clique, mantém-se os círculos já criados e renderiza-se um novo.
- crie duas funcionalidades para a aplicação:
    - desfazer (undo)
    - refazer (redo)
*/

import { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [undid, setUndid] = useState([]);

  const handleClick = (event) => {
    const newDot = {
      clientX: event.clientX - 5,
      clientY: event.clientY - 5,
    };

    setList((prev) => [...prev, newDot]);
    setUndid([]);
  };

  const handleUndo = (event) => {
    event.stopPropagation();

    if (list.length === 0) {
      return;
    }

    const lastItem = list[list.length - 1];
    setUndid((prev) => [...prev, lastItem]);

    setList((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    });
  };

  const handleRedo = (event) => {
    event.stopPropagation();

    if (undid.length === 0) {
      return;
    }

    const recoveredDot = undid[undid.length - 1];
    setUndid((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    });
    setList((prev) => [...prev, recoveredDot]);
  };

  return (
    <div id='page' onClick={handleClick}>
      <button onClick={handleUndo}>Desfazer</button>
      <button onClick={handleRedo}>Refazer</button>
      {list.map((item, index) => (
        <span
          key={index}
          className='dot'
          style={{ left: item.clientX, top: item.clientY }}
        />
      ))}
    </div>
  );
}

export default App;
