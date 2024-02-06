import { useState } from 'react';

const initialItems = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Orange' },
  { id: 3, name: 'Grape' },
];

export default function ItemList() {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(initialItems[0]);

  function handleItemChange(id, e) {
    setItems(
      items.map(
        item => {
          if (item.id === id) {
            return {
              ...item,
              name: e.target.value
            }
          } else {
            return item
          }
        }
      )
    )
  }

  return (
    <>
      <h2>アイテムを選んでね</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} >
            <input value={item.name} onChange={e => handleItemChange(item.id, e)} />
            <button onClick={() => { setSelectedItem(item) }}>選択する</button>
          </li>
        ))}
      </ul >
      <h3>
        選択されたアイテム: {selectedItem.name}
      </h3>
    </>
  )
}
