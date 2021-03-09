import React from 'react';
import Search from '../search/index.jsx';
import TableList from '../table-list/index.jsx';

export default class SearchTable extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<>
      <Search fields={this.props.columns}/>
      <TableList
        dataSource={this.props.dataSource}
        columns={this.props.columns}
      />
    </>);
  }
}
