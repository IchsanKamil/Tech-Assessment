const express = require('express');
const router = require('./routes');
const cors = require('cors')
const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(router);

app.listen(PORT, () => {
    console.log(`app running at port ${PORT}`)
})