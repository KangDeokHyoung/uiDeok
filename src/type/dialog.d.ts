export declare namespace T_Dialog {
  type Props = {
    children?: JSX.Element | string;
    open?: boolean;
    onChange?: () => void;
    disabled?: boolean;
    transition?: boolean;
    children?: JSX.Element;
    content?: Content;
    clickOutside?: boolean;
    className?: string;
  };
  type Content = (props: { closeHandler: () => void }) => JSX.Element;

  namespace Portal {
    type Props = { setToggle: (toggle: boolean) => void } & N_Dialog.Props;
  }
}
