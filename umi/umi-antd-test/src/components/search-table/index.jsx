import React from 'react';
import {Spin} from 'antd';
import Search from '../search/index.jsx';
import TableList from '../table-list/index.jsx';

export default class SearchTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.props.dataSource,
      loading: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.startLoading = this.startLoading.bind(this);
    this.endLoading = this.endLoading.bind(this);
  }

  handleSearch(searchInfo) {
    //console.log(this.state)
    this.startLoading();
    var dataSource = [];
    var flag = true;
    var searchKeys = Object.keys(searchInfo);
    for (var i = 0; i < this.props.dataSource.length; i++) {
      flag = true;
      for (var j = 0; j < searchKeys.length; j++) {
        if (searchInfo[searchKeys[j]] && this.props.dataSource[i][searchKeys[j]].toString().indexOf(searchInfo[searchKeys[j]]) == -1) {
          flag = false;
          break;
        }
      }
      if (flag) {
        dataSource.push(this.props.dataSource[i]);
      }
    }
    this.setState({
      dataSource: dataSource,
    });
    this.endLoading();
  }

  startLoading() {
    //console.log('start loading')
    this.setState({
      loading: true,
    });
  }

  endLoading() {
    this.setState({
      loading: false,
    });
    //console.log('end loading')
  }

  handleClear() {
    this.setState({
      dataSource: this.props.dataSource,
    });
  }

  render() {
    return (<>
      <Search fields={this.props.columns} onSearch={this.handleSearch} onClear={this.handleClear}/>
      <Spin spinning={this.state.loading}>
        <TableList
          dataSource={this.state.dataSource}
          columns={this.props.columns}
        />
      </Spin>
    </>);
  }
}
