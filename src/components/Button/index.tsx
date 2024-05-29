import classNames from 'classnames';
import { RequestCircularLoader } from 'components/Loader/SiteLoader';
import { CSSProperties, ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react';
import './button.scss';
type IButtonProps = ComponentPropsWithoutRef<'button'> & {
  leftIcon?: {
    Icon: ReactNode;
    styles?: CSSProperties;
    className?: string;
    [key: string]: any;
  };
  rightIcon?: {
    Icon: ReactNode;
    styles?: CSSProperties;
    className?: string;
    [key: string]: any;
  };
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  outline?: boolean;
  block?: boolean;
  rounded?: boolean;
  variant?: 'primary' | 'secondary' | 'text';
  loading?: boolean;
};
export type Ref = HTMLButtonElement;
const Button = forwardRef<Ref, IButtonProps>((props, ref) => {
  const {
    leftIcon,
    rightIcon,
    className = '',
    variant = 'primary',
    outline,
    block,
    rounded,
    size,
    loading,
    ...rest
  } = props;

  return (
    <button
      ref={ref}
      className={classNames(
        className,
        size,
        variant,
        block ? 'block' : '',
        rounded ? 'rounded' : '',
        outline ? 'outline' : '',
        leftIcon ? 'lefticon' : '',
        rightIcon ? 'righticon' : '',
        'button',
        { loading: loading },
      )}
      {...rest}
    >
      {loading && <RequestCircularLoader isLoading={loading} />}
      {leftIcon?.Icon ? (
        <span className={classNames(className, 'lefticon')}>{leftIcon.Icon}</span>
      ) : null}
      {props.children}
      {rightIcon?.Icon ? (
        <span className={classNames(className, 'righticon')}>{rightIcon.Icon}</span>
      ) : null}
    </button>
  );
});
Button.displayName = 'Button';
export default Button;
