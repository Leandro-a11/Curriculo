import Layout from '../components/Layout'
import Cabecalho from "../components/Cabecalho"
import TextoContato from '../Content/Contatos'
import style from '../styles/Index.module.css'

export default function Contato() {
    return (
        <div>
            <Layout />
            <div className={style.cabecalho}>
                <Cabecalho title="Contato" subtitle="Meus Meios De Comunicação" />
            </div>
            <TextoContato />
        </div>
    )
}