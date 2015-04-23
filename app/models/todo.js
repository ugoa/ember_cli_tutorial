import DS from 'ember-data';

var Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
  
});

Todo.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Learn Ember.js',
      isCompleted: true
    },
    {
      id: 2,
      title: 'Gym',
      isCompleted: false
    },
    {
      id: 3,
      title: 'Laundry!',
      isCompleted: false
    }
  ]
});

export default Todo;
