import mongoose from "mongoose";
import { APP_URL } from "../config";
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
    overview:{
        type: String,
        required: true,        
    },
    menuImage: {
        type: String,
        required: true,
        get:(menuImage) =>{
            return `${APP_URL}/${menuImage}`;
        }
    },

}, { timestamps: true, toJSON: { getters: true}, id: false});


export default mongoose.model('Dhaba', dhabaSchema, 'dhabas');

