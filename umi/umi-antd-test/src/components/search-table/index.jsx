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

  loadingWarp = (fn, info) => {
    return new Promise((resolve) => {
      this.setState({
        loading: true,
      });
      let res = fn();
      resolve(fn);
    }).finally(() => {
      this.setState({
        loading: false,
      })
    });
  }

  searchInit = (searchInfo) => {
    this.loadingWarp(this.handleSearch(searchInfo));
  }

  handleSearch = (searchInfo) => {
    let {name: searchName, age: searchAge, address: searchAddress, sex: searchSex} = searchInfo;
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
    });
  }

  handleEdit = (newItem) => {
    let tmpDataSource = [...this.state.dataSource];
    let index = tmpDataSource.findIndex(({key}) => key === newItem["key"]);
    if (index > -1) {
      tmpDataSource[index] = newItem;
    }
    let tmpAllDataSource = [...this.state.allDataSource];
    index = tmpAllDataSource.findIndex(({key}) => key === newItem["key"]);
    if (index > -1) {
      tmpAllDataSource[newItem["key"]] = newItem;
    }
    this.setState({
      dataSource: tmpDataSource,
      allDataSource: tmpAllDataSource,
    });
  }

  handleDelete = (delKey) => {
    let tmpDataSource = [...this.state.dataSource];
    let index = tmpDataSource.findIndex(({key}) => key === delKey);
    if (index > -1) {
      tmpDataSource.splice(index, 1);
    }
    let tmpAllDataSource = [...this.state.allDataSource];
    index = tmpAllDataSource.findIndex(({key}) => key === delKey);
    if (index > -1) {
      tmpAllDataSource.splice(index, 1);
    }
    this.setState({
      dataSource: tmpDataSource,
      allDataSource: tmpAllDataSource,
    });
  }

  render() {
    return (<>
      <Search
        fields={this.props.columns}
        onSearch={this.handleSearch}
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
