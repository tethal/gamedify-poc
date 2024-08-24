'use client';

import useTranslation from '@/hooks/useTranslation';

const LanguageButton = ({ lang }: { lang: string }) => {
  const { changeLanguage } = useTranslation();
  return (
    <button
      className='px-4 py-2 rounded-md bg-gray-800 text-white hover:text-cyan-500 hover:shadow-[0px_0px_10px_2px_#06B6D4]'
      onClick={() => {
        changeLanguage(lang);
        location.reload();
      }}
    >
      {lang}
    </button>
  );
};

export default LanguageButton;
