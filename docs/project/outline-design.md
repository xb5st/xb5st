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

•信息安全：层次化的体系结构，把最关键的资源放在最内层进行保护。

•可用性：包含冗余的构件、备份的数据、缓冲存储机制等

•可维护性：尽量使用细粒度、自包含的构件，尽量避免共享数据结构。

•安全性：与安全的相关的操作集中在少量构件中，便于进行安全性确认



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
![img](https://github.com/NRISRcd/xb5st/tree/master/docs/project/imgs/yx-1.png)
![img](https://github.com/NRISRcd/xb5st/tree/master/docs/project/imgs/yx-2.png)
![img](https://github.com/NRISRcd/xb5st/tree/master/docs/project/imgs/yx-3.png)
![img](https://github.com/NRISRcd/xb5st/tree/master/docs/project/imgs/yx-4.png)
