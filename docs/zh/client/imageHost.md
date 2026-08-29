# 思绪思维导图图床配置保姆级教程~

思绪思维导图中，给节点添加、粘贴的图片默认是以base64编码的形式保存在smm源文件中，当图片比较大，或者图片很多的时候会导致smm文件体积很大，可能会影响文件的打开和保存的速度。

解决这个问题的方法主要有两种：

一是设置图片压缩参数，减小图片宽高，或者减小图片质量，来减小图片体积：

![](https://files.mdnice.com/user/19028/615ed13d-d86d-4e9a-b34b-9a3c4d2a67d8.png)

二就是本文要介绍的图床。

就是将图片直接上传到图床中，这样smm源文件中只需保存一个图片url，可以大大减小文件体积。

云存储厂商的图片存储费用都不贵，一般都是按量付费，对于个人使用来说花不了什么钱。

本文会以阿里云为例来介绍一下如何配置。

所需工具：思绪思维导图+PicGo+阿里云

# 安装PicGo

PicGo是一个免费、开源的图床管理工具，支持多种图床，如阿里云、七牛云等。

可以在这里下载：[https://github.com/Molunerfinn/PicGo/releases](https://github.com/Molunerfinn/PicGo/releases "https://github.com/Molunerfinn/PicGo/releases")

> 网址无法打开，可以试试翻墙，或者试试移动网络。

根据自己的系统类型下载对应的安装包：

![](https://files.mdnice.com/user/19028/4a7ffb14-cbb1-4994-b40a-5644a8abe82c.png)

下载完直接安装，安装后打开软件，切换到阿里云配置：：

![](https://files.mdnice.com/user/19028/d37b70ed-3f9a-4005-bc0d-cd84ef0db338.png)

点击添加：

![](https://files.mdnice.com/user/19028/f7f4a9a2-3f43-421e-a970-10c1ea6c17b8.png)

图床名称随便填，最好填字母，然后还需要4个参数，需要去阿里云获取。


# 阿里云

首先注册或登陆阿里云：[https://www.aliyun.com/](https://www.aliyun.com/ "https://www.aliyun.com/")

登陆完后需要先进行一下实名认证：[https://myaccount.console.aliyun.com/cert-info](https://myaccount.console.aliyun.com/cert-info "https://myaccount.console.aliyun.com/cert-info")


![](https://files.mdnice.com/user/19028/133b354b-d559-4f9f-9f44-8b760bbadc1e.png)


认证完成后访问：[https://www.aliyun.com/product/oss](https://www.aliyun.com/product/oss "https://www.aliyun.com/product/oss")

直接点右上角的【对象存储OSS控制台】：


![](https://files.mdnice.com/user/19028/cd40c615-69a2-4e87-a0b3-bb85ffc9fb49.jpg)

点击【立即开通】：


![](https://files.mdnice.com/user/19028/6c13f58b-cf59-4a39-b784-59e853716391.png)

再点击【立即购买】：


![](https://files.mdnice.com/user/19028/1c9dfd2e-1852-4692-af9e-64ba78583bc5.png)

再点击【立即支付】：


![](https://files.mdnice.com/user/19028/56d75cad-78a1-4924-8e4c-817494171091.png)

再点击【支付】，当然实际不需要支付：


![](https://files.mdnice.com/user/19028/69aeb2a5-3e09-4170-9aa9-5d799e5cc004.png)

最后点击【管理控制台】：


![](https://files.mdnice.com/user/19028/a071bc5f-c81e-483e-a72d-f0c8de4118eb.png)

进入控制台后点击左侧的【Bucket 列表】：


![](https://files.mdnice.com/user/19028/c93f7938-9235-49ad-b1cd-c96e7a626841.png)

然后点击【创建Bucket】，名称随便填，最后点击【完成创建】：


![](https://files.mdnice.com/user/19028/fb79db2d-f20b-407b-ba33-63635aa229c2.png)

创建完成后点击【进入Bucket】：

PicGo配置中的其中两个可以直接在url中获取：


![](https://files.mdnice.com/user/19028/3b79f1c6-0a6f-4c8f-aab2-98b2cd37577f.png)

接下来要设置文件访问权限，默认是不允许公共访问，需要开启一下：

![](https://files.mdnice.com/user/19028/a3bf15ea-0133-4aad-ad4c-4610b8059709.png)


![](https://files.mdnice.com/user/19028/3b2fbdc9-b120-4870-aa93-aa4ac0563d9b.png)



key和id需要在右上角【我的】里获取：


![](https://files.mdnice.com/user/19028/3a2844d1-8a69-4996-994a-315bd9b207e8.png)


![](https://files.mdnice.com/user/19028/2ff45e2a-f8d9-4a16-9161-6a0b3c85eae8.png)


![](https://files.mdnice.com/user/19028/6926cfe5-e57d-4158-a18d-ecc34c8131f3.png)


![](https://files.mdnice.com/user/19028/46b7c811-e5ef-4d1f-9ef8-3bc3f8fbd165.png)

PicGo中配置完成后点击【确定】即可。

# 思绪思维导图配置

打开思绪思维导图，点击右上角的【设置】-【图床】：

图床url默认已经填写了，一般来说不需要修改，可以直接上传图片进行测试：


![](https://files.mdnice.com/user/19028/e9e08994-b779-4dae-8c1c-cfe5170b389d.png)

【是否启用】开启后，后续在思维导图中上传的图片都会上传到图床中。


![](https://files.mdnice.com/user/19028/f4eb3c5d-945e-486e-a145-6d25fcf004a2.png)

至此配置完成，有任何问题，评论区留言~