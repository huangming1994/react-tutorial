# react-redux
#### react-redux是什么？
在redux中提到过，光有redux还不够，不能和react结合起来，react-redux相当于一个桥梁，才能让两边相通。
通俗点说，单独的react组件相当于一个"傻瓜"（拿不到store数据）组件，只有经过react-redux提供provider和connect连接的组件，就会变成"聪明"（可以拿到store数据）组件。

### API
`<Provider store>`   

属性：
* store 全局唯一的store对象

Provider组件可以让所有经过connect()的组件都能拿到store对象，一般会把应用的根组件包在Provider下。