import { useState } from "react";
import { officesApi } from "../services";

export const useFetch = (url: string) => {

  const [state, setState] = useState({
    data: null,
  })
  const getFetch = async () => {

    setState({
      ...state,
    });

    try {
      const { data } = await officesApi.get(url);

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
