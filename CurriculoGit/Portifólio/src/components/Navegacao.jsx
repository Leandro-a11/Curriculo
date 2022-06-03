import style from '../styles/Navegacao.module.css'
import Link from 'next/link'
export default function Navegacao(props) {
    return (
        <div className={style.div}>
            <div id='link'>
                <Link href={props.link} >
                    {props.title}
                </Link>
            </div>
        </div>
    )
}