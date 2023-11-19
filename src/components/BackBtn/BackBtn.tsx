import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

interface BackLinkProps {
  to: string;
}

export const BackLink = ({ to }: BackLinkProps) => {
  return (
    <Link to={to}>
      <Button styles={{ fontWeight: 500 }} text="Back" />
    </Link>
  );
};
