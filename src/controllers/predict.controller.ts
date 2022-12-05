import { predictService } from '../services';
import catchAsync from '../utils/catchAsync';

const predict = catchAsync(async (req, res) => {
  const result = await predictService.predict(req.body);
  res.send(result);
});

const predictController = {
  predict,
};

export default predictController;
