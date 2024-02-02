export function Profile() {
  // return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
  // これなら()の中に書かなくてもいい
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

// export default なので  import App from "./App"; で読み込め、Gallery が利用できるようになる（わかりずらい
// export default でファイル名と全く違う動作をするコンポーネントを定義もできるがわかりづらくなるので、ファイル名と同じ名前にすることが多い
export default function Gallery() {
  return (
    // <section>は小文字はじまりなのでhtmlタグとして認識される
    // <Profile />は大文字はじまりなのでコンポーネントとして認譋される
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
