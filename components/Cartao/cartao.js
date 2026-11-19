
"use client"
import { useState } from "react";
import styles from "./Cartao/cartao.module.css"

export default function Cartao({tarefa, aoConcluir, aoExcluir,}) {
    
    return (
    
    <li className={tarefa.concluida ? "tarefa concluida" : "tarefa"}>

        <p className={styles.descricao}>{tarefa.descricao}</p>
            
        
    </li>
    );
    }