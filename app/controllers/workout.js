export default Em.ObjectController.extend({
  
  actions: {
    addSet: function(entry) {
      var sets = entry.get('sets'),
          lastSet = sets.get('lastObject'),
          newSet = this.store.createRecord('set');
          
      if (lastSet) {
        lastSet = lastSet.toJSON();
        lastSet.set_number++; 
        newSet.setProperties(lastSet);
      } else {
        newSet.set('set_number', 1);
      }
      
      sets.pushObject(newSet);
      
    }
  }
  
});