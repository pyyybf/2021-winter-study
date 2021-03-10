import styles from './index.css';
import SearchTable from '../components/search-table/index.jsx';

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
    sex: '男',
  },
  {
    key: '2',
    name: '吴彦祖',
    age: 42,
    address: '西湖区湖底公园2号',
    sex: '男',
  },
  {
    key: '3',
    name: '张翰',
    age: 85,
    address: '西湖区湖面公园9号',
    sex: '男',
  },
  {
    key: '4',
    name: '周柯宇',
    age: 19,
    address: '西湖区湖底公园8号',
    sex: '男',
  },
  {
    key: '5',
    name: '潘越',
    age: 21,
    address: '姑苏区水仙弄17幢',
    sex: '女',
  },
  {
    key: '6',
    name: '王馨逸',
    age: 21,
    address: '湖底公园7号',
    sex: '女',
  },
  {
    key: '7',
    name: '张星特',
    age: 18,
    address: '西湖区湖底公园1号',
    sex: '男',
  },
  {
    key: '8',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    sex: '男',
  },
  {
    key: '9',
    name: '宋祖儿',
    age: 23,
    address: '西湖区湖底公园10号',
    sex: '女',
  },
  {
    key: '10',
    name: '关晓彤',
    age: 25,
    address: '西湖区湖底公园11号',
    sex: '女',
  },
  {
    key: '11',
    name: '何泓姗',
    age: 32,
    address: '西湖区湖底公园1号',
    sex: '女',
  },
  {
    key: '12',
    name: '迪丽热巴',
    age: 30,
    address: '西湖区湖面公园1号',
    sex: '女',
  },
  {
    key: '13',
    name: '杨幂',
    age: 32,
    address: '西湖区湖底公园1号',
    sex: '女',
  },
  {
    key: '14',
    name: '杨颖',
    age: 30,
    address: '西湖区湖底公园1号',
    sex: '女',
  },
  {
    key: '15',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
    sex: '男',
  },
  {
    key: '16',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    sex: '男',
  },
  {
    key: '17',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
    sex: '男',
  },
  {
    key: '18',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    sex: '男',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name, 'zh-CN'),
    editable: true,
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
    <div>
      <SearchTable
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
}
