import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, '../dist/appsscript.json');
const appsscript = JSON.parse(fs.readFileSync(filePath, 'utf8'));

appsscript.timeZone = 'Asia/Tokyo';

fs.writeFileSync(filePath, JSON.stringify(appsscript, null, 2));
console.log('Updated appsscript.json with timeZone: Asia/Tokyo');
