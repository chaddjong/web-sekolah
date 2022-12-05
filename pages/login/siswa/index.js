import React from "react";
import Link from "next/link";

const Siswa = () => {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100 text-dark">
        <div className="col-md-6 login-bg text-white ">
          <div className=" d-flex text-bg justify-content-center flex-column ms-3 mt-5">
            {/* <h3 className="w-50">Turn your ideas into reality</h3> */}
            {/* <p className="w-75">
              {`'It's never too late to be what you might've been.” ―George Eliot.`}
            </p> */}
          </div>
        </div>
        <div className="col-md-6">
          <div className="row min-vh-100 py-5 px-5 justify-content-center align/-items-center">
            <div className="border shadow-lg col-md-10 bg-card-login rounded-5 overflow-hidden">
              <form className="">
                <div class="mb-3">
                  <h3 className="fw-bold">Login Siswa</h3>
                  <p>Welcome back! Please enter your details</p>
                  <label
                    for="exampleInputEmail1"
                    class="form-label mt-3 fw-bold"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control rounded-5"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your Email"
                  />
                  <div id="emailHelp" class="form-text">
                    {/* Well never share your email with anyone else. */}
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label fw-bold">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    class="form-control rounded-5"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="row justify-content-center">
                  <Link
                    href={"/siswa"}
                    passHref
                    className="d-block row align-items-center"
                  >
                    <button type="submit" class="btn btn-dark shadow-sm">
                      Login
                    </button>
                  </Link>
                  {/* <Link
                    href={"/login/siswa/baru"}
                    passHref
                    className="d-block row align-items-center"
                  >
                    <button
                      type="submit"
                      class="btn mt-3 text-primary btn-outline-dark shadow-sm"
                    >
                      Siswa Baru
                    </button>
                  </Link> */}
                  <Link
                    href={"/"}
                    passHref
                    className="d-block row align-items-center"
                  >
                    <button type="submit" class="btn mt-3 btn-danger shadow-sm">
                      Kembali ke Home
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Siswa;
