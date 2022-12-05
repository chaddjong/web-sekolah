import React from "react";
import Link from "next/link";

export default function Verifikasi() {
  return (
    <div className="bg-guru">
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand fw-bold text-decoration-none text-white mx-5" href="#">
            Dashboard Kepala Sekolah
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="mx-3">
            {" "}
            <Link href="/login" className="text-decoration-none color red fw-bold text-danger">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                />
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
      <div className="container-fluid ">
        <div className="row min-vh-100">
          <div className="col-md-2 p-0 border-3 border-end border-dark bg-guru">
            <div className="h-25 d-flex flex-column align-items-center justify-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="black" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
              <p className="fw-bold">John Doe</p>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center h-50 gap-2 shadow-sm">
              <Link href={"/kepsek/hasil"} className="d-block w-100 btn rounded-pill btn-dark py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-check me-2" viewBox="0 0 16 16">
                  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z" />
                  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z" />
                  <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z" />
                </svg>
                Validasi Nilai Raport
              </Link>

              <Link href={"/kepsek/hasilppdb"} className="d-block rounded-pill w-100 btn btn-dark py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-checklist me-2" viewBox="0 0 16 16">
                  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                </svg>
                Lihat Hasil PPDB
              </Link>
            </div>
          </div>
          <div className="col-md-10 mt-5">
            <h3 className="fw-bold mb-5">Rapor</h3>

            <form class="d-flex mb-4" role="search">
              <input class="form-control me-2" type="search" placeholder="John" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <table class="table table-hover table-striped-columns">
              <thead className="bg-primary">
                <tr className="">
                  <th scope="col">No</th>
                  <th scope="col">Mata pelajaran</th>
                  <th scope="col">KKM</th>
                  <th scope="col">Nilai Pengetahuan</th>
                  <th scope="col">Nilai Keterampilan</th>
                  <th scope="col">Keterangan</th>
                </tr>
              </thead>
              <tbody className="table table-info">
                <tr>
                  <th scope="row">1</th>
                  <td>Matematika</td>
                  <td>60</td>
                  <td>75</td>
                  <td>80</td>
                  <td>Baik</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Bahasa Indonesia</td>
                  <td>65</td>
                  <td>90</td>
                  <td>90</td>
                  <td>Sangat baik</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Bahasa inggris</td>
                  <td>65</td>
                  <td>80</td>
                  <td>85</td>
                  <td>Baik</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Kimia</td>
                  <td>60</td>
                  <td>70</td>
                  <td>70</td>
                  <td>Cukup baik</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Fisika</td>
                  <td>60</td>
                  <td>80</td>
                  <td>75</td>
                  <td>Baik</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Biology</td>
                  <td>60</td>
                  <td>80</td>
                  <td>85</td>
                  <td>Baik</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>PKN</td>
                  <td>60</td>
                  <td>80</td>
                  <td>75</td>
                  <td>Baik</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Sejarah</td>
                  <td>60</td>
                  <td>90</td>
                  <td>80</td>
                  <td>Baik</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Sosiologi</td>
                  <td>65</td>
                  <td>95</td>
                  <td>95</td>
                  <td>Sangat baik</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Geografi</td>
                  <td>60</td>
                  <td>80</td>
                  <td>75</td>
                  <td>Baik</td>
                </tr>
              </tbody>
            </table>
            <button type="button" class="btn btn-primary text-center w-50">
              Verifikasi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
