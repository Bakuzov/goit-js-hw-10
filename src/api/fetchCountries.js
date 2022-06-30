const base = 'https://restcountries.com/v2/name/';
const filterData = '?fields=name,capital,flags,languages,population';

function fetchCountries(nameCountry) {
  return fetch(`${base}${nameCountry}${filterData}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => data);
}

export { fetchCountries };
