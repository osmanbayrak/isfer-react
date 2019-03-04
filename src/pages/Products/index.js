import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Menu, Dropdown, Carousel, Card, Tabs } from 'antd';
import { FormattedMessage, formatMessage } from 'umi/locale';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import PageLoading from '@/components/PageLoading';
import insaat from '../../assets/insaat.png';
import karisikdemir from '../../assets/karisikdemir.png';
import kaynak from '../../assets/kaynak.png';
import yassi from '../../assets/yassi.png';
import all from '../../assets/all2.jpg';
import kurumsaljpg from '../../assets/kurumsal.jpg';
import uzunmamuller from '../../assets/uzunmamuller.jpg';

const TabPane = Tabs.TabPane;

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))
class Products extends Component {
  state = {
    salesType: '',
  };

  render() {
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

    function callback(key) {
      console.log(key);
    }
    console.log(this.props.match.path.substr(20, 100));

    return (
      <GridContent>
        <div style={{ margin: '-24px -24px 0', marginTop: '-15px' }}>
          <Suspense fallback={null}>
            <img style={{ width: '100%', height: 'auto' }} src={all} />
          </Suspense>
        </div>
        {this.props.match.path.substr(10, 12) == 'uzunmamuller' ? (
          <Tabs defaultActiveKey={this.props.match.path.substr(24, 100)} onChange={callback}>
            <TabPane tab="Uzun demir" key="activities">
              <Row>
                <Col {...midColResponsiveProps}>
                  <Card
                    style={{
                      marginTop: '50px',
                      textAlign: 'center',
                      backgroundColor: '#2d577f',
                      color: 'white',
                    }}
                    bodyStyle={{ padding: '13px' }}
                  >
                    Faaliyetler
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col {...halfPageTabCol}>
                  <div>asdasd</div>
                </Col>
                <Col {...halfPageTabCol}>
                  <div>asdasd</div>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        ) : null}
        {this.props.match.path.substr(10, 13) == 'yassimamuller' ? (
          <Tabs defaultActiveKey={this.props.match.path.substr(25, 100)} onChange={callback}>
            <TabPane tab="Yassı Boru" key="activities">
              <Row>
                <Col {...midColResponsiveProps}>
                  <Card
                    style={{
                      marginTop: '50px',
                      textAlign: 'center',
                      backgroundColor: '#2d577f',
                      color: 'white',
                    }}
                    bodyStyle={{ padding: '13px' }}
                  >
                    Faaliyetler
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col {...halfPageTabCol}>
                  <div>asdasd</div>
                </Col>
                <Col {...halfPageTabCol}>
                  <div>asdasd</div>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        ) : null}
        {this.props.match.path.substr(10, 9) == 'profiller' ? (
          <Tabs defaultActiveKey={this.props.match.path.substr(20, 100)} onChange={callback}>
            <TabPane tab="Yassı Boru" key="activities">
              <Row>
                <Col {...midColResponsiveProps}>
                  <Card
                    style={{
                      marginTop: '50px',
                      textAlign: 'center',
                      backgroundColor: '#2d577f',
                      color: 'white',
                    }}
                    bodyStyle={{ padding: '13px' }}
                  >
                    Faaliyetler
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col {...halfPageTabCol}>
                  <div>asdasd</div>
                </Col>
                <Col {...halfPageTabCol}>
                  <div>asdasd</div>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        ) : null}
        {this.props.match.path.substr(10, 12) == 'dekoratifler' ? (
          <Tabs defaultActiveKey={this.props.match.path.substr(24, 100)} onChange={callback}>
            <TabPane tab="Yassı Boru" key="activities">
              <Row>
                <Col {...midColResponsiveProps}>
                  <Card
                    style={{
                      marginTop: '50px',
                      textAlign: 'center',
                      backgroundColor: '#2d577f',
                      color: 'white',
                    }}
                    bodyStyle={{ padding: '13px' }}
                  >
                    Faaliyetler
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col {...halfPageTabCol}>
                  <div>asdasd</div>
                </Col>
                <Col {...halfPageTabCol}>
                  <div>asdasd</div>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        ) : null}
      </GridContent>
    );
  }
}

export default Products;
