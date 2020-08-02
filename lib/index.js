/**
 * @fileoverview ESLint config for EDA frontend projects
 * @author Don Smith
 */
"use strict";

module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".js",".jsx"]
      }
    }
  },
  plugins: [
    "import",
    "jest",
    "node",
    "prettier",
    "promise",
    "react"
    "security"
  ],
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:promise/recommended",
    "plugin:react/recommended",
    "plugin:security/recommended",
    "plugin:prettier/recommended",
    "prettier/react"
  ]
}
