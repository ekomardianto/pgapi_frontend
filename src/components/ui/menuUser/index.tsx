import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { signOut } from "next-auth/react";

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [isLoading, setIsLoading] = React.useState(false);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSignout = async () => {
    setIsLoading(true);
    // Log nilai callbackUrl sebelum logout
    const callbackUrl =
      process.env.NEXT_PUBLIC_NEXTAUTH_URL +
      "/" +
      window.location.pathname.slice(1);

    setTimeout(async () => {
      const result = await signOut({ callbackUrl });

      setIsLoading(false);
    }, 500);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <i
          className={`bx bxs-user-circle text-4xl ${
            open ? "text-blue-500" : "text-gray-500"
          }`}
        ></i>
        {/* Tampilkan arrow up atau down berdasarkan state 'open' */}
        <i
          className={`bx ${
            open
              ? "bxs-chevron-up text-blue-500"
              : "bxs-chevron-down text-black"
          }`}
        ></i>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleSignout} disabled={isLoading}>
          {!isLoading ? "Logout" : "Loading..."}
        </MenuItem>
      </Menu>
    </div>
  );
}
