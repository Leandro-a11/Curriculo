import styleM from '../styles/Content.module.css'
import Image from 'next/image'
import img from '../assets/LogoJs.png'
export default function Textohabilidades() {
    return (
        <div>
            <div className={styleM.flex}>
                <div>
                    <h1>Fazendo Alguns Cursos , Aprendi Muitas Coisas</h1>
                    <h2>Algumas Delas Como ,
                        <q>Linux, Html , Css ,Fundamentos Básicos de Design Gráfico</q>
                    </h2>
                    <h2>Outros Como ,
                        <q>GitHub, Estrutura de Dados E Algoritimos, BootStrap , Jquery , Vue , React , Next</q>
                    </h2>
                    <h2>Uma Das Principais Habilidades Aprendidas Foi O JavaScript , Com Nível Intermediário</h2>
                    <h2 >Hoje , Meu Nivel De Inglês Está Em Intermediário</h2>
                    <h2>Entendendo Diálogos Curtos , Sabendo Conversar Um Pouco</h2>
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