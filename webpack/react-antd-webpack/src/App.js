import React from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom'
import Sider1 from '../components/sider/index'
import 'antd/dist/antd.less';

export default class AppRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HashRouter>
                <div id="wrapper">
                    <Route path="/" component={Sider1} />
                </div>
            </HashRouter>
        )
    }
}