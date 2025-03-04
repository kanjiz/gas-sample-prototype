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
  - **push**: clasp を使用して Google Apps Script にデプロイするスクリプト
- **dependencies**: プロジェクトの依存関係
- **devDependencies**: 開発環境の依存関係
  - **typescript**: TypeScript のバージョン
  - **@types/google-apps-script**: Google Apps Script の型定義ファイルのバージョン
