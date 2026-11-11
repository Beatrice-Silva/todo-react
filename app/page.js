import Cabecalho from "@/components/Cabecalho";

export default function Home() {
  const name = "aaa"
  return (
    <>
      <header>
        <Cabecalho titulo="To Do List"subtitulo="Aula 23"/>
      </header>
      <main
      className="conteudo">
      <h1>Olá {name}!</h1>

      <input type="text"/>
      <p>{2 + 3} tarefas</p>

      </main>

      <footer></footer>
      
    </>
  );
}


