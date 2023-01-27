const monogoose = require("mongoose")

const OrdersSchema = new monogoose.Schema({
    id:{type:String,required:true},
    orderitems:[
        {type:monogoose.Schema.Types.ObjectId,ref:"OrderItem",required:true}
    ],
    shippingAddress1:{type:String,required:true},
    shippingAddress2:{type:String},
    city:{type:String,required:true},
    zip:{type:String,required:true},
    country:{type:String,required:true},
    phone:{type:Number,required:true},
    status:{type:String,required:true,default:"Pending"},
    totalprice:{type:Number},
    user:{type:monogoose.Schema.Types.ObjectId,ref:"users"},
    dateOrdered:{type:Date,default:Date.now},
});

const order = monogoose.model("Orders",OrdersSchema);

module.exports=order;


// {
//     "id":"1",
//     "orderitems":[
//         {
//         "quantity":3,
//         "product":"63cd7986e0c31acb1b426560"
//         },
//         {
//             "quantity":4,
//             "product":"63cd7986e0c31acb1b426560"
//         }
// ],
//     "shippingAddress1":"surat",
//     "shippingAddress2":"surat",
//     "city":"surat",
//     "zip":395001,
//     "country":"india",
//     "phone":123567890,
//     "user":"63ca93b2eeeb2cad51338b27"
// }