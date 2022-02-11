// Required Packages
const express = require("express");
const app = express();


// PORT
const PORT = process.env.PORT || 5000;
// SERVER LISTEN
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})