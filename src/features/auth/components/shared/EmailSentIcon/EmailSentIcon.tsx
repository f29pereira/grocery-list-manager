import { MdEmail, IoMdCheckmark } from "@/assets/icons/icon";

/**
 * Renders the email sent icon
 *
 * The checkmark icon features a pop-in animation
 */
export default function EmailSentIcon() {
  return (
    <div
      className="relative w-30 h-30 mx-auto mb-16
              bg-slate-400
                rounded-full"
    >
      <div className="flex justify-center items-center h-full">
        <MdEmail
          className="text-7xl text-white dark:text-slate-200 "
          aria-hidden="true"
        />
        <div
          className="absolute top-16.25 left-4 p-0.5
                    rounded-full          
                    border-3 border-solid border-white
                  bg-green-800
                    motion-safe:animate-pop-in"
        >
          <IoMdCheckmark className="text-2xl text-white" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
