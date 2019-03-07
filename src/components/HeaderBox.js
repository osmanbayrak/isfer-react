import React, { PureComponent } from 'react';
import { formatMessage, setLocale, getLocale } from 'umi/locale';
import { Row, Col, Card } from 'antd';
import defaultSettings from '../defaultSettings'

export default class HeaderBox extends PureComponent {

  render() {
    const midColResponsiveProps = {
        xs: { span: 24, offset: 0 },
        sm: { span: 12, offset: 6 },
        md: { span: 10, offset: 7 },
        lg: { span: 10, offset: 7 },
        xl: { span: 8, offset: 8 },
        style: { marginBottom: 24 },
    };
    return (
        <Row>
            <Col {...midColResponsiveProps}>
            <Card
                style={{
                marginTop: '15px',
                textAlign: 'center',
                backgroundColor: defaultSettings.lessDarkColor,
                color: 'white',
                }}
                bodyStyle={{ padding: '13px' }}
            >
                {this.props.header}
            </Card>
            </Col>
        </Row>
    );
  }
}