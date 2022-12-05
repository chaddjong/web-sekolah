import React from "react";
import Link from "next/link";

const Tes = () => {
  return (
    <>
      <div className="min-vh-100 contaner-fluid bg-siswa">
        <div className="text-bg-dark d-flex flex-row gap-5 justify-content-end">
          <span className="me-4 py-2 btn-logout-siswa">
            <Link
              href={"/login/siswa/baru"}
              className="text-decoration-none text-info"
            >
              Logout
            </Link>
          </span>
        </div>
        <div className="container justify-content-center align-items-center">
          <div className="row py-5 justify-content-center">
            <div className="col-md-8 shadow-lg ">
              <div className="d-flex justify-content-between">
                <span className="fs-3 mt-2 mx-4 font-monospace">
                  Online Test
                </span>
                <span className="fs-5 mt-3 mx-4 font-monospace">
                  Username : John Doe
                </span>
              </div>
              <div className="py-5 px-4 font-monospace fw-normal">
                <div className=" py-3">
                  <form>
                    <p>1. Perhatikan penjumlahan bilangan 5 angka berikut:</p>
                    <p>3 1 7 3 1</p>
                    <p>6 8 2 6</p>
                    <p>
                      Berapa nilai A yang harus kamu ganti supaya hasil
                      penjumlahan tersebut bilangan 6 angka.
                    </p>

                    <ul className="list-unstyled">
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          class="form-check-label ms-2"
                          for="flexRadioDefault1"
                        >
                          A. 6, Tidak
                        </label>
                      </li>
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label
                          class="form-check-label ms-2"
                          for="flexRadioDefault2"
                        >
                          B. 7, Tidak
                        </label>
                      </li>
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault3"
                        />
                        <label
                          class="form-check-label ms-2"
                          for="flexRadioDefault3"
                        >
                          C. 8, Bisa
                        </label>
                      </li>
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault4"
                        />
                        <label
                          class="form-check-label ms-2"
                          for="flexRadioDefault4"
                        >
                          D. 9, Bisa
                        </label>
                      </li>
                    </ul>
                  </form>
                </div>
                <div className=" py-3">
                  <form>
                    <p>
                      2. Duta bermain kartu dengan tiga kartu angka berikut: 2,
                      1, dan 6.
                    </p>
                    <p>
                      Kartu-kartu tersebut ia susun sehingga terbentuk bilangan
                      tiga angka dengan nilai yang berbeda.
                    </p>
                    <p>
                      Bilangan terkecil yang terbentuk dari ketiga kartu
                      tersebut adalah ....
                    </p>

                    <ul className="list-unstyled">
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault21"
                        />
                        <label
                          class="form-check-label ms-2"
                          for="flexRadioDefault21"
                        >
                          A. 216
                        </label>
                      </li>
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault22"
                        />
                        <label
                          class="form-check-label ms-2"
                          for="flexRadioDefault22"
                        >
                          B. 162
                        </label>
                      </li>
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault23"
                        />
                        <label
                          class="form-check-label ms-2"
                          for="flexRadioDefault23"
                        >
                          C. 126
                        </label>
                      </li>
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault24"
                        />
                        <label
                          class="form-check-label ms-2"
                          for="flexRadioDefault24"
                        >
                          D. 146
                        </label>
                      </li>
                    </ul>
                  </form>
                </div>
                <div className=" py-3">
                  <form>
                    <p>
                      3. Kamar Salsa seluas 4 m x 8 m. Ayah Salsa bermaksud
                      mengganti ubin kamar Salsa dengan yang baru. Ukuran ubin
                      yang akan dipasang adalah 40 cm x 40 cm. Jumlah ubin baru
                      yang diperlukan ialah sebanyak ....
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault31"
                        />
                        <label
                          class="form-check-label ms-2"
                          for="flexRadioDefault31"
                        >
                          A. 20 ubin
                        </label>
                      </li>
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault32"
                        />
                        <label
                          class="form-check-label ms-2"
                          for="flexRadioDefault32"
                        >
                          B. 40 ubin
                        </label>
                      </li>
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault33"
                        />
                        <label
                          class="form-check-label ms-2"
                          for="flexRadioDefault33"
                        >
                          C. 200 ubin
                        </label>
                      </li>
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault34"
                        />
                        <label
                          class="form-check-label ms-2"
                          for="flexRadioDefault34"
                        >
                          D. 400 ubin
                        </label>
                      </li>
                    </ul>
                  </form>
                </div>
                <div className=" py-3">
                  <form>
                    <p>
                      4. Yusuf membeli gula merah 14 kg untuk membuat cendol.
                      Karena kurang, Yusuf membeli lagi gula merah sebanyak 0,85
                      kg. Setelah selesai membuat cendol, ternyata masih tersisa
                      30% dari keseluruhan gula merah.
                    </p>
                    <p>
                      Berapakah gula merah yang digunakan Yusuf untuk membuat
                      cendol ….
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault41"
                        />
                        <label
                          class="form-check-label ms-2"
                          for="flexRadioDefault41"
                        >
                          A. 0,77 kg
                        </label>
                      </li>
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault42"
                        />
                        <label
                          class="form-check-label ms-2"
                          for="flexRadioDefault42"
                        >
                          B. 0,7 kg
                        </label>
                      </li>
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault43"
                        />
                        <label
                          class="form-check-label ms-2"
                          for="flexRadioDefault43"
                        >
                          C. 0,33 kg
                        </label>
                      </li>
                      <li>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault44"
                        />
                        <label
                          class="form-check-label ms-2"
                          for="flexRadioDefault44"
                        >
                          D. 0,3 kg
                        </label>
                      </li>
                    </ul>
                  </form>
                </div>
                <Link href="/siswa/baru" className="btn btn-success">
                  Submit work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tes;
