// 底层操作系统进行域名解析，不需要经过任何网络通信
const dns = require("dns");

// 使用底层工具,同步,系统缓存未命中，查找 hosts 文件
dns.lookup("nodejs.red", (err, address, family) => {
  console.log("地址：%j 地址族: IPv%s", address, family);
});

// 链接到 DNS 服务器执行域名解析,异步
dns.resolve("www.nodejs.red", (err, records) => {
  console.log(records);
});
