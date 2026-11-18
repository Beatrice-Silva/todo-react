import styles from "./Cabecalho.module.css"

export default function Cabecalho({titulo, subtitulo}){
                                    /* props*/
    return(
        <header className="cabecalho" style={{textAlign: "center"}} >
            <h1 className={styles.titulo}>{titulo}</h1>
            <p className={styles.subtitulo}>{subtitulo}</p>
        </header>
    );
}
