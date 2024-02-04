function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return (
    <Button onClick={handlePlayClick}>
      {movieName}を再生する
    </Button>
  );
}

function UploadButton() {
  return (
    <Button onClick={() => alert('アップロードしています')}>
      画像をアップロードする
    </Button>
  );
}

export default function App() {
  return (
    <div>
      <PlayButton movieName="魔女の宅急便" />
      <UploadButton />
    </div>
  );
}
