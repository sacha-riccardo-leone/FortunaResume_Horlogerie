import { resumeData } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-bone">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14 py-10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.35em] text-graphite">
        <div>
          © {year} {resumeData.identity.firstName} {resumeData.identity.lastName}
        </div>
        <div>La Chaux-de-Fonds · CH</div>
        <div>Curriculum Vitæ</div>
      </div>
    </footer>
  );
}
