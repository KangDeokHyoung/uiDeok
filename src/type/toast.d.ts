export type Position =
  | "left bottom"
  | "left center"
  | "left top"
  | "top left"
  | "top center"
  | "top right"
  | "right top"
  | "right center"
  | "right bottom"
  | "bottom left"
  | "bottom center"
  | "bottom right";

export declare namespace N_Toast {
  type Props = {
    children?: JSX.Element;
    position?: Position;
    gap?: number;
    transition?: boolean;
    className?: string;
    props?: string;
    id?: string;
  };

  type Status = "info" | "warning" | "success" | "error";
  type Alert = {
    text: string | JSX.Element | null;
    status?: string;
    id: number;
    className?: string;
  };

  type Context = {
    alert: Alert[];
    set: (payload: { text: string | JSX.Element; status?: N_Toast.Status }) => void;
    remove: (payload: number) => void;
    clear: () => void;
  };

  // Provider Component
  namespace Provider {
    type Props = { children: React.ReactNode };
    type Payload = { text: string | JSX.Element; status?: N_Toast.Status; className?: string };
  }

  // Text Component
  namespace Text {
    type Props = { item: Alert };
  }

  // Portal Component
  namespace Portal {
    type Props = N_Toast.Props & { anchor: HTMLDivElement | null };
  }
}
