"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
        this.updatedAt = Date.now();
        this.status = false;
    }
    TodoItem.prototype.toggleStatus = function () {
        if (this.status === false) {
            this.status = true;
        }
        else {
            this.status = false;
        }
        this.updatedAt = Date.now();
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.ToDoItems = [];
    }
    TodoList.prototype.addTask = function (TodoItem) {
        console.log(TodoItem.title);
        var outputString = "=========== NEW TASK ===========\n";
        this.ToDoItems.push(TodoItem);
        outputString += "\"Task \"" + TodoItem.title + "\" inserted in the list\"\n";
        outputString += "Number of items: " + this.ToDoItems.length;
        console.log(outputString);
        return this.ToDoItems.length;
    };
    ;
    TodoList.prototype.listAllTasks = function () {
        console.log("=========== ALL TASKS ===========");
        this.ToDoItems.forEach(function (task) { console.log(task.title); });
    };
    ;
    TodoList.prototype.deleteTask = function (TodoItem) {
        var numberOfTasks;
        var outputString = "=========== TASK REMOVED ===========\n";
        this.ToDoItems.splice(this.ToDoItems.indexOf(TodoItem), 1);
        outputString += "Task \"" + TodoItem.title + "\" removed from the list\n";
        outputString += "Number of items: " + this.ToDoItems.length;
        console.log(outputString);
        return this.ToDoItems.length;
    };
    ;
    TodoList.prototype.listUncomplete = function () {
        console.log("=========== INCOMPLETE TASKS ===========");
        this.ToDoItems.forEach(function (task) {
            if (task.status === false) {
                console.log(task.title);
            }
        });
    };
    ;
    return TodoList;
}());
// Execution
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
var myTodos = new TodoList();
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
