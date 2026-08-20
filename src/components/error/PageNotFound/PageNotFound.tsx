import NavLogo from "@/components/shared/Nav/NavLogo/NavLogo";
import { LuFileX } from "@/assets/icons/icon";
import NavigationLink from "@/components/ui/NavigationLink/NavigationLink";

/**
 * Renders the page not found with link with:
 * - Logo navigation link
 * - Card width error code, description and navigation link to return to the home page
 */
export default function PageNotFound() {
  return (
    <div className="relative w-screen h-screen overflow-hidden px-6 md:px-0">
      <div
        className="absolute flex justify-center top-5 right-0 left-0 
                  md:justify-start md:left-8 md:top-7"
      >
        <NavLogo />
      </div>

      <div
        className="flex justify-center items-center w-full h-full
                md:px-0"
      >
        <div
          className="relative px-8 py-6 
                   bg-white rounded-3xl shadow-xl
                   md:px-10 md:py-8"
        >
          <h1 className="mb-4">
            <span className="mr-4 font-black text-slate-950 text-4xl">
              Ooops!
            </span>
          </h1>

          <h2 className="mb-8">
            <span className="mr-2 text-lg text-slate-800">
              Error <span className="font-bold text-green-600">404</span>
            </span>
            <span className="text-slate-800 text-lg">- Page not found</span>
          </h2>

          <p
            className="mb-8 text-slate-700 max-w-sm
                     md:max-w-md"
          >
            Sorry, the page you are looking for doesn't exist or it isn't
            available at the moment.
          </p>

          {/*Home Link*/}
          <div className="flex justify-center">
            <NavigationLink
              styles="px-8 py-2
                text-white bg-green-600
                shadow-lg shadow-green-600/50
                transition-[background] delay-150 duration-300 ease-in-out 
                motion-reduce:transition-none 
                hover:bg-green-500"
              to="/"
              end={true}
            >
              Back to Home
            </NavigationLink>
          </div>

          <LuFileX
            className="absolute top-[35%] right-[5%]
                    text-8xl text-green-400 opacity-10
                    rotate-30
                    md:text-[150px] md:top-[20%]"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
