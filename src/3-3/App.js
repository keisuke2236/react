
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  // let index = 0;
  // ローカル変数として state 変数の index と レンダリングメソッドの setIndex を追加している
  // Compornentのトップレベルであるこの部分でしか use XX は利用できない
  const [index, setIndex] = useState(0)

  // useState はこのコンポーネントに何かしら覚えさせたい時に利用する
  // レンダリングが実行されるたびに index に値がサイドセットされる


  function handleClick() {
    // index = setIndex(index + 1)
    // ステートだけではなく index にももちろんセットされる。 setter だからね
    setIndex(index + 1)
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}
