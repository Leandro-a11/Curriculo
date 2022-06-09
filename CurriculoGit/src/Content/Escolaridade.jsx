import style from '../styles/Content.module.css'
export default function TextoEscolaridade() {
    return (
        <div>
            <div className={style.flex}>
                <div>
                    <h1 className={style.title}>Ensino Fundamental</h1>
                    <h2>
                        <h3>Completo - EM Pedro Nava - 2010 / 2015</h3>
                    </h2>
                    <h1 className={style.title}>Ensino Médio</h1>
                    <h2>
                        <h3>Completo - EE Pedro Franca - 2016 / 2021</h3>
                    </h2>
                </div>
            </div>
        </div>
    )
}