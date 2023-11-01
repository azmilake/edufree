import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import EastIcon from '@mui/icons-material/East';
import StarRateIcon from '@mui/icons-material/StarRate';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import NavBottom from '../components/NavigationBottom';

const testimonials = [
  {
    id: 1,
    name: 'Jenny Wilson',
    job: 'Vice President',
    photo: '/images/profile.jpg',
    review: `"Materi yang disampaikan mudah dimengerti, kualitas
  instruktur sangat baik serta responnya yang cepat. So,
  kursus disini sangat sangat saya rekomendasikan!!"`,
  },
  {
    id: 2,
    name: 'Jenny Wilson',
    job: 'Vice President',
    photo: '/images/profile.jpg',
    review: `"Materi yang disampaikan mudah dimengerti, kualitas
  instruktur sangat baik serta responnya yang cepat. So,
  kursus disini sangat sangat saya rekomendasikan!!"`,
  },
  {
    id: 3,
    name: 'Jenny Wilson',
    job: 'Vice President',
    photo: '/images/profile.jpg',
    review: `"Materi yang disampaikan mudah dimengerti, kualitas
  instruktur sangat baik serta responnya yang cepat. So,
  kursus disini sangat sangat saya rekomendasikan!!"`,
  },
];

const courses = [
  {
    id: 1,
    rating: 4.9,
    title: 'Dasar Pemrograman Web',
    description:
      'Materi pembelajaran mengenai pembuatan website tingkat pemula',
    time: 4.5,
    video: 20,
    students: 1.932,
    photo: '/images/course-pic1.jpg',
  },
  {
    id: 2,
    rating: 4.9,
    title: 'Digital Marketing 101',
    description: 'Materi mengenai strategi dan konsep marketing  pemula',
    time: 6.2,
    video: 32,
    students: 930,
    photo: '/images/course-pic2.jpg',
  },
  {
    id: 3,
    rating: 4.9,
    title: 'Data Science Dasar',
    description: 'Materi pembelajaran mengenai dasar-dasar data science',
    time: 8,
    video: 46,
    students: 1.043,
    photo: '/images/course-pic3.jpg',
  },
];

const blogs = [
  {
    id: 1,
    date: '19 Jan 2023',
    title: 'Cara Mudah Untuk Memulai Belajar Programming - EDUFREE',
    content:
      'Menjadi seorang programmer saat ini sudah sangat mudah untuk dipelajari oleh siapapun ...',
    photo: '/images/blog-pic1.jpg',
  },
  {
    id: 2,
    date: '19 Jan 2023',
    title: 'Tips Membuat Website Landing Page Bussines - EDUFREE',
    content:
      'Pentingnya website dalam menumbuhkan rasa kepercayaan terhadap bisnis, membuat ...',
    photo: '/images/blog-pic2.jpg',
  },
  {
    id: 3,
    date: '19 Jan 2023',
    title: 'Cara Installasi Wordpress Untuk Pemula -EDUFREE',
    content:
      'Membuat website saat ini sudah bisa tanpa codingan, kini kamu bisa membuatnya dengan ...',
    photo: '/images/blog-pic3.jpg',
  },
];

