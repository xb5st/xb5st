# 测试计划

## 概述

### 引言

#### 目的

测试教学辅助平台系统中的各个功能模块是否满足用户要求，并测试是否存在bug。预期达到能够使系统进行快速的改进和系统的提高。为了在软件投入生产性运行之前，尽可能多地发现软件的错误。

#### 背景

疫情以来，许多教学活动需要线上进行，如今市场上已有许多在线教学管理平台。但是这些平台或多或少的都会存在功能单一，界面逻辑不清晰，与用户需求不贴合等问题，师生的线上教学体验有提高空间。我们的StudyHub的设计初衷是从校园师生切身需求出发，解决在课程学习中老师和同学遇到的痛点，集**在线作业、在线考试、师生论坛**等课程管理功能于一体的综合教学平台。我们希望该平台能够简化教学管理，减少不必要的人工劳动，提高老师与同学们的线上体验。

#### 项目开发历史

该项目前后经历了三个阶段，前期设计阶段，然后是开发阶段，最后是软件的测试阶段。项目的用户针对的是学校的广大学生、老师和管理员，系统的功能测试主要由开发人员自行测试。

#### 范围

本系统系统试采用的是黑盒测试的方式来对系统进行测试。主要测试软件的功能是否满足客户的需要，性能是否优越以及系统所存在的问题。对系统的各个模块进行详细的测试，并记录测试的结果，对测试的结果进行细致的分析处理。测试时对系统的各个功能模块进行拆分测试，并以每一个模块都要测试到。对所有可能的结果进行测试,以及测试过程中存在的问题进行分析，然后提交测试的记录。最后，对软件存在的问题以及性能的测试进行全面分析，并给予记录。在测试的过程中需要提出各个问题的假设，以及根据需求报告文档中存在的项目功能模块和用户的需求来改善系统。列出可能会影响测试设计、开发、或实施的所有风险或意外事件。列出可能会影响测试设计、开发或实施的所有约束。

#### 定义

- 信息
  - 学生信息：有关学生的个人详细数据，如姓名，学号等等
  - 老师信息：有关老师的个人详细数据，如姓名，工号等等
  - 课程信息：关于某个课程的数据，如课程名，课程大纲等等
  - 课头信息：关于课头的详细数据，如所属老师名，课程名，课头号等等
  - 作业信息：作业的详细信息，作业名称，起止时间等等
  - 学生作答信息：作答信息，对应题目名，对应学生信息等等
  - 题目信息：题目的详细信息，题目名，所属作业名
  - 考试信息：考试的详细信息， 考试名称，所属的课头号，开始结束时间等等
- 管理
  - 对学生信息进行操作，增加学生，修改学生，删除学生
  - 对老师信息进行操作，增加老师，修改老师，删除老师
  - 对作业信息进行操作，新建作业，修改作业，发布作业
  - 对题目信息就行操作，新建题目，修改题目
  - 对解答信息进行操作，新建解答，修改解答
  - 对考试信息进行操作，新建考试

#### 参考资料

| 编号 | 资料名称                           | 作者       | 日期 | 出版单位       |
| ---- | ---------------------------------- | ---------- | ---- | -------------- |
| 1    | 《软件测试：慕课版》               | 郑炜       | 2022 | 人民邮电出版社 |
| 2    | 《软件测试》                       | 黑马程序员 | 2019 | 人民邮电出版社 |
| 3    | 《软件测试：基于问题驱动学习模式》 | 朱少民     | 2017 | 高等教育出版社 |

### 测试内容

