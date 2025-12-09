import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

// Hello world
app.get('/test-server', async (req, res) => {
    return res.send({status: true, message: "Server is running"})
})

app.listen(PORT, () => {
    console.log(`Server is started http://localhost:${PORT}`)
})