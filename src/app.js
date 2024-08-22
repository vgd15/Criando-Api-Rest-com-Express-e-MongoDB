import express from "express";
import conectaNaDataBase from "./config/db.connect.js";
//import livro from "./models/Livro.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDataBase ();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})

const app = express();
routes(app);

//app.use(express.json()); // passamos essa responsabilidade para o ponto de entrada das rotas

/*

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
];


function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}
*/

//app.get("/", (req, res) => {
   // res.status(200).send("Curso de Node.JS")
//});

//app.get("/livros", async (req, res) => {
 //   const listaLivros = await livro.find();
 //   res.status(200).json(listaLivros);
//});;

/* 

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});



app.delete('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send('Livro removido com sucesso.');
});

*/

export default app;