module.exports = {
    extends: ['./react'],
    plugins: ['react-native'],
    rules: {
        /**
         * 检查文本的外部组件
         */
        'react-native/no-raw-text': ['error', { skip: ['Button', 'AnimatedText','KText'] }],
        /**
         * 检查 StyleSheet 中未使用的样式表
         */
        'react-native/no-unused-styles': 'error'
    }
};
