import React from "react";
const about: React.FC = () => {
  return (
    
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Hakkımızda</h1>
      <p className="mb-4">
        Bu sayfa, Av. Ersin Doğan hukuk bürosunun tanıtımını yapmaktadır.
        Büromuz, müvekkillerimize en iyi hizmeti sunmak için çeşitli hukuk
        alanlarında uzmanlaşmış avukatlarla çalışmaktadır.
      </p>
      <p className="mb-4">
        Misyonumuz, adaletin sağlanmasına katkıda bulunmak ve müvekkillerimizin
        haklarını korumaktır. Vizyonumuz, hukukun üstünlüğünü her zaman ön
        planda tutarak müvekkillerimize en etkili ve verimli çözümleri
        sunmaktır.
      </p>
    </div>
  );
};

export default about;
