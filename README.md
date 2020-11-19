# lodash-starter
Merhaba ben Erdinç Cürebal, Lodash dökümanını Türkçeliştirmek ve anlaşılır hale getirmek istedim.
Bu projemi size sunuyorum, umarım işinize yarar.
Nihal Kıran arkadaşımıza da çok teşekkür ederim, bu projede bana yardımcı olduğu için.

## Array
- chunk - Array verilerin içine array açmaya ve ayırmaya yarar.
- compact - false, null, 0, "", undefined, NaN içeriklerini temizler.
- concat - Array'leri birleştirmeye yarar.
- difference - İlk parametre olan array'in içerisinden , ikinci paremetre olan array'deki objeler çıkarılır.
- differenceBy - İlk parametre olan array'in içerisinden , ikinci paremetre olan array'deki objeler çıkarılır, üçüncü parametrede fonksiyon uygulanır.
- differenceWith - Array içinde belirtilen herhangi bir değer veya arrayin dışındakileri yazdırır.
- drop - Dizideki verili baştan olmak üzere girilen değer kadar siler. Varsayılan 1.
- dropRight - Dizideki verili sondan olmak üzere girilen değer kadar siler. Varsayılan 1.
- dropRightWhile - Dizideki koşula göre sağdan başlamak üzere koşulda ilk görülen veriyi siler.
- dropWhile - Dizideki koşula göre soldan başlamak üzere koşulda ilk görülen veriyi siler.
- fill - Array içindeki tüm değerleri, verilen değer ile değiştirir.
- findIndex - Dizinin içindeki koşula göre baştan başlayarak indexi yakalar.
- findLastIndex - Dizinin içindeki koşula göre sondan? başlayarak indexi yakalar.
- flatten - Dizideki bozukluğu düzeltir.
- flattenDeep - Dizinin içindeki dizileri siler ve diziyi tek bir dizi haline getirir.
- flattenDepth - Dizinin dıştan içe doğru iç dizilerini verilen indis değerine kadar siler.
- fromPairs - Diziyi yeni bir objeye cevirir.
- head - Dizinin boş mu dolu mu olduğunu kontrol eder.
- indexOf - Birinci örnek dizideki değerin kaçıncı index'de olduğunu gösterir ve birden fazla index atlanılabilir.
- initial - Dizideki son elemanı siler.
- intersection - Birden fazla dizi girilebilir ve girilen dizideki aynı değerleri siler.
- intersectionBy - Dizideki aynı değerleri bir fonksiyonla işleme koyup, aynı değerleri silebilirsiniz.
- intersectionWith - Dizideki değerlerin eşit olanı bulup diğerlerini siler.
- join - Dizideki değerden çıkartılır ve sonda verilen değeri aralarına koyar.
- last - Dizideki son diziden çıkarır ve değeri çağırır.
- lastIndexOf - Dizideki indexi arar ama sondan başlar baştaki indexleri görmez. Fonksiyona bir değer daha girerek atlatma yapabilirsiniz.
- nth - Diziden index sayısını girerek veri cağrılabilir veya negatif sayılar girerek sondan başlayarak veride çağırılabilir.
- pull - Diziden istediğiniz değerleri çıkartabilirsiniz.
- pullAll - Diziden istediğiniz değerleri çıkartabilirsiniz, değeri dizi halinde girmeniz gerekmektedir.
- pullAllBy - Dizideki objelerin içindeki tanımlarına göre verileri temizleyebilirsiniz.
- pullAllWith - Girilen değer dizi olmalıdır, aynı değerleri siler.
- pullAt - Diziden diziye veriyi taşır.
- remove - Fonksiyon ile veriyi filtreleyip silebilirsiniz.
- reverse - Dizideki verilerin sıralanışını tersine cevirir.
- slice - Dizideki verileri baştan veya sondan olmak üzere girilen değer kadar silinebilir.
- sortedIndex - Girilen değer dizinin arasındamı geçiyormu veya geçmemiş mi kontrolü yapılır.
- sortedIndexBy - Dizinin içindeki değere göre index araması yapılarak objenin indexi bulunur.
- sortedLastIndexBy - Dizideki objenin verisine göre sondan başa index taraması yapar.
- sortedLastIndexOf - Dizideki index taramasını yapar sondan başa doğru, 0 dan başlar.
- sortedUniq - Dizideki benzer verileri çıkartır.
- sortedUniqBy - Dizideki benzer verileri fonksiyon uygulayarak çıkartır.
- tail - Dizideki ilk elemanı siler.
- take - Dizideki yazılan değere göre ilk değerleri alır.
- takeRight - Dizideki yazılan değere göre sondan başlarayarak değerleri alır.
- takeRightWhile - Dizideki yazılan değere göre sondan başlayarak değeri alır.
- takeWhile - Dizideki yazılan değere göre baştan başlayarak değeri alır.
- union - Dizideki aynı değerleri siler.
- unionBy - Dizideki aynı değerleri fonksiyon uygulayarak siler.
- unionWith - 2 dizin içerisindeki aynı objeleri çıkartıp iki diziyi birleştirir.
- uniq - Dizideki aynı verileri siler.
- uniqBy - Dizideki benzer verileri fonksiyon uygulayarak siler.
- uniqWith - Dizideki benzer objeleri koşul uygulayarak temizler.
- unzip - Zip cözer, zipi eski haline getirir.
- without - Dizideki belirtilen değerleri siler.
- xor - Birden fazla dizi girilir ve dizilerdeki aynı değerleri siler ve tek bir dizin oluşturur.
- xorBy - Birden fazla dizi girilir ve dizilerdeki aynı değerleri fonksiyon kullanarak siler ve tek bir dizin oluşturur.
- xorWith - Birden fazla dizi girilir ve dizilerdeki aynı değerleri koşul kullanarak siler ve tek bir dizin oluşturur.
- zip - Dizinin içerindeki dizilerden aynı sıradaki değerleri birleştirir ve tür sayısı kadar dizi oluşturur.
- zipObject - Dizinin içerindeki dizilerden aynı sıradaki değerleri birleştirir ve tek bir obje oluşturur.
- zipObjectDeep - Dizilerle iç içe objeler oluşturma fonksiyonu.
- zipWith - Dizinin aynı sıradaki elemanlarını fonksiyon kullanarak belirli işleme sokar.

