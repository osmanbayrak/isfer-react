import React from 'react';
import { Col, Row, Icon } from 'antd';
import classNames from 'classnames';
import styles from './index.less';
import logo from '../../../src/assets/logo.png';


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
        <div style={{textAlign: 'left'}}>   SAMİ SOYBAŞ DEMİR SANAYİ VE TİCARET A.Ş. 1961’den bu yana Türk demir-çelik sektöründe faaliyet gösteren en köklü firmalardan olup, tüm yassı / uzun / boru&profil çelik ürünlerinin hem Türkiye’deki, hem de dünyanın dört bir yanına yayılmış müşterilerine en kaliteli şekilde, en uygun şartlarda ve tam zamanında tedariki misyonuyla çalışmaya devam etmektedir.</div>
      </Col>
      <Col {...footerCols} style={{borderRight: '1px solid white'}}>
        <div style={{marginBottom: '10px', fontSize: '14px', fontFamily: 'Oswald', letterSpacing: '4px'}}>MERKEZ / FABRİKA</div>
        <div>
          <ul>
            <li style={{textAlign: 'left'}}><Icon style={{marginRight: '10px'}} type="home" />  Sultan Orhan Mah. 1174/1 Sok. No:6 41400 Gebze/KOCAELİ</li>
            <li style={{textAlign: 'left'}}><Icon style={{marginRight: '10px'}} type="phone" />  0262 644 96 66</li>
            <li style={{textAlign: 'left'}}><Icon style={{marginRight: '10px'}} type="phone" />  0262 644 95 44</li>
            <li style={{textAlign: 'left'}}><Icon style={{marginRight: '10px'}} type="mail" />  isfer.info@gmail.com</li>
          </ul>
        </div>
      </Col>
      <Col {...footerCols}>
        <div style={{marginBottom: '10px', fontSize: '14px', fontFamily: 'Oswald', letterSpacing: '4px'}}>SERTİFİKALARIMIZ</div>
        <Col span={8}>Sertifika</Col>
        <Col span={8}>Sertifika</Col>
        <Col span={8}>Sertifika</Col>
      </Col>
    </Row>
      <Row>
        <Col span={1} style={{fontSize: '22px', textAlign: 'left', marginTop: '5px'}}><Icon type="facebook" /> <Icon type="instagram" /></Col>
        <Col span={23} style={{fontSize: '14px', textAlign: 'right'}}><img style={{marginRight: '10px'}} src={logo} width="60" height="40" />Copyright © 2019 İSFER</Col>
      </Row>
    </footer>
  );
};

export default GlobalFooter;
