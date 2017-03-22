import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,

  actions: {
     delete(model) {
       if (confirm('Are you sure you want to delete this blog?')) {
         this.sendAction('destroyBlog', model);
       }
     },
     showForm() {
       this.set('showForm', true);
     },
     editForm(model) {
       var params = {
         title: this.get('title'),
         author: this.get('author'),
         date: this.get('date'),
         image: this.get('image'),
         body: this.get('body'),
       };
       this.set('showForm', false);
       this.sendAction('editForm', model, params);
     }
   }
});
