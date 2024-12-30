// const About = () => {
//     return (
//         <div>
//         <h1> About Page</h1>
//         </div>
//     )
// }

// export default About





// import React from 'react';

// const About = () => {
//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Our Team</h2>
//       <div className="row">
//         <div className="col-md-4 text-center">
//           <img
//             src="/static/images/Mahrukh.jpg"
//             className="img-fluid rounded-circle"
//             alt="Mahrukh's Image"
//             style={{ width: '80%', height: 'auto' }}
//           />
//           <h4 className="mt-3">Mahrukh Rehman</h4>
//           <p>Developer</p>
//           <p>
//             <a href="https://www.linkedin.com/in/mahrukh-rehman" target="_blank" rel="noopener noreferrer">
//               LinkedIn Profile
//             </a>
//           </p>
//         </div>
//         <div className="col-md-4 text-center">
//           <img
//             src="/static/images/sejal.jpg"
//             className="img-fluid rounded-circle"
//             alt="Sejal's Image"
//             style={{ width: '80%', height: 'auto' }}
//           />
//           <h4 className="mt-3">Sejal Rani</h4>
//           <p>Developer</p>
//           <p>
//             <a href="https://www.linkedin.com/in/sejal-rani" target="_blank" rel="noopener noreferrer">
//               LinkedIn Profile
//             </a>
//           </p>
//         </div>
//         <div className="col-md-4 text-center">
//           <img
//             src="/static/images/ali.jpg"
//             className="img-fluid rounded-circle"
//             alt="Maheen's Image"
//             style={{ width: '80%', height: 'auto' }}
//           />
//           <h4 className="mt-3">Maheen Zehra</h4>
//           <p>Developer</p>
//           <p>
//             <a href="https://www.linkedin.com/in/maheen-zehra" target="_blank" rel="noopener noreferrer">
//               LinkedIn Profile
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;






import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src="/images/logo.png" alt="Logo" className="logo-img" />
      <a className="navbar-brand" href="#">Relaxify</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/signup" className="nav-link">
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/profile" className="nav-link">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>




    <div className="container mt-5 text-center">
  <h2 className="mb-4">Our Team</h2>
  <div className="d-flex justify-content-center">
    <div className="text-center mx-4">
      <img
        src="/static/images/Mahrukh.jpg"
        className="img-fluid rounded-circle"
        alt="Mahrukh's Image"
        style={{ width: '80px', height: '80px' }}
      />
      <h4 className="mt-3">Mahrukh Rehman</h4>
      <p>Developer</p>
      <p>
        <a href="https://www.linkedin.com/in/mahrukh-rehman" target="_blank" rel="noopener noreferrer">
          LinkedIn Link
        </a>
      </p>
    </div>
    <div className="text-center mx-4">
      <img
        src="/static/images/sejal.jpg"
        className="img-fluid rounded-circle"
        alt="Sejal's Image"
        style={{ width: '80px', height: '80px' }}
      />
      <h4 className="mt-3">Sejal Rani</h4>
      <p>Developer</p>
      <p>
        <a href="https://www.linkedin.com/in/sejal-rani" target="_blank" rel="noopener noreferrer">
          LinkedIn Link
        </a>
      </p>
    </div>
    <div className="text-center mx-4">
      <img
        src="/static/images/ali.jpg"
        className="img-fluid rounded-circle"
        alt="Maheen's Image"
        style={{ width: '80px', height: '80px' }}
      />
      <h4 className="mt-3">Maheen Zehra</h4>
      <p>Developer</p>
      <p>
        <a href="https://www.linkedin.com/in/maheen-zehra" target="_blank" rel="noopener noreferrer">
          LinkedIn Link
        </a>
      </p>
    </div>
  </div>
</div>






      <footer className="bg-dark text-white mt-4">
        <div className="container">
          <div className="row py-4">
            <div className="col-md-4">
              <h5>About Us</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Story</a></li>
                <li><a href="#" className="text-white">Clients</a></li>
                <li><a href="#" className="text-white">Testimonials</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Services</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Image to Recipe</a></li>
                <li><a href="#" className="text-white">Ingredients to Recipe</a></li>
                <li><a href="#" className="text-white">Save and Like your Favorite recipes</a></li>
                <li><a href="#" className="text-white">Post your Recipes</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Social</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Facebook</a></li>
                <li><a href="#" className="text-white">Instagram</a></li>
                <li><a href="#" className="text-white">YouTube</a></li>
                <li><a href="#" className="text-white">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
