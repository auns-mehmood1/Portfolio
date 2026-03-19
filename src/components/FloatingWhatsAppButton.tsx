import React from 'react';

export default function FloatingWhatsAppButton() {
  // WhatsApp "wa.me" expects a digits-only phone number (no leading "+").
  const phoneNumber = '14254940912';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      type="button"
      aria-label="WhatsApp"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[color:var(--text-inverse)] shadow-lg shadow-black/30 transition-transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
    >
      <span className="sr-only">WhatsApp</span>
      <svg
        viewBox="0 0 32 32"
        width="24"
        height="24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.72c-.28-.14-1.63-.8-1.88-.9-.25-.1-.44-.14-.62.14-.18.28-.72.9-.89 1.09-.16.18-.33.2-.61.07-.28-.14-1.2-.44-2.28-1.41-.84-.75-1.41-1.68-1.58-1.96-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.18-.28.28-.46.1-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.06-.22-.53-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.34-.25.28-.96.93-.96 2.27 0 1.34.98 2.64 1.12 2.82.14.18 1.92 2.93 4.64 4.11.65.28 1.15.45 1.54.57.65.21 1.24.18 1.7.11.52-.08 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.06-.12-.24-.2-.52-.34z" />
        <path d="M26.6 5.43C23.85 2.68 20.21 1.16 16.34 1.16 8.37 1.16 1.9 7.63 1.9 15.6c0 2.55.67 5.04 1.95 7.23L1.78 30.84l8.18-2.14c2.12 1.16 4.5 1.77 6.93 1.77h.01c7.97 0 14.44-6.47 14.44-14.44 0-3.86-1.5-7.5-4.24-10.24zm-10.25 22.6h-.01c-2.16 0-4.28-.58-6.12-1.68l-.44-.26-4.86 1.27 1.3-4.74-.29-.48a12.4 12.4 0 0 1-1.91-6.54c0-6.83 5.56-12.4 12.4-12.4 3.31 0 6.42 1.29 8.76 3.63a12.32 12.32 0 0 1 3.63 8.77c0 6.84-5.56 12.4-12.46 12.43z" />
      </svg>
    </button>
  );
}

