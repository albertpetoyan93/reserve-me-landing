type StoreButtonsProps = {
  className?: string;
  appStoreHref?: string;
  playStoreHref?: string;
};

export default function StoreButtons({
  className = "",
  appStoreHref = "#",
  playStoreHref = "#",
}: StoreButtonsProps) {
  return (
    <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
      <a
        href={appStoreHref}
        className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white transition-all hover:-translate-y-0.5 shadow-md font-semibold text-sm"
        aria-label="Download on the App Store"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden>
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.57 2.95-1.39z" />
        </svg>
        <div className="text-left">
          <p className="text-[10px] font-normal uppercase tracking-wider text-gray-400 leading-none">
            Download on the
          </p>
          <p className="text-sm font-semibold leading-tight mt-0.5">App Store</p>
        </div>
      </a>

      <a
        href={playStoreHref}
        className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white transition-all hover:-translate-y-0.5 shadow-md font-semibold text-sm"
        aria-label="Get it on Google Play"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden>
          <path d="M3.609 1.814L13.783 12 3.609 22.186c-.183-.173-.314-.44-.314-.775V2.589c0-.335.131-.602.314-.775zm11.134 9.222l2.673-2.673c.189-.189.206-.491.038-.688L5.352 2.15c-.179-.179-.476-.164-.645.033L14.743 11.036zm3.327 1.341l2.581-1.488a1.002 1.002 0 000-1.738l-2.581-1.488-2.95 2.95 2.95 2.955zm-3.327.382l-10.036 8.85c.169.198.466.213.645.033l12.102-5.525c.168-.197.151-.499-.038-.688l-2.673-2.67z" />
        </svg>
        <div className="text-left">
          <p className="text-[10px] font-normal uppercase tracking-wider text-gray-400 leading-none">
            Get it on
          </p>
          <p className="text-sm font-semibold leading-tight mt-0.5">
            Google Play
          </p>
        </div>
      </a>
    </div>
  );
}
