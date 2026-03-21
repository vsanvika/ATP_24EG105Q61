// app.js

import { addTask, getAllTasks, completeTask } from './task.js'

// Add task
console.log(addTask("Eating", "high", "2026-12-08"))

// Display all tasks
console.log(getAllTasks())

// Complete task with id = 1
console.log(completeTask(1))

// Display again
console.log(getAllTasks())