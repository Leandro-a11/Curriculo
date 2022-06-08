import FotoPerfil from '../assets/FotoDePerfil.jpeg'
import Image from 'next/image'
import style from '../styles/Content.module.css'
export default function TextoVisaoGeral() {
    return (
        <div>
            <div className={style.flex}>
                <div>
                    <h1>Meu nome é Leandro Rodrigues Da Silva</h1>
                    <h2>18 Anos , Brasileiro , Solteiro , Minas Gerais-Belo Horizonte </h2>
                    <h1>Atualmente</h1>
                    <h2>Estou Estudando Programação ,Mais Precisamente Web Desenvolvimento </h2>
                    <h2>Gosto De Estudar , Aprender, Fazer Ná Prática e Ver Como As Coisas Funcionam</h2>
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