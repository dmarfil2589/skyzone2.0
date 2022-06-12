const dayjs = require("dayjs");

const cities = [
    {
        name: 'caracas',
        code: 'css',
        image: 'https://www.dentons.com/-/media/images/website/background-images/offices/caracas/caracas.jpg?sc_lang=en',
        description: 'Descripcion de prueba',
    },
    {
        name: 'maracay',
        code: 'mar',
        image: 'https://cdn.britannica.com/94/144994-004-D3D19BCF/Maracay-Venezuela.jpg',        
    },
    {
        name: 'valencia',
        code: 'val',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Valencia_%28Venezuela%29_Skyline.jpg/288px-Valencia_%28Venezuela%29_Skyline.jpg',
    },
    {
        name: 'zulia',
        code: 'zul',
        image: 'https://www.elcastellano.org/sites/default/files/maracaibo.jpg',
    },
    {
        name: 'amazonas',
        code: 'ama',
        image: 'https://cnnespanol.cnn.com/wp-content/uploads/2022/03/210715012410-amazon-rainforest-carbon-emission-intl-hnk-scn-exlarge-169.jpg?quality=100&strip=info',
        description: 'Descripcion de prueba',
    },
    {
        name: 'morrocoy',
        code: 'mor',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Cocotero_en_Cayo_Sombrero.jpg',
    },
];

const airlines = [
    {
        name: 'Avior airlines',
        logo: 'https://www.avior.com.ve/imagenes/logo.webp',
        pageweb: 'https://www.avior.com.ve/en',
        email: 'aviorairlines@gmail.com'
    },
    {
        name: 'Qatar airways',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Qatar_Airways_Logo.png',
        pageweb: 'https://www.qatarairways.com/es-es/homepage.html',
        email: 'qatarairwayz@gmail.com'
    },
    {
        name: 'Singapore Airlines',
        logo: 'https://i.pinimg.com/originals/8d/66/86/8d6686bc4ffdb16143dd272b6f3b89dd.png',
        pageweb: 'https://www.singaporeair.com/en_UK/sg/home',
        email: 'singaporeairlines@gmail.com'
    },
    {
        name: 'All Nippon Airways',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/All_Nippon_Airways_Logo.svg/2560px-All_Nippon_Airways_Logo.svg.png',
        pageweb: 'https://www.ana.co.jp/en/us/',
        email: 'ana@gmail.com'
    },
    {
        name: 'Emirates',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/1200px-Emirates_logo.svg.png',
        pageweb: 'https://www.emirates.com/english/',
        email: 'emirates@gmail.com'
    },
    {
        name: 'Japan Airlines',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Japan_Airlines_logo_%282002%E2%80%932011%29.svg/2560px-Japan_Airlines_logo_%282002%E2%80%932011%29.svg.png',
        pageweb: 'https://www.jal.co.jp/jp/en/',
        email: 'jal@gmail.com'
    },
];

const flights = [
    {
        airline: '6282f8bb3936b91ca9f3d617',
        number: 1,
        type: 'ida',
        price: 300,
        scales: 1,
        timeOfFlight: 75,
        class: 'economica',
        origin: '6282f8b93936b91ca9f3d60d',
        destiny: '6282f8b93936b91ca9f3d60f',
        exitDate: new Date().toISOString()
    },
    {
        airline: '6282f8bb3936b91ca9f3d618',
        number: 2,
        type: 'ida y vuelta',
        price: 500,
        scales: 0,
        timeOfFlight: 45,
        class: 'privado',
        origin: '6282f8b93936b91ca9f3d60d',
        destiny: '6282f8b93936b91ca9f3d60e',
        exitDate: dayjs( new Date() ).add(1, 'day').toISOString()
    },
    {
        airline: '6282f8bb3936b91ca9f3d619',
        number: 3,
        type: 'ida y vuelta',
        price: 400,
        scales: 2,
        timeOfFlight: 120,
        class: 'primera',
        origin: '6282f8b93936b91ca9f3d610',
        destiny: '6282f8b93936b91ca9f3d612',
        exitDate: dayjs( new Date() ).add(1, 'day').toISOString()
    },
    {
        airline: '6282f8bb3936b91ca9f3d61a',
        number: 4,
        type: 'ida',
        price: 700,
        scales: 3,
        timeOfFlight: 150,
        class: 'ejecutiva',
        origin: '6282f8b93936b91ca9f3d60d',
        destiny: '6282f8b93936b91ca9f3d611',
        exitDate: dayjs( new Date() ).add(2, 'days').toISOString()
    },
    {
        airline: '6282f8bb3936b91ca9f3d61b',
        number: 5,
        type: 'ida y vuelta',
        price: 250,
        scales: 1,
        timeOfFlight: 30,
        class: 'primera',
        origin: '6282f8b93936b91ca9f3d60d',
        destiny: '6282f8b93936b91ca9f3d60f',
        exitDate: dayjs( new Date() ).add(1, 'day').toISOString()
    },
    {
        airline: '6282f8bb3936b91ca9f3d61c',
        number: 6,
        type: 'ida',
        price: 450,
        scales: 4,
        timeOfFlight: 300,
        class: 'privado',
        origin: '6282f8b93936b91ca9f3d60d',
        destiny: '6282f8b93936b91ca9f3d612',
        exitDate: dayjs( new Date() ).add(3, 'days').toISOString()
    },
    /* 
    {
        airline:
        number:
        type:
        price:
        scales:
        timeOfFlight:
        class:
        origin:
        destiny:
        exitDate:
    }
    */
];

module.exports = {
    cities,
    airlines,
    flights
}