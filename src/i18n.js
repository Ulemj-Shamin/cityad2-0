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
      login: {
        title: "Login",
        emailPlaceholder: "Enter your email",
        passwordPlaceholder: "Enter your password",
        signIn: "Login",
        successMessage: "Login successful!"
      },
      signup: {
        title: "Sign Up",
        emailPlaceholder: "Enter your email",
        passwordPlaceholder: "Enter your password",
        signUp: "Sign Up",
        successMessage: "Account created! You can now log in."
      },
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
      login: {
        title: "Нэвтрэх",
        emailPlaceholder: "Имэйлээ оруулна уу",
        passwordPlaceholder: "Нууц үгээ оруулна уу",
        signIn: "Нэвтрэх",
        successMessage: "Амжилттай нэвтэрлээ!"
      },
      signup: {
        title: "Бүртгүүлэх",
        emailPlaceholder: "Имэйлээ оруулна уу",
        passwordPlaceholder: "Нууц үгээ оруулна уу",
        signUp: "Бүртгүүлэх",
        successMessage: "Бүртгэл амжилттай үүслээ! Одоо нэвтэрч болно."
      },
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
