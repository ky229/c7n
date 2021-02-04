export default () => ({
  autoQuery: true,
  primaryKey: 'soHeaderId',
  fields: [
    {
      name: 'soHeaderId',
      type: 'number',
      label: '销售订单头ID',
    },
    {
      name: 'orderNumber',
      label: '订单编号',
      type: 'string',
    },
    {
      name: 'companyId',
      label: '公司ID',
      type: 'number',
    },
    {
      name: 'companyName',
      label: '公司名称',
      type: 'string',
    },
    {
      name: 'customerId',
      label: '客户ID',
      type: 'number',
    },
    {
      name: 'customerName',
      label: '客户名称',
      type: 'string',
    },
    { name: 'orderDate', type: 'date', label: '订单日期' },
    {
      name: 'orderStatus',
      label: '订单状态',
      type: 'string',
    },
    {
      name: 'orderPrice',
      label: '订单金额',
      type: 'number',
    },
  ],
  transport: {
    submit: {
      url: '/soHeader/queries',
      method: 'post',
    },
    read: {
      url: '/soHeader/queries',
      method: 'get',
    },
    create: {
      url: '/soHeader/mutations',
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
  children: {
    friends: this.hodrSoLineDS,
  },
});
