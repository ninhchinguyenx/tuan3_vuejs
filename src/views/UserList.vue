<template>
    <div class="main-content">
        <h1>Quản lý User</h1>
        <button @click="$router.push('/user/edit/new')">Thêm User</button>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Email</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody id="userTable">
                <tr  v-for="item in users" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td class="actions">
                        <button @click="$router.push(`/user/edit/${item.id}`)">Chỉnh sửa</button>
                        <button @click="deleteUser(item.id)">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useUserStore } from '@/stores/userStore'
const store = useUserStore();
const users = computed(() => store.users);
onMounted(store.fetchUsers);
const deleteUser = (id) => store.deleteUser(id);

</script>

<style>
.main-content {
    padding: 20px;
    width: 100%;
}
.main-content button{
    margin-top: 20px;
}
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

table,
th,
td {
    border: 1px solid black;
}

th,
td {
    padding: 10px;
    text-align: center;
}

.actions button {
    margin: 5px;
    padding: 5px 10px;
    cursor: pointer;
}
</style>