## Collection
- countBy - Fonksiyon veya koşula bağlı kalarak dizi içerisindeki değerlerin miktarını yansıtır.
- every - Verilen koşula göre liste içerisindeki tüm satırların doğru olup olmadığını, true ve false döner.
- filter - Verilen koşullara göre liste içerisinde değere uygun olan objeleri yansıtır.
- find - Verilen koşullara göre liste içerisinde değere uygun olan objeyi getirir.
- findLast - Verilen koşullara göre liste içerisinde değere uygun olan objeyi sondan getirir.
- flatMap - Oluşturulan fonksiyonun işlemine dizideki tüm elemanlara tek tek uygular. 
- flatMapDeep - Oluşturulan fonksiyonun işlemine dizideki tüm elemanlara tek tek uygular. Girilen değer kadar dışarıdan dizi siler.
- forEach - Dizinin length kadar, tek tek verileri döngüye sokar.
- forEachRight - Dizinin length kadar, tek tek verileri döngüye sokar. Döngüyü sondan başa yapar.
- groupBy - Dizinin içersindeki verileri koşula göre objeler haline getirir.
- includes - Fonksiyon true veya false döner, dizinin içersinde girilen değer varmı diye kontrol eder.
- invokeMap - Dizilerin içersindeki değerleri sıralar.
- keyBy - Dizinin içersindeki bir tane veriyi alarak dizideki objeleri düzenler.
- map - Obje elamanlarına fonksiyondaki işlemi uygular ve diziye dönüştürür.
- orderBy - Dizilerin içersindeki verileri belirtilen koşulda sıralar.
- partition - Dizilerin içersindeki verileri belirtilen koşuldaki veriyi tüm verilerden ayırır, ayrı bir dizin oluşturur ikisinede.
- reduce - Dizinin içindeki verileri toplamaya yarar.
- reduceRight - Dizinin içindeki verileri birleştirir.Sondan birleştirir.
- reject - Dizinin içersindeki objenin verisine göre silme işlemi yapar.
- sample - Dizinin içersinden bir tane veriyi rastgele getirir.
- sampleSize - Dizinin içersinden istenilen kadar veriyi rastgele getirir.
- shuffle - Dizinin içersindeki verileri karıştırır.
- size - Verinin uzunluğunu yazar.
- sortBy - Dizideki verileri bir koşula sıralar.

## Date
- now - ?

## Function
- ary - Dizideki verilerin türünü değiştirmeye yarar.
