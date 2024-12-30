const Temples = [
  {
    title: "Vaishno Devi Temple",
    description:
      "A famous Hindu temple dedicated to Goddess Vaishno Devi, located in the Trikuta Mountains of Jammu and Kashmir.",
    location: "Katra, Jammu and Kashmir",
    country: "India",
    entry_fee: 0,
    nearest_railway_station: "Katra Railway Station",
    image: {
      url: "https://www.templedairy.in/wp-content/uploads/2017/06/SDC10486.jpg",
    },
  },
  {
    title: "Tirumala Venkateswara Temple",
    description:
      "A renowned temple of Lord Venkateswara located in the hill town of Tirumala in Andhra Pradesh.",

    location: "Tirupati, Andhra Pradesh",
    country: "India",
    entry_fee: 300,
    nearest_railway_station: "Tirupati Railway Station",
    image: {
      url: "https://tirupati-balaji.com/wp-content/uploads/2020/05/195058-tirumala-temple.jpg",
    },
  },
  {
    title: "Shirdi Sai Baba Temple",
    description:
      "A famous shrine dedicated to Sai Baba, located in Shirdi, Maharashtra.",

    location: "Shirdi, Maharashtra",
    country: "India",
    entry_fee: 0,
    nearest_railway_station: "Sainagar Shirdi Railway Station",
    image: {
      url: "https://downloadhdwallpapers.in/wp-content/uploads/2018/01/Beautiful-Shirdi-Sai-Baba-Temple.jpg",
    },
  },
  {
    title: "Jagannath Temple",
    description:
      "An important Hindu temple dedicated to Lord Jagannath, located in Puri, Odisha.",

    location: "Puri, Odisha",
    country: "India",
    entry_fee: 0,
    nearest_railway_station: "Puri Railway Station",
    image: {
      url: "https://tse3.mm.bing.net/th?id=OIP.jLHNDPGoz6Q6q8CLzh6RHgHaE8&pid=Api&P=0&h=180",
    },
  },
  {
    title: "Kashi Vishwanath Temple",
    description:
      "One of the most famous Hindu temples dedicated to Lord Shiva, located in Varanasi, Uttar Pradesh.",

    location: "Varanasi, Uttar Pradesh",
    country: "India",
    entry_fee: 0,
    nearest_railway_station: "Varanasi Junction",
    image: {
      url: "https://tse4.mm.bing.net/th?id=OIP.ell9XCbWyAyaF3DeKTXd5gHaEr&pid=Api&P=0&h=180",
    },
  },
  {
    title: "Golden Temple",
    description: "A prominent Sikh Gurdwara located in Amritsar, Punjab.",

    location: "Amritsar, Punjab",
    country: "India",
    entry_fee: 0,
    nearest_railway_station: "Amritsar Junction",
    image: {
      url: "https://tse3.mm.bing.net/th?id=OIP.BPxvjVvo8YmPwrFf3upw0gHaE8&pid=Api&P=0&h=180",
    },
  },
  {
    title: "Meenakshi Temple",
    description:
      "A historic Hindu temple located in the temple city of Madurai in Tamil Nadu.",
    location: "Madurai, Tamil Nadu",
    country: "India",
    entry_fee: 50,
    nearest_railway_station: "Madurai Junction",
    image: {
      url: "https://tse1.mm.bing.net/th?id=OIP.3B2tPbPkrxw-phM-4Q6AqgHaE8&pid=Api&P=0&h=180",
    },
  },
  {
    title: "Ramanathaswamy Temple",
    description:
      "A famous Hindu temple dedicated to Lord Shiva, located on Rameswaram island in Tamil Nadu.",

    location: "Rameswaram, Tamil Nadu",
    country: "India",
    entry_fee: 50,
    nearest_railway_station: "Rameswaram Railway Station",
    image: {
      url: "https://www.tamilnadutourisminfo.com/wp-content/uploads/2019/10/Rameswaram_ramanathaswamy_temple-1.jpg",
    },
  },
  {
    title: "Somnath Temple",
    description:
      "A temple located in Prabhas Patan near Veraval in Saurashtra on the western coast of Gujarat, dedicated to Lord Shiva.",

    location: "Somnath, Gujarat",
    country: "India",
    entry_fee: 20,
    nearest_railway_station: "Veraval Railway Station",
    image: {
      url: "https://tse4.mm.bing.net/th?id=OIP.7RWrnpW32vsFVB2kw0b7WQHaEK&pid=Api&P=0&h=180",
    },
  },
  {
    title: "Siddhivinayak Temple",
    description:
      "A famous Hindu temple dedicated to Lord Ganesha located in Mumbai, Maharashtra.",

    location: "Mumbai, Maharashtra",
    country: "India",
    entry_fee: 50,
    nearest_railway_station: "Dadar Railway Station",
    image: {
      url: "https://www.gosahin.com/go/p/d/1522849146_Siddhivinayak-Temple1.jpg",
    },
  },
  {
    title: "Akshardham Temple",
    description:
      "A Hindu temple complex in Delhi, known for its beautiful architecture.",

    location: "Delhi",
    country: "India",
    entry_fee: 0,
    nearest_railway_station: "Anand Vihar Terminal",
    image: {
      url: "http://www.indiadivine.org/wp-content/uploads/2015/08/akshardham1.jpg",
    },
  },
  {
    title: "Kedarnath Temple",
    description:
      "A Hindu temple dedicated to Lord Shiva located in the Himalayas, in Uttarakhand.",

    location: "Kedarnath, Uttarakhand",
    country: "India",
    entry_fee: 0,
    nearest_railway_station: "Rishikesh Railway Station",
    image: {
      url: "https://i.pinimg.com/originals/12/b3/f5/12b3f51d60f63bb566d5b2a5e9526f64.jpg",
    },
  },
  {
    title: "Badrinath Temple",
    description:
      "A sacred Hindu temple dedicated to Lord Vishnu, located in Uttarakhand.",

    location: "Badrinath, Uttarakhand",
    country: "India",
    entry_fee: 0,
    nearest_railway_station: "Rishikesh Railway Station",
    image: {
      url: "https://www.holidify.com/images/cmsuploads/compressed/EntranceofthebeautifulBadrinathTemple1_20191224124938_20191224125002.jpg",
    },
  },
  {
    title: "Guruvayur Temple",
    description:
      "A Hindu temple dedicated to Lord Krishna located in Guruvayur, Kerala.",

    location: "Guruvayur, Kerala",
    country: "India",
    entry_fee: 20,
    nearest_railway_station: "Guruvayur Railway Station",
    image: {
      url: "https://www.indiapilgrimtours.com/articles/wp-content/uploads/2018/01/guruvayurappan-temple.jpg",
    },
  },
  {
    title: "Mahabodhi Temple",
    description:
      "A Buddhist temple in Bodh Gaya, marking the location where Gautama Buddha is said to have attained enlightenment.",

    location: "Bodh Gaya, Bihar",
    country: "India",
    entry_fee: 50,
    nearest_railway_station: "Gaya Junction",
    image: {
      url: "https://www.tripsavvy.com/thmb/QZUBiTCTl2BvMAAla9vmUBqQEAk=/2120x1414/filters:fill(auto,1)/GettyImages-618355052-b865a78b33cf412b915909ad9d941f27.jpg",
    },
  },
  {
    title: "Kamakhya Temple",
    description:
      "An important pilgrimage site for Hindus, dedicated to the goddess Kamakhya, located in Assam.",

    location: "Guwahati, Assam",
    country: "India",
    entry_fee: 30,
    nearest_railway_station: "Guwahati Railway Station",
    image: {
      url: "https://d3k1i85mml78tf.cloudfront.net/Blogs/1665547027697_post_image_1.jpg",
    },
  },
  {
    title: "Basilica of Our Lady of Good Health",
    description:
      "A famous Christian pilgrimage site located in Velankanni, Tamil Nadu.",

    location: "Velankanni, Tamil Nadu",
    country: "India",
    entry_fee: 0,
    nearest_railway_station: "Nagapattinam Railway Station",
    image: {
      url: "https://pilgrimstays.com/wp-content/uploads/2020/02/Vel-3.jpg",
    },
  },
  {
    title: "Sun Temple",
    description:
      "A UNESCO World Heritage Site located in Konark, Odisha, known for its unique architecture.",

    location: "Konark, Odisha",
    country: "India",
    entry_fee: 40,
    nearest_railway_station: "Puri Railway Station",
    image: {
      url: "https://images.assettype.com/indynetwork/2020-04/7fae3b36-b34d-4420-be8b-83822eeb21c1/Konark_Sun_Temple___Front_Elevation.jpg?w=1170",
    },
  },
  {
    title: "Dilwara Temples",
    description:
      "A group of Jain temples located near Mount Abu in Rajasthan, known for their exquisite marble architecture.",

    location: "Mount Abu, Rajasthan",
    country: "India",
    entry_fee: 50,
    nearest_railway_station: "Abu Road Railway Station",
    image: {
      url: "https://www.tusktravel.com/blog/wp-content/uploads/2022/12/temples-of-Dilwara-1.jpg",
    },
  },
  {
    title: "Sanchi Stupa",
    description:
      "A Buddhist complex famous for its Great Stupa, located in Madhya Pradesh.",

    location: "Sanchi, Madhya Pradesh",
    country: "India",
    entry_fee: 30,
    nearest_railway_station: "Vidisha Railway Station",
    image: {
      url: "https://tse4.mm.bing.net/th?id=OIP.Y7PIpek6srVH0fxKYeUbmQHaE7&pid=Api&P=0&h=180",
    },
  },
  {
    title: "Virupaksha Temple",
    description:
      "A UNESCO World Heritage Site located in Hampi, Karnataka, dedicated to Lord Shiva.",

    location: "Hampi, Karnataka",
    country: "India",
    entry_fee: 30,
    nearest_railway_station: "Hospet Junction",
    image: {
      url: "https://tse4.mm.bing.net/th?id=OIP.qjIkicZzbKZBIgN6u4ryCwHaEC&pid=Api&P=0&h=180",
    },
  },
  {
    title: "Amarnath Cave Temple",
    description:
      "A famous shrine dedicated to Lord Shiva, located in Jammu and Kashmir.",

    location: "Amarnath, Jammu and Kashmir",
    country: "India",
    entry_fee: 0,
    nearest_railway_station: "Jammu Tawi Railway Station",
    image: {
      url: "https://www.hindustantimes.com/ht-img/img/2023/07/10/1600x900/ANI-20230710130-0_1689013511427_1689013574456.jpg",
    },
  },
  {
    title: "Dwarkadhish Temple",
    description:
      "A Hindu temple dedicated to Lord Krishna, located in Dwarka, Gujarat.",

    location: "Dwarka, Gujarat",
    country: "India",
    entry_fee: 20,
    nearest_railway_station: "Dwarka Railway Station",
    image: {
      url: "https://templeknowledge.com/wp-content/uploads/2021/07/dwarkadhish-temple-1597149611-lb-1626228217.jpg",
    },
  },
  {
    title: "Lingaraja Temple",
    description:
      "A Hindu temple dedicated to Lord Shiva, located in Bhubaneswar, Odisha.",

    location: "Bhubaneswar, Odisha",
    country: "India",
    entry_fee: 50,
    nearest_railway_station: "Bhubaneswar Railway Station",
    image: {
      url: "https://image3.mouthshut.com/images/imagesp/925771633s.jpg",
    },
  },
  {
    title: "Kalighat Kali Temple",
    description:
      "A Hindu temple located in Kolkata, dedicated to the goddess Kali.",

    location: "Kolkata, West Bengal",
    country: "India",
    entry_fee: 20,
    nearest_railway_station: "Sealdah Railway Station",
    image: {
      url: "https://kolkatatourism.travel/images/places-to-visit/headers/kalighat-kali-temple-kolkata-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    },
  },
  {
    title: "Harmandir Sahib (Golden Temple)",
    description:
      "The holiest Gurdwara and the most important pilgrimage site of Sikhism, located in Amritsar, Punjab.",

    location: "Amritsar, Punjab",
    country: "India",
    entry_fee: 0,
    nearest_railway_station: "Amritsar Junction",
    image: {
      url: "https://tse4.mm.bing.net/th?id=OIP.AArFmzbUPEIlRVB9_TOYcQHaEc&pid=Api&P=0&h=180",
    },
  },
];

module.exports = { data: Temples };