const Home = () => {
  useEffect(() => {
    document.title = 'Edufree - Platform Belajar Gratis';
  }, []);

  return (
    <>
      <Navigation />

      {/* section header */}
      <section className="w-full bg-black h-[580px] flex justify-between items-center text-white font-poppins px-1 lg:px-0">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-full px-5 lg:px-0 lg:w-6/12 flex flex-col">
            <h1 className="font-semibold lg:text-[42px] mb-8 text-3xl leading-snug">
              Bangun dan Wujudkan Cita Bersama EDUFREE
            </h1>
            <p className="text-base mb-16">
              EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara
              online yang bertujuan untuk membantu kamu meraih cita di bidang
              teknologi.
            </p>
            <span className="flex gap-8 items-center">
              <Link to="/courses">
                <button className="px-8 lg:px-10 py-3 bg-color1 rounded text-black text-base flex-shrink-0">
                  Lihat Kursus
                </button>
              </Link>
              <Link
                to=""
                className="text-base flex lg:gap-3 gap-1 items-center flex-shrink-0"
              >
                Lihat Alur Belajar <EastIcon />
              </Link>
            </span>
          </div>
          <div className="w-6/12 lg:-mr-20 hidden md:flex p-5 lg:p-0">
            <img src="/images/header-pic.png" />
          </div>
        </div>
      </section>

      {/* section statistik */}
      <section className="w-full bg-color2 h-[230px] font-poppins my-auto flex items-center mb-28 lg:p-10">
        <div className="w-full container mx-auto flex md:flex-col lg:flex-row items-center md:gap-x-36 flex-col gap-y-5 md:gap-y-0">
          <div className="flex md:space-x-4 md:justify-center md:mb-6 gap-x-4 ml-6 md:ml-0 lg:flex-shrink-0">
            <span className="flex flex-col p-3 lg:p-0">
              <h3 className="font-semibold text-md md:text-[32px] lg:mb-3">
                21.000+
              </h3>
              <p className="text-sm md:text-base text-gray-500">
                Siswa terdaftar
              </p>
            </span>
            <span className="flex flex-col p-3 lg:p-0">
              <h3 className="font-semibold text-md md:text-[32px] lg:mb-3">
                100+
              </h3>
              <p className="text-sm md:text-base text-gray-500">
                Instruktur Ahli
              </p>
            </span>
            <span className="flex flex-col p-3 lg:p-0">
              <h3 className="font-semibold text-md md:text-[32px] lg:mb-3">
                150+
              </h3>
              <p className="text-sm lg:text-base text-gray-500">
                Kursus Gratis
              </p>
            </span>
          </div>
          <div className="md:flex md:justify-center scale-50 md:scale-75 lg:scale-100 md:space-x-2 flex flex-row justify-center gap-x-4 lg:gap-x-0 px-3">
            <img src="/images/partner1.svg" alt="partner1" />
            <img src="/images/partner2.svg" alt="partner2" />
            <img src="/images/partner3.svg" alt="partner3" />
            <img src="/images/partner4.svg" alt="partner4" />
            <img src="/images/partner5.svg" alt="partner5" />
          </div>
        </div>
      </section>

      {/* section benefit */}
      <section className="container mx-auto font-poppins mb-20 lg:mb-36 px-5 lg:px-0">
        <div className="flex justify-center">
          <h1 className="text-center font-semibold text-2xl md:text-[38px] md:w-[640px] mb-5 lg:mb-16 p-5 lg:p-0 leading-snug">
            Keuntungan Bergabung Dengan E-Learning EDUFREE
          </h1>
        </div>

        <div className="flex flex-col gap-y-5 p-5 lg:p-0">
          <div className="flex gap-x-12 md:flex-col lg:flex-row flex-col gap-y-5 mb-5 justify-between">
            <div className="w-full flex">
              <div className="md:w-full h-full md:h-[316px] bg-color3 flex flex-col p-12">
                <img
                  src="/images/benefit-icon1.jpg"
                  alt="benefit1"
                  width={40}
                  height={40}
                  className="mb-5"
                />
                <h1 className="text-xl md:text-2xl font-medium mb-3">
                  Kursus Gratis
                </h1>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                  Kami menyediakan beberapa kursus gratis untuk menunjang
                  ketersediaan pendidikan untuk masyarakat kurang mampu
                </p>
              </div>
            </div>
            <div className="w-full flex">
              <div className="md:full h-full md:h-[316px] bg-color3 flex flex-col p-12">
                {' '}
                <img
                  src="/images/benefit-icon2.jpg"
                  alt="benefit1"
                  width={40}
                  height={40}
                  className="mb-5"
                />
                <h1 className="text-xl md:text-2xl font-medium mb-3">
                  Akses Selamanya
                </h1>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                  Semua kursus yang telah kamu daftar bisa diakses selamanya
                  sehingga belajar kamu lebih nyaman dan tidak terburu-buru
                </p>
              </div>
            </div>
            <div className="w-full flex">
              <div className="md:full h-full md:h-[316px] bg-color3 flex flex-col p-12">
                {' '}
                <img
                  src="/images/benefit-icon3.jpg"
                  alt="benefit1"
                  width={40}
                  height={40}
                  className="mb-5"
                />
                <h1 className="text-xl md:text-2xl font-medium mb-3">
                  Grup Konsultasi
                </h1>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                  Terdapat grup konsultasi yang berguna jika kamu ingin
                  menanyakan suatu pertanyaan dan kamu juga bisa mebuka diskusi
                  baru
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-x-12 md:flex-col lg:flex-row flex-col gap-y-5 -mt-5">
            <div className="w-full flex justify-evenly">
              <div className="md:full h-full md:h-[316px] bg-color3 flex flex-col p-12">
                <img
                  src="/images/benefit-icon4.jpg"
                  alt="benefit1"
                  width={40}
                  height={40}
                  className="mb-5"
                />
                <h1 className="text-xl md:text-2xl font-medium mb-3">
                  Sertifikat dan Portofolio
                </h1>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                  Setelah menyelesaikan kursus kamu akan mendapatkan sertifikat
                  serta portofolio dari project kursus yang telah diselesaikan
                </p>
              </div>
            </div>
            <div className="w-full flex justify-evenly">
              <div className="md:full h-full md:h-[316px] bg-color3 flex flex-col p-12">
                {' '}
                <img
                  src="/images/benefit-icon5.jpg"
                  alt="benefit1"
                  width={40}
                  height={40}
                  className="mb-5"
                />
                <h1 className="text-xl md:text-2xl font-medium mb-3">
                  Belajar Lebih Terarah
                </h1>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                  Kursus menyediakan kursus dari level dasar hingga expert
                  sehingga semua bisa belajar dengan layanan yang kami sediakan
                </p>
              </div>
            </div>
            <div className="w-full flex justify-evenly">
              <div className="md:full h-full md:h-[316px] bg-color3 flex flex-col p-12">
                {' '}
                <img
                  src="/images/benefit-icon6.jpg"
                  alt="benefit1"
                  width={40}
                  height={40}
                  className="mb-5"
                />
                <h1 className="text-xl md:text-2xl font-medium mb-3">
                  Instruktur Berpengalaman
                </h1>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                  Kami mempunyai instruktur berpengalaman yang diambil dari
                  dunia industri yang tak diragukan lagi pengalamannya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section tentang kami */}
      <section className="container mx-auto font-poppins mb-20 lg:mb-36 px-5 lg:px-0">
        <div className="flex justify-between items-center flex-col lg:flex-row lg:space-x-10">
          <div className="flex flex-col w-full lg:w-1/2 md:justify-center md:text-center md:items-center lg:text-left lg:items-start">
            <h3 className="text-lg text-gray-600 mb-4 p-5 lg:p-0">
              Tentang Kami
            </h3>
            <h1 className="text-lg w-full lg:text-[38px] font-semibold lg:w-[620px] mb-4 px-5 lg:px-0 lg:leading-snug md:text-3xl md:wfull">
              EDUFREE Layanan E-Learning Gratis Untuk Membantu Kamu Bertumbuh
            </h1>
            <p className="w-full text-base text-gray-500 lg:w-[620px] px-5 lg:px-0 md:w-full">
              Edufree diharapkann bisa menjadi layanan yang bermanfaat bagi
              kedepanya dalam bidang pendidikan
            </p>
          </div>
          <div className="w-full lg:w-1/2 p-5 md:w-full">
            <img src="/images/about-pic.jpg" alt="about-pic" />
          </div>
        </div>
      </section>

      {/* section rekomendasi */}
      <section className="container mx-auto font-poppins flex flex-col mb-40 px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between items-center border-b-2 border-gray-100">
          <div className="w-full lg:w-4/5 mb-5">
            <h1 className="w-full lg:w-[440px] font-semibold text-xl md:text-[38px] flex justify-center mb-5 lg:mb-0 leading-snug">
              Rekomendasi Kursus Untuk Kamu
            </h1>
          </div>
          <div className="w-1/5 flex gap-4 items-center lg:justify-end justify-center mb-5 lg:mb-0">
            <h3 className="mr-5 font-medium text-[18px] flex flex-shrink-0 items-center gap-2">
              {' '}
              Kategori <KeyboardArrowDownOutlinedIcon />
            </h3>
            <Link
              to="/courses"
              className="px-8 py-3 bg-color1 flex flex-shrink-0 rounded-md font-medium text-base"
            >
              Lihat Semua
            </Link>
          </div>
        </div>

        <div className="flex justify-between lg:mt-16 mt-5 flex-col lg:flex-row gap-0 lg:gap-10">
          {courses.map((course) => (
            <Link key={course.id} to="/courses/detail">
              <div className="card w-full rounded-none mb-5 lg:mb-0">
                <figure className="lg:-mx-3">
                  <img
                    src={course.photo}
                    alt={course.title}
                    className="w-full md:p-5 px-5 lg:px-3"
                  />
                </figure>
                <div className="card-body p-5">
                  <div className="badge bg-black text-white flex gap-2 py-3 text-xs font-medium">
                    <StarRateIcon className="text-color1 h-4 w-4" /> 4,9
                  </div>
                  <h2 className="card-title flex justify-between font-medium text-xl lg:text-2xl mb-1">
                    {course.title}
                  </h2>
                  <p className="text-base text-gray-500 w-full mb-6">
                    {course.description}
                  </p>
                  <div className="card-actions text-gray-600 flex gap-x-5">
                    <div className="flex gap-1 items-center">
                      <AccessTimeIcon />
                      {course.time} Jam
                    </div>
                    <div className="flex gap-1 items-center">
                      <PlayCircleOutlinedIcon />
                      {course.video} Video
                    </div>
                    <div className="flex gap-1 items-center">
                      <PeopleOutlineIcon />
                      {course.students} Siswa
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* section testimoni */}
      <section className="w-full font-poppins h-[370px] bg-color3 mb-40 px-5 lg:px-0">
        <div className="container mx-auto flex lg:items-center flex-col lg:flex-row">
          <div className="w-full lg:w-4/12 flex flex-col p-5 lg:p-0 mb-0">
            <h1 className="font-semibold text-2xl lg:text-[28px] lg:w-[340px]">
              Kata Mereka Tentang Kursus EDUFREE
            </h1>
            <p className="text-base text-gray-500 lg:w-[320px]">
              EDUFREE telah dipercaya lebih dari 10.000 siswa{' '}
            </p>
          </div>
          <div className="w-full lg:w-8/12 flex flex-col p-5 lg:p-0">
            <div className="">
              <Swiper
                spaceBetween={30}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  renderBullet: function (index, className) {
                    return (
                      '<span class="' +
                      className +
                      '" style="background-color: black; width: 15px; height: 15px; margin-left: 10px; diplay:none;"></span>'
                    );
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <p className="text-base lg:text-2xl font-medium text-justify mb-0 lg:py-16">
                      {testimonial.review}
                    </p>
                    <span className="flex gap-4">
                      <div className="">
                        <img
                          src={testimonial.photo}
                          alt={testimonial.name}
                          className="h-10 w-10 rounded-full bg-contain bg-center"
                        />
                      </div>
                      <div>
                        <h2 className="text-[18px] font-medium">
                          {testimonial.name}
                        </h2>
                        <p className="text-xs font-medium">{testimonial.job}</p>
                      </div>
                    </span>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* section faq */}
      <section className="w-full container mx-auto font-poppins flex mb-40 flex-col lg:flex-row px-5 lg:px-0">
        <div className="w-full lg:w-6/12 flex flex-col mb-10 lg:mb-0">
          <h2 className="text-[28px] font-semibold lg:w-[320px] text-center lg:text-left">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-gray-500 lg:w-[328px] text-center lg:text-left">
            Masih bingung atau ragu? Hubungi kami di nomor +6288 999 222 333
          </p>
        </div>

        <div className="w-full lg:w-6/12">
          <div className="collapse collapse-plus border-b p-5 lg:p-0">
            <input
              type="radio"
              name="my-accordion-3"
              defaultChecked="checked"
            />
            <div className="collapse-title text-xl font-medium flex gap-x-10 items-center">
              <span className="text-2xl font-medium text-color1">01</span>{' '}
              Apakah kursus ini benar-benar gratis?
            </div>
            <div className="collapse-content w-full lg:w-[620px] text-gray-700 font-medium text-lg lg:ml-[65px]">
              <p>
                Kursus yang disediakan bisa diakses gratis untuk menunjang
                kebutuhan dalam bidang kependidikan.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b p-5 lg:p-0">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium flex gap-x-10 items-center py-6">
              <span className="text-2xl font-medium text-color1">02</span> Untuk
              siapa kursus ini?
            </div>
            <div className="collapse-content w-full lg:w-[620px] text-gray-700 font-medium text-lg lg:ml-[65px]">
              <p>
                Kursus yang disediakan bisa diakses gratis untuk menunjang
                kebutuhan dalam bidang kependidikan.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b p-5 lg:p-0">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium flex gap-x-10 items-center py-6">
              <span className="text-2xl font-medium text-color1">03</span>{' '}
              Apakah kursus ini bersertifikat?
            </div>
            <div className="collapse-content w-full lg:w-[620px] text-gray-700 font-medium text-lg lg:ml-[65px]">
              <p>
                Kursus yang disediakan bisa diakses gratis untuk menunjang
                kebutuhan dalam bidang kependidikan.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b p-5 lg:p-0">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium flex gap-x-10 items-center py-6">
              <span className="text-2xl font-medium text-color1">04</span>{' '}
              Sampai kapan kursus ini berakhir?
            </div>
            <div className="collapse-content w-full lg:w-[620px] text-gray-700 font-medium text-lg lg:ml-[65px]">
              <p>
                Kursus yang disediakan bisa diakses gratis untuk menunjang
                kebutuhan dalam bidang kependidikan.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b p-5 lg:p-0">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium flex gap-x-10 items-center py-6">
              <span className="text-2xl font-medium text-color1">05</span>{' '}
              Apakah ada penyaluran kerja setelah lulus?
            </div>
            <div className="collapse-content w-full lg:w-[620px] text-gray-700 font-medium text-lg lg:ml-[65px]">
              <p>
                Kursus yang disediakan bisa diakses gratis untuk menunjang
                kebutuhan dalam bidang kependidikan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section form */}
      <section className="w-full container mx-auto font-poppins flex flex-col lg:flex-row mb-40">
        <div className="w-full h-[700px] relative">
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-60 "
            style={{ zIndex: 1 }}
          ></div>
          <div
            className="w-full h-full bg-green-300 p-20"
            style={{
              backgroundImage: 'url("/images/form-pic.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 2,
            }}
          >
            <h1 className="text-white font-semibold text-[42px] relative z-10 lg:w-[444px] leading-relaxed mb-6 w-full">
              Selangkah Lebih Dekat Dengan Impianmu
            </h1>
            <p className="w-full lg:w-[417px] text-base font-medium text-white relative z-10 leading-relaxed">
              Sebuah layanan E-Learning gratis yang siap membantumu menjadi
              seorang ahli{' '}
            </p>
          </div>
        </div>

        <div className="w-full h-full lg:h-[700px] bg-black text-white">
          <div className="flex flex-col justify-center p-10 lg:p-24">
            <div className="">
              <h2 className="text-[28px] font-semibold mb-4">
                Daftarkan Dirimu!
              </h2>
              <p className="text-base text-gray-500 w-full lg:w-[430px] mb-12">
                Persiapkan diri untuk masa depan yang penuh dengan bintang
              </p>
            </div>
            <div className="">
              <input
                type="text"
                className="form-input px-4 py-5 bg-black border-2 border-gray-50/10 rounded-lg w-full mb-4"
                placeholder="Your name"
              />
              <input
                type="email"
                className="form-input px-4 py-5 bg-black border-2 border-gray-50/10 rounded-lg w-full mb-4"
                placeholder="Email"
              />
              <input
                type="password"
                className="form-input px-4 py-5 bg-black border-2 border-gray-50/10 rounded-lg w-full mb-10"
                placeholder="Password"
              />
              <button className="px-4 py-5 bg-color1 w-full text-black uppercase font-bold rounded-md text-lg tracking-widest mb-7">
                daftar
              </button>
              <Link to="" className="flex gap-1 justify-center">
                Sudah punya akun? <span className="underline">Login</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* section blog */}
      <section className="container mx-auto font-poppins flex flex-col mb-48">
        <div className="flex flex-col md:flex-row p-5 lg:p-0 justify-between items-center mb-16 gap-y-2">
          <h1 className="text-3xl md:text-[38px] font-semibold mb-4 md:mb-0">
            Blog, Berita dan Event
          </h1>
          <Link to="/blogs" className="text-base text-gray-600">
            Lihat Semua <EastIcon />
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row p-5 lg:p-0 justify-between gap-3">
          {blogs.map((blog) => (
            <Link to="/blog" key={blog.id}>
              <div className="card w-full rounded-none lg:h-[560px]">
                <figure>
                  <img
                    src={blog.photo}
                    alt={blog.title}
                    className="w-full bg-cover bg-center"
                  />
                </figure>
                <div className="card-body px-0">
                  <p className="text-gray-600 text-base font-medium mb-4">
                    {blog.date}
                  </p>
                  <h2 className="card-title font-medium text-xl w-full lg:w-[400px] mb-4">
                    {blog.title}
                  </h2>
                  <p className="text-base text-gray-500 mb-9">{blog.content}</p>
                  <Link to="/blog" className="flex gap-1 hover:gap-x-2">
                    Selengkapnya <EastIcon />
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />

      <NavBottom />
    </>
  );
};

export default Home;
