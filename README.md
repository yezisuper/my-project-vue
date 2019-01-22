# my-project-vue

> my vue demo

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

#父组件向子组件传值
1子组件在props中创建一个属性，用以接收父组件传过来的值

2父组件中注册子组件

3在子组件标签中添加子组件props中创建的属性

4把需要传给子组件的值赋值给该属性

#子组件向父组件传值
1.在子组件中创建一个按钮，给按钮绑定一个点击事件

2.在响应该点击事件的函数中使用$emit来触发一个自定义事件，并传递一个参数

3.在父组件中的子标签中监听该自定义事件并添加一个响应该事件的处理方法

子组件向父组件传值成功 总结一下：

子组件中需要以某种方式例如点击事件的方法来触发一个自定义事件

将需要传的值作为$emit的第二个参数，该值将作为实参传给响应自定义事件的方法

在父组件中注册子组件并在子组件标签上绑定对自定义事件的监听

在通信中，无论是子组件向父组件传值还是父组件向子组件传值，他们都有一个共同点就是有中间介质，子向父的介质是自定义事件，父向子的介质是props中的属性。
抓准这两点对于父子通信就好理解了

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
