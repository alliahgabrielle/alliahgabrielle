const fs = require('fs');

const content = `const EMAILJS_PUBLIC_KEY  = '${process.env.EMAILJS_PUBLIC_KEY}';
const EMAILJS_SERVICE_ID  = '${process.env.EMAILJS_SERVICE_ID}';
const EMAILJS_TEMPLATE_ID = '${process.env.EMAILJS_TEMPLATE_ID}';`;

fs.writeFileSync('./js/config.js', content);
console.log('✓ config.js generated');