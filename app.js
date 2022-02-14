// Required Packages
const express = require("express");
const morgan = require('morgan');
const contactRoutes = require('./contactRoutes');



const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })); // for accepting all kind of data from client
app.use(express.json());


// Routes
app.use('/contacts', contactRoutes);

app.get('*', (req, res) => {
    res.send('<h1>Please Use The Correct Routes</h1>');
})


// PORT Handle
const PORT = process.env.PORT || 5000;
// SERVER LISTEN
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})