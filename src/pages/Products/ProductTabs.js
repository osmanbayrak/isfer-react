import React, { Component, Suspense, PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Mec, Dropdown, Card, Tabs, Form, Button, Input, notification } from 'antd';
import { FormattedMessage, formatMessage } from 'umi/locale';
import GridContent from '@/components/PageHeaderWrapper/GridContent';

const TabPane = Tabs.TabPane;

@connect(({ chart}) => ({
  chart,
}))

@Form.create()
class ProductTabs extends PureComponent {
  state = {
    product: this.props.productName,
    willShop: {}
  };

  importAll =(r)=> {
    let imagees = {};
    r.keys().map((item, index) => { imagees[item.replace('./', '')] = r(item); });
    return imagees;
  }

  callback = (key) => {
    this.setState({product: key})
  }

  addProduct = (product, weight) => {
    this.props.form.validateFields(err => {
      if (!err) {
        let cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []
        let firstTimeAdd = true
        cart.map((obj)=> {
          let index = cart.indexOf(obj)
          if (obj.name == product) {
            firstTimeAdd = false;
            cart[index].weight = parseInt(cart[index].weight) + parseInt(weight)
          }
        })
        if (firstTimeAdd) {
          cart.push({weight: weight, name: product})
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        this.setState({willShop: Object.assign({}, this.state.willShop, {[product]: ''})}, ()=> {this.props.form.resetFields()})
        notification['success']({
          duration: 6,
          message: formatMessage({ id: 'success'}),
          description: formatMessage({ id: 'add_cart_success'}),
        });
      }
    })
  }

  render() {
    let images = this.importAll(require.context('../../assets/', false, /\.(png|jpe?g|svg)$/));
    const halfPageTabCol = {
        xs: { span: 24, offset: 0 },
        sm: { span: 24, offset: 0 },
        md: { span: 11, offset: 0 },
        lg: { span: 11, offset: 0 },
        xl: { span: 11, offset: 0 },
      style: { marginBottom: 24},
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
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;

    const FormItemLayout = {
      labelCol: {
        xs: { span: 10 },
        sm: { span: 7, offset: 8 },
      },
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 9 },
        md: { span: 8 }
      },
      style: {marginRight: '0'}
    };

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };

    return (
        <div>
            <Tabs defaultActiveKey={this.state.product} onChange={this.callback}>
                {this.props.products.map((product)=> {
                    return (
                        <TabPane tab={formatMessage({id: product})} key={product}>
                            <Row>
                                <Col {...halfPageTabCol}>
                                    <Card title={formatMessage({id: product})}
                                      /*extra={
                                       <Col>
                                          <Form layout="inline" hideRequiredMark>
                                            <Form.Item {...FormItemLayout} label={<FormattedMessage id="weight" />}>
                                                {getFieldDecorator('kg', {
                                                  iniyialValue: this.state.willShop[product],
                                                })(<Input type="number" placeholder="Kg" onChange={(e)=> {this.setState({willShop: Object.assign({}, this.state.willShop, {[product]: e.target.value})})}} />)}
                                              </Form.Item>
                                              <Form.Item>
                                                <Icon type="caret-right" />
                                              </Form.Item>
                                              <Form.Item {...submitFormLayout}>
                                                <Button type="primary" onClick={()=>this.addProduct(product, this.state.willShop[product])}>
                                                  {formatMessage({id: 'add_to_cart'})}<Icon type="plus" />
                                                </Button>
                                              </Form.Item>
                                          </Form>
                                       </Col>
                                    } */
                                     cover={ <img alt={product} src={images[`${product}.png`]} /> }>
                                        <Meta
                                        title={<FormattedMessage id="description" />}
                                        description={formatMessage({ id: `${product}_desc` })}
                                        />
                                    </Card>
                                </Col>
                                <Col {...{ xs: { span: 24, offset: 0 }, sm: { span: 24, offset: 0 }, md: { span: 11, offset: 2 }, lg: { span: 11, offset: 2 }, xl: { span: 11, offset: 2 }, style: { marginBottom: 24}}}>
                                    <Card title={formatMessage({id: 'usage'})} extra={<a href="#">Ağırlık Hesapla<Icon type="tool" /></a>} cover={ <img alt={product} src={images[`${product}2.png`]} /> }>
                                        <Meta
                                        description={formatMessage({ id: `${product}_usage` })}
                                        />
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane> 
                    )
                })}
            </Tabs>
        </div>
    );
  }
}

export default ProductTabs;
