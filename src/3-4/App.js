import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const contentsLength = sculptureList.length;
  const maxIndex = contentsLength - 1;

  // このコンポーネントの index が入っているので、レンダリングされているパーツが5番目なら index = 5 になっている
  const [index, setIndex] = useState(0);
  // [false, false, false, false, false, false, false, false, false, false, false, false]
  const [showDetailIndex, setShowDetailIndex] = useState(Array(contentsLength).fill(false));

  // 故に showDetailIndex[index] が現在レンダリングしているものの情報という認識になる

  function handleNextClick() {
    if (index >= maxIndex) { return setIndex(0); }
    setIndex(index + 1);
  }

  function handleBeforeClick() {
    if (index <= 0) { return setIndex(maxIndex); }
    setIndex(index - 1);
  }

  function handleShowDetailIndexChange() {
    // [...XX] 新規の配列として定義しないと動作しない
    // 参照渡しの場合元データのshowDetailIndexの値も変わるため、Reactが変更を検知できない。
    const result = [...showDetailIndex];
    result[index] = !showDetailIndex[index]
    setShowDetailIndex(result)
  }

  const sculpture = sculptureList[index];
  const isDisplay = showDetailIndex[index];

  return (
    <>
      <h3>({index + 1} of {sculptureList.length})</h3>
      <button onClick={handleBeforeClick}>前のコンテンツ</button>
      <button onClick={handleNextClick}>次のコンテンツ</button>

      <h2><i>{sculpture.name}</i> 作者： {sculpture.artist}</h2>

      <img src={sculpture.url} alt={sculpture.alt} />
      <br />

      現在{index + 1}番目のコンテンツは {showDetailIndex[index] ? '表示' : '非表示'} です <br />
      <button onClick={handleShowDetailIndexChange}>
        {isDisplay ? '表示' : '非表示状態'} 切り替え
      </button><br />
      <p> {isDisplay && sculpture.description} </p>
    </>
  );
}
