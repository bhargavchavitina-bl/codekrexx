import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#07070E] flex items-center justify-center p-6 text-center">
      <div className="max-w-md">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-brand-primary via-brand-accent to-brand-secondary p-0.5 mx-auto mb-6 shadow-brand-primary">
          <div className="w-full h-full bg-[#0A0A14] rounded-3xl flex items-center justify-center">
            <Bot className="w-10 h-10 text-brand-secondary animate-pulse" />
          </div>
        </div>

        <h1 className="font-heading text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary mb-3">
          404
        </h1>
        <h2 className="font-heading text-2xl font-bold text-white mb-3">
          Page Not Found
        </h2>
        <p className="text-sm text-slate-400 mb-8 font-sans">
          The page you are looking for does not exist or may have moved. Head back to the main page.
        </p>

        <Link to="/">
          <Button variant="primary" size="md" icon={ArrowLeft} iconPosition="left">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
