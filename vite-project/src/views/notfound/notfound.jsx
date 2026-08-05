import './notfound.css';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__card">
        <p className="not-found__badge">404</p>
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/" className="not-found__link">Go Back Home</a>
      </div>
    </div>
  );
}

export default NotFound;