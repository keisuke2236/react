import { useState } from 'react';

const initialItems = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Orange' },
  { id: 3, name: 'Grape' },
];

export default function ItemList() {
  const [items, setItems] = useState(initialItems);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  setItems(initialItems)

  // いつも通りのフォームパラメータ更新
  function handleItemChange(id, e) {
    setItems(
      items.map(
        item => {
          if (item.id === id) {
            return {
              ...item,
              id: item.id,
              name: item.name,
              name: e.target.value
            }
          } else {
            return item
          }
        }
      )
    )
  }

  // この部分のコードは普通に index を更新するだけでも良い説
  return (
    <>
      <h2>アイテムを選んでね</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} >
            <input value={item.name} onChange={e => handleItemChange(item.id, e)} />
            <button onClick={() => { setSelectedItemIndex(item.id) }}>選択する</button>
          </li>
        ))}
      </ul >
      <h3>
        選択されたアイテム: {items[selectedItemIndex].name}
      </h3>
    </>
  )
}
