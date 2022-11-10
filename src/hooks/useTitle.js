import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Doctor Sam`;
  }, [title]);
};

export default useTitle;
