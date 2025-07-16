import { useRouteError } from "react-router-dom";
const Error = () => {
  const errorMessage = useRouteError();
  console.log(errorMessage);
  return (
    <div>
      <h1>Error</h1>
      <p>{errorMessage?.error?.message}</p>
    </div>
  );
};

export default Error;
