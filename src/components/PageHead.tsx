import React from 'react';
import { Helmet } from 'react-helmet';

type PageHeadProps = {
  title: string;
  locale: string;
  alternativeLanguagePaths?: { language: string; path: string }[];
};

export function PageHead({ title, locale, alternativeLanguagePaths }: PageHeadProps) {
  return (
    <Helmet>
      <html lang={locale} />
      <title>{title}</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,700;1,400&family=Poppins:ital,wght@0,300;0,600;1,300;1,600&family=Rajdhani:wght@400;700&display=swap"
        rel="stylesheet"
      />
      {alternativeLanguagePaths?.map((p) => {
        return <link rel="alternate" href={p.path} hrefLang={p.language} key={p.language} />;
      })}
    </Helmet>
  );
}
