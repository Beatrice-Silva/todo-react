import { Children } from "react";

import styles from "./Coluna/coluna.module.css"
import { COLUNAS } from "@/dados/tarefas";

export default function Coluna(titulo, status, quantidade, children) {

    {COLUNAS.map((Coluna) => {

        const DaColuna = tarefasIniciais.filter((tarefa) => tarefa.status
    === Coluna.status)

        return(
            <Coluna key={Coluna.status} 
            titulo={Coluna.titulo}
            topo={Coluna.topo}
            contador={Coluna.contador}
            ></Coluna>            
        );

    })}

    return (

        <section className="{`
        ${styles.coluna} $(style{status}) `}">
        <header className="{styles.topo}">
        <h2 className="{styles.titulo}">{titulo}</h2>
        <span className="{styles.contador}">{quantidade}</span>
        </header>
        
        {quantidade === 0 }
        ? <p className="{styles.vazia}>
        Nenhuma tarefa aqui. 
        </p>
        :<ul className={styles.lista}>{Children}</ul>}
    
        </section>
        )
        }

        

    )
}
        