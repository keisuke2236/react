import { useReducer } from 'react';

export default function Messenger() {
  const contacts = [
    { id: 0, name: '山田', email: 'yamada@mail.com' },
    { id: 1, name: '佐藤大輔', email: 'satou@mail.com' },
    { id: 2, name: '吉田沙織', email: 'saori@mail.com' },
  ];
  const initialState = { selectedId: 0, messages: { 0: '山田さんへ', 1: '佐藤さんへ', 2: '吉田さんへ' } };
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.messages[state.selectedId];
  const contact = contacts.find((contact) => contact.id === state.selectedId);
  return (
    <div>
      <ContactList contacts={contacts} selectedId={state.selectedId} dispatch={dispatch} />
      <Chat key={contact.id} message={message} contact={contact} dispatch={dispatch} />
    </div>
  );
}

function messengerReducer(state, action) {
  switch (action.type) {
    case '送信先変更': {
      return { ...state, selectedId: action.contactId, message: '' };
    }
    case 'メッセージ編集': {
      return { ...state, messages: { ...state.messages, [state.selectedId]: action.message } };
    }
    case 'メッセージ送信': {
      alert('メッセージを' + action.email + 'に送信しました: ' + action.message)
      return { ...state, message: '' }
    }
    default: {
      throw Error('アクションが見つかりません');
    }
  }
}

function Chat({ contact, message, dispatch }) {
  return (
    <section className="chat">
      <textarea value={message} placeholder={contact.name + 'に送信する'}
        onChange={(e) => {
          dispatch({ type: 'メッセージ編集', message: e.target.value, });
        }}
      />
      <br />
      <button
        onClick={
          () => dispatch({ type: 'メッセージ送信', message: message, email: contact.email })
        }>
        送信：{contact.email}
      </button>
    </section>
  );
}

function ContactList({ contacts, selectedId, dispatch }) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                dispatch({ type: '送信先変更', contactId: contact.id, });
              }}>
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
