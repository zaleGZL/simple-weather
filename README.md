# simple-weather

[simple-weather](http://guozeling.cn/simple_weather), 正如它的名字一样， 提供了非常简洁的界面和基本的实时天气信息，并且带有IP定位功能。

## 效果图

PC端:

![simple_weather_web](http://p3ek8rd7p.bkt.clouddn.com/simple_weather_web.jpg)

移动设备端:

![simple_weather_mobile_devices](http://p3ek8rd7p.bkt.clouddn.com/simple_weather_mobile_devices.gif)

## 技术框架

该应用是基于 React + Redux 实现的，页面的 UI 则是使用了 Semantic-UI-React 库来完成的。

## 特点

- 简洁的界面及展示必要的天气信息
- 支持县级、区级天气
- 自带基于IP定位的天气查询功能
- 自定义查询天气支持中文、拼音输入
- ...

## 天气接口和IP定位接口说明

- 天气接口: 该天气数据 API 是由和风天气提供的，key 直接暴露出来了，由于是免费版本，所以接口的调用次数和频率有一定的限制，建议去官网申请一个。

- IP定位接口: IP定位是使用的腾讯地图的定位 API，key 也是直接暴露出来，接口同样也有限制，建议自己申请一个。