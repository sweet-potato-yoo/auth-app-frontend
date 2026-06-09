import { createMemoryHistory, createRouter } from "vue-router";

import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";

const routes = [
    {path: '/', component: LoginPage},
    {path: '/main', component: HomePage},
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
});

export default router;