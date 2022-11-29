import type { CustomHelpers, LanguageMessages } from 'joi';

export const objectId = (value: string, helpers: CustomHelpers) => {
  if (!value.match(/^[0-9a-fA-F]{24}$/)) {
    return helpers.message(
      '"{{#label}}" must be a valid mongo id' as unknown as LanguageMessages
    );
  }
  return value;
};

export const password = (value: string, helpers: CustomHelpers) => {
  if (value.length < 4) {
    return helpers.message(
      'password must be at least 4 characters' as unknown as LanguageMessages
    );
  }
  // if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
  //   return helpers.message(
  //     'password must contain at least 1 letter and 1 number' as unknown as LanguageMessages
  //   );
  // }
  return value;
};
