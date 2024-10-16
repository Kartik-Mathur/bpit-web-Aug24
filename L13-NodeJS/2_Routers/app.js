const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname,'')));

// /tnp, /tnp/placementlist, /tnp/internships
const tnpRouter = require('./routers/tnp');
app.use('/tnp', tnpRouter); // Path show krna kaha jaana hai is req ka res lene
// /acads, /acads/updatemarks, /acads/giveattendance
const acadsRouter = require('./routers/acads');
// acadsRouter = {router: Routing};
app.use('/acads', acadsRouter.router);



app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});