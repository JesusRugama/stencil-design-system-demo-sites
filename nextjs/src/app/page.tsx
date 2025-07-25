'use client';

import { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      setMessage('Please enter some text!');
      return;
    }

    setIsLoading(true);
    setMessage('');

    // Simulate an async operation
    setTimeout(() => {
      setMessage(`Hello, ${inputValue}! 👋`);
      setIsLoading(false);
    }, 1500);
  };

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
    if (message) setMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-secondary-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-secondary-900 mb-2">
            Design System Demo
          </h1>
          <p className="text-secondary-600 text-lg">
            Showcasing <code className="bg-secondary-100 px-2 py-1 rounded text-primary-600 font-mono text-sm">@jesusrugama/stencil-design-system</code> with Next.js SSR
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Demo Section */}
        <div className="bg-white rounded-xl shadow-lg border border-secondary-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-secondary-900 mb-6">
            Interactive Demo
          </h2>
          
          <div className="space-y-6">
            {/* Input Demo */}
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Enter your name:
              </label>
              <ds-input
                type="text"
                placeholder="Type your name here..."
                value={inputValue}
                onInput={handleInputChange}
                size="md"
              />
            </div>

            {/* Button Demo */}
            <div className="flex gap-4 flex-wrap">
              <ds-button
                variant="primary"
                size="md"
                loading={isLoading}
                onClick={handleSubmit}
                style={{
                  '--ds-color-primary-600': '#ff00fe',
                  '--ds-color-primary-700': '#e600e6',
                  '--ds-color-primary-800': '#cc00cc'
                }}
              >
                {isLoading ? 'Processing...' : 'Say Hello'}
              </ds-button>
              
              <ds-button
                variant="secondary"
                size="md"
                onClick={() => {
                  setInputValue('');
                  setMessage('');
                }}
              >
                Clear
              </ds-button>
            </div>

            {/* Message Display */}
            {message && (
              <div className={`p-4 rounded-lg ${
                message.includes('Please') 
                  ? 'bg-error-50 text-error-700 border border-error-200'
                  : 'bg-primary-50 text-primary-700 border border-primary-200'
              }`}>
                {message}
              </div>
            )}
          </div>
        </div>

        {/* Component Showcase */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Button Variants */}
          <div className="bg-white rounded-xl shadow-lg border border-secondary-200 p-6">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">
              Button Variants
            </h3>
            <div className="space-y-3">
              <div className="flex gap-2 flex-wrap">
                <ds-button variant="primary" size="sm">Primary</ds-button>
                <ds-button variant="secondary" size="sm">Secondary</ds-button>
                <ds-button variant="ghost" size="sm">Ghost</ds-button>
                <ds-button variant="danger" size="sm">Danger</ds-button>
              </div>
              <div className="flex gap-2 flex-wrap">
                <ds-button variant="primary" size="md">Primary</ds-button>
                <ds-button variant="secondary" size="md">Secondary</ds-button>
                <ds-button variant="ghost" size="md">Ghost</ds-button>
                <ds-button variant="danger" size="md">Danger</ds-button>
              </div>
              <div className="flex gap-2 flex-wrap">
                <ds-button variant="primary" size="lg">Primary</ds-button>
                <ds-button variant="secondary" size="lg">Secondary</ds-button>
                <ds-button variant="ghost" size="lg">Ghost</ds-button>
                <ds-button variant="danger" size="lg">Danger</ds-button>
              </div>
            </div>
          </div>

          {/* Input Variants */}
          <div className="bg-white rounded-xl shadow-lg border border-secondary-200 p-6">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">
              Input Variants
            </h3>
            <div className="space-y-3">
              <ds-input placeholder="Small input" size="sm" />
              <ds-input placeholder="Medium input" size="md" />
              <ds-input placeholder="Large input" size="lg" />
              <ds-input placeholder="Disabled input" disabled />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 bg-white rounded-xl shadow-lg border border-secondary-200 p-8">
          <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
            Features
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-600 text-xl">⚡</span>
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">SSR Ready</h4>
              <p className="text-secondary-600 text-sm">
                Server-side rendering support with proper hydration
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-600 text-xl">🎨</span>
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Custom Theme</h4>
              <p className="text-secondary-600 text-sm">
                Tailwind CSS integration with design system colors
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-600 text-xl">🔧</span>
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Type Safe</h4>
              <p className="text-secondary-600 text-sm">
                TypeScript declarations for all components
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary-900 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-secondary-300">
            Built with{' '}
            <span className="text-primary-400 font-semibold">@jesusrugama/stencil-design-system</span>{' '}
            and{' '}
            <span className="text-primary-400 font-semibold">Next.js</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
