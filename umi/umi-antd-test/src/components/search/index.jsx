import React, {useState} from 'react';
import {Form, Row, Col, Input, Button, Popconfirm} from 'antd';
import {DownOutlined, UpOutlined} from '@ant-design/icons';

const AdvancedSearchForm = (props) => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    const count = expand ? props.fields.length : 3;
    const children = [];

    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={8} key={i}>
          <Form.Item
            name={props.fields[i]["key"]}
            label={props.fields[i]["title"]}
          >
            <Input placeholder={"请输入" + props.fields[i]["title"]} allowClear/>
          </Form.Item>
        </Col>,
      );
    }

    return children;
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    props.onSearch(values);
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col
          span={24}
          style={{
            textAlign: 'right',
          }}
        >
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Popconfirm title="Sure to clear?"
                      onConfirm={() => {
                        form.resetFields();
                        props.onClear();
                      }}>
            <Button
              style={{
                margin: '0 8px',
              }}
            >
              Clear
            </Button>
          </Popconfirm>
          <a
            style={{
              fontSize: 12,
            }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined/> : <DownOutlined/>} Collapse
          </a>
        </Col>
      </Row>
    </Form>
  );
};

export default AdvancedSearchForm;
