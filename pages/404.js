import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <Head>
        <title>NinjaList Page not found</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="notfound">
        <h1>oops... </h1>
        <h2>The page cannot be found</h2>
        <Link href="/">
          <a>
            <p>Go back</p>
          </a>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
