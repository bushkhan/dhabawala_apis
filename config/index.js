import dotenv from 'dotenv';

dotenv.config();

export const {

    APP_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME

} = process.env

//getting environment variables here
//object destructuring