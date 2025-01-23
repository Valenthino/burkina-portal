'use client';

import { useState } from 'react';
import MainMenu from './MainMenu';

export default function ClientMainMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <MainMenu
      activeMenu={activeMenu}
      onMenuChange={setActiveMenu}
    />
  );
} 