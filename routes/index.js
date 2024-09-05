import { Router } from 'express';
import AppController from '../controllers/AppController.js';
import UsersController from '../controllers/UsersController.js';

const router = Router();

// Routes definitions to AppController
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

// Route to create users
router.post('/users', UsersController.postNew);

export default router;