| 子系统名称           | 模块名称       | 操作名称           | 测试点   |
| -------------------- | -------------- | ------------------ | -------- |
| 学生老师课程信息系统     | 学生模块        | 新建学生，修改学生    | 学号     |
|                      |                |                    | 姓名     |
|                      |                |                    | 密码     |
|                      | 老师模块        | 新建老师，修改老师     | 工号     |
|                      |                |                    | 姓名     |
|                      |                |                    | 密码     |
|                      | 课程模块        | 新建课程             | 课程名   |
|                      |                |                    | 课程号   |
|                      |                |                    | 课程大纲 |
| 作业系统               | 老师部分        | 老师新建作业         | 作业题目 |
|                      |                |                    | 课头号   |
|                      |                | 老师发布作业         | 作业号   |
|                      |                |                    | 作业状态 |
|                      |                | 老师新建题目         | 新建题目 |
|                      |                |                    | 删除题目 |
|                      |                |                    | 编辑题目 |
| 考试系统              | 老师部分         | 老师新建考试         | 考试题目 |
|                      |                |                    | 课头号   |
|                      |                | 老师发布考试         | 考试号   |
|                      |                |                    | 作业状态 |
|                      |                | 老师新建题目         | 新建题目 |
|                      |                |                    | 删除题目 |
|                      |                |                    | 编辑题目 |
| 学生解答系统           | 学生部分        | 暂存自己的解答        | 作业号   |
|                      |                |                    | 学生号   |
|                      |                |                    | 解答内容 |
|                      |                |                    | 作业状态 |
|                      | 老师部分     | 老师新建题目         | 新建题目 |
|                      |              |                      | 删除题目 |
|                      |              |                      | 编辑题目 |
|                      |              | 对作业进行批改       | 作业号   |
|                      |              |                      | 学生号   |
|                      |              |                      | 最后得分 |
| 论坛答疑系统           | 老师学生部分   | 提出问题              |          |
|                      |              | 对别人的问题作出回答    |          |

### 测试方法

本次测试运用黑盒测试方法，对学生管理系统进行测试。首先，进行对功能模块进行划分，明确功能测试的人员负责情况。其次对各个模块进行测试。黑盒测试也称功能测试或数据驱动测试，它是在已知产品所应具有的功能，通过测试来检测每个功能是否都能正常使用，在测试时，把程序看作一个不能打开的黑盒子，在完全不考虑程序内部结构和内部特性的情况下，测试者在程序接口进行测试, 它只检查程序功能是否按照需求规格说明书的规定正常使用，程序是否能适当地接收输入数锯而产生正确的输出信息，并且保持外部信息（如数据库或文件）的完整性。黑盒测试方法主要有等价类划分、边值分析、因—果图、错误推测等，主要用于软件确认测试。黑盒测试着力于程序外部结构、不考虑内部逻辑结构、针对软件界面和软件功能进行测试。“黑盒法是穷举输入测试，只有把所有可能的输入都作为测试情况使用，才能以这种方法查出程序中所有的错误。实际上测试情况有无穷多个，人们不仅要测试所有合法的输入，而且还要对那些不合法但是可能的输入进行测试。

## 里程碑及进度人员安排

| **里程碑任务** | **工作内容**       | **人员安排** | **开始日期** | **结束日期** |
| -------------- | ------------------ | ------------ | ------------ | ------------ |
| 制定测试计划   | 选定测试方法       | 仇钧超       | 6.3          | 6.5          |
| 设计测试       | 设计测试用例       | 仇钧超       | 6.5          | 6.6          |
| 实施测试       | 实施测试           | 仇钧超       | 6.7          | 6.8          |
| 对测试进行评估 | 评估测试的正确与否 | 仇钧超       | 6.8          | 6.9          |

## 测试环境描述

### 硬件环境

| **设备名称**  | **用途** | **配置信息**                 | **备注**     |
| ------------- | -------- | ---------------------------- | ------------ |
| Inspiron 7591 | 家用     | 8.00GBRAM Intel Core i5-9300 | 64位操作系统 |

### 软件环境

| **软件名称** | **软件类别** | **版本号**   | **补丁程序** | **备注** |
| ------------ | ------------ | ------------ | ------------ | -------- |
| Chrome       | 正式版       | 99.0.4844.74 |              |          |

## 功能测试用例

