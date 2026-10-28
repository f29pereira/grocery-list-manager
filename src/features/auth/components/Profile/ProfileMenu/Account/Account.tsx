import Card from "@/components/shared/Card/Card";
import UpdateUserDetails from "./UpdateUserDetails/UpdateUserDetails";
import UpdateUserPassword from "./UpdateUserPassword/UpdateUserPassword";
import DeleteUser from "./DeleteUser/DeleteUser";
import GlowingCircles from "@/components/shared/GlowingCircles/GlowingCircles";

/**
 * Renders cards with the user's account details form, update password form and delete account
 */
export default function Account() {
  return (
    <>
      <div
        className="flex flex-col gap-8 mt-8 mb-20
                  lg:flex-row lg:justify-center lg:gap-8
                  xl:mt-0 xl:flex-1 xl:flex-row xl:justify-start"
      >
        <Card styles="relative w-full">
          <UpdateUserDetails />

          <div className="2xl:hidden">
            <GlowingCircles circlesPlacement="top-right" />
          </div>

          <div className="hidden 2xl:block">
            <GlowingCircles circlesPlacement="bottom-left" />
          </div>
        </Card>

        <Card styles="relative w-full">
          <UpdateUserPassword />

          <div className="lg:hidden">
            <GlowingCircles />
          </div>

          <div className="hidden lg:block">
            <GlowingCircles circlesPlacement="top-right" />
          </div>
        </Card>
      </div>

      <Card styles="relative w-full">
        <DeleteUser />

        <div className="lg:hidden">
          <GlowingCircles />
        </div>

        <div className="hidden lg:block">
          <GlowingCircles circlesPlacement="top-right" />
        </div>
      </Card>
    </>
  );
}
