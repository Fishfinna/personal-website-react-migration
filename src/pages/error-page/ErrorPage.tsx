import { Stars } from "../../components/stars/Stars";
import { Link } from "react-router-dom";
import "./ErrorPage.scss";

export default function ErrorPage() {
  return (
    <div className="error-page">
      <Stars />
      <h1>404 Error: Page not found</h1>
      <Link to="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
}
