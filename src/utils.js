export function find(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
      var match = callback(arr[i]);
      if (match) {
        return arr[i];
      }
    }
  }

  function findForRemove(arr, name) {
    return find(arr, function(entity) {
        return entity.name === name;
    });
}

 export function remove(arr, entityName) {
    var entity = findForRemove(arr, entityName);
    var index = arr.indexOf(entity);
    if (index !== -1) {
        arr.splice(index, 1);
    }
}