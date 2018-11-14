import 'echarts/lib/component/legend';
import 'echarts/lib/component/legendScroll';
import {truncationFormatter} from '../utils';

export default function Legend({truncate, ...props} = {}) {
  const formatter = value => {
    return truncate ? truncationFormatter(value, truncate) : value;
  };

  return {
    show: true,
    type: 'scroll',
    padding: 0,
    formatter,
    ...props,
  };
}
