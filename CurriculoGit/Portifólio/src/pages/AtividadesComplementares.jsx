import Layout from '../components/Layout'
import Cabecalho from '../components/Cabecalho'
import style from '../styles/Index.module.css'

import TextoAttComple from '../Content/AttComplementares'
export default function AttComp() {
    return (
        <div>
            <Layout />
            <div className={style.cabecalho}>
            <Cabecalho title="Atividades Complementares" subtitle="Atividades feitas em curso" />
            </div>
            <TextoAttComple />
        </div>
    )
}