import Ember from 'ember';

export default Ember.Component.extend({
  count: 100,

  actions: {

    takeOneFromCount() {
      this.set('count', this.count - 1);
    },
    addOneToCount() {
      this.sendAction(this.addOneToCount)
    }
  }
});
