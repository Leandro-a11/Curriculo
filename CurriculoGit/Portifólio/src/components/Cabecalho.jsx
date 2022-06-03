export default function Cabecalho(props) {
    return (
        <div style={{
            padding: "20px"
        }}>
            <h1>
                <div>
                    {props.title}
                </div>
            </h1>
            <h2>
                <div>
                    {props.subtitle}
                </div>
            </h2 >
        </div >
    )
}