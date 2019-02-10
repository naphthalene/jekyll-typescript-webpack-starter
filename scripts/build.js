const env = process.env;
const execSync = require('child_process').execSync;

if (env.TRAVIS_BRANCH === 'master') {
  execSync('npm run build:gh-pages', {
    env: env,
    stdio: 'inherit'
  });
} else {
  execSync('npm run build', {
    env: env,
    stdio: 'inherit'
  });
}
