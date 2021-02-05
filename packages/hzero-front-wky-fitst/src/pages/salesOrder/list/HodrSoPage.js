import React, { Component, Fragment } from 'react';
import { Content } from 'components/Page';
import { DataSet, Table, Button, Modal, Tabs } from 'choerodon-ui/pro';
import './index.less';

const { TabPane } = Tabs;
const { Column } = Table;

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  hodrSoLineDS = new DataSet({
    autoQuery: false,
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
        lookupCode: 'HPFM.UOM',
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
      {
        name: 'addition1',
        label: '附件信息1',
        type: 'string',
      },
      {
        name: 'addition2',
        label: '附件信息2',
        type: 'string',
      },
      {
        name: 'addition3',
        label: '附件信息3',
        type: 'string',
      },
      {
        name: 'addition4',
        label: '附件信息4',
        type: 'string',
      },
      {
        name: 'addition5',
        label: '附件信息5',
        type: 'string',
      },
    ],
    queryFields: [
      {
        name: 'lineNumber',
        label: '行号',
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

  hodrSoHeaderDS = new DataSet({
    autoQuery: false,
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
        label: '公司',
        type: 'object',
        lovCode: 'HPFM.UNIT.COMPANY',
      },
      {
        name: 'companyName',
        label: '公司名称',
        type: 'string',
      },
      {
        name: 'customerId',
        label: '客户',
        type: 'object',
        lovCode: 'HPFM.EMPLOYEE',
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
        lookupCode: 'HPFM.TENANT_INIT_STATUS',
      },
      {
        name: 'orderPrice',
        label: '订单金额',
        type: 'number',
      },
    ],
    queryFields: [
      {
        name: 'orderNumber',
        label: '订单编号',
        type: 'string',
      },
      {
        name: 'orderStatus',
        label: '订单状态',
        type: 'string',
      },
      {
        name: 'companyName',
        label: '公司名称',
        type: 'string',
      },
      {
        name: 'customerName',
        label: '客户名称',
        type: 'string',
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
      hodrSoLins: this.hodrSoLineDS,
    },
  });

  componentDidMount() {
    const headerData = [
      {
        soHeaderId: 1,
        orderNumber: '20210205000001',
      },
      {
        soHeaderId: 2,
        orderNumber: '20210205000002',
      },
    ];
    this.hodrSoHeaderDS.loadData(headerData, 2);
  }

  openModal = (record) => {
    let isCancel = false;
    Modal.open({
      drawer: true,
      width: 1200,
      children: (
        <Tabs>
          <TabPane tab="行基本信息" size="large">
            <Table
              buttons={['add', 'save', 'delete']}
              editMode="inline"
              dataSet={this.hodrSoLineDS}
            >
              <Column name="soLineId" editor />
              <Column name="soHeaderId" editor />
              <Column name="lineNumber" editor />
              <Column name="itemId" editor />
              <Column name="itemName" editor />
              <Column name="orderQuantity" editor />
              <Column name="orderQuantityUom" editor />
              <Column name="unitSellingPrice" editor />
              <Column name="description" editor />
              <Column header="操作" command={this.commands} lock="right" />
            </Table>
          </TabPane>
          <TabPane tab="行拓展信息">
            <Table dataSet={this.hodrSoLineDS}>
              <Column name="addition1" editor />
              <Column name="addition2" editor />
              <Column name="addition3" editor />
              <Column name="addition4" editor />
              <Column name="addition5" editor />
              <Column header="操作" command={this.commands} lock="right" />
            </Table>
          </TabPane>
        </Tabs>
      ),
      onCancel: () => (isCancel = true),
      afterClose: () => record && isCancel && this.hodrSoLineDS.remove(record),
    });
  };

  buttons = ['add', 'save', 'delete'];

  renderEditLine = () => {
    return <Button funcType="flat" icon="mode_edit" onClick={this.editLine} size="small" />;
  };

  editLine = () => {
    this.openModal();
  };

  headerCommands = ({ record }) => ['edit', ['delete', { color: 'red' }]];

  lineCommands = ({ record }) => ['edit', ['delete', { color: 'red' }]];

  render() {
    return (
      <Fragment>
        <Content>
          <Table
            key="user"
            buttons={this.buttons}
            dataSet={this.hodrSoHeaderDS}
            header="订单汇总信息"
            editMode="inline"
          >
            <Column name="soHeaderId" onClick={this.editLine} />
            <Column name="orderNumber" editor />
            <Column name="companyId" editor />
            <Column name="customerId" editor />
            <Column name="orderDate" editor />
            <Column name="orderStatus" editor />
            <Column name="orderPrice" editor />
            <Column header="头编辑" command={this.headerCommands} lock="right" />
            <Column header="行编辑" align="center" renderer={this.renderEditLine} lock="right" />
          </Table>
        </Content>
      </Fragment>
    );
  }
}
