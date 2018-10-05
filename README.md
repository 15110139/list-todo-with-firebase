Câu 1: Kể tên những thư viện CSS và JS bạn đã dùng, kể cả trong project trên, chức năng và ưu điểm của các thư viện đó
-CSS:

- boostrap 4 : Nhanh chóng dễ sữ dụng, nhiều người sữ dụng
- fontawesome : Nhiều Icon, dễ sữ dụng
  -JS:
- Reactstrap : Tạo nhanh các components react có css boostrap nhanh.
- uuid : Tạo cái Id với nhiều format khác nhau.
- moment : Xữ lý time date hiệu quả.
- Redux form : Tạo cấu trúc form và validate form nhanh chóng.
- Ant Design : Tạo nhanh các components react
  ...

Câu 2:Trình bày về xử lý bất đồng bộ trong JS và bạn đã dùng chỗ nào trong project trên.

- Xữ lỹ bất đồng bộ trong JS: là quá trình xử lí mà đoạn code hay một function ở dưới có thể tiếp tục chạy mặc dù đoạn code hay function ở trên chưa được xử lí hết và trả về kết quả.
- Sự dùng trong việc lấy dữ liệu và update dữ liệu lên firebase.

Câu 3: ReactJS, Jquery, Angular khác nhau như thế nào;

- ReatJs is JavaScript open source library | View layer | HTML is written in JS which can be confusing | Unidirectional Binding | Virtual DOM
- Angular is JavaScript framework open source | complete MVC functionality | Angular follows the template app | Two way data binding | RESTful API | DOM
- Jquery is JavaScript open source library | provides a consistent DOM API | CSS manipulation |HTML/DOM manipulation |Event Handling | Ajax/ JSONP |Effects and animations

Câu 4:Trình bày về Float và cách chúng hoạt động; (đề ghi Floats)

Thuộc tính float xác định có hay không một thành phần được float (trôi nổi).
Cách sữ dụng
left float: left; Thành phần được trôi nổi (float) qua bên trái.
right float: right; Thành phần được trôi nổi (float) qua bên phải.
none float: none; Thành phần không được trôi nổi (float) qua bên phải hay trái, đây là dạng mặc định.
inherit float: inherit; Xác định thừa hưởng thuộc tính từ thành phần cha (thành phần bao ngoài).

Câu 5: Trình bày về z-index và làm thế nào để nội dung stack với nhau được định hình.

Thuộc tính z-index được sinh ra nhằm giải quyết cấp độ hiển thị của các thẻ HTML lên trình duyệt Browser, hay nói cách khác z-index giống như đánh số thứ tự hiển thị, thẻ nào có z-index cao thì nằm phía trên và thẻ nào có z-index thấp thì nằm phía dưới.

Câu 6: Giải thích về CSS sprites và làm thế nào để bạn thực hiện chúng trên một trang web.

CSS Sprites do Dave Shea đề nghị lần đầu năm 2004. Thuật ngữ “Sprites” thực ra là kỹ thuật đã được dùng từ trước trong các video games và sau này là trong các website. Tất cả các hình ảnh được đặt vào 1 file hình duy nhất, sau đó dùng thuộc tính background-position của CSS để hiện ra đúng vị trí cần thiết. Cách này cũng được áp dụng với các hiệu ứng hover, active hay focus để tạo các nút bấm động một cách mượt mà hơn.
VD về logo
đặt 2 logo đã xử lý của chúng ta vào một hình duy nhất.

<a class=”logo” href=”https://www.cione.vn”>CiOne.Vn</a>

Do đạt kích thước hình rồi đưa ra css

Và mã CSS như sau:
.logo {
background-image: url(‘http://i.imgur.com/gqxcc5G.jpg’);
background-position: 0 0;
display: inline-block;
height: 150px;
width: 191px;
text-indent: -9999px;
}

