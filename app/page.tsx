import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Ecosystem from "@/components/Ecosystem";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        {/* Séparateur forge — entre services et écosystème */}
        <div className="relative h-px overflow-visible">
          <div
            style={{
              position: "absolute",
              inset: "0",
              background: "linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.45) 25%, rgba(249,115,22,0.45) 75%, transparent 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: "-40px",
              width: "700px",
              height: "80px",
              background: "radial-gradient(ellipse at center, rgba(249,115,22,0.22) 0%, rgba(220,38,38,0.1) 45%, transparent 70%)",
              filter: "blur(6px)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: "-12px",
              width: "200px",
              height: "24px",
              background: "radial-gradient(ellipse at center, rgba(249,115,22,0.5) 0%, transparent 70%)",
              filter: "blur(3px)",
              pointerEvents: "none",
            }}
          />
        </div>
        <Ecosystem />
      </main>
      <Footer />
    </>
  );
}
