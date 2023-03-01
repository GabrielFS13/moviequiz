import './App.css';
import { useState, useEffect } from 'react'
import Menu from './components/Menu';

function App() {

  const [genero, setGenero] = useState('')
  const [emojis, setEmoji] = useState("")
  const [movieTitle, setMovie] = useState("")
  const [originalTitle, setOriginal] = useState("")
  const [movieImg, setMovieImg] = useState("")
  const [hints, setHints] = useState({})
  const [status, setStatus] = useState("")
  const [errCount, setErr] = useState(0)
  const [streak, setStreak] = useState(0)

    function pegaQuiz(genre = false){
        var conexao = ''
        setStatus('')
        setErr(0)
        setEmoji("")

        if(genre){
          conexao = `${process.env.REACT_APP_URL_API}/genero/${genre}`
        }else{
          conexao = `${process.env.REACT_APP_URL_API}`
        }

        fetch(conexao)
        .then(resp => resp.json())
        .then(infos => {
          setEmoji(infos.emojis)
          setMovie(infos.answer)
          setOriginal(infos.original)
          setHints(infos.hints)
          setMovieImg(infos.poster)
          console.log(infos)
        })
        .catch(err => console.log(err))

      }

    
    function verifica(e){
      e.preventDefault()

      if(movieTitle.includes(e.target[0].value) || originalTitle.includes(e.target[0].value)){
        setErr(10)
        setStatus("Venceu!!!")
        setStreak(streak + 1)
      }else{
        setErr(errCount + 1)
        if(errCount === 3){
          setStatus("Perdeu")
          setStreak(0)
        }
      }
    }
      useEffect( () =>{
        if(genero){
          pegaQuiz(genero)
        }else{
          pegaQuiz()
        }
      }, [genero])

  return (
    <div className="App">
      <Menu setGen={setGenero}/>
      <main>
          <div className="title">
            {status ? movieTitle : "Adivinhe o filme"}
            {status ? <button onClick={() => pegaQuiz()}>Próximo</button> : ''}
          </div>
          <div className="jogo">
            <div className="emojis">
              {emojis ? emojis : <img src="loading.gif" alt="Loading Animated Icon
By Web-Mechanic"/>}
            </div>
            <div className="img">
              {errCount < 4 ? <div className="top_img" /> :<div className="top_img" style={{opacity: 0}}/>}
              {errCount < 3 ? <div className="bottom_img" /> : <div className="bottom_img" style={{opacity: 0}} />}
              <img src={movieImg} alt={movieTitle} />
            </div>
            <div className="dicas">
              <span>{errCount < 1 || status ? '1º Dica, data de lançamento' : hints.release_date}</span>
              <span>{errCount < 2 || status ? '2º Dica, uma parte da sinopse' : hints.overview}</span>
            </div>
          </div>
          <div className="frm">
              <form onSubmit={(e) => verifica(e)}>
                <input type="text" required minLength='2'/>
                <button>Enviar</button>
              </form>
            </div>
            <div className="streak">
              <strong>Streak: {streak}</strong>
            </div>
      </main>
    </div>
  );
}

export default App;
