export let videoData = [
  {
    title: '绪论',
    show: false, //是否展示详细内容
    rate: 0, //进度
    work:
      '',
    file: 'http://qgailab.com/cloud/course/static/pdf/0.1_1.pdf', //课件地址
    detail:[
      {
        title: "C语言的历史",
        video: "http://qgailab.com/cloud/course/resources/video/0.1_1.mp4",
        videoId: 125,
        total: 672, //总时长
        rate: 0, //观看进度
        content: 'C语言是一门通用的，模块化，程序化的编程语言，被广泛应用于操作系统和应用软件的开发。由于其高效和可移植性，适应于不同硬件和软件平台，深受开发员的青睐。',
        ifFinished: false, //是否看完
      },
      {
        title: "计算机程序工作过程",
        video: "http://qgailab.com/cloud/course/resources/video/0.2_1.mp4",
        videoId: 126,
        total: 448, //总时长
        rate: 0, //观看进度
        content: '为使计算机按预定要求工作，首先要编制程序。程序是一个特定的指令序列，它告诉计算机要做哪些事，按什么步骤去做。指令是一组二进制信息的代码，用来表示计算机所能完成的基本操作。',
        ifFinished: false, //是否看完
      },
      {
        title: "程序设计基础平台使用教程",
        video: "http://qgailab.com/cloud/course/resources/video/open_use.mp4",
        videoId: -1,
        total: 149, //总时长
        rate: 0, //观看进度
        content: '本节介绍的是本平台的使用教程，为了让同学们更好的使用这个平台来进行学习C语言，特设置了此小节，让同学们更加熟悉这个平台的操作。',
        ifFinished: false, //是否看完
      },
      {
        title: "程序设计掌上移动自主学习平台（AnyWork网页版）使用教程",
        video: "http://qgailab.com/cloud/course/resources/video/anywork学生端.mp4",
        videoId: -1,
        total: 204, //总时长
        rate: 0, //观看进度
        content: '本节介绍的是在线测试平台的使用教程，为了让同学们更好的使用这个平台来进行学习C语言，特设置了此小节，让同学们更加熟悉这个平台的操作。',
        ifFinished: false, //是否看完
      },
      {
        title: "程序设计掌上移动自主学习平台（AnyWork移动版）使用教程",
        video: "http://qgailab.com/cloud/course/resources/video/anywork_app.mp4",
        videoId: -1,
        total: 233, //总时长
        rate: 0, //观看进度
        content: '本节介绍的是测试平台app的使用教程，为了让同学们更好的使用这个平台来进行学习C语言，特设置了此小节，让同学们更加熟悉这个平台的操作。',
        ifFinished: false, //是否看完
      },
      {
        title: "远程在线程序设计实验系统（AnyViewC）使用教程",
        video: "http://qgailab.com/cloud/course/resources/video/anyview_C.mp4",
        videoId: -1,
        total: 305, //总时长
        rate: 0, //观看进度
        content: '本节介绍的是anyview_C的使用教程，为了让同学们更好的使用这个平台来进行学习C语言，特设置了此小节，让同学们更加熟悉这个平台的操作。',
        ifFinished: false, //是否看完
      },
    ],
  },
  {
    title: "一、算法",
    show: false, //是否展示详细内容
    rate: 0, //进度
    work:
      // "http://qgailab.com/cloud/course/static/pdf/1.1_1.pptx",
      '',
    file: 'http://qgailab.com/cloud/course/static/pdf/1.1_1.pdf', //课件地址
    detail: [
      {
        title: "算法",
        video: "http://qgailab.com/cloud/course/resources/video/1.1_1.mp4",
        videoId: 101,
        total: 769, //总时长
        rate: 0, //观看进度
        content: '算法（Algorithm）是指解题方案的准确而完整的描述，是一系列解决问题的清晰指令，算法代表着用系统的方法描述解决问题的策略机制。',
        ifFinished: false, //是否看完
      },
      {
        title: "算法特性",
        video: "http://qgailab.com/cloud/course/resources/video/1.2_1.mp4",
        rate: 0, //观看进度
        videoId: 102,
        total: 269, //总时长
        content: '算法的五个基本特性分别是：输入、输出、有穷性、确定性和可行性。算法的这些特性是一个程序算法所必须要有的性质。在编写算法的时候要注意这些特性，只有满足了这些特性，才能说是一个合格的算法。',
        ifFinished: false,
      },
      {
        title: "传统流程图表示算法",
        video: "http://qgailab.com/cloud/course/resources/video/1.3_1.mp4",
        videoId: 103,
        rate: 0, //观看进度
        total: 415, //总时长
        content: '一般使用顺序结构、选择结构、循环结构三种基本结构来表示流程图。通过使用流程图表示算法，可以变得直观形象，易于理解。',
        ifFinished: false,
      },
      {
        title: "三种基本结构",
        video: "http://qgailab.com/cloud/course/resources/video/1.4_1.mp4",
        videoId: 104,
        rate: 0, //观看进度
        total: 668, //总时长
        content: '算法重在用一个统一的方法有步骤地解决一类问题，但它不是唯一的，一个好的算法应该用较少的便于实现的步骤去有效的解决问题。一般算法有顺序结构、条件分支结构、循环结构三种基本逻辑结构。',
        ifFinished: false,
      },
      {
        title: "用计算机语言表示算法",
        video: "http://qgailab.com/cloud/course/resources/video/1.5_1.mp4",
        videoId: 105,
        total: 108, //总时长
        content: '我们用传统流程图，NS流程图，伪代码 表示了算法，但是这些计算机都不能识别。需要我们将这些表示思路的流程图具体编写为按照C语言语法编写的C语言代码。',
        ifFinished: false,
      },
      {
        title: "结构化程序设计方法",
        video: "http://qgailab.com/cloud/course/resources/video/1.6_1.mp4",
        videoId: 106,
        rate: 0, //观看进度
        total: 176, //总时长
        content: '结构化程序设计是进行以模块功能和处理过程设计为主的详细设计的基本原则。结构化程序设计是过程式程序设计的一个子集，它对写入的程序使用逻辑结构，使得理解和修改更有效更容易。',
        ifFinished: false,
      },
      {
        title: "程序设计构成",
        video: "http://qgailab.com/cloud/course/resources/video/1.7_1.mp4",
        videoId: 107,
        rate: 0, //观看进度
        total: 102, //总时长
        content: '程序设计是给出解决特定问题程序的过程，是软件构造活动中的重要组成部分。程序设计往往以某种程序设计语言为工具，给出这种语言下的程序。程序设计过程应当包括分析、设计、编码、测试、排错等不同阶段。',
        ifFinished: false,
      },
    ],
  },
  {
    title: "二、数据运算顺序结构",
    show: false, //是否展示详细内容
    rate: 0, //进度
    work:
      // "http://qgailab.com/cloud/course/static/pdf/3.1_1.pptx",
      '',
    file: 'http://qgailab.com/cloud/course/static/pdf/3.1_1.pdf',
    detail: [
      {
        //id:-1
        title: "常量",
        rate: 0, //观看进度
        video: "http://qgailab.com/cloud/course/resources/video/2.1_1.mp4",
        videoId: 108,
        total: 731, //总时长
        content: '常量是固定值，在程序执行期间不会改变。这些固定的值，又叫做字面量。常量可以是任何的基本数据类型，比如整数常量、浮点常量、字符常量，或字符串字面值，也有枚举常量。常量就像是常规的变量，只不过常量的值在定义后不能进行修改。',
        ifFinished: false,
      },
      {
        title: "变量",
        rate: 0, //观看进度
        video: "http://qgailab.com/cloud/course/resources/video/2.2_1.mp4",
        videoId: 109,
        total: 464, //总时长
        content: '变量来源于数学，是计算机语言中能储存计算结果或能表示值的抽象概念。变量可以通过变量名访问。在指令式语言中，变量通常是可变的；但在纯函数式语言（如Haskell）中，变量可能是不可变的。',
        ifFinished: false,
      },
      {
        title: "数据类型",
        rate: 0, //观看进度
        video: "http://qgailab.com/cloud/course/resources/video/2.3_1.mp4",
        videoId: 110,
        total: 132, //总时长
        content: '数据类型在数据结构中的定义是一个值的集合以及定义在这个值集上的一组操作。数据类型包括原始类型、多元组、记录单元、代数数据类型、抽象数据类型、参考类型以及函数类型。',
        ifFinished: false,
      },
      {
        title: "整型类型数据（1）",
        rate: 0, //观看进度
        video: "http://qgailab.com/cloud/course/resources/video/2.4_1.mp4",
        videoId: 111,
        total: 867, //总时长
        content: '程序中使用的各种变量都应预先加以说明，即先说明，后使用。对变量的说明可以包括三个方面：·数据类型·存储类型·作用域。所谓数据类型是按被说明量的性质，表示形式，占据存储空间的多少，构造特点来划分的。',
        ifFinished: false,
      },
      {
        title: "整型类型数据（2）",
        rate: 0, //观看进度
        video: "http://qgailab.com/cloud/course/resources/video/2.5_1.mp4",
        content: '在Ｃ语言中，数据类型可分为：基本数据类型、构造数据类型、指针类型、空类型。基本数据类型：其值不可以再分解为其他类型。构造数据类型：包括数组类型、结构体类型、共用体类型。',
        videoId: 112,
        total: 739, //总时长
        ifFinished: false,
      },
      {
        title: "运算符（1）",
        rate: 0, //观看进度
        video: "http://qgailab.com/cloud/course/resources/video/2.6_1.mp4",
        videoId: 113,
        content: '运算符是一种告诉编译器执行特定的数学或逻辑操作的符号,C 语言内置了丰富的运算符，运算符（operator）是可以对数据进行相应操作的符号。',
        total: 801, //总时长
        ifFinished: false,
      },
      {
        title: "运算符（2）",
        rate: 0, //观看进度
        video: "http://qgailab.com/cloud/course/resources/video/2.7_1.mp4",
        videoId: 114,
        content: 'C语言运算符号指的是运算符号。C语言中的符号分为10类：算术运算符、关系运算符、逻辑运算符、位操作运算符、赋值运算符、条件运算符、逗号运算符、指针运算符、求字节数运算符和特殊运算符。',
        total: 361, //总时长
        ifFinished: false,
      },
      {
        title: "表达式",
        rate: 0, //观看进度
        video: "http://qgailab.com/cloud/course/resources/video/2.8_1.mp4",
        videoId: 115,
        total: 693, //总时长
        content: '表达式是由一系列运算符（operators）和操作数（operands）组成的。这既是表达式的定义，同时也指明了表达式的组成成分。运算符指明了要进行何种运算和操作，而操作数则是运算符操作的对象。',
        ifFinished: false,
      },
      {
        title: "C语句（1）",
        rate: 0, //观看进度
        video: "http://qgailab.com/cloud/course/resources/video/2.9_1.mp4",
        videoId: 116,
        total: 606, //总时长
        content: 'C程序的执行部分是由语句组成的。 程序的功能也是由执行语句实现的。C语句可分为以下五类：表达式语句、标签语句、循环语句、复合语句、跳转语句、选择语句',
        ifFinished: false,
      },
      {
        title: "C语句（2）",
        rate: 0, //观看进度
        video: "http://qgailab.com/cloud/course/resources/video/2.10_1.mp4",
        videoId: 117,
        total: 583, //总时长
        content: 'C语言的语句用来向计算机系统发出操作指令，一个语句经编译后产生若干条机器指令，C语句可分为以下五类：表达式语句、标签语句、循环语句、复合语句、跳转语句、选择语句',
        ifFinished: false,
      },
      {
        title: "数据的输入输出（1）",
        rate: 0, //观看进度
        video: "http://qgailab.com/cloud/course/resources/video/2.11_1.mp4",
        videoId: 118,
        total: 637, //总时长
        content: 'C语言中没有提供对数据的输入语句。但提供了一些可完成数据输入的标准函数，按照指定的格式来解析常见的数据类型，基本输入函数为：getchar()、scanf() 。',
        ifFinished: false,
      },
      {
        title: "数据的输入输出（2）",
        rate: 0, //观看进度
        video: "http://qgailab.com/cloud/course/resources/video/2.12_1.mp4",
        videoId: 119,
        total: 584, //总时长
        content: '数据输入与输出C语言中没有提供对数据的输出语句。但提供了一些可完成数据输出的标准函数，按照指定的格式来解析常见的数据类型，基本输出函数为：putchar()、printf()概念的了解与掌握',
        ifFinished: false,
      },
    ],
  },
  {
    title: "三、选择结构",
    show: false, //是否展示详细内容
    rate: 0, //进度
    work:
      // "http://qgailab.com/cloud/course/static/pdf/2.1_1.pptx",
      '',
    file: 'http://qgailab.com/cloud/course/static/pdf/2.1_1.pdf',
    detail: [
      {
        title: "三种if语句",
        video: "http://qgailab.com/cloud/course/resources/video/3.1_1.mp4",
        videoId: 120,
        rate: 0, //观看进度
        total: 795, //总时长
        content: "在三种形式的if语句中，在if关键字之后均为表达式。 该表达式通常是逻辑表达式或关系表达式，但也可以是其它表达式，如赋值表达式等，甚至也可以是一个变量。",
        ifFinished: false,
      },
      {
        title: "关系运算符和关系表达式",
        video: "http://qgailab.com/cloud/course/resources/video/3.2_1.mp4",
        videoId: 121,
        total: 371, //总时长
        content: '关系运算符与关系表达式. 1.关系表达式的结果只有两种，0或者1。. 2.关系表达式值，成立为真，则值为1；不成立则为假，值为0。',
        ifFinished: false,
      },
      {
        title: "逻辑运算符与逻辑表达式",
        video: "http://qgailab.com/cloud/course/resources/video/3.3_1.mp4",
        videoId: 122,
        rate: 0, //观看进度
        total: 874, //总时长
        content: '表达式 逻辑运算符 表达式. 其中的表达式可以又是逻辑表达式，从而组成了嵌套的情形。例如：. (a&&b)&&c. 根据逻辑运算符的左结合性，上式也可写为：. a&&b&&c. 逻辑表达式的值是式中各种逻辑运算的最后值',
        ifFinished: false,
      },
      {
        title: "条件运算符与条件表达式",
        video: "http://qgailab.com/cloud/course/resources/video/3.4_1.mp4",
        videoId: 123,
        total: 495, //总时长
        rate: 0, //观看进度
        content: '条件表达式通常用于赋值语句之中。条件运算符的运算优先级低于关系运算符和算术运算符，但高于赋值符。 因此 条件运算符?和：是一对运算符，不能分开单独使用。 条件运算符的结合方向是自右至左。',
        ifFinished: false,
      },
      {
        title: "switch多分支选择结构",
        video: "http://qgailab.com/cloud/course/resources/video/3.5_1.mp4",
        videoId: 124,
        total: 464, //总时长
        rate: 0, //观看进度
        content: 'switch语句是多分支选择语句，用来实现多分支选择结构。. 它的一般形式如下：. switch (表达式) {. case 常量表达式1:语句1. case 常量表达式2:语句2. ... case 常量表达式n:语句n. default:语句n+1.',
        ifFinished: false,
      },
    ],
  },
  {
    title: "四、循环结构",
    show: false, //是否展示详细内容
    rate: 0, //进度
    work:
      // "http://qgailab.com/cloud/course/static/pdf/2.1_1.pptx",
      '',
    file: 'http://qgailab.com/cloud/course/static/pdf/4.1_1.pdf',
    detail: [
      {
        title: "while循环设计结构",
        video: "http://qgailab.com/cloud/course/resources/video/4.1_1.mp4",
        videoId: 127,
        rate: 0, //观看进度
        total: 785, //总时长
        content: "while 表达式是顶部驱动（top-driven）的循环：先计算循环条件（也就是控制表达式）。如果为 true，就执行循环体，然后再次计算控制表达式。如果控制表达式为 false，程序跳过循环体，而去执行循环体后面的语句。",
        ifFinished: false,
      },
      {
        title: "for循环设计结构",
        video: "http://qgailab.com/cloud/course/resources/video/4.2_1.mp4",
        rate: 0, //观看进度
        videoId: 128,
        total: 753, //总时长
        content: 'for循环结构适合于循环次数已知的情况，在表达式1中可以包含变量初始化的操作，表达式2中是循环条件，表达式3是使循环趋于结束的操作。相比于while循环和do...while循环，for循环的功能更强大。',
        ifFinished: false,
      },
      {
        title: "循环结构嵌套和比较",
        video: "http://qgailab.com/cloud/course/resources/video/4.3_1.mp4",
        videoId: 129,
        rate: 0, //观看进度
        total: 669, //总时长
        content: '本节要学会描述并使用while循环结构、do...while循环结构、for循环结构三种循环结构，了解这三种循环结构的相同和不同之处。掌握continue和break在这三种循环结构中的使用，了解如何跳出循环和继续下一个循环。',
        ifFinished: false,
      },
      {
        title: "循环结构设计综合应用",
        video: "http://qgailab.com/cloud/course/resources/video/4.4_1.mp4",
        videoId: 130,
        total: 486, //总时长
        rate: 0, //观看进度
        content: '循环结构即在给定条件成立的条件下，反复执行某语句段，直到条件不成立为止，我们将给定的条件成为循环条件，反复执行的语句称为循环体。这里使用多个例子来讲解循环结构的使用。',
        ifFinished: false,
      },
    ],
  },
  {
    title: "五、数组",
    show: false, //是否展示详细内容
    rate: 0, //进度
    work:
      // "http://qgailab.com/cloud/course/static/pdf/2.1_1.pptx",
      '',
    file: 'http://qgailab.com/cloud/course/static/pdf/5.1_1.pdf',
    detail: [
      {
        title: "一维数组（1）",
        video: "http://qgailab.com/cloud/course/resources/video/5.1_1.mp4",
        videoId: 131,
        rate: 0, //观看进度
        total: 762, //总时长
        content: "数组作为连续存放的若干个相同类型元素的集合，有很多重要作用，本节主要介绍一维数组的定义，存放及其引用。",
        ifFinished: false,
      },
      {
        title: "一维数组（2）",
        video: "http://qgailab.com/cloud/course/resources/video/5.2_1.mp4",
        rate: 0, //观看进度
        videoId: 132,
        total: 423, //总时长
        content: '本节主要介绍一维数组的初始化，一共有4种初始化的方式。同时将通过实例展示如何使用数组来处理Fibonacci数列问题。',
        ifFinished: false,
      },
      {
        title: "冒泡排序法",
        video: "http://qgailab.com/cloud/course/resources/video/5.3_1.mp4",
        videoId: 133,
        rate: 0, //观看进度
        total: 729, //总时长
        content: '排序是数据处理的重要过程，本节主要讲述经典的冒泡排序，其关键思想是重复跑过要排序的元素列，依次比较两个相邻的元素，如果顺序（如从大到小）那么它就会按照大到小的排序方式来。它必须要把算所有的元素重复地进行跑一遍，直到没有相邻元素需要交换。',
        ifFinished: false,
      },
      {
        title: "二维数组(1)",
        video: "http://qgailab.com/cloud/course/resources/video/5.4_1.mp4",
        videoId: 134,
        rate: 0, //观看进度
        total: 840, //总时长
        content: '之前讲解的数组可以看作是一行连续的数据，只有一个下标，称为一维数组。在实际问题中有很多数据是二维的或多维的，因此C语言允许构造多维数组。多维数组元素有多个下标，以确定它在数组中的位置',
        ifFinished: false,
      },
      {
        title: "二维数组(2)",
        video: "http://qgailab.com/cloud/course/resources/video/5.5_1.mp4",
        videoId: 135,
        rate: 0, //观看进度
        total: 234, //总时长
        content: '本节主要讲的是二维数组的定义、初始化和引用，相较于一维数组，他类似一个矩阵，需要行、列坐标定位他的位置。他还有更多的奥秘值得我们去探索，让我们一起进入章节学习吧',
        ifFinished: false,
      },
      {
        title: "字符数组（1）",
        video: "http://qgailab.com/cloud/course/resources/video/5.6_1.mp4",
        videoId: 136,
        rate: 0, //观看进度
        total: 505, //总时长
        content: '字符串是由多个字符组成的序列，想要存储一个字符串，可以先把它拆成一个个字符，然后分别对这些字符进行存储，即通过字符数组存储。字符数组是一个数组，且是存储字符的数组，该数组中一个元素存放字符串的一个字符。',
        ifFinished: false,
      },
      {
        title: "字符数组（2）",
        video: "http://qgailab.com/cloud/course/resources/video/5.7_1.mp4",
        videoId: 137,
        rate: 0, //观看进度
        total: 512, //总时长
        content: '本节主要介绍字符数组的初始化，如何引用字符数组中的元素，字符数组的输入输出等等，让我们一起深入学习，一起来领悟字符数组的奥秘吧',
        ifFinished: false,
      },
      {
        title: "字符串处理函数",
        video: "http://qgailab.com/cloud/course/resources/video/5.8_1.mp4",
        videoId: 138,
        rate: 0, //观看进度
        total: 800, //总时长
        content: 'C标准库中头文件<string.h>定义了两组字符串函数，第一组函数的名字以str开头，它主要处理以’\0‘结尾的字符串；第二组函数的名字以mem开头，主要考虑非字符串内部含有零值的情形，它能够处理任意的字节序列',
        ifFinished: false,
      },
    ],
  },
  {
    title: "六、函数",
    show: false, //是否展示详细内容
    rate: 0, //进度
    work:
      // "http://qgailab.com/cloud/course/static/pdf/6.1_1.pptx",
      '',
    file: 'http://qgailab.com/cloud/course/static/pdf/6.1_1.pdf',
    detail: [
      {
        title: "函数",
        video: "http://qgailab.com/cloud/course/resources/video/6.1_1.mp4",
        videoId: 139,
        rate: 0, //观看进度
        total: 859, //总时长
        content: "函数是一段可以重复使用的代码，用来独立地完成某个功能，它可以接收用户传递的数据，也可以不接收。接收用户数据的函数在定义时要指明参数，不接收用户数据的不需要指明，根据这一点可以将函数分为有参函数和无参函数。",
        ifFinished: false,
      },
      {
        title: "函数的返回值",
        video: "http://qgailab.com/cloud/course/resources/video/6.2_1.mp4",
        rate: 0, //观看进度
        videoId: 140,
        total: 271, //总时长
        content: '函数的函数名是该函数的代表，也是一个变量。由于函数名变量通常用来把函数的处理结果数据返回给调用函数，即递归调用，所以一般把函数名变量称为返回值，函数的返回值类型是在定义函数时指定的。',
        ifFinished: false,
      },
      {
        title: "函数声明",
        video: "http://qgailab.com/cloud/course/resources/video/6.3_1.mp4",
        videoId: 141,
        rate: 0, //观看进度
        total: 333, //总时长
        content: '“函数定义”是指对函数功能的确立，包括指定函数名，函数值类型、形参类型、函数体等。“函数声明”的作用则是把函数的名字、函数类型以及形参类型、个数和顺序通知编译系统，以便在调用该函数时系统按此进行对照检查。',
        ifFinished: false,
      },
      {
        title: "函数的形参和实参",
        video: "http://qgailab.com/cloud/course/resources/video/6.4_1.mp4",
        videoId: 142,
        rate: 0, //观看进度
        total: 418, //总时长
        content: '在函数定义中，形参在整个函数体内都可以使用，离开该函数则不能使用。实参出现在主调函数中，进入被调函数后，实参变量也不能使用。数据传送是形参和实参的主要功能。在发生函数调用时，主调函数把实参的值传送给被调函数的形参从而实现主调函数向被调函数的数据传送。',
        ifFinished: false,
      },
      {
        title: "函数嵌套调用",
        video: "http://qgailab.com/cloud/course/resources/video/6.5_1.mp4",
        videoId: 143,
        rate: 0, //观看进度
        total: 534, //总时长
        content: 'C语言中函数的定义都是相互平行、相互独立的，在函数定义时，函数体内不能包含另一个函数的定义，即函数不能嵌套定义，但可以嵌套调用。嵌套调用就是某个函数调用另外一个函数（即函数嵌套允许在一个函数中调用另外一个函数）',
        ifFinished: false,
      },
      {
        title: "函数的递归调用",
        video: "http://qgailab.com/cloud/course/resources/video/6.6_1.mp4",
        videoId: 144,
        rate: 0, //观看进度
        total: 436, //总时长
        content: '函数调用是通过栈实现的。在调用函数时，系统会将被调函数所需的程序空间安排在一个栈中。递归也是一种函数调用，只不过是函数自己调用自己，是一种特殊的函数调用，调用自己同调用别人是一模一样的。',
        ifFinished: false,
      },
      {
        title: "数组元素作为函数实参",
        video: "http://qgailab.com/cloud/course/resources/video/6.7_1.mp4",
        videoId: 145,
        rate: 0, //观看进度
        total: 308, //总时长
        content: '数组元素作函数参数,数组元素就是下标变量，它与普通变量并无区别。因此它作为函数实参使用与普通变量是完全相同的，在发生函数调用时，把作为实参的数组元素的值传递给形参，实现单向的值传递。',
        ifFinished: false,
      },
      {
        title: "数组名作为函数参数",
        video: "http://qgailab.com/cloud/course/resources/video/6.8_1.mp4",
        videoId: 146,
        rate: 0, //观看进度
        total: 571, //总时长
        content: '数组名作函数参数,数组名就是数组的首地址。因此在数组名作为函数参数时所进行的传递只是地址的传递，也就是说把实参数组的首地址赋予形参数组名。形参数组名取得该首地址之后，也等于有了实际的数组，即实参与形参有一段共用的内存空间。',
        ifFinished: false,
      },
      {
        title: "局部变量和全局变量",
        video: "http://qgailab.com/cloud/course/resources/video/6.9_1.mp4",
        videoId: 147,
        rate: 0, //观看进度
        total: 832, //总时长
        content: '变量按存储区域分：全局变量、静态全局变量和静态局部变量都存放在内存的静态存储区域，局部变量存放在内存的栈区。',
        ifFinished: false,
      },
      {
        title: "变量的存储方式和生存期",
        video: "http://qgailab.com/cloud/course/resources/video/6.10_1.mp4",
        videoId: 148,
        rate: 0, //观看进度
        total: 848, //总时长
        content: '从变量值存在的作时间（即生存期）角度来分，可以分为静态存储方式和动态存储方式。 静态存储方式：是指在程序运行期间分配固定的存储空间的方式。 动态存储方式：是在程序运行期间根据需要进行动态的分配存储空间的方式。 ',
        ifFinished: false,
      },
      {
        title: "外部函数和内部函数",
        video: "http://qgailab.com/cloud/course/resources/video/6.11_1.mp4",
        videoId: 149,
        rate: 0, //观看进度
        total: 105, //总时长
        content: '内部函数（静态函数）:只能被本文件中其它函数调用。定义内部函数时，在函数名核函数类型的前面加上static。外部函数：可被其他文件调用，在函数首部最左端加上关键字extern，则此函数是外部函数。本章主要介绍两种函数的区别',
        ifFinished: false,
      },
    ],
  },
  {
    title: "七、指针",
    show: false, //是否展示详细内容
    rate: 0, //进度
    work:
      // "http://qgailab.com/cloud/course/static/pdf/6.1_1.pptx",
      '',
    file: 'http://qgailab.com/cloud/course/static/pdf/7.1_1.pdf',
    detail: [
      {
        title: "定义指针变量",
        video: "http://qgailab.com/cloud/course/resources/video/7.1_1.mp4",
        videoId: 150,
        rate: 0, //观看进度
        total: 300, //总时长
        content: "若有一个变量专门用来存放另一个变量的地址，那么就称它为“指针变量”。也就是说，指针变量里面存放的是指针，即地址。C 语言规定所有变量在使用前必须先定义，指定其类型，并按此分配内存单元。指针变量不同于整型变量和其他类型的变量，它是专门用来存放地址的，所以必须将它定义为“指针类型”。",
        ifFinished: false,
      },
      {
        title: "引用指针变量",
        video: "http://qgailab.com/cloud/course/resources/video/7.2_1.mp4",
        videoId: 151,
        rate: 0, //观看进度
        total: 341, //总时长
        content: "在指针运算中，经常需要用到以下运算符：*（指针运算符、间接访问运算符），可以取指针变量指向变量的内容。&（取地址运算符）；取变量的地址。",
        ifFinished: false,
      },
      {
        title: "指针变量作为函数参数",
        video: "http://qgailab.com/cloud/course/resources/video/7.3_1.mp4",
        videoId: 152,
        rate: 0, //观看进度
        total: 381, //总时长
        content: "在C语言中，函数的参数不仅可以是整数、小数、字符等具体的数据，还可以是指向它们的指针。用指针变量作函数参数可以将函数外部的地址传递到函数内部，使得在函数内部可以操作函数外部的数据，并且这些数据不会随着函数的结束而被销毁。",
        ifFinished: false,
      },
      {
        title: "通过指针引用数组",
        video: "http://qgailab.com/cloud/course/resources/video/7.4_1.mp4",
        videoId: 153,
        rate: 0, //观看进度
        total: 708, //总时长
        content: "数组（Array）是一系列具有相同类型的数据的集合，每一份数据叫做一个数组元素（Element）。数组中的所有元素在内存中是连续排列的，整个数组占用的是一块内存。定义数组时，要给出数组名和数组长度，数组名可以认为是一个指针，它指向数组的第 0 个元素。在C语言中，我们将第 0 个元素的地址称为数组的首地址。",
        ifFinished: false,
      },
      {
        title: "通过指针引用字符串",
        video: "http://qgailab.com/cloud/course/resources/video/7.5_1.mp4",
        videoId: 154,
        rate: 0, //观看进度
        total: 170, //总时长
        content: "字符数组归根结底还是一个数组，上节讲到的关于指针和数组的规则同样也适用于字符数组。还可以直接使用一个指针指向字符串",
        ifFinished: false,
      },
    ],
  },
]