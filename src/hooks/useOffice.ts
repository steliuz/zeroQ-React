import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useFetch } from "./useFetch"
import { setOffices, toggleOnline } from "../store"
import { OfficeState, OfficeItem } from "../interfaces/OfficeInterfaces";


export const useOfficesFetch = () => {
  const { items } = useSelector((state: { offices: OfficeState }) => state.offices);
  const dispatch = useDispatch()

  const { getFetch, data } = useFetch(`http://localhost:4000/api/offices`)

  const getOffices = () => {
    getFetch()
    console.log('No repeat');
  }

  const handleStatus = (item: OfficeItem) => {
    dispatch(toggleOnline({ officeId: item.id }))
  }

  useEffect(() => {
    if (data) {
      dispatch(setOffices(data));
    }
  }, [data, dispatch])

  useEffect(() => {
    getOffices()
  }, [dispatch])

  return {
    items,
    handleStatus,
    getOffices
  }
}