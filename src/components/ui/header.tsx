"use client"
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  const { status, data } = useSession();

  const handleLogoutClick = async () => {
    await signOut();
  }

  const handleLoginClick = async () => {
    await signIn();
  }

  return (
    <Card className="flex justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-2 flex flex-col gap-3">
            {status === "unauthenticated" && (
              <Button
                onClick={handleLoginClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogInIcon size={16} />
                Fazer Login
              </Button>
            )}

            {status === "authenticated" && data?.user && (
              <div className="flex flex-col">
                <div className="flex items-center gap-2 py-4">
                  <Avatar>
                    <AvatarFallback>
                      {data.user.name?.[0].toUpperCase()}
                    </AvatarFallback>

                    {data.user.image && <AvatarImage src={data.user.image} />}
                  </Avatar>

                  <div className="flex flex-col">
                    <p className="font-medium">{data.user.name}</p>
                    <p className="text-sm opacity-75">Boas compras!</p>
                  </div>
                </div>

                <Separator />
              </div>
            )}

            {status === "authenticated" && (
              <Button
                onClick={handleLogoutClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogOutIcon size={16} />
                Fazer Logout
              </Button>
            )}

            <Button variant="outline" className="w-full justify-start gap-2">
              <PercentIcon size={16} />
              Ofertas
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <ListOrderedIcon size={16} />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
}

export default Header;
