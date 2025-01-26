import React from 'react';
import { ChevronRight } from 'lucide-react';

export function PathBreadCrumb({ path }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-400">
      {path.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight size={16} className="text-gray-600" />}
          <span className="hover:text-gray-200 cursor-pointer">
            {item}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}
