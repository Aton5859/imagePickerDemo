#### 该仓库是cordova-plugin-telerik-imagepicker在ionic3项目中的使用介绍

#### 关于汉化

该插件默认未支持中文，具体汉化方法：
    1、plugins\cordova-plugin-telerik-imagepicker\src\android\Library\res\values文件夹下multiimagechooser_strings_en直接将其英文描述改为中文。
    2、复制该文件并删除，新建multiimagechooser_strings_cn.xml文件，并将描述文件改为中文，保存后在plugin.xml文件中将其引用更新。

具体可看简述地址：https://www.jianshu.com/p/661ed4466dea

#### 注意事项：

    npm install --save @ionic-native/image-picker@4
    切记在ionic3中要使用@ionic-native/image-picker版本4，高版本亲测有兼容问题！