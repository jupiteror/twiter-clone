import { Button } from "@/shared/components/ui/button";
import { ArrowBigLeft } from "lucide-react";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="pt-2.5 pb-2.5 border-b">
      <Button className="ml-2.5 border" onClick={() => navigate(-1)}>
        <ArrowBigLeft />
      </Button>
    </header>
  );
};

export default Header;
