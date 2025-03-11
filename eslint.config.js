import { defineConfig, globalIgnores } from "eslint/config";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";
import jsdoc from "eslint-plugin-jsdoc";
import { configs } from "@typescript-eslint/eslint-plugin";

export default defineConfig([
  globalIgnores([
    "dist/**" // distディレクトリを無視
  ]),
  jsdoc.configs["flat/recommended-typescript"], // JSDocの推奨設定を適用
  {
    files: ["**/*.ts", "**/*.js"], // TypeScriptファイルとJavaScriptファイルを対象にする
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 2019, // ECMAScript 2019に設定
        sourceType: "script", // GASのスクリプトは通常モジュールとして扱われない
      },
      globals: {
        // GAS固有のグローバル変数を追加
        Logger: "readonly",
        SpreadsheetApp: "readonly",
        DocumentApp: "readonly",
        DriveApp: "readonly",
        PropertiesService: "readonly",
        Utilities: "readonly",
        UrlFetchApp: "readonly",
        ScriptApp: "readonly",
        GmailApp: "readonly",
        CalendarApp: "readonly",
        ContactsApp: "readonly",
        Maps: "readonly",
        HtmlService: "readonly",
        ContentService: "readonly",
        Session: "readonly",
        UserProperties: "readonly",
        CacheService: "readonly",
        ScriptProperties: "readonly",
        OAuth2: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      jsdoc,
    },
    rules: {
      ...configs.recommended.rules,
    },
  }
]);
