import { Dhaba } from '../models';
import multer from 'multer';
import path, { join } from 'path';
import Joi from 'joi';
import fs from 'fs';
import CustomErrorHandler from '../services/CustomeErrorHandler';

const storage = multer.diskStorage({
    destination: (req,file,cb) => cb(null,'menuImages'),
    filename: (req, file, cb) => {

        const uniqueName = `${Date.now()}-${Math.round(
            Math.random() * 1e9
        )}${path.extname(file.originalname)}`;
        // 3746674586-836534453.png

        cb(null, uniqueName);
    },
})

//craeting a multer function now
//and passing all the values in that
const handleMultipartData = multer({
    storage,
    limits: { fileSize: 1000000 * 5 },
}).single('menuImage'); //5mb max


const dhabaController = {
    async store(req, res, next){
        //multi part form data 
        handleMultipartData(req, res, async (err)=>{
            if (err) {
                return next(CustomErrorHandler.serverError(err.message));
            }
            const filePath = req.file.path;

            const dhabaSchema = Joi.object(
                {
                    name: Joi.string().required(),
                    contact: Joi.number().required(),
                    noOfTables: Joi.number().required(),
                    type: Joi.string().required(),
                    rating: Joi.string().required(),
                    topDishes: Joi.string().required(),
                    location: Joi.string().required(),
                    address: Joi.string().required(),

                }
            );

            const { error } = dhabaSchema.validate(req.body);
            if(error){
                //delete the uploaded file asap
                fs.unlink(`${appRoot}/${filePath}`,(err)=>{
                    if (err) {
                        return next(CustomErrorHandler.serverError(err.message));
                    }
                });
                return next(error);

            }
            const { name, contact, noOfTables,type, rating, topDishes, location, address } = req.body;

            let document;

            try {
                document = await Dhaba.create({
                    name,
                    contact,
                    noOfTables,
                    type,
                    rating,
                    topDishes,
                    location,
                    address,
                    menuImage: filePath
                })
            } catch (error) {
                return next(error);
            }

            res.status(201).json(document);
        });
    }
}

export default dhabaController;