import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Menu, Dropdown, Carousel, Card, Tabs } from 'antd';
import { FormattedMessage, formatMessage } from 'umi/locale';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import PageLoading from '@/components/PageLoading';
import HeaderBox from '@/components/HeaderBox';
import corporateTop from '../../assets/corporateTop.png';

const TabPane = Tabs.TabPane;

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))
class Corporate extends Component {
  state = {
    salesType: '',
  };

  render() {
    console.log(this.props.match.params)
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
            <img style={{ width: '100%', height: 'auto' }} src={corporateTop} />
          </Suspense>
        </div>
        <Tabs defaultActiveKey={this.props.location.pathname.substr(11, 100)} onChange={callback}>
          <TabPane tab="Hakkımızda" key="about">
            <HeaderBox header={formatMessage({id: 'about'})} />
            <Suspense fallback={<PageLoading />}>
              <Row gutter={24}>
                <Col {...fullPageTabCol}>
                  <Card>
                    <Meta
                      title={<FormattedMessage id="aboutus_init" />}
                      description={formatMessage({ id: 'aboutus_text' })}
                    />
                    <div style={{ marginTop: '10px' }}>
                      <FormattedMessage id="aboutus_footer1" />
                    </div>
                    <div style={{ marginTop: '10px' }}>
                      <FormattedMessage id="aboutus_footer2" />
                    </div>
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

export default Corporate;
