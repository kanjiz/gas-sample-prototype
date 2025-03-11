# gas-sample-prototype

Google Apps Script project using TypeScript

## package.json の説明

-   **name**: プロジェクトの名前
-   **version**: プロジェクトのバージョン
-   **description**: プロジェクトの説明
-   **main**: エントリーポイントとなるファイル
-   **type**: モジュールタイプ（"module" または "commonjs"）
-   **scripts**:
    -   **build**: TypeScript のコンパイルとテンプレートのコピーを行うスクリプト
    -   **copy-templates**: テンプレートファイルを dist ディレクトリにコピーするスクリプト
    -   **create**: `clasp create` コマンドを実行し、`appsscript.json` を更新するスクリプト
    -   **push**: `clasp` を使用して Google Apps Script にデプロイするスクリプト
    -   **lint**: `eslint` を使用してコードをチェックするスクリプト
-   **dependencies**: プロジェクトの依存関係
-   **devDependencies**: 開発環境の依存関係
    -   **typescript**: TypeScript のバージョン
    -   **@types/google-apps-script**: Google Apps Script の型定義ファイルのバージョン
    -   **eslint**: ESLint のバージョン
    -   **@typescript-eslint/parser**: TypeScript 用の ESLint パーサーのバージョン
    -   **@typescript-eslint/eslint-plugin**: TypeScript 用の ESLint プラグインのバージョン

## package.json の内容

```json
{
    "name": "gas-sample-prototype",
    "version": "1.0.0",
    "description": "Google Apps Script project using TypeScript",
    "main": "dist/Code.js",
    "type": "module",
    "scripts": {
        "build": "tsc && npm run copy-templates",
        "copy-templates": "cp -r src/templates dist/",
        "create": "cd dist && clasp create --type standalone --title 'My Project' && node ../scripts/updateAppsscriptJson.js",
        "push": "cd dist && clasp push",
        "lint": "eslint"
    },
    "devDependencies": {
        "@types/google-apps-script": "^1.0.97",
        "typescript": "^5.8.2",
        "@typescript-eslint/eslint-plugin": "^8.26.1",
        "@typescript-eslint/parser": "^8.26.1",
        "eslint": "^9.22.0"
    }
}
```
