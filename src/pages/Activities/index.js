import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Menu, Dropdown, Carousel, Card, Tabs } from 'antd';
import { FormattedMessage, formatMessage } from 'umi/locale';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import PageLoading from '@/components/PageLoading';
import HeaderBox from '@/components/HeaderBox';
import uygulama1 from '../../assets/uygulama1.png';
import uygulama2 from '../../assets/uygulama2.png';
import production1 from '../../assets/production1.png';
import production2 from '../../assets/production2.png';
import production3 from '../../assets/production3.png';
import production4 from '../../assets/production4.png';
import activityTop from '../../assets/activityTop.png';

const TabPane = Tabs.TabPane;

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))
class Activities extends Component {
  state = {
    salesType: '',
  };

  render() {
    const { chart, loading } = this.props;

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

    return (
      <GridContent>
        <div style={{ margin: '-24px -24px 0', marginTop: '-90px' }}>
          <Suspense fallback={null}>
            <img style={{ width: '100%', height: 'auto' }} src={activityTop} />
          </Suspense>
        </div>
        <Tabs defaultActiveKey={this.props.location.pathname.substr(12, 100)} onChange={callback}>
          <TabPane tab="ÜRETİM" key="production">
            <HeaderBox header={formatMessage({id: 'production'})} />
            <Suspense fallback={<PageLoading />}>
              <Row gutter={24}>
                <Col {...halfPageTabCol}>
                  <Card
                    title="Üretim 1"
                    extra={<a href="#">More</a>}
                    cover={<img alt="production" src={production1} />}
                  >
                    <Meta
                      title={<FormattedMessage id="production_title1" />}
                      description={formatMessage({ id: 'production_description1' })}
                    />
                  </Card>
                </Col>
                <Col {...halfPageTabCol}>
                  <Card
                    title="Üretim 2"
                    extra={<a href="#">More</a>}
                    cover={<img alt="production" src={production2} />}
                  >
                    <Meta
                      title={<FormattedMessage id="production_title2" />}
                      description={formatMessage({ id: 'production_description2' })}
                    />
                  </Card>
                </Col>
                <Col {...halfPageTabCol}>
                  <Card
                    title="Üretim 3"
                    extra={<a href="#">More</a>}
                    cover={<img alt="production" src={production3} />}
                  >
                    <Meta
                      title={<FormattedMessage id="production_title3" />}
                      description={formatMessage({ id: 'production_description3' })}
                    />
                  </Card>
                </Col>
                <Col {...halfPageTabCol}>
                  <Card
                    title="Üretim 4"
                    extra={<a href="#">More</a>}
                    cover={<img alt="production" src={production4} />}
                  >
                    <Meta
                      title={<FormattedMessage id="production_title4" />}
                      description={formatMessage({ id: 'production_description4' })}
                    />
                  </Card>
                </Col>
              </Row>
            </Suspense>
          </TabPane>
          <TabPane tab="UYGULAMALAR" key="applications">
            <HeaderBox header={formatMessage({id: 'applications'})} />
            <Suspense fallback={<PageLoading />}>
              <Row gutter={24}>
                <Col {...halfPageTabCol}>
                  <Card
                    title="Ferforje 1"
                    extra={<a href="#">Daha fazla</a>}
                    cover={<img alt="ugyulama1" src={uygulama1} />}
                  >
                    <Meta
                      description={formatMessage({ id: 'uygulama_desc1' })}
                    />
                  </Card>
                </Col>
                <Col {...halfPageTabCol}>
                  <Card
                    title="Ferforje 2"
                    extra={<a href="#">Daha fazla</a>}
                    cover={<img alt="ugyulama2" src={uygulama2} />}
                  >
                    <Meta
                      description={formatMessage({ id: 'uygulama_desc2' })}
                    />
                  </Card>
                </Col>
              </Row>
            </Suspense>
          </TabPane>
        </Tabs>
      </GridContent>
    );
  }
}

export default Activities;
