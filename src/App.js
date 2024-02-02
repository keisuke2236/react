function Profile() {
  // return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
  // これなら()の中に書かなくてもいい
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

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
