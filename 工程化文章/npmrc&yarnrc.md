# .npmrc & .yarnrc

`npmrc` 和 `yarnrc` 是两个配置文件，用于配置 npm 和 Yarn 包管理器的行为和设置。它们分别用于配置 npm 和 Yarn 的命令行工具的行为，例如设置镜像源、代理、缓存路径等。

# npmrc

`npmrc` 是 npm 的配置文件，通常是 `.npmrc` 文件。你可以在项目级别或全局级别创建 `.npmrc` 文件来配置 npm 的行为。

**配置方式：**

1. **项目级别配置：** 在项目根目录下创建 `.npmrc` 文件，并添加所需配置。
2. **全局级别配置：** 使用命令 `npm config edit` 打开全局配置文件，并添加所需配置。

**常见配置项：**

- `registry`：设置包的下载源。
- `proxy` 和 `https-proxy`：设置代理服务器。
- `cache`：设置包的缓存路径。
- `prefix`：设置全局安装包的路径。
- `strict-ssl`：是否强制使用 SSL。

示例

```js
# .npmrc

# 设置下载源为淘宝镜像，淘宝证书到期了，换了
registry=https://registry.npm.taobao.org/

# 设置代理服务器
proxy=http://proxy.example.com:8080
https-proxy=http://proxy.example.com:8080

# 设置包的缓存路径
cache=/path/to/npm-cache

# 设置全局安装包的路径
prefix=/path/to/npm-global
```

# yarnrc

`yarnrc` 是 Yarn 的配置文件，通常是 `.yarnrc` 或 `.yarnrc.yml` 文件。你可以在项目级别或全局级别创建 `.yarnrc` 文件来配置 Yarn 的行为。

**配置方式：**

1. **项目级别配置：** 在项目根目录下创建 `.yarnrc` 文件，并添加所需配置。
2. **全局级别配置：** 使用命令 `yarn config set` 添加全局配置。

**常见配置项：**

- `registry`：设置包的下载源。
- `proxy` 和 `https-proxy`：设置代理服务器。
- `cache-folder`：设置包的缓存路径。
- `preferred-cache-folder`：设置首选缓存路径。
- `nodeLinker`：设置 Node 模块链接器。

**示例：**

```
# .yarnrc

# 设置下载源为淘宝镜像，淘宝证书到期了，换了
registry "https://registry.npm.taobao.org/"

# 设置代理服务器
proxy "http://proxy.example.com:8080"
https-proxy "http://proxy.example.com:8080"

# 设置包的缓存路径
cache-folder "/path/to/yarn-cache"

# 设置首选缓存路径
preferred-cache-folder "/path/to/preferred-cache"
```

配置文件中的每一行都应该是一个配置项，以 `key value` 的格式表示。你可以根据需要添加或修改这些配置项来定制 npm 和 Yarn 的行为。
