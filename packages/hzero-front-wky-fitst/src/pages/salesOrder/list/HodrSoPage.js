import React, { Component, Fragment } from 'react';
import { Header, Content } from 'components/Page';
import { DataSet, Table, Button, TextField, Lov, Modal, Tabs } from 'choerodon-ui/pro';
import HodrSoHeaderDS from '../stores/HodrSoHeaderDS';
import HodrSoLineDS from '../stores/HodrSoLineDS';

const { TabPane } = Tabs;
const { Column } = Table;

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  hodrSoLineDS = new DataSet({ ...HodrSoLineDS() });

  hodrSoHeaderDS = new DataSet({ ...HodrSoHeaderDS() });

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
    this.hodrSoLineDS.loadData(lineData, lineData.length);
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
    this.hodrSoHeaderDS.loadData(headerData, headerData.length);
  }

  openModal = (record) => {
    let isCancel = false;
    Modal.open({
      drawer: true,
      width: 600,
      children: (
        <Tabs>
          <TabPane tab="行基本信息">
            <Table buttons={['add', 'delete']} dataSet={this.HodrSoLineDS} rowHeight={40}>
              <Column name="lineNumber" editor />
            </Table>
          </TabPane>
          <TabPane tab="行拓展信息">
            <Table dataSet={this.HodrSoLineDS} rowHeight={40}>
              <Column name="addition1" editor width={150} />
            </Table>
          </TabPane>
        </Tabs>
      ),
      onCancel: () => (isCancel = true),
      afterClose: () => record && isCancel && this.userDs.remove(record),
    });
  };

  buttons = ['add', 'delete'];

  // eslint-disable-next-line no-unused-vars
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
          >
            <Column name="soHeaderId" />
            <Column name="orderNumber" editor width={150} />
            <Column header="编辑行信息" align="center" renderer={this.openModal} lock="right" />
          </Table>
        </Content>
      </Fragment>
    );
  }
}
