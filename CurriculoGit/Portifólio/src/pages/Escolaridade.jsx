import Layout from '../components/Layout'
import style from '../styles/Index.module.css'
import Cabecalho from "../components/Cabecalho"
import TextoEscolaridade from '../Content/Escolaridade'

export default function Escolaridade() {
    return (
        <div>
            <Layout />
            <div className={style.cabecalho}>
                <Cabecalho title="Escolaridade" subtitle="Minha Formação Escolar" />
            </div>
            <TextoEscolaridade />
        </div>
    )
}