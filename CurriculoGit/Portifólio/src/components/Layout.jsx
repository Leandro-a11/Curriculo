import style from '../styles/Layout.module.css'
import Link from 'next/link'

export default function Layout() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: "center",
            padding: "10px"
        }} className={style.cor} >
            <div id="link">
                <Link href="/">
                    <div className={style.div}>
                        Home
                    </div>
                </Link>
            </div>
        </div >
    )
}