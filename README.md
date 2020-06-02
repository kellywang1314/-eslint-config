# @ynan/eslint-config

统一各项目的 eslint 规范，规范基于[eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy/blob/master/README.md)，项目内部会依赖所需要的 eslint 插件，无需单独安装 eslint 等插件。

## 使用方法

### 安装

```bash
npm install -D @ynan/eslint-config
```

### 配置

在根目录下增加.eslintrc.js 配置文件，将以下代码复制

```js
//基础版本
module.exports = {
    extends: ['@ynan/eslint-config'],
    env: {
        // 这里填入你的项目用到的环境
        // 它们预定义了不同环境的全局变量，比如：
        //
        // browser: true,
        // node: true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    globals: {
        // 这里填入你的项目需要的全局变量
        // false 表示这个全局变量不允许被重新赋值，比如：
        //
        // myGlobal: false
    },
    rules: {
        // 个性化配置，会覆盖默认配置
    }
};
```

```js
//react+js
extends: ['@ynan/eslint-config/react'],
```

```js
//react+ts
extends: ['@ynan/eslint-config/react-ts'],
```

```js
//react-native+js
extends: ['@ynan/eslint-config/react-native'],
```

```js
//react-native+ts
extends: ['@ynan/eslint-config/react-native-ts'],
```

### 其他

配合 prettier 代码格式化可用 [@ynan/prettier-config]()
