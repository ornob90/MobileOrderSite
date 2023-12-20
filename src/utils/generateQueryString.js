const generateQueryString = (url, filterOptions) => {
  Object.entries(filterOptions).forEach(([key, value]) => {
    url += `${key}=${value.replace(/ /g, "_")}&`;
  });

  return url;
};

export default generateQueryString;
