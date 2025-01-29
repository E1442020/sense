import { Flex, Pagination } from "@mantine/core";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export type PaginationProps = {
  count: number;
  limit?: number;
  notification?: boolean;
  loadNextPage: any;
};

export default function PaginationList({
  count,
  limit = 6,
  loadNextPage,
  notification = false,
}: PaginationProps) {
  const route = useLocation();
  const queryParams = new URLSearchParams(route.search);
  const [activePage, setPage] = useState<number>(
    queryParams?.get("page") !== null ? +queryParams?.get("page")! : 1
  );
  const pages = Math.ceil(count / limit);
  const navigate = useNavigate();

  // const loadNextPage = ({ value }: { value: number }) => {

  //   fetchApi({ page: value });
  // };
  console.log(activePage);

  if (pages <= 1) return null;

  return (
    <>
      <Flex justify="center" my="md">
        <Pagination
          radius="xl"
          value={activePage}
          onChange={(value) => {
            window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scrolling to the top
            setPage(value);
            loadNextPage({ value });
            const searchParams = new URLSearchParams(window.location.search);

            // Set the new page parameter
            searchParams.set("page", value.toString());

            // Only update the URL if `notification` is not true
            if (!notification) {
              navigate(`${route.pathname}?${searchParams.toString()}`);
            }
          }}
          total={pages}
        />
      </Flex>
    </>
  );
}
