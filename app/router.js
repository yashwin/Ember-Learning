import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', function() {
    this.route('yash');
  });
  this.route('orgs', {});
  this.route('org', {path: 'org/:id'}, function() {
    this.route('repos',{});
    this.route('repo', {path: ':repoid'}, function() {
      this.route('contributors',{});
      this.route('issues',{});
    });
  });
  this.route('notfound', {path: '*path'});
});

export default Router;
