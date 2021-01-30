export default () => ({
  autoQuery: false,
  transport: {},
  fields: [
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
});
