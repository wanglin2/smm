# 教你如何用这个思维导图来薅各家AI模型的羊毛

市面上的大模型厂商都会给新用户提供很多的免费额度，我这里简单汇总了一下国内的：

- 阿里云：上百个模型提供了免费额度，每个一百万。
- 字节火山引擎：30+模型，每个五十万。
- 七牛云：全系模型，一共三百万免费额度，另外有邀请活动，邀请好友体验一下，自己得五百万额度，好友得一千万额度。
- 智谱 AI：两千万免费额度。
- 腾讯云：比较抠门，就一个模型，免费额度一百万。

可以看到，除了腾讯很小气之外，其他都是很大气的，这么多，足够个人用很久很久很久了。

除以上之外可能还有其他的，如果你知道，欢迎评论区留言。

另外如果你的公司比较大，可能还有自己内部的模型服务，这个一般都是完全免费的。

一家额度用完了，换一家，或者换个手机号注册一下就又满血复活了。

所以，就思维导图使用的这个场景来说，根本就不需要去购买市面上思维导图产品封装的二次接口服务。但是，它们往往都不支持让用户自己配置模型，毕竟如果能自己配置，谁还给它们充值。

这时候，我开发的思绪思维导图的含金量就来了。自己随意配置，配置完成后所有AI功能免费使用，全程无需花一分钱。

反正那些免费额度，不用也是浪费，所以为何不利用起来呢。

# 思绪思维导图的配置

思绪思维导图目前支持的AI功能为：

1.一键生成整个思维导图：


![](https://files.mdnice.com/user/19028/9b7e3b42-4657-4590-bf13-eae8d2dfccd6.png)


![](https://files.mdnice.com/user/19028/08894623-4cd3-4547-a278-7816ea74bdc1.png)


2.续写某个节点：

3.AI生成主题：


![](https://files.mdnice.com/user/19028/6308b438-9679-423c-a326-d363ce4be2be.png)


![](https://files.mdnice.com/user/19028/e27d9583-d2e8-469a-ad89-c7a2da4fdab0.png)



4.AI对话：


![](https://files.mdnice.com/user/19028/d8bc4d07-f55e-47d5-9eb5-7fba340118fc.png)


配置也非常简单，只要获取到模型的请求URL、API key、模型id，就可以了。

打开软件的【设置】-【AI】，填入这三个配置即可。


![](https://files.mdnice.com/user/19028/12fdfc90-64d2-45a7-961d-e6ebbeb0f81a.png)


配置完成也支持测试是否配置成功，非常的简单和方便。

# 部分厂商的配置信息获取保姆级教程

## 阿里云

打开网址：
https://bailian.console.aliyun.com/cn-beijing/

注册或登陆，登陆完成后点击左侧的【模型用量】：


![](https://files.mdnice.com/user/19028/b3d8060d-1c14-42bd-9e81-169346775aa1.png)

显示有免费额度的模型都可以使用，怕超出也可以点击右侧的【免费额度用完即停】。

- 请求URL：

https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions

直接复制粘贴进思绪思维导图：


![](https://files.mdnice.com/user/19028/9796c550-c7c6-4272-9230-5073a66539d3.png)


- 模型id获取：

还是在【模型用量】里，选择一个喜欢的模型，复制一下：


![](https://files.mdnice.com/user/19028/b0aec254-1298-435e-a63d-e74555a74f88.png)



![](https://files.mdnice.com/user/19028/98ba2a32-5df0-4c8e-b1dd-2655278d0bc1.png)


- API key获取：

点击页面左下角的【API Key】，再点击右上角的【创建API Key】：

![](https://files.mdnice.com/user/19028/9b3230c3-f9d9-45f2-83af-14a9f3430de8.png)

复制生成的key，填写到思维导图中：

![](https://files.mdnice.com/user/19028/66df7e49-e6dc-4a8a-b948-cf650eb04cf2.png)


![](https://files.mdnice.com/user/19028/51a6b158-ba13-4538-a6f1-f90f0279d086.png)

有些模型可能会返回思考过程，要去掉可以增加如下配置：

```js
{"extra_body":{"enable_thinking":false}}
```


![](https://files.mdnice.com/user/19028/880f03d7-3b0e-4ce6-b97f-b11b25863f48.png)


配置完成后，可以点击下面的【测试】按钮，如果模型回复了，就代表配置成功。


![](https://files.mdnice.com/user/19028/c7327452-9b6f-4a2e-8dbc-737fd0205368.png)



## 火山引擎

打开网站[https://www.volcengine.com/product/ark](https://www.volcengine.com/product/ark "https://www.volcengine.com/product/ark")，注册或登陆后，点击【控制台】：

![](https://files.mdnice.com/user/19028/f980d4ef-44ba-4d03-8f10-b1126bbba072.png)

点击左侧的【在线推理】，在点击【创建推理接入点】：

![](https://files.mdnice.com/user/19028/fb76f7fe-b9ad-4a27-ae94-1f1a55cda521.png)

名称随便填，首次需要实名认证：

![](https://files.mdnice.com/user/19028/9b7355b9-1f77-4741-ab6d-747f1788a7a0.png)

实名认证完成后最好刷新一下当前页面，再点击【添加模型】

![](https://files.mdnice.com/user/19028/f9baae42-0481-43ab-a98b-eedfbefaa34f.png)

随便选一个带【免】标识的，点击【确定】：

![](https://files.mdnice.com/user/19028/8cc8b0f5-48c8-49e8-bf48-0bdf43f512a8.png)

有些可能是图片或视频模型，我们选择文本模型就行，可以看是不是显示【按token】付费。

最后点击【开通】即可：

![](https://files.mdnice.com/user/19028/5e12cabf-b2d7-43fa-a454-5c78a0956b51.png)

- 模型id获取：

复制如下图所示的id，填写到思维导图中：

![](https://files.mdnice.com/user/19028/c07911d0-53d8-4ce2-ac41-d3305b27baa7.png)

- API key获取：

点击页面左下角的【API Key管理】：

![](https://files.mdnice.com/user/19028/0a008c7a-aa25-4286-9ce3-0fd596696c42.png)

点【创建】：

![](https://files.mdnice.com/user/19028/44fe412f-391d-4707-847f-20f40a101420.png)

复制填写到思维导图中即可：

![](https://files.mdnice.com/user/19028/67395152-9e4d-4117-9cd6-4342eb1d4b4e.png)

- 请求URL：

https://ark.cn-beijing.volces.com/api/v3/chat/completions

复制以上url，直接粘贴进思维导图配置即可。

有些模型可能有思考过程，如想去掉，可以增加如下配置：

```js
{"thinking":{"type":"disabled"}}
```


![](https://files.mdnice.com/user/19028/a0529f98-317f-4344-8424-dc25c1261720.png)


其他平台可以自行探索，如有需要可在评论区留言，后续也可以另出教程。

