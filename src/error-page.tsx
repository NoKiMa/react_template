import {useNavigate, useRouteError} from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError() as any;
  const navigate = useNavigate();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i onClick={() => navigate('/')}>
          {error.message ? error.message : 'Back to Home'}
        </i>
      </p>
    </div>
  );
}
