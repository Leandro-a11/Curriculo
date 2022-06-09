import style from '../styles/Content.module.css'
import Image from 'next/image'
import img from '../assets/LogoJs.png'
export default function Textohabilidades() {
    return (
        <div>
            <div className={style.flex}>
                <div>
                    <h1 className={style.title}>Fazendo Cursos, Adquiri Conhecimento Em Várias Tecnologias</h1>
                    <h2>Como :
                        <q>Linux, Html, Css, Fundamentos Básicos de Design Gráfico, DOM, AJAX, EsNext, Node</q>
                    </h2>
                    <h2>
                        <q>GitHub, Estrutura de Dados E Algoritimos, BootStrap, Jquery, Vue, React, Next, Orientação Objetos</q>
                    </h2>
                    <h2>Uma Das Principais Habilidades Aprendidas Foi O JavaScript, Atualmente Com Nível Intermediário</h2>
                    <h2 >Hoje, Meu Nivel De Inglês Está Em Intermediário.</h2>
                </div>
                <div style={{
                    alignSelf: 'center'
                }}>
                    <Image
                        src={img}
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </div>
    )
}