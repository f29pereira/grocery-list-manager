import { FaXTwitter, FaFacebook, FaSquareInstagram } from "@/assets/icons/icon";

/**
 * Renders the footer navigation links with:
 * - Company, Legal, Support
 * - X, Facebook and Instagram
 */
export default function FooterNav() {
  const navItemStyles = `inline-block rounded-sm 
                        text-base text-slate-800 
                        focus-visible:outline-solid focus-visible:outline-[3.2px] 
                        focus-visible:outline-offset-2 focus-visible:outline-blue-500 
                        focus-visible:bg-blue-50
                        transition-[color] delay-150 duration-300 ease-in-out
                        motion-reduce:transition-none
                        hover:text-slate-700 
                        hover:underline hover:underline-offset-8 hover:decoration-slate-700`;

  const socialItemStyles = `inline-block rounded-sm
                          font-normal text-3xl text-green-600
                          focus-visible:outline-solid focus-visible:outline-[3.2px] 
                          focus-visible:outline-offset-2 focus-visible:outline-blue-500
                          transition-[color] delay-150 duration-300 ease-in-out 
                          motion-reduce:transition-none
                          hover:text-green-500`;

  return (
    <nav className="lg:flex lg:gap-20" aria-label="Footer">
      {/*Company, Legal, Support links*/}
      <div
        className="flex flex-col gap-10 
                  text-center
                  lg:flex-row xl:gap-15 2xl:gap-20"
      >
        <ul>
          <li>
            <h3 className="mb-2 font-bold text-lg">Company</h3>
            <a href="#" className={navItemStyles}>
              About
            </a>
          </li>
        </ul>

        <ul>
          <h3 className="mb-2 font-bold text-lg">Legal</h3>
          <li>
            <a href="#" className={`mb-4 ${navItemStyles}`}>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className={navItemStyles}>
              Terms of Service
            </a>
          </li>
        </ul>

        <ul>
          <h3 className="mb-2 font-bold text-lg">Support</h3>
          <li>
            <a href="#" className={`mb-4 ${navItemStyles}`}>
              Contact
            </a>
          </li>
          <li>
            <a href="#" className={navItemStyles}>
              Support
            </a>
          </li>
        </ul>
      </div>

      {/*Social links*/}
      <ul
        className="flex justify-center gap-12 mt-10
                  lg:mt-0 xl:ml-20"
        aria-label="Follow us on"
      >
        <li>
          <a href="#" className={socialItemStyles} aria-label="X">
            <FaXTwitter aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="#" className={socialItemStyles} aria-label="Facebook">
            <FaFacebook aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="#" className={socialItemStyles} aria-label="Instagram">
            <FaSquareInstagram aria-hidden="true" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
