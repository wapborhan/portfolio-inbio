import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { makeStyles } from "@material-ui/core/styles";
// import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import IconButton from "@material-ui/core/IconButton";

// function BacktoTop() {
//   return (
//     <div className="backto-top">
//       <div>
//         <i>
//           <FiArrowUp />
//         </i>
//       </div>
//     </div>
//   );
// }
const BacktoTop = ({ showBelow = 250 }) => {
  const classes = useStyles();

  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div>
      {show && (
        <IconButton
          onClick={handleClick}
          className={classes.toTop}
          aria-label="to top"
          component="span"
        >
          <FiArrowUp />
        </IconButton>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  toTop: {
    zIndex: 2,
    position: "fixed",
    bottom: "30px !important",
    right: "30px !important",
    backgroundColor: "#212428 !important",
    color: "#fff !important",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "#397BA6",
      backgroundColor: "linear-gradient(145deg, #ff014f, #d11414) !important",
    },
    [theme.breakpoints.up("xs")]: {
      right: "5%",
      backgroundColor: "rgb(220,220,220,0.7)",
    },
    [theme.breakpoints.up("lg")]: {
      right: "6.5%",
    },
  },
}));

//     bottom: 50px;
//     right: 30px;
//     cursor: pointer;
//     z-index: 999;
//     width: 50px;
//     height: 50px;
//     line-height: 46px;
//     border-radius: 50%;
//     background-color: #212428;
//     text-align: center;
//     z-index: 999 !important;
//     box-shadow: var(--shadow-1);

export default BacktoTop;
