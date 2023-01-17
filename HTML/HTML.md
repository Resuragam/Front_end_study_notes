# HTML

## 1. 常用的meta元素有哪些？

* **charset **

  指定**HTML**的编码格式，一般为**utf-8**

  ~~~html
  <meta charset="utf-8">
  ~~~

* **name & content**

  指定元数据的名称

  - **author**——定义了页面的作者

  ```html
  <meta name="author" content="Tony">
  ```

  - **keywords**——为搜索引擎提供关键字

  ```html
  <meta name="keywords" content="HTML, CSS, JavaScript">
  ```

  - **description**——对网页整体的描述

  ```html
  <meta name="description" content="My tutorials on HTML, CSS and JavaScript">
  ```

  * **viewport**——对页面视图相关进行定义

  ```
  width=device-width——将页面宽度设置为跟随屏幕宽度变化而变化
  initial-scale=1.0——设置浏览器首次加载页面时的初始缩放比例(0.0-10.0正数)
  maximum-scale=1.0——允许用户缩放的最大比例(0.0-10.0正数)，必须大于等于minimum-scale
  minimum-scale=1.0——允许用户缩放的最小比例(0.0-10.0正数)，必须小于等于maximum-scale
  user-scalable=no——是否允许用户手动缩放(yes或者no)
  1<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minmum-scale=1.0">
  ```

  - **generator**——包含生成页面软件的标识符

  ```html
  <meta name="generator" content="Hexo 3.8.0">
  ```

  - **theme-color**——定义主题颜色

  ```html
  <meta name="theme-color" content="#222">
  ```

* **http-equiv & content**

  * **refresh**——刷新文档的时间

  ~~~html
  <meta http-equiv="refresh" content="30">
  ~~~

  - X-UA-Compatible——告知浏览器以何种版本渲染界面。下面的例子有限使用IE最新版本

  ```html
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  ```

  关于是否有必要使用这一条在stack overflow尚且有争议。个人认为如果不想兼容低版本的IE，可以直接忽略这一条。

  - Cache-Control——请求和响应遵循的缓存机制，可以声明缓存的内容，修改过期时间，可多次声明

  > no-transform——不得对资源进行转换或转变。 no-siteapp——禁止百度进行转码

  ```html
  <meta http-equiv="Cache-Control" content="no-transform">
  <meta http-equiv="Cache-Control" content="no-siteapp">
  ```

  - property & content

  可以让网页成为一个富媒体对象，同意网页内容被其他网站引用，同时在应用的时候不会只是一个链接，会提取相应的信息展现给用户。

  ```html
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://zjgyb.github.io/index.html">
  <meta property="og:site_name" content="tony's blog">
  ```