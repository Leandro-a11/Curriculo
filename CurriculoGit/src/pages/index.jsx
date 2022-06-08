import Cabecalho from "../components/Cabecalho"
import style from '../styles/Index.module.css'
import ListaLink from '../components/ListaLink'
import Rodape from "../components/Rodape"

export default function Home() {
  return (
    <div className={style.principal}>
      <div className={style.cabecalho}>
        <Cabecalho title="Meu Currículo" subtitle="Leandro Rodrigues Da Silva" />
      </div>
      <div className={style.topicos}>
        <ListaLink />
      </div>
      <Rodape />
    </div>
  )
}

