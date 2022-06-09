import Navegacao from "./Navegacao"
import style from '../styles/listaLink.module.css'

export default function Rodape() {
    return (
        <div className={style.space} >
            <Navegacao title="Visao Geral" link="./VisaoGeral" />
            <Navegacao title="Habilidades" link="./Habilidades" />
            <Navegacao title="Escolaridade" link="./Escolaridade" />
            <Navegacao title="Objetivos" link="./Objetivos" />
            <Navegacao title="Contato" link="./Contato" />
        </div>
    )
}