import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Layout from "./layout/Layout.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
// lazy-loaded
const Dashboard = () => import("./components/Dashboard.vue")
const Admin = () => import("./components/Admin.vue")
const Gurutes = () => import("./components/Guru.vue")
const Walastes = () => import("./components/Walas.vue")
const Guru = () => import("./components/DataGuru/Gurulist.vue")
const User = () => import("./components/DataUser/Userlist.vue")
const Jurusan = () => import("./components/DataJurusan/Jurusanlist.vue")
const Kelas = () => import("./components/DataKelas/Kelaslist.vue")
const Mapel = () => import("./components/DataMapel/Mapellist.vue")
const TahunAjar = () => import("./components/DataTahunAjar/TahunAjarlist.vue")
const Siswa = () => import("./components/DataSiswa/Siswalist.vue")
const Walas = () => import("./components/DataWalas/Walaslist.vue")
const NK = () => import("./components/DataNilaiKetrampilan/NKlist.vue")
const tesNK = () => import("./components/DataNilaiKetrampilan/TesNKlist.vue")

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/home",
        name: "home",
        // lazy-loaded
        component: Home,
      },
      {
        path: "/dashboard",
        name: "Dashboard",
        // lazy-loaded
        component: Dashboard,
      },
      {
        path: "/admin",
        name: "admin",
        // lazy-loaded
        component: Admin,
      },
      {
        path: "/user",
        name: "user",
        // lazy-loaded
        component: User,
      },
      {
        path: "/gurutes",
        name: "gurutes",
        // lazy-loaded
        component: Gurutes,
      },
      {
        path: "/walastes",
        name: "walastes",
        // lazy-loaded
        component: Walastes,
      },

      {
        path: "/guru",
        name: "guru",
        // lazy-loaded
        component: Guru,
      },

      {
        path: "/jurusan",
        name: "jurusan",
        // lazy-loaded
        component: Jurusan,
      },

      {
        path: "/kelas",
        name: "kelas",
        // lazy-loaded
        component: Kelas,
      },

      {
        path: "/mapel",
        name: "mapel",
        // lazy-loaded
        component: Mapel,
      },

      {
        path: "/thnajar",
        name: "thnajar",
        // lazy-loaded
        component: TahunAjar,
      },

      {
        path: "/siswa",
        name: "siswa",
        // lazy-loaded
        component: Siswa,
      },

      {
        path: "/walas",
        name: "walas",
        // lazy-loaded
        component: Walas,
      },

      {
        path: "/nk",
        name: "nk",
        // lazy-loaded
        component: NK,
      },

      {
        path: "/tesnk",
        name: "tesnk",
        // lazy-loaded
        component: tesNK,
      },
    ]
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // const publicPages = ['/login', '/register', '/home'];
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;