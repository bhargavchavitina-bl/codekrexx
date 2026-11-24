import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#07070E] flex items-center justify-center p-6 text-center">
      <div className="max-w-md">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-cyan-400 p-0.5 mx-auto mb-6 shadow-neon-violet">
          <div className="w-full h-full bg-[#0A0A14] rounded-3xl flex items-center justify-center">
            <Bot className="w-10 h-10 text-cyan-400 animate-pulse" />
          </div>
        </div>

        <h1 className="font-heading text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 mb-3">
          404
        </h1>
        <h2 className="font-heading text-2xl font-bold text-white mb-3">
          Agent Node Not Found
        </h2>
        <p className="text-sm text-slate-400 mb-8 font-sans">
          The requested coordinate does not exist in the Codekrexx mesh. Re-route back to base headquarters.
        </p>

        <Link to="/">
          <Button variant="primary" size="md" icon={ArrowLeft} iconPosition="left">
            Return to Headquarters
          </Button>
        </Link>
      </div>
    </div>
  );
}
