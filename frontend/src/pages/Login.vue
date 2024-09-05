<template>
  <q-page>
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h6">用户登录</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="login">
          <q-input v-model="email" label="邮箱" />
          <q-input v-model="password" label="密码" type="password" />
          <q-btn label="登录" type="submit" color="primary" class="q-mt-md" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: this.email, password: this.password })
      })
        .then(response => response.json())
        .then(data => {
          if (data.token) {
            localStorage.setItem('token', data.token);
            this.$router.push('/');
          } else {
            alert('登录失败');
          }
        });
    }
  }
};
</script>
