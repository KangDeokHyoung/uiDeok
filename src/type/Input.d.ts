export declare namespace T_Input {
  type Props = {
    st?: React.CSSProperties;
    className?: string;
    label?: string | JSX.Element;
    inputRef?: React.ForwardedRef<HTMLInputElement>;
    LockOpend?: JSX.Element;
    LockClosed?: JSX.Element;
  } & InputProps;
  type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
}
