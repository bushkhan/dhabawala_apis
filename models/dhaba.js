import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dhabaSchema = new Schema({
    name: {
        type: String,
        required: true,

    },
    contact: {
        type: Number,
        required: true,
    },
    noOfTables: {
        type: Number,
        required: true,

    },
    type: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,

    },
    topDishes: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,

    },
    address: {
        type: String,
        required: true,
    },
    menuImage: {
        type: String,
        required: true,
    },
    // dhabaImages: {
    //     type: String,
    //     required: true,
    // },
}, { timestamps: true });


export default mongoose.model('Dhaba', dhabaSchema, 'dhabas');