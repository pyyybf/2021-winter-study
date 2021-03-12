import React from 'react';
import {Spin} from 'antd';
import Search from '../search/index.jsx';
import TableList from '../table-list/index.jsx';

export default class SearchTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.props.dataSource,
      searchInfo: [],
      loading: false,
      allDataSource: this.props.dataSource,
    };
  }

  loadingWarp = (fn) => {
    let promise = new Promise((resolve) => {
      this.setState({
        loading: true,
      });
      let res = fn();
      setTimeout(resolve, 1000);
    }).finally(() => {
      this.setState({
        loading: false,
      })
    });
  }

  searchInit = (searchInfo) => {
    this.setState({
      searchInfo: searchInfo,
    })
    this.loadingWarp(this.handleSearch);
  }

  handleSearch = () => {
    let {name: searchName, age: searchAge, address: searchAddress, sex: searchSex} = this.state.searchInfo;
    let filterRes = this.state.allDataSource.filter(
      ({name, age, address, sex}) => {
        return (!searchName || name.includes(searchName)) && (!searchAge || age == searchAge) && (!searchAddress || address.includes(searchAddress)) && (!searchSex || sex === searchSex)
      });
    this.setState({
      dataSource: filterRes,
    });
  }

  handleClear = () => {
    this.setState({
      dataSource: this.state.allDataSource,
      searchInfo: [],
    });
  }

  handleEdit = (newItem) => {
    let allDataSource = [...this.state.allDataSource];
    let index = allDataSource.findIndex(({key}) => key === newItem["key"]);
    index > -1 && (allDataSource[index] = newItem);
    this.setState({
      allDataSource: allDataSource,
    });
    this.handleSearch();
  }

  handleDelete = (delKey) => {
    // ???跟编辑不一样
    let dataSource = [...this.state.dataSource];
    let index = dataSource.findIndex(({key}) => key === delKey);
    index > -1 && (dataSource.splice(index, 1));
    let allDataSource = [...this.state.allDataSource];
    index = allDataSource.findIndex(({key}) => key === delKey);
    index > -1 && (allDataSource.splice(index, 1));
    this.setState({
      dataSource: dataSource,
      allDataSource: allDataSource,
    });
  }

  render() {
    return (<>
      <Search
        fields={this.props.columns}
        onSearch={this.searchInit}
        onClear={this.handleClear}
      />
      <br/>
      <TableList
        dataSource={this.state.dataSource}
        columns={this.props.columns}
        loading={this.state.loading}
        onEdit={this.handleEdit}
        onDelete={this.handleDelete}
      />
    </>);
  }
}
