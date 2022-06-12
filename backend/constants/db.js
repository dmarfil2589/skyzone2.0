const countries = [
    {
        name: 'venezuela',
        code: 've',
        image: 'https://www.bakermckenzie.com/-/media/images/locations/venezuela1.jpg?sc_lang=es',
    },
    {
        name: 'argentina',
        code: 'ar',
        image: 'https://miro.medium.com/max/1200/1*2vRPV74t85auAHO_htst8w.jpeg',
        description: '',
    },
    {
        name: 'mexico',
        code: 'mx',
        image: 'https://enviajes.cl/wp-content/uploads/2013/10/Lugares-turisticos-de-Mexico-Ciudad-de-Mexico.jpg',
        description: '',
    },
    {
        name: 'brasil',
        code: 'br',
        image: 'https://www.turismobr.com/wp-content/uploads/2016/12/cristo-de-corcovado.jpg',
    },
    {
        name: 'estados unidos',
        code: 'us',
        image: 'https://gestion.pe/resizer/3qqXADuZ0d-INJbn3YPqUzJilj0=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ENRQSBZBJZEUDAJL5NS57TLFEY.jpg'
    },
    {
        name: 'españa',
        code: 'es',
        image: 'https://ep01.epimg.net/elviajero/imagenes/2018/05/25/album/1527248206_947021_1527250543_noticia_normal.jpg',
    },
    {
        name: 'italia',
        code: 'it',
        image: 'https://tipsparatuviaje.com/wp-content/uploads/2019/11/torre-de-pisa.jpg',
    },
    {
        name: 'china',
        code: 'cn',
        image: 'https://content.skyscnr.com/m/6a82667a63ac12a3/original/GettyImages-156384414.jpg'
    },
    {
        name: 'japon',
        code: 'jp',
        image: 'https://tipsparatuviaje.com/wp-content/uploads/2018/08/monte-fuji-japon.jpg'
    },
    {
        name: 'emiratos arabes unidos',
        code: 'ae',
        image: 'https://javitour.com/wp-content/uploads/2015/11/Burj_al_Arab_opt.jpg'
    },
];

