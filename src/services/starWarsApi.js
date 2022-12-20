import axios from 'axios';

const get = async (path) => {
  try {
    const repsonse = await axios.get('https://swapi.dev/api' + path);
    return repsonse;
  } catch (e) {
    console.log(e);
  }
};

export default {
  get,
};
