import style from '../styles/Content.module.css'
export default function TextoEscolaridade() {
    return (
        <div>
            <div className={style.flex}>
                <div>
                    <h1>Ensino Fundamental</h1>
                    <h2>
                        <h4>Completo - EM Pedro Nava - 2010 / 2015</h4>
                    </h2>
                    <h1>Ensino Médio</h1>
                    <h2>
                        <h4>Completo - EE Pedro Franca - 2016 / 2021</h4>
                    </h2>
                </div>
            </div>
        </div>
    )
}