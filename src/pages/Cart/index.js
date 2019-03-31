import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Menu, Dropdown, Carousel, Card, Tabs, Transfer, Button, Radio, Tooltip, Form, Input, Select } from 'antd';
import { FormattedMessage, formatMessage } from 'umi/locale';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import HeaderBox from '@/components/HeaderBox';
import all from '../../assets/all2.jpg';
import orderImg from '../../assets/order2.png';
import data from '../../data';
import styles from './index.less';
import cartTop from '../../assets/cartTop.png';

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;
const TabPane = Tabs.TabPane;

@connect(({ chart }) => ({
  chart
}))

@Form.create()
class Cart extends Component {
  state = {
    products: data.products,
    targetKeys: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [],
    extra: ''
  };

  handleChange = (targetKeys) => {
    this.setState({ targetKeys }, ()=> localStorage.setItem('cart', JSON.stringify(targetKeys)));
  }

  order = () => {
    let cart_items =  JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
    let prods = data.products;
    let body = 'Merhaba. Aşağıda belirttiğim ürünleri sipariş etmek istiyorum;                                                                                                                                                                       ';
    cart_items.map((element) => {
      prods.map((item) => {
        if (parseInt(element) == prods.indexOf(item)) {
          body = `${body} ${formatMessage({ id: item.name })}, `
        }
      })
    });
    body = `${body}                                                                                                                                                                                                                     ${this.state.extra}`
    window.location.href = (`mailto:omerfarukpolat@gmail.com?subject=Demir Siparişi&body=${body}`);
  }

  render() {
    let prods = data.products;
    let cart_items = this.state.targetKeys;
    cart_items.map((element) => {
      let index_element = cart_items.indexOf(element)
      prods.map((item) => {
        if (element.name == item.name) {
          let item_index = prods.indexOf(item)
          cart_items[index_element] = (item_index+1).toString()
        }
      })
    });
    const { form: { getFieldDecorator, getFieldValue } } = this.props;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
        md: { span: 18 },
      },
    };
    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 6 },
      },
    };
    const quarterPage = {
      xs: 24,
      sm: 24,
      md: 8,
      lg: 8,
      xl: 8,
      style: { marginBottom: 24 },
    };
    const oneaAndhalfPage = {
      xs: 24,
      sm: 24,
      md: 16,
      lg: 16,
      xl: 16,
      style: { marginBottom: 24 },
    };
    const fullPageTabCol = {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 24,
      xl: 24,
      style: { marginBottom: 24 },
    };
    const { Meta } = Card;

    return (
      <GridContent>
        <div style={{ margin: '-24px -24px 0', marginTop: '-90px' }}>
          <Suspense fallback={null}>
            <img style={{ width: '100%', height: 'auto' }} src={cartTop} />
          </Suspense>
        </div>
        <HeaderBox header={formatMessage({id: 'cart'})} />
        <Tabs defaultActiveKey="cart">
          <TabPane tab={formatMessage({id: 'cart'})} key="cart">
            <Row gutter={24}>
              <Col {...oneaAndhalfPage}>
                <Card
                  title={formatMessage({id: 'edit_cart'})}
                  extra={
                    <Tooltip title={formatMessage({ id: 'cart_edit_info' })}>
                      <Icon type="question-circle" theme="twoTone" />
                    </Tooltip>
                  }
                >
                <Transfer
                  dataSource={this.state.products}
                  showSearch
                  titles={[<span style={{color: 'red', fontWeight: 'bolder'}}>{formatMessage({id: 'products'})}</span>, <span style={{color: 'red', fontWeight: 'bolder'}}>{formatMessage({id: 'cart'})}</span>]}
                  listStyle={{ width: 350, height: 300, }}
                  operations={['Ekle', 'Çıkar']}
                  targetKeys={cart_items}
                  onChange={this.handleChange}
                  render={item => `${formatMessage({id: item.name})}-${item.weight ? item.weight : 'KG?'}`}
                />
                </Card>
              </Col>
              <Col {...quarterPage}>
                <Card title="Sipariş" extra={
                  <Tooltip title={formatMessage({ id: 'order_info' })}>
                      <Icon type="question-circle" theme="twoTone" />
                  </Tooltip>
                }>
                  <Form onSubmit={this.handleSubmit} style={{ marginTop: 8 }}> 
                    <FormItem {...formItemLayout} label={formatMessage({id: 'extra_description'})}>
                      {getFieldDecorator('extra')(
                        <TextArea onChange={(e)=> this.setState({extra: e.target.value})} rows={4} placeholder={formatMessage({ id: 'extra_description_ph' })} />
                      )}
                    </FormItem>
                    <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
                      <Button type="primary" onClick={()=> this.order()}>
                        <FormattedMessage id="Sepeti Onayla" /> <Icon type="mail" />
                      </Button>
                    </FormItem>
                  </Form>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab={formatMessage({id: 'list_appearence'})} key="list">
            <Row gutter={24}>
              <Col {...oneaAndhalfPage}>
                <Card
                  title="Sepetim"
                  extra={
                  <Tooltip title={formatMessage({ id: 'order_info' })}>
                      <Icon type="question-circle" theme="twoTone" />
                  </Tooltip>}
                  cover={<img alt="uzunmamuller" src={all} />}
                >
                  <Meta
                    title={<FormattedMessage id="faaliyet1_title" />}
                    description={formatMessage({ id: 'faaliyet1_desc' })}
                  />
                </Card>
              </Col>
              <Col {...quarterPage}>
                <Card
                  title="Sipariş Onayı"
                  extra={
                    <Tooltip title={formatMessage({ id: 'order_info' })}>
                      <Icon type="question-circle" theme="twoTone" />
                    </Tooltip>
                  }
                  cover={<img alt="uzunmamuller" src={all} />}
                >
                  <Meta
                    title={<FormattedMessage id="faaliyet1_title" />}
                    description={formatMessage({ id: 'faaliyet1_desc' })}
                  />
                </Card>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </GridContent>
    );
  }
}

export default Cart;
