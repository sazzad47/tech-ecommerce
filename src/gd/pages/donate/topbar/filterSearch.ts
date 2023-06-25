interface FilterSearchProps {
  location: any;
  navigate: any;
  category?: string;
  ordering?: string;
  search?: string;
  country?: string;
  page?: string;
}

  // Function to set the query parameters and update the URL
  const filterSearch = ({location, navigate, category, ordering, page, search, country }: FilterSearchProps) => {
    const query = new URLSearchParams(location.search);

    if (category) query.set("category", category);
    if (ordering) query.set("ordering", ordering);
    if (search) query.set("search", search);
    if (country) query.set("country", country);
    if (page) query.set("page", page);
    
    location.search = query.toString()
    navigate(`${location.pathname}?${location.search}`);

  };

export default filterSearch;
