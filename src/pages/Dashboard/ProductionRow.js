import React, { memo } from 'react';
import { Row, Col, Card } from 'antd';
import { FormattedMessage, formatMessage } from 'umi/locale';
import styles from './Analysis.less';
import production1 from '../../assets/ferforjeimalatı.png';
import production2 from '../../assets/lazerKesim.jpg';
import production3 from '../../assets/KESİMBUKUM.png';
import production4 from '../../assets/steelstructure.jpg';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 6,
  lg: 6,
  xl: 6,
  style: { marginBottom: 24 },
};
const { Meta } = Card;

const ProductionRow = memo(({ loading, visitData }) => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={production1} />}
      >
        <Meta
          title={<FormattedMessage id="Ferforje İmalatı" />}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={production2} />}
      >
        <Meta
          title={<FormattedMessage id="Plazma/Lazer Kesim" />}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={production3} />}
      >
        <Meta
          title={<FormattedMessage id="Abkant Sac Kesim Büküm" />}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={production4} />}
      >
        <Meta
          title={<FormattedMessage id="Çelik Yapı İmalatı" />}
        />
      </Card>
    </Col>
  </Row>
));

export default ProductionRow;
