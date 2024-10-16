const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Welcome to Acads');
})

router.get('/getstudents',(req,res)=>{
    res.send('Here is Students ki List');
})


module.exports = router;
// module.exports = {
//     router
// };