const { Client } = require('pg');
const express = require('express')
const connectionString = 'postgresql://postgres.pflqrsmtkbifbqicvqus:rTOUJqXRbbxW6Bib@aws-0-sa-east-1.pooler.supabase.com:6543/postgres' ;
const app = express()
const client = new Client({
    connectionString,
});
client.connect();

app.get('/tarefas',async (req,res)=> {
    try {
        const result = await client.query('SELECT * FROM tabelas');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro buscando tarefa")
    }
});

app.listen(3000, () => console.log('Server rodando porta 3000'));

(async () => {
    await client.connect();
    const res = await client.query('SELECT * FROM tabelas)');
    console.log(res.rows);
    await client.end();
})().catch(err => console.error("Erro ao conectar ao banco de dados:", err))
