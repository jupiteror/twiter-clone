import { Button } from "@/shared/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="pt-2.5 pb-2.5 border-b">
      <Button className="ml-2.5" onClick={() => navigate(-1)}>
        <ArrowRight />
      </Button>
    </header>
  );
};

export default Header;
