import { useEffect, useState } from "react";
import { useCars } from "../../hooks/useCars";

const Catalog = () => {
  const { totalPages, fetchCars, resetCars, isLoading } = useCars();
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetchCars({ params: { page }, signal });

    return () => {
      abortController.abort();
    };
  }, [fetchCars, page]);

  useEffect(() => {
    setLoadMore(page < totalPages);
  }, [page, totalPages]);

  useEffect(() => {
    return () => {
      resetCars();
    };
  }, [resetCars]);

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      Catalog
      {isLoading && <p>...Loading</p>}
      {loadMore && <button onClick={handleClick}>load more</button>}
    </div>
  );
};

export default Catalog;
