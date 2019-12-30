import React from 'react';
import { Col, Row, Icon } from 'antd';
import classNames from 'classnames';
import styles from './index.less';
import logo from '../../../src/assets/logo.png';
import iso from '../../../src/assets/iso.png';
import royalcert from '../../../src/assets/royalcert.png';

const GlobalFooter = ({ className, links, copyright }) => {
  const clsString = classNames(styles.globalFooter, className);
  const footerCols = {
    xs: 24,
    sm: 8,
    md: 8,
    lg: 8,
    xl: 8,
    style: { marginBottom: 10 },
  }
  return (
    <footer className={clsString}>
    <Row>
      <Col {...footerCols}  style={{borderRight: '1px solid white'}} >
        <div style={{marginBottom: '10px', fontSize: '14px', fontFamily: 'Oswald', letterSpacing: '4px'}}>FERFORJE</div>
        <div style={{textAlign: 'left'}}>  İSTANBUL METAL FERFORJE İNŞ. SAN. TİC. LTD. ŞTİ. Sanayi Mah. Hızır Reis Cad. No:16 Kurtköy/Pendik/İstanbul 0216 595 09 09 / +90  216 314 66 66 info@isfer.net</div>
      </Col>
      <Col {...footerCols} style={{borderRight: '1px solid white'}}>
        <div style={{marginBottom: '10px', fontSize: '14px', fontFamily: 'Oswald', letterSpacing: '4px'}}>SERTİFİKALARIMIZ</div>
        <Col span={12}><img src={iso} style={{width: '100px'}} /></Col>
        <Col span={12}><img src={royalcert} style={{width: '65px'}} /></Col>
      </Col>
      <Col {...footerCols}>
        <Row>
          <Col span={24} style={{fontSize: '14px'}}><img style={{marginRight: '10px'}} src={logo} width="60" height="40" />Copyright © 2019 İSFER</Col>
          <Col span={24} style={{fontSize: '22px', marginTop: '5px'}}><Icon type="facebook" /> <Icon type="instagram" /></Col>
        </Row>
      </Col>
    </Row>
    </footer>
  );
};

export default GlobalFooter;
