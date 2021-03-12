import styles from './index.css';
import SearchTable from '../components/search-table/index.jsx';
import {Row, Col} from 'antd';

let nameList = ['胡彦斌', '胡彦祖', '吴彦祖', '周柯宇', '杨幂', '宋祖儿', '迪丽热巴', '何泓姗', '关晓彤', '张星特'];
let addrList = ['西湖区湖底公园1号', '湖底公园7号', '西湖区湖面公园1号', '西湖区湖底公园2号', '西湖区湖面公园9号', '姑苏区水仙弄17幢'];
var dataSource = Array.from(Array(100), (value, key) => ({
  key: key,
  name: nameList[Math.floor(nameList.length * Math.random())],
  address: addrList[Math.floor(addrList.length * Math.random())],
  age: Math.floor(40 * Math.random()),
  sex: Math.random() < 0.5 ? '男' : '女'
}));

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name, 'zh-CN'),
    editable: true,
    width: '20%'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    sorter: (a, b) => a.address.localeCompare(b.address, 'zh-CN'),
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    sorter: (a, b) => a.sex.localeCompare(b.sex, 'zh-CN'),
  },
];

export default function IndexPage() {
  return (
    <Row>
      <Col span={20} offset={2}>
        <br/>
        <SearchTable
          columns={columns}
          dataSource={dataSource}
        />
      </Col>
    </Row>
  );
}
