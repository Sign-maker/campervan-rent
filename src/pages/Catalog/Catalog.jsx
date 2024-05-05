import { useEffect, useState } from "react";
import { useCars } from "../../hooks/useCars";
import { CarList } from "../../components/CarList/CarList";
import { Button } from "../../components/Button/Button";
import css from "./Catalog.module.css";
import { toast } from "react-toastify";

const Catalog = () => {
  const { cars, totalPages, fetchCars, resetCars, isLoading } = useCars();
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const fetchData = async () => {
      try {
        await fetchCars({ params: { page }, signal });
        if (page > 1) {
          window.scrollBy({
            top: 384,
            behavior: "smooth",
          });
        }
      } catch (error) {
        toast.error("Ooops.. something went wrong!");
      }
    };

    fetchData();

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
    <section className={css.contentSection}>
      <div className="container">
        <div className={css.catalog}>
          <h2 className="visually-hidden">Campers catalog</h2>
          {cars.length > 0 ? <CarList /> : !isLoading && <p>No data</p>}
          {loadMore && (
            <div className={css.btnWrapper}>
              <Button
                styleType="loadMoreButton"
                loading={isLoading}
                onClick={handleClick}
              >
                Load more
              </Button>
            </div>
          )}
          {isLoading && <p>...Loading Cars</p>}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
