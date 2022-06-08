import Cabecalho from "../components/Cabecalho"
import Layout from "../components/Layout"
import TextoVisaoGeral from "../Content/Visaogeral"
import style from '../styles/Index.module.css'

export default function VisaoGeral() {
    return (
        <div>
            <Layout />
            <div className={style.cabecalho}>
                <Cabecalho title="Visão Geral" subtitle="Idade, Estado Civil, Nacionalidade " />
            </div>
            <TextoVisaoGeral />
        </div>
    )
}