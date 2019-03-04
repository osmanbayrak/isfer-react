import React, { Component, Suspense, PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Menu, Dropdown, Card, Tabs, Form } from 'antd';
import { FormattedMessage, formatMessage } from 'umi/locale';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import PageLoading from '@/components/PageLoading';
import insaat from '../../assets/insaat.png';
import karisikdemir from '../../assets/karisikdemir.png';
import kaynak from '../../assets/kaynak.png';
import yassi from '../../assets/yassi.png';
import kurumsaljpg from '../../assets/kurumsal.jpg';
import uzunmamuller from '../../assets/uzunmamuller.jpg';

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

  callback = (key) => {
    this.setState({product: key})
  }

  render() {
    console.log(this.props, this.state)
    const { chart, loading } = this.props;

    const midColResponsiveProps = {
      xs: { span: 24, offset: 0 },
      sm: { span: 12, offset: 6 },
      md: { span: 10, offset: 7 },
      lg: { span: 10, offset: 7 },
      xl: { span: 8, offset: 8 },
      style: { marginBottom: 24 },
    };
    const halfPageTabCol = {
      xs: 24,
      sm: 24,
      md: 12,
      lg: 12,
      xl: 12,
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
        <div>
            <Row>
                <Col {...midColResponsiveProps}>
                    <Card
                        style={{
                        marginTop: '50px',
                        textAlign: 'center',
                        backgroundColor: '#2d577f',
                        color: 'white',
                        }}
                        bodyStyle={{ padding: '10px' }}
                    >
                        {formatMessage({id: this.props.productCategory.length > 0 ? this.props.productCategory : ' '})}
                    </Card>
                </Col>
            </Row>
            <Tabs defaultActiveKey={this.state.product} onChange={this.callback}>
                {this.props.products.map((product)=> {
                    return (
                        <TabPane tab={formatMessage({id: product})} key={product}>
                            <Row>
                                <Col {...fullPageTabCol}>
                                <div>{this.state.product.length > 1 ? this.state.product : product}</div>
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
