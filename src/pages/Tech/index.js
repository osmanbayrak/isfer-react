import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Menu, Dropdown, Carousel, Card, Tabs, Button, Form, Input } from 'antd';
import { FormattedMessage, formatMessage } from 'umi/locale';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import PageLoading from '@/components/PageLoading';
import HeaderBox from '@/components/HeaderBox';
import all from '../../assets/all2.jpg';
import techpng from '../../assets/techinfo.jpg';
import techTop from '../../assets/techTop.png';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))

@Form.create()
class Tech extends Component {
  state = {
    url: this.props.location.pathname,
    category: this.props.location.pathname.substring(21, 100),
    section: this.props.location.pathname.substring(11, 20),
    lama: {},
    yassimamuller: {},
    profiller: {}
  };

  render() {
    const { chart, loading, form: { getFieldDecorator, getFieldValue } } = this.props;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 10 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
        md: { span: 14 },
      },
    };
    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 6 },
      },
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
    let category = this.state.category;
    function callback(key) { console.log(''); }
    return (
      <GridContent>
        <div style={{ margin: '-24px -24px 0', marginTop: '-90px' }}>
          <img style={{ width: '100%', height: 'auto' }} src={techTop} />
        </div>
        <Tabs defaultActiveKey={this.state.section} onChange={callback}>
          <TabPane forceRender={true} tab="Ağırlık Hesaplama" key="calculate">
            <HeaderBox header={formatMessage({id: this.state.section})} />
            <Row gutter={24}>
              <Col {...fullPageTabCol}>
                <Card title={formatMessage({id: category})}>
                  <Form layout='inline'>
                    <FormItem {...formItemLayout} label={formatMessage({id: 'en'})}>
                      {getFieldDecorator('en')(
                        <Input type="number" onChange={(e)=> this.setState({en: e.target.value})} placeholder={formatMessage({ id: 'en' })} />
                      )}
                    </FormItem>
                    <FormItem {...formItemLayout} label={formatMessage({id: 'boy'})}>
                      {getFieldDecorator('boy')(
                        <Input type="number" onChange={(e)=> this.setState({uzunluk: e.target.value})} placeholder={formatMessage({ id: 'boy' })} />
                      )}
                    </FormItem>
                    <FormItem {...formItemLayout} label={formatMessage({id: 'et'})}>
                      {getFieldDecorator('et')(
                        <Input type="number" onChange={(e)=> this.setState({et: e.target.value})} placeholder={formatMessage({ id: 'et' })} />
                      )}
                    </FormItem>
                    <FormItem {...submitFormLayout}>
                      <Button type="primary" onClick={()=> this.calculate()}>
                        <FormattedMessage id="hesapla" /> <Icon type="tool" />
                      </Button>
                    </FormItem>
                  </Form>
                  {this.state[category].result > 0 ? <Row  style={{marginTop: '16px'}} gutter={24}>
                    <Col {...{xs: {span: 24}, sm: {span: 4, offset: 1}}}>
                        <span>
                          Result:
                        </span>
                    </Col>
                    <Col>
                        <span>
                          {this.state.category.result}
                        </span>
                    </Col>
                  </Row>: null}
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane forceRender={true} tab="Kalite Belgeleri" key="certifica">
            <HeaderBox header={formatMessage({id: 'activities'})} />
            <Row gutter={24}>
              <Col {...fullPageTabCol}>
                <Card title={this.state.category} cover={<img alt="calcpng" src={all} />}>
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

export default Tech;
