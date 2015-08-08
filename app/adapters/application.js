import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'https://blog-post-heroku.herokuapp.com'
});
