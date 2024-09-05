import { createRouter, createWebHistory } from 'vue-router';
import Login from './pages/Login.vue';
import TaskList from './pages/TaskList.vue';

const routes = [
  { path: '/', component: TaskList },
  { path: '/login', component: Login }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
