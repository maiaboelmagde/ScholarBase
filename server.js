const express = require('express');
const app = express();
const PORT = process.env.PORT || 7500;

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));


require('./DB').DBListener.once('open', () => {
    console.log("Connected Successfully");

    
});

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
});