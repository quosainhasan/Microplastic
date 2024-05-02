import express from 'express';
import env from 'dotenv';
env.config();
import pg from 'pg';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});