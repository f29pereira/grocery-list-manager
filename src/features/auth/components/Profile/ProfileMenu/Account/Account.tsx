import Card from "@/components/shared/Card/Card";
import UpdateUserDetails from "./UpdateUserDetails/UpdateUserDetails";
import UpdateUserPassword from "./UpdateUserPassword/UpdateUserPassword";
import GlowingCircles from "@/components/shared/GlowingCircles/GlowingCircles";

/**
 * Renders the user's account
 */
export default function Account() {
  return (
    <>
      <Card styles="relative w-full">
        <UpdateUserDetails />

        <div className="xl:hidden">
          <GlowingCircles circlesPlacement="top-right" />
        </div>

        <div className="hidden xl:block">
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
    </>
  );
}
