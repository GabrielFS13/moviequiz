import './Menu.css'
import {GiMineExplosion, GiMountainClimbing, GiRobber,
GiDramaMasks, GiFamilyHouse, GiFairyWand,
GiPumpkinMask, GiPerspectiveDiceSixFacesRandom, GiMaterialsScience,
GiSuspicious, GiFallingBomb} from 'react-icons/gi'
import {FaRandom, FaLaughSquint, FaMusic, FaHatCowboy} from 'react-icons/fa'
import {TbBrandDisney} from 'react-icons/tb'
import {AiFillBook, AiFillHeart} from 'react-icons/ai'
import {BiHistory, BiCameraMovie} from 'react-icons/bi'
const Menu = ({setGen, setCur, gen}) =>{

    const generos = [
        {
            "id": false,
            "icon": <FaRandom size={20} title='Aleatório'/>,
            "name": "Aleatório"
        },
        {
            "id": 28,
            "icon": <GiMineExplosion size={20} title="Ação" />,
            "name": "Ação"
        },
        {
            "id": 12,
            "icon": <GiMountainClimbing size={20} title='Aventura'/>,
            "name": "Aventura"
        },
        {
            "id": 16,
            "icon": <TbBrandDisney size={20} title="Animação" />,
            "name": "Animação"
        },
        {
            "id": 35,
            "icon": <FaLaughSquint size={20} title="Comédia"/>,
            "name": "Comédia"
        },
        {
            "id": 80,
            "icon": <GiRobber size={20} title="Crime" />,
            "name": "Crime"
        },
        {
            "id": 99,
            "icon": <AiFillBook size={20} title="Documentário" />,
            "name": "Documentário"
        },
        {
            "id": 18,
            "icon": <GiDramaMasks size={20} title="Drama" />,
            "name": "Drama"
        },
        {
            "id": 10751,
            "icon": <GiFamilyHouse size={20} title="Família" />,
            "name": "Família"
        },
        {
            "id": 14,
            "icon": <GiFairyWand size={20} title="Fantasia"/>,
            "name": "Fantasia"
        },
        {
            "id": 36,
            "icon": <BiHistory size={20} title="História"/>,
            "name": "História"
        },
        {
            "id": 27,
            "icon": <GiPumpkinMask size={20} title="Terror"/>,
            "name": "Terror"
        },
        {
            "id": 10402,
            "icon": <FaMusic size={20} title="Música"/>,
            "name": "Música"
        },
        {
            "id": 9648,
            "icon": <GiPerspectiveDiceSixFacesRandom size={20} title="Mistério"/>,
            "name": "Mistério"
        },
        {
            "id": 10749,
            "icon": <AiFillHeart size={20} title="Romance"/>,
            "name": "Romance"
        },
        {
            "id": 878,
            "icon": <GiMaterialsScience size={20} title="Ficção científica" />,
            "name": "Ficção Científica"
        },
        {
            "id": 10770,
            "icon": <BiCameraMovie size={20} title="Cinema TV" />,
            "name": "Cinema TV"
        },
        {
            "id": 53,
            "icon": <GiSuspicious size={20} title="Thriller" />,
            "name": "Thiller"
        },
        {
            "id": 10752,
            "icon": <GiFallingBomb size={20} title="Guerra" />,
            "name": "Guerra"
        },
        {
            "id": 37,
            "icon": <FaHatCowboy size={20} title="Faroeste" />,
            "name": "Faroeste"
        }
    ]
    return(
        <aside className='generos_menu'>
            {generos.map((genero, i) =>{
                return(
                    genero.name === "Aleatório" && !gen ? <span key={i} onClick={() => {
                        setGen(genero.id)
                        setCur(genero.name)
                    }} className="ativo">{genero.icon}</span> 
                    : gen === genero.id ? <span key={i} onClick={() => {
                        setGen(genero.id)
                        setCur(genero.name)
                    }} className="ativo">{genero.icon}</span> 
                    : <span key={i} onClick={() => {
                        setGen(genero.id)
                        setCur(genero.name)
                    }}>{genero.icon}</span>
                    
                )
            })}
        </aside>
    )
}

export default Menu