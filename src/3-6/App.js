import { useState } from 'react';

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    // どちらも同じ結果になる
    // このコンポーネントがレンダリングされた時の walk 
    // 実行時の walk を表示しているのではなく、レンダリング時の walk の値を表示している。
    alert(walk ? `現在のwalkは${walk}` : 'Walk is next');
    setWalk(!walk);
    alert(walk ? `現在のwalkは${walk}` : 'Walk is next');
  }

  return (
    <>
      <button onClick={handleClick}>
        Change to {walk ? 'Stop' : 'Walk'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}

