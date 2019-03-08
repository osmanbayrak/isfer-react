import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Menu, Dropdown, Carousel, Card, Tabs } from 'antd';
import { FormattedMessage, formatMessage } from 'umi/locale';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import HeaderBox from '@/components/HeaderBox';
import all from '../../assets/all2.jpg';
import kurumsaljpg from '../../assets/kurumsal.jpg';
import orderImg from '../../assets/order2.png';
import data from '../../data';

const TabPane = Tabs.TabPane;

@connect(({ chart }) => ({
  chart
}))
class Cart extends Component {
  state = {
    salesType: '',
  };

  render() {
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

    let my_cart = JSON.parse(localStorage.getItem('cart'))
    let products = data.products;

    function callback(key) {
      console.log(key);
    }
    return (
      <GridContent>
        <div style={{ margin: '-24px -24px 0', marginTop: '-25px' }}>
          <Suspense fallback={null}>
            <img style={{ width: '100%', height: 'auto' }} src={orderImg} />
          </Suspense>
        </div>
        <HeaderBox header={formatMessage({id: 'cart'})} />
        <Tabs defaultActiveKey="cart" onChange={callback}>
          <TabPane tab={formatMessage({id: 'cart'})} key="cart">
            <Row gutter={24}>
              <Col {...halfPageTabCol}>
                <Card
                  title="Faaliyer İsmi blabla"
                  extra={<a href="#">More</a>}
                  cover={<img alt="uzunmamuller" src={all} />}
                >
                  <Meta
                    title={<FormattedMessage id="faaliyet1_title" />}
                    description={formatMessage({ id: 'faaliyet1_desc' })}
                  />
                </Card>
              </Col>
              <Col {...halfPageTabCol}>
                <Card
                  title="Faaliyer İsmi blabla"
                  extra={<a href="#">More</a>}
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
          <TabPane tab={formatMessage({id: 'list_appearence'})} key="list">
            <Row gutter={24}>
              <Col {...halfPageTabCol}>
                <Card
                  title="Faaliyer İsmi blabla"
                  extra={<a href="#">More</a>}
                  cover={<img alt="uzunmamuller" src={all} />}
                >
                  <Meta
                    title={<FormattedMessage id="faaliyet1_title" />}
                    description={formatMessage({ id: 'faaliyet1_desc' })}
                  />
                </Card>
              </Col>
              <Col {...halfPageTabCol}>
                <Card
                  title="Faaliyer İsmi blabla"
                  extra={<a href="#">More</a>}
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
