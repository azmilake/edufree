import { useEffect } from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import NavBottom from '../components/NavigationBottom';

const Blog = () => {
  useEffect(() => {
    document.title = `Edufree - Blog`;
  }, []);

  return (
    <>
      <Navigation />

      <section className="w-full container mx-auto font-poppins flex flex-col justify-center items-center mt-20">
        <div className="flex flex-col mb-12 px-5 lg:px-0">
          <div className="bg-black text-white px-1 py-1 rounded w-[154px] flex justify-center font-medium text-base items-center">
            <p># Tips & Tricks</p>
          </div>
          <div className="w-full lg:w-[855px] py-2">
            <h1 className="font-semibold text-[42px]">
              Cara Mudah Untuk Memulai Belajar Programming - EDUFREE
            </h1>
          </div>
          <div className="text-base text-gray-600">
            <p>
              <span className="font-bold">Dimas Rizky</span> diposting pada 27
              Januari 2023
            </p>
          </div>
        </div>
      </section>

      <section className="w-full container mx-auto font-poppins flex flex-col justify-center items-center px-5 lg:px-0">
        <div className="mb-12">
          <img
            src="/images/blog-cover.jpg"
            alt="blog-cover"
            className="rounded-none"
          />
        </div>
      </section>

      <section className="w-full lg:w-[855px] mx-auto font-poppins flex flex-col justify-center items-center px-5 lg:px-0">
        <div className="flex flex-col mb-12">
          <div>
            <p className="flex justify-center flex-col text-base text-gray-500 leading-relaxed mb-20 px-5 lg:px-0">
              Sebelum mengetahui cara belajar pemrograman, ketahui terlebih
              dahulu apa arti kata pemrograman. Pemrograman adalah penggunaan
              satu atau lebih algoritma untuk menjadi bahasa pemrograman yang
              saling berkaitan, di mana pada akhirnya dapat menghasilkan suatu
              program di kompute Setelah tau pengertian dasar dari apa itu
              pemrograman, sekarang saatnya kita bahas tips & trik serta cara
              belajar pemrograman dari dasar, untuk kamu yang baru memulai. Tak
              perlu khawatir, gampang kok.
              <br />
              <span className="py-6 font-medium text-2xl text-gray-800">
                1. Pilih bahasa pemrograman yang ingin dipelajari dan kuasai
              </span>{' '}
              Langkah pertama untuk belajar pemrograman secara otodidak adalah
              menentukan bahasa pemrograman yang akan kamu pelajari. Menentukan
              bahasa pemrograman penting kamu lakukan untuk menentukan fokus
              dalam belajar bahasa pemrograman. Mempelajari bahasa pemrograman
              secara acak hanya akan menghambat proses belajar bahasa
              pemrograman. <br /> <br />
              Tips dalam memilih bahasa pemrograman adalah didasarkan atas
              kemampuan yang ada pada diri kamu. Penting untuk mengetahui
              kemampuan dalam diri agar kamu dapat belajar bahasa pemrograman
              dengan mudah. <br /> <br /> Jika kamu masih pemula dalam bidang
              ini, kamu dapat mempelajari HTML terlebih dahulu. Selanjutnya
              ketika kamu sudah pro mengenai HTML kamu bisa lanjut ke pembahasan
              selanjutnya. Intinya sebagai pemula kamu bisa belajar bahasa
              pemrograman yang paling mudah dipelajari terlebih dahulu.
              <br /> <br /> Namun, yang perlu digaris bawahi adalah belajar
              pemrograman tidak cukup dengan menguasai satu bahasa pemrograman
              saja. Kamu perlu meningkatkan pula hal-hal di bawah ini: <br />{' '}
              <br />
              <ul className="flex flex-col lg:pl-5 px-5">
                <li className="list-disc">
                  Meningkatkan cara mempelajari bahasa pemrograman dengan
                  tingkat kesulitan yang lebih tinggi
                </li>
                <li className="list-disc">
                  {' '}
                  Buat notulensi kecil untuk mencatat poin penting dalam bahasa
                  pemrograman yang sedang kamu pelajari
                </li>
                <li className="list-disc">
                  Membaca ulang catatan sesering mungkin agar tidak mudah lupa
                </li>
              </ul>{' '}
              <span className="py-6 font-medium text-2xl text-gray-800">
                2. Gunakan bantuan modul atau bahan bacaan pemrograman dengan
                tutorial lengkap
              </span>{' '}
              Langkah kedua dalam cara belajar bahasa pemrograman adalah
              penggunaan modul atau buku sebagai alat pendukung dalam belajar.
              Modul dan buku dapat menjadi alat yang tepat untuk mempercepat
              proses belajar pemrograman.
              <br /> <br /> Kamu perlu memilih modul dan buku yang tepat dengan
              tutorial cara belajar pemrograman yang lengkap. Jika kamu
              menggunakan lebih dari satu modul atau buku bacaan, pastikan untuk
              menata atau menyusun bahan bacaan tersebut secara runtut agar kamu
              tidak kesulitan dalam belajar. <br /> <br />
              Menggunakan bahan bacaan yang terpisah dan tercecer hanya akan
              membuat proses belajar pemrograman yang kamu lakukan semakin lama.
              Oleh karena itu pastikan kamu selalu melakukan inventarisasi bahan
              bacaan yang kamu gunakan selama belajar pemrograman.
              <br /> <br /> Psst.. kamu bisa menemukan modul belajar pemrograman
              juga di kursus-kursus yang ada di EDUFREE yang tentunya geratis.
              <span className="py-6 font-medium text-2xl text-gray-800">
                3. Buat dan susun jadwal belajar pemrograman
              </span>
              Langkah ketiga dalam cara belajar pemrograman yaitu membuat jadwal
              belajar pemrograman. Kamu dapat membuat jadwal belajar harian
              ataupun mingguan. Membuat jadwal belajar debat mempercepat kamu
              dalam memahami pemrograman.
              <br /> <br /> Kamu perlu memaksakan diri untuk menaati jadwal
              belajar pemrograman yang kamu buat. Jangan terbiasa untuk absen
              untuk tidak belajar meski hanya satu kali saja. Hal tersebut
              karena jika terus dibiarkan akan semakin meningkatkan rasa malas
              kamu dalam belajar.
              <br /> <br /> Berbeda apabila belajar dilakukan dengan
              sungguh-sungguh dan tepat jadwal, maka kegiatan belajar lama-lama
              akan menjadi kebiasaan.
              <br /> <br /> Dalam menyusun jadwal belajar pemrograman kamu bisa
              meluangkan waktu sekitar 1 hingga 2 jam dalam satu hari untuk
              belajar pemrograman. Tidak perlu melakukan rutinitas belajar
              pemrograman setiap hari apabila memang waktu itu yang kamu punya
              tidak sebanyak itu.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <NavBottom />
    </>
  );
};

export default Blog;
