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

  export default function tarefasItem({tarefasIniciais}){
    return(
        <p className="lista" style={{textAlign: "center"}} >
            <ol>

            <li></li>
            <li></li>
            <li></li>
            </ol>

            <label>Cheque aqui:</label>
            <input typeof="checkbox"></input>
        </p>
    );
}
