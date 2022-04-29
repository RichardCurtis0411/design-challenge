import React from 'react';

import { Fact } from '~/lib/celeb/Facts/Fact';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';

import BorderColorIcon from '@mui/icons-material/BorderColor';
import Button from '@mui/material/Button';

export const Facts = () => {
  const context = useCelebContext();
  const { groups, topics } = context.celeb.facts!;

  return (
    <div className='FactPanel'>
      <div className='myComponent myCenter'>
        {topics.map((topic, i) => {
          const factGroup = groups[topic];

          return (
            <div key={`${topic}-${i}`} className="FactGroup">
              <div className='topic'>
                <span>{topic}</span>
              </div>
              {factGroup.map((fact, innerI) => {
                return (
                  <div className='FactItem'
                    key={`${topic}-${i}-${innerI}`}
                  >
                    {innerI > 0 && 
                      <div className='divider'></div>
                    }
                    <Fact value={fact} />
                  </div>
                );
              })}
              <div className='separator'></div>
            </div>
          );
        })}
        <div className="myFlex">
          <Button className="myCenter" variant="outlined" endIcon={<BorderColorIcon />}>Add a Fact</Button>
        </div>
        
      </div>
    </div>
  );
};
