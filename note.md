# koa-generator
* npm install -g koa-generator
* 使用 koa2命令


* git remote add origin git@github.com:1391020381/koa2-weibo.git
* git pull origin master --allow-unrelated-histories
* cross-env 抹平环境变量
* cross-env NODE_ENV=dev

# koa2开发环境
* 配置 eslint 以及 pre-commit
* inspect 调试   在script中添加 --inspect   
* chrome://inspect/#devices


* babel-eslint eslint  
* .eslintignore  .eslintrc.json 
* 配置完这些在 vscode 中标示与eslint不符的代码。 保存即可以格式化

* pre-commit 提交前校验文件格式


# cookie session

# jwt jsonwebtoken
* 用户认证成功后,server端返回一个加密的token给客户端
* 客户端后续每次请求都带token,以示当前的用户身份