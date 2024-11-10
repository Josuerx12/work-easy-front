export interface PaginatedResult<T> {
  items: T[];
  currentPage: number;
  lastPage: number;
  perPage: number;
  total: number;
}

export interface PaginationInputProps<FilterT> {
  page?: number;
  perPage?: number;
  filter?: FilterT;
}
