import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddProjectView from "@/views/AddProject.vue";
import EditProjectView from "@/views/EditProject.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/add",
    name: "AddProject",
    component: AddProjectView,
  },
  {
    path: "/projects/:id",
    name: "EditProject",
    component: EditProjectView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
