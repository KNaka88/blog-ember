import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newPost() {
      var params = {
        author: this.get('author')? this.get('author') : "",
        title: this.get('title')? this.get('title') : "",
        date: this.get('date')? this.get('date') : "",
        image: this.get('image')? this.get('image') : "",
        body: this.get('body') ?this.get('body') : "",
      };
      this.sendAction('newPost', params);
    }
  }
});
