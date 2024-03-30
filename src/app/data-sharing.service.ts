import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private isEditingProfile: boolean = false;
  // private APIurl='https://gist.github.com/Keeguon/2310008';


private registerData:any;
  constructor(private http:HttpClient) { }


  setRegisterData(body: any):Observable<any>{
    return this.http.post('http://localhost:3000/users',body);
  }

  getRegisterData():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/users');
  }

  updateRegisterData(id:any,formData:any):Observable<any[]>{
    return this.http.put<any>('http://localhost:3000/users/'+id,formData);
  }
  getUserById(id:any):Observable<any>{
    return this.http.get<any>('http://localhost:3000/users/'+id);
  }

  deleteUserById(id:any):Observable<any>{
    return this.http.delete<any>('http://localhost:3000/users'+id);
  }

  setIsEditingProfile(isEditing: boolean) {
    this.isEditingProfile = isEditing;
  }

  getIsEditingProfile(): boolean {
    return this.isEditingProfile;
  }

  country(){
    return[
      {
        "id": 1,
        "name": "United States of America"
      },
      {
        "id": 2,
        "name": "United Kingdom"
      },
      {
        "id": 3,
        "name": "Canada"
      },
      {
        "id": 4,
        "name": "Australia"
      },
      {
        "id": 5,
        "name": "Germany"
      },
      {
        "id": 6,
        "name": "France"
      },
      {
        "id": 7,
        "name": "Japan"
      },
      {
        "id": 8,
        "name": "China"
      },
      {
        "id": 9,
        "name": "India"
      },
      {
        "id": 10,
        "name": "Brazil"
      },
      {
        "id": 11,
        "name": "Russia"
      },
      {
        "id": 12,
        "name": "Italy"
      },
      {
        "id": 13,
        "name": "Spain"
      },
      {
        "id": 14,
        "name": "South Korea"
      },
      {
        "id": 15,
        "name": "Mexico"
      },
      {
        "id": 16,
        "name": "Indonesia"
      },
      {
        "id": 17,
        "name": "Turkey"
      },
      {
        "id": 18,
        "name": "Saudi Arabia"
      },
      {
        "id": 19,
        "name": "United Arab Emirates"
      },
      {
        "id": 20,
        "name": "South Africa"
      }
    ]
  }
  state(){
    return[
      {"id": 1, "name": "Alabama"},
      {"id": 1, "name": "Alaska"},
      {"id": 1, "name": "Arizona"},
      {"id": 1, "name": "Arkansas"},
      {"id": 1, "name": "California"},
      {"id": 1, "name": "Colorado"},
      {"id": 1, "name": "Connecticut"},
      {"id": 1, "name": "Delaware"},
      {"id": 1, "name": "Florida"},
      {"id": 1, "name": "Georgia"},
      {"id": 1, "name": "Hawaii"},
      {"id": 1, "name": "Idaho"},
      {"id": 1, "name": "Illinois"},
      {"id": 1, "name": "Indiana"},
      {"id": 1, "name": "Iowa"},
      {"id": 1, "name": "Kansas"},
      {"id": 1, "name": "Kentucky"},
      {"id": 1, "name": "Louisiana"},
      {"id": 1, "name": "Maine"},
      {"id": 1, "name": "Maryland"},
      {"id": 1, "name": "Massachusetts"},
      {"id": 1, "name": "Michigan"},
      {"id": 1, "name": "Minnesota"},
      {"id": 1, "name": "Mississippi"},
      {"id": 1, "name": "Missouri"},
      {"id": 1, "name": "Montana"},
      {"id": 1, "name": "Nebraska"},
      {"id": 1, "name": "Nevada"},
      {"id": 1, "name": "New Hampshire"},
      {"id": 1, "name": "New Jersey"},
      {"id": 1, "name": "New Mexico"},
      {"id": 1, "name": "New York"},
      {"id": 1, "name": "North Carolina"},
      {"id": 1, "name": "North Dakota"},
      {"id": 1, "name": "Ohio"},
      {"id": 1, "name": "Oklahoma"},
      {"id": 1, "name": "Oregon"},
      {"id": 1, "name": "Pennsylvania"},
      {"id": 1, "name": "Rhode Island"},
      {"id": 1, "name": "South Carolina"},
      {"id": 1, "name": "South Dakota"},
      {"id": 1, "name": "Tennessee"},
      {"id": 1, "name": "Texas"},
      {"id": 1, "name": "Utah"},
      {"id": 1, "name": "Vermont"},
      {"id": 1, "name": "Virginia"},
      {"id": 1, "name": "Washington"},
      {"id": 1, "name": "West Virginia"},
      {"id": 1, "name": "Wisconsin"},
      {"id": 1, "name": "Wyoming"},


      {"id": 2, "name": "England"},
      {"id": 2, "name": "Scotland"},
      {"id": 2, "name": "Wales"},
      {"id": 2, "name": "Northern Ireland"},

      {"id": 3, "name": "Alberta"},
      {"id": 3, "name": "British Columbia"},
      {"id": 3, "name": "Manitoba"},
      {"id": 3, "name": "New Brunswick"},
      {"id": 3, "name": "Newfoundland and Labrador"},
      {"id": 3, "name": "Nova Scotia"},
      {"id": 3, "name": "Ontario"},
      {"id": 3, "name": "Prince Edward Island"},
      {"id": 3, "name": "Quebec"},
      {"id": 3, "name": "Saskatchewan"},
      {"id": 3, "name": "Northwest Territories"},
      {"id": 3, "name": "Nunavut"},
      {"id": 3, "name": "Yukon"},

      {"id": 4, "name": "New South Wales"},
      {"id": 4, "name": "Victoria"},
      {"id": 4, "name": "Queensland"},
      {"id": 4, "name": "Western Australia"},
      {"id": 4, "name": "South Australia"},
      {"id": 4, "name": "Tasmania"},
      {"id": 4, "name": "Northern Territory"},
      {"id": 4, "name": "Australian Capital Territory"},

      {"id": 5, "name": "Baden-Württemberg"},
      {"id": 5, "name": "Bavaria"},
      {"id": 5, "name": "Berlin"},
      {"id": 5, "name": "Brandenburg"},
      {"id": 5, "name": "Bremen"},
      {"id": 5, "name": "Hamburg"},
      {"id": 5, "name": "Hesse"},
      {"id": 5, "name": "Lower Saxony"},
      {"id": 5, "name": "Mecklenburg-Vorpommern"},
      {"id": 5, "name": "North Rhine-Westphalia"},
      {"id": 5, "name": "Rhineland-Palatinate"},
      {"id": 5, "name": "Saarland"},
      {"id": 5, "name": "Saxony"},
      {"id": 5, "name": "Saxony-Anhalt"},
      {"id": 5, "name": "Schleswig-Holstein"},
      {"id": 5, "name": "Thuringia"},

      {"id": 6, "name": "Auvergne-Rhône-Alpes"},
      {"id": 6, "name": "Bourgogne-Franche-Comté"},
      {"id": 6, "name": "Brittany"},
      {"id": 6, "name": "Centre-Val de Loire"},
      {"id": 6, "name": "Corsica"},
      {"id": 6, "name": "Grand Est"},
      {"id": 6, "name": "Hauts-de-France"},
      {"id": 6, "name": "Île-de-France"},
      {"id": 6, "name": "Normandy"},
      {"id": 6, "name": "Nouvelle-Aquitaine"},
      {"id": 6, "name": "Occitanie"},
      {"id": 6, "name": "Pays de la Loire"},
      {"id": 6, "name": "Provence-Alpes-Côte d'Azur"},

      {"id": 7, "name": "Hokkaido"},
      {"id": 7, "name": "Aomori"},
      {"id": 7, "name": "Iwate"},
      {"id": 7, "name": "Miyagi"},
      {"id": 7, "name": "Akita"},
      {"id": 7, "name": "Yamagata"},
      {"id": 7, "name": "Fukushima"},
      {"id": 7, "name": "Ibaraki"},
      {"id": 7, "name": "Tochigi"},
      {"id": 7, "name": "Gunma"},
      {"id": 7, "name": "Saitama"},
      {"id": 7, "name": "Chiba"},
      {"id": 7, "name": "Tokyo"},
      {"id": 7, "name": "Kanagawa"},
      {"id": 7, "name": "Niigata"},
      {"id": 7, "name": "Toyama"},
      {"id": 7, "name": "Ishikawa"},
      {"id": 7, "name": "Fukui"},
      {"id": 7, "name": "Yamanashi"},
      {"id": 7, "name": "Nagano"},
      {"id": 7, "name": "Gifu"},
      {"id": 7, "name": "Shizuoka"},
      {"id": 7, "name": "Aichi"},
      {"id": 7, "name": "Mie"},
      {"id": 7, "name": "Shiga"},
      {"id": 7, "name": "Kyoto"},
      {"id": 7, "name": "Osaka"},
      {"id": 7, "name": "Hyogo"},
      {"id": 7, "name": "Nara"},
      {"id": 7, "name": "Wakayama"},
      {"id": 7, "name": "Tottori"},
      {"id": 7, "name": "Shimane"},
      {"id": 7, "name": "Okayama"},
      {"id": 7, "name": "Hiroshima"},
      {"id": 7, "name": "Yamaguchi"},
      {"id": 7, "name": "Tokushima"},
      {"id": 7, "name": "Kagawa"},
      {"id": 7, "name": "Ehime"},
      {"id": 7, "name": "Kochi"},
      {"id": 7, "name": "Fukuoka"},
      {"id": 7, "name": "Saga"},
      {"id": 7, "name": "Nagasaki"},
      {"id": 7, "name": "Kumamoto"},
      {"id": 7, "name": "Oita"},
      {"id": 7, "name": "Miyazaki"},
      {"id": 7, "name": "Kagoshima"},
      {"id": 7, "name": "Okinawa"},

      {"id": 8, "name": "Beijing"},
      {"id": 8, "name": "Tianjin"},
      {"id": 8, "name": "Hebei"},
      {"id": 8, "name": "Shanxi"},
      {"id": 8, "name": "Inner Mongolia"},
      {"id": 8, "name": "Liaoning"},
      {"id": 8, "name": "Jilin"},
      {"id": 8, "name": "Heilongjiang"},
      {"id": 8, "name": "Shanghai"},
      {"id": 8, "name": "Jiangsu"},
      {"id": 8, "name": "Zhejiang"},
      {"id": 8, "name": "Anhui"},
      {"id": 8, "name": "Fujian"},
      {"id": 8, "name": "Jiangxi"},
      {"id": 8, "name": "Shandong"},
      {"id": 8, "name": "Henan"},
      {"id": 8, "name": "Hubei"},
      {"id": 8, "name": "Hunan"},
      {"id": 8, "name": "Guangdong"},
      {"id": 8, "name": "Guangxi"},
      {"id": 8, "name": "Hainan"},
      {"id": 8, "name": "Chongqing"},
      {"id": 8, "name": "Sichuan"},
      {"id": 8, "name": "Guizhou"},
      {"id": 8, "name": "Yunnan"},
      {"id": 8, "name": "Tibet"},
      {"id": 8, "name": "Shaanxi"},
      {"id": 8, "name": "Gansu"},
      {"id": 8, "name": "Qinghai"},
      {"id": 8, "name": "Ningxia"},
      {"id": 8, "name": "Xinjiang"},
      {"id": 8, "name": "Hong Kong"},
      {"id": 8, "name": "Macau"},
      {"id": 8, "name": "Taiwan"},


      {"id": 9 ,"name": "Andhra Pradesh"},
      {"id": 9 ,"name": "Arunachal Pradesh"},
      {"id": 9 ,"name": "Assam"},
      {"id": 9 ,"name": "Bihar"},
      {"id": 9 ,"name": "Chhattisgarh"},
      {"id": 9 ,"name": "Goa"},
      {"id": 9 ,"name": "Gujarat"},
      {"id": 9 ,"name": "Haryana"},
      {"id": 9, "name": "Himachal Pradesh"},
      {"id": 9, "name": "Jharkhand"},
      {"id": 9, "name": "Karnataka"},
      {"id": 9, "name": "Kerala"},
      {"id": 9, "name": "Madhya Pradesh"},
      {"id": 9, "name": "Maharashtra"},
      {"id": 9, "name": "Manipur"},
      {"id": 9, "name": "Meghalaya"},
      {"id": 9, "name": "Mizoram"},
      {"id": 9, "name": "Nagaland"},
      {"id": 9, "name": "Odisha"},
      {"id": 9, "name": "Punjab"},
      {"id": 9, "name": "Rajasthan"},
      {"id": 9, "name": "Sikkim"},
      {"id": 9, "name": "Tamil Nadu"},
      {"id": 9, "name": "Telangana"},
      {"id": 9, "name": "Tripura"},
      {"id": 9, "name": "Uttar Pradesh"},
      {"id": 9, "name": "Uttarakhand"},
      {"id": 9, "name": "West Bengal"},
      {"id": 9, "name": "Andaman and Nicobar Islands"},
      {"id": 9, "name": "Chandigarh"},
      {"id": 9, "name": "Dadra and Nagar Haveli and Daman and Diu"},
      {"id": 9, "name": "Lakshadweep"},
      {"id": 9, "name": "Delhi"},
      {"id": 9, "name": "Puducherry"},

      {"id": 10, "name": "Acre"},
      {"id": 10, "name": "Alagoas"},
      {"id": 10, "name": "Amapá"},
      {"id": 10, "name": "Amazonas"},
      {"id": 10, "name": "Bahia"},
      {"id": 10, "name": "Ceará"},
      {"id": 10, "name": "Espírito Santo"},
      {"id": 10, "name": "Goiás"},
      {"id": 10, "name": "Maranhão"},
      {"id": 10, "name": "Mato Grosso"},
      {"id": 10, "name": "Mato Grosso do Sul"},
      {"id": 10, "name": "Minas Gerais"},
      {"id": 10, "name": "Pará"},
      {"id": 10, "name": "Paraíba"},
      {"id": 10, "name": "Paraná"},
      {"id": 10, "name": "Pernambuco"},
      {"id": 10, "name": "Piauí"},
      {"id": 10, "name": "Rio de Janeiro"},
      {"id": 10, "name": "Rio Grande do Norte"},
      {"id": 10, "name": "Rio Grande do Sul"},
      {"id": 10, "name": "Rondônia"},
      {"id": 10, "name": "Roraima"},
      {"id": 10, "name": "Santa Catarina"},
      {"id": 10, "name": "São Paulo"},
      {"id": 10, "name": "Sergipe"},
      {"id": 10, "name": "Tocantins"},


      {"id": 11, "name": "Moscow"},
      {"id": 11, "name": "Saint Petersburg"},
      {"id": 11, "name": "Leningrad Oblast"},
      {"id": 11, "name": "Republic of Karelia"},
      {"id": 11, "name": "Murmansk Oblast"},
      {"id": 11, "name": "Arkhangelsk Oblast"},
      {"id": 11, "name": "Vologda Oblast"},
      {"id": 11, "name": "Kaliningrad Oblast"},
      {"id": 11, "name": "Novgorod Oblast"},
      {"id": 11, "name": "Pskov Oblast"},
      {"id": 11, "name": "Komi Republic"},
      {"id": 11, "name": "Nenets Autonomous Okrug"},
      {"id": 11, "name": "Kirov Oblast"},
      {"id": 11, "name": "Perm Krai"},
      {"id": 11, "name": "Oblast"},
      {"id": 11, "name": "Sverdlovsk Oblast"},
      {"id": 11, "name": "Tyumen Oblast"},
      {"id": 11, "name": "Khanty-Mansi Autonomous Okrug"},
      {"id": 11, "name": "Yamalo-Nenets Autonomous Okrug"},
      {"id": 11, "name": "Chelyabinsk Oblast"},
      {"id": 11, "name": "Orenburg Oblast"},
      {"id": 11, "name": "Bashkortostan Republic"},
      {"id": 11, "name": "Udmurt Republic"},
      {"id": 11, "name": "Tatarstan Republic"},
      {"id": 11, "name": "Mari El Republic"},
      {"id": 11, "name": "Chuvash Republic"},
      {"id": 11, "name": "Kirov Oblast"},
      {"id": 11, "name": "Nizhny Novgorod Oblast"},
      {"id": 11, "name": "Penza Oblast"},
      {"id": 11, "name": "Mordovia Republic"},

      {"id": 12, "name": "Abruzzo"},
      {"id": 12, "name": "Basilicata"},
      {"id": 12, "name": "Calabria"},
      {"id": 12, "name": "Campania"},
      {"id": 12, "name": "Emilia-Romagna"},
      {"id": 12, "name": "Friuli-Venezia Giulia"},
      {"id": 12, "name": "Lazio"},
      {"id": 12, "name": "Liguria"},
      {"id": 12, "name": "Lombardy"},
      {"id": 12, "name": "Marche"},
      {"id": 12, "name": "Molise"},
      {"id": 12, "name": "Piedmont"},
      {"id": 12, "name": "Apulia"},
      {"id": 12, "name": "Sardinia"},
      {"id": 12, "name": "Sicily"},
      {"id": 12, "name": "Tuscany"},
      {"id": 12, "name": "Trentino-Alto Adige/Südtirol"},
      {"id": 12, "name": "Umbria"},
      {"id": 12, "name": "Aosta Valley"},
      {"id": 12, "name": "Veneto"},

      {"id": 13, "name": "Andalusia"},
      {"id": 13, "name": "Aragon"},
      {"id": 13,  "name": "Asturias"},
      {"id": 13, "name": "Balearic Islands"},
      {"id": 13, "name": "Basque Country"},
      {"id": 13, "name": "Canary Islands"},
      {"id": 13, "name": "Cantabria"},
      {"id": 13, "name": "Castile and León"},
      {"id": 13, "name": "Castilla-La Mancha"},
      {"id": 13, "name": "Catalonia"},
      {"id": 13, "name": "Extremadura"},
      {"id": 13, "name": "Galicia"},
      {"id": 13, "name": "La Rioja"},
      {"id": 13, "name": "Community of Madrid"},
      {"id": 13, "name": "Region of Murcia"},
      {"id": 13, "name": "Navarre"},
      {"id": 13, "name": "Valencian Community"},

      {"id": 14, "name": "Seoul"},
      {"id": 14, "name": "Busan"},
      {"id": 14, "name": "Daegu"},
      {"id": 14, "name": "Incheon"},
      {"id": 14, "name": "Gwangju"},
      {"id": 14, "name": "Daejeon"},
      {"id": 14, "name": "Ulsan"},
      {"id": 14, "name": "Sejong"},
      {"id": 14, "name": "Gyeonggi Province"},
      {"id": 14, "name": "Gangwon Province"},
      {"id": 14, "name": "North Chungcheong Province"},
      {"id": 14, "name": "South Chungcheong Province"},
      {"id": 14, "name": "North Jeolla Province"},
      {"id": 14, "name": "South Jeolla Province"},
      {"id": 14, "name": "North Gyeongsang Province"},
      {"id": 14, "name": "South Gyeongsang Province"},
      {"id": 14, "name": "Jeju Province"},


      {"id": 15, "name": "Aguascalientes"},
      {"id": 15, "name": "Baja California"},
      {"id": 15, "name": "Baja California Sur"},
      {"id": 15, "name": "Campeche"},
      {"id": 15, "name": "Chiapas"},
      {"id": 15, "name": "Chihuahua"},
      {"id": 15, "name": "Coahuila"},
      {"id": 15, "name": "Colima"},
      {"id": 15, "name": "Durango"},
      {"id": 15, "name": "Guanajuato"},
      {"id": 15, "name": "Guerrero"},
      {"id": 15, "name": "Hidalgo"},
      {"id": 15, "name": "Jalisco"},
      {"id": 15, "name": "State of Mexico"},
      {"id": 15, "name": "Michoacán"},
      {"id": 15, "name": "Morelos"},
      {"id": 15, "name": "Nayarit"},
      {"id": 15, "name": "Nuevo León"},
      {"id": 15, "name": "Oaxaca"},
      {"id": 15, "name": "Puebla"},
      {"id": 15, "name": "Querétaro"},
      {"id": 15, "name": "Quintana Roo"},
      {"id": 15, "name": "San Luis Potosí"},
      {"id": 15, "name": "Sinaloa"},
      {"id": 15, "name": "Sonora"},
      {"id": 15, "name": "Tabasco"},
      {"id": 15, "name": "Tamaulipas"},
      {"id": 15, "name": "Tlaxcala"},
      {"id": 15, "name": "Veracruz"},
      {"id": 15, "name": "Yucatán"},
      {"id": 15, "name": "Zacatecas"},


      {"id": 16, "name": "Aceh"},
      {"id": 16, "name": "Bali"},
      {"id": 16, "name": "Bangka Belitung Islands"},
      {"id": 16, "name": "Banten"},
      {"id": 16, "name": "Bengkulu"},
      {"id": 16, "name": "Central Java"},
      {"id": 16, "name": "Central Kalimantan"},
      {"id": 16, "name": "Central Sulawesi"},
      {"id": 16, "name": "East Java"},
      {"id": 16, "name": "East Kalimantan"},
      {"id": 16, "name": "East Nusa Tenggara"},
      {"id": 16, "name": "Gorontalo"},
      {"id": 16, "name": "Jakarta Special Capital Region"},
      {"id": 16, "name": "Jambi"},
      {"id": 16, "name": "Lampung"},
      {"id": 16, "name": "Maluku"},
      {"id": 16, "name": "North Kalimantan"},
      {"id": 16, "name": "North Maluku"},
      {"id": 16, "name": "North Sulawesi"},
      {"id": 16, "name": "North Sumatra"},
      {"id": 16, "name": "Papua"},
      {"id": 16, "name": "Riau"},
      {"id": 16, "name": "Riau Islands"},
      {"id": 16, "name": "Southeast Sulawesi"},
      {"id": 16, "name": "South Kalimantan"},
      {"id": 16, "name": "South Sulawesi"},
      {"id": 16, "name": "South Sumatra"},
      {"id": 16, "name": "West Java"},
      {"id": 16, "name": "West Kalimantan"},
      {"id": 16, "name": "West Nusa Tenggara"},
      {"id": 16, "name": "West Papua"},
      {"id": 16, "name": "West Sulawesi"},
      {"id": 16, "name": "West Sumatra"},
      {"id": 16, "name": "Yogyakarta Special Region"},

      {"id": 17, "name": "Adana"},
      {"id": 17, "name": "Adyaman"},
      {"id": 17, "name": "Afyonkarahisar"},
      {"id": 17, "name": "Ağr"},
      {"id": 17, "name": "Aksaray"},
      {"id": 17, "name": "Amasya"},
      {"id": 17, "name": "Ankara"},
      {"id": 17, "name": "Antalya"},
      {"id": 17, "name": "Ardahan"},
      {"id": 17, "name": "Artvin"},
      {"id": 17, "name": "Aydn"},
      {"id": 17, "name": "Balkesir"},
      {"id": 17, "name": "Bartn"},
      {"id": 17, "name": "Batman"},
      {"id": 17, "name": "Bayburt"},
      {"id": 17, "name": "Bilecik"},
      {"id": 17, "name": "Bingöl"},
      {"id": 17, "name": "Bitlis"},
      {"id": 17, "name": "Bolu"},
      {"id": 17, "name": "Burdur"},
      {"id": 17, "name": "Bursa"},
      {"id": 17, "name": "Çanakkale"},
      {"id": 17, "name": "Çankr"},
      {"id": 17, "name": "Çorum"},
      {"id": 17, "name": "Denizli"},
      {"id": 17, "name": "Diyarbakır"},
      {"id": 17, "name": "Düzce"},
      {"id": 17, "name": "Edirne"},
      {"id": 17, "name": "Elazğ"},
      {"id": 17, "name": "Erzincan"},
      {"id": 17, "name": "Erzurum"},
      {"id": 17, "name": "Eskişehir"},
      {"id": 17, "name": "Gaziantep"},
      {"id": 17, "name": "Giresun"},
      {"id": 17, "name": "Gümüşhane"},
      {"id": 17, "name": "Hakkari"},
      {"id": 17, "name": "Hatay"},
      {"id": 17, "name": "Iğdr"},
      {"id": 17, "name": "Isparta"},
      {"id": 17, "name": "İstanbul"},
      {"id": 17, "name": "İzmir"},
      {"id": 17, "name": "Kahramanmaraş"},
      {"id": 17, "name": "Karabük"},
      {"id": 17, "name": "Karaman"},
      {"id": 17, "name": "Kars"},
      {"id": 17, "name": "Kastamonu"},
      {"id": 17, "name": "Kayseri"},
      {"id": 17, "name": "Krkkale"},
      {"id": 17, "name": "Krklareli"},
      {"id": 17, "name": "Krşehir"},
      {"id": 17, "name": "Kilis"},
      {"id": 17, "name": "Kocaeli"},
      {"id": 17, "name": "Konya"},
      {"id": 17, "name": "Kütahya"},
      {"id": 17, "name": "Malatya"},
      {"id": 17, "name": "Manisa"},
      {"id": 17, "name": "Mardin"},
      {"id": 17, "name": "Mersin"},
      {"id": 17, "name": "Muğla"},
      {"id": 17, "name": "Muş"},
      {"id": 17, "name": "Nevşehir"},
      {"id": 17, "name": "Niğde"},
      {"id": 17, "name": "Ordu"},
      {"id": 17, "name": "Osmaniye"},
      {"id": 17, "name": "Rize"},
      {"id": 17, "name": "Sakarya"},
      {"id": 17, "name": "Samsun"},


      {"id": 18, "name": "Riyadh"},
      {"id": 18, "name": "Makkah"},
      {"id": 18, "name": "Madinah"},
      {"id": 18, "name": "Eastern Province"},
      {"id": 18, "name": "Asir"},
      {"id": 18, "name": "Tabuk"},
      {"id": 18, "name": "Hail"},
      {"id": 18, "name": "Northern Borders"},
      {"id": 18, "name": "Jizan"},
      {"id": 18, "name": "Najran"},
      {"id": 18, "name": "Al Bahah"},
      {"id": 18, "name": "Al Jawf"},
      {"id": 18, "name": "Al-Qassim"},

      {"id": 19, "name": "Riyadh"},
      {"id": 19, "name": "Makkah"},
      {"id": 19, "name": "Madinah"},
      {"id": 19, "name": "Eastern Province"},
      {"id": 19, "name": "Asir"},
      {"id": 19, "name": "Tabuk"},
      {"id": 19, "name": "Hail"},
      {"id": 19, "name": "Northern Borders"},
      {"id": 19, "name": "Jizan"},
      {"id": 19, "name": "Najran"},
      {"id": 19, "name": "Al Bahah"},
      {"id": 19, "name": "Al Jawf"},
      {"id": 19, "name": "Al-Qassim"},

      {"id": 20, "name": "Eastern Cape"},
      {"id": 20, "name": "Free State"},
      {"id": 20, "name": "Gauteng"},
      {"id": 20, "name": "KwaZulu-Natal"},
      {"id": 20, "name": "Limpopo"},
      {"id": 20, "name": "Mpumalanga"},
      {"id": 20, "name": "Northern Cape"},
      {"id": 20, "name": "North West"},
      {"id": 20, "name": "Western Cape"},

    ]
  }
}