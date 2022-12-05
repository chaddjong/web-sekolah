import Link from "next/link";
import React from "react";

const Pendaftaran = () => {
  return (
    <>
      <div className="min-vh-100 contaner-fluid bg-login">
        <div className="container justify-content-center align-items-center">
          <div className="row py-5 justify-content-center">
            <div className="col-md-8 shadow-lg ">
              <div className="d-flex justify-content-between">
                <span className="fs-3 mt-2 mx-4 font-monospace">Registration Form</span>
                <span className="fs-5 mt-3 mx-4 font-monospace fw-semibold">Username : John Doe</span>
              </div>
              <div className="py-5 px-4 font-monospace">
                <div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Nama Lengkap
                    </label>
                    <input type="text" class="form-control form-control" id="exampleFormControlInput1" value={"Mark"} />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Alamat Email
                    </label>
                    <input type="email" class="form-control form-control" id="exampleFormControlInput1" value={"Airmadidi"} />
                  </div>
                  <div className="mb-3">
                    <form>
                      <label for="flexRadioDefault41" class="form-label">
                        Jenis Kelamin
                      </label>
                      <ul className="list-unstyled">
                        <li>
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault41" checked />
                          <label class="form-check-label ms-2" for="flexRadioDefault41">
                            Laki-Laki
                          </label>
                        </li>
                        <li>
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault42" />
                          <label class="form-check-label ms-2" for="flexRadioDefault42">
                            Perempuan
                          </label>
                        </li>
                      </ul>
                    </form>
                  </div>
                  <div className="mb-3 w-25">
                    <label for="umur" class="form-label">
                      Umur
                    </label>
                    <input type="number" class="form-control-lg form-control " id="umur" value={"18"} />
                  </div>
                  <div className="mb-3 w-50">
                    <label for="agama" class="form-label">
                      Agama
                    </label>
                    <input type="text" class="form-control-lg form-control " id="agama" value={"Kristen"} />
                  </div>
                  <div className="mb-3 w-100">
                    <label for="tempat" class="form-label">
                      Tempat Lahir
                    </label>
                    <textarea type="text" class="form-control-lg form-control " id="tempat" value={"unklab, airmadidi Minahasa utara"} rows={5} />
                  </div>
                  <div className="mb-3 w-50">
                    <label for="tanggal" class="form-label">
                      Tanggal Lahir (bulan | tanggal | tahun)
                    </label>
                    <input type="date" class="form-control-lg form-control " id="tanggal" value={"18/11/22"} />
                  </div>
                  <div className="mb-3 w-50">
                    <label for="nomor" class="form-label">
                      Nomor Telepon
                    </label>
                    <input type="number" class="form-control-lg form-control " id="nomor" value={"0812341232"} />
                  </div>
                </div>
                <Link href="/ppdb" className="btn btn-success" type="submit">
                  Validasi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pendaftaran;
