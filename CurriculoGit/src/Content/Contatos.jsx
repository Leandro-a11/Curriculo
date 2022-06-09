import style from '../styles/Content.module.css'
export default function TextoContato() {
    return (
        <div>
            <div className={style.flex}>
                <div>
                    <h1 className={style.title}>Telefone : <q> (31) 9 9570-0706: WhatsApp e Celular</q></h1>
                    <h1 className={style.title}>Email: <q>leandror.312445@gmail.com</q></h1>
                    <h1 className={style.title}>Redes Sociais : <q> GitHub <a className={style.href} href="https://github.com/Leandro-a11"> - <q> Clique Aqui </q> - </a>  Linkedin <a className={style.href} href="https://www.linkedin.com/in/leandro-rodrigues-3387a6216/"> - <q> Clique Aqui</q> - </a></q></h1>
                </div>
            </div>
        </div>
    )

}