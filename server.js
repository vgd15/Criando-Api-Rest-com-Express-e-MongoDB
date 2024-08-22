import "dotenv/config";
// import http from "http";
import app from "./src/app.js"; //não esquecer de colocar o js no final

const PORT = 3000;

/*
const rotas = {
  "/": "Curso de Express API",
  "/livros": "Entrei na rota livros",
  "/autores": "Entrei na rota autores"
};


const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(rotas[req.url]);
});
*/ 

/*server.listen(PORT, () => {
  console.log("servidor escutando!");
});*/

app.listen(PORT, () => {
    console.log("servidor escutando!");
});
