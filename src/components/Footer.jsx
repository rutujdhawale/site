export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/40 py-8">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-sm text-neutral-600">
          © {new Date().getFullYear()} Rutuj Dhawale
        </p>
      </div>
    </footer>
  );
}
