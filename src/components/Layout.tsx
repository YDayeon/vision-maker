import NavBar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="w-screen h-screen flex">
      <NavBar />
      <main className="w-full">{children}</main>
    </div>
  );
}
