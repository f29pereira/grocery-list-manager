import Card from "@/components/shared/Card/Card";
import UpdateUserDetails from "./UpdateUserDetails/UpdateUserDetails";
import UpdateUserPassword from "./UpdateUserPassword/UpdateUserPassword";
import DeleteUser from "./DeleteUser/DeleteUser";
import Circles from "@/components/shared/Icons/GlowingIcons/Circles/Circles";

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
        {/*Update User Details form*/}
        <Card styles="relative w-full">
          <UpdateUserDetails />

          <div className="2xl:hidden">
            <Circles iconsPlacement="top-right" />
          </div>

          <div className="hidden 2xl:block">
            <Circles iconsPlacement="bottom-left" />
          </div>
        </Card>

        {/*Update Password form*/}
        <Card styles="relative w-full">
          <UpdateUserPassword />

          <div className="lg:hidden">
            <Circles />
          </div>

          <div className="hidden lg:block">
            <Circles iconsPlacement="top-right" />
          </div>
        </Card>
      </div>

      {/*Delete User*/}
      <Card styles="relative w-full">
        <DeleteUser />

        <div className="lg:hidden">
          <Circles />
        </div>

        <div className="hidden lg:block">
          <Circles iconsPlacement="top-right" />
        </div>
      </Card>
    </>
  );
}
