import Gallery from "./Gallery";
import Profile from "./Profile";
import Bio from "./Bio.tsx";
import List from "./List";
// このように記載すると default export になり、3つ表示される
// Profile という名前で Gallely を import してしまっている非常にわかりづらい状態
// import Profile from "./Gallery";

export default function App() {
  return (
    <main>
      <h1>App.js</h1>
      <List />
      <Gallery />
      <Profile>
        <Bio />
      </Profile>
    </main>
  );
}
