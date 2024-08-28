'use client';

import useTranslation from '@/hooks/useTranslation';
import SquareButton from './SquareButton';

const LanguageButton = ({ lang }: { lang: string }) => {
  const { changeLanguage } = useTranslation();
  return (
    <SquareButton
      onClick={() => {
        changeLanguage(lang);
        location.reload();
      }}
    >
      {lang}
    </SquareButton>
  );
};

export default LanguageButton;
