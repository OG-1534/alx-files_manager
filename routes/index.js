import { Router } from 'express';
import AppController from '../controllers/AppController.js';

const router = Router();

// Routes definitions to AppController
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

export default router;
