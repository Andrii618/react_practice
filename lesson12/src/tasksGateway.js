const baseUrl = 'https://62ed4273818ab252b60db75e.mockapi.io/api/v1/Tasks';

export const fetchTasks = () =>
  fetch(baseUrl).then(res => {
    if (!res.ok) {
      throw Error('Failed data fetch');
    }

    return res.json();
  });

export const createTask = text =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text, done: false }),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to create task');
    }
  });

export const deleteTask = id =>
  fetch(`${baseUrl}/${id}`, {
    method: 'Delete',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  });

export const updateTask = (taskId, taskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to update task');
    }
  });
