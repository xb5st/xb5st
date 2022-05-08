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


studyhub项目采用了前后端分离的设计，前端为用户返回界面，而后端提供json形式的数据。其中系统的数据（用户信息，作业考试记录、答疑记录等）保存在后端服务器的数据库中。具体如以下配置图所示： 

![](./imgs/peizhitu.png)

下面通过过程试图（包括UML中的状态图、顺序图、活动图）来展示功能设计流程： 

### 用户信息模块 

首先是用户对个人信息的操作和管理，主要包括了用户登录功能，以及修改账号密码的功能。在这里我们认为用户首先需要输入正确的密码，才能对密码进行修改。具体见顺序图： 

![](./imgs/shunxutuUser.png) 


用户修改的个人信息的状态图如下： 

![](./imgs/zhuangtaitu1.png)

### 作业模块 
作业模块的主要操作是老师布置作业，学生完成作业，老师批改作业，学生查看批改情况。系统在这个过程中主要作用是帮助存储老师以及学生对作业进行的编辑，以及通知学生完成作业，还有老师批改作业等。具体见以下状态图和活动图： 

作业模块状态图：
![](./imgs/zhuangtaitu3.png) 

作业模块活动图：
![](./imgs/liuchengtu2.png)


### 考试模块 

作业模块的主要操作是老师设计试卷，学生在规定时间内完成考试，老师改卷，学生查看分数。系统在这个过程中主要作用是帮助存储老师以及学生对试卷进行的编辑，以及通知学生完成考试，还有老师及时改卷等。具体见以下状态图和活动图： 

考试模块状态图：
![](./imgs/zhuangtaitu2.png) 

考试模块活动图: 
![](./imgs/liuchengtu1.png)

### 答疑论坛模块

答疑论坛模块的主要操作是学生针对作业中的题目提出问题，该问题会被发布到论坛上，老师看到后可以进行答疑。系统主要对学生的问题进行存储以及论坛上展示，同时还要记录答疑信息。具体见以下状态图和活动图： 

答疑论坛模块状态图：

![](./imgs/zhuangtaitu4.png) 

答疑论坛模块活动图: 
![](./imgs/liuchengtu4.png)

### 期末汇总模块 

期末汇总模块是系统根据学生的考试情况自动生成的报告，老师可以在课头下查看，并下载到本地。具体见以下状态图和活动图： 

期末汇总模块状态图： 
![](./imgs/zhuangtaitu5.ong.png) 

期末汇总模块活动图： 
![](./imgs/liuchengtu4.png)

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



## 数据库设计

### 采用的数据库

指明所采用的数据库管理系统，版本等必要信息。

### 数据库表的设计

表的设计包括以下内容：

- 表名(中英文):
- 字段名:
- 字段数据类型：
- 字段是否为空：
- 字段的默认值：
- 备注，对字段的解释性说明：主键、外键、是否自动增一、是否为索引、是否唯一、是否进行数据检查等。主键是id，解释如下图

1. 存储过程设计（若有）
2. 触发器设计（若有）

![img](https://hellowhu.feishu.cn/space/api/box/stream/download/asynccode/?code=ODFiYmE1OWY5OTdhOWMxNzg0YTliNDEwZTFhMjdjOTRfcmt2WndrWjBWdVhxcGFOTkNnWXo5SUM0NlJOZFZoMFdfVG9rZW46Ym94Y25ISjR0RHFnZEhkNzRZYnQ5SmFvUkFmXzE2NTE5MjY1NTk6MTY1MTkzMDE1OV9WNA)

## 人机交互设计@HuYM

### 原型图
![img](https://github.com/NRISRcd/xb5st/blob/master/docs/project/imgs/yx-1.jpg)
![img](https://github.com/NRISRcd/xb5st/blob/master/docs/project/imgs/yx-2.jpg)
![img](https://github.com/NRISRcd/xb5st/blob/master/docs/project/imgs/yx-3.jpg)
![img](https://github.com/NRISRcd/xb5st/blob/master/docs/project/imgs/yx-4.jpg)
>>>>>>> master
