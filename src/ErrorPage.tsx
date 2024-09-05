import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (error instanceof Error) {
    return (
      <div className="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occured.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  }

  // If error is not an instance of Error, handle it here
  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Unknown error</i>
      </p>
    </div>
  );
}
