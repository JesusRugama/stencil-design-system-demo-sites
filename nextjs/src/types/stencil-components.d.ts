import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ds-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
        size?: 'sm' | 'md' | 'lg';
        disabled?: boolean;
        loading?: boolean;
        'full-width'?: boolean;
        type?: 'button' | 'submit' | 'reset';
      };
      'ds-input': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        type?: string;
        placeholder?: string;
        value?: string;
        disabled?: boolean;
        size?: 'sm' | 'md' | 'lg';
        'input-type'?: string;
      };
      'ds-spinner': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        size?: 'sm' | 'md' | 'lg';
      };
    }
  }
}

export {};
