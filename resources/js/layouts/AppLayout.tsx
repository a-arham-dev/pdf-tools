import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Head } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function AppLayout({
  title,
  footer = false,
  children,
}: PropsWithChildren<{ title: string; footer: boolean }>) {
  return (
    <>
      <Head title={title} />
      <NavBar />

      <div className="flex">{children}</div>
      {footer && <Footer />}
    </>
  );
}
