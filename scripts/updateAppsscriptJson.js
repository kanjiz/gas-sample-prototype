const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../dist/appsscript.json');
const appsscript = require(filePath);

appsscript.timeZone = 'Asia/Tokyo';

fs.writeFileSync(filePath, JSON.stringify(appsscript, null, 2));
console.log('Updated appsscript.json with timeZone: Asia/Tokyo');
