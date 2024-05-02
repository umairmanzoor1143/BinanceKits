import './index.scss';
import classNames from 'classnames';

export default function Loader(props: { loading?: boolean }) {
  // const loading = useAppSelector((state) => state.global?.loading);
  const loading = false;

  return (
    <div
      className={classNames('pre-loader', {
        loading: props.loading ?? loading,
      })}
    >
      <div className='pre-loader-holder'>
        <strong className='loading-logo'>
          <div className='loader-rc loader3'>
            <div className='loader'></div>
          </div>
        </strong>
      </div>
    </div>
  );
}
type RequestLoaderPorps = IConProps & {
  children?: any;
  isLoading: boolean;
};
export const RequestLoader = (props: RequestLoaderPorps) => {
  const {
    width = 28,
    height = 28,
    children,
    isLoading,
    className = '',

    ...rest
  } = props;
  return isLoading ? (
    <div
      className={classNames(`request_loader ${className}`, {
        loading: isLoading,
      })}
      // wwidth={width}
      // hheight={height}
    >
      <div className='loader'></div>
    </div>
  ) : children ? (
    children
  ) : null;
};

type RequestCircularLoaderPorps = IConProps & {
  children?: any;
  isLoading: boolean;
};
export const RequestCircularLoader = (props: RequestLoaderPorps) => {
  const {
    width = 28,
    height = 28,
    children,
    isLoading,
    className = '',

    ...rest
  } = props;
  return isLoading ? (
    <div
      className={classNames(`circular-loader ${className}`, {
        loading: isLoading,
      })}
    >
      <div className='loader'></div>
    </div>
  ) : children ? (
    children
  ) : null;
};
