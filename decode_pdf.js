// Run: node decode_pdf.js
const fs = require('fs');
const b64 = fs.readFileSync(__dirname + '/pdf_b64.txt', 'utf8').replace(/\n/g, '');
fs.writeFileSync(__dirname + '/public/GreenPoint_Employment_Application.pdf', Buffer.from(b64, 'base64'));
console.log('PDF created at public/GreenPoint_Employment_Application.pdf');
