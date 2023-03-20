
Web攻击是针对用户上网行为或网站服务器的攻击行为，比如植入恶意代码，修改网站权限，窃取用户身份信息等。

常见的Web攻击方式有：
* XSS跨站脚本攻击
* CSRF跨站请求伪造攻击
* 中间人攻击
* SQL注入攻击

## XSS

[XSS]([跨站脚本 - 维基百科，自由的百科全书 (wikipedia.org)](https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC))，跨站脚本攻击，允许攻击者将恶意代码植入给提供正常用户使用的页面当中。
XSS的攻击目标是为了盗取用户存取在客户端的cookie或者其他网站用于身份识别的敏感信息。一旦获取到合法用户的身份信息后，将假冒合法用户与网站进行交互。

XSS主要分成：
* 存储型
* 反射型
* DOM型

```html
<input type="text" value="">
<script>alert('XSS');
</script>"> 
<button>搜索</button> 
<div> 您搜索的关键词是：">
	<script>alert('XSS');
	</script> 
</div>
```

**存储型**

存储型XSS的攻击步骤：

* 攻击者将恶意代码提交到服务器的数据库中
* 用户打开目标网站时，会从网站的服务端数据库中取出恶意代码，并且进行拼接返回给浏览器
* 用户浏览器收到响应后会执行恶意代码
* 恶意代码窃听用户数据信息并发送给攻击者，从而冒充用户身份，进行指定操作

**反射型 XSS**

反射型XSS的攻击步骤：

* 攻击者构造特殊的URL，其中包含恶意代码
* 用户打开带有恶意代码的URL，网站会把恶意代码取出，拼接返回给浏览器
* 用户浏览器收到响应收解析执行恶意代码
* 恶意代码窃取用户数据并且发送给攻击者，从而冒充用户信息，进行指定操作

反射型 XSS 跟存储型 XSS 的区别是：存储型 XSS 的恶意代码存在数据库里，反射型 XSS 的恶意代码存在 URL 里。

**DOM 型 XSS**

DOM 型 XSS 的攻击步骤：

* 攻击者构造特殊的URL，其中包含恶意代码
* 用户打开恶意代码的URL
* 用户浏览器收到响应并且执行，前端JavaScript取出URL中的恶意代码并且执行
* 恶意代码窃取用户数据并且发送给攻击者，从而冒充用户信息，进行指定操作

DOM型XSS与前两者XSS的区别：DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞。

**如何预防XSS攻击**

* 在客户端和服务端代码中对script标签进行转义过滤。
* cookie设置HttpOnly属性，保证cookie无法被JavaScript脚本访问。

## CSRF

[CSRF](https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0)是跨站伪造请求，攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站的登陆凭证，绕过登陆验证，达到冒充用户对被攻击网站操作的目的。

CSRF攻击流程：
* 受害者登录a.com，并且保留登录凭证
* 攻击者引导用户登录b.com网站
* b.com向a.com发送一个请求，浏览器会默认携带a.com的Cookie
* a.com接受请求后，对请求进行验证，并确认是受害者的身份凭证，误以为是受害者发送的请求
* a.com以受害者的名义执行了请求
* 攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让a.com执行了自己定义的操作

CSRF可以通过设置一个自动提交的表单发送POST请求。
```html
<form action="http://bank.example/withdraw" method=POST> 
	<input type="hidden" name="account" value="xiaoming" /> 
	<input type="hidden" name="amount" value="10000" /> 
	<input type="hidden" name="for" value="hacker" /> 
</form> 
<script> document.forms[0].submit(); </script>
```

该表单提交后，等于模拟了一次POST请求。

还可以通过a标签诱导用户点击，发送一个GET请求。

```html
< a href="http://test.com/csrf/withdraw.php?amount=1000&for=hacker" taget="_blank"> 
	重磅消息！！ 
<a/>
```

**CSRF的预防**

* 阻止不明外域的访问
	* 同源检测
		HTTP头中有一个[Referer字段](https://zh.wikipedia.org/wiki/HTTP%E5%8F%83%E7%85%A7%E4%BD%8D%E5%9D%80 "HTTP引用地址")，这个字段用以标明请求来源于哪个地址。在处理敏感数据请求时，通常来说，Referer字段应和请求的地址位于同一域名下。但是Referer存在被篡改的可能性。
	* Samesite Cookie
* 验证码：强制用户必须与应用进行交互，才能完成最终的请求。
* 提交信息携带token进行身份验证
	用户登录获取token，在每次提交请求给服务器时，需要验证token的有效性。


## 中间人攻击

[中间人攻击]([中间人攻击 - 维基百科，自由的百科全书 (wikipedia.org)](https://zh.wikipedia.org/wiki/%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB))是指攻击者在通讯的两端分别创建各自的连接，并交换其所得到的数据，使得通讯的双方都以为自己通过一个私密的连接与对方直接对话，但事实上整个会话都被攻击者窃取偷听或者篡改。

* 客户端向服务端发送请求，请求被中间人截获
* 服务端向客户端发送公钥
* 中间人截获公钥保留在自己的手中，然后把自己【伪造的公钥】发给客户端
* 客户但收到【伪造的公钥】，生成加密的hash值发给服务器
* 中间人得到加密的hash值，用自己的私钥解密获得真密钥，同时生成假的加密hash值，发给服务器
* 服务器有私钥解密获取【假的密钥】，然后加密数据传输给客户端

**中间人攻击的预防方案**

* 使用可信任的第三方CA厂商
* 不下载来源不明的未知证书和来源不明的未知文件
* 确保访问的网络是Https的
* 不要使用公共网络发送敏感信息
* 不要点击不安全的连接或者恶意邮件链接

## SQL注入

[SQL注入攻击]([SQL注入 - 维基百科，自由的百科全书 (wikipedia.org)](https://zh.wikipedia.org/wiki/SQL%E6%B3%A8%E5%85%A5))是将恶意的SQL查询语句或者添加删除语句插入到应用的输入参数中，导致后台服务器解析执行SQL语句。

预防方式：
* 严格检查输入数据的格式类型
* 过滤转义特殊的字符
* 对访问数据库的Web应用程序采用Web应用防火墙
