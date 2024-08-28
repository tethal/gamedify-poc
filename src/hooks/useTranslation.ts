'use client';

import { useEffect, useState } from 'react';

const translations: Record<string, Record<string, string>> = {
  cs: {
    quiz_list_link: 'Seznam kvízů',
    quiz_code: 'Kód kvízu',
    please_enter_quiz_code: 'Prosím zadejte kód kvízu',
    play: 'Hrát',
    player: 'Hráč',
    type_an_answer: 'Napište odpověď',
    submit: 'Odeslat',
    won: 'vyhrál',
    play_again: 'Hrát znovu',
    logout: 'Odhlásit se',
    sign_with_google: 'Přihlásit se',
    sign_dev_admin: 'DEV ADMIN',
    code_most_be_unique: 'Kód musí být unikátní',
    db_error: 'Chyba databáze',
    create_new_quiz: 'Vytvořit nový kvíz',
    quiz_name: 'Název kvízu',
    question_count: 'Počet otázek',
    actions: 'Akce',
    unauthorized: 'Neautorizován',
    name_is_required: 'Jméno je povinné',
    back_to_list: 'Zpět na seznam',
    questions: 'Otázky',
    add_question: 'Přidat otázku:',
    add_answer: 'Přidat odpověď:',
    invalid_code: 'Neplatný kód',
    question_is_required: 'Otázka je povinná',
    answer_is_required: 'Odpověď je povinná',
  },
  sk: {
    quiz_list_link: 'Zoznam kvízov',
    quiz_code: 'Kód kvízu',
    please_enter_quiz_code: 'Prosím zadajte kód kvízu',
    play: 'Hrať',
    player: 'Hráč',
    type_an_answer: 'Napíšte odpoveď',
    submit: 'Odoslať',
    won: 'vyhral',
    play_again: 'Hrať znovu',
    logout: 'Odhlasit sa',
    sign_with_google: 'Prihlásiť sa',
    sign_dev_admin: 'DEV ADMIN',
    code_most_be_unique: 'Kód musí byť unikátny',
    db_error: 'Chyba databázy',
    create_new_quiz: 'Vytvoriť nový kvíz',
    quiz_name: 'Názov kvízu',
    question_count: 'Počet otázok',
    actions: 'Akcie',
    unauthorized: 'Neautorizovaný',
    name_is_required: 'Názov je povinný',
    back_to_list: 'Späť na zoznam',
    questions: 'Otázky',
    add_question: 'Pridať otázku:',
    add_answer: 'Pridať odpoveď:',
    invalid_code: 'Neplatný kód',
    question_is_required: 'Otázka je povinná',
    answer_is_required: 'Odpoveď je povinná',
  },
  en: {
    quiz_list_link: 'Quiz list',
    quiz_code: 'Quiz code',
    please_enter_quiz_code: 'Please enter quiz code',
    play: 'Play',
    player: 'Player',
    type_an_answer: 'Type an answer',
    submit: 'Submit',
    won: 'won',
    play_again: 'Play again',
    logout: 'Logout',
    sign_with_google: 'Login',
    sign_dev_admin: 'DEV ADMIN',
    code_most_be_unique: 'Code must be unique',
    db_error: 'Database error',
    create_new_quiz: 'Create new quiz',
    quiz_name: 'Quiz name',
    question_count: 'Question count',
    actions: 'Actions',
    unauthorized: 'Unauthorized',
    name_is_required: 'Name is required',
    back_to_list: 'Back to list',
    questions: 'Questions',
    add_question: 'Add question:',
    add_answer: 'Add answer:',
    invalid_code: 'Invalid code',
    question_is_required: 'Question is required',
    answer_is_required: 'Answer is required',
  },
};

export default function useTranslation() {
  const [language, setLanguage] = useState('cs');

  useEffect(() => {
    const autodetect = () => {
      const value = localStorage.getItem('language');
      if (value != null) return value;
      if (navigator.languages != null) return navigator.languages[0];
      return 'cs';
    };
    setLanguage(autodetect());
  }, []);

  const translate = (key: string) => {
    return (translations[language] ?? translations['cs'])[key] ?? key;
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return {
    translate,
    language,
    changeLanguage,
  };
}
