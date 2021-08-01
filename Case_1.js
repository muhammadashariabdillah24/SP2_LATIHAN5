function dataHandling2(input) {


    let dataArray = input
    // 1 . varibale dataArray mewakili sebuah array yang ada didalam paremeter input

    dataArray.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
    // 2 . lalu modifikasi dataArray dengan fungsi splice yang dimana
    // fungsi splice akan menambahkan data mulai dari nomor 1 hingga nomor 4
    // lalu data tersebut digantikan dengan data baru yang sudah didefinisikan dari fungsi splice

    let hasilSplit = dataArray[3].split('/')
    // 3 . Setelah dataArray dimodifikasi
    // tambahkan fungsi split yang dimana fungsi split akan memecahkan sebuah data dalam array ke 3 yang berisi tanggal/bulan/dan tahun

    let tanggal = 0
    let bulan = 'Tidak Diketahui'
    let bulan2 = 'Tidak Diketahui'
    let tahun = 0

// Tanggal


    for (let i = 1; i <= 31; i++){

        switch (true) {
            case hasilSplit[0] == i:
                tanggal = i
                break;
        
            default:
                tanggal
                break;
        }

    }

// Bulan Dalam Bentuk String

        switch (true) {
            case hasilSplit[1] == 01:
                bulan = 'Januari'
                // bulan2 = '01'
                break;

            case hasilSplit[1] == 02:
                bulan = 'Februari'
                // bulan2 = '02'
                break;

            case hasilSplit[1] == 03:
                bulan = 'Maret'
                // bulan2 = '03'
                break;

            case hasilSplit[1] == 04:
                bulan = 'April'
                // bulan2 = '04'
                break;

            case hasilSplit[1] == 05:
                bulan = 'Mei'
                // bulan2 = '05'
                break;

            case hasilSplit[1] == 06:
                bulan = 'Juni'
                // bulan2 = '06'
                break;

            case hasilSplit[1] == 07:
                bulan = 'Juli'
                // bulan2 = '07'
                break;

            case hasilSplit[1] == 08:
                bulan = 'Agustus'
                // bulan2 = '08'
                break;

            case hasilSplit[1] == 09:
                bulan = 'September'
                // bulan2 = '09'
                break;

            case hasilSplit[1] == 10:
                bulan = 'Oktober'
                // bulan2 = '10'
                break;

            case hasilSplit[1] == 11:
                bulan = 'November'
                // bulan2 = '11'
                break;

            case hasilSplit[1] == 12:
                bulan = 'Desember'
                // bulan2 = '12'
                break;

            default:
                bulan
                break;
        }


// Bulan Dalam Bentuk Angka

        for (let i = 1; i <= 12; i++) {
        
            switch (true) {
                case hasilSplit[1] == i:
                    bulan2 = '0' + i
                    break;
            
                default:
                    bulan2
                    break;
            }
    
        }


// Tahun

    for (let i = 1; i <= new Date().getFullYear(); i++) {

        switch (true) {
            case hasilSplit[2] == i:
                tahun = i
                break;
        
            default:
                tahun
                break;
        }
    }

    let hasilBalik = hasilSplit.sort(function(a, b){return b-a})
    // 4 . Fungsi sort mengurutkan sebuah value dari terkecil sampe terbesar

    let hasilGabung = tanggal + '-' + bulan2 + '-' + tahun
    // 5 . data tanggal, bulan, tahun digabung menjadi satu dan dipisahkan menggunakan (-)

    let hasilConvert = dataArray[1].toString()
    // 6 . karena dalam varibale dataArray berisi data Array , kita rubah menjadi string dengan fungsi toString()
    // dan kita ambil value dengan urutan ke 1 yaitu Roman Alamsyah Elsharawy

    let hasilSlice = hasilConvert.slice(0, 14)
    // 7 . Funsgi slice gunanya untuk memotong sebuah string. dalam soal yang diberi oleh master kita yaitu Master Jujun
    // 

    console.log(dataArray);

    console.log(bulan);

    console.log(hasilBalik);

    console.log(hasilGabung);

    console.log(hasilSlice);

}

let data = ["0001","Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(data)