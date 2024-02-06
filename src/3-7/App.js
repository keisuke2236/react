// イベントハンドラの全てのコードの実行完了までReactは state の更新を待機している
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  // fugaとnはローカル変数 引数として 値を持っているだけ
  // イベントハンドラ onClick が終わるまで更新を待機する
  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(fuga => fuga + 5);
        setNumber(number + 5);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
}
