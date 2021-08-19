export let videoData = [
    {
      title: "一、C语言概述",
      show: false, //是否展示详细内容
      rate: 0, //进度
      work:
        "理解编程语言的特点;初步掌握在计算机上运行程序的方法；理解算法的概念和特性；能够用N-S流程图来表示算法。",
      detail: [
        {
          id: -1,
          title: "C语言概述",
          rate: 0, //观看进度
          video: "",
          videoId: 0,
          total: 0, //总时长
          ifFinished: false,
        },
      ],
    },
    {
      title: "二、基本数据类型",
      show: false, //是否展示详细内容
      rate: 0, //进度
      work:
        "在掌握基本数据类型的表示方法、运算符和表达式概念的基础上，能够进行简单的程序编写。",
      detail: [
        {
          title: "字符型数据",
          video: "http://qgailab.com/course/resources/video/3-2-4.mp4",
          videoId: 1,
          total: 1041, //总时长
          ifFinished: false, //是否看完
        },
        {
          title: "浮点型数据",
          video: "http://qgailab.com/course/resources/video/3-2-5.mp4",
          videoId: 2,
          total: 533, //总时长
          ifFinished: false,
        },
        {
          title: "怎么确定常量的类型",
          video: "http://qgailab.com/course/resources/video/3-2-6.mp4",
          videoId: 3,
          total: 282, //总时长
          ifFinished: false,
        },
        {
          title: "运算符和表达式（上）",
          video: "http://qgailab.com/course/resources/video/3-2-7-1.mp4",
          videoId: 4,
          total: 961, //总时长
          ifFinished: false,
        },
        {
          title: "运算符和表达式（下）",
          video: "http://qgailab.com/course/resources/video/3-2-7-2.mp4",
          videoId: 5,
          total: 2374, //总时长
          ifFinished: false,
        },
      ],
    },
    {
      title: "三、顺序结构",
      show: false, //是否展示详细内容
      rate: 0, //进度
      work:
        "理解基本的语句，如控制语句、赋值语句等；能够结合输入输出语句设计编写简单的程序。",
      detail: [
        {
          title: "C语句的作用和分类",
          video: "http://qgailab.com/course/resources/video/3-3-1.mp4",
          videoId: 6,
          total: 722, //总时长
          ifFinished: false,
        },
        {
          title: "最基本的语句-赋值语句",
          video: "http://qgailab.com/course/resources/video/3-3-2.mp4",
          videoId: 7,
          total: 1864, //总时长
          ifFinished: false,
        },
        {
          title: "数据输入输出举例以及有关概念",
          video: "http://qgailab.com/course/resources/video/3-4-2.mp4",
          videoId: 8,
          total: 373, //总时长
          ifFinished: false,
        },
        {
          title: "用printf函数输出数据",
          video: "http://qgailab.com/course/resources/video/3-4-3.mp4",
          videoId: 9,
          total: 1300, //总时长
          ifFinished: false,
        },
        {
          title: "用scanf函数输入数据",
          video: "http://qgailab.com/course/resources/video/3-4-4.mp4",
          videoId: 10,
          total: 1423, //总时长
          ifFinished: false,
        },
        {
          title: "字符串数据的输入与输出",
          video: "http://qgailab.com/course/resources/video/3-4-5.mp4",
          videoId: 11,
          total: 410, //总时长
          ifFinished: false,
        },
      ],
    },
    {
      title: "四、选择结构",
      show: false, //是否展示详细内容
      rate: 0, //进度
      work:
        "在了解关系运算符和关系表达式，逻辑运算符和逻辑表达式的基础上，能够编写具有选择结构的程序。",
      detail: [
        {
          title: "用if语句实现选择结构举例",
          video: "http://qgailab.com/course/resources/video/4-2-1.mp4",
          videoId: 12,
          total: 874, //总时长
          ifFinished: false,
        },
        {
          title: "if语句的一般形式",
          video: "http://qgailab.com/course/resources/video/4-2-2.mp4",
          videoId: 13,
          total: 878, //总时长
          ifFinished: false,
        },
        {
          title: "关系运算符和关系表达式",
          video: "http://qgailab.com/course/resources/video/4-3.mp4",
          videoId: 14,
          total: 312, //总时长
          ifFinished: false,
        },
        {
          title: "逻辑运算符及其优先次序",
          video: "http://qgailab.com/course/resources/video/4-4-1.mp4",
          videoId: 15,
          total: 456, //总时长
          ifFinished: false,
        },
        {
          title: "逻辑表达式",
          video: "http://qgailab.com/course/resources/video/4-4-2.mp4",
          videoId: 16,
          total: 202, //总时长
          ifFinished: false,
        },
        {
          title: "条件运算符和条件表达式",
          video: "http://qgailab.com/course/resources/video/4-5.mp4",
          videoId: 17,
          total: 398, //总时长
          ifFinished: false,
        },
        {
          title: "选择结构的嵌套",
          video: "http://qgailab.com/course/resources/video/4-6.mp4",
          videoId: 18,
          total: 241, //总时长
          ifFinished: false,
        },
        {
          title: "用switch语句实现多分支选择结构",
          video: "http://qgailab.com/course/resources/video/4-7.mp4",
          videoId: 19,
          total: 820, //总时长
          ifFinished: false,
        },
        {
          title: "选择结构程序综合举例",
          video: "http://qgailab.com/course/resources/video/4-8.mp4",
          videoId: 20,
          total: 727, //总时长
          ifFinished: false,
        },
      ],
    },
    {
      title: "五、循环结构",
      show: false, //是否展示详细内容
      rate: 0, //进度
      work:
        "能够区别多种循环，具备实现循环的能力，编写具有循环嵌套的程序。",
      detail: [
        {
          title: "为什么需要循环控制",
          video: "http://qgailab.com/course/resources/video/5-1.mp4",
          videoId: 21,
          total: 512, //总时长
          ifFinished: false,
        },
        {
          title: "用while语句实现循环",
          video: "http://qgailab.com/course/resources/video/5-2.mp4",
          videoId: 22,
          total: 446, //总时长
          ifFinished: false,
        },
        {
          title: "用do-while语句实现循环",
          video: "http://qgailab.com/course/resources/video/5-3.mp4",
          videoId: 23,
          total: 527, //总时长
          ifFinished: false,
        },
        {
          title: "用for语句实现循环",
          video: "http://qgailab.com/course/resources/video/5-4.mp4",
          videoId: 24,
          total: 1332, //总时长
          ifFinished: false,
        },
        {
          title: "循环的嵌套和比较",
          video: "http://qgailab.com/course/resources/video/5-5+5-6.mp4",
          videoId: 25,
          total: 190, //总时长
          ifFinished: false,
        },
        {
          title: "用break语句提前终止循环",
          video: "http://qgailab.com/course/resources/video/5-7-1.mp4",
          videoId: 26,
          total: 534, //总时长
          ifFinished: false,
        },
        {
          title: "用continue语句提前结束本次循环",
          video: "http://qgailab.com/course/resources/video/5-7-2.mp4",
          videoId: 27,
          total: 383, //总时长
          ifFinished: false,
        },
        {
          title: "break和continue语句的区别",
          video: "http://qgailab.com/course/resources/video/5-7-3.mp4",
          videoId: 28,
          total: 86, //总时长
          ifFinished: false,
        },
      ],
    },
    {
      title: "六、利用数组处理数据",
      show: false, //是否展示详细内容
      rate: 0, //进度
      work:
        "能够定义和引用一维数组、二维数组和字符数组；能够利用数组来设计相关程序。",
      detail: [
        {
          title: "一维数组",
          video: "http://qgailab.com/course/resources/video/6-1.mp4",
          videoId: 29,
          total: 1928, //总时长
          ifFinished: false,
        },
        {
          title: "二维数组及多维数组",
          video: "http://qgailab.com/course/resources/video/6-2.mp4",
          videoId: 30,
          total: 1150, //总时长
          ifFinished: false,
        },
        {
          title: "冒泡排序法",
          video: "http://qgailab.com/course/resources/video/6-2-2.mp4",
          videoId: 31,
          total: 1671, //总时长
          ifFinished: false,
        },
        {
          title: "字符数组和字符串",
          video: "http://qgailab.com/course/resources/video/6-3.mp4",
          videoId: 32,
          total: 1487, //总时长
          ifFinished: false,
        },
        {
          title: "应用举例",
          video: "http://qgailab.com/course/resources/video/6-5.mp4",
          videoId: 33,
          total: 1487, //总时长
          ifFinished: false,
        },
      ],
    },
    {
      title: "七、函数实现模块化",
      show: false, //是否展示详细内容
      rate: 0, //进度
      work:
        "掌握函数的定义和调用方法、变量的作用域和存储方式等概念；理解函数调用时参数传递的过程；能够区分值传递方式和地址传递；能够用函数实现模块化的程序设计。",
      detail: [
        {
          title: "概述",
          video: "http://qgailab.com/course/resources/video/7-1.mp4",
          videoId: 34,
          total: 805, //总时长
          ifFinished: false,
        },
        {
          title: "函数的定义",
          video: "http://qgailab.com/course/resources/video/7-2.mp4",
          videoId: 35,
          total: 653, //总时长
          ifFinished: false,
        },
        {
          title: "函数的调用",
          video: "http://qgailab.com/course/resources/video/7-3.mp4",
          videoId: 36,
          total: 1214, //总时长
          ifFinished: false,
        },
        {
          title: "函数声明",
          video: "http://qgailab.com/course/resources/video/7-4.mp4",
          videoId: 37,
          total: 976, //总时长
          ifFinished: false,
        },
        {
          title: "函数参数及传递方式",
          video: "http://qgailab.com/course/resources/video/7-5.mp4",
          videoId: 38,
          total: 1658, //总时长
          ifFinished: false,
        },
        {
          title: "递归调用",
          video: "http://qgailab.com/course/resources/video/7-6.mp4",
          videoId: 39,
          total: 807, //总时长
          ifFinished: false,
        },
        {
          title: "数组作为函数参数",
          video: "http://qgailab.com/course/resources/video/7-7.mp4",
          videoId: 40,
          total: 2165, //总时长
          ifFinished: false,
        },
        {
          title: "局部变量和全局变量",
          video: "http://qgailab.com/course/resources/video/7-8.mp4",
          videoId: 41,
          total: 1442, //总时长
          ifFinished: false,
        },
        {
          title: "变量的存储方式和生存期",
          video: "http://qgailab.com/course/resources/video/7-9.mp4",
          videoId: 42,
          total: 1736, //总时长
          ifFinished: false,
        },
        {
          title: "内部函数和外部函数",
          video: "http://qgailab.com/course/resources/video/7-11.mp4",
          videoId: 43,
          total: 97, //总时长
          ifFinished: false,
        },
      ],
    },
    {
      title: "八、指针的运用",
      show: false, //是否展示详细内容
      rate: 0, //进度
      work:
        "能够理解和使用指针变量；能够设计通过指针引用数组和字符串以及指向函数的指针的程序。",
      detail: [
        {
          title: "怎样定义指针变量",
          video: "http://qgailab.com/course/resources/video/8-2-2.mp4",
          videoId: 44,
          total: 629, //总时长
          ifFinished: false,
        },
        {
          title: "怎样引用指针变量",
          video: "http://qgailab.com/course/resources/video/8-2-3.mp4",
          videoId: 45,
          total: 276, //总时长
          ifFinished: false,
        },
        {
          title: "指针变量作为函数参数",
          video: "http://qgailab.com/course/resources/video/8-2-4.mp4",
          videoId: 46,
          total: 863, //总时长
          ifFinished: false,
        },
        {
          title: "在引用数组元素时指针的运算",
          video: "http://qgailab.com/course/resources/video/8-3-2.mp4",
          videoId: 47,
          total: 660, //总时长
          ifFinished: false,
        },
        {
          title: "用数组名作函数参数",
          video: "http://qgailab.com/course/resources/video/8-3-4.mp4",
          videoId: 48,
          total: 1730, //总时长
          ifFinished: false,
        },
        {
          title: "通过指针引用多维数组",
          video: "http://qgailab.com/course/resources/video/8-3-5.mp4",
          videoId: 49,
          total: 1854, //总时长
          ifFinished: false,
        },
        {
          title: "字符串的引用方式",
          video: "http://qgailab.com/course/resources/video/8-4-1.mp4",
          videoId: 50,
          total: 542, //总时长
          ifFinished: false,
        },
        {
          title: "字符指针作函数参数",
          video: "http://qgailab.com/course/resources/video/8-4-2.mp4",
          videoId: 51,
          total: 665, //总时长
          ifFinished: false,
        },
        {
          title: "使用字符指针变量和字符数组的比较",
          video: "http://qgailab.com/course/resources/video/8-4-3.mp4",
          videoId: 52,
          total: 931, //总时长
          ifFinished: false,
        },
        {
          title: "指向指针数据的指针",
          video: "http://qgailab.com/course/resources/video/8-7-2.mp4",
          videoId: 53,
          total: 319, //总时长
          ifFinished: false,
        },
        {
          title: "指针数组作main函数的形参",
          video: "http://qgailab.com/course/resources/video/8-7-3.mp4",
          videoId: 54,
          total: 256, //总时长
          ifFinished: false,
        },
        {
          title: "什么是内存的动态分配",
          video: "http://qgailab.com/course/resources/video/8-8-1.mp4",
          videoId: 55,
          total: 295, //总时长
          ifFinished: false,
        },
        {
          title: "怎样建立内存的动态分配",
          video: "http://qgailab.com/course/resources/video/8-8-2.mp4",
          videoId: 56,
          total: 688, //总时长
          ifFinished: false,
        },
        {
          title: "void指针类型",
          video: "http://qgailab.com/course/resources/video/8-8-3.mp4",
          videoId: 57,
          total: 505, //总时长
          ifFinished: false,
        },
      ],
    },
    {
      title: "九、自定义数据类型",
      show: false, //是否展示详细内容
      rate: 0, //进度
      work:
        "能够定义和使用结构体类型变量；能够定义和使用结构体数组；初步掌握用指针处理链表的方法；了解共用体和枚举类型的概念。",
      detail: [
        {
          title: "自己建立结构体类型",
          video: "http://qgailab.com/course/resources/video/9-1-1.mp4",
          videoId: 58,
          total: 664, //总时长
          ifFinished: false,
        },
        {
          title: "定义结构体类型变量",
          video: "http://qgailab.com/course/resources/video/9-1-2.mp4",
          videoId: 59,
          total: 325, //总时长
          ifFinished: false,
        },
        {
          title: "结构体变量的初始化和引用",
          video: "http://qgailab.com/course/resources/video/9-1-3.mp4",
          videoId: 60,
          total: 886, //总时长
          ifFinished: false,
        },
        // {
        //   title: "定义结构体数组",
        //   video: "http://qgailab.com/course/resources/video/9-2-1.mp4",
        //   videoId: 61,
        //   total: 0,//总时长
        //   ifFinished: false,
        // },
        {
          title: "结构体数组的应用举例",
          video: "http://qgailab.com/course/resources/video/9-2-2.mp4",
          videoId: 61,
          total: 820, //总时长
          ifFinished: false,
        },
        {
          title: "结构体指针",
          video: "http://qgailab.com/course/resources/video/9-3-1.mp4",
          videoId: 62,
          total: 478, //总时长
          ifFinished: false,
        },
        {
          title: "指向结构体数组的指针",
          video: "http://qgailab.com/course/resources/video/9-3-2.mp4",
          videoId: 63,
          total: 229, //总时长
          ifFinished: false,
        },
        // {
        //   title: "用结构体变量和结构体变量的指针作函数参数",
        //   video: "http://qgailab.com/course/resources/video/9-3-3.mp4",
        //   videoId: 65,
        //   total: 0,//总时长
        //   ifFinished: false,
        // },
        {
          title: "什么是链表",
          video: "http://qgailab.com/course/resources/video/9-4-1.mp4",
          videoId: 64,
          total: 871, //总时长
          ifFinished: false,
        },
        {
          title: "建立简单的静态链表",
          video: "http://qgailab.com/course/resources/video/9-4-2.mp4",
          videoId: 65,
          total: 364, //总时长
          ifFinished: false,
        },
        // {
        //   title: "建立动态链表",
        //   video: "http://qgailab.com/course/resources/video/9-4-3.mp4",
        //   videoId: 68,
        //   total: 0,//总时长
        //   ifFinished: false,
        // },
      ],
    },
  ]