const express = require('express');
const app = express();
require("./db/conn");
const cors = require('cors');
const router = require('./routes/router');
const port = 6030;


app.use(express.json());
app.use(cors());
app.use(router)

app.listen(port,()=>{
    console.log("Server start")
})