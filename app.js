const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const { checkConnection } = require('./config').dbConnection;



const app = express();

app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    res.send({
        message: "Demo Server is running"
    });
});


const port = process.env.PORT || 8000;

checkConnection().then(() => {
    console.log("Connection to the database has been established successfully.");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

}).catch((error) => {
    process.exit(128);
});

