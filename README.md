# 小区人员管理系统(Community Manage System)

## 准备工作

1. MySQL
2. Node.js(>4.0.0)

### 安装 MySQL

#### Ubuntu

`$ apt-get install mysql`

#### MAC OS

`$ brew install mysql`

### 安装 Node.js

####  Ubuntu

`$ apt-get install node`

##### [源码安装](https://nodejs.org)

####  MAC OS

`$ brew install node`

### 安装依赖

`$ npm install`

## 运行程序

    node --harmony node_modules/babel/lib/_babel-node.js app.js || npm start

## 地址

    http://localhost:1337

## 使用

  - 使用前请先将根目录下的数据导入数据库community.sql
  - 数据库登陆名 root,密码为空
  - 如需更改,请在config/connections中参考注释进行修改
