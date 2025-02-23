import apiClient from "@/plugins/axios";
import { defineStore } from "pinia";


export const useUserStore = defineStore('user',{
    state: () =>({users : [],error: null }),
    actions:{
        async fetchUsers(){
            const response = await apiClient.get('/user')
            this.users = response.data.user.data;
        },
        async addUser(user) {
            try {
                const response = await apiClient.post('/user', user);
                this.users.push(response.data);
                this.error = null;
                return true;
            } catch (error) {
                this.error = error.response?.data?.error || 'Có lỗi xảy ra';
                return false;
            }
        },
        async updateUser(user) {
            try {
                await apiClient.put(`/user/${user.id}`, user);
                await this.fetchUsers();
                return true;
            } catch (error) {
                this.error = error.response?.data?.error || 'Có lỗi xảy ra';
                return false;
            }
        },
        async deleteUser(id) {
            try {
                await apiClient.delete(`/user/${id}`);
                this.users = this.users.filter(user => user.id !== id);
                await this.fetchUsers();
                return true;
            } catch (error) {
                return false;
            }
        }
    }
})
