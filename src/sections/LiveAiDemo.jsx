import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  Cpu, 
  Clock, 
  TrendingUp, 
  CheckCircle2, 
  Terminal, 
  RefreshCw,
  Wrench
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { quickPromptChips, simulateAiResponse } from '../data/aiDemoData';

export function LiveAiDemo({ onContactWithSolution }) {
  const [messages, setMessages] = useState([
    {
      sender: 'agent',
      type: 'greeting',
      text: 'Hello! I am the Codekrexx Solution Architect Agent. Describe a manual process or business bottleneck you want to eliminate, or click one of the quick prompts below.',
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  const scrollToBottom = () => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (userText) => {
    const textToSend = userText || inputValue;
    if (!textToSend.trim() || isTyping) return;

    setInputValue('');

    // Append user message
    const newMessages = [...messages, { sender: 'user', text: textToSend }];
    setMessages(newMessages);
    setIsTyping(true);

    try {
      // Simulate real AI processing latency
      const startTime = Date.now();
      const solution = await simulateAiResponse(textToSend);
      
      const elapsed = Date.now() - startTime;
      const waitTime = Math.max(900 - elapsed, 600);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'agent',
            type: 'solution',
            data: solution,
            userQuery: textToSend,
          }
        ]);
        setIsTyping(false);
      }, waitTime);
    } catch (err) {
      console.error('Error generating AI response:', err);
      setIsTyping(false);
    }
  };

  const handleChipClick = (chipText) => {
    handleSend(chipText);
  };

  const resetChat = () => {
    setMessages([
      {
        sender: 'agent',
        type: 'greeting',
        text: 'Hello! I am the Codekrexx Solution Architect Agent. Describe a manual process or business bottleneck you want to eliminate, or click one of the quick prompts below.',
      }
    ]);
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background ambient orbs */}
      <div className="glow-orb w-[650px] h-[650px] bg-fuchsia-600/15 top-1/4 left-10 -z-10" />
      <div className="glow-orb w-[600px] h-[600px] bg-cyan-600/15 bottom-10 right-10 -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="INTERACTIVE SIMULATOR"
          title="Test our AI Agent Architect in real-time."
          highlight="Agent Architect"
          subtitle="Tell our agent about your business bottleneck. It will design an autonomous agent pipeline, specify API tools, and calculate expected hours saved."
          align="center"
        />

        {/* Quick-Prompt Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Try a scenario:
          </span>
          {quickPromptChips.map((chip, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleChipClick(chip)}
              disabled={isTyping}
              className="text-xs font-medium px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-950/30 text-violet-200 hover:text-white hover:border-cyan-400 hover:bg-cyan-950/40 transition-all backdrop-blur-md cursor-pointer disabled:opacity-50"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Main Terminal / Chat Container */}
        <GlassCard className="border-violet-500/30 bg-[#0A0A16]/90 shadow-[0_20px_60px_-15px_rgba(139,92,246,0.3)]">
          
          {/* Terminal Console Header */}
          <div className="px-5 py-3.5 border-b border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between bg-black/40">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                codekrexx-agent-reasoner // production-mock
              </span>
            </div>

            <button
              type="button"
              onClick={resetChat}
              className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
              title="Reset conversation"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          {/* Chat Messages Stream */}
          <div className="p-5 sm:p-7 min-h-[360px] max-h-[520px] overflow-y-auto space-y-6">
            <AnimatePresence initial={false}>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className={`flex gap-3 sm:gap-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {/* Agent Avatar */}
                  {msg.sender === 'agent' && (
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white shrink-0 shadow-md">
                      <Bot className="w-5 h-5" />
                    </div>
                  )}

                  {/* Message Bubble */}
                  <div className={`max-w-2xl ${msg.sender === 'user' ? 'w-auto' : 'w-full'}`}>
                    
                    {/* User Message */}
                    {msg.sender === 'user' && (
                      <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-sm font-medium shadow-md">
                        {msg.text}
                      </div>
                    )}

                    {/* Agent Greeting */}
                    {msg.sender === 'agent' && msg.type === 'greeting' && (
                      <div className="p-4 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 text-sm text-slate-200 dark:text-slate-200 light:text-slate-800 leading-relaxed font-sans">
                        {msg.text}
                      </div>
                    )}

                    {/* Agent Architectural Solution Breakdown */}
                    {msg.sender === 'agent' && msg.type === 'solution' && (
                      <div className="p-5 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-cyan-500/30 text-sm space-y-4">
                        
                        {/* Agent Title & Summary */}
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                          <span className="font-heading font-bold text-base text-cyan-300 flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-cyan-400" />
                            {msg.data.agentName}
                          </span>
                          <span className="text-[11px] font-mono uppercase bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
                            Architecture Verified
                          </span>
                        </div>

                        <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-xs sm:text-sm">
                          {msg.data.summary}
                        </p>

                        {/* Step-by-Step Agent Pipeline */}
                        <div className="space-y-2">
                          <div className="text-xs font-mono uppercase text-violet-400 font-semibold tracking-wider">
                            Execution Pipeline:
                          </div>
                          {msg.data.steps.map((st, i) => (
                            <div key={i} className="p-3 rounded-xl bg-black/30 dark:bg-black/30 light:bg-white border border-white/5">
                              <div className="font-semibold text-xs text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-violet-600/30 text-violet-300 flex items-center justify-center text-[10px] font-mono">
                                  {i + 1}
                                </span>
                                {st.title}
                              </div>
                              <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 pl-7">
                                {st.detail}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Tools Called */}
                        <div className="pt-2">
                          <div className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider mb-2 flex items-center gap-1.5">
                            <Wrench className="w-3.5 h-3.5" />
                            Integrated Tools & APIs:
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {msg.data.toolsUsed.map((tool, ti) => (
                              <span key={ti} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 dark:bg-white/5 light:bg-slate-200 border border-white/10 text-slate-300 dark:text-slate-300 light:text-slate-800">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Metric Estimates */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                          <div className="p-3 rounded-xl bg-violet-950/30 border border-violet-800/40 text-center">
                            <div className="text-[11px] font-mono text-slate-400 flex items-center justify-center gap-1">
                              <Clock className="w-3 h-3 text-violet-400" /> Time Saved
                            </div>
                            <div className="text-base font-bold font-heading text-white mt-1">
                              {msg.data.metrics.timeSaved}
                            </div>
                          </div>
                          <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-center">
                            <div className="text-[11px] font-mono text-slate-400 flex items-center justify-center gap-1">
                              <TrendingUp className="w-3 h-3 text-cyan-400" /> Expected ROI
                            </div>
                            <div className="text-base font-bold font-heading text-white mt-1">
                              {msg.data.metrics.expectedRoi}
                            </div>
                          </div>
                          <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-center">
                            <div className="text-[11px] font-mono text-slate-400 flex items-center justify-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Build SLA
                            </div>
                            <div className="text-base font-bold font-heading text-white mt-1">
                              {msg.data.metrics.deliveryTimeline}
                            </div>
                          </div>
                        </div>

                        {/* Action CTA */}
                        <div className="pt-2 flex justify-end">
                          <button
                            type="button"
                            onClick={() => {
                              if (onContactWithSolution) onContactWithSolution(msg.data.agentName);
                            }}
                            className="text-xs font-semibold text-cyan-300 hover:text-white flex items-center gap-1 font-mono transition-colors"
                          >
                            <span>Request this build in your stack &rarr;</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* User Avatar */}
                  {msg.sender === 'user' && (
                    <div className="w-9 h-9 rounded-xl bg-slate-800 border border-white/20 flex items-center justify-center text-slate-300 shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white shrink-0 shadow-md">
                    <Bot className="w-5 h-5 animate-pulse" />
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-violet-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    <span className="text-xs font-mono text-slate-400 ml-2">Reasoning through agent tool graph...</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={chatBottomRef} />
          </div>

          {/* Interactive Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 bg-black/30 flex items-center gap-3"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="E.g. Automate client contract generation from CRM deals..."
              disabled={isTyping}
              className="flex-1 bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 rounded-xl px-4 py-3 text-sm text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={!inputValue.trim() || isTyping}
              icon={Send}
            >
              Analyze
            </Button>
          </form>

          {/* Simulation Footer Note */}
          <div className="px-5 py-2.5 bg-black/60 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>Powered by Codekrexx Agent Mesh simulation</span>
            <span>Zero prompt retention active</span>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
