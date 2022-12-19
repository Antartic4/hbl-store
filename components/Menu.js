import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Link from 'next/link';
const theme = createTheme({});
const MyMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    if (e.currentTarget.localName !== 'ul') {
      const menu = document.getElementById('simple-menu').children[2];
      const menuBoundary = {
        left: menu.offsetLeft,
        top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
        right: menu.offsetLeft + menu.offsetHeight,
        bottom: menu.offsetTop + menu.offsetHeight,
      };
      if (
        e.clientX >= menuBoundary.left &&
        e.clientX <= menuBoundary.right &&
        e.clientY <= menuBoundary.bottom &&
        e.clientY >= menuBoundary.top
      ) {
        return;
      }
    }

    setOpen(false);
  };

  theme.props = {
    MuiList: {
      onMouseLeave: (e) => {
        handleClose(e);
      },
    },
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          id="menubutton1"
          aria-owns={open ? 'simple-menu' : null}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301, backgroundColor: 'white' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <div className="container px-4"></div>
          <br />
          <button className="bg-white hover:bg-gray-200 text-black font-bold py-4 px-4">
            <Link legacyBehavior href="/shop">
              Shop
            </Link>
          </button>
          <br />
          <button className="bg-white hover:bg-gray-200 text-black font-bold py-4 px-4">
            Button2
          </button>
          <br />
          <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4">
            Button2
          </button>
          <br />
          <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4">
            Button2
          </button>
          <br />
          <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4">
            Button2
          </button>
          <br />
          <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4">
            Button2
          </button>
        </Menu>
      </ThemeProvider>
    </div>
  );
};

export default MyMenu;
