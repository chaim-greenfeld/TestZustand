import express from 'express'
import cors from 'cors'
import 'dotenv/config';
import readDataMovies from "./routes/moviesRoute.js"


const PORT = process.env.PORT || 3000;


const app = express()

app.use(express.json())
app.use(cors())


app.use('/api/movies', readDataMovies)





app.use((req, res) => {
    res.status(404).send('Not found');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});