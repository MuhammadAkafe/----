

const Menu = () => (
  <div className="min-h-screen bg-white flex flex-col items-center w-full" dir="rtl">
    {/* Header */}
    <header className="w-full flex flex-col items-center mb-6">
      <div className="w-full h-32 md:h-48 overflow-hidden flex justify-center shadow-md">
        <img
          src="/res.jpeg"
          className="w-full h-full object-cover"
          alt="مطعم"
        />
      </div>
      <h1 className="text-4xl font-extrabold text-gray-900 mt-6 mb-2 text-center">قائمة الطعام</h1>
    </header>

    {/* Main Content: QR + Menu */}
    <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-7xl gap-8 px-2 md:px-8 flex-1">
      {/* Menu Section */}
      <main className="flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Starters */}
          <section className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col items-center">
            <div className="w-full h-32 md:h-48 overflow-hidden mb-4">
              <img
                src="/Appetizers.webp"
                className="w-full h-full object-cover"
                alt="المقبلات"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">المقبلات</h2>
            <ul className="space-y-5 w-full">
              <li>
                <div className="flex justify-between font-semibold text-lg">
                  <span>بروشيتا</span>
                  <span>6$</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">خبز محمص مع طماطم طازجة وريحان وثوم</p>
              </li>
              <li>
                <div className="flex justify-between font-semibold text-lg">
                  <span>سلطة سيزر</span>
                  <span>7$</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">خس طازج، جبن بارميزان، خبز محمص، وصلصة خاصة</p>
              </li>
              <li>
                <div className="flex justify-between font-semibold text-lg">
                  <span>شوربة اليوم</span>
                  <span>5$</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">اختيار الشيف اليومي، يقدم مع خبز طازج</p>
              </li>
            </ul>
          </section>

          {/* Main Course */}
          <section className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col items-center">
            <div className="w-full h-32 md:h-48 overflow-hidden mb-4">
              <img
                src="/main-course.jpg"
                className="w-full h-full object-cover"
                alt="الأطباق الرئيسية"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">الأطباق الرئيسية</h2>
            <ul className="space-y-5 w-full">
              <li>
                <div className="flex justify-between font-semibold text-lg">
                  <span>سلمون مشوي</span>
                  <span>18$</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">سلمون أطلنطي طازج مع خضار موسمية وصلصة زبدة الليمون</p>
              </li>
              <li>
                <div className="flex justify-between font-semibold text-lg">
                  <span>ستيك مع البطاطا</span>
                  <span>22$</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">لحم بقري مع بطاطا مقلية وصلصة الفلفل</p>
              </li>
              <li>
                <div className="flex justify-between font-semibold text-lg">
                  <span>باستا نباتية</span>
                  <span>15$</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">باستا طازجة مع خضار مشوية وصلصة أعشاب كريمية</p>
              </li>
            </ul>
          </section>

          {/* Desserts */}
          <section className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col items-center">
            <div className="w-full h-32 md:h-48 overflow-hidden mb-4">
              <img
                src="/desserts.jpg"
                className="w-full h-full object-cover"
                alt="الحلويات"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">الحلويات</h2>
            <ul className="space-y-5 w-full">
              <li>
                <div className="flex justify-between font-semibold text-lg">
                  <span>تيراميسو</span>
                  <span>7$</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">حلى إيطالي كلاسيكي مع بسكويت منقوع بالإسبريسو</p>
              </li>
              <li>
                <div className="flex justify-between font-semibold text-lg">
                  <span>كيك الشوكولاتة السائلة</span>
                  <span>8$</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">كيك شوكولاتة دافئ مع قلب سائل، يقدم مع آيس كريم فانيليا</p>
              </li>
              <li>
                <div className="flex justify-between font-semibold text-lg">
                  <span>تارت الفواكه</span>
                  <span>6$</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">عجينة زبدية محشوة بكاسترد الفانيليا وفواكه موسمية طازجة</p>
              </li>
            </ul>
          </section>

          {/* Drinks */}
          <section className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col items-center">
            <div className="w-full h-32 md:h-48 overflow-hidden mb-4">
              <img
                src="/drinks.webp"
                className="w-full h-full object-cover"
                alt="المشروبات"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">المشروبات</h2>
            <ul className="space-y-5 w-full">
              <li>
                <div className="flex justify-between font-semibold text-lg">
                  <span>ليمونادة طازجة</span>
                  <span>4$</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">محضرة في المطعم مع ليمون ونعناع طازج</p>
              </li>
              <li>
                <div className="flex justify-between font-semibold text-lg">
                  <span>إسبريسو</span>
                  <span>3$</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">جرعة مزدوجة من قهوة إيطالية فاخرة</p>
              </li>
              <li>
                <div className="flex justify-between font-semibold text-lg">
                  <span>نبيذ أحمر</span>
                  <span>7$</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">كأس من اختيار المطعم، اسأل النادل عن التفاصيل</p>
              </li>
            </ul>
          </section>
        </div>
      </main>

      {/* QR Code Section */}
      <aside className="flex flex-col items-center justify-center md:w-72 w-full mb-8 md:mb-0">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">امسح رمز QR لعرض القائمة</h2>
          <a
            href="https://your-restaurant-menu-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center"
          >
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://your-restaurant-menu-link.com"
              alt="رمز QR"
              className="w-28 h-28 border-2 border-gray-300 rounded-lg shadow-md"
            />
          </a>
          <p className="text-sm text-gray-600 mt-2 text-center">
            امسح الرمز لعرض القائمة الكاملة وطلب الطعام عبر الإنترنت
          </p>
        </div>
      </aside>
    </div>

    <footer className="text-center text-gray-500 mt-8 mb-4 text-xs w-full">
      &copy; 2024 اسم المطعم. جميع الحقوق محفوظة.
    </footer>
  </div>
);

export default Menu; 