| 功能A描述                                                    | 有新的学生想要使用本系统，于是进行注册               |                                        |      |
| ------------------------------------------------------------ | ---------------------------------------------------- | -------------------------------------- | ---- |
| 用例目的                                                     | 在学生表student中新建条目                            |                                        |      |
| 前提条件                                                     | 学生表已经被创建                                     |                                        |      |
| 输入/动作                                                    | 期望的输出/相应                                      | 实际情况                               |      |
| "name": "刘晓栋",  "password": "123456",  "studentNumber": "2019305231045" | “注册成功”                                           | “注册成功”                             |      |
| "name": "胡一鸣",  "password": "123456",  "studentNumber": "2019305232130" | “注册成功”                                           | “注册成功”                             |      |
| "name": "周熙宇",  "password": "123456",  "studentNumber": "2019301230131" | “注册成功”                                           | “注册成功”                             |      |
|                                                              |                                                      |                                        |      |
| 功能B描述                                                    | 有的学生不想要使用本系统，于是进行注销账号           |                                        |      |
| 用例目的                                                     | 在学生表中删除某一条目                               |                                        |      |
| 前提条件                                                     | 学生表已经被创建并且此学号已经有对应条目             |                                        |      |
| 输入/动作                                                    | 期望的输出/相应                                      | 实际情况                               |      |
| "password": "123456",  "studentNumber": "2019305231045"      | “注销刘晓栋的账号成功”                               | “注销刘晓栋的账号成功”                 |      |
| "password": "123456",  "studentNumber": "2019305232130"      | “注销胡一鸣的账号成功”                               | “注销胡一鸣的账号成功”                 |      |
| "password": "123456",  "studentNumber": "2019301230131"      | “注销周熙宇的账号成功”                               | “注销周熙宇的账号成功”                 |      |
|                                                              |                                                      |                                        |      |
| 功能C描述                                                    | 学生使用本系统前需要先进行登录                       |                                        |      |
| 用例目的                                                     | 使用学生的学号和密码进行登录，返回登录是否成功等信息 |                                        |      |
| 前提条件                                                     | 在对应的学生表student中有此条目                      |                                        |      |
| 输入/动作                                                    | 期望的输出/相应                                      | 实际情况                               |      |
| "password": "123456",  "studentNumber": "2019305231045"      | “刘晓栋登录成功”                                     | “刘晓栋登录成功”                       |      |
| "password": "129999",  "studentNumber": "2019305231045"      | “账号与密码不匹配，登陆失败”                         | “账号与密码不匹配，登陆失败”           |      |
| "password": "123456",  "studentNumber": "2019305232130"      | “胡一鸣登录成功”                                     | “胡一鸣登录成功”                       |      |
| "password": "123456",  "studentNumber": "2019301230131"      | “周熙宇登录成功”                                     | “周熙宇登录成功”                       |      |
|                                                              |                                                      |                                        |      |
| 功能D描述                                                    | 老师登录                                             |                                        |      |
| 用例目的                                                     | 使用老师的工号和密码进行登录，返回登录是否成功等信息 |                                        |      |
| 前提条件                                                     | 在对应的老师teacher表中有此条目                      |                                        |      |
| 输入/动作                                                    | 期望的输出/相应                                      | 实际情况                               |      |
| "password": "123456",  "teacherNumber": "2019001"            | “马老师登录成功”                                     | “马老师登录成功”                       |      |
| "password": "129999",  "teacherNumber": "2019001"            | “账号与密码不匹配，登陆失败”                         | “账号与密码不匹配，登陆失败”           |      |
| "password": "123456",  "teacherNumber": "2019002"            | “朱老师登录成功”                                     | “朱老师登录成功”                       |      |
| "password": "123456",  "teacherNumber": "20193003"           | “王老师登录成功”                                     | “王老师登录成功”                       |      |
|                                                              |                                                      |                                        |      |
| 功能E描述                                                    | 老师新建作业                                         |                                        |      |
| 用例目的                                                     | 老师登录后，发布作业的第一步就是需要先新建作业       |                                        |      |
| 前提条件                                                     | 提供所在的课头号                                     |                                        |      |
| 输入/动作                                                    | 期望的输出/相应                                      | 实际情况                               |      |
| {  "isPublish": 0,  "issueList": [    {      "content": "画出用例图顺序图",      "goal": 100,      "index": 0,      "rightAnswer": "无",      "type": 0    }  ],  "slaveId": 1,  "title": "电梯控制系统" } | “创建作业成功”                                       | “创建作业成功”                         |      |
|                                                              |                                                      |                                        |      |
| 功能F描述                                                    | 老师发布作业                                         |                                        |      |
| 用例目的                                                     | 修改已经存在的作业的信息，使其变为发布状态           |                                        |      |
| 前提条件                                                     | 提供所在的课头号                                     |                                        |      |
| 输入/动作                                                    | 期望的输出/相应                                      | 实际情况                               |      |
| { "id":999  "isPublish": 1, }                                | “作业999已经发布成功”                                | “作业999已经发布成功”                  |      |
| { "id":1000  "isPublish": 1, }                               | “作业1000不存在”                                     | “作业1000不存在”                       |      |
|                                                              |                                                      |                                        |      |
| 功能G描述                                                    | 老师创建题目                                         |                                        |      |
| 用例目的                                                     | 在某个作业中，新建一个issue题目                      |                                        |      |
| 前提条件                                                     | 作业号需要存在                                       |                                        |      |
| 输入/动作                                                    | 期望的输出/相应                                      | 实际情况                               |      |
| {  "assignmentId": 1,  "content": "请回答软件危机的改建",  "goal": 50,  "rightAnswer": "略",  "type": 0 } | “作业1中已经添加题目”                                | “作业1中已经添加题目”                  |      |
| {  "assignmentId": 2,  "content": "请回答软件危机的意义,  "goal": 50,  "rightAnswer": "略",  "type": 0 } | “作业2中已经添加题目”                                | “作业2中已经添加题目”                  |      |
|                                                              |                                                      |                                        |      |
| 功能H描述                                                    | 学生对某个作业中的题目暂存回答                       |                                        |      |
| 用例目的                                                     | 创建Record表，用于记录信息                           |                                        |      |
| 前提条件                                                     | 题目好需要存在                                       |                                        |      |
| 输入/动作                                                    | 期望的输出/相应                                      | 实际情况                               |      |
| {  "content": "999我对软件危机的认识",  "issueId": 3,  "studentId": 3 } | “学生3对问题3的解答已经暂存”                         | “学生3对问题3的解答已经暂存”           |      |
| {  "content": "999我对软件危机的认识",  "issueId": 4,  "studentId": 3 } | “学生3对问题4的解答已经暂存”                         | “学生3对问题4的解答已经暂存”           |      |
|                                                              |                                                      |                                        |      |
| 功能I描述                                                    | 老师对学生的解答进行批改                             |                                        |      |
| 用例目的                                                     | 在IssueRecord表中，记录数据等等                      |                                        |      |
| 前提条件                                                     | 题目号和问题号都需要存在数据表中                     |                                        |      |
| 输入/动作                                                    | 期望的输出/相应                                      | 实际情况                               |      |
| {  "content": "999我对软件危机的认识",  "issueId": 3,  "studentId": 3  “score” ：70 } | “学生3对问题3的解答已经批改，得分70分”               | “学生3对问题3的解答已经批改，得分70分” |      |
| {  "issueId": 4,  "studentId": 3 "score":80 }                | “学生3对问题4的解答已经批改,得分80分”                | “学生3对问题4的解答已经批改，得分80分” |      |

## 健壮性测试用例

例如容错能力/恢复能力测试用例

| 异常输入/动作         | 容错能力/恢复能力 | 造成的危害、损失 |
| --------------------- | ----------------- | ---------------- |
| 示例：错误的数据类型… | 正常报错          | 无               |
| 示例：定义域外的值…   | 正常进行报错      | 无               |
| 示例：错误的操作顺序… | 可以接受          | 无               |

## 性能测试用例

| 性能A描述                             | 打开主界面                                                 |                    |      |
| ------------------------------------- | ---------------------------------------------------------- | ------------------ | ---- |
| 用例目的                              | 打开主界面，用于用户输入登录信息                           |                    |      |
| 前提条件                              | 无                                                         |                    |      |
| 输入数据                              | 期望的性能（平均值）                                       | 实际性能（平均值） |      |
| 启动程序，进入登陆页面                | 2s                                                         | 3s                 |      |
| 性能B描述                             | 用户输入密码后，点击登录按钮                               |                    |      |
| 用例目的                              | 用于用户登录                                               |                    |      |
| 前提条件                              | 已经输入了账号和密码                                       |                    |      |
| 输入数据                              | 期望的性能（平均值）                                       | 实际性能（平均值） |      |
| Id: 2019305231045                     | 密码：123456                                               | 1s                 | 1s   |
| Id: 2019305231045                     | 密码：1111111                                              | 1s                 | 1s   |
|                                       |                                                            |                    |      |
| 性能B描述                             | 用户输入密码后，点击登录按钮                               |                    |      |
| 用例目的                              | 用于用户登录                                               |                    |      |
| 前提条件                              | 已经输入了账号和密码                                       |                    |      |
| 输入数据                              | 期望的性能（平均值）                                       | 实际性能（平均值） |      |
| Id: 2019305231045                     | 密码：123456                                               | 1s                 | 1s   |
| Id: 2019305231045                     | 密码：1111111                                              | 1s                 | 1s   |
|                                       |                                                            |                    |      |
| 性能C描述                             | 以学生身份登陆后，选择课头                                 |                    |      |
| 用例目的                              | 学生选择课头                                               |                    |      |
| 前提条件                              | 已经输入了账号和密码                                       |                    |      |
| 输入数据                              | 期望的性能（平均值）                                       | 实际性能（平均值） |      |
| 选择软件工程课                        | 1.5s                                                       | 1s                 |      |
| 选择编译原理课头                      | 1.5s                                                       | 1s                 |      |
|                                       |                                                            |                    |      |
| 性能D描述                             | 进入某个课头后，选择左侧的某个作业                         |                    |      |
| 用例目的                              | 用于学生查看作业和暂存作业解答                             |                    |      |
| 前提条件                              | 进入作业选择页面                                           |                    |      |
| 输入数据                              | 期望的性能（平均值）                                       | 实际性能（平均值） |      |
| 作业号：1 学生号：1                   | 1s                                                         | 1s                 |      |
| 作业号：1 学生号：2                   | 1s                                                         | 1s                 |      |
|                                       |                                                            |                    |      |
| 性能E描述                             | 在解答输入框中编辑后，点击暂存按钮，将解答暂存             |                    |      |
| 用例目的                              | 用于用户登录                                               |                    |      |
| 前提条件                              | 已经输入了账号和密码                                       |                    |      |
| 输入数据                              | 期望的性能（平均值）                                       | 实际性能（平均值） |      |
| Id: 2019305231045                     | 密码：123456                                               | 1s                 | 1s   |
| Id: 2019305231045                     | 密码：1111111                                              | 1s                 | 1s   |
|                                       |                                                            |                    |      |
| 性能F描述                             | 老师选择课头号进入                                         |                    |      |
| 用例目的                              | 一个老师担任多个课头的教学时，需要进行选择                 |                    |      |
| 前提条件                              | 老师已经完成登陆                                           |                    |      |
| 输入数据                              | 期望的性能（平均值）                                       | 实际性能（平均值） |      |
|                                       |                                                            | 1s                 | 1s   |
|                                       |                                                            | 1s                 | 1s   |
|                                       |                                                            |                    |      |
| 性能G描述                             | 老师选择题目解答，进行查看，查看某个学生某次作业的解答情况 |                    |      |
| 用例目的                              | 老师进行学习                                               |                    |      |
| 前提条件                              | 老师已经完成登陆                                           |                    |      |
| 输入数据                              | 期望的性能（平均值）                                       | 实际性能（平均值） |      |
| AssignmentId：1 student：1            | 1s                                                         | 1s                 |      |
| AssignmentId：2 student：2            | 1s                                                         | 1s                 |      |
|                                       |                                                            |                    |      |
| 性能H描述                             | 老师查看了某个学生某次作业的解答情况后，进行评分           |                    |      |
| 用例目的                              | 用于老师对作业进行给分                                     |                    |      |
| 前提条件                              | 老师已经查看了                                             |                    |      |
| 输入数据                              | 期望的性能（平均值）                                       | 实际性能（平均值） |      |
| AssignmentId：1 student：1 score：90  | 1s                                                         | 1s                 |      |
| AssignmentId：1 student：2  score：80 | 1s                                                         | 1s                 |      |

## 用户界面测试用例

### 登录页面

| 登录页面检查项                                         | 测试人员的类别及其评价 |
| ------------------------------------------------------ | ---------------------- |
| 窗口切换、移动、改变大小时正常吗？                     | 正常                   |
| 各种界面元素的文字正确吗？（如标题、提示等）           | 正确                   |
| 各种界面元素的状态正确吗？（如有效、无效、选中等状态） | 有效                   |
| 各种界面元素支持键盘操作吗？                           | 输入框支持键盘操作     |
| 各种界面元素支持鼠标操作吗？                           | 支持                   |
| 对话框中的缺省焦点正确吗？                             | 正确                   |
| 数据项能正确回显吗？                                   | 可以                   |
| 对于常用的功能，用户能否不必阅读手册就能使用？         | 是                     |
| 执行有风险的操作时，有“确认”、“放弃”等提示吗？         | 无                     |
| 操作顺序合理吗？                                       | 操作顺序               |
| 有联机帮助吗？                                         | 无                     |
| 各种界面元素的布局合理吗？美观吗？                     | 合理，美观             |
| 各种界面元素的颜色协调吗？                             | 协调                   |
| 各种界面元素的形状美观吗？                             | 美观                   |
| 字体美观吗？                                           | 美观                   |
| 图标直观吗？                                           | 直观                   |

### 老师作业页面

| 登录页面检查项                                         | 测试人员的类别及其评价 |
| ------------------------------------------------------ | ---------------------- |
| 窗口切换、移动、改变大小时正常吗？                     | 正常                   |
| 各种界面元素的文字正确吗？（如标题、提示等）           | 正确                   |
| 各种界面元素的状态正确吗？（如有效、无效、选中等状态） | 有效                   |
| 各种界面元素支持键盘操作吗？                           | 输入框支持键盘操作     |
| 各种界面元素支持鼠标操作吗？                           | 支持                   |
| 对话框中的缺省焦点正确吗？                             | 正确                   |
| 数据项能正确回显吗？                                   | 可以                   |
| 对于常用的功能，用户能否不必阅读手册就能使用？         | 是                     |
| 执行有风险的操作时，有“确认”、“放弃”等提示吗？         | 无                     |
| 操作顺序合理吗？                                       | 操作顺序               |
| 有联机帮助吗？                                         | 无                     |
| 各种界面元素的布局合理吗？美观吗？                     | 合理，美观             |
| 各种界面元素的颜色协调吗？                             | 协调                   |
| 各种界面元素的形状美观吗？                             | 美观                   |
| 字体美观吗？                                           | 美观                   |
| 图标直观吗？                                           | 直观                   |

### 学生作业页面

| 页面检查项                                             | 测试人员的类别及其评价 |
| ------------------------------------------------------ | ---------------------- |
| 窗口切换、移动、改变大小时正常吗？                     | 正常                   |
| 各种界面元素的文字正确吗？（如标题、提示等）           | 正确                   |
| 各种界面元素的状态正确吗？（如有效、无效、选中等状态） | 有效                   |
| 各种界面元素支持键盘操作吗？                           | 输入框支持键盘操作     |
| 各种界面元素支持鼠标操作吗？                           | 支持                   |
| 对话框中的缺省焦点正确吗？                             | 正确                   |
| 数据项能正确回显吗？                                   | 可以                   |
| 操作顺序合理吗？                                       | 操作顺序               |
| 各种界面元素的布局合理吗？美观吗？                     | 合理，美观             |
| 各种界面元素的颜色协调吗？                             | 协调                   |
| 各种界面元素的形状美观吗？                             | 美观                   |
| 字体美观吗？                                           | 美观                   |
| 图标直观吗？                                           | 直观                   |

## 压力测试用例

| 极限名称A           | 最大并发用户数量                       |                |      |
| ------------------- | ---------------------------------------- | -------------- | ---- |
| 前提条件            | 不同的用户登录不同的学生账号或老师账号   |                |      |
| 输入/动作           | 输出/响应                                | 是否能正常运行 |      |
| *2**个用户并发操作* | 正常响应                                 | 是             |      |
| *5**个用户并发操作* | 正常响应                                 | 是             |      |
| *10个用户并发操作*  | 正常响应                                 | 是             |      |
| 极限名称B           | 可以布置的最大作业数量                   |                |      |
| 前提条件            |                                          |                |      |
| 输入/动作           | 输出/响应                                |                |      |
| 10个作业            | 正常                                     | 是             |      |
| 50个作业            | 正常                                     | 是             |      |
| 100个作业           | 正常                                     | 是             |      |
|                     |                                          |                |      |
| 极限名称B           | 单词作业中的最大题目数量                 |                |      |
| 前提条件            | 老师已经创建了某个作业，在作业中新建题目 |                |      |
| 输入/动作           | 输出/响应                                | 是否能正常运行 |      |
| 5个题目             | 正常                                     | 是             |      |
| 10个题目            | 正常                                     | 是             |      |
| 30个题目            | 正常                                     | 是             |      |
