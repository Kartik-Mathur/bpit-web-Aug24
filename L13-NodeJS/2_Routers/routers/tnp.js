const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Welcome to TNP');
})

router.get('/placementlist',(req,res)=>{
    res.send('Here is TNP ki placement List');
})


module.exports = router;