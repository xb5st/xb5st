# 概要设计

## 系统概述

该系统是一个计算机专业课一体化平台，从校园师生切身需求出发，集在线作业、在线考试、在线答疑等课程管理功能于一体的综合教学平台。

## 运行环境

### 软件环境

|            | **名称** | **版本**                               |
| ---------- | -------- | -------------------------------------- |
| 操作系统   | Windows  | 10                                     |
| 数据库平台 | MySql    | 8.0.24                                 |
| 应用平台   | Web      |                                        |
| 客户端软件 | Chrome   | 99.0.4844.82 (Official Build) (64-bit) |

### 硬件环境

xxxxxx

### 开发环境

xxxxxx

## 软件架构及说明（软件架构图）

xxxxxx

## 硬件架构及说明（网络拓扑图）

xxxxxx

## 关键技术与算法

说明本系统中的主要技术与算法。

## 系统功能设计

此部分主要对各关键功能进行设计，描述其实现方式。除了文字描述以外，需要辅以类图、顺序图等描述。

### 功能1

- **逻辑视图**采用UML类图来实现
- **开发视图**使用UML构件图来表示模块，用包来表示子系统，利用连接表示模块或子系统之间的关联
- **过程视图**采用UML状态图、顺序图和活动图来实现
- **物理视图**定义了功能单元的分布状况，描述用于执行用例和保存数据的业务地点，可以使用UML的配置图来实现

### 功能2



功能1：交作业

![img](https://hellowhu.feishu.cn/space/api/box/stream/download/asynccode/?code=Y2VjNzEyOTUxYzVmMjY3OGM5MDA0NTUwYjEwZDNlYjdfakpKcWFJdHh4b0VGZ0FKY3VUcmo4enFsZUdDcGRIV3hfVG9rZW46Ym94Y240NzJKdTJLN2ZiNzRWdGpiNno2bGRjXzE2NTE5MjY1NTk6MTY1MTkzMDE1OV9WNA)



### 功能3

xxxxx

## 非功能性设计@Tianj

为保证满足非功能性指标，而采取的措施、技术等描述。



•性能：将关键性的操作局部化到少量的构件中、一台计算机上。减少通信量。
      对大量数据的处理优化算法
      对sql语句进行优化，命中索引
      使用Redis，消息队列等中间件进行缓存、异步等应对高并发。
•信息安全：层次化的体系结构，把最关键的资源放在最内层进行保护。
      对敏感信息在前后端进行加密处理和传输，有条件可以使用https。
      对用户进行身份验证、鉴权。

•可用性：在版本迭代时采取灰度发布、平滑上线功能。

•可维护性：尽量使用细粒度、自包含的构件，尽量避免共享数据结构。
      所有源码必须加上关键注释、不要过度注释。
      所有需求需要有单元测试。
      设计时尽量贴合高内聚低耦合。
•可靠性：为了避免服务不可用、服务器宕机，可以搭建集群。



## 数据库设计@Tianj

### 采用的数据库

MYSQL 8.0.24

### 数据库表的设计

表的设计包括以下内容：

作业表：assignment
字段                数据类型   是否可空 默认值     备注
id                  int       0       自增       主键，自增1
title               varchar   1       null       标题
slave_id            int       0       无         课头id
close               int       0       0          1到期0未到期
end_time            datetime  0       无         deadline
delete              int       0       0          逻辑删除
create_time         datetime  0       当前时间戳  插入时间
update_time         datetime  0       当前时间戳  更新时间

课程表：course
字段                数据类型   是否可空 默认值     备注
id                  int       0       自增       主键，自增1
name                varchar   1       null       名字
outline             varchar   1       null       大纲
delete              int       0       0          逻辑删除
create_time         datetime  0       当前时间戳  插入时间
update_time         datetime  0       当前时间戳  更新时间

问题表: issue
字段                数据类型   是否可空 默认值     备注
id                  int       0       自增       主键，自增1
assignment_id       int       0       无         作业id
index               int       0       无         序号
content             varchar   1       null       内容
goal                分值      0       0.0        分值
delete              int       0       0          逻辑删除
create_time         datetime  0       当前时间戳  插入时间
update_time         datetime  0       当前时间戳  更新时间

问题解答记录表:issue_solve_record
字段                数据类型   是否可空 默认值     备注
id                  int       0       自增       主键，自增1
student_id          int       0       无         学生id
issue_id            int       0       无         问题id
content             varchar   1       null       内容
correct             int       0       0          1已批改
score               double    0       -1.00      得分
delete              int       0       0          逻辑删除
create_time         datetime  0       当前时间戳  插入时间
update_time         datetime  0       当前时间戳  更新时间

课头表:slave
字段                数据类型   是否可空 默认值     备注
id                  int       0       自增       主键，自增1
slave_number        varchar   0       无         课头号
course_id           int       0       无         课程id
teacher_id          int       0       无         老师id
delete              int       0       0          逻辑删除
create_time         datetime  0       当前时间戳  插入时间
update_time         datetime  0       当前时间戳  更新时间

学生表:student
字段                数据类型   是否可空 默认值     备注
id                  int       0       自增       主键，自增1
student_number      varchar   0       无         学号
name                varchar   0       无         姓名
password            varchar   0       无         密码
delete              int       0       0          逻辑删除
create_time         datetime  0       当前时间戳  插入时间
update_time         datetime  0       当前时间戳  更新时间

选课表:student_slave
字段                数据类型   是否可空 默认值     备注
id                  int       0       自增       主键，自增1
student_id          int       0       无         学生id
slave_id            int       0       无         课头id
delete              int       0       0          逻辑删除
create_time         datetime  0       当前时间戳  插入时间
update_time         datetime  0       当前时间戳  更新时间

老师表:teacher
字段                数据类型   是否可空 默认值     备注
id                  int       0       自增       主键，自增1
work_number         varchar   0       无         工号
name                varchar   0       无         姓名
password            varchar   0       无         密码
delete              int       0       0          逻辑删除
create_time         datetime  0       当前时间戳  插入时间
update_time         datetime  0       当前时间戳  更新时间


![img](https://hellowhu.feishu.cn/space/api/box/stream/download/asynccode/?code=ODFiYmE1OWY5OTdhOWMxNzg0YTliNDEwZTFhMjdjOTRfcmt2WndrWjBWdVhxcGFOTkNnWXo5SUM0NlJOZFZoMFdfVG9rZW46Ym94Y25ISjR0RHFnZEhkNzRZYnQ5SmFvUkFmXzE2NTE5MjY1NTk6MTY1MTkzMDE1OV9WNA)

## 人机交互设计@HuYM

### 原型图

