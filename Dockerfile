# 使用官方的Node.js基础镜像
FROM node:lts

# 设置工作目录
WORKDIR /app

# 将package.json和package-lock.json或yarn.lock文件复制到工作目录
COPY package*.json ./
COPY yarn.lock ./

# 安装依赖
RUN yarn install

# 拷贝项目文件到工作目录
COPY . .

# 构建项目
RUN yarn build

# 使用官方的Nginx基础镜像作为运行时基础镜像
FROM nginx:stable-alpine

# 将构建好的项目文件从上一层复制到Nginx容器的HTML目录
COPY --from=0 /app/dist /usr/share/nginx/html

# 暴露容器的端口，使其可以从外部访问
EXPOSE 80

# 启动Nginx服务
CMD ["nginx", "-g", "daemon off;"]
