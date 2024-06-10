import * as axios from 'axios';

const apiFirebase = axios.create({
  baseURL: 'https://films-d7fa0.firebaseio.com/'
});
const functions = {
  getFavoris: () => apiFirebase.get('favoris.json').then(response => response.data ? response.data : []),
  saveFavoris: (favoris) => apiFirebase.put('favoris.json', favoris)
}
export default functions;