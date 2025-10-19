import { Button } from "@/shared/components/ui/button";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="pt-10 p-4">
      <Button onClick={() => navigate(-1)}>Cancel</Button>
    </header>
  );
};

export default Header;
