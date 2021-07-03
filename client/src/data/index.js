const defaultLanguageKeys = require('./ru');

const getLang = (json) => (langKey) => {
    if (langKey instanceof Array) {
      return langKey.reduce((obj, key) => {
          if (obj) {
              return obj[key];
          }
          console.error(`No translate for key "${langKey}"`);
          return null;
      }, json);
  }

  if (!json[langKey]) {
      return '';
  }

  return json[langKey];
};

export default getLang(defaultLanguageKeys);

