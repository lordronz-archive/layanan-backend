import express from 'express';

import predictController from '../../controllers/predict.controller';
import auth from '../../middlewares/auth';
import validate from '../../middlewares/validate';
import predictValidation from '../../validations/predict.validation';

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(predictValidation.predict), predictController.predict);

export default router;
