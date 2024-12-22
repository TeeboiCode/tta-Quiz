import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JoinQuiz from "../components/JoinQuiz.vue";
import CreateQuiz from "../components/CreateQuiz.vue";
import LoginPgVue from "../components/LoginPg.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/joinQuiz/",
    name: "JoinQuizVue",
    component: JoinQuiz,
  },
  {
    path: "/createquiz/",
    name: "CreateQuizVue",
    component: CreateQuiz,
  },
  {
    path: "/login/",
    name: "login",
    component: LoginPgVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
