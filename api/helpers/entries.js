module.exports = function(app) {
  
  var _ = require('lodash')
    , entries = [
        {
          "id": 1,
          "completed": true,
          "sets": []
        },
        {
          "id": 2,
          "completed": true,
          "sets": []
        }
      ];
  
  return {
    find: function(ids) {
      if (_.isArray(ids)) {
        return _.filter(entries, function(entry) {
          return _.contains(ids, entry.id);
        });
      } else {
        return entries;
      }
    }
  }
};