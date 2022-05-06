const { writeFile } = require('fs');

const { argv } = require('yargs');
const environment = argv.environment;
const isProduction = environment === 'prod';

const targetPath = './src/environments/environment.custom.ts';

// Load dotenv to work with process.env
require('dotenv').config({ path: 'src/.env' });

// environment.ts file structure
const envConfigFile = `
 export const environment = {
  production: ${isProduction},
  FIREBASE_API_KEY: "${process.env.FIREBASE_API_KEY}",
  FIREBASE_AUTH_DOMAIN: "${process.env.FIREBASE_AUTH_DOMAIN}",
  FIREBASE_PROTECTED_ID: "${process.env.FIREBASE_PROTECTED_ID}",
  FIREBASE_STORAGE_BUCKET: "${process.env.FIREBASE_STORAGE_BUCKET}",
  FIREBASE_MESSAGING_SENDER_ID: "${process.env.FIREBASE_MESSAGING_SENDER_ID}",
  FIREBASE_APP_ID: "${process.env.FIREBASE_APP_ID}",
};
`;

writeFile(targetPath, envConfigFile, (err: any) => {
  if (err) {
    throw console.error(err);
  } else {
    console.log('Using custom environment');
  }
});
