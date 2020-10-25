module.exports = {
    parser: 'babel-eslint',
    extends: ["airbnb", "prettier"],
    plugins : ["prettier"],
    env: {
        browser: true
    },
    rules: {
        "prettier/prettier": ["error"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/prefer-default-export": 0,
        "react/prop-types": 0,
        "react/jsx-props-no-spreading": 0,
        "no-unused-vars": 1
},
    settings: {
        "import/resolver": {
            "node": {
                "paths": ["src"]
            }
        },
    },
}