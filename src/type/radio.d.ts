export declare namespace T_Radio {
  type Props = {
    label?: React.ReactNode | string;
    st?: React.CSSProperties;
    title: string;
    value: number;
    inputRef?: React.ForwardedRef<HTMLInputElement>;
  } & React.DelHTMLAttributes<React.HTMLInputTypeAttribute<HTMLInputElement>, HTMLInputElement>;
}
