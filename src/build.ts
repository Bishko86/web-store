const fs = require('file-system');
const basePath = './docs/web-store/';

const content = fs.readFileSync(`${basePath}index.html`, 'utf8');
const path = './src/new';

const createFile = (content: string) => {
  fs.appendFile(`${basePath}404.html`, content, (err: Error) => {
    if (err) throw err;
  });
  console.log('file 404.html was added to the bundle');
};

createFile(content);
