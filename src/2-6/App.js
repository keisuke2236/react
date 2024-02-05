export default function SignUp() {
  return (
    <form onSubmit={(e) => {
      e.preventDefault
      console.log("submit data")
    }}>
      <input />
      <button>send</button>
    </form>
  )
}

// stopPropagation はイベントの伝搬停止
// preeventDefault は通常イベントの停止
  