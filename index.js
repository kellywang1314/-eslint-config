module.exports = {
    extends: ['alloy'],
    rules: {
        /**
         * immer为直接赋值
         */
        'no-param-reassign': 'off',
        // es2020 optional chaining fn.()
        'no-unused-expressions': 'off',
         eqeqeq: ["warn", "allow-null"], //== ===
         "no-var": "warn", 
    }
};
