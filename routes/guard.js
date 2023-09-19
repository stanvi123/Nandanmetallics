const express = require('express')
const router = express.Router()
const authenticate = require('../middleware/auth')
const Guard = require('../models/guard');

router.post('/guardEntry',authenticate, async (req, res) => {
    try {
        let success = false
        const type = req.user.type
        if(type!=="guard"){
            return res.status(400).json({ success, error: "Please login with correct user type" })
        }
        const guard = await Guard.create({
            userId:req.user.id,
            vehical_no:req.body.vehical_no,
            transport:req.body.transport,
            quantity:req.body.quantity,
            tareWt:req.body.tareWt,
            netWt: req.body.netWt,
            productName:req.body.productName,
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

router.get('/getGuard', authenticate, async (req, res) => {
    try {
        const userId = req.user.id;
        let user = await Guard.findOne({userId})
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})
module.exports = router