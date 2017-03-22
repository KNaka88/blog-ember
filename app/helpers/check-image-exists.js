import Ember from 'ember';

export function checkImageExists(params/*, hash*/) {
  var image = params[0];
  if (image === '') {
    return false;
  } else {
    return true;
  }
}

export default Ember.Helper.helper(checkImageExists);
