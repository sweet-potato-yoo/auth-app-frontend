import { createMemoryHistory, createRouter } from "vue-router";

import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";

const routes = [
    {
        path: '/', 
        name: 'login',
        component: LoginPage
    },
    {
        path: '/main', 
        name: 'main',
        component: HomePage
    },
];

const router = createRouter({
    history: createMemoryHistory('http://localhost:5173'),
    routes
});

export default router;