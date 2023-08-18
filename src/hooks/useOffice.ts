import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState, useMemo } from "react"
import { useFetch } from "./useFetch"
import { setOffices, toggleOnline } from "../store"
import { OfficeState, OfficeItem } from "../interfaces/OfficeInterfaces";
import { sortOffices } from '../utils/sorfCards'


export const useOfficesFetch = () => {
  const { items, filters } = useSelector((state: { offices: OfficeState }) => state.offices);
  const { getFetch, data } = useFetch()
  const dispatch = useDispatch()
  const [originalItems, setOriginalItems] = useState([]);

  const getOffices = () => {
    getFetch()
  }

  const handleStatus = (item: OfficeItem) => {
    dispatch(toggleOnline({ officeId: item.id }))

  }

  const filteredAndSortedItems = useMemo(() => {
    if (filters.name === '') {
      return sortOffices(items);
    }
    const filteredItems = items.filter((office) =>
      office.name.toLowerCase().includes(filters.name.toLowerCase())
    );
    return sortOffices(filteredItems);
  }, [items, filters]);


  useEffect(() => {
    if (filters.name === '') {
      dispatch(setOffices(originalItems));
    }
  }, [filters.name, originalItems]);

  useEffect(() => {
    if (data) {
      dispatch(setOffices(data));
      setOriginalItems(data);
    }
  }, [data])


  useEffect(() => {
    getOffices()
  }, [])

  useEffect(() => {
    const intervalId = setInterval(getOffices, 60000);
    return () => {
      clearInterval(intervalId);
    };
  }, [getOffices]);

  return {
    items: filteredAndSortedItems,
    handleStatus,
    getOffices
  }
}