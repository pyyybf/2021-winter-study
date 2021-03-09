import React, {useState} from 'react';
import {Form, Row, Col, Input, Button} from 'antd';
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
            rules={[
              {
                required: false,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder"/>
          </Form.Item>
        </Col>,
      );
    }

    return children;
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
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
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
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
