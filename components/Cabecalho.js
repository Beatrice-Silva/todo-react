export default function Cabecalho({titulo, subtitulo}){
                                    /* props*/
    return(
        <header className="cabecalho" style={{textAlign: "center"}} >
            <h1>{titulo}</h1>
            <p>{subtitulo}</p>
        </header>
    );
}
//1.3 Aula 23 
/* 
  /*
  "description": "This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).",
  "main": "index.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Beatrice-Silva/todo-react.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "bugs": {
    "url": "https://github.com/Beatrice-Silva/todo-react/issues"
  },
  "homepage": "https://github.com/Beatrice-Silva/todo-react#readme"
}*/