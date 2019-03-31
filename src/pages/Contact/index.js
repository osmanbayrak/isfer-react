import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Menu, Dropdown, Carousel, Card, Tabs, Form, Input, Button } from 'antd';
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
import contactTop from '../../assets/contactTop.png';

const FormItem = Form.Item;
const { TextArea } = Input;

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))

@Form.create()
class Contact extends Component {
  state = {
    salesType: '',
  };
  sendMessage = () => {
    let body = 'Merhaba. Aşağıda belirttiğim ürünleri sipariş etmek istiyorum;'
    window.location.href = (`mailto:omerfarukpolat@gmail.com?subject=Merhaba&body=${body}`);
  }

  render() {
    const { chart, loading } = this.props;
    const { form: { getFieldDecorator, getFieldValue } } = this.props;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
        md: { span: 18 },
      },
    };
    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 6 },
      },
    };

    const thirdPageTabCol = {
      xs: 24,
      sm: 24,
      md: 8,
      lg: 8,
      xl: 8,
      style: { marginBottom: 24 },
    };;
    const { Meta } = Card;

    return (
      <GridContent>
        <div style={{ margin: '-24px -24px 0', marginTop: '-90px' }}>
          <Suspense fallback={null}>
            <img style={{ width: '100%', height: 'auto' }} src={contactTop} />
          </Suspense>
        </div>
            <HeaderBox header={formatMessage({id: 'contact'})} />
            <Suspense fallback={<PageLoading />}>
              <Row gutter={24}>
                <Col {...thirdPageTabCol}>
                  <Card
                    title="İLETİŞİM FORMU"
                  >
                  <Form onSubmit={this.handleSubmit} style={{ marginTop: 8 }}> 
                    <FormItem {...formItemLayout} label={formatMessage({id: 'name'})}>
                      {getFieldDecorator('name')(
                        <Input />
                      )}
                    </FormItem>
                    <FormItem {...formItemLayout} label={formatMessage({id: 'email'})}>
                      {getFieldDecorator('email')(
                        <Input />
                      )}
                    </FormItem>
                    <FormItem {...formItemLayout} label={formatMessage({id: 'message'})}>
                      {getFieldDecorator('message')(
                        <TextArea onChange={(e)=> this.setState({extra: e.target.value})} rows={4} placeholder={formatMessage({ id: 'your_message' })} />
                      )}
                    </FormItem>
                    <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
                      <Button type="primary" onClick={()=> this.sendMessage()}>
                        <FormattedMessage id="GÖNDER" /> <Icon type="mail" />
                      </Button>
                    </FormItem>
                  </Form>
                  </Card>
                </Col>
                <Col {...thirdPageTabCol}>
                  <Card title="MERKEZ & FABRİKA">
                    <ul style={{paddingLeft: '5px', fontSize: '13px'}}>
                        <li style={{textAlign: 'left', padding: '15px'}}><Icon style={{marginRight: '10px'}} type="home" />  Sultan Orhan Mah. 1174/1 Sok. No:6 41400 Gebze/KOCAELİ</li>
                        <li style={{textAlign: 'left', padding: '15px'}}><Icon style={{marginRight: '10px'}} type="phone" />  0262 644 96 66</li>
                        <li style={{textAlign: 'left', padding: '15px'}}><Icon style={{marginRight: '10px'}} type="phone" />  0262 644 95 44</li>
                        <li style={{textAlign: 'left', padding: '15px'}}><Icon style={{marginRight: '10px'}} type="mail" />  info@isfer.net</li>
                    </ul>
                  </Card>
                </Col>
                <Col {...thirdPageTabCol}>
                  <Card
                    title="HARİTA"
                    cover={<img alt="production" src={production3} />}
                  >
                    <Meta
                      title={<FormattedMessage id="production_title3" />}
                      description={formatMessage({ id: 'production_description3' })}
                    />
                  </Card>
                </Col>
              </Row>
            </Suspense>
      </GridContent>
    );
  }
}

export default Contact;
