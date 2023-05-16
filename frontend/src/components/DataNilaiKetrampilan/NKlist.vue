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
                <div class="card-tools">
                  <button
                    type="button"
                    class="btn btn-success mb-2"
                    @click="showModal"
                  >
                    Tambah Nilai
                  </button>
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table id="example2" class="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th colSpan="32" class="text-center">
                          Nilai Ketrampilan
                        </th>
                      </tr>
                      <tr>
                        <th rowSpan="2" class="align-middle">No</th>
                        <th rowSpan="2" class="align-middle">Guru</th>
                        <th rowSpan="2" class="align-middle text-center">
                          Siswa
                        </th>
                        <th rowSpan="2" class="align-middle">Kelas</th>
                        <th rowSpan="2" class="align-middle text-center">
                          Mata Pelajaran
                        </th>
                        <th rowSpan="2" class="align-middle">Semester</th>
                        <th colSpan="8" class="text-center">Proses</th>
                        <th colSpan="8" class="text-center">Proyek</th>
                        <th colSpan="8" class="text-center">Produk</th>
                        <th rowSpan="2" class="align-middle">CretaedBy</th>
                        <th rowSpan="2" class="align-middle">Action</th>
                      </tr>
                      <tr>
                        <th class="text-center">1</th>
                        <th class="text-center">2</th>
                        <th class="text-center">3</th>
                        <th class="text-center">4</th>
                        <th class="text-center">5</th>
                        <th class="text-center">6</th>
                        <th class="text-center">7</th>
                        <th class="text-center">8</th>
                        <th class="text-center">1</th>
                        <th class="text-center">2</th>
                        <th class="text-center">3</th>
                        <th class="text-center">4</th>
                        <th class="text-center">5</th>
                        <th class="text-center">6</th>
                        <th class="text-center">7</th>
                        <th class="text-center">8</th>
                        <th class="text-center">1</th>
                        <th class="text-center">2</th>
                        <th class="text-center">3</th>
                        <th class="text-center">4</th>
                        <th class="text-center">5</th>
                        <th class="text-center">6</th>
                        <th class="text-center">7</th>
                        <th class="text-center">8</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(nk, index) in nketrampilans" :key="index.id">
                        <td class="align-middle text-center">
                          {{ index + 1 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.guru.name }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.siswa.name }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.kelas.name_kelas }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.mapel.name_mapel }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.thn_ajar.semester }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.proyek1 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.proyek2 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.proyek3 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.proyek4 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.proyek5 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.proyek6 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.proyek7 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.proyek8 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.proses1 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.proses2 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.proses3 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.proses4 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.proses5 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.proses6 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.proses7 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.proses8 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.produk1 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.produk2 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.produk3 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.produk4 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.produk5 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.produk6 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.produk7 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.produk8 }}
                        </td>
                        <td class="align-middle text-center">
                          {{ nk.user.username }}
                        </td>
                        <td>
                          <a
                            href="#"
                            class="badge bg-info mr-2"
                            @click="showModalEdit(nk.id)"
                            ><i class="fas fa-edit"></i
                          ></a>
                          <a
                            href="#"
                            class="badge bg-danger"
                            @click="deleteData(nk.id)"
                            ><i class="fas fa-trash-alt"></i
                          ></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="modalmuncul"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalmuncul1"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title"
                id="exampleModalLongTitle"
                v-show="!statusmodal"
              >
                Tambah Nilai Ketrampilan
              </h5>
              <h5
                class="modal-title"
                id="exampleModalLongTitle"
                v-show="statusmodal"
              >
                Ubah Nilai Ketrampilan
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" @click="resetForm()">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="card card-default">
                <!-- /.card-header -->
                <!-- form start -->
                <form
                  @submit.prevent="statusmodal ? updateData() : simpanData()"
                >
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
                          v-for="guru in gurus"
                          :key="guru.id"
                          :value="guru.id"
                        >
                          {{ guru.name }}
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
                          v-for="siswa in siswas"
                          :key="siswa.id"
                          :value="siswa.id"
                        >
                          {{ siswa.name }}
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
                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label for="proyek1">Proyek1</label>
                          <input
                            type="number"
                            class="form-control"
                            id="proyek1"
                            placeholder=""
                            v-model="form.proyek1"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="proyek2">Proyek2</label>
                          <input
                            type="number"
                            class="form-control"
                            id="proyek2"
                            placeholder=""
                            v-model="form.proyek2"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="proyek3">Proyek3</label>
                          <input
                            type="number"
                            class="form-control"
                            id="proyek3"
                            placeholder=""
                            v-model="form.proyek3"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="proyek4">Proyek4</label>
                          <input
                            type="number"
                            class="form-control"
                            id="proyek4"
                            placeholder=""
                            v-model="form.proyek4"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="proyek5">Proyek5</label>
                          <input
                            type="number"
                            class="form-control"
                            id="proyek5"
                            placeholder=""
                            v-model="form.proyek5"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="proyek6">Proyek6</label>
                          <input
                            type="number"
                            class="form-control"
                            id="proyek6"
                            placeholder=""
                            v-model="form.proyek6"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="proyek7">Proyek7</label>
                          <input
                            type="number"
                            class="form-control"
                            id="proyek7"
                            placeholder=""
                            v-model="form.proyek7"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="proyek8">Proyek8</label>
                          <input
                            type="number"
                            class="form-control"
                            id="proyek"
                            placeholder=""
                            v-model="form.proyek8"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label for="proses1">Proses1</label>
                          <input
                            type="number"
                            class="form-control"
                            id="proses1"
                            placeholder=""
                            v-model="form.proses1"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="proses2">Proses2</label>
                          <input
                            type="number"
                            class="form-control"
                            id="proses2"
                            placeholder=""
                            v-model="form.proses2"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="proses3">Proses3</label>
                          <input
                            type="number"
                            class="form-control"
                            id="proses3"
                            placeholder=""
                            v-model="form.proses3"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="proses4">Proses4</label>
                          <input
                            type="number"
                            class="form-control"
                            id="proses4"
                            placeholder=""
                            v-model="form.proses4"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="proses5">Proses5</label>
                          <input
                            type="number"
                            class="form-control"
                            id="proses5"
                            placeholder=""
                            v-model="form.proses5"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="proses6">Proses6</label>
                          <input
                            type="number"
                            class="form-control"
                            id="proses6"
                            placeholder=""
                            v-model="form.proses6"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="proses7">Proses7</label>
                          <input
                            type="number"
                            class="form-control"
                            id="proses7"
                            placeholder=""
                            v-model="form.proses7"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="proses8">Proses8</label>
                          <input
                            type="number"
                            class="form-control"
                            id="proses"
                            placeholder=""
                            v-model="form.proses8"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label for="produk1">Produk1</label>
                          <input
                            type="number"
                            class="form-control"
                            id="produk1"
                            placeholder=""
                            v-model="form.produk1"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="produk2">Produk2</label>
                          <input
                            type="number"
                            class="form-control"
                            id="produk2"
                            placeholder=""
                            v-model="form.produk2"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="produk3">Produk3</label>
                          <input
                            type="number"
                            class="form-control"
                            id="produk3"
                            placeholder=""
                            v-model="form.produk3"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="produk4">Produk4</label>
                          <input
                            type="number"
                            class="form-control"
                            id="produk4"
                            placeholder=""
                            v-model="form.produk4"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="produk5">Produk5</label>
                          <input
                            type="number"
                            class="form-control"
                            id="produk5"
                            placeholder=""
                            v-model="form.produk5"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="produk6">Produk6</label>
                          <input
                            type="number"
                            class="form-control"
                            id="produk6"
                            placeholder=""
                            v-model="form.produk6"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="produk7">Produk7</label>
                          <input
                            type="number"
                            class="form-control"
                            id="produk7"
                            placeholder=""
                            v-model="form.produk7"
                            required
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="produk8">Produk8</label>
                          <input
                            type="number"
                            class="form-control"
                            id="produk"
                            placeholder=""
                            v-model="form.produk8"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                      @click="resetForm()"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="disabled"
                      v-show="!statusmodal"
                    >
                      <i v-show="loading" class="fa fa-spinner fa-spin"></i>
                      Simpan
                    </button>
                    <button
                      type="submit"
                      class="btn btn-success"
                      :disabled="disabled"
                      v-show="statusmodal"
                    >
                      <i v-show="loading" class="fa fa-spinner fa-spin"></i>
                      Ubah
                    </button>
                  </div>
                </form>
              </div>
            </div>
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
export default {
  data() {
    return {
      loading: false,
      disabled: false,
      nketrampilans: {},
      gurus: {},
      kelas: {},
      siswas: {},
      mapels: {},
      thn_ajars: {},
      statusmodal: false,
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
    // filterdatasiswa: function () {
    //   return this.siswas.filter((siswa) => {
    //     return siswa.kelasId.match(this.kelas);
    //   });
    // },
  },
  created() {
    this.getdata();
  },
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