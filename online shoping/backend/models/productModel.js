const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required:[true, "Please enter product name"],
        trim: true,
        maxLength:[100, "Product name cannot exceed 100 characters"]
    },
    price: {
        type: Number,
        default: 0.0
    },
    description: {
        type: String,
        required: [true, "Please enter product description"]
    },
    ratings: {
        type: String,
        default: 0
    },
    images:[ {
            image: {
                type: String,
                required: true
            }
         }
           ],
           category:{
            type: String,
            required: [true, "Please enter product categery"],
            enum: {
                values:[
                    'Electronics',
                    'Mobilephone',
                    'Laptop',
                    'Accessories',
                    'Headphone',
                    'Food',
                    'Books',
                    'Clothes/Shoes',
                    'Beauty/Health',
                    'Sports',
                    'Outdoor',
                    'Home'
                ],
                message : "Please select correct category"
            }
            },
           seller:{
            type: String,
            required: [true,"Please enter product seller"]
           },
           stock:{
            type: Number,
            required: [true, "Please enter product stock"],
            maxLength: [50, 'Product stock cannot exceed 50']
           },
           numOfReviews:{
            type: Number,
            default: 0
           },
           reviews: [
            {
                user:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref: 'User'
                },

                rating:{
                    type: String,
                    required: true
                },
                comment:{
                    type: String,
                    required: true
                }
            }
           ],
           user:{
            type: mongoose.Schema.Types.ObjectId
           },
           createdAT:{
            type: Date,
            default: Date.now()
           }
})

let schema = mongoose.model('Product',productSchema)

module.exports = schema