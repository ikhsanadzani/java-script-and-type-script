const hitungPromo = () => {
    const modal = 27000;
    const hargaJual = 60000;
    let diskonPenjualan = 10;

    console.log(hasilnya);

    for (let hari = 1; hari <= 7; hari++) {
        let hargaSetelahDiskon = hargaJual * (1 - diskonPenjualan / 100);

        let tarifPajak; {
            if (hari % 2 === 0) {
                tarifPajak = 0.20;
            } else {
                tarifPajak = 0.125;
            }
        }
        
        let potonganPajak = hargaSetelahDiskon * tarifPajak;

        let pendapatanBersih = hargaSetelahDiskon - potonganPajak;
        let labaRugi = pendapatanBersih - modal;
    }
};

hitungPromo();