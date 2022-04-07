import { Router } from 'express';
import filterData from '../controllers/filterData.js';

const router = Router();

// post filtered data
router.post("/data", filterData);

export default router;
