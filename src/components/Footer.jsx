import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800 text-center">
      <div className="flex justify-center space-x-8 mb-8">
        <a
          href="https://www.linkedin.com/in/divine-azubike-876942359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          href="https://www.threads.net/@axelerate.luxe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <span className="font-bold text-lg">@</span>
        </a>
      </div>
      <h2 className="font-bodoni text-2xl uppercase tracking-widest mb-4">
        Axelerate.Luxe &copy; 2026
      </h2>
      <p className="font-sans text-sm tracking-widest text-gray-400 uppercase">
        Engineering Desire
      </p>
    </footer>
  );
}

export default Footer;
