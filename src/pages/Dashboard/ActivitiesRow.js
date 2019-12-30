import React, { memo } from 'react';
import { Row, Col, Card } from 'antd';
import { FormattedMessage, formatMessage } from 'umi/locale';
import styles from './Analysis.less';
import faaliyet1 from '../../assets/faaliyet1.jpg';
import faaliyet2 from '../../assets/faaliyet2.png';
import faaliyet3 from '../../assets/faaliyet3.jpg';
import faaliyet4 from '../../assets/faaliyet4.png';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 6,
  lg: 6,
  xl: 6,
  style: { marginBottom: 24 },
};
const { Meta } = Card;

const ActivitiesRow = memo(({ loading, visitData }) => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={faaliyet1} />}
      >
        <Meta
          title={<FormattedMessage id="Çelik Yapı Uygulaması" />}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={faaliyet2} />}
      >
        <Meta
          title={<FormattedMessage id="Çelik Yapı Uygulaması" />}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={faaliyet3} />}
      >
        <Meta
          title={<FormattedMessage id="Ferforje Uygulaması" />}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={faaliyet4} />}
      >
        <Meta
          title={<FormattedMessage id="Ferforje Uygulaması" />}
        />
      </Card>
    </Col>
  </Row>
));

export default ActivitiesRow;
