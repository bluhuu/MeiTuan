module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended", "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react", "react-native"
    ],
    "rules": {
        "indent": [ "error", 4 ],
        "linebreak-style": [ "error", "windows" ],
        "quotes": [ "off", "single" ],
        "semi": [ "off", "never" ],
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "no-console": 0,
        "prefer-promise-reject-errors": 0,
        "no-unused-vars":1,
        "no-undef":1,
    }
};