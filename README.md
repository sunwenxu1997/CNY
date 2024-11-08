# opple-odata-mobile
这是一个移动端基于vant组件搭建的vue2项目。
## 注意事项
* 开发阶段建议大家提前在 `vscode`中安装 `Prettier-Code formatter`保证代码格式化时的一致性；
* 项目中暂时移除了`eslint`校验（即便大家都不在意他😂），希望可以通过 `prettier`来解决一些不必要的麻烦；
## 目录
```
│  .env.development        // development 开发环境变量
│  .env.production
│  .prettierrc.json        // prettier 代码格式化配置
│  vue.config.js           // 👍主要配置文件
├─dist
├─public
└─src
    │  App.vue
    │  main.js
    │  permission.js       // 路由权限校验
    │  
    ├─api                  // api 接口封装
    ├─assets               // 图片,svg等资源存放
    ├─components           // 组件
    ├─http
    │      index.js
    │      instance.js     // 请求，响应拦截封装
    │      
    ├─router               // 路由文件
    ├─store              
    │  │  getters.js       // 对外的全局变量
    │  │  index.js
    │  │  
    │  └─modules           // vuex模块
    │          user.js     // vuex-用户模块
    │          
    ├─styles               // 样式
    │      index.scss     
    │      vant-ui.scss    // 修改vant样式
    │      
    ├─utils                // js功能方法
    └─views                // 页面
```

## 项目搭建
```
npm install
```

### 运行
```
npm run dev
```

### 打包
```
npm run build
```
