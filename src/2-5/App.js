function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}


// イベントの伝搬とあるが、実際のブラウザの挙動と同じということをあらわしているのではないか
export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => { alert('上層部のイベント'); }}>
      <Button onClick={() => alert('下のパーツのイベント')}>
        Play Movie
      </Button>
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}

// イベントの伝搬を意図的に起こしたい場合は Capture を末尾につける
// onXXCapture
// Capture をつけると通常とは異なる解析が行われる
// 例えばこんな感じで定義してあげると4階層分の解析が行われる
<div onClickCapture={() => { console.log('Level 1 Capture Phase'); }}>
  <div onClickCapture={() => { console.log('Level 2 Capture Phase'); }}>
    <div onClickCapture={() => { console.log('Level 3 Capture Phase'); }}>
      <button onClickCapture={() => { console.log('Level 4 Capture Phase'); }}>
        Click me
      </button>
    </div>
  </div>
</div>

// イベントの伝搬に頼った設計は怖い。
// 明示的に指定することもできる
function Button({ event, children }) {
  return (
    <button onClick={event}>
      {children}
    </button>
  )
}
