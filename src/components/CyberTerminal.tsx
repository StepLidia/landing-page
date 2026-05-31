import { useEffect, useState } from 'react';

const terminalLines = [
  { text: 'Initializing portfolio interface...', color: 'text-neutral-400/70' },
  { text: 'Loading software engineering modules...', color: 'text-neutral-400/70' },
  { text: 'Scanning projects: scientific, enterprise...', color: 'text-violet-400/70' },
  { text: 'Contact form online found.', color: 'text-fuchsia-400/70' },
  { text: 'Status: available for interesting problems...', color: 'text-teal-400/70' },
];

type TerminalLine = (typeof terminalLines)[number];

export function CyberTerminal() {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);

  useEffect(() => {
    const timers = terminalLines.map((terminalLine, index) =>
      window.setTimeout(() => {
        setVisibleLines((current) => [...current, terminalLine]);
      }, index * 700)
    );

    return () => {
      timers.forEach(window.clearTimeout);
    };
  }, []);

  return (
    <div className="font-mono text-sm">
      <div className="mb-4 border-b border-white/10 pb-2">
        <span className="text-cyan-500/80">lidia@portfolio</span>
        <span className="text-white/70">:</span>
        <span className="text-blue-400">~</span>
        <span className="text-white/70">$</span>
      </div>

      <div className="space-y-2">
        {visibleLines.map((line) => (
          <p key={line.text}>
            <span className={line.color}>›</span>{' '}
            <span className={line.color}>{line.text}</span>
          </p>
        ))}

        <p className="animate-pulse text-cyan-500">› _</p>
      </div>
    </div>
  );
}
