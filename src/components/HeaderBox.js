import React, { PureComponent } from 'react';
import { formatMessage, setLocale, getLocale } from 'umi/locale';
import PageHeaderWrapper from '@/components/PageHeaderWrapper'
import { Row, Col, Card } from 'antd';
import defaultSettings from '../defaultSettings'

export default class HeaderBox extends PureComponent {

  render() {
    const midColResponsiveProps = {
        xs: { span: 24, offset: 0 },
        sm: { span: 14, offset: 5 },
        md: { span: 14, offset: 5 },
        lg: { span: 14, offset: 5 },
        xl: { span: 14, offset: 5 },
        style: { marginBottom: 15 },
    };
    return (
        <Row>
            <PageHeaderWrapper style={{float: 'left'}}></PageHeaderWrapper>
            <Col {...midColResponsiveProps}>
            <h3 style={{textAlign: 'center', marginTop: '20px', fontSize: '20px', fontWeight: '600', fontFamily: 'Oswald', letterSpacing: '5px', textTransform: 'uppercase'}}>{formatMessage({id: this.props.header ? this.props.header : ' '})}</h3>
            <Card
                style={{
                marginTop: '10px',
                textAlign: 'center',
                backgroundColor: defaultSettings.lessDarkColor,
                color: 'white',
                }}
                bodyStyle={{ padding: '1px' }}
            >
                {' '}
            </Card>
            </Col>
        </Row>
    );
  }
}