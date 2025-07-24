'use client';

import { useEffect } from 'react';

export default function DesignSystemLoader() {
  useEffect(() => {
    // Load and define custom elements on the client side
    const loadDesignSystem = async () => {
      try {
        const { defineCustomElements } = await import('@jesusrugama/stencil-design-system/loader');
        defineCustomElements();
      } catch (error) {
        console.error('Failed to load design system:', error);
      }
    };

    loadDesignSystem();
  }, []);

  return null;
}
