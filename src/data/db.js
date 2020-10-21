import Dexie from 'dexie';
const db = new Dexie('ToDoDatabase');
db.version(1).stores({
    todos: '++id'
});
db.todos.add({
    created: Date.now(),
    done: false,
    desc: 'East 13:th Street'
});