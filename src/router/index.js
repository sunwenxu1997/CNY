import Vue from "vue";
import VueRouter from "vue-router";

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};

Vue.use(VueRouter);
/**
 * meta: {
 * title: {String} 页面标题
 * keepAlive: {Boolean} 是否缓存页面
 * }
 */
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
    meta: { title: "关注预览", keepAlive: true }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    meta: { title: "登录" }
  },
  {
    path: "/report",
    name: "Report",
    component: () => import("@/views/report/index.vue"),
    meta: { title: "报表目录", keepAlive: true }
  },
  {
    path: '/follw',
    name: 'Follw',
    component: () => import('@/views/follw/index.vue'),
    meta: { title: '关注列表', keepAlive: true }
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
  },
  { path: '*', redirect: '/404' }
];

const createRouter = () => new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

const router = createRouter();

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "数字欧普";
  next();
});

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router;
