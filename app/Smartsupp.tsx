"use client"

import { useEffect } from 'react';

const SmartsuppChat = () => {
  useEffect(() => {
    
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.smartsuppchat.com/loader.js?';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window._smartsupp = window._smartsupp || {};
      window._smartsupp.key = '5d3271f33d1070aa1131b769549f85225f89f373'; 
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default SmartsuppChat;
