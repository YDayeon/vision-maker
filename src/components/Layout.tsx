import { Props } from "src/types/common";
import NavBar from "./Navbar";

export default function Layout({ children }: Props) {
  return (
    <div className="w-screen h-screen flex">
      <NavBar />
      <main className="w-full">{children}</main>
    </div>
  );
}
