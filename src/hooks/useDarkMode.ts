import { useCallback, useEffect, useState } from 'react';

type UseDarkMode = () => {
  dark: boolean;
  toggle: () => void;
};

const STORAGE_KEY = 'darkMode';

export const useDarkMode: UseDarkMode = () => {
  const [dark, setDark] = useState(true); // デフォルトでダークモード
  const [mounted, setMounted] = useState(false);

  // 初回マウント時にlocalStorageから設定を読み込む
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      setDark(stored === 'true');
    }
    // stored が null の場合はデフォルトの true (ダークモード) を維持
  }, []);

  const toggle = useCallback(() => {
    setDark((state) => {
      const newState = !state;
      localStorage.setItem(STORAGE_KEY, String(newState));
      return newState;
    });
  }, []);

  // dark の値が変更されたらクラスを更新
  useEffect(() => {
    if (!mounted) return; // マウント前は何もしない

    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark, mounted]);

  return { dark, toggle };
};
