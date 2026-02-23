import express from 'express';
import { submitGrievance, getGrievances, getGrievanceById } from '../controllers/grievanceController.js';

const router = express.Router();

router.route('/')
    .post(submitGrievance)
    .get(getGrievances);

router.route('/:id')
    .get(getGrievanceById);

export default router;
