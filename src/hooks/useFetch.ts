import { useState } from "react";
import { officesApi } from "../services";

export const useFetch = () => {

  const [state, setState] = useState({
    data: null,
  })
  const getFetch = async () => {
    try {
      const { data } = await officesApi.get('/offices');

      setState({
        data,
      });
    } catch (error) {
      setState({
        data: null,
      });
    }
  }
  return {
    data: state.data,
    getFetch
  }

}
