import React from 'react';

import Image from 'next/image';
import { sanityImage } from '~/lib/components/sanityio';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';

export const TopSection = () => {
  const context = useCelebContext();

  const picture = context.celeb.picture || context.placeholderImage;

  return (
    <div className="TopSection">
      <section className='myComponent myCenter'>
        <header>
          <div className='myFlex avatar'>
            <Image
              blurDataURL={picture.metadata.lqip}
              placeholder="blur"
              src={sanityImage(picture).width(200).height(250).url()}
              width={200}
              height={250}
              priority
              alt={context.celeb.name}
            />
          </div>

          <div className='myPadding'>
            <div className='myFlex'>
              <span className="description myCenter"><sup>Religion, politics, and ideas of</sup></span>
            </div>
            <div className='myFlex'>
              <span className="name myCenter">{context.celeb.name}</span>
            </div>
          </div>
        </header>
      </section>
    </div>
  );
};
