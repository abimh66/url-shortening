import { useState } from 'react';

function UrlShortResult({ url, shortLink }) {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className="bg-white font-medium rounded-lg md:flex md:justify-between md:items-center md:gap-20 md:px-5 md:py-2">
      <p className="border-b px-5 py-3 border-b-gray text-ellipsis overflow-hidden md:p-0 md:border-none md:flex-1">
        {url}
      </p>
      <div className="px-5 py-3 flex flex-col gap-3 md:flex-row md:items-center md:p-0">
        <p className="text-cyan">{shortLink}</p>
        <button
          className={`w-full text-white text-body md:w-28 py-2 rounded-md ${
            isCopied ? 'bg-dark-violet' : 'bg-cyan'
          } transition-colors duration-300`}
          disabled={isCopied}
          onClick={() => {
            navigator.clipboard.writeText(shortLink);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 5000);
          }}>
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

export default UrlShortResult;
