<template>
  <div>
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Data Walas</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to="/dashboard">Dashboard</router-link>
              </li>
              <li class="breadcrumb-item active">Data Walas</li>
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
                    Tambah Walas
                  </button>
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table id="myTable" class="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>NIP</th>
                        <th>Guru</th>
                        <th>Kelas</th>
                        <th>Status</th>
                        <th>Tahun Ajaran</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(walass, index) in walas" :key="index.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ walass.guru.nip }}</td>
                        <td>{{ walass.guru.name }}</td>
                        <td>{{ walass.kelas.name_kelas }}</td>
                        <td
                          v-if="
                            walass.thn_ajar &&
                            walass.thn_ajar.semester_aktif === 'aktif'
                          "
                        >
                          <span class="badge bg-success">{{
                            walass.thn_ajar.semester_aktif
                          }}</span>
                        </td>

                        <td
                          v-if="
                            walass.thn_ajar &&
                            walass.thn_ajar.semester_aktif === 'tidak-aktif'
                          "
                        >
                          <span class="badge bg-danger">{{
                            walass.thn_ajar.semester_aktif
                          }}</span>
                        </td>
                        <td>{{ walass.thn_ajar.thn_ajaran }}</td>
                        <td>
                          <a
                            href="#"
                            class="badge bg-info mr-2"
                            @click="showModalEdit(walass.id)"
                            ><i class="fas fa-edit"></i
                          ></a>
                          <a
                            href="#"
                            class="badge bg-danger"
                            @click="deleteData(walass.id)"
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
                Tambah Walas
              </h5>
              <h5
                class="modal-title"
                id="exampleModalLongTitle"
                v-show="statusmodal"
              >
                Ubah Walas
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
                      <div
                        v-if="message"
                        class="alert alert-danger"
                        role="alert"
                      >
                        {{ message }}
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6">
                        <div class="form-group">
                          <label>Name</label>
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
                      </div>
                      <div class="col-6">
                        <div class="form-group">
                          <label>NIP</label>
                          <select
                            class="form-control select2"
                            v-model="form.guruId"
                            disabled
                          >
                            <!-- <option disabled value="">-- Pilih --</option> -->
                            <option
                              v-for="guru in gurus"
                              :key="guru.id"
                              :value="guru.id"
                            >
                              {{ guru.nip }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label>Kelas</label>
                      <select
                        class="form-control select2"
                        v-model="form.kelassId"
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
                      <label>Tahun Ajaran</label>
                      <select
                        class="form-control select2"
                        v-model="form.thnAjarId"
                        required
                      >
                        <option disabled value="">-- Pilih --</option>
                        <option
                          v-for="thn_ajar in thn_ajars"
                          :key="thn_ajar.id"
                          :value="thn_ajar.id"
                        >
                          {{ thn_ajar.thn_ajaran }}
                        </option>
                      </select>
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
import WalasService from "../../services/walas.service";
import KelasService from "../../services/kelas.service";
import TahunAjarService from "../../services/thn_ajar.service";
import GuruService from "../../services/guru.service";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      loading: false,
      disabled: false,
      walas: {},
      thn_ajars: {},
      kelas: {},
      gurus: {},
      statusmodal: false,
      form: {
        id: "",
        guruId: "",
        kelassId: "",
        thnAjarId: "",
      },
      message: "",
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
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
    showModalEdit(walass) {
      this.statusmodal = true;
      $("#modalmuncul").modal("show");
      this.getWalasById(walass);
    },
    getdata() {
      this.$Progress.start();
      WalasService.getWalas()
        .then((response) => {
          this.walas = response.data;
          $(function () {
            $("#myTable")
              .DataTable({
                responsive: false,
                lengthChange: true,
                autoWidth: true,
                buttons: ["copy", "csv", "excel", "pdf", "print"],
              })
              .buttons()
              .container()
              .appendTo("#myTable_wrapper .col-md-6:eq(0)");
          });
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

      GuruService.getGuru()
        .then((response) => {
          this.gurus = response.data;
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
      this.$Progress.finish();
    },
    getWalasById(id) {
      WalasService.getWalasById(id)
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
      WalasService.createWalas(this.form)
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
          this.message =
            (e.response && e.response.data && e.response.data.message) ||
            e.message ||
            e.toString();
          console.log(e);
        });
    },
    updateData() {
      this.$Progress.start();
      this.loading = true;
      this.disabled = true;
      WalasService.updateWalas(this.form.id, this.form)
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
          this.message =
            (e.response && e.response.data && e.response.data.message) ||
            e.message ||
            e.toString();
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
          WalasService.deleteWalas(id)
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
        (this.form.kelassId = ""),
        (this.form.thnAjarId = "");
    },
  },
};
</script>