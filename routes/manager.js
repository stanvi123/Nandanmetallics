const express = require('express')
const router = express.Router()
const authenticate = require('../middleware/auth')
const Manager = require('../models/manager');
const partyDetails = require('../models/partyDetails');
const Product = require("../models/product")

router.post('/managerEntry',authenticate, async (req, res) => {
    try {
        let success = false
        const type = req.user.type
        if(type!=="manager"){
            return res.status(400).json({ success, error: "Please login with correct user type" })
        }
        const manager = await Manager.create({
            userId:req.user.id,
            partyName:req.body.partyName,
            inventoryNo:req.body.inventoryNo,
            destination:req.body.destination,
            tareWt:req.body.tareWt,
            netWt:req.body.netWt,
            grossWt:req.body.grossWt,
            productName:req.body.productName,
            productQuantity:req.body.productQuantity,
            entryType:req.body.entryType
        })
        success = true
        res.json({ success, manager })
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})
router.post('/partyEntry',authenticate, async (req, res) => {
    try {
        let success = false
        const type = req.user.type
        if(type!=="manager"){
            return res.status(400).json({ success, error: "Please login with correct user type" })
        }
        const party = await partyDetails.create({
            name:req.body.name,
            address:req.body.address,
            gst_no:req.body.gst_no,
            contact:req.body.contact
        })
        success = true
        res.json({ success, party })
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
    router.post('/productEntry',authenticate, async (req, res) => {
        try {
            let success = false
            const type = req.user.type
            if(type!=="manager"){
                return res.status(400).json({ success, error: "Please login with correct user type" })
            }
            const product = await Product.create({
                name:req.body.name,
                detail:req.body.detail,
                quantity:req.body.quantity
            })
            success = true
            res.json({ success, product })
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error")
        }
    })
})

router.get('/getManager', authenticate, async (req, res) => {
    try {
        const userId = req.user.id;
        let user = await Manager.findOne({userId})
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})
module.exports = router