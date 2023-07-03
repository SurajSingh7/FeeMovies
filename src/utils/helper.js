export function filterData(searchText, restaurants) {
       
    if(searchText==="") return restaurants;
  
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name.toLowerCase().includes(searchText?.toLowerCase())
    );
    return filterData;
  }