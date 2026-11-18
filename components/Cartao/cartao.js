
"use client"
//import { text } from "express";
import { useState } from "react";

const prioridades = { 
    alta : "Alta",
    media : "Media",
    baixa : "Baixa"

}

export default function TarefaItem({tarefa, aoConcluir, aoExcluir,aoEditar}) {
    const [editando, setEditando] = useState(false)
    const [texto, setTexto] = useState(tarefa.descricao)

    const salvarEdicao = () =>{
        const limpo = texto.trim("")
        if(limpo !== ""){
            aoEditar(tarefa.id, limpo)
        }else{
            setTexto(tarefa.descricao)
        }
        setEditando(false)
    }

    const teclaNaEdicao = (event) =>{
        if(event.key === "Enter") salvarEdicao()
            if(event.key === "Escape"){
                setTexto(tarefa.descricao)
                setEditando(false)
            }
            
    }
    return (
    
    <li className={tarefa.concluida ? "tarefa concluida" : "tarefa"}>
        {editando ? (
            <input 
            className="editar"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            onBlur={salvarEdicao}
            onKeyDown={teclaNaEdicao}
            autoFocus
            aria-label="Editar tarefa"
            />
            

        ) : (
        <label onDoubleClick={() => setEditando(true)}>
        <input type="checkbox" 
        checked={tarefa.concluida} 
        onChange={() => aoConcluir(tarefa.id)}/>

           <span>{tarefa.descricao}</span>
        </label>)}
    
    
 

    {tarefa.prioridade && (
        <span className={"etiqueta" + tarefa.prioridade} >{PRIORIDADES[tarefa.prioridade]}</span>
    )}
    
        <button type="button"
        className="botao-secundario" 
        onClick={() => aoExcluir(tarefa.id)}>
        Excluir
        </button>

    </li>
    );
    }