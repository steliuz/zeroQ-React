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
export interface filter {
  name: string
}
export interface SearchProps {
  onSearch: (searchValue: string) => void;
}
export interface search {
  searchValue: string
}

export type OfficeData = OfficeItem[];

export interface OfficeState {
  items: OfficeData;
  filters: filter
}
