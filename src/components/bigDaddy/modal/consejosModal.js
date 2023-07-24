import React, { useState } from 'react';

const texts = [
  { id: 1, text: 'Ahorra regularmente para crear un fondo de emergencia que cubra al menos de 3 a 6 meses de gastos.' },
  { id: 2, text: 'Reduce las deudas de alto interés primero y crea un plan para pagar las deudas de manera más eficiente.' },
  { id: 3, text: 'Invierte parte de tus ingresos en opciones de ahorro e inversión para hacer crecer tu patrimonio.' },
  { id: 4, text: 'Establece un presupuesto y lleva un registro de tus gastos para controlar tus finanzas de manera efectiva.' },
  { id: 5, text: 'Educate en temas financieros y busca asesoramiento profesional para tomar decisiones informadas.' }
];

const Slider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(texts[0]);

  const goToPrevSlide = () => {
    const nextIndex = selectedIndex > 0 ? selectedIndex - 1 : texts.length - 1;
    setSelectedImage(texts[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const goToNextSlide = () => {
    const nextIndex = selectedIndex < texts.length - 1 ? selectedIndex + 1 : 0;
    setSelectedImage(texts[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  return (
    <div className="flex flex-col justify-center items-center h-2/3 my-8">
      <h2 className='text-2xl font-serif text-orange-500'>Consejos financieros </h2>
      <div className="slider-container min-w-[300px] max-w-[800px]  relative">
        <p className='text-xl font-serif font-medium'>{selectedImage.text}</p>
        <div className=" flex justify-center mt-4">
          <button onClick={goToPrevSlide} className="px-4 py-2 mx-2 border border-gray-400 rounded cursor-pointer">Anterior</button>
          <button onClick={goToNextSlide} className="px-4 py-2 mx-2 border border-gray-400 rounded cursor-pointer">Siguiente</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
