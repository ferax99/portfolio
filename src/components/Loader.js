import React from 'react';
import { Loader2 } from 'lucide-react'; // Icono de cargador

// Loader simplificado: solo muestra el spinner
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <Loader2 className="animate-spin h-16 w-16 text-[#FF8800]" aria-label="Loading content" />
    </div>
  );
};

export default Loader;
