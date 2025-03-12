import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../dist/appsscript.json');

// ファイルの更新処理
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const json = JSON.parse(data);
  json.timeZone = 'Asia/Tokyo'; // timeZoneをAsia/Tokyoに変更
  fs.writeFile(filePath, JSON.stringify(json, null, 2), 'utf8', (err) => {
    if (err) {
      console.error(err);
    }
  });
});