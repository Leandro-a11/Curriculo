import FotoPerfil from '../assets/FotoDePerfil.jpeg'
import Image from 'next/image'
import style from '../styles/Content.module.css'
export default function TextoVisaoGeral() {
    return (
        <div>
            <div className={style.flex}>
                <div>
                    <h1 className={style.title}>Leandro Rodrigues Da Silva</h1>
                    <h2>18 Anos , Brasileiro , Solteiro , Minas Gerais-Belo Horizonte </h2>
                    <h1 className={style.title}>Atualmente</h1>
                    <h2>Estou Estudando Programação Web</h2>
                    <h1 className={style.title}>Hobbys:</h1>
                    <h2>Gosto De Estudar, Aprender, </h2>
                </div>
                <Image
                    src={FotoPerfil}
                    alt="Foto"
                    width={350}
                    height={400}
                />
            </div>
        </div>
    )
}