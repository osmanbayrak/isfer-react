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
import insaatdemiri2 from '../../assets/insaatdemiri2.png';
import kaynak from '../../assets/kaynak.png';
import boruveproiller from '../../assets/boruveprofiller.png';
import shr from '../../assets/shr.png';
import hrpsmall from '../../assets/hrpsmall.png';
import profil from '../../assets/profil.png';

const IntroduceRow = React.lazy(() => import('./IntroduceRow'));
const ActivitiesRow = React.lazy(() => import('./ActivitiesRow'));
const ProductionRow = React.lazy(() => import('./ProductionRow'));

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
        <div style={{ margin: '-24px -24px 0', marginTop: '-90px' }}>
          <Suspense fallback={null}>
            <Carousel autoplay arrows={true} draggable={true}>
              <div>
                <img src={profil} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div>
                <img src={shr} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div>
                <img src={boruveproiller} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div>
                <img src={insaatdemiri2} style={{ width: '100%', height: 'auto' }} />
              </div>
            </Carousel>
          </Suspense>
        </div>
        <HeaderBox header={'Ürün Grupları'} />
        <Suspense fallback={<PageLoading />}>
          <IntroduceRow loading={loading} />
        </Suspense>
        <HeaderBox header={'Faaliyetler'} />
        <Suspense fallback={<PageLoading />}>
          <ActivitiesRow loading={loading} />
        </Suspense>
        <HeaderBox header={'Üretim'} />
        <Suspense fallback={<PageLoading />}>
          <ProductionRow loading={loading} />
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
