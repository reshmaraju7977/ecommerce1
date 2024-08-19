const productModel = require("../../models/productModel")



const getCategoryProduct = async(req,res)=>{
    try{
        const productCategory = await productModel.distinct("category")

        console.log("category",productCategory)

        const productByCategory = []

        for(const category of productCategory){
            const product = await productModel.findOne({category})

            if(product){
                productByCategory.push(product)
            }
        }

        res.json

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = getCategoryProduct