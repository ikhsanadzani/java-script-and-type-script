const hitungPromo=(): void=> {
    const modal: number = 27000;
    const hargaJual: number = 60000;
    let diskonPenjualan: number = 10;

    for(let hari: number = 1; hari <= 7; hari++){
        const hargaSetelahDiskon : number = hargaJual * (1 - diskonPenjualan /100);

        let tarifPajak: number = (hari % 2 === 0) ? 0.20 : 0.125;

        let potonganPajak: number = hargaSetelahDiskon * tarifPajak;
        let pendapatanBersih: number = hargaSetelahDiskon - potonganPajak;

        let labaRugi: number = pendapatanBersih - modal;

        console.log(
            `Hari ${hari}: Laba Rp${Math.round(labaRugi).toLocaleString('id-ID')} | ` +
            `Diskon: ${diskonPenjualan.toFixed(2)}% | ` +
            `Pajak: ${(tarifPajak * 100)}%`
        );
        diskonPenjualan /= 2;
    }
};

hitungPromo();