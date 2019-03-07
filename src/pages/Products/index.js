import React, { Component, Suspense, PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Menu, Dropdown, Carousel, Card, Tabs, Form } from 'antd';
import { FormattedMessage, formatMessage } from 'umi/locale';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import HeaderBox from '@/components/HeaderBox';
import PageLoading from '@/components/PageLoading';
import ProductTabs from './ProductTabs';
import all from '../../assets/all2.jpg';

const TabPane = Tabs.TabPane;

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))

@Form.create()
class Products extends PureComponent {
  state = {
    productName: '',
    productCategory: '',
    products: [],
  };

  detectProducts = () => {
    let url = this.props.location.pathname;
    if (url.indexOf('uzunmamuller') > -1) {
      this.setState({
        productName: url.substr(23,100),
        productCategory: 'uzunmamuller',
        products: ['insaatdemiri', 'celikhasir', 'filmasin', 'inp', 'hea', 'kosebent', 'lama', 'karedd', 'dyd', 't-demiri', 'transmisyon']
      })
    } else if (url.indexOf('yassimamuller') > -1) {
      this.setState({
        productName: url.substr(22,100),
        productCategory: 'yassimamuller',
        products: ['shr', 'shl', 'dkp', 'hrp', 'gr', 'bs', 'bgds', 'tos', 'gds']
      })
    } else if (url.indexOf('profiller') > -1) {
      this.setState({
        productName: url.substr(19,100),
        productCategory: 'profiller',
        products: ['kdkp', 'gkpb', 'sb', 'sgb', 'ssb', 'ccb']
      })
    }
  }

  componentDidMount() {
    this.detectProducts()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.detectProducts()
    }
  }

  render() {
    let url = this.props.location.pathname;
    const { chart, loading } = this.props;
    const { Meta } = Card;

    function callback(key) {
      console.log(key);
    }

    return (
      <GridContent>
        <div style={{ margin: '-24px -24px 0', marginTop: '-15px' }}>
          <Suspense fallback={null}>
            <img style={{ width: '100%', height: 'auto' }} src={all} />
          </Suspense>
        </div>
        <HeaderBox header={this.state.productCategory} />
        {this.state.products.length > 0 ? <ProductTabs productCategory={this.state.productCategory} productName={this.state.productName} products={this.state.products} /> : undefined}
      </GridContent>
    );
  }
}

export default Products;
