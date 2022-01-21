import StarsIcon from "@mui/icons-material/Stars";
import { useState } from "react";
import Link from "next/link";
export default function Navber() {
  return (
    <nav className="bg-black">
      <span>
        <span style={{ position: "absolute", left: 40 }}>
          <a href="http://localhost:3000/" className="brand-logo">
            <div className="text-red-600">MOVIEFLIX</div>
          </a>
        </span>

        <span>
          <Link href={`/Favo`}>
            <div className="text-red-600">
              <StarsIcon></StarsIcon>
            </div>
          </Link>
        </span>
      </span>
    </nav>
  );
}
