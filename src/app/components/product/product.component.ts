import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  // productList : any [] = []


  // constructor(private http: HttpClient) {

  // }

  // get(){
  //   this.http.get("https://6876fb05dba809d901ed9b1d.mockapi.io/products").subscribe((res:any) => {
  //     this.productList = res
  //     // return this.productList
  //     console.log(this.productList)
  //   })
  // }

  product:any = [

  {
    "id": 2,
    "title": "Prime Colletor Series",
    "slug": "classic-red-pullover-hoodie",
    "price": 10,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-07-18T21:45:26.000Z",
      "updatedAt": "2025-07-18T21:45:26.000Z"
    },
    "images": [
      "https://drinkprime.com/cdn/shop/files/PRIME_hydration_1serve_16.9oz_US_CollectorSeries_00000_2000x.png?v=1748550723",
      "https://i.imgur.com/FDwQgLy.jpeg",
      "https://i.imgur.com/kg1ZhhH.jpeg"
    ],
    "creationAt": "2025-07-18T21:45:26.000Z",
    "updatedAt": "2025-07-18T22:59:41.000Z"
  },
  {
    "id": 3,
    "title": "Sournova",
    "slug": "classic-heather-gray-hoodie",
    "price": 9,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-07-18T21:45:26.000Z",
      "updatedAt": "2025-07-18T21:45:26.000Z"
    },
    "images": [
      "https://drinkprime.com/cdn/shop/files/Sournova_Web_DropBanner_PDP_Front_2000x2000_ffba587e-02f2-491a-a375-5f5b3e7f2eb8_1200x.png?v=1744126206",
      "https://i.imgur.com/CFOjAgK.jpeg",
      "https://i.imgur.com/wbIMMme.jpeg"
    ],
    "creationAt": "2025-07-18T21:45:26.000Z",
    "updatedAt": "2025-07-18T21:45:26.000Z"
  },
  {
    "id": 4,
    "title": "Peso Pluma",
    "slug": "classic-grey-hooded-sweatshirt",
    "price": 9,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-07-18T21:45:26.000Z",
      "updatedAt": "2025-07-18T21:45:26.000Z"
    },
    "images": [
      "https://drinkprime.com/cdn/shop/files/Prime_hydration_1serve_16.9oz_US_PesoPluma_00000_1200x.png?v=1742393763",
      "https://i.imgur.com/IvxMPFr.jpeg",
      "https://i.imgur.com/7eW9nXP.jpeg"
    ],
    "creationAt": "2025-07-18T21:45:26.000Z",
    "updatedAt": "2025-07-18T21:45:26.000Z"
  },
  {
    "id": 5,
    "title": "Future Freeze",
    "slug": "classic-black-hooded-sweatshirt",
    "price": 10,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-07-18T21:45:26.000Z",
      "updatedAt": "2025-07-18T21:45:26.000Z"
    },
    "images": [
      "https://drinkprime.com/cdn/shop/files/PrimeHydration_US_1serve_FutureFreeze_00000_1200x.png?v=1738603072",
      "https://i.imgur.com/WwKucXb.jpeg",
      "https://i.imgur.com/cE2Dxh9.jpeg"
    ],
    "creationAt": "2025-07-18T21:45:26.000Z",
    "updatedAt": "2025-07-18T21:45:26.000Z"
  },
  {
    "id": 6,
    "title": "Ice Pop",
    "slug": "classic-comfort-fit-joggers",
    "price": 5,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-07-18T21:45:26.000Z",
      "updatedAt": "2025-07-18T21:45:26.000Z"
    },
    "images": [
      "https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_IcePop_0000_1200x.png?v=1656076690",
      "https://i.imgur.com/GJi73H0.jpeg",
      "https://i.imgur.com/633Fqrz.jpeg"
    ],
    "creationAt": "2025-07-18T21:45:26.000Z",
    "updatedAt": "2025-07-18T21:45:26.000Z"
  },
  {
    "id": 7,
    "title": "Cherry Freeze",
    "slug": "classic-comfort-drawstring-joggers",
    "price": 6,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-07-18T21:45:26.000Z",
      "updatedAt": "2025-07-18T21:45:26.000Z"
    },
    "images": [
      "https://drinkprime.com/cdn/shop/files/Prime_hydration_1serve_16.9oz_US_CherryFreeze_Fortis_00000_1200x.png?v=1745589968",
      "https://i.imgur.com/JQRGIc2.jpeg"
    ],
    "creationAt": "2025-07-18T21:45:26.000Z",
    "updatedAt": "2025-07-18T21:45:26.000Z"
  },
  {
    "id": 8,
    "title": "Lemon Lime",
    "slug": "classic-red-jogger-sweatpants",
    "price": 18,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-07-18T21:45:26.000Z",
      "updatedAt": "2025-07-18T21:45:26.000Z"
    },
    "images": [
      "https://drinkprime.com/cdn/shop/files/lemonlimecombo_600x.png?v=1689355922",
      "https://i.imgur.com/vzrTgUR.jpeg",
      "https://i.imgur.com/p5NdI6n.jpeg"
    ],
    "creationAt": "2025-07-18T21:45:26.000Z",
    "updatedAt": "2025-07-18T21:45:26.000Z"
  },
  {
    "id": 9,
    "title": "Blue Raspberry",
    "slug": "classic-navy-blue-baseball-cap",
    "price": 18,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-07-18T21:45:26.000Z",
      "updatedAt": "2025-07-18T21:45:26.000Z"
    },
    "images": [
      "https://drinkprime.com/cdn/shop/files/blueraspberrycombo_600x.png?v=1689355792",
      "https://i.imgur.com/Wv2KTsf.jpeg",
      "https://i.imgur.com/76HAxcA.jpeg"
    ],
    "creationAt": "2025-07-18T21:45:26.000Z",
    "updatedAt": "2025-07-18T21:45:26.000Z"
  },
  {
    "id": 10,
    "title": "Tropical Punch",
    "slug": "classic-blue-baseball-cap",
    "price": 18,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-07-18T21:45:26.000Z",
      "updatedAt": "2025-07-18T21:45:26.000Z"
    },
    "images": [
      "https://drinkprime.com/cdn/shop/files/tropicalpunchcombo_600x.png?v=1689355979",
      "https://i.imgur.com/BZrIEmb.jpeg",
      "https://i.imgur.com/KcT6BE0.jpeg"
    ],
    "creationAt": "2025-07-18T21:45:26.000Z",
    "updatedAt": "2025-07-18T21:45:26.000Z"
  },
  {
    "id": 11,
    "title": "Strawberry Watermelon",
    "slug": "classic-red-baseball-cap",
    "price": 18,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-07-18T21:45:26.000Z",
      "updatedAt": "2025-07-18T21:45:26.000Z"
    },
    "images": [
      "https://drinkprime.com/cdn/shop/files/Prime_HydrationStick_combo_StrawberryWatermelon_0000_600x.png?v=1689354710",
      "https://i.imgur.com/N1GkCIR.jpeg",
      "https://i.imgur.com/kKc9A5p.jpeg"
    ],
    "creationAt": "2025-07-18T21:45:26.000Z",
    "updatedAt": "2025-07-18T21:45:26.000Z"
  },
  {
    "id": 12,
    "title": "Lemonade",
    "slug": "classic-black-baseball-cap",
    "price": 18,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "category": {
      "id": 1,
      "name": "Clothes",
      "slug": "clothes",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2025-07-18T21:45:26.000Z",
      "updatedAt": "2025-07-18T21:45:26.000Z"
    },
    "images": [
      "https://drinkprime.com/cdn/shop/files/Side_c721f2a4-4cf7-4a82-819e-91495f647aa7_600x.png?v=1684162721",
      "https://i.imgur.com/xGQOw3p.jpeg",
      "https://i.imgur.com/oO5OUjb.jpeg"
    ],
    "creationAt": "2025-07-18T21:45:26.000Z",
    "updatedAt": "2025-07-18T21:45:26.000Z"
  }
  ]

  discount:number = 20;
  
}
