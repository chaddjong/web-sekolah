import React from "react";
import Link from "next/link";
import Image from "next/image";

const Baru = () => {
  return (
    <div className="min-vh-100">
      <div className="text-bg-dark d-flex flex-row gap-5 justify-content-end">
        <span className="me-4 py-2 btn-logout-siswa">
          {/* <Link
            href={"/login/siswa/baru"}
            className="text-decoration-none text-info"
          >
            Beranda
          </Link> */}
          <Link
                class="nav-link active text-white"
                aria-current="page"
                href={"/#"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-houses-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.207 1a1 1 0 0 0-1.414 0L.146 6.646a.5.5 0 0 0 .708.708L1 7.207V12.5A1.5 1.5 0 0 0 2.5 14h.55a2.51 2.51 0 0 1-.05-.5V9.415a1.5 1.5 0 0 1-.56-2.475l5.353-5.354L7.207 1Z" />
                  <path d="M8.793 2a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708L8.793 2Z" />
                </svg>
              </Link>
        </span>
      </div>
      <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center ">
        {/* <h1 className="me-5">⬅️</h1> */}
        <div className="shadow gap-3 d-flex flex-column">
          <br></br>
          <h2 className="mb-5 fw-lighter h2-siswabaru">
            Selamat datang siswa baru
          </h2>
          <div className="position-relative imageSiswa-wrap">
            <Image
              className="position-absolute"
              alt="gambar"
              src={"/examPic.jpg"}
              // width={500}
              // height={500}
              layout={"fill"}
              objectFit="cover"
            ></Image>
          </div>

          <Link
            href="/siswa/baru/tes"
            className="btn btn-dark fs-3 fw-semibold font-monospace shadow "
          >
            <span className="px-5">Ikut Tes</span>
          </Link>
          <Link
            href="/siswa/baru/pendaftaran"
            className="btn btn-dark fs-3 fw-semibold font-monospace shadow "
          >
            <span className="px-5">Formulir pendaftaran</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Baru;
