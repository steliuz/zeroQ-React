export interface Line {
  waiting: number;
  elapsed: number;
}

export interface OfficeCardProps {
  office: OfficeItem;
  handleStatus: (item: OfficeItem) => void;
}

export interface OfficeItem {
  id: number;
  name: string;
  online: boolean;
  lines: Line[];
}

export type OfficeData = OfficeItem[];

export interface OfficeState {
  items: OfficeData;
}
