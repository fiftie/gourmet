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

export const useMeatSelect = () => {
  const [selectedState, setSelectedState] = useState("");
  const onSelectState = useCallback((props) => {
    const { meatState, i, onOpen } = props;
    const targetState = meatState.find((todo) => todo.id === i);
    setSelectedState(targetState);
    onOpen();
  },[])
  return { onSelectState, selectedState };
}

export const useFishSelect = () => {
  const [selectedState, setSelectedState] = useState("");
  const onSelectState = useCallback((props) => {
    const { fishState, i, onOpen } = props;
    const targetState = fishState.find((todo) => todo.id === i);
    setSelectedState(targetState);
    onOpen();
  },[])
  return { onSelectState, selectedState };
}

export const useNoodleSelect = () => {
  const [selectedState, setSelectedState] = useState("");
  const onSelectState = useCallback((props) => {
    const { noodleState, i, onOpen } = props;
    const targetState = noodleState.find((todo) => todo.id === i);
    setSelectedState(targetState);
    onOpen();
  },[])
  return { onSelectState, selectedState };
}