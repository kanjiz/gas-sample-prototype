# gas-sample-prototype

Google Apps Script project using TypeScript

## package.json の説明

- **name**: プロジェクトの名前
- **version**: プロジェクトのバージョン
- **description**: プロジェクトの説明
- **main**: エントリーポイントとなるファイル
- **scripts**:
  - **build**: TypeScript のコンパイルとテンプレートのコピーを行うスクリプト
  - **copy-templates**: テンプレートファイルを dist ディレクトリにコピーするスクリプト
  - **create**: `clasp create` コマンドを実行し、`appsscript.json` を更新するスクリプト
  - **push**: `clasp` を使用して Google Apps Script にデプロイするスクリプト
- **dependencies**: プロジェクトの依存関係
- **devDependencies**: 開発環境の依存関係
  - **typescript**: TypeScript のバージョン
  - **@types/google-apps-script**: Google Apps Script の型定義ファイルのバージョン

## package.json の内容

```json
{
  "name": "gas-sample-prototype",
  "version": "1.0.0",
  "description": "Google Apps Script project using TypeScript",
  "main": "dist/Code.js",
  "scripts": {
    "build": "tsc && npm run copy-templates",
    "copy-templates": "cp -r src/templates dist/",
    "create": "cd dist && clasp create --type standalone --title 'My Project' && node ../scripts/updateAppsscriptJson.js",
    "push": "cd dist && clasp push"
  },
  "dependencies": {},
  "devDependencies": {
    "typescript": "^5.8.2",
    "@types/google-apps-script": "^1.0.97"
  }
}
