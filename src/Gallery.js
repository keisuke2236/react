import Profile from "./Profile";

// export default なので  import App from "./App"; で読み込め、Gallery が利用できるようになる（わかりずらい
// export default でファイル名と全く違う動作をするコンポーネントを定義もできるがわかりづらくなるので、ファイル名と同じ名前にすることが多い
export default function Gallery() {
  return (
    // <section>は小文字はじまりなのでhtmlタグとして認識される
    // <Profile />は大文字はじまりなのでコンポーネントとして認譋される
    <section>
      <h1>3人の画像</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
