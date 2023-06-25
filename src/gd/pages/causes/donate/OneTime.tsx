import React, { useEffect, useMemo, useRef, useState } from 'react';

declare global {
  interface Window {
    PayPal: any;
  }
}

let counter = 0;

const generateId = () => {
  return `ID-${++counter}`;
};

const DonateButton = () => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const buttonId = useMemo(() => `ID-${generateId()}`, []);
  const [isButtonRendered, setIsButtonRendered] = useState(false);

  useEffect(() => {
    
    if (!isButtonRendered && window.PayPal && window.PayPal.Donation) {
      if (buttonRef.current) {
        // Add your PayPal configuration options
        const options = {
          env: 'sandbox',
          locale: 'en_US',
          business: 'sb-xaljh26407458@business.example.com',
          amount: 20,
          onComplete: function (params: any) {
            console.log('params', params);
          },
        };

        try {
          const button = window.PayPal.Donation.Button(options);
          button.render(`#${buttonRef.current.id}`);
          setIsButtonRendered(true);
        } catch (error) {
          console.error('PayPal button rendering error:', error);
          
        }
      }
    }
  }, [isButtonRendered]);

  return <div ref={buttonRef} id={buttonId} />;
};

const App = () => {
  return <DonateButton />;
};

export default App;
