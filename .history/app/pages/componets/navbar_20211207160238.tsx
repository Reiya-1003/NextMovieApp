import StarsIcon from "@mui/icons-material/Stars";

export default function Navber() {
  return (
    <nav className=".bg-black">
      <span>
        <span style={{ position: "absolute", left: 40 }}>
          <a href="http://localhost:3000/" className="brand-logo">
            <div>MOVIEFLIX</div>
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
