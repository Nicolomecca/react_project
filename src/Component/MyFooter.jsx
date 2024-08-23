import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

const MyFooter = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#221F1F' }}>
      <div className="row justify-content-center mt-5">
        <div className="col col-6">
          <div className="row">
            <div className="col mb-2">
              <i className="bi bi-facebook footer-icon me-2"></i>
              <i className="bi bi-instagram footer-icon me-2"></i>
              <i className="bi bi-twitter-x footer-icon me-2"></i>
              <i className="bi bi-youtube footer-icon"></i>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p><a href="#">Audio and Subtitles</a></p>
                  <p><a href="#">Media Center</a></p>
                  <p><a href="#">Privacy</a></p>
                  <p><a href="#">Contact us</a></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p><a href="#">Audio Description</a></p>
                  <p><a href="#">Investor Relations</a></p>
                  <p><a href="#">Legal Notices</a></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p><a href="#">Help Center</a></p>
                  <p><a href="#">Jobs</a></p>
                  <p><a href="#">Cookie Preferences</a></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p><a href="#">Gift Cards</a></p>
                  <p><a href="#">Terms of Use</a></p>
                  <p><a href="#">Corporate Information</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col mb-2">
              <button type="button" className="btn btn-sm footer-button rounded-0 mt-3  " style={{ backgroundColor: '#838383' }}>
                Service Code
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col mb-2 mt-2 copyright">
              © 1997-2023 Netflix, Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;