export default function Cabecalho({titulo, subtitulo}){
                                    /* props*/
    return(
        <header className="cabecalho" style={{textAlign: "center"}} >
            <h1>{titulo}</h1>
            <p>{subtitulo}</p>
        </header>
    );
}
//1.3 Aula 23 