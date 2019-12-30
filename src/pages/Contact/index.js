import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Card, Form, Input, Button } from 'antd';
import { FormattedMessage, formatMessage } from 'umi/locale';
import router from 'umi/router';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import PageLoading from '@/components/PageLoading';
import HeaderBox from '@/components/HeaderBox';
import contactTop from '../../assets/contactTop.png';
import GoogleMapReact from 'google-map-react';

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
                  <Card title="ADRES">
                    <ul style={{paddingLeft: '5px', fontSize: '13px'}}>
                        <li style={{textAlign: 'left', padding: '15px'}}><Icon style={{marginRight: '10px'}} type="home" />  İSTANBUL METAL FERFORJE İNŞ. SAN. TİC. LTD. ŞTİ. Sanayi Mah. Hızır Reis Cad. No:16 Kurtköy/Pendik/İstanbul 0216 595 09 09 / +90  216 314 66 66 info@isfer.net</li>
                        <li style={{textAlign: 'left', padding: '15px'}}><Icon style={{marginRight: '10px'}} type="phone" />  0262 644 96 66</li>
                        <li style={{textAlign: 'left', padding: '15px'}}><Icon style={{marginRight: '10px'}} type="phone" />  0262 644 95 44</li>
                        <li style={{textAlign: 'left', padding: '15px'}}><Icon style={{marginRight: '10px'}} type="mail" />  info@isfer.net</li>
                    </ul>
                  </Card>
                </Col>
                <Col {...thirdPageTabCol}>
                  <Card
                    title="HARİTA"
                  >
                    <div style={{ height: '100vh', width: '100%' }}>
                      <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDdZvBtpwkDznaAyTrw9gNQOlTxTx0bjSQ' }}
                        defaultCenter={{ lat: 40.9088, lng: 29.30 }}
                        defaultZoom={11}
                      >
                        <div lat={40.9088} lng={29.30}><Icon style={{fontSize: '18px'}} type="environment" theme="twoTone" /><div>İSFER</div></div>
                      </GoogleMapReact>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Suspense>
      </GridContent>
    );
  }
}

export default Contact;
