import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return this.store.findAll('blog');
    },
    actions: {
      newPost(params) {
        var newPost = this.store.createRecord('blog', params);
        newPost.save();
        this.transitionTo('index');
      }
    }
});
