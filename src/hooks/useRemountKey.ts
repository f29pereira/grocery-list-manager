import { useState } from "react";

/**
 * Custom hook that manages a element key property state
 * @returns [elementKey, incrementKey, setElementKey]
 */
export default function useRemountKey() {
  const [elementKey, setElementKey] = useState<number>(0);

  /**
   * Increases the elementKey state to unmount and mount the element
   */
  const incrementKey = () => {
    setElementKey((prev) => prev + 1);
  };

  return [elementKey, incrementKey, setElementKey] as const;
}
