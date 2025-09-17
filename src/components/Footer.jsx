import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="text-cyan text-center py-4 mt-8 border-t border-cyan">
      &copy; 2025 LED Marketplace | All rights reserved
    </footer>
  );
}
