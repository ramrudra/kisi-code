import Kisi from 'kisi-client';

const kisiClient = new Kisi();

kisiClient.setLoginSecret('94c2056abb993b570517f2d3a89c9b5a');

export default {
  get: (url) => kisiClient.get(url),
  post: (url, data) => kisiClient.post(url, data)
};
