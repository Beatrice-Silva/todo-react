export const  tarefasIniciais = [
    {
    id : 1,
    descricao : "desc1",
    concluida : true,
  },{id : 2,
    descricao : "desc2",
    concluida : false,
  },{
    id : 3,
    descricao : "desc3",
    concluida : true,
},{
    id : 4,
    descricao : "desc4",
    concluida : false,
  }
  ]

export const tarefasIniciais = [

{ id: 1, descricao: "Instalar o Node", concluida: true },

{ id: 2, descricao: "Criar o projeto", concluida: false },

];
export default function TarefaItem({ tarefa }) {

return (

<li className={tarefa.concluida

? "tarefa concluida" : "tarefa"}>

<label>

<input type="checkbox" checked={tarefa.concluida} />

<span>{tarefa.descricao}</span>

</label>

</li>

);

}
