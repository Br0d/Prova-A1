const express = require('express');

const server = express();

server.use(express.json());

const cursos = ['fullStack Master', 'Desenvolvimento de Games', 'Viver de Youtube'];


// CRUD --> Create, Read, Update, Delete


// Retorna  um curso
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
})

// Retornar todos os cursos
server.get('/cursos', (req, res) => {

});

// Criar um novo curso
server.post('/curso',(req,res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});

// Atualizar um curso
server.put('/curso/:index', (req, res) => {
    const{ index} = req.params;
    const{ name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
});

// Deletar um curso 
server.delete('/cursos/:index', (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1);
    return res.json({ message: "O curso foi deletado"});
});




server.listen(3000);