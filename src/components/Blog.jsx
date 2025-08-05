import { Link } from 'react-router-dom';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Kenapa Saya Pilih Belajar Frontend Dulu",
      category: "Opini Pribadi",
      excerpt: "Perjalanan saya memilih frontend sebagai starting point dalam dunia programming dan mengapa ini adalah keputusan terbaik yang pernah saya buat.",
      image: "/img/1.avif",
      date: "15 Mar 2024",
      readTime: "5 min read",
      icon: "bx-brain",
      categoryColor: "#4776E6"
    },
    {
      id: 2,
      title: "Refactor: Seni Menyusun Ulang Tanpa Mengulang",
      category: "Best Practice",
      excerpt: "Teknik refactoring yang efektif untuk meningkatkan kualitas kode tanpa mengubah fungsionalitas. Clean code is not written by following a set of rules.",
      image: "/img/1.avif",
      date: "08 Mar 2024",
      readTime: "8 min read",
      icon: "bx-code-curly",
      categoryColor: "#8E54E9"
    },
    {
      id: 3,
      title: "Membangun Website Portofolio dari Nol (Vite + Bootstrap)",
      category: "Tutorial",
      excerpt: "Step-by-step guide membangun website portofolio modern menggunakan Vite dan Bootstrap 5 dengan best practices terbaru.",
      image: "/img/5.jpg",
      date: "28 Feb 2024",
      readTime: "12 min read",
      icon: "bx-code-block",
      categoryColor: "#FF6B6B"
    },
    {
      id: 4,
      title: "Kesalahan Ngoding yang Sering Dilakukan Mahasiswa",
      category: "Self-Reflection",
      excerpt: "Refleksi tentang common mistakes yang sering terjadi saat belajar programming dan bagaimana cara menghindarinya berdasarkan pengalaman pribadi.",
      image: "/img/2.avif",
      date: "20 Feb 2024",
      readTime: "6 min read",
      icon: "bx-error-circle",
      categoryColor: "#FF9F43"
    },
    {
      id: 5,
      title: "AOS dan Animasi: Kapan Harus Dipakai?",
      category: "UI/UX",
      excerpt: "Panduan lengkap menggunakan AOS (Animate On Scroll) dan microinteractions untuk meningkatkan user experience tanpa berlebihan.",
      image: "/img/3.jpg",
      date: "12 Feb 2024",
      readTime: "7 min read",
      icon: "bx-play-circle",
      categoryColor: "#00D4AA"
    },
    {
      id: 6,
      title: "Git Workflow untuk Developer Pemula",
      category: "Tutorial",
      excerpt: "Memahami git flow, branching strategy, dan collaboration best practices yang wajib dikuasai setiap developer modern.",
      image: "/img/1.avif",
      date: "05 Feb 2024",
      readTime: "10 min read",
      icon: "bx-git-branch",
      categoryColor: "#FF6B6B"
    },
    {
      id: 7,
      title: "Responsive Design: Mobile-First vs Desktop-First",
      category: "Best Practice",
      excerpt: "Perbandingan mendalam antara pendekatan mobile-first dan desktop-first dalam responsive web design beserta implementasinya.",
      image: "/img/2.avif",
      date: "29 Jan 2024",
      readTime: "9 min read",
      icon: "bx-devices",
      categoryColor: "#8E54E9"
    },
    {
      id: 8,
      title: "Dari Coding Bootcamp ke Dunia Kerja",
      category: "Opini Pribadi",
      excerpt: "Sharing pengalaman transisi dari bootcamp ke industri tech, tips interview, dan realita kerja sebagai junior developer.",
      image: "/img/3.jpg",
      date: "22 Jan 2024",
      readTime: "11 min read",
      icon: "bx-briefcase-alt-2",
      categoryColor: "#4776E6"
    }
  ];

  return (
    <section id="blog" className="py-5 bg-white overflow-hidden" data-aos="fade-up">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">
            <span className="text-gradient" data-aos="fade-right" data-aos-delay="300">Latest</span>{" "}
            <span className="text-dark">Articles</span>
          </h2>
          <div className="gradient-hr mx-auto mb-4"></div>
          <p className="text-muted w-75 mx-auto" data-aos="fade-left" data-aos-delay="600">
            Sharing insights, tutorials, and personal experiences in frontend development and web technologies.
          </p>
        </div>


        <div className="row g-4" data-aos="fade-up" data-aos-delay="400">
          {blogPosts.map((post, index) => (
            <div key={post.id} className="col-lg-6 col-xl-3" data-aos="fade-up" data-aos-delay={600 + index * 100}>
              <article className="blog-card h-100">

                <div className="blog-image">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-100"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="blog-overlay">
                    <div className="blog-category" style={{ backgroundColor: post.categoryColor }}>
                      <i className={`bx ${post.icon} me-1`}></i>
                      {post.category}
                    </div>
                  </div>
                </div>

                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">
                      <i className="bx bx-calendar me-1"></i>
                      {post.date}
                    </span>
                    <span className="blog-read-time">
                      <i className="bx bx-time me-1"></i>
                      {post.readTime}
                    </span>
                  </div>

                  <h5 className="blog-title">
                    <a href="#" className="text-decoration-none text-dark">
                      {post.title}
                    </a>
                  </h5>

                  <p className="blog-excerpt text-muted">
                    {post.excerpt}
                  </p>

                  <Link to="/blogs" className="blog-read-more">
                    <span>Read More</span>
                    <i className="bx bx-right-arrow-alt ms-1"></i>
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="800">
          <a href="#" className="btn btn-primary btn-lg d-inline-flex align-items-center gap-2" data-bs-toggle="tooltip" title="View All Articles">
            <i className="bx bx-book-reader"></i>
            View All Articles
          </a>
        </div>
      </div>

      {/* CSS Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .text-gradient {
            background: linear-gradient(90deg, #4776E6 0%, #8E54E9 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
          
          .gradient-hr {
            height: 4px;
            width: 70px;
            background: linear-gradient(90deg, #4776E6 0%, #8E54E9 100%);
            border: none;
            border-radius: 2px;
          }

          .blog-card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            border: 1px solid rgba(0, 0, 0, 0.05);
          }

          .blog-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
          }

          .blog-image {
            position: relative;
            overflow: hidden;
          }

          .blog-image img {
            transition: transform 0.3s ease;
          }

          .blog-card:hover .blog-image img {
            transform: scale(1.05);
          }

          .blog-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, rgba(0,0,0,0.1), transparent);
          }

          .blog-category {
            position: absolute;
            top: 15px;
            left: 15px;
            color: white;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .blog-content {
            padding: 25px 20px 20px;
          }

          .blog-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            font-size: 13px;
            color: #6c757d;
          }

          .blog-date, .blog-read-time {
            display: flex;
            align-items: center;
          }

          .blog-title {
            margin-bottom: 15px;
            line-height: 1.4;
            font-weight: 600;
          }

          .blog-title a {
            transition: color 0.3s ease;
          }

          .blog-title a:hover {
            color: #4776E6 !important;
          }

          .blog-excerpt {
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 20px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .blog-read-more {
            color: #4776E6;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            display: flex;
            align-items: center;
            transition: all 0.3s ease;
          }

          .blog-read-more:hover {
            color: #8E54E9;
            gap: 8px;
          }

          .blog-read-more i {
            transition: transform 0.3s ease;
          }

          .blog-read-more:hover i {
            transform: translateX(4px);
          }

      nsform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(71, 118, 230, 0.3);
          }

          @media (max-width: 1199.98px) {
            .col-xl-3 {
              flex: 0 0 auto;
              width: 50%;
            }
          }

          @media (max-width: 991.98px) {
            .col-lg-6 {
              flex: 0 0 auto;
              width: 100%;
            }
            
            .blog-card {
              margin-bottom: 1rem;
            }
          }

          @media (max-width: 576px) {
            .blog-content {
              padding: 20px 15px 15px;
            }
            
            .blog-meta {
              flex-direction: column;
              align-items: flex-start;
              gap: 5px;
            }
          }
        `
      }} />
    </section>
  );
};

export default Blogs;