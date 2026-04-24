import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UyeOlClient from "@/components/UyeOlClient";

export const metadata = {
  title: "Üye Ol — Geras Medya Panel",
  description: "Dijital strateji eğitim paneline üye olun. Adım adım uygulama rehberleri, şablonlar ve daha fazlası.",
  alternates: { canonical: "https://gerasmedya.com/uye-ol" },
};

export default function UyeOlPage() {
  return (
    <>
      <Navbar />
      <UyeOlClient />
      <Footer />
    </>
  );
}
