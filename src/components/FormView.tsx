export default function FolhaBrutaCard () {
  return (
    <div className="max-w-2xl mx-auto grid gap-6 grid-cols-2 text-center pb-10">

      {/* Folha Bruta */}
      <div className="bg-white p-4 shadow-lg rounded-2xl">
        <h2 className="text-xl font-bold mb-4">Total Folha Bruta</h2>
        <p className="text-gray-700 text-2xl font-semibold">R$500,00</p>
      </div>

       {/* Custo Total da Folha */}
       <div className="bg-white p-4 shadow-lg rounded-2xl">
        <h2 className="text-xl font-bold mb-4">Custo Total da Folha</h2>
        <p className="text-gray-700 text-2xl font-semibold">R$300,00</p>
      </div>

      {/* Desconto em Folha */}
      <div className="bg-white p-4 shadow-lg rounded-2xl">
        <h2 className="text-xl font-bold mb-4">Desconto em Folha</h2>
        <p className="text-gray-700 text-2xl font-semibold">16,0%</p>
      </div>

      {/* Economia */}
      <div className="bg-white p-4 shadow-lg rounded-2xl">
        <h2 className="text-xl font-bold mb-4">Economia</h2>
        <p className="text-blue-600 text-2xl font-semibold">4,0%</p>
      </div>

      {/* Proposta CM */}
      <div className="bg-white p-4 shadow-lg rounded-2xl">
        <h2 className="text-xl font-bold mb-4">Proposta CM</h2>
        <p className="text-green-600 text-2xl font-medium">12,5%</p>
      </div>

      {/* Saldo de Repasse */}
      <div className="bg-white p-4 shadow-lg rounded-2xl">
        <h2 className="text-xl font-bold mb-4">Saldo de Repasse</h2>
        <p className="text-gray-700 text-2xl font-semibold">R$100,00</p>
      </div>

      {/* Outros Serviços */}
      <div className="bg-white p-4 shadow-lg rounded-2xl">
        <h2 className="text-xl font-bold mb-4">Outros Serviços</h2>
        <p className="text-gray-700 text-2xl font-semibold">20,5%</p>
      </div>

    </div>
  );
};