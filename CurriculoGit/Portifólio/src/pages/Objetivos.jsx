import Layout from '../components/Layout'
import style from '../styles/Index.module.css'
import Cabecalho from "../components/Cabecalho"
import TextoObjetivo from '../Content/Objetivos'
export default function Objetivos() {
    return (
        <div>
            <Layout />
            <div className={style.cabecalho}>
                <Cabecalho title="Objetivos" subtitle="Meus Interesses e Qualidades" />
            </div>
            <TextoObjetivo />
        </div>
    )
}