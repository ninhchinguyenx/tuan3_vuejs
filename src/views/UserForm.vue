<template>
    <div class="main-content">
        <div class="form-container">
            <h2>{{ isNew ? "Thêm Người Dùng" : "Chỉnh Sửa Người Dùng" }}</h2>
            <input v-model="user.name" placeholder="Tên" class="form-input" />
            <input v-model="user.email" placeholder="Email" class="form-input" />
            
            <input v-if="isNew" v-model="user.password" placeholder="Password" class="form-input" type="password" />
            <p v-if="store.error" class="error-message">
                {{ store.error.email?.[0] || store.error }}
            </p>
            <button @click="saveUser" class="form-button">Lưu</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';

const store = useUserStore();
const route = useRoute();
const router = useRouter();
const isNew = route.params.id == 'new';
const user = ref({ name: '', email: '' , password: ''});
onMounted(async () => {
    if (!isNew)
        user.value = await store.users.find(u => u.id == route.params.id) || {};
})
const saveUser = async () => {
    if (await (isNew ? store.addUser(user.value) : store.updateUser(user.value)))
        router.push('/user');
};
</script>

<style>
.form-container {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #f9f9f9;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 20px;
}

.form-button {
    width: 100%;
    padding: 10px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.form-button:hover {
    background: #0056b3;
}

.error-message {
    color: red;
    margin-top: 5px;
}
</style>
