import { Children } from "react";
import styles from "./Coluna/coluna.module.css"
import { COLUNAS } from "@/dados/tarefas";

export default function Coluna() {

    {COLUNAS.map((Coluna) => {

        const DAcOLUNA = tarefasIniciais.filter((tarefa) => tarefa.status
    === Coluna.status)

        return(
            
        )

    })}

    return (

        <section className="{` ${styles.coluna} $(style{status}) `}">
        <header className="{styles.topo}">
        <h2 className="{styles.titulo}">{titulo}</h2>
        <span className="{styles.contador}">{quantidade}</span>



        </header>
        <p className="{styles.vazia}">Nenhuma tarefa aqui.</p>
        {(quantidade === 0 ? (<p>Nenhuma tarefa aqui.</p>
        ):(
            <ul className="{styles.lista}">{Children}</ul>
        )     
        )}

        </section>
        
        

    )
}