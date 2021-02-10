# fwcpb-component
## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
基于vue的组件

目录结构

|-examples案例文件夹

|-lib 运行npm run lib后生成的文件，包含js和css

|-packages各种组件的源码（已经写好button按钮相关的，后面组件的开发和扩展可以参考button组件的目录结构）

|-public静态文件

|-babel.config.js babel的配置文件

|-package.json 依赖包

|-vue.config.js vue的配置文件


使用方式

1、可以通过：npm i fwcpbfrontend-component去安装使用

在main.js中加入

import fwcpbfrontendComponent from 'fwcpbfrontend-component';

Vue.use(fwcpbfrontendComponent);即可引用

2、可以通过引入js的方式引入，js即为lib下的fwcpb.umd.js

git地址：https://github.com/taowenjing/fwcpbfrontend-component
