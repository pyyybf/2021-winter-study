/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

import React, {useState} from 'react';
import {render} from 'react-dom';
import {ConfigProvider, DatePicker, message, Alert, Button} from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
//import 'antd/dist/antd.dark.css';
import './index.css';

moment.locale('zh-cn');

const App = () => {
    const [date, setDate] = useState(null);
    const handleChange = value => {
        message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
        setDate(value);
    };
    return (
        <ConfigProvider locale={zhCN}>
            <div style={{width: 400, margin: '100px auto'}}>
                <DatePicker style={{width: '100%'}} onChange={handleChange}/>
                <div style={{marginTop: 16}}>
                    <Alert message="当前日期" description={date ? date.format('YYYY年MM月DD日') : '未选择'}/>
                </div>
                <Button type="primary">Button-primary</Button>
                <Button>Button-default</Button>
                <Button type="primary" danger>Button-danger</Button>
            </div>
        </ConfigProvider>
    );
};

render(<App/>, document.getElementById('root'));