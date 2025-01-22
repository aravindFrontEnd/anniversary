import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';

export default function CodeBlock({ code, language = 'javascript' }) {
  return (
    <div className="overflow-x-auto"> {/* Add this wrapper */}
      <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className="rounded-lg bg-[#011627] p-4 min-w-[500px]"> {/* Add min-width */}
            <pre className={className} style={{ ...style, padding: '1rem', margin: 0 }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })} className="table-row">
                  <span className="table-cell pr-4 text-gray-500 select-none">{i + 1}</span>
                  <span className="table-cell whitespace-pre">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          </div>
        )}
      </Highlight>
    </div>
  );
}