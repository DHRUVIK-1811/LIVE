const monogoose = require("mongoose")

const OrdersItemsSchema = new monogoose.Schema({
    // id:{type:String,required:true},
    quantity:{type:Number,required:true},
    product:{type:monogoose.Schema.Types.ObjectId,ref:"products"},
})

const orderitems = monogoose.model("Orderitems",OrdersItemsSchema);

module.exports=orderitems;