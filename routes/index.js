import express, { application } from 'express';

const router = express.Router();

import { registerController,dhabaController } from '../controllers';

router.post('/register', registerController.register);

router.post('/dhabas', dhabaController.store);

router.get('/dhabas', dhabaController.index);

router.get('/dhabas/:id', dhabaController.show);

export default router