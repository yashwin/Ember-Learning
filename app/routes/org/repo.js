import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let orgId = Ember.get(this.modelFor('org'),'login');
      return this.store.queryRecord('repo', {
        orgId,
        repoId : params.repoid
      });
    // return Ember.$.get(`https://api.github.com/repos/${org.login}/${params.repoid}`).then(rawRepo => {
    //     rawRepo.oldId = rawRepo.id;
    //     rawRepo.id = rawRepo.name;
    //     return rawRepo;
    // });
  }
});
