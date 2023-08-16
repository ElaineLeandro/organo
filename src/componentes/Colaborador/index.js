import { AiFillCloseCircle } from 'react-icons/ai'
import './Colaborador.css'
const Colaborador = ({ colaborador, imagem, cargo, corDeFundo, deletar}) => {
    return (<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={colaborador}/>
        </div>
        <div className='deletar' >
            <AiFillCloseCircle size={25} className="deletar" onClick={deletar}/>
        </div>
        <div className='rodape'>
            <h4>{colaborador}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>)
}

export default Colaborador