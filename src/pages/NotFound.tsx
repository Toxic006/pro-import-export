import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404: non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-dvh items-center justify-center bg-brand-soft px-4">
      <SEO
        title="Page Not Found | Khadria Groups"
        description="The page you are looking for does not exist. Return to Khadria Groups — global trade in gold, metals, petroleum and agri commodities."
        path="/404"
        noindex
      />
      <div className="text-center">
        <p className="font-heading text-6xl sm:text-7xl font-bold text-primary">404</p>
        <h1 className="mt-3 font-heading text-2xl sm:text-3xl font-bold text-foreground">
          Page not found
        </h1>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-7 inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
