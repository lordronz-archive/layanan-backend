import Joi from 'joi';

const predict = {
  body: Joi.object().keys({
    locations: Joi.array().items(Joi.string()),
  }),
};

const predictValidation = {
  predict,
};

export default predictValidation;
