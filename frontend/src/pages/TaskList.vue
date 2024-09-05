<template>
    <q-page padding>
      <q-list>
        <q-item v-for="task in tasks" :key="task.id">
          <q-item-section>
            <q-item-label>{{ task.name }}</q-item-label>
            <q-item-label caption>{{ task.current_count }} / {{ task.target_count }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat label="更新进度" @click="updateTask(task.id)" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-page>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const tasks = ref([]);
  
      const fetchTasks = () => {
        const token = localStorage.getItem('token');
        fetch('/api/tasks', {
          headers: { 'Authorization': `Bearer ${token}` }
        })
          .then(res => res.json())
          .then(data => {
            tasks.value = data;
          })
          .catch(error => console.error('加载任务失败', error));
      };
  
      const updateTask = (taskId) => {
        const token = localStorage.getItem('token');
        fetch(`/api/tasks/${taskId}/progress`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
          body: JSON.stringify({ progress: 1 })
        })
          .then(res => res.json())
          .then(data => {
            fetchTasks();  // 刷新任务列表
          })
          .catch(error => console.error('更新任务失败', error));
      };
  
      onMounted(() => {
        fetchTasks();
      });
  
      return { tasks, updateTask };
    }
  };
  </script>
  