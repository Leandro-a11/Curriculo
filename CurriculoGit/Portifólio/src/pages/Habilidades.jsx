import Layout from '../components/Layout'
import Cabecalho from "../components/Cabecalho"
import style from '../styles/Index.module.css'
import TextoHabilidades from '../Content/Habilidades'

export default function Habilidade() {
    return (
        <div>
            <Layout />
            <div className={style.cabecalho}>
                <Cabecalho title="Minhas Habilidades E Conhecimentos"
                    subtitle="Linguagens De Programação,Idiomas,Certificados" />
            </div>
            <TextoHabilidades />
        </div>
    )
}