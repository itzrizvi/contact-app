// Required Packages
const express = require("express");
const morgan = require('morgan');
const contactRoutes = require('/contactRoutes');



const app = express();
app.use(morgan('dev'));


// Routes
app.use('/contacts', contactRoutes);

app.get('*', (req, res) => {
    res.send(<h1>Please Use The Correct Routes</h1>);
})


// PORT Handle
const PORT = process.env.PORT || 5000;
// SERVER LISTEN
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})