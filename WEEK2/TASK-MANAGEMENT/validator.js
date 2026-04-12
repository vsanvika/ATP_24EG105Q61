// validator.js

// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
  if (!title || title.length < 3) {
    return "Minimum 3 characters required"
  }
  return true
}

// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
  const validPriorities = ["low", "medium", "high"]

  if (!validPriorities.includes(priority.toLowerCase())) {
    return "Invalid priority "
  }

  return true
}

// 3. Validate due date (must be future date)
function validateDueDate(date) {
  const today = new Date()
  const dueDate = new Date(date)

  if (dueDate <= today) {
    return "Due date must be a future date"
  }

  return true
}

export { validateTitle, validatePriority, validateDueDate };