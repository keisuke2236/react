import { useReducer, useContext, createContext } from 'react';

// 連絡先データ一覧
const contacts = [
  { id: 0, name: '山田', email: 'yamada@mail.com' },
  { id: 1, name: '佐藤大輔', email: 'satou@mail.com' },
  { id: 2, name: '吉田沙織', email: 'saori@mail.com' },
];

// 初期ステータス（通常別ファイルでReducerの定義ファイルに別で export できる様に用意しておくとわかりやすい）
const initialState = { selectedId: 0, messages: { 0: '山田さんへ', 1: '佐藤さんへ', 2: '吉田さんへ' } }

// コンテキストの作成は、コンポーネントの外で行う、通常別ファイル
const MessageState = createContext();
const MessageDispatch = createContext();

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);

  // レンダリング変数の定義
  const message = state.messages[state.selectedId];
  const contact = contacts.find((contact) => contact.id === state.selectedId);
  return (
    <MessageState.Provider value={state}>
      <MessageDispatch.Provider value={dispatch}>
        <ContactList contacts={contacts} />
        <Chat key={contact.id} message={message} contact={contact} />
      </MessageDispatch.Provider>
    </MessageState.Provider>
  );
}

// dispatch(action) で呼び出される関数、dispatch は便利な自作関数の集合体
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

// 連絡先の表示と送信先変更ボタン
function ContactList({ contacts }) {
  const selectedId = useContext(MessageState).selectedId;
  const dispatch = useContext(MessageDispatch);
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

// チャット欄表示
function Chat({ contact, message }) {
  const dispatch = useContext(MessageDispatch);
  return (
    <section className="chat">
      <textarea value={message} placeholder={contact.name + 'に送信する'}
        onChange={(e) => { dispatch({ type: 'メッセージ編集', message: e.target.value, }); }}
      />
      <br />
      <button onClick={() => dispatch({ type: 'メッセージ送信', message: message, email: contact.email })}> 送信：{contact.email}</button>
    </section>
  );
}
