module.exports = {
    extends: ['alloy/typescript'],
    rules: {
        /**
         * 不校验类的成员的可访问性
         * @reason 自带生命周期方法写可访问性较累赘
         */
        '@typescript-eslint/explicit-member-accessibility': 'off',
        /**
         * 可以使用 require
         * @reason 要使用懒加载等
         */
        '@typescript-eslint/no-require-imports': 'off',
        /**
         * 类型断言必须使用 as Type，禁止使用 <Type>
         * @reason <Type> 容易被理解为 jsx
         */
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'allow'
            }
        ]
    }
};
