import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Menu, Dropdown, Carousel, Card } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import { getTimeDistance } from '@/utils/utils';
import HeaderBox from '@/components/HeaderBox';
import styles from './Analysis.less';
import PageLoading from '@/components/PageLoading';
import anasayfa1 from '../../assets/anasayfa1.png';
import anasayfa2 from '../../assets/anasayfa2.png';
import anasayfa3 from '../../assets/anasayfa3.png';
import anasayfa4 from '../../assets/anasayfa4.png';

const ProductsRow = React.lazy(() => import('./ProductsRow'));
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
                <img src={anasayfa1} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div>
                <img src={anasayfa2} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div>
                <img src={anasayfa3} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div>
                <img src={anasayfa4} style={{ width: '100%', height: 'auto' }} />
              </div>
            </Carousel>
          </Suspense>
        </div>
        <HeaderBox header={'ÜRÜN GRUPLARI'} />
        <Suspense fallback={<PageLoading />}>
          <ProductsRow loading={loading} />
        </Suspense>
        <HeaderBox header={'ÜRETİM'} />
        <Suspense fallback={<PageLoading />}>
          <ProductionRow loading={loading} />
        </Suspense>
        <HeaderBox header={'UYGULAMALAR'} />
        <Suspense fallback={<PageLoading />}>
          <ActivitiesRow loading={loading} />
        </Suspense>
      </GridContent>
    );
  }
}

export default props => (
  <Analysis {...props} />
);
