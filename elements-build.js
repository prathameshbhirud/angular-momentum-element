const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/momentum-element/runtime.js',
    './dist/momentum-element/polyfills.js',
    './dist/momentum-element/scripts.js',
    './dist/momentum-element/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/momentum-element.js');
  await fs.copyFile(
    './dist/momentum-element/styles.css',
    'elements/styles.css'
  );
})();