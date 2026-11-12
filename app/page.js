/* Puxa do components*/

import Cabecalho from "@/components/Cabecalho";
import ListaDeTarefas from "@/components/ListaDeTarefas";

export default function Home() {
  const name = "usuario logado"
  return (
    <>
      <header>
        <Cabecalho titulo="To Do List"subtitulo="Aula 23"/>
      </header>
      <main
      className="conteudo">
      <h1>Informe a tarefa que deseja adicionar: {name}!</h1>

      
      

      <ListaDeTarefas />
      </main>

      <footer></footer>
      
    </>
  );
}
/*<p>{ naoconcluidas } tarefas pendentes</p>*/
/*npm i */

