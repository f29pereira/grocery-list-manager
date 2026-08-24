import { FaXTwitter, FaFacebook, FaSquareInstagram } from "@/assets/icons/icon";

/**
 * Renders the footer navigation links with:
 * - Company, Legal, Support
 * - X, Facebook and Instagram
 */
export default function FooterNav() {
  const navItemStyles = `inline-block rounded-sm 
                        text-base text-link 
                        focus-visible:focus-ring focus-visible:outline-offset-2
                        focus-visible:dark:bg-transparent
                        theme-transition
                        hover:text-link-hover 
                        hover:underline hover:underline-offset-8 
                        hover:decoration-text-link`;

  const socialItemStyles = `inline-block rounded-sm
                          font-normal text-3xl text-brand
                          focus-visible:focus-ring focus-visible:outline-offset-2 
                          theme-transition
                          hover:text-brand-hover`;

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
            <h3 className="mb-2 font-bold text-lg text-title">Company</h3>
            <a href="#" className={navItemStyles}>
              About
            </a>
          </li>
        </ul>

        <ul>
          <h3 className="mb-2 font-bold text-lg text-title">Legal</h3>
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
          <h3 className="mb-2 font-bold text-lg text-title">Support</h3>
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
