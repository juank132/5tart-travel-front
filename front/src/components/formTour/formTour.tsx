import React from 'react';
import { TourForm } from './TourForm';
import { useTourForm } from './useTourForm';

const FormularioTour: React.FC = () => {
  const {
    title,
    setTitle,
    price,
    setPrice,
    description,
    setDescription,
    address,
    setAddress,
    fecha_ingreso,
    setFecha_ingreso,
    fecha_egreso,
    setFecha_egreso,
    destino,
    setDestino,
    salida,
    setSalida,
    transportType,
    setTransportType,
    region,
    setRegion,
    hotel,
    setHotel,
    empresa,
    setEmpresa,
    imgUrl,
    setImgUrl,
    setListImg,
    listImg,
    oferta,
    setOferta,
    handleSubmit,
  } = useTourForm();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Agregar Nuevo Tour</h2>
        <p className="text-xs text-red-500 mb-5">
          Si tiene alguna duda acerque el cursor al signo de pregunta.
        </p>

        <div className="grid grid-cols-1 gap-4">
          <TourForm
            title={title}
            setTitle={setTitle}
            price={price}
            setPrice={setPrice}
            description={description}
            setDescription={setDescription}
            address={address}
            setAddress={setAddress}
            fecha_ingreso={fecha_ingreso}
            setFecha_ingreso={setFecha_ingreso}
            fecha_egreso={fecha_egreso}
            setFecha_egreso={setFecha_egreso}
            destino={destino}
            setDestino={setDestino}
            salida={salida}
            setSalida={setSalida}
            transportType={transportType}
            setTransportType={setTransportType}
            region={region}
            setRegion={setRegion}
            hotel={hotel}
            setHotel={setHotel}
            empresa={empresa}
            setEmpresa={setEmpresa}
            imgUrl={imgUrl}
            setImgUrl={setImgUrl}
            listImg={listImg}
            setListImg={setListImg}
            oferta={oferta}
            setOferta={setOferta}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default FormularioTour;
