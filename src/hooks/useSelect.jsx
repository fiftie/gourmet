import { useCallback, useState } from "react"

export const useSelect = () => {
  const [selectedState, setSelectedState] = useState();
  const onSelectState = useCallback((props) => {
    const { allState, i, onOpen } = props;
    const targetState = allState.find((allState) => allState.i === i);
    setSelectedState(targetState);
    onOpen();
    console.log("useSelect--allState",allState);
    console.log("useSelect--selectedState",selectedState);
  },[])
  return { onSelectState, selectedState }
}