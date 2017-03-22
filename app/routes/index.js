import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute,{
    model() {
        console.log("loading");
        return this.infinityModel("blog", { perPage: 3, startingPage: 3 });
      // return this.store.findAll('blog');
    },
    actions: {
      newPost(params) {
        var newPost = this.store.createRecord('blog', params);
        newPost.save();
        this.transitionTo('index');
      }
    }
});


//
// import Ember from 'ember';
//
// export default Ember.Route.extend(InfinityRoute, {
//   model() {
//     /* Load pages of the Product Model, starting from page 1, in groups of 12. */
//     return this.infinityModel("product", { perPage: 12, startingPage: 1 });
//   }
// });
