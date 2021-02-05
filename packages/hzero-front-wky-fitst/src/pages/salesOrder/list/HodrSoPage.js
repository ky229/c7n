import React, { Component, Fragment } from 'react';
import { Header, Content } from 'components/Page';
import { DataSet, Table, Button, TextField, Lov, Modal, Tabs } from 'choerodon-ui/pro';
import HodrSoHeaderDS from '../stores/HodrSoHeaderDS';
import HodrSoLineDS from '../stores/HodrSoLineDS';
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
    const lineData = [
      {
        soLineId: 1,
        soHeaderId: 1,
        lineNumber: '1111',
        addition1: '1111-1',
      },
      {
        soLineId: 2,
        soHeaderId: 2,
        lineNumber: '2222',
        addition1: '2222-2',
      },
    ];
    this.hodrSoLineDS.loadData(lineData, 2);
    const headerData = [
      {
        soHeaderId: 1,
        orderNumber: '1111',
      },
      {
        soHeaderId: 2,
        orderNumber: '2222',
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
              <Column name="lineNumber" editor />
              <Column header="操作" width={150} command={this.commands} lock="right" />
            </Table>
          </TabPane>
          <TabPane tab="行拓展信息">
            <Table dataSet={this.hodrSoLineDS} rowHeight={40}>
              <Column name="addition1" editor width={150} />
              <Column header="操作" width={150} command={this.commands} lock="right" />
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

  commands = ({ record }) => ['edit', ['delete', { color: 'red' }]];

  render() {
    return (
      <Fragment>
        <Content>
          <Table
            key="user"
            buttons={this.buttons}
            dataSet={this.hodrSoHeaderDS}
            header="HodrSoHeader"
            editMode="inline"
          >
            <Column name="soHeaderId" onClick={this.editLine} />
            <Column name="orderNumber" editor width={150} />
            <Column
              header="编辑行信息"
              align="center"
              renderer={this.renderEditLine}
              lock="right"
            />
          </Table>
        </Content>
      </Fragment>
    );
  }
}
