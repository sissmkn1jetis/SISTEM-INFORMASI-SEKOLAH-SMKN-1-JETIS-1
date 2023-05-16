<template>
  <div id="app">
    <!-- <Nav />
    <div class="container">
      <router-view />
    </div> -->
    <!-- Site wrapper -->
    <div class="wrapper">
      <!-- Navbar -->
      <Nav />
      <!-- /.navbar -->

      <!-- Main Sidebar Container -->
      <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Sidebar -->
        <Sidebar />
        <!-- /.sidebar -->
      </aside>

      <!-- Content Wrapper. Contains page content -->
      <Content />
      <!-- /.content-wrapper -->

      <Footer />

      <!-- Control Sidebar -->
      <aside class="control-sidebar control-sidebar-dark">
        <!-- Control sidebar content goes here -->
      </aside>
      <!-- /.control-sidebar -->
    </div>
    <!-- ./wrapper -->
  </div>
</template>

<script>
import Nav from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";
import Content from "./Content.vue";
import Footer from "./Footer.vue";
export default {
  name: "App",
  components: {
    Nav,
    Sidebar,
    Content,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
</style>