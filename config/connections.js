module.exports.connections = {
  
  // mysql连接配置,请改成自己对应的数据库设置
  someMysqlServer: {
    adapter: 'sails-mysql', // 不需要改动
    host: 'localhost', // 本地数据库地址,默认端口号3306
    user: 'root', // 改成本地登陆数据库用户名
    password: '', // 改成本地登陆数据库密码
    database: 'community' // 改成相应的数据库名字
  }
};
