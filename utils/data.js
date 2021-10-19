const data = [{
    'text': '学院',
    'active': false,
    'child': [{
      'id': 1,
      'title': '学院',
      'childType': [{
          'id': 1,
          'text': '建筑学院',
          'selectd': false
        },
        {
          'id': 2,
          'text': '经济管理学院',
          'selectd': false
        },
        {
          'id': 3,
          'text': '土木水利学院',
          'selectd': false
        },
        {
          'id': 4,
          'text': '马克思主义学院',
          'selectd': false
        },
        {
          'id': 5,
          'text': '人文学院',
          'selectd': false
        },
        {
          'id': 6,
          'text': '机械工程学院',
          'selectd': false
        },
        {
          'id': 7,
          'text': '信息科学技术学院',
          'selectd': false
        },
        {
          'id': 8,
          'text': '航天航空学院',
          'selectd': false
        },
        {
          'id': 9,
          'text': '社会科学',
          'selectd': false
        },
        {
          'id': 10,
          'text': '新闻与传播学院',
          'selectd': false
        },
        {
          'id': 11,
          'text': '材料学院',
          'selectd': false
        },
      ]
    }]
  },
  {
    'text': '类别',
    'active': false,
    'child': [{
      'id': 1,
      'title': '类别',
      'childType': [{
        'id': 1,
        'text': '必修课',
        'selected': false
      }, {
        'id': 2,
        'text': '选修课',
        'selected': false
      }]
    }]
  },
  {
    text: '时间',
    active: false,
    child: [{
      id: 1,
      title: '时间',
      childType: [{
          id: 1,
          text: '周一',
          selected: false
        },
        {
          id: 2,
          text: '周二',
          selected: false
        },
        {
          id: 3,
          text: '周三',
          selected: false
        },
        {
          id: 4,
          text: '周四',
          selected: false
        },
        {
          id: 5,
          text: '周五',
          selected: false
        },
        {
          id: 6,
          text: '周六',
          selected: false
        },
        {
          id: 7,
          text: '周日',
          selected: false
        },
      ]
    }]
  }
];

module.exports={
  data
}