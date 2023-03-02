import './Menu.css'

const Menu = ({setGen, gen}) =>{

    const generos = [
        {
            "id": false,
            "name": "Aleatório"
        },
        {
            "id": 28,
            "name": "Ação"
        },
        {
            "id": 12,
            "name": "Aventura"
        },
        {
            "id": 16,
            "name": "Animação"
        },
        {
            "id": 35,
            "name": "Comédia"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentário"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Família"
        },
        {
            "id": 14,
            "name": "Fantasia"
        },
        {
            "id": 36,
            "name": "História"
        },
        {
            "id": 27,
            "name": "Terror"
        },
        {
            "id": 10402,
            "name": "Música"
        },
        {
            "id": 9648,
            "name": "Mistério"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Ficção científica"
        },
        {
            "id": 10770,
            "name": "Cinema TV"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "Guerra"
        },
        {
            "id": 37,
            "name": "Faroeste"
        }
    ]
    console.log(gen)
    return(
        <aside className='generos_menu'>
            {generos.map((genero, i) =>{
                return(
                    genero.name === "Aleatório" && !gen ? <span key={i} onClick={() => setGen(genero.id)} className="ativo">{genero.name}</span> 
                    : gen === genero.id ? <span key={i} onClick={() => setGen(genero.id)} className="ativo">{genero.name}</span> 
                    : <span key={i} onClick={() => setGen(genero.id)}>{genero.name}</span>
                    
                )
            })}
        </aside>
    )
}

export default Menu