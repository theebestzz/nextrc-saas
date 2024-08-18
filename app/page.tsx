import { Button } from "@/components/ui/button";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const session = await getUser();
  return (
    <div>
      {session ? (
        <LogoutLink>
          <Button>Sign out</Button>
        </LogoutLink>
      ) : (
        <>
          <LoginLink>
            <Button>Sign in</Button>
          </LoginLink>
          <RegisterLink>
            <Button>Sign up</Button>
          </RegisterLink>
        </>
      )}
    </div>
  );
}
