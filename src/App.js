import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [emojis, setEmoji] = useState("")
  const [movieTitle, setMovie] = useState("")
  const [movieImg, setMovieImg] = useState("")
  const [hints, setHints] = useState({})
  const [status, setStatus] = useState("")
  const [errCount, setErr] = useState(0)
  const [vitorias, setVitoria] = useState(0)
  const [derrotas, setDerrotas] = useState(0)

  function pegaQuiz(){
    setStatus('')
    setErr(0)
    setEmoji("")

    fetch(process.env.REACT_APP_URL_API)
    .then(resp => resp.json())
    .then(infos => {
      setEmoji(infos.emojis)
      setMovie(infos.answer)
      setHints(infos.hints)
      setMovieImg(infos.poster)
      console.log(infos)
    })
    .catch(err => console.log(err))
  }
  useEffect( () =>{

    pegaQuiz()

  }, [])

  function verifica(e){
    e.preventDefault()
    const palpite = e.target[0].value

    if(movieTitle.includes(palpite)){
      setStatus(`Você Acertou!!! ${movieTitle}, indo pra próxima...`)
      e.target[0].value = ''
      setVitoria(parseInt(vitorias)+1)
      setTimeout(pegaQuiz ,2500);
    }else{
      e.target[0].value = ''
      if(errCount === 3){
        setStatus(`Derrota!, o filme era ${movieTitle}, indo pra próxima...`)
        setDerrotas(parseInt(derrotas)+1)
        setTimeout(pegaQuiz, 2500)
      }else{
        setErr(errCount+1)
      }
    }
  }

  return (
    <div className="App">
      <main className='jogo'>
        <div className='answer'>
            <h1>{status ? status : "????????"}</h1>
        </div>
        <div className='content'>
          <div className='emotes'>
            {status ? <img src={movieImg} alt={movieTitle} /> : emojis ? emojis : "Buscando filme..."}
        
          </div>
          <div className='hints'>
            <h2>Cada tentativa falha disponibilizará uma dica.</h2>
            <span> {errCount >= 1 ? hints.release_date : "1ºDica" } </span>
            <span className='genre'> {errCount >= 2 ? hints.genre?.map(dica => <p key={dica.id}><b>{dica.name}</b></p>) : "2ºDica"} </span>
            <span> {errCount >= 3 ? hints.overview !== '' ? hints.overview?.slice(0, 50)+"...": "Se deu mal... não tem sinopse :/" : "3ºDica"} </span>
          </div>
          <div className='input'>
            <form onSubmit={(e) => verifica(e)}>
              <input type="text" required minLength="3" placeholder='Seu palpite...'/>
              <button>Enviar</button>
            </form>
          </div>
          <div className='status_count'>
            <span className="win">Vitórias: {vitorias ? vitorias : 0}</span>
            <span className='defeat'>Derrotas: {derrotas ? derrotas : 0}</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
