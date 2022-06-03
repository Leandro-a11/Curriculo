import FotoPerfil from '../assets/LogoWraith.png'
import Image from 'next/image'
import style from '../styles/Content.module.css'
export default function TextoVisaoGeral() {
    return (
        <div>
            <div className={style.flex}>
                <div>
                    <h1>Meu nome é Leandro Rodrigues Da Silva</h1>
                    <h2>18 Anos , Brasileiro , Solteiro , Minas Gerais-Belo Horizonte </h2>
                    <h1>Atualmente</h1><h2>Estou Estudando Programação ,Mais Precisamente Web Desenvolvimento </h2>
                    <h2>Estou a Procura De Um Emprego Na Área Da Tecnologia</h2>
                </div>
                <Image
                    src={FotoPerfil}
                    alt="FotoPerfil"
                    width={350}
                    height={350}
                />
            </div>
        </div>
    )
}