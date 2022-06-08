import style from '../styles/Content.module.css'
export default function TextoContato() {
    return (
        <div>
            <div className={style.flex}>
                <div>
                    <h1>Meus Contatos São:</h1>
                    <h1>Telefone</h1>
                    <h2><q>WhatsApp e Celular</q> : (31) 9 9570-0706</h2>
                    <h1>Email:</h1>
                    <h2><q>leandror.312445@gmail.com</q></h2>
                    <h1>Redes Sociais :</h1>
                    <h2>GitHub <a className={style.href} href="https://github.com/Leandro-a11"> - <q> Clique Aqui</q></a></h2>
                    <h2>Linkedin <a className={style.href} href="https://www.linkedin.com/in/leandro-rodrigues-3387a6216/"> - <q> Clique Aqui</q></a></h2>
                </div>
            </div>
        </div>
    )
}