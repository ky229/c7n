export default () => ({
  autoQuery: true,
  autoCreate: true,
  primaryKey: 'soLineId',
  fields: [
    {
      name: 'soLineId',
      type: 'number',
      label: '销售订单行ID',
    },
    {
      name: 'soHeaderId',
      type: 'number',
      label: '销售订单头ID',
    },
    {
      name: 'lineNumber',
      label: '行号',
      type: 'number',
    },
    {
      name: 'itemId',
      label: '产品ID',
      type: 'number',
    },
    {
      name: 'itemName',
      label: '产品名称',
      type: 'string',
    },
    {
      name: 'orderQuantity',
      label: '数量',
      type: 'number',
    },
    {
      name: 'orderQuantityUom',
      label: '产品单位',
      type: 'string',
    },
    {
      name: 'unitSellingPrice',
      label: '销售单价',
      type: 'number',
    },
    {
      name: 'description',
      label: '备注',
      type: 'string',
    },
  ],
  transport: {
    submit: {
      url: '/soLine/queries',
      method: 'post',
    },
    read: {
      url: '/soLine/queries',
      method: 'get',
    },
    create: {
      url: '/soLine/mutations',
      method: 'put',
    },
    update: ({ data }) =>
      data.length
        ? {
            url: `/soLine/mutations/${data[0].userId}`,
            data: data[0],
          }
        : null,
    destroy: {
      url: '/soLine/mutations',
      method: 'delete',
    },
  },
});
