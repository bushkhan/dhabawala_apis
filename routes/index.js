import express, { application } from 'express';

const router = express.Router();

import { registerController,dhabaController } from '../controllers';

router.post('/register', registerController.register);

router.post('/dhabas', dhabaController.store);



export default router