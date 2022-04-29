import React from 'react';

import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';

export const TagCollection = () => {
  const tags = useCelebContext().celeb.tags!;

  return (
    <div className="TagCollection">
      <div className='content myComponent myCenter myFlex'>
        {tags.regular.map((t) => (
          <div className="tag" key={t.tag.name}>
            <span>{t.tag.name}</span>
          </div>
        ))}
      </div>

      {tags.lowConfidence.length > 0 && (
        <div className='detail myComponent myCenter myFlex'>
          <div className="myFlex">
            <p className="myCenter">Maybe</p>
          </div>
          {tags.lowConfidence.map((t) => (
            <div className="tag" key={t.tag.name}>
              <span>{t.tag.name}</span>
            </div>
          ))}
        </div>
      )}

      <div className='divider myComponent myCenter'></div>
    </div>
  );
};
