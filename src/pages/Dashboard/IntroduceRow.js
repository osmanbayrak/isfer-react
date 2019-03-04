import React, { memo } from 'react';
import { Row, Col, Icon, Tooltip, Card, Avatar } from 'antd';
import { FormattedMessage, formatMessage } from 'umi/locale';
import styles from './Analysis.less';
import { ChartCard, MiniArea, MiniBar, MiniProgress, Field } from '@/components/Charts';
import Trend from '@/components/Trend';
import numeral from 'numeral';
import Yuan from '@/utils/Yuan';
import uzunmamuller from '../../assets/uzunmamuller.jpg';
import yassimamuller from '../../assets/yassimamuller.jpg';
import profiller from '../../assets/profiller.png';
import dekoratifmamuller from '../../assets/dekoratifmamuller.jpg';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};
const { Meta } = Card;

const IntroduceRow = memo(({ loading, visitData }) => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <Card cover={<img alt="example" src={uzunmamuller} />}>
        <Meta
          title={<FormattedMessage id="long_products" />}
          description={formatMessage({ id: 'long_products_index' })}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card cover={<img alt="example" src={yassimamuller} />}>
        <Meta
          title={<FormattedMessage id="flat_products" />}
          description={formatMessage({ id: 'flat_products_index' })}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card cover={<img alt="example" src={dekoratifmamuller} />}>
        <Meta
          title={<FormattedMessage id="decorative_products" />}
          description={formatMessage({ id: 'decorative_products_index' })}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card cover={<img alt="example" src={profiller} />}>
        <Meta
          title={<FormattedMessage id="profile_products" />}
          description={formatMessage({ id: 'profile_products_index' })}
        />
      </Card>
    </Col>
  </Row>
));

export default IntroduceRow;
