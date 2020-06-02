module.exports = {
    extends: ['alloy/react'],
    plugins: ['react-hooks'],
    rules: {
        /**
         * 检查 Hook 的规则
         */
        'react-hooks/rules-of-hooks': 'error',
        /**
         * 不检查 Hook 依赖项
         */
        'react-hooks/exhaustive-deps': 'warn'
    }
};
