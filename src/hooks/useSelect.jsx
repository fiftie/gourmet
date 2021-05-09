import { useCallback, useState } from "react"

export const useSelect = () => {
  const [selectedState, setSelectedState] = useState("");
  const onSelectState = useCallback((props) => {
    const { allState, i, onOpen } = props;
    const targetState = allState.find((todo) => todo.id === i);
    setSelectedState(targetState);
    onOpen();
  },[])
  return { onSelectState, selectedState };
}