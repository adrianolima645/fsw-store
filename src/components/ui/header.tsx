import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";

const Header = () => {
  return (
    <Card className="flex justify-between p-[1.875rem]">
      <Button size="icon" variant="outline">
        <MenuIcon />
      </Button>

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
