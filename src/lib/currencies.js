const currencyList = [
  {
    symbol: '$',
    name: 'US Dollar',
    code: 'USD'
  },
  {
    symbol: 'CA$',
    name: 'Canadian Dollar',
    code: 'CAD'
  },
  {
    symbol: '€',
    name: 'Euro',
    code: 'EUR'
  },
  {
    symbol: 'AED',
    name: 'United Arab Emirates Dirham',
    code: 'AED'
  },
  {
    symbol: 'Af',
    name: 'Afghan Afghani',
    code: 'AFN'
  },
  {
    symbol: 'ALL',
    name: 'Albanian Lek',
    code: 'ALL'
  },
  {
    symbol: 'AMD',
    name: 'Armenian Dram',
    code: 'AMD'
  },
  {
    symbol: 'AR$',
    name: 'Argentine Peso',
    code: 'ARS'
  },
  {
    symbol: 'AU$',
    name: 'Australian Dollar',
    code: 'AUD'
  },
  {
    symbol: 'man.',
    name: 'Azerbaijani Manat',
    code: 'AZN'
  },
  {
    symbol: 'KM',
    name: 'Bosnia-Herzegovina Convertible Mark',
    code: 'BAM'
  },
  {
    symbol: 'Tk',
    name: 'Bangladeshi Taka',
    code: 'BDT'
  },
  {
    symbol: 'BGN',
    name: 'Bulgarian Lev',
    code: 'BGN'
  },
  {
    symbol: 'BD',
    name: 'Bahraini Dinar',
    code: 'BHD'
  },
  {
    symbol: 'FBu',
    name: 'Burundian Franc',
    code: 'BIF'
  },
  {
    symbol: 'BN$',
    name: 'Brunei Dollar',
    code: 'BND'
  },
  {
    symbol: 'Bs',
    name: 'Bolivian Boliviano',
    code: 'BOB'
  },
  {
    symbol: 'R$',
    name: 'Brazilian Real',
    code: 'BRL'
  },
  {
    symbol: 'BWP',
    name: 'Botswanan Pula',
    code: 'BWP'
  },
  {
    symbol: 'BYR',
    name: 'Belarusian Ruble',
    code: 'BYR'
  },
  {
    symbol: 'BZ$',
    name: 'Belize Dollar',
    code: 'BZD'
  },
  {
    symbol: 'CDF',
    name: 'Congolese Franc',
    code: 'CDF'
  },
  {
    symbol: 'CHF',
    name: 'Swiss Franc',
    code: 'CHF'
  },
  {
    symbol: 'CL$',
    name: 'Chilean Peso',
    code: 'CLP'
  },
  {
    symbol: 'CN¥',
    name: 'Chinese Yuan',
    code: 'CNY'
  },
  {
    symbol: 'CO$',
    name: 'Colombian Peso',
    code: 'COP'
  },
  {
    symbol: '₡',
    name: 'Costa Rican Colón',
    code: 'CRC'
  },
  {
    symbol: 'CV$',
    name: 'Cape Verdean Escudo',
    code: 'CVE'
  },
  {
    symbol: 'Kč',
    name: 'Czech Republic Koruna',
    code: 'CZK'
  },
  {
    symbol: 'Fdj',
    name: 'Djiboutian Franc',
    code: 'DJF'
  },
  {
    symbol: 'kr',
    name: 'Danish Krone',
    code: 'DKK'
  },
  {
    symbol: 'RD$',
    name: 'Dominican Peso',
    code: 'DOP'
  },
  {
    symbol: 'DA',
    name: 'Algerian Dinar',
    code: 'DZD'
  },
  {
    symbol: 'Ekr',
    name: 'Estonian Kroon',
    code: 'EEK'
  },
  {
    symbol: 'EGP',
    name: 'Egyptian Pound',
    code: 'EGP'
  },
  {
    symbol: 'Nfk',
    name: 'Eritrean Nakfa',
    code: 'ERN'
  },
  {
    symbol: 'Br',
    name: 'Ethiopian Birr',
    code: 'ETB'
  },
  {
    symbol: '£',
    name: 'British Pound Sterling',
    code: 'GBP'
  },
  {
    symbol: 'GEL',
    name: 'Georgian Lari',
    code: 'GEL'
  },
  {
    symbol: 'GH₵',
    name: 'Ghanaian Cedi',
    code: 'GHS'
  },
  {
    symbol: 'FG',
    name: 'Guinean Franc',
    code: 'GNF'
  },
  {
    symbol: 'GTQ',
    name: 'Guatemalan Quetzal',
    code: 'GTQ'
  },
  {
    symbol: 'HK$',
    name: 'Hong Kong Dollar',
    code: 'HKD'
  },
  {
    symbol: 'HNL',
    name: 'Honduran Lempira',
    code: 'HNL'
  },
  {
    symbol: 'kn',
    name: 'Croatian Kuna',
    code: 'HRK'
  },
  {
    symbol: 'Ft',
    name: 'Hungarian Forint',
    code: 'HUF'
  },
  {
    symbol: 'Rp',
    name: 'Indonesian Rupiah',
    code: 'IDR'
  },
  {
    symbol: '₪',
    name: 'Israeli New Sheqel',
    code: 'ILS'
  },
  {
    symbol: 'Rs',
    name: 'Indian Rupee',
    code: 'INR'
  },
  {
    symbol: 'IQD',
    name: 'Iraqi Dinar',
    code: 'IQD'
  },
  {
    symbol: 'IRR',
    name: 'Iranian Rial',
    code: 'IRR'
  },
  {
    symbol: 'Ikr',
    name: 'Icelandic Króna',
    code: 'ISK'
  },
  {
    symbol: 'J$',
    name: 'Jamaican Dollar',
    code: 'JMD'
  },
  {
    symbol: 'JD',
    name: 'Jordanian Dinar',
    code: 'JOD'
  },
  {
    symbol: '¥',
    name: 'Japanese Yen',
    code: 'JPY'
  },
  {
    symbol: 'Ksh',
    name: 'Kenyan Shilling',
    code: 'KES'
  },
  {
    symbol: 'KHR',
    name: 'Cambodian Riel',
    code: 'KHR'
  },
  {
    symbol: 'CF',
    name: 'Comorian Franc',
    code: 'KMF'
  },
  {
    symbol: '₩',
    name: 'South Korean Won',
    code: 'KRW'
  },
  {
    symbol: 'KD',
    name: 'Kuwaiti Dinar',
    code: 'KWD'
  },
  {
    symbol: 'KZT',
    name: 'Kazakhstani Tenge',
    code: 'KZT'
  },
  {
    symbol: 'LB£',
    name: 'Lebanese Pound',
    code: 'LBP'
  },
  {
    symbol: 'SLRs',
    name: 'Sri Lankan Rupee',
    code: 'LKR'
  },
  {
    symbol: 'Lt',
    name: 'Lithuanian Litas',
    code: 'LTL'
  },
  {
    symbol: 'Ls',
    name: 'Latvian Lats',
    code: 'LVL'
  },
  {
    symbol: 'LD',
    name: 'Libyan Dinar',
    code: 'LYD'
  },
  {
    symbol: 'MAD',
    name: 'Moroccan Dirham',
    code: 'MAD'
  },
  {
    symbol: 'MDL',
    name: 'Moldovan Leu',
    code: 'MDL'
  },
  {
    symbol: 'MGA',
    name: 'Malagasy Ariary',
    code: 'MGA'
  },
  {
    symbol: 'MKD',
    name: 'Macedonian Denar',
    code: 'MKD'
  },
  {
    symbol: 'MMK',
    name: 'Myanma Kyat',
    code: 'MMK'
  },
  {
    symbol: 'MOP$',
    name: 'Macanese Pataca',
    code: 'MOP'
  },
  {
    symbol: 'MURs',
    name: 'Mauritian Rupee',
    code: 'MUR'
  },
  {
    symbol: 'MX$',
    name: 'Mexican Peso',
    code: 'MXN'
  },
  {
    symbol: 'RM',
    name: 'Malaysian Ringgit',
    code: 'MYR'
  },
  {
    symbol: 'MTn',
    name: 'Mozambican Metical',
    code: 'MZN'
  },
  {
    symbol: 'N$',
    name: 'Namibian Dollar',
    code: 'NAD'
  },
  {
    symbol: '₦',
    name: 'Nigerian Naira',
    code: 'NGN'
  },
  {
    symbol: 'C$',
    name: 'Nicaraguan Córdoba',
    code: 'NIO'
  },
  {
    symbol: 'kr',
    name: 'Norwegian Krone',
    code: 'NOK'
  },
  {
    symbol: 'NPRs',
    name: 'Nepalese Rupee',
    code: 'NPR'
  },
  {
    symbol: 'NZ$',
    name: 'New Zealand Dollar',
    code: 'NZD'
  },
  {
    symbol: 'OMR',
    name: 'Omani Rial',
    code: 'OMR'
  },
  {
    symbol: 'B/.',
    name: 'Panamanian Balboa',
    code: 'PAB'
  },
  {
    symbol: 'S/.',
    name: 'Peruvian Nuevo Sol',
    code: 'PEN'
  },
  {
    symbol: '₱',
    name: 'Philippine Peso',
    code: 'PHP'
  },
  {
    symbol: 'PKRs',
    name: 'Pakistani Rupee',
    code: 'PKR'
  },
  {
    symbol: 'zł',
    name: 'Polish Zloty',
    code: 'PLN'
  },
  {
    symbol: '₲',
    name: 'Paraguayan Guarani',
    code: 'PYG'
  },
  {
    symbol: 'QR',
    name: 'Qatari Rial',
    code: 'QAR'
  },
  {
    symbol: 'RON',
    name: 'Romanian Leu',
    code: 'RON'
  },
  {
    symbol: 'din.',
    name: 'Serbian Dinar',
    code: 'RSD'
  },
  {
    symbol: 'RUB',
    name: 'Russian Ruble',
    code: 'RUB'
  },
  {
    symbol: 'RWF',
    name: 'Rwandan Franc',
    code: 'RWF'
  },
  {
    symbol: 'SR',
    name: 'Saudi Riyal',
    code: 'SAR'
  },
  {
    symbol: 'SDG',
    name: 'Sudanese Pound',
    code: 'SDG'
  },
  {
    symbol: 'kr',
    name: 'Swedish Krona',
    code: 'SEK'
  },
  {
    symbol: 'S$',
    name: 'Singapore Dollar',
    code: 'SGD'
  },
  {
    symbol: 'Ssh',
    name: 'Somali Shilling',
    code: 'SOS'
  },
  {
    symbol: 'SY£',
    name: 'Syrian Pound',
    code: 'SYP'
  },
  {
    symbol: '฿',
    name: 'Thai Baht',
    code: 'THB'
  },
  {
    symbol: 'DT',
    name: 'Tunisian Dinar',
    code: 'TND'
  },
  {
    symbol: 'T$',
    name: 'Tongan Paʻanga',
    code: 'TOP'
  },
  {
    symbol: 'TL',
    name: 'Turkish Lira',
    code: 'TRY'
  },
  {
    symbol: 'TT$',
    name: 'Trinidad and Tobago Dollar',
    code: 'TTD'
  },
  {
    symbol: 'NT$',
    name: 'New Taiwan Dollar',
    code: 'TWD'
  },
  {
    symbol: 'TSh',
    name: 'Tanzanian Shilling',
    code: 'TZS'
  },
  {
    symbol: '₴',
    name: 'Ukrainian Hryvnia',
    code: 'UAH'
  },
  {
    symbol: 'USh',
    name: 'Ugandan Shilling',
    code: 'UGX'
  },
  {
    symbol: '$U',
    name: 'Uruguayan Peso',
    code: 'UYU'
  },
  {
    symbol: 'UZS',
    name: 'Uzbekistan Som',
    code: 'UZS'
  },
  {
    symbol: 'Bs.F.',
    name: 'Venezuelan Bolívar',
    code: 'VEF'
  },
  {
    symbol: '₫',
    name: 'Vietnamese Dong',
    code: 'VND'
  },
  {
    symbol: 'FCFA',
    name: 'CFA Franc BEAC',
    code: 'XAF'
  },
  {
    symbol: 'CFA',
    name: 'CFA Franc BCEAO',
    code: 'XOF'
  },
  {
    symbol: 'YR',
    name: 'Yemeni Rial',
    code: 'YER'
  },
  {
    symbol: 'R',
    name: 'South African Rand',
    code: 'ZAR'
  },
  {
    symbol: 'ZK',
    name: 'Zambian Kwacha',
    code: 'ZMK'
  }
]

module.exports = currencyList
