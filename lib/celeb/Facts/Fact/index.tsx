import React from 'react';

import Link from 'next/link';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';
import { Fact as TFact } from '~/lib/components/types';

export const Fact: React.FC<{ value: TFact }> = ({ value }) => {
  const {
    celeb: { name },
  } = useCelebContext();

  return (
    <div className='fact'>
      <div className='date'>
        <p>{value.date}</p>
      </div>

      <div className='content'>
        {(value.type === 'quote' && (
          <div>
            <p className='context'>
              {value.context}, {name} said
            </p>

            <blockquote className='blockquote'>
              <div className='quoteMark'>
              </div>
              <p>{value.quote}</p>
            </blockquote>
          </div>
        )) ||
          (value.type == 'fact' && (
            <div>
              <p>{value.content}</p>
            </div>
          ))}
      </div>

      <div className='tags myFlex'>
        {value.tags.map((t, index) => {
          return (
            <p key={t.tag.name} style={{marginLeft: index>0?"1rem":"0px"}}>
              # {t.isLowConfidence && 'Possibly '}
              {t.tag.name}
            </p>
          );
        })}
      </div>

      <div className='links myFlex'>
        <div className="myRight">
          <Link href={value.source}>Source</Link>
          <Link href={value.forumLink}>Forum link</Link>
        </div>
      </div>
    </div>
  );
};
