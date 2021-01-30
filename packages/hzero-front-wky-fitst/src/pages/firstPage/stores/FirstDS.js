export default () => ({
  autoQuery: false,
  primaryKey: 'userId',
  fields: [
    {
      name: 'userId',
      type: 'string',
      label: '用户ID',
    },
    {
      name: 'name',
      label: '姓名',
      type: 'string',
    },
    {
      name: 'age',
      label: '年龄',
      type: 'number',
    },
    {
      name: 'sex',
      label: '性别',
      type: 'string',
      lookupCode: 'HPFM.GENDER',
      required: true,
      help: '请正确选择性别',
    },
    {
      name: 'phone',
      label: '手机号',
      type: 'number',
    },
    {
      name: 'emailAddress',
      label: '邮箱地址',
      type: 'email',
    },
    {
      name: 'department',
      label: '部门',
      type: 'object',
      lovCode: 'HPFM.UNIT.DEPARTMENT',
    },
    {
      name: 'enable',
      type: 'boolean',
      label: '是否启用用户',
    },
    { name: 'date.startDate', type: 'dateTime', label: '生效时间' },
    { name: 'date.endDate', type: 'dateTime', label: '失效时间' },
  ],
  queryFields: [
    {
      name: 'name',
      label: '姓名',
      type: 'string',
    },
    {
      name: 'age',
      label: '年龄',
      type: 'number',
    },
    {
      name: 'sex',
      label: '性别',
      type: 'string',
    },
  ],
  transport: {
    submit: {
      url: '/dataset/user/queries',
      method: 'post',
    },
    read: {
      url: '/dataset/user/queries',
      method: 'get',
    },
    create: {
      url: '/dataset/user/mutations',
      method: 'put',
    },
    update: ({ data }) =>
      data.length
        ? {
            url: `/dataset/user/mutations/${data[0].userId}`,
            data: data[0],
          }
        : null,
    destroy: {
      url: '/dataset/user/mutations',
      method: 'delete',
    },
    exports: {
      url: 'http://gitee.com/xurime/excelize/raw/master/test/SharedStrings.xlsx',
      method: 'get',
    },
  },
});
