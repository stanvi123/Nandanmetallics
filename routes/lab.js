const express = require('express')
const router = express.Router()
const authenticate = require('../middleware/auth')
const Lab = require('../models/lab');

router.post('/labEntry',authenticate, async (req, res) => {
    try {
        let success = false
        const type = req.user.type
        if(type!=="lab"){
            return res.status(400).json({ success, error: "Please login with correct user type" })
        }
        const guard = await Lab.create({
            userId:req.user.id,
            productName:req.body.productName,
            carbon_no:req.body.carbon_no,
            heat_no:req.body.heat_no,
            manganese:req.body.manganese,
            phosphorous:req.body.phosphorous,
            sulphur:req.body.sulphur,
            silicon:req.body.silicon,
            entryType:req.body.entryType
        })
        success = true
        res.json({ success, guard })
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})

router.get('/getLab', authenticate, async (req, res) => {
    try {
        const userId = req.user.id;
        let user = await Lab.findOne({userId})
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})
module.exports = router