"use client"

import { useState} from "react"

import { tarefasIniciais } from "./dados"
import TarefaItem from "./TarefaItem"
import FormTarefa from "./FormDaTarefa"

export default function ListaDeTarefas() {

    
    const [tarefas, setTarefas] = useState(tarefasIniciais) 
    
    
    const adicionar = (descricao) =>{
        const nova = {id: Date.now(), descricao: descricao, concluida: false}

        setTarefas([...tarefas, nova])
        

    }
}

    const concluir = (id) => {
        setTarefas(
            tarefas.map((tarefa) =>
            tarefa.id === id ? 
            {...tarefa, concluida : !tarefa.concluida}
            : tarefa
            )
        )
    

    return (
        
        <section>

        <FormTarefa aoAdicionar={adicionar} />
        <ul>
        {tarefas.map((tarefa) => (
        <TarefaItem key={tarefa.id} tarefa={tarefa} aoConcluir={concluir}/>
        ))}

        </ul>
        </section>
    );

    const excluir = (id) =>{
        setTarefas(
        tarefas.filter((tarefa) => tarefa.id !== id
        
        )
        )
    }

    }    
