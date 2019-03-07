import React, { Component, Suspense, PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Menu, Dropdown, Card, Tabs, Form } from 'antd';
import { FormattedMessage, formatMessage } from 'umi/locale';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import PageLoading from '@/components/PageLoading';

const TabPane = Tabs.TabPane;

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))

@Form.create()
class ProductTabs extends PureComponent {
  state = {
    product: this.props.productName,
  };

  importAll =(r)=> {
    let imagees = {};
    r.keys().map((item, index) => { imagees[item.replace('./', '')] = r(item); });
    return imagees;
  }

  callback = (key) => {
    this.setState({product: key})
  }

  render() {
    let images = this.importAll(require.context('../../assets/', false, /\.(png|jpe?g|svg)$/));
    const { chart, loading } = this.props;
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
    let currentProduct = this.state.product

    return (
        <div>
            <Tabs defaultActiveKey={this.state.product} onChange={this.callback}>
                {this.props.products.map((product)=> {
                    {currentProduct = this.state.product.length > 1 ? this.state.product : product}
                    return (
                        <TabPane tab={formatMessage({id: currentProduct})} key={currentProduct}>
                            <Row>
                                <Col {...halfPageTabCol}>
                                    <Card title={formatMessage({id: currentProduct})} extra={<a href="#">More</a>} cover={ <img alt={currentProduct} src={images[`${currentProduct}.png`]} /> }>
                                        <Meta
                                        title={<FormattedMessage id="description" />}
                                        description={formatMessage({ id: `${currentProduct}_desc` })}
                                        />
                                    </Card>
                                </Col>
                                <Col {...{ xs: { span: 24, offset: 0 }, sm: { span: 24, offset: 0 }, md: { span: 11, offset: 2 }, lg: { span: 11, offset: 2 }, xl: { span: 11, offset: 2 }, style: { marginBottom: 24}}}>
                                    <Card title={formatMessage({id: currentProduct})} extra={<a href="#">More</a>} cover={ <img alt={currentProduct} src={images[`${currentProduct}.jpg`]} /> }>
                                        <Meta
                                        title={<FormattedMessage id="usage" />}
                                        description={formatMessage({ id: `${currentProduct}_usage` })}
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
