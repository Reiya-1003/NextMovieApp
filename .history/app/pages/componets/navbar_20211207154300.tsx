import StarsIcon from "@mui/icons-material/Stars";

export default function Navber() {
  return (
    <nav className="black">
      <span>
        <span
          className=".nav-wrapper container"
          style={{ position: "absolute", left: 40 }}
        >
          <a href="http://localhost:3000/" className="brand-logo">
            <div className="red-text text-accent-4">MOVIEFLIX</div>
          </a>
        </span>
        <span>
          <div>
            <StarsIcon></StarsIcon>
          </div>
        </span>
      </span>
    </nav>
  );
}
