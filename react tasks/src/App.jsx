import Prod from './prod'

function App() {
  return (
    <div>
      <div>
      <Prod />
    </div>
    <div>
      <button onClick={() => alert("Salam!")}>
        Salamla
      </button>

      <button onClick={() => console.log("Salam!")}>
        Konsola Yaz
      </button>
    </div>
    </div>
  )
}

export default App
