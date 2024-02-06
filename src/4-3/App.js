// 	使わない（配列を書き換える）	使う（新しい配列を返す）
// 追加	push, unshift	concat, [...arr] spread syntax (例)
// 削除	pop, shift, splice	filter, slice (例)
// 要素置換	splice, arr[i] = ... 代入文	map (例)
// ソート	reverse, sort	先に配列をコピー (例)



import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  setArtists([
    ...artists, // 展開されると {id: 1, name:hoge, id: 2, name:fuga}
    { id: nextId++, name: name }
  ])

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        artists.push({
          id: nextId++,
          name: name,
        });
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
