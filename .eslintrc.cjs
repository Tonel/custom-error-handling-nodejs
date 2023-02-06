module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "plugins": ["prettier"],
    "extends": ["eslint:recommended", "plugin:prettier/recommended"],
    overrides: [
        {
            files: ["*.js"],
            env: {
                node: true,
            },
            rules: {
                "no-unused-vars": "off",
                "no-case-declarations": "off",
            },
        },
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
    },
    "rules": {
        "prettier/prettier": ["error", { endOfLine: "auto" }],
        "arrow-body-style": "off",
        "no-unused-vars": "off",
        "no-useless-escape": "off",
        "no-async-promise-executor": "off",
        "no-self-assign": "off",
    }
}
