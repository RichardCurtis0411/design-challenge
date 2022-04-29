import React from 'react';

import Image from 'next/image';

export const Footer = () => {
  return (
    <div className="Footer">
      <section className='myComponent myCenter'>
        {/* <div className='divider'></div> */}
        <div className='myFlex'>
          <div style={{marginLeft: "2rem"}}>
            <Image
              width={50}
              height={50}
              alt="Hollowverse"
              src="/images/letter-logo.png"
            />
          </div>
          <div className='contact'>
            <div className='description'>
              <span className="myFlex">
                <svg aria-hidden="true" data-prefix="far" data-icon="info-circle" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 476.6" focusable="false"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm0-338c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>
                About
              </span>
              <p>
                Hollowverse is about the important people and their beliefs.
              </p>
            </div>
            <div className='description'>
              <span className="myFlex">
                <svg aria-hidden="true" data-prefix="far" data-icon="comment-dots" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 476.6" focusable="false"><path fill="currentColor" d="M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path></svg>
                Contact
              </span>
              <p>
                Email us at{' '}
                <a href="mailto:hollowverse@hollowverse.com">
                  hollowverse@hollowverse.com
                </a>
                .
              </p>
            </div>
            <div className='description'>
              <span>
                <svg aria-hidden="true" data-prefix="far" data-icon="gift" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 476.6" focusable="false"><path fill="currentColor" d="M464 144h-26.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H48c-26.5 0-48 21.5-48 48v128c0 8.8 7.2 16 16 16h16v107.4c0 29 23.6 52.6 52.6 52.6h342.8c29 0 52.6-23.6 52.6-52.6V336h16c8.8 0 16-7.2 16-16V192c0-26.5-21.5-48-48-48zM232 448H84.6c-2.5 0-4.6-2-4.6-4.6V336h112v-48H48v-96h184v256zm-78.1-304c-22.1 0-40-17.9-40-40s17.9-40 40-40c22 0 37.5 7.6 84.1 77l2 3h-86.1zm122-3C322.5 71.6 338 64 360 64c22.1 0 40 17.9 40 40s-17.9 40-40 40h-86.1l2-3zM464 288H320v48h112v107.4c0 2.5-2 4.6-4.6 4.6H280V192h184v96z"></path></svg>
                Copyrights
              </span>
              <p>
                We reserve none. Everything here is free, including the code.
              </p>
            </div>
          </div>
        </div>
    </section>
    </div>
  );
};
