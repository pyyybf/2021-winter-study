import React from 'react';
import {Table} from 'antd';

export default class TableList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <Table
      dataSource={this.props.dataSource}
      columns={this.props.columns}
    />;
  }
}
