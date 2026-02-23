const hitungPromo = () => {
    const modal = 27000;
    const hargaJual = 60000;
    let diskonPenjualan = 10;


    for (let hari = 1; hari <= 7; hari++) {
        let hargaSetelahDiskon = hargaJual * (1 - diskonPenjualan / 100);

        let tarifPajak = (hari % 2 === 0) ? 0.20 : 0.125;
        
        let potonganPajak = hargaSetelahDiskon * tarifPajak;

        let pendapatanBersih = hargaSetelahDiskon - potonganPajak;
        let labaRugi = pendapatanBersih - modal;

    console.log (`Hari ${hari}: Untung = Rp.${Math.round(labaRugi)}`);
    diskonPenjualan /=2;
    }
};

hitungPromo();