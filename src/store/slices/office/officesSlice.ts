import { createSlice } from "@reduxjs/toolkit";
import { OfficeState, OfficeItem } from '../../../interfaces/OfficeInterfaces';

const initialState: OfficeState = {
  items: [],
  filters: {
    name: ''
  }
}

export const officesSlice = createSlice({
  name: 'offices',
  initialState,
  reducers: {
    setOffices: (state, { payload }) => {
      state.items = payload;
    },
    setFilters: (state, { payload }) => {
      state.filters.name = payload;
    },
    toggleOnline: (state, { payload }) => {
      state.items = state.items.map((office: OfficeItem) => {
        if (office.id === payload.officeId) {
          return {
            ...office,
            online: !office.online,
          };
        }
        return office;
      });
    }
  }
})

export const { setOffices, toggleOnline, setFilters } = officesSlice.actions