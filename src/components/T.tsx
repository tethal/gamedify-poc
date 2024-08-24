'use client';
import useTranslation from '@/hooks/useTranslation';

const T = ({ t }: { t: string }) => {
  const { translate } = useTranslation();
  return <span>{translate(t)}</span>;
};

export default T;
