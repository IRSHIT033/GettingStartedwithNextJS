import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
    </div>
  );
};

export default Navbar;
