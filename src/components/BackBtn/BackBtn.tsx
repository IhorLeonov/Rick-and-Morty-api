import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

interface BackLinkProps {
  to: string;
}

export const BackLink = ({ to }: BackLinkProps) => {
  return (
    <Link to={to}>
      <Button style={{ fontWeight: 500 }}>Back</Button>
    </Link>
  );
};
