import Card from "@/components/shared/Card/Card";
import UpdateUserDetails from "./UpdateUserDetails/UpdateUserDetails";
import UpdateUserPassword from "./UpdateUserPassword/UpdateUserPassword";

/**
 * Renders the user's account
 */
export default function Account() {
  return (
    <>
      <Card styles="px-6 py-10">
        <UpdateUserDetails />
      </Card>

      <Card styles="px-6 py-10">
        <UpdateUserPassword />
      </Card>
    </>
  );
}
