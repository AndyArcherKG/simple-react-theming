/* eslint-disable */
const Theme = (theme, cssFile) => {
  try {
    return require(`./${theme}/${cssFile}`);
  } catch (e) {
    return {};
  }
};

module.exports = Theme;
