import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/Button';

export const AppBar = () => {
  const [searching, setSearching] = useState(false)

  const searchHandler = (search: boolean) => {
    setSearching(search);
  }

  return (
    <nav className='AppBar'>
      <section className='myComponent myCenter'>
        <div className='myFlex myHeight'>
          <div className='searchBar myWidth myFlex' style={{display: searching?'flex':'none'}}>
            <div className='myFlex' style={{width: "70%"}}>
              <Input className='myCenter myWidth' placeholder='Enhanced by GOOGLE'></Input>
            </div>
            <div className='myFlex' style={{width: "15%"}}>
              <Button className="myCenter" variant="outlined">
                <SearchIcon />
              </Button>
            </div>
            <div className='myFlex' style={{width: "15%"}}>
              <IconButton className='myRight' aria-label="search" onClick={() => searchHandler(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            
          </div>
          <div className='logo myFlex myHeight' style={{width: "50%", display: searching?'none':'flex'}}>
            <div className='myLeft'>
              <Link passHref href="/">
                <a>
                  <Image
                    src="/images/logo.svg"
                    width={250}
                    height={30}
                    alt="Hollowverse"
                    layout="fixed"
                  />
                </a>
              </Link>
              <p style={{color: "gray", margin: "0rem"}}>Important people and facts</p>
            </div>
          </div>
          <div className='searchBtn myFlex' style={{width: "50%", display: searching?'none':'flex'}}>
            <div className="myRight">
              <IconButton aria-label="search" onClick={() => searchHandler(true)}>
                <SearchIcon />
              </IconButton>
            </div>
          </div>
        </div>
        

        
      </section>
    </nav>
  );
};
