import Image from "next/image";
import styles from "./page.module.css";
import Button from '@mui/material/Button';
import { getTranslations } from 'next-intl/server';

export default async function Home() {

  const t = await getTranslations('Home');
  return (
    <div className={styles.page}>
      Niki
      <Button variant="contained">{t('cta')}</Button>
    </div>
  );
}
