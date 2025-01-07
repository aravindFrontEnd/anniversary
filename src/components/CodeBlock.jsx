import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';

const CodeBlock = ({ code, language = 'javascript' }) => {
  return (
    <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="rounded-lg overflow-hidden bg-[#011627] p-4">
          <pre className={className} style={{ ...style, padding: '1rem', margin: 0 }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })} className="table-row">
                <span className="table-cell pr-4 text-gray-500 select-none">{i + 1}</span>
                <span className="table-cell">
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
  );
};

export default CodeBlock;