const RandomPicturesArticle = {
  picturesArray: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-HhJQOiEwTE_ZaYcx2APk_03jsPm6s9xHA&usqp=CAU",
    "https://www.hashmicro.com/blog/wp-content/uploads/2018/06/Learning-the-Law.jpg",
    "https://www.awardsdaily.com/wp-content/uploads/2020/02/oscars-2020.jpg",
    "https://www.gp.se/image/policy:1.39801245:1610460847/07474a97-c6b6-50de-b4d6-e05167970fe4-image-jpeg.jpeg?f=Wide&w=1024&$p$f$w=3beb668",
    "https://static.dw.com/image/58867068_303.jpg",
    "https://newsinfo.inquirer.net/files/2022/01/2022-01-28T205935Z_1_LYNXMPEI0R0YN_RTROPTP_4_HEALTH-CORONAVIRUS-CANADA-TRUCKING.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/2008_Summer_Olympics_logo.svg/1200px-2008_Summer_Olympics_logo.svg.png",
    "https://www.homestratosphere.com/wp-content/uploads/2019/07/Construction-Jobs.jpg",
    "https://files.worldwildlife.org/wwfcmsprod/images/Polar_bear_on_ice_in_Svalbard_Norway_WW294883/hero_small/85px6g3dhv_Polar_bear_on_ice_in_Svalbard_Norway_WW294883.jpg",
    "https://media.istockphoto.com/photos/the-anvil-morning-mist-picture-id535499464?k=20&m=535499464&s=612x612&w=0&h=yZn4m9K8Um-8CY41AOghoYtrOlCqb-oxOnElQXyQnNo=",
    "https://www.rainforestanimals.net/wp-content/uploads/2019/01/scarletmacaw.jpg",
    "https://image.cnbcfm.com/api/v1/image/106893573-1623119138150-gettyimages-1321255276-610a0308.jpeg?v=1639361644&w=929&h=523",
    "https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/28-07-2021_UNHCR_Refugees-Kosovo.jpg/image1170x530cropped.jpg",
    "https://cdn.britannica.com/q:60/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg",
    "https://miro.medium.com/max/1400/0*Vj9mY_WEuDudIBpb",
    "https://techcrunch.com/wp-content/uploads/2019/08/spotify-app-icon-iphone.jpg",
    "https://8sidor.se/wp-content/uploads/2021/05/210506_donaldtrump.jpg",
    "https://i.cbc.ca/1.5559323.1594822673!/fileImage/httpImage/man-in-prison-shutterstock-id-772489252.jpg",
    "https://static.bimago.pl/mediacache/catalog/product/cache/3/8/132483/image/750x1120/e28ec8e6815a500d6ac02cce22f121ae/132483_1.jpg",
    "https://www.idg.se/editorial/980/path/1.759978.1638898183!imageUploader/1987121322.jpeg",
    "https://pyxis.nymag.com/v1/imgs/a43/dd7/2a29062b0a6768e4b0f9c500a9e824dce7-20-handshake-memes.rsquare.w700.jpg",
    "https://www.technocracy.news/wp-content/uploads/2019/01/big-tech.jpg",
    "https://www.news-medical.net/image.axd?picture=2016%2F3%2FChildren_playing_sunset_-_Zurijeta_8c5bdac77e44431bb1bfec67b9c87208-620x480.jpg",
    "https://image.cnbcfm.com/api/v1/image/106395356-1582021248305gettyimages-1201569865.jpeg?v=1587100506",

  ],
  getPicture() {
    const index = Math.floor(Math.random() * this.picturesArray.length);
    return this.picturesArray[index];
  }
};

export default RandomPicturesArticle;
