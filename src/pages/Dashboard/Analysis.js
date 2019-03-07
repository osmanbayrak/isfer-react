import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Menu, Dropdown, Carousel, Card } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import { getTimeDistance } from '@/utils/utils';
import HeaderBox from '@/components/HeaderBox';
import styles from './Analysis.less';
import PageLoading from '@/components/PageLoading';
import { AsyncLoadBizCharts } from '@/components/Charts/AsyncLoadBizCharts';
import insaat from '../../assets/insaatdemiri.png';
import karisikdemir from '../../assets/karisikdemir.png';
import kaynak from '../../assets/kaynak.png';
import yassi from '../../assets/yassi.png';
import { InstanceChainMap } from 'lodash-decorators/factory';

const IntroduceRow = React.lazy(() => import('./IntroduceRow'));

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))
class Analysis extends Component {
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

    return (
      <GridContent>
        <div style={{ margin: '-24px -24px 0', marginTop: '-15px' }}>
          <Suspense fallback={null}>
            <Carousel autoplay arrows={true} draggable={true}>
              <div>
                <img src={yassi} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div>
                <img src={karisikdemir} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div>
                <img src={insaat} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div>
                <img src={kaynak} style={{ width: '100%', height: 'auto' }} />
              </div>
            </Carousel>
          </Suspense>
        </div>
        <HeaderBox header={'Ürün Grupları'} />
        <Suspense fallback={<PageLoading />}>
          <IntroduceRow loading={loading} />
        </Suspense>
      </GridContent>
    );
  }
}

export default props => (
  <AsyncLoadBizCharts>
    <Analysis {...props} />
  </AsyncLoadBizCharts>
);
