import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let org = this.modelFor('org');
    return Ember.$.get(`https://api.github.com/repos/${org.login}/${params.repoid}`).then(rawRepo => {
        rawRepo.oldId = rawRepo.id;
        rawRepo.id = rawRepo.name;
        return rawRepo;
    });
  }
});
