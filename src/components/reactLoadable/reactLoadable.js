import Loadable from 'react-loadable';
import Loading from 'components/common/loading/loading';
export default function reactLoadable(func) {
  return Loadable({
    loader: () => func,
    loading: Loading,
  });
}