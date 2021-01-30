import React, { Component, Fragment } from 'react';
import { Header, Content } from 'components/Page';
import { DataSet, Table, Button } from 'choerodon-ui/pro';
import FirstDS from '../stores/FirstDS';

const { Column } = Table;

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  FirstDS = new DataSet({ ...FirstDS() });

  componentDidMount() {
    const data = [
      {
        userId: 1,
        name: '吴开云',
        age: 23,
        sex: '1',
        phone: '13332311239',
        emailAddress: '44444@qq.com',
        enable: true,
      },
      {
        userId: 2,
        name: '20685',
        age: 23,
        sex: '1',
        phone: '13332311234',
        emailAddress: '555555@qq.com',
      },
      {
        userId: 3,
        name: '王二',
        age: 23,
        sex: '0',
        phone: '13312341234',
        emailAddress: '66666@qq.com',
      },
    ];
    this.FirstDS.loadData(data, data.length);
  }

  buttons = ['add', 'delete'];

  // eslint-disable-next-line no-unused-vars
  commands = ({ record }) => ['edit', ['delete', { color: 'red' }]];

  render() {
    return (
      <Fragment>
        <Header title="First页面">
          <Button icon="add" color="primary">
            新建
          </Button>
        </Header>
        <Content>
          <Table dataSet={this.FirstDS} buttons={this.buttons} editMode="inline">
            <Column name="name" editor width={100} lock="left" />
            <Column name="age" />
            <Column name="sex" editor />
            <Column name="phone" editor width={150} />
            <Column name="emailAddress" editor width={200} />
            <Column name="department" editor width={100} />
            <Column name="enable" editor />
            <Column name="date.startDate" editor width={150} />
            <Column name="date.endDate" editor width={150} />
            <Column header="操作" width={150} command={this.commands} lock="right" />
          </Table>
        </Content>
      </Fragment>
    );
  }
}
