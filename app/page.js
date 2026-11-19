/* Puxa do components*/

import tarefas from "@/dados/tarefas.js";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import ListaDeTarefas from "@/components/ListaDeTarefas";
import { Painel } from "@/components/Cartao/cartao";

export default function Home() {
  
  return (

    <>
        <Cabecalho titulo="To Do List"subtitulo="Aula 23"/>
      
      <main>
     
      <ListaDeTarefas />
      
      <Painel titulo="Avisos">
      <p>Prova na quinta.</p>
      <p>Trazer o notebook.</p>
      </Painel>
      
      </main>
      
    </>
  );
}