const cities = [
    {
        name: 'caracas',
        code: 'css',
        image: 'https://www.dentons.com/-/media/images/website/background-images/offices/caracas/caracas.jpg?sc_lang=en',
        description: 'Descripcion de prueba',
        country: 've'
    },
    {
        name: 'maracaibo',
        code: 'mar',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/4c/6d/9e/puente-rafael-urdaneta.jpg?w=600&h=400&s=1',
        description: '',
        country: 've',
    },
    {
        name: 'valencia',
        code: 'vln',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Valencia_%28Venezuela%29_Skyline.jpg/288px-Valencia_%28Venezuela%29_Skyline.jpg',
        description: '',
        country: 've',
    },
    {
        name: 'buenos aires',
        code: 'bue',
        image: 'https://estaticos-cdn.elperiodico.com/clip/80ccbd4a-9d52-4b2a-b2b3-e9c254b3447c_alta-libre-aspect-ratio_default_0.jpg',
        description: '',
        country: 'ar',
    },
    {
        name: 'cordoba',
        code: 'cor',
        image: 'https://www.hola.com/imagenes/viajes/20200717172215/la-mezquita-de-cordoba-mas-bella-a-la-caida-de-la-noche/0-848-73/mezquita-de-cordoba-noche-exterior-t.jpg',
        description: '',
        country: 'ar',
    },
    {
        name: 'ciudad de mexico',
        code: 'mex',
        image: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2010/05/ciudad-de-mexico-angel-independencia-depositphotos.jpg',
        description: '',
        country: 'mx',
    },
    {
        name: 'la paz',
        code: 'lap',
        image: 'https://blogapi.uber.com/wp-content/uploads/2019/07/Postales-de-ensue%C3%B1o-lugares-fascinantes-para-visitar-en-La-Paz-M%C3%A9xico-1024x512.png',
        description: '',
        country: 'mx',
    },
    {
        name: 'sao paulo',
        code: 'sao',
        image: 'https://www.riotgames.com/darkroom/1440/3749bd10afed7a5613c17513e5f14fea:b2dd3106f2014c0e777ce1d447fee3d2/saopaulo-adobestock-276900825.png',
        description: '',
        country: 'br',
    },
    {
        name: 'rio de janeiro',
        code: 'rio',
        image: 'https://www.turismobr.com/wp-content/uploads/2016/12/cristo-de-corcovado.jpg',
        description: '',
        country: 'br',
    },
    {
        name: 'orlando',
        code: 'orl',
        image: 'https://www.viajarmiami.com/img/parques-walt-disney-orlando.jpg',
        country: 'us',
    },
    {
        name: 'seattle',
        code: 'sea',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Space_Needle002.jpg/800px-Space_Needle002.jpg',
        country: 'us',
    },
    {
        name: 'madrid',
        code: 'mad',
        image: 'https://www.formacionimpulsat.com/wp-content/uploads/2022/05/madrid.jpg',
        description: '',
        country: 'es',
    },
    {
        name: 'barcelona',
        code: 'bcn',
        image: 'https://wp-growpro.s3-eu-west-1.amazonaws.com/media/2020/05/vivir-barcelona_cover.jpg',
        description: '',
        country: 'es',
    },
    {
        name: 'roma',
        code: 'rom',
        image: 'https://historia.nationalgeographic.com.es/medio/2019/12/11/coliseo-roma_2924b6ae_1280x720.jpg',
        description: '',
        country: 'it',
    },
    {
        name: 'venecia',
        code: 'vce',
        image: 'https://media.admagazine.com/photos/6272a4f879a42d127518492f/16:9/w_2560%2Cc_limit/Puente%2520Rialto%2520Venecia.jpg',
        description: '',
        country: 'it',
    },
    {
        name: 'Beijing',
        code: 'bjs',
        image: 'https://cdn.forbes.co/2021/04/unnamed.jpg',
        description: '',
        country: 'cn',
    },
    {
        name: 'shanghai',
        code: 'sgh',
        image: 'https://www.riotgames.com/darkroom/1440/94c6153012aa766d7aaf6bb6b35dd35a:52617d5f2fda6d0b4a9669146c047e24/shanghai-adobestock-300255822.png',
        description: '',
        country: 'cn',
    },
    {
        name: 'tokio',
        code: 'tyo',
        image: 'https://media.admagazine.com/photos/618a5ef1a8ad6c5249a74d1d/4:3/w_2000,h_1500,c_limit/91683.jpg',
        description: '',
        country: 'jp',
    },
    {
        name: 'fukuoka',
        code: 'fuk',
        image: 'https://a3.cdn.japantravel.com/photo/290-216180/1440x960!/fukuoka-fukuoka-prefecture-216180.jpg',
        description: '',
        country: 'jp',
    },
    {
        name: 'dubai',
        code: 'dxb',
        image: 'https://javitour.com/wp-content/uploads/2015/11/Burj_al_Arab_opt.jpg',
        description: '',
        country: 'ae',
    },
    {
        name: 'abu dhabi',
        code: 'auh',
        image: 'https://elviajerofeliz.com/wp-content/uploads/2019/12/Que-ver-en-Abu-Dhabi-_-10-Lugares-Imprescindibles.jpg',
        description: '',
        country: 'ae',
    },
];

const airlines = [
    {
        name: 'Avior airlines',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Avior_Airlines_2017.svg/3071px-Avior_Airlines_2017.svg.png',
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

const classes = [ 'economica', 'ejecutiva', 'primera', 'privado' ];
const types = [ 'ida', 'ida y vuelta' ];

module.exports = {
    cities,
    countries,
    airlines,
    classes,
    types,
}