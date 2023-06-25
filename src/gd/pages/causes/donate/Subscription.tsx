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
    
    if (!isButtonRendered && window.PayPal && window.PayPal.Button) {
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
        style: {
            shape: 'rect',
            color: 'silver',
            layout: 'vertical',
            label: 'paypal'
        },
        createSubscription: function(data, actions) {
          return actions.subscription.create({
            /* Creates the subscription */
            plan_id: 'P-5Y978221XU938333BMSLTLVY'
          });
        },
        onApprove: function(data, actions) {
          alert(data.subscriptionID); // You can add optional success message for the subscriber here
        }

        try {
          const button = window.PayPal.Button(options);
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
