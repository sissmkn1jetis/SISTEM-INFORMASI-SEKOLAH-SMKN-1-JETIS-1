<template>
  <div>
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Data Nilai Ketrampilan</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to="/dashboard">Dashboard</router-link>
              </li>
              <li class="breadcrumb-item active">Data Nilai Ketrampilan</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title"></h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form>
                <div class="card-body">
                  <div class="form-group">
                    <label>Guru</label>
                    <select
                      class="form-control select2"
                      v-model="form.guruId"
                      required
                    >
                      <option disabled value="">-- Pilih --</option>
                      <option
                        v-for="guru in filterDataGuru"
                        :key="guru.id"
                        :value="guru.id"
                      >
                        {{ guru.name }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Kelas</label>
                    <select
                      class="form-control select2"
                      v-model="form.kelasId"
                      required
                    >
                      <option disabled value="">-- Pilih --</option>
                      <option
                        v-for="kelass in kelas"
                        :key="kelass.id"
                        :value="kelass.id"
                      >
                        {{ kelass.name_kelas }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Siswa</label>
                    <select
                      class="form-control select2"
                      v-model="form.siswaId"
                      required
                    >
                      <option disabled value="">-- Pilih --</option>
                      <option
                        v-for="siswa in filterDataSiswa"
                        :key="siswa.id"
                        :value="siswa.id"
                      >
                        {{ siswa.name }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Semester</label>
                    <select
                      class="form-control select2"
                      v-model="form.thnAjarId"
                      required
                    >
                      <option disabled value="">-- Pilih --</option>
                      <option
                        v-for="smt in thn_ajars"
                        :key="smt.id"
                        :value="smt.id"
                      >
                        {{ smt.semester }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Mata Pelajaran</label>
                    <select
                      class="form-control select2"
                      v-model="form.mapelId"
                      required
                    >
                      <option disabled value="">-- Pilih --</option>
                      <option
                        v-for="mapel in mapels"
                        :key="mapel.id"
                        :value="mapel.id"
                      >
                        {{ mapel.name_mapel }}
                      </option>
                    </select>
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
            <!-- /.card -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NKService from "../../services/nk.service";
import SiswaService from "../../services/siswa.service";
import GuruService from "../../services/guru.service";
import KelasService from "../../services/kelas.service";
import MapelService from "../../services/mapel.service";
import TahunAjarService from "../../services/thn_ajar.service";
import Swal from "sweetalert2";
// import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      disabled: false,
      nketrampilans: {},
      gurus: [],
      kelas: {},
      siswas: [],
      mapels: {},
      thn_ajars: {},
      statusmodal: false,
      selectkelas: "",
      form: {
        id: "",
        guruId: "",
        siswaId: "",
        kelasId: "",
        thnAjarId: "",
        mapelId: "",
        proyek1: "",
        proyek2: "",
        proyek3: "",
        proyek4: "",
        proyek5: "",
        proyek6: "",
        proyek7: "",
        proyek8: "",
        proses1: "",
        proses2: "",
        proses3: "",
        proses4: "",
        proses5: "",
        proses6: "",
        proses7: "",
        proses8: "",
        produk1: "",
        produk2: "",
        produk3: "",
        produk4: "",
        produk5: "",
        produk6: "",
        produk7: "",
        produk8: "",
      },
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    filterDataSiswa: function () {
      return this.siswas.filter(
        (siswa) => siswa.kelas.id === this.form.kelasId
      );
    },
    filterDataGuru: function () {
      return this.gurus.filter((guru) => guru.mapel.id === this.form.mapelId);
    },
  },
  created() {
    this.getdata();
  },
  //   watch: {
  //     selectkelas: function (kelasId) {
  //       axios
  //         .get(`http://localhost:8080/api/test/listsiswakelas/${kelasId}`)
  //         .then((response) => {
  //           console.log(response.data);
  //           this.siswas = response.data;
  //         });
  //     },
  //   },
  //   mounted() {
  //     axios.get("http://localhost:8080/api/test/listkelas").then((response) => {
  //       this.kelas = response.data;
  //     });
  //   },
  methods: {
    showModal() {
      this.statusmodal = false;
      this.resetForm();
      $("#modalmuncul").modal("show");
    },
    showModalEdit(nk) {
      this.statusmodal = true;
      $("#modalmuncul").modal("show");
      this.getNKById(nk);
    },
    getdata() {
      this.$Progress.start();
      NKService.getNK()
        .then((response) => {
          this.nketrampilans = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
      GuruService.getGuru()
        .then((response) => {
          this.gurus = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
      SiswaService.getSiswa()
        .then((response) => {
          this.siswas = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
      KelasService.getKelas()
        .then((response) => {
          this.kelas = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
      TahunAjarService.getTahunAjar()
        .then((response) => {
          this.thn_ajars = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
      MapelService.getMapel()
        .then((response) => {
          this.mapels = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
      this.$Progress.finish();
    },
    getNKById(id) {
      NKService.getNKById(id)
        .then((response) => {
          this.form = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    simpanData() {
      this.$Progress.start();
      this.loading = true;
      this.disabled = true;
      NKService.createNK(this.form)
        .then((response) => {
          this.from = response.data;
          console.log(response.data);
          this.getdata();
          this.resetForm();
          $("#modalmuncul").modal("hide");
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Data Berhasil Tersimpan",
          });
          this.$Progress.finish();
          this.loading = false;
          this.disabled = false;
        })
        .catch((e) => {
          this.$Progress.fail();
          this.loading = false;
          this.disabled = false;
          console.log(e);
        });
    },
    updateData() {
      this.$Progress.start();
      this.loading = true;
      this.disabled = true;
      NKService.updateNK(this.form.id, this.form)
        .then((response) => {
          this.from = response.data;
          console.log(response.data);
          this.getdata();
          this.resetForm();
          $("#modalmuncul").modal("hide");
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Data Berhasil Terupdate",
          });
          this.$Progress.finish();
          this.loading = false;
          this.disabled = false;
        })
        .catch((e) => {
          this.$Progress.fail();
          this.loading = false;
          this.disabled = false;
          console.log(e);
        });
    },

    deleteData(id) {
      Swal.fire({
        title: "Anda Yakin Ingin Menghapus Data Ini ?",
        text: "Klik Batal Untuk Membatalkan Penghapusan",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Hapus",
      }).then((result) => {
        if (result.value) {
          NKService.deleteNK(id)
            .then((response) => {
              Swal.fire("Terhapus", "Data Anda Sudah Terhapus", "success");
              console.log(response.data);
              this.getdata();
            })
            .catch(() => {
              Swal.fire("Gagal", "Data Gagal Terhapus", "warning");
            });
        }
      });
    },

    resetForm() {
      (this.form.guruId = ""),
        (this.form.siswaId = ""),
        (this.form.kelasId = ""),
        (this.form.thnAjarId = ""),
        (this.form.mapelId = ""),
        (this.form.proyek1 = ""),
        (this.form.proyek2 = ""),
        (this.form.proyek3 = ""),
        (this.form.proyek4 = ""),
        (this.form.proyek5 = ""),
        (this.form.proyek6 = ""),
        (this.form.proyek7 = ""),
        (this.form.proyek8 = ""),
        (this.form.proses1 = ""),
        (this.form.proses2 = ""),
        (this.form.proses3 = ""),
        (this.form.proses4 = ""),
        (this.form.proses5 = ""),
        (this.form.proses6 = ""),
        (this.form.proses7 = ""),
        (this.form.proses8 = ""),
        (this.form.produk1 = ""),
        (this.form.produk2 = ""),
        (this.form.produk3 = ""),
        (this.form.produk4 = ""),
        (this.form.produk5 = ""),
        (this.form.produk6 = ""),
        (this.form.produk7 = ""),
        (this.form.produk8 = "");
    },
  },
};
</script>