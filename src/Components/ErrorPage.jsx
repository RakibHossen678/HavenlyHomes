import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex items-center  p-16 h-screen">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl  text-red-500">
            <span className="sr-only text-red-500">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl my-8 text-red-500">
            Sorry, we couldn't find this page.
          </p>
          
          <Link to='/'
            
            className="px-8 my-3 py-3 font-semibold rounded bg-red-500 text-white"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
