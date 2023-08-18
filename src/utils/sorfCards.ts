import { OfficeItem } from '../interfaces/OfficeInterfaces';

export const sortOffices = (offices: OfficeItem[]): OfficeItem[] => {
  const sortedData = [...offices];
  sortedData.sort((a: OfficeItem, b: OfficeItem) => {
    if (a.online && !b.online) {
      return -1;
    } else if (!a.online && b.online) {
      return 1;
    }
    return 0;
  });
  return sortedData;
};
