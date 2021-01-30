import React, { Component, Fragment } from 'react';
import { Header, Content } from 'components/Page';
import { DataSet, Table, Button } from 'choerodon-ui/pro';
import FirstDS from '../stores/FirstDS';

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  FirstDS = new DataSet({ ...FirstDS() });

  componentDidMount() {
    const data = [
      {
        name: '吴开云',
        age: 23,
        sex: '男',
        phone: '138111111',
        emailAddress: '1111111@qq.com',
      },
      {
        name: '20685',
        age: 23,
        sex: '男',
        phone: '138111111',
        emailAddress: '1111111@qq.com',
      },
    ];
    this.FirstDS.loadData(data, data.length);
  }

  get buttons() {
    return [
      <Button key="create-field" icon="playlist_add" color="primary" funcType="flat">
        新建
      </Button>,
    ];
  }

  render() {
    return (
      <Fragment>
        <Header title="First页面">
          <Button icon="add" color="primary">
            新建
          </Button>
        </Header>
        <Content>
          <Table dataSet={this.FirstDS} buttons={this.buttons}>
            <Table.Column name="name" />
            <Table.Column name="age" />
            <Table.Column name="sex" />
            <Table.Column name="phone" />
            <Table.Column name="emailAddress" />
          </Table>
        </Content>
      </Fragment>
    );
  }
}
