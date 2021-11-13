const express =  require('express');
const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(express.json());

app.get("/", (_, res) => res.send('It works!'));

exports.start = function start() {
    app.listen(PORT, () => console.log('Service started at', PORT));
}
