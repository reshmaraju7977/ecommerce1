const uploadProductPermission = require("../../helpers/permission")
const productModel = require("../../models/productModel")


async function uploadProductController(req,res){
    try{
        const sessionUserId = req.sessionUserId

        if(!uploadProductPermission(sessionUserId)){
            throw new Error("Permission denied")
        }
        
        const uploadProductController = new productModel(req.body)
        const saveProduct = await uploadProductController.save()

        res.status(201).json({
            message : "Product upload successfully",
            error : false,
            success : true,
            data : saveProduct
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = uploadProductController