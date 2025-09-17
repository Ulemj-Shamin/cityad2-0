import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navbar: { home: "Home", about: "About Us", contact: "Contact", faq: "FAQ", login: "Login / Sign Up" },
      home: { title: "LED Listings Map", buy: "Buy Now", loan: "Apply Loan" },
      about: { title: "About Us", description: "We help LED board owners showcase their products and buyers to purchase easily." },
      contact: { title: "Contact Us" },
      faq: { title: "FAQ" },
      login: { title: "Login / Sign Up" },
      admin: { title: "Admin Upload" }
    }
  },
  mn: {
    translation: {
      navbar: { home: "Нүүр", about: "Бидний тухай", contact: "Холбоо барих", faq: "Түгээмэл асуулт", login: "Нэвтрэх / Бүртгүүлэх" },
      home: { title: "LED Самбаруудын Газрын зураг", buy: "Одоо худалдаж авах", loan: "Зээл хүсэх" },
      about: { title: "Бидний тухай", description: "Бид LED самбарын эзэнд бүтээгдэхүүнээ харуулах, худалдан авагчдад худалдан авахад тусалдаг." },
      contact: { title: "Холбоо барих" },
      faq: { title: "Түгээмэл асуулт" },
      login: { title: "Нэвтрэх / Бүртгүүлэх" },
      admin: { title: "Админ оруулах" }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
