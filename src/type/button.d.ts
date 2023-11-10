export declare namespace T_Button {
  type Props = {
    children?: JSX.Element | string;
    loading?: boolean;
    st?: React.CSSProperties;
    type?: "button" | "submit";
    className?: string;
    disabled?: boolean;
    ripple?: boolean;
  } & ButtonProps;
  type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
}
