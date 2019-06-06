function buildConfig(env) {
  console.log(env);
  return require('./webpack/' + env + '.js'); // eslint-disable-line
}

module.exports = buildConfig;
