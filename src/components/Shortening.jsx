/* eslint-disable no-undef */
import { useState } from 'react';
import UrlShortResult from './ui/UrlShortResult';

const URL_PATTERN =
  /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

function Shortening() {
  const [urlShorteningResults, setUrlShorteningResults] = useState([]);
  const [inputUrl, setInputUrl] = useState('');
  const [status, setStatus] = useState('idle'); // Status: idle, loading, input invalid, error

  function handleRequest(e) {
    e.preventDefault();
    if (!URL_PATTERN.test(inputUrl)) {
      setStatus('input invalid');
      console.log('input invalid');
      return;
    }

    setStatus('loading');
    fetch('https://shrtlnk.dev/api/v2/link', {
      method: 'POST',
      headers: {
        'api-key': process.env.API_KEY,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: inputUrl,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newResult = { url: data.url, shortLink: data.shrtlnk };
        setUrlShorteningResults((results) => [...results, newResult]);
      })
      .catch((err) => console.log(err))
      .finally(() => setStatus('idle'));
  }

  return (
    <section className=" w-[95%] md:w-full -mt-24 md:-mt-16">
      <form
        onSubmit={handleRequest}
        className="rounded-lg font-medium md:py-8 flex flex-col md:px-10 md:flex-row gap-4 p-5 bg-shorten-mobile bg-origin-box bg-no-repeat bg-right-top bg-dark-violet">
        <div className="flex flex-col md:w-4/5 w-full">
          <input
            value={inputUrl}
            onChange={(e) => {
              setInputUrl(e.target.value);
              setStatus('idle');
            }}
            type="text"
            placeholder="Shorten a link here..."
            disabled={status === 'loading'}
            className="p-3 rounded-md disabled:cursor-not-allowed focus:outline-none"
          />
          {status === 'input invalid' && (
            <p className="text-sm text-red">*Please enter valid URL</p>
          )}
        </div>
        <button
          className="w-full md:flex-1 text-white text-body h-9 md:h-[50px] rounded-md bg-cyan disabled:cursor-not-allowed disabled:opacity-75"
          disabled={status === 'loading'}>
          {status === 'idle' ? 'Shorten it!' : 'Loading'}
        </button>
      </form>
      <div className="mt-5 flex flex-col gap-3">
        {urlShorteningResults?.map((result, i) => (
          <UrlShortResult
            key={i}
            url={result.url}
            shortLink={result.shortLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Shortening;
