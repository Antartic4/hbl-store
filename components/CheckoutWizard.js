import { useRouter } from 'next/router';
import React from 'react';

export default function CheckoutWizard({ activeStep = 0 }) {
  const router = useRouter();

  return (
    <div className="mb-5 flex flex-wrap">
      {['Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
        (step, index) => (
          <div
            key={step}
            className={`flex-1 border-b-2
          text-center
          
          ${
            index <= activeStep
              ? 'border-black text-black'
              : 'border-gray-300 text-gray-400'
          }

          `}
          >
            {step === 'Login' && router.locale === 'en'
              ? step
              : step === 'Login' && router.locale === 'es'
              ? 'Autenticación'
              : step === 'Shipping Address' && router.locale === 'en'
              ? step
              : step === 'Shipping Address' && router.locale === 'es'
              ? 'Direccion de Envio'
              : step === 'Payment Method' && router.locale === 'en'
              ? step
              : step === 'Payment Method' && router.locale === 'es'
              ? 'Metodo de Pago'
              : step === 'Place Order' && router.locale === 'en'
              ? step
              : step === 'Place Order' && router.locale === 'es'
              ? 'Colocar Orden'
              : ''}
          </div>
        )
      )}
    </div>
  );
}
