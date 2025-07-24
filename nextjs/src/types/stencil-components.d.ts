import * as React from 'react';

// Define basic types inline to avoid import issues
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';
type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
type InputSize = 'sm' | 'md' | 'lg';

// Extend React's JSX namespace with our design system components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ds-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        variant?: ButtonVariant;
        size?: ButtonSize;
        disabled?: boolean;
        loading?: boolean;
        'full-width'?: boolean;
        fullWidth?: boolean;
        type?: 'button' | 'submit' | 'reset';
        onClick?: (event: CustomEvent) => void;
      };
      'ds-input': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        type?: InputType;
        placeholder?: string;
        value?: string;
        disabled?: boolean;
        size?: InputSize;
        label?: string;
        error?: string;
        'helper-text'?: string;
        helperText?: string;
        required?: boolean;
        readonly?: boolean;
        name?: string;
        autocomplete?: string;
        maxlength?: number;
        minlength?: number;
        'full-width'?: boolean;
        fullWidth?: boolean;
        onInput?: (event: CustomEvent) => void;
      };
      'ds-spinner': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        size?: 'sm' | 'md' | 'lg';
      };
    }
  }
}

export {};
