import style from '../styles/Navegacao.module.css'
import Link from 'next/link'
export default function Navegacao(props) {
    return (
        <div className={style.div}>
            <Link id='link' href={props.link} >
                <div id='linkh'>
                    {props.title}
                </div>
            </Link>
        </div>
    )
}