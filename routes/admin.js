const express = require('express')
const router = express.Router()
const authenticate = require('../middleware/auth')
const User = require('../models/user')
const Guard = require('../models/guard')
const Manager = require('../models/manager')

router.patch('/:guardId/updateGuard', authenticate, async (req, res) => {
    try {
        const guardId = req.params.guardId
        let success = false
        const type = req.user.type
        if(type!=="admin")
        {
            return res.status(400).json({ success, error: "Please login with correct administration type" })
        }
        await Guard.updateOne({userId:id}, {$set: {
            userId:guardId,
            vehical_no:req.body.vehical_no,
            transport:req.body.transport,
            quantity:req.body.quantity,
            tareWt:req.body.tareWt,
            netWt: req.body.netWt,
            productName:req.body.productName,
            entryType:req.body.entryType
        }});
        success = true
        res.json({ success, message:"Guard Details Updated" })
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})

router.patch('/:managerId/updateGuard', authenticate, async (req, res) => {
    try {
        const managerId = req.params.managerId
        let success = false
        const type = req.user.type
        if(type!=="admin")
        {
            return res.status(400).json({ success, error: "Please login with correct administration type" })
        }
        await Manager.updateOne({userId:id}, {$set: {
            userId:managerId,
            partyName:req.body.partyName,
            inventoryNo:req.body.inventoryNo,
            destination:req.body.destination,
            tareWt:req.body.tareWt,
            netWt:req.body.netWt,
            grossWt:req.body.grossWt,
            productName:req.body.productName,
            productQuantity:req.body.productQuantity,
            entryType:req.body.entryType
        }});
        success = true
        res.json({ success, message:"Guard Details Updated" })
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})

module.exports = router