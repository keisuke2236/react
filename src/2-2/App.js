export default function Button() {
  function hundleClick() {
    console.log('I don\'t do anything');
  }

  // onClick 自体がイベントハンドラー
  return (
    <>
      <button onClick={hundleClick}>
        I don't do anything
      </button>

      <button onClick={
        function hoge() {
          console.log('直接関数を定義できるよ')
        }
      }>直接定義関数、しかし、hogeは別から参照されないし命名する意味がない</button>

      <button onClick={
        () => {
          console.log('無名関数定義でも良い')
        }
      }>無名関数定義</button>

      <button onClick={console.log("hoge")}>レンダー時に呼ばれる</button>
    </>
  );
}
