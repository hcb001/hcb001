import Ember from 'ember';

export default Ember.Component.extend({
  count: 10,

  actions: {

    addOneToCount() {
      this.set('count', this.count + 1);
    }

  }
});
