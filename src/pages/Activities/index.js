import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Menu, Dropdown, Carousel, Card, Tabs } from 'antd';
import { FormattedMessage, formatMessage } from 'umi/locale';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import PageLoading from '@/components/PageLoading';
import HeaderBox from '@/components/HeaderBox';
import all from '../../assets/all2.jpg';
import uygulama1 from '../../assets/uygulama2.png';
import uygulama2 from '../../assets/kapi.png';
import kurumsaljpg from '../../assets/kurumsal.jpg';
import aboutus from '../../assets/aboutus.jpg';

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
        <div style={{ margin: '-24px -24px 0', marginTop: '-25px' }}>
          <Suspense fallback={null}>
            <img style={{ width: '100%', height: 'auto' }} src={kurumsaljpg} />
          </Suspense>
        </div>
        <Tabs defaultActiveKey={this.props.location.pathname.substr(12, 100)} onChange={callback}>
          <TabPane tab="Faaliyetler" key="production">
            <HeaderBox header={formatMessage({id: 'production'})} />
            <Suspense fallback={<PageLoading />}>
              <Row gutter={24}>
                <Col {...halfPageTabCol}>
                  <Card
                    title="Faaliyet İsmi blabla"
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
                    title="Faaliyet İsmi blabla"
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
                    title="Faaliyet İsmi blabla"
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
                    title="Faaliyet İsmi blabla"
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
            </Suspense>
          </TabPane>
          <TabPane tab="Uygulamalar" key="applications">
            <HeaderBox header={formatMessage({id: 'applications'})} />
            <Suspense fallback={<PageLoading />}>
              <Row gutter={24}>
                <Col {...halfPageTabCol}>
                  <Card
                    title="Ferforje Bahçe Kapısı"
                    extra={<a href="#">Daha fazla</a>}
                    cover={<img alt="ugyulama1" src={uygulama2} />}
                  >
                    <Meta
                      description={formatMessage({ id: 'uygulama_desc' })}
                    />
                  </Card>
                </Col>
                <Col {...halfPageTabCol}>
                  <Card
                    title="Ferforje Merdiven"
                    extra={<a href="#">Daha fazla</a>}
                    cover={<img alt="ugyulama2" src={uygulama1} />}
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
