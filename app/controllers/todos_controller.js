import Ember from 'ember';

TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      var title = this.get('newTitle');
      if (!title.trim()) { 
        return;
      }

      var todo_item = this.store.createRecord('todo', {
        title: title,
          isCompleted: false
      });

      this.set('newTitle', '');
      
      todo_item.save;
    }
  }
});

export default TodosController
