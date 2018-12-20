# React Typescript 使用 CSS Modules

## 用 typings-for-css-modules-loader 替换 css-loader
```
{
	test: /\.scss$/,
	use: [{
		loader: "style-loader"
	}, {
		loader: "typings-for-css-modules-loader",
		options: {
			modules: true,
			namedExport: true,
			camelCase: true,
			sass: true,
			localIdentName: "[local]_[hash:base64:5]"
		}
	}, {
		loader: "sass-loader"
	}]
}
```
> 如果css-loader的版本是2.0.X，编译时可能会报错：**Error: Cannot find module 'css-loader/locals'**，建议降低版本（1.0.1）

## 添加全局声明
在根目录下新建文件夹 typings , 在该目录下新建文件 type-scss-modules.d.ts
```
declare module "*.scss" {
	const content: any;
	export default content;
}
```
