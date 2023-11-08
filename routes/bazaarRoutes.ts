import express from 'express';
import asyncHandler from '../utils/asyncHandler';
import controller from '../controllers/bazaar.controller'

const router = express.Router();

router.put('/addContent', asyncHandler(controller.addContent));

export = router;
