<template>
  <div class="sidebar">
    <nav class="mt-2">
      <ul
        class="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <i class="nav-icon fas fa-home"></i>
            <p>Home</p>
          </router-link>
        </li>
        <!-- Walas -->
        <li class="nav-item">
          <router-link v-if="currentUser" to="/dashboard" class="nav-link">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            <p>Dashboard</p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="showWalas" to="/walastes" class="nav-link">
            <i class="nav-icon fas fa-home"></i>
            <p>Walas</p>
          </router-link>
        </li>
        <!-- Admin -->
        <li v-if="showAdmin" class="nav-item">
          <router-link to="/admin" class="nav-link">
            <i class="nav-icon fas fa-home"></i>
            <p>Admin</p>
          </router-link>
        </li>
        <li v-if="showAdmin" class="nav-item">
          <router-link to="/user" class="nav-link">
            <i class="nav-icon fas fa-home"></i>
            <p>Data Admin</p>
          </router-link>
        </li>
        <li v-if="showAdmin" class="nav-item">
          <router-link to="/guru" class="nav-link">
            <i class="nav-icon fas fa-home"></i>
            <p>Data Guru</p>
          </router-link>
        </li>
        <li v-if="showAdmin" class="nav-item">
          <router-link to="/jurusan" class="nav-link">
            <i class="nav-icon fas fa-home"></i>
            <p>Data Jurusan</p>
          </router-link>
        </li>
        <li v-if="showAdmin" class="nav-item">
          <router-link to="/kelas" class="nav-link">
            <i class="nav-icon fas fa-home"></i>
            <p>Data Kelas</p>
          </router-link>
        </li>
        <li v-if="showAdmin" class="nav-item">
          <router-link to="/mapel" class="nav-link">
            <i class="nav-icon fas fa-home"></i>
            <p>Data Mata Pelajaran</p>
          </router-link>
        </li>
        <li v-if="showAdmin" class="nav-item">
          <router-link to="/thnajar" class="nav-link">
            <i class="nav-icon fas fa-home"></i>
            <p>Data Tahun Ajaran</p>
          </router-link>
        </li>
        <li v-if="showAdmin" class="nav-item">
          <router-link to="/siswa" class="nav-link">
            <i class="nav-icon fas fa-home"></i>
            <p>Data Siswa</p>
          </router-link>
        </li>
        <li v-if="showAdmin" class="nav-item">
          <router-link to="/walas" class="nav-link">
            <i class="nav-icon fas fa-home"></i>
            <p>Data Walas</p>
          </router-link>
        </li>
        <!-- Guru -->
        <li v-if="showGuru" class="nav-item">
          <router-link to="/gurutes" class="nav-link">
            <i class="nav-icon fas fa-home"></i>
            <p>Guru</p>
          </router-link>
        </li>
        <li v-if="showGuru" class="nav-item">
          <router-link to="/nk" class="nav-link">
            <i class="nav-icon fas fa-home"></i>
            <p>Nilai Ketrampilan</p>
          </router-link>
        </li>
        <li v-if="showGuru" class="nav-item">
          <router-link to="/tesnk" class="nav-link">
            <i class="nav-icon fas fa-home"></i>
            <p>Nilai Ketrampilan</p>
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logOut">
            <i class="nav-icon fas fa-sign-out-alt"></i>
            <p>LogOut</p>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import EventBus from "../common/EventBus";
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdmin() {
      if (this.currentUser && this.currentUser.role) {
        return this.currentUser.role === "admin";
      }
      return false;
    },
    showGuru() {
      if (this.currentUser && this.currentUser.role) {
        return this.currentUser.role === "guru";
      }
      return false;
    },
    showWalas() {
      if (this.currentUser && this.currentUser.role) {
        return this.currentUser.role === "walas";
      }
      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
  mounted() {
    EventBus.on("logout", () => {
      this.logOut();
    });
  },
  beforeUnmount() {
    EventBus.remove("logout");
  },
};
</script>


<style lang="scss" scoped>
</style>