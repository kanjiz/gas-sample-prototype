import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";
import { configs } from "@typescript-eslint/eslint-plugin";

export default [
  {
    ignores: [
      "dist/", // distディレクトリを無視
      "node_modules/", // node_modulesディレクトリを無視
    ],
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
    },
    rules: {
      ...configs.recommended.rules,
      // 追加のルール設定
    },
  }
];
