import axios from 'axios';

export default async function getProjectManagers() {
  const API_URL = "https://swapi.dev/api/people/";

  const responseAPI = await axios.get(API_URL)
      .then(res => res.data)

  let mappedInfo = responseAPI.results?.map((pmInfo) => {
    const { name, birth_year } = pmInfo;

    return { name, birth_year }
  })
  return mappedInfo;
};