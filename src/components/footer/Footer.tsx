import "./Footer.scss";

export function Footer() {
  return (
    <>
      <footer>
        <span className="line" />
        <span className="star">★</span>
        <div className="icons">
          {/* Instagram */}
          <a href="https://www.instagram.com/shanti.star/?hl=en">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="70"
              viewBox="0 0 80 140"
            >
              <g
                fill="#fcf7ff7f"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="middle"
              >
                <g transform="scale(3,3)">
                  <path d="M8,3c-2.761,0 -5,2.239 -5,5v8c0,2.761 2.239,5 5,5h8c2.761,0 5,-2.239 5,-5v-8c0,-2.761 -2.239,-5 -5,-5zM18,5c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM12,7c2.761,0 5,2.239 5,5c0,2.761 -2.239,5 -5,5c-2.761,0 -5,-2.239 -5,-5c0,-2.761 2.239,-5 5,-5zM12,9c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3z"></path>
                </g>
              </g>
            </svg>
          </a>
          {/* Linkdin */}
          <a href="https://www.linkedin.com/in/shanti-sg/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="70"
              viewBox="0 0 80 140"
            >
              <g
                fill="#fcf7ff7f"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="middle"
              >
                <g transform="scale(3,3)">
                  <path d="M19,3h-14c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2zM9,17h-2.523v-7h2.523zM7.694,8.717c-0.771,0 -1.286,-0.514 -1.286,-1.2c0,-0.686 0.514,-1.2 1.371,-1.2c0.771,0 1.286,0.514 1.286,1.2c0,0.686 -0.514,1.2 -1.371,1.2zM18,17h-2.442v-3.826c0,-1.058 -0.651,-1.302 -0.895,-1.302c-0.244,0 -1.058,0.163 -1.058,1.302c0,0.163 0,3.826 0,3.826h-2.523v-7h2.523v0.977c0.325,-0.57 0.976,-0.977 2.197,-0.977c1.221,0 2.198,0.977 2.198,3.174z"></path>
                </g>
              </g>
            </svg>
          </a>
          {/* github */}
          <a href="https://github.com/Fishfinna">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="70"
              viewBox="0 0 80 140"
            >
              <g
                fill="#fcf7ff7f"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="middle"
              >
                <g transform="scale(3,3)">
                  <path d="M4.0625,4c0,0 -0.53125,0.92578 -0.53125,2.5c0,1.04688 0.23438,1.625 0.40625,1.90625c-1.20312,1.25391 -1.9375,2.94141 -1.9375,5.125c0,5.59375 3.52734,7.46875 10,7.46875c6.47266,0 10,-1.875 10,-7.46875c0,-2.26172 -0.69531,-3.95703 -1.84375,-5.1875c0.28516,-0.85547 0.61328,-2.47266 -0.1875,-4.34375c-2.38672,0 -4.39844,1.83984 -4.46875,1.90625c-1.11328,-0.24609 -2.28906,-0.375 -3.5,-0.375c-1.23828,0 -2.45703,0.15625 -3.59375,0.4375c-1.59766,-1.58984 -3.51953,-1.96875 -4.34375,-1.96875zM15.21875,12c0.60156,-0.00781 1.16797,0.05469 1.65625,0.21875c1.30469,0.44141 2.125,1.72656 2.125,3.15625c-0.00391,3.96484 -2.00391,4.625 -7.125,4.625c-3.80859,0 -6.90625,-0.71484 -6.90625,-4.5c0,-1.44531 0.75,-2.27344 1.28125,-2.78125c1.16797,-1.11719 3.00781,-0.5625 5.625,-0.5625c1.1875,0 2.33984,-0.14453 3.34375,-0.15625zM8,14c-0.55078,0 -1,0.67188 -1,1.5c0,0.82813 0.44922,1.5 1,1.5c0.55078,0 1,-0.67187 1,-1.5c0,-0.82812 -0.44922,-1.5 -1,-1.5zM16,14c-0.55078,0 -1,0.67188 -1,1.5c0,0.82813 0.44922,1.5 1,1.5c0.55078,0 1,-0.67187 1,-1.5c0,-0.82812 -0.44922,-1.5 -1,-1.5z"></path>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}
