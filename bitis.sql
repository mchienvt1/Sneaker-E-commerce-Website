-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2024 at 12:28 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bitis`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phonenumber` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `username`, `password`, `role`, `fullname`, `email`, `phonenumber`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin', 'admin', 'admin@gmail.com', '0366592599'),
(2, 'admin1', 'e00cf25ad42683b3df678c61f42c6bda', 'user', 'admin1 admin1', 'admin1@gmail.com', '0366592599'),
(3, 'adjfjk123h4jk2h', '5e13d4470ff64dc28235561ad0f261e3', 'user', 'jhhklhklhjkl jkhlkh', 'klhkjhlh@gmail.com', '0366592599'),
(6, 'than', '7761127a460aaf290ed953098284dd1a', 'user', 'than than', 'than@gmail.com', '0366592599'),
(7, 'quangvu', 'b65f330ff909cec989b32c75a9fe1ec9', 'user', 'quangvu quangvu', 'quangvu@gmail.com', '123345454');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(50) NOT NULL,
  `sl` int(50) NOT NULL,
  `a_id` int(50) NOT NULL,
  `p_id` int(50) NOT NULL,
  `size` int(50) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `sl`, `a_id`, `p_id`, `size`, `status`) VALUES
(4, 3, 7, 1, 42, 'Waiting'),
(5, 1, 7, 1, 37, ''),
(6, 4, 7, 2, 44, '');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(50) NOT NULL,
  `a_id` int(50) NOT NULL,
  `time` date NOT NULL,
  `comment` varchar(250) NOT NULL,
  `p_id` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `a_id`, `time`, `comment`, `p_id`) VALUES
(1, 7, '2024-05-05', 'kahdfjkahslk kjhqew hr kashdfqw jhasdflhsq qưe', 1),
(2, 7, '0000-00-00', 'demi 2demo 2', 1),
(3, 6, '2024-05-05', 'okeoke', 1);

-- --------------------------------------------------------

--
-- Table structure for table `description`
--

CREATE TABLE `description` (
  `id` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `content` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `description`
--

INSERT INTO `description` (`id`, `productID`, `content`) VALUES
(1, 3, 'Giày thể thao Biti’s Hunter Street đế #BÀO MARVEL Spiderman, phiên bản Hunter-verse 2k23 HSM001898 dành cho nam hiện tại là phiên bản được mong đợi nhất hiện nay. Không chỉ “ghi điểm” với thiết kế nam tính và mạnh mẽ, sản phẩm còn có rất nhiều ưu điểm ấn tượng về chất lượng. Tìm hiểu chi tiết hơn tại đây nhé!\r\n\r\nĐế giày \r\nGiày Thể Thao Nam Biti’s Hunter Street đế #BÀO x MARVEL Spiderman - Hunter-verse 2k23 edition HSM001898 để lại ấn tượng khó phai với phần đế #BÀO đặc biệt, cao cấp. Cụ thể: \r\n\r\nĐế ngoài: Sử dụng cao su đúc, mặt đế bằng phẳng phù hợp với mục đích tập luyện, hoa văn đế trên từng mảng nhỏ tạo ma sát tốt.\r\nThành đế: Sử dụng cao su mềm 55 shore để đảm bảo độ uốn gấp khi vận động, tự do linh hoạt.\r\nĐế giữa: Đệm lót Eva tăng độ ma sát, chống trơn trượt có độ mềm 45 shore giúp đàn hồi, giảm trọng lượng đế cao su.\r\nĐệm mũi đế: Được thiết kế mỏng hơn, đục rỗng để đảm bảo trọng lượng, không ảnh hưởng tới độ uốn gấp của đế.\r\nĐệm gót đế: Đệm gót được Biti’s thiết kế dày giúp hấp thụ lực từ trên cao xuống làm giảm lực tác động vào phần gót chân.\r\nĐế trong : Đúc khuôn Eva, có lỗ đàn hồi với độ mềm 35-40 shore, mặt trên là vải kháng khuẩn, thông khí 6 góc độ massage.\r\nThân trên giày \r\nKết hợp với chất liệu si và da lộn, không chỉ mang lại nét thời thượng, phá cách mà còn sở hữu rất nhiều ưu điểm về chất lượng. Chẳng hạn, tính mềm mại cao, thấm hút mồ hôi tốt, độ bền cao, hỗ trợ giữ ấm cho cổ chân… \r\nĐây là phiên bản hợp tác đặc biệt giữa Biti’s và Marvel. Vậy nên, thương hiệu lấy cảm hứng từ Spiderman trong thế giới vũ trụ Marvel và tôn vinh di sản 19 năm của nhân vật Nhện huyền thoại. Từ đó “chiều lòng” người sử dụng bằng cách tạo điểm khác biệt với họa tiết mặt nạ Spiderman ở má trái giày. \r\nMàu sắc\r\nHiện tại, sản phẩm chỉ có một màu duy nhất là Đen, đi viền Đỏ ấn tượng. \r\nTùy theo điều kiện ánh sáng, màu sắc giày Biti’s Hunter Street thực tế có thể có sự chênh lệch màu sắc khoảng 3 - 5 %. \r\nSize giày\r\nCó 7 size là 39, 40, 41, 42, 43, 44 và 45. \r\nBảo hành\r\nSản phẩm được bảo hành trong vòng 3 tháng kể từ thời điểm mua hàng. Ngoài ra sản phẩm còn được bảo hành trọn đời với lỗi bong keo, đứt chỉ (vật tư của sản phẩm đủ điều kiện tái chế không bị rách,…)\r\nĐổi size giày trong vòng 7 ngày, đổi sản phẩm lỗi trong vòng 7 ngày, kể từ thời điểm mua hàng, nếu sản phẩm vẫn đáp ứng chính sách đổi trả. Điều kiện và quy định đổi trả, quý khách vui lòng tham khảo trên website chính thức. \r\nTính năng và lợi ích nổi bật\r\nDưới đây là những ưu điểm tuyệt vời ở sản phẩm mà bạn không thể phủ nhận:\r\n\r\nBiti’s Hunter Street HSM001898 lựa chọn thiết kế cổ lửng với phần đỉnh hậu và lưỡi gà cao cũng như tích hợp thêm đệm xốp vững chắc. Qua đó vừa ôm trọn đôi chân, vừa mang lại cảm giác êm ái nhất cho thể trong mọi bước di chuyển. \r\nMàu sắc trung tính, đi viền nam tính nên khá phù hợp với nhiều độ tuổi khác nhau. \r\nForm giày đứng, cứng cáp, đế bằng thiết kế trẻ trung, năng động.\r\nMang lại khả năng thấm hút mồ hôi, thoáng khí hiệu quả. Từ đó tạo cảm giác thoải mái nhất có thể trong mọi bước đi. \r\nSản phẩm bao gồm\r\nBên trong mỗi sản phẩm đều có: \r\n\r\nHộp giày giấy bìa cứng cáp giúp bảo quản giày tốt hơn.\r\nDây giày chắc chắn.\r\nTúi chống ẩm.\r\nGiày. \r\nGiày thể thao nam Biti’s Hunter Street đế #BÀO MARVEL Spiderman, phiên bản Hunter-verse 2k23 HSM001898 xứng đáng là một trong những sản phẩm phải sở hữu trong năm nay. Để biết thêm thông tin chi tiết, bạn vui lòng liên hệ Bitis.com.vn để được tư vấn và hưởng những chương trình khuyến mãi hấp dẫn!'),
(2, 5, 'Giày thể thao thông dụng nam Biti\'s Basic BSM000600 được xem là mẫu giày \"quốc dân\" chưa bao giờ ngừng hot. Mặc dù đã ra mắt từ rất lâu nhưng đây vẫn được xem là sự lựa chọn hàng đầu cho những bạn yêu thích sự đơn giản. Thiết kế giày full đen hoặc trắng sẽ là điểm nhấn làm rung động biết bao nhiêu tín đồ mê phong cách thời trang hiện đại, trẻ trung. Để hiểu hơn về sản phẩm, cùng xem chi tiết ngay sau đây.\r\n\r\nĐế giày\r\nĐế giày thể thao Basic BSM000600 là chất liệu PVC có khả năng uốn dẻo và chống mài mòn vô cùng tốt. Bên cạnh đó, đế PVC còn giúp cho giày có tính cách nhiệt và chịu lực cực hiệu quả\r\nPhần đế được thiết kế đặc biệt thu hút một cách tối đa lực tiếp xúc nên khi mang hoặc lúc vận động bạn sẽ có cảm giác được nâng niu một cách nhẹ nhàng\r\nĐế giày xuyên suốt từ gót đến mũi, các đường rãnh được tạo ra giúp tăng khả năng bám đường tốt hơn khi di chuyển, hạn chế trơn trượt tối đa\r\nLót giày OrthoLite mang đến sự êm ái và khả năng hút ẩm tốt, chống hôi chân\r\nThân giày\r\nThân giày được gia công từ chất liệu lưới kết hợp Si với độ ôm chân vừa phải, giúp đôi giày cố định và nâng đỡ tốt bàn chân trong quá trình di chuyển\r\nĐiểm nhấn ở Biti\'s Basic BSM000600 có thể kể đến là sự cân bằng hoàn hảo với các đường nét chế tác vô cùng sắc sảo.\r\nTrên thân giày sẽ có những lỗ li ti, khi mang bạn sẽ cảm nhận sự thông thoáng và trao đổi khí bên trong, điều này làm giảm thiểu đi tình trạng đổ mồ hôi, hầm bí như những đôi giày thể thao truyền thống\r\nMàu sắc giày\r\nBiti\'s Basic BSM000600 hữu những tone màu nhẹ nhàng nhưng không kém phần nổi bật, phù hợp với tủ đồ của các bạn nam giới\r\nGiày thiết kế đơn giản với 2 gam màu Trắng và Đen, bạn có thể dễ dàng diện giày nhiều phong cách khác nhau\r\nDo màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.\r\nSize giày\r\nGiày thể thao thông dụng nam Biti\'s Basic BSM000600 hiện có các size 40, 41, 42, 43 bạn có thể lựa chọn size số vừa vặn nhất với đôi chân của mình\r\nBảo hành\r\nSản phẩm được bảo hành trong vòng 3 tháng kể từ thời điểm mua hàng. Ngoài ra sản phẩm còn được bảo hành trọn đời với lỗi bong keo, đứt chỉ (vật tư của sản phẩm đủ điều kiện tái chế không bị rách,…)\r\nĐổi size giày trong vòng 7 ngày, đổi sản phẩm lỗi trong vòng 7 ngày, kể từ thời điểm mua hàng, nếu sản phẩm vẫn đáp ứng chính sách đổi trả. Điều kiện và quy định đổi trả, quý khách vui lòng tham khảo trên website chính thức. \r\nTính năng và lợi ích nổi bật\r\nGiày thể thao thông dụng nam Biti\'s Basic BSM000600 đơn giản nhưng vẫn năng động, khỏe khoắn\r\nForm dáng thoải mái, chi tiết phối trẻ trung, thiết kế cài bát thuận tiện cho thao tác mang\r\nĐế chất liệu PVC được sử dụng công nghệ phun liệu đế dính vào quai, chất đế nổi trội với độ bám đường và chống sốc tốt, giày bền bỉ trước tác động của ngoại lực, va chạm mạnh.\r\nChất liệu giày vừa đảm bảo được yếu tố thoải mái vừa đáp ứng được tính thanh lịch, thời trang, với kết cấu nhiều lỗ nhỏ hình tròn sẽ giúp khí lưu thông tốt hơn, tránh tình trạng bí chân\r\nMẫu giày thể thao giá rẻ cho đối tượng là học sinh\r\nGiày với kiểu dáng basic có thể kết hợp cùng nhiều outfit khác nhau, thích hợp để mặc đi chơi, đi học, đi làm\r\nSản phẩm bao gồm\r\nHộp giày giấy bìa cứng cáp giúp bảo quản giày tốt hơn\r\nGiày\r\nTúi chống ẩm\r\nKhông quá cầu kỳ nhưng mang lại sự khác biệt và một đẳng cấp đầy nam tính chính là lý do mà bạn cần có một đôi giày thể thao thông dụng nam Biti\'s Basic BSM000600 trong tủ đồ của mình. Sư hiện đại và thanh lịch của sản phẩm chắc chắn sẽ làm bạn tự tin sải bước. Để đặt mua sản phẩm, bạn truy cập ngay vào Bitis.com.vn và làm theo các bước hướng dẫn.'),
(3, 6, 'Giày Chạy Bộ Nam Biti\'s Hunter Running DSMH10000 là mẫu giày chạy với bộ đế thế hệ vượt trội và công nghệ độc quyền từ BITI’S Hunter không những đem đến sự thoải mái khi vận động mà còn mang đến cho người sử dụng phong cách thể thao năng động và sự ấn tượng cho mọi người.\r\n\r\nĐế giày\r\nBiti\'s Hunter Running DSMH10000 sử dụng bộ đế Lite Bounce với các đặc điểm:\r\n\r\nĐế ngoài:\r\nĐế ngoài được tạo bằng lớp cao su chống trơn trượt  có độ bám cao, giúp cho người dùng tăng khả năng bám chặt trên mọi địa hình.\r\nĐế trong (lót giày): \r\nĐế lót 2 lớp kết hợp Ortholite và Eva, rất vừa vặn với cấu trúc lòng bàn chân đặc trưng của người Việt, cùng độ êm được tính toán kỹ lưỡng nhất.\r\nĐế giữa:\r\nSử dụng công nghệ đế hai lớp – tiếp đất êm, phản hồi lực mạnh mẽ với độ đàn hồi vượt trội >50%, cho đường chạy nhẹ như bay.\r\nThân trên giày\r\nChất liệu: Sử dụng vải dệt Jacquard mềm mại, ôm trọn theo sự chuyển động của bàn chân và cấu tạo thiết kế thoáng khí tối đa đem đến một sự thông thoáng.\r\nLưỡi gà: Được may dính liền với thân giày, chất liệu co giãn tốt nên bạn có thể dễ dàng mang vào, tháo ra mà không cần phải tháo dây.\r\nThiết kế: Biti\'s Hunter Running  DSMH10000 có thiết kế hiện đại, phong cách trẻ trung,\r\nMàu sắc\r\nCó 4 màu  Orange – Grey – Electric Blue – Neon Green quen thuộc, dễ phối đồ từ thể thao tới trang phục hàng ngày.\r\nDo màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%. \r\nSize giày\r\nBiti\'s Hunter Running DSMH10000 có size chuẩn từ 39-45 được thiết kế để vừa vặn và ôm sát chân, tạo cảm giác thoải mái khi sử dụng hàng ngày.\r\nĐộ bền và bảo hành\r\nĐể đảm bảo chất lượng, Biti\'s Hunter Running DSMH10000 đã được kiểm tra kỹ lưỡng  bằng máy móc hiện đại.\r\n\r\nBảo hành:\r\n\r\nSản phẩm được bảo hành 3 tháng.\r\nBảo hành trọn đời với lỗi bong keo, đứt chỉ (vật tư của sản phẩm đủ điều kiện tái chế).\r\nTính năng và lợi ích nổi bật\r\nCông nghệ thoáng khí giúp cho giày lưu thông không khí một cách tốt hơn, điều đó giúp cho đôi chân của bạn luôn thông thoáng khi sử dụng.\r\nThiết kế đẹp mắt, cá tính.\r\nChất liệu chắc chắn và có độ bền cao.\r\nĐộ thoáng khí tốt, giúp giảm mồ hôi và giảm mùi.\r\nĐộ đàn hồi tốt, giúp bảo vệ đôi chân và giảm chấn.\r\nTrang bị Pulltab sau gót giúp mang giày dễ dàng hơn.\r\nCó thể cung cấp linh hoạt cho chân, giúp người sử dụng dễ dàng thực hiện các động tác và chuyển động.\r\nSản phẩm bao gồm\r\nHộp giày giấy bìa cứng cáp giúp bảo quản giày tốt hơn.\r\nDây giày chắc chắn\r\nTúi chống ẩm.\r\nBiti\'s Hunter Running DSMH10000 là sự lựa chọn hoàn hảo cho các môn thể thao hay các hoạt động ngoài trời khác. Hãy đặt hàng ngay hôm nay để trải nghiệm sự thoải mái và phong cách độc đáo mà sản phẩm mang lại, đặc biệt Biti\'s thường xuyên có nhiều chương trình khuyến mãi hấp dẫn cho quý khách hàng.'),
(4, 7, 'Nếu bạn muốn tìm một đôi giày đá banh chất lượng, thiết kế thể thao và êm ái khi sử dụng thì hãy chọn Giày Đá Banh Nam Biti\'s Football HSM003600. Cùng tìm hiểu chi tiết về sản phẩm trong bài viết dưới đây.\r\n\r\nĐế giày\r\nGiày Biti\'s Football HSM003600 có các đặc điểm nổi bật sau:\r\n\r\nĐế giày làm từ cao su cao cấp, mềm dẻo và uốn gấp tốt. Điều này không chỉ tạo cảm giác thoải mái mà còn mang đến khả năng chịu lực tốt, chống mài mòn đảm bảo độ an toàn cao cho người sử dụng.\r\nĐế giày còn có khả năng chống nước, độ đàn hồi tốt cùng độ bền cao. Hơn nữa, đế giày còn có tính năng hấp thụ chấn động, giảm ma sát khi di chuyển.\r\nPhần mặt đế có thiết kế nhiều gai, rãnh tạo độ ma sát giúp tăng cảm giác với bóng.\r\nGiày được lót đế cao cấp, giúp hạn chế mồ hôi, ngăn mùi hiệu quả.\r\nĐế ôm trọn bàn chân, không tạo ra cảm thấy bó cứng hay lỏng lẻo khi mang.\r\nThân giày\r\nQuai giày Biti\'s Football HSM003600 được làm từ chất liệu da tổng hợp dày dặn, chuyên dụng cho hoạt động đá bóng, nhằm mang đến độ mềm, êm ái trong từng chuyển động.\r\nPhần cổ giày mềm mại, ôm sát cổ chân giúp nâng cao độ linh hoạt cho bàn chân và hạn chế tình trạng tuột gót khi di chuyển nhiều. \r\nMàu sắc \r\nBiti\'s Football HSM003600 có 03 phiên bản màu gồm Cam, Đỏ và Xanh Mi Nơ. Đây đều là những màu sắc thời trang rất phù hợp cho các bạn nam.\r\nDo màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng từ 3 đến 5%.\r\nSize giày\r\nGiày đá banh nam Biti\'s Football HSM003600 ra mắt với 10 size bao gồm size 35, 36, 38, 39, 40, 41, 42, 43 và 44.  Điều này giúp các bạn nam dễ dàng tìm được sản phẩm phù hợp nhất cho mình dựa trên bảng size mà Biti’s gợi ý.\r\nBảo hành\r\nSản phẩm được bảo hành trong vòng 3 tháng kể từ thời điểm mua hàng. Ngoài ra sản phẩm còn được bảo hành trọn đời với lỗi bong keo, đứt chỉ (vật tư của sản phẩm đủ điều kiện tái chế không bị rách,…)\r\nĐổi size giày trong vòng 7 ngày, đổi sản phẩm lỗi trong vòng 7 ngày, kể từ thời điểm mua hàng, nếu sản phẩm vẫn đáp ứng chính sách đổi trả. Điều kiện và quy định đổi trả, quý khách vui lòng tham khảo trên website chính thức. \r\nTính năng và lợi ích nổi bật\r\nCông nghệ thoáng khí giúp cho đôi chân bạn luôn khô ráo, không đổ mô hôi hay mùi khó chịu.\r\nGiày Đá Banh Nam Biti\'s Football HSM003600 có thiết kế giày tinh gọn, kiểu dáng thể thao, mạnh mẽ.\r\nGiày được làm từ chất liệu cao cấp và được xử lý chỉn chu đảm bảo chất lượng.\r\nĐế giày và thân giày đếu có tính co giãn tốt, chịu lực và chống trơn trượt hiệu quả đảm bảo an toàn khi di chuyển trên bề mặt ẩm ướt.\r\nPhần đế ôm trọn bàn chân, mang đến cảm giác êm ái, thoải mái cho người sử dụng.\r\nGiày Biti\'s Football HSM003600 chuyên sử dụng để đá banh sân trong nhà, sân futsal.\r\nNgoài ra, bạn có thể sử dụng giày để chạy bộ, leo núi hay các môn thể thao.\r\nSản phẩm có nhiều size đáp ứng được đa dạng form bàn chân của khách hàng.\r\nSản phẩm bao gồm\r\nHộp giấy bìa cứng giúp bảo quản giày tốt nhất.\r\nGiày đá banh nam Biti\'s Football HSM003600.\r\nTúi chống ẩm.\r\nVới những thông tin bên trên, bạn còn chần chừ gì mà không nhanh tay trang bị đôi giày đá banh nam Biti\'s Football HSM003600 để đáp ứng sở thích đá bóng của mình. Bạn có thể ghé qua trực tiếp tại các chuỗi cửa hàng của Biti’s hoặc truy cập vào website Bitis.com.vn và liên hệ hotline để đặt mua hàng nhanh nhất nhé!'),
(5, 8, 'Đôi giày là phụ kiện thể hiện niềm đam mê và cá tính của người mang, với thiết kế thời trang, năng động, trẻ trung phù hợp với mọi lứa tuổi sẽ làm nổi bật lên cá tính, phong cách của bạn.\r\n\r\nNhiều màu sắc, mẫu để lựa chọn làm mới phong cách hàng ngày.\r\n\r\nKhông chỉ phụ nữ, hiện nay, thời trang dành cho nam giới ngày càng phong phú, đa dạng và được nhiều người quan tâm. Để thể hiện mình là người lịch sự, các bạn nam đều phải để ý để vẻ ngoài của mình mỗi khi đi ra ngoài. Đặc biệt, kết hợp trang phục với cá phụ kiện thời trang là vô cùng quan trong. Một đôi giày sẽ giúp bạn thể hiện phong cách của riêng mình.\r\n\r\nĐặc điểm nổi bật của sản phẩm\r\n\r\nChất liệu bền đẹp: Được làm từ da chất lượng cao, giày tây da nam dây luôn mềm mại và bền chắc. Do đó, bạn sẽ dễ dàng bảo quản và vệ sinh.\r\n\r\nThiết kế trẻ trung, kiểu dáng tinh tế giữa nét cổ điển và hiện đại, tạo nên sự hài hòa.\r\n\r\nĐường may tỉ mỉ chắc chắn: Với đường may tỉ mỉ và tinh tế đảm bảo độ bền chắc trong suốt thời gian bạn sử dụng, giày nam sẽ mang đến cho bạn vẻ đẹp thật cá tính và lịch lãm.\r\n\r\nDễ phối trang phục: Sản phẩm với gam màu truyền thống, không chỉ giúp bạn thể hiện phong cách thời trang cực kỳ nam tính và lịch lãm mà còn giúp dễ dàng khi phối cùng nhiều trang phục như: quần jean, áo thun hay phụ kiện khác để trở nên thật cá tính và thời trang.\r\n\r\n- Có kèm bàn chải đánh giày.\r\n\r\n- Có dây buộc.\r\n\r\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.'),
(6, 14, 'BITI’S HUNTER RUNNING - GIÀY CHẠY BỘ THẾ HỆ ĐẾ VƯỢT TRỘI MỚI TỪ BITI\'S HUNTER \r\nGiày Chạy Bộ Biti\'s Hunter Running White DSWH08300 màu trắng dành cho nữ được yêu thích bởi thiết kế đầy trẻ trung và cá tính. Với bộ đế Lite Bounce Cushion độc quyền từ Biti’s Hunter, mang đến trải nghiệm thoải mái, êm ái nhất, có thể chạy mọi lúc mọi nơi.\r\n\r\nĐế giày\r\nBiti\'s Hunter Running White DSWH08300 sử dụng bộ đế Lite Bounce với các đặc điểm:\r\n\r\nĐế ngoài: \r\n\r\nĐế ngoài được đệm cao su ở gót nhiều và phần trước, tạo được lựa kéo tốt, tăng thêm sự ma sát với đường, giúp chạy bền bỉ giảm đuối sức.\r\nĐế trong (lót giày): \r\n\r\nLót đế hai lớp Ortholite và Eva êm ái, thoải mái, ôm vừa vặn, trọn lòng bàn chân.\r\nĐế giữa (midsole): \r\n\r\nCông nghệ Lite Bounce Cushion độc quyền đây là công nghệ đế vượt trội mới của Biti’s Hunter, làm từ cao su non với đặc điểm siêu bền, thấm hút siêu êm ái, công nghệ hai lớp – tiếp đất êm, phản hồi lực mạnh mẽ với độ đàn hồi vượt trội >50%, cho đường chạy nhẹ như bay.\r\nThân trên giày (Upper)\r\nChất liệu: Thiết kế vải dệt Jacquard với cấu trúc sợi đan tạo sự mềm mại, uyển chuyển khi sử dụng. Ôm trọn bàn chân, có độ thoáng khí, thấm hút mồ hôi hiệu quả.\r\nPhần lưỡi gà được thiết kế dính liền với thân giày, chất liệu có độ co giãn cao nên có thể dễ dàng mang và tháo giày mà không cần phải tháo dây.\r\nMàu sắc\r\nCó màu trắng cơ bản giúp nàng dễ phối đồ từ thể thao tới trang phục hàng ngày.\r\nDo màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%. \r\nSize giày\r\nBiti\'s Hunter Running White DSWH08300 có size chuẩn từ 35-39 được thiết kế để vừa vặn và ôm sát chân, tạo cảm giác thoải mái khi sử dụng hàng ngày.\r\nBảo hành\r\nBiti’s áp dụng chính sách bảo hành cho mọi sản phẩm trong vòng 3 tháng kể từ thời điểm mua hàng cho mọi vấn đề phát sinh đến từ bên cung cấp. Ngoài ra, quý khách còn được bảo hành trọn đời sản phẩm khi bị bong keo, đứt chỉ.\r\nÁp dụng chính sách đổi size trong vòng 7 ngày nếu chưa phù hợp hay đổi sản phẩm lỗi trong vòng 7 ngày (kể từ thời điểm mua hàng) theo chính sách đổi trả được quy định\r\nTính năng và lợi ích nổi bật\r\nKiểu dáng thon gọn, mũi và form ôm vừa vặn từ gót lên đến cổ chân, đem lại thoải mái khi vận động và di chuyển. Thiết kế dây giày cũng giúp bạn có thể điều chỉnh để phù hợp với kích cỡ của chân.\r\nTem TPU định hình và trợ lực gót chân nhẹ nhàng hơn khi di chuyển\r\nTrang bị Pulltab xuất hiện trên lưỡi gà và sau gót giúp mang giày dễ dàng hơn.\r\nĐặc biệt, đôi giày Biti\'s Hunter Running White DSWH08300 ra đời giúp bạn bộ có hành trình chạy marathon đường dài êm ái, hạn chế phát sinh chấn thương.\r\nNgoài ra, công nghệ LITE BOUNCE độc quyền mang lại phản hồi lực nhịp nhàng, đảm bảo người chạy bộ luôn sự sung sức.\r\nCó dây buộc.\r\nCó thể cung cấp linh hoạt cho chân, giúp người sử dụng dễ dàng thực hiện các động tác và chuyển động.\r\nSản phẩm bao gồm\r\nHộp giày giấy bìa cứng cáp giúp bảo quản giày tốt hơn.\r\nDây giày chắc chắn\r\nTúi chống ẩm.\r\nBiti\'s Hunter Running White DSWH08300 là sự lựa chọn hoàn hảo cho các chuyến leo núi, trekking hay các hoạt động ngoài trời khác. Hãy đặt hàng ngay hôm nay để trải nghiệm sự thoải mái và phong cách độc đáo mà sản phẩm mang lại, đặc biệt Biti\'s thường xuyên có nhiều chương trình khuyến mãi hấp dẫn cho quý khách hàng. '),
(7, 16, 'Có phải bạn muốn diện những bộ cánh lộng lẫy khi ra đường, phối đồ cực thời trang để “cháy” với những tấm ảnh, nhưng thời tiết sáng nắng chiều mưa khiến công cuộc “sống ảo” của bạn không thuận lợi? Đừng lo, Biti’s gợi ý đến bạn sản phẩm Dép Eva Phun Nữ Biti\'s BEW000900 vừa thời trang vừa không lo ướt sũng khi trời mưa.\r\n\r\nĐế dép\r\nĐế dép được hãng đầu tư chỉn chu khi sử dụng chất liệu IP siêu nhẹ và siêu êm, giúp đôi chân bạn luôn thoải mái ngay cả khi mang dép suốt ngày dài. Chưa kể, chất liệu IP còn có khả năng kháng nước, chống biến dạng, cong vênh, đàn hồi tốt, không lo gãy form nếu bạn vô tình uốn gập dép.\r\nPhần đáy đế dép có thiết kế hoa văn chìm nổi ấn tượng. Ngoài tạo nên sự mới lạ, những vân rãnh này còn giúp ma sát với mặt đường, từ đó hạn chế trơn trượt, té ngã khi di chuyển dưới trời mưa.\r\nThân dép\r\nQuai dép nữ Biti\'s BEW000900 được làm từ chất liệu EVA phun liền quai, mang đến kết cấu liền kề tinh tế. Đồng thời, chất liệu này còn có khả năng chống nước và bụi bẩn tối ưu.\r\nPhần thân trên được thiết kế thoáng khí với các lỗ đan xen, mang lại hiệu quả thoát mồ hôi, hơi ẩm, không gây bí bách hay mùi hôi. Do đó, dù bạn sử dụng dép vào mùa hè nóng nực hay mùa mưa ẩm ướt cũng rất phù hợp.\r\nBên trên còn có các sticker 3D đủ màu sắc gắn trên thân dép, lấy cảm hứng từ bộ sưu tập thức ăn nhanh lạ mắt, giúp sản phẩm trông ấn tượng và nổi bật hơn. \r\nMàu sắc\r\nSản phẩm hiện có 4 màu, gồm đen đơn giản, hay các màu sắc ngọt ngào khác như trắng, hồng, kem.\r\nMàu sắc thực tế có thể chênh lệch 3 - 5% tùy vào điều kiện ánh sáng và màn hình.\r\nKích cỡ\r\nSản phẩm đang được bày bán từ size 35 - 39 tại tất cả cửa hàng Biti’s trên toàn quốc. \r\nBạn có thể chọn size như bình thường, hoặc đến hệ thống Biti’s và trực tiếp trải nghiệm.\r\nBảo hành\r\nSản phẩm được bảo hành trong vòng 3 tháng kể từ thời điểm mua hàng. Ngoài ra sản phẩm còn được bảo hành trọn đời với lỗi bong keo, đứt chỉ (vật tư của sản phẩm đủ điều kiện tái chế không bị rách,…)\r\nĐổi size giày trong vòng 7 ngày, đổi sản phẩm lỗi trong vòng 7 ngày, kể từ thời điểm mua hàng, nếu sản phẩm vẫn đáp ứng chính sách đổi trả. Điều kiện và quy định đổi trả, quý khách vui lòng tham khảo trên website chính thức. \r\nTính năng và lợi ích nổi bật\r\nSản phẩm có thiết kế đơn giản nhưng nổi bật, với sự phối màu tinh tế giữa màu dép và các sticker gắn kèm.\r\nCó tính ứng dụng cao, có thể mang đi học, đi chơi, đi chụp ảnh, dã ngoại,... trong mọi thời tiết.\r\nĐế IP nhẹ êm, cùng với hệ thống thoát khí tốt giúp bạn thoải mái sử dụng hàng ngày mà không lo bí bách hay gây mùi hôi.\r\nSản phẩm được thiết kế phù hợp xu hướng hiện nay, khiến các bạn nữ ngất ngây ngay từ lần đầu tiên nhìn thấy.\r\nPhần quai hậu có thể đẩy ra trước hoặc sau, “hô biến” dép trở thành đôi giày mang đi học.\r\nSản phẩm bao gồm\r\nDép.\r\nTúi chống ẩm.\r\nTrên đây là tất tần tật thông tin về sản phẩm Dép Eva Phun Nữ Biti\'s BEW000900 cho bạn tham khảo. Nếu có hứng thú với sản phẩm, bạn có thể ghé đến các cửa hàng Biti’s trên toàn quốc để trực tiếp trải nghiệm, hoặc truy cập bitis.com.vn để được nhân viên tư vấn nhé!'),
(8, 20, 'Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%'),
(9, 24, 'Sandal Biti\'s Bé Gái\r\n\r\nQuai vải\r\n\r\nĐế TPR\r\n\r\nCao 2 cm\r\n\r\nDo màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.'),
(10, 64, 'asdnmfbmbtjkl3fiourh oi2u giowy ioty23 4giwhg2 uio34y '),
(11, 65, 'demo dmoe demo dmoe demo dmoe demo dmoe demo dmoe demo dmoe demo dmoe demo dmoe demo dmoe demo dmoe demo dmoe demo dmoe demo dmoe demo dmoe demo dmoe demo dmoe '),
(12, 66, 'aksdlhfaklshdfk asdkl fajklsdh fjklasdhlfjka hsdjklfhasdklfhasdjkl hfajklsh aflk shdjklf hskljadh fjklashdjklfa hsdjkla hsfjkl hk'),
(13, 0, ''),
(14, 1, 'aksdfhaklsdjh a sdklfh asldkjh laksdhklajsdh flakjsdh kafjsd hlakfdksh'),
(15, 1, 'aksdfhaklsdjh a sdklfh asldkjh laksdhklajsdh flakjsdh kafjsd hlakfdksh'),
(16, 0, ''),
(17, 1, 'aksdfhaklsdjh a sdklfh asldkjh laksdhklajsdh flakjsdh kafjsd hlakfdksh'),
(18, 0, ''),
(19, 2, 'k1io41823 794172 3094712308974yiuh1236dfkh 3yy2089q7s'),
(20, 0, ''),
(21, 4, 'ajkdsfhkashd qwu hasdjkfh sly fklasdh fasyoiy23y'),
(22, 0, ''),
(23, 23, 'kljlkad asldk jfasjkd klfqwje ouasdkfa skldjf wej '),
(24, 0, ''),
(25, 11, 'kskl skd hajksd hfkajshd fahs dlahfsdjkl '),
(26, 0, ''),
(27, 22, 'asdjlfhaskdjhfq wio u asdkj fh2i3hsfklashdk fasjkld hfkashd klfh asjkldh 23asdkjh faklsd h'),
(28, 67, 'lasd ufklasjd kfj wklej rusadjf asdjfioqwue fasdj fkqwu asd,j k');

-- --------------------------------------------------------

--
-- Table structure for table `discount`
--

CREATE TABLE `discount` (
  `id` int(11) NOT NULL,
  `productID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `discount`
--

INSERT INTO `discount` (`id`, `productID`) VALUES
(1, 2),
(2, 4),
(3, 6),
(4, 8),
(5, 10),
(6, 12),
(7, 14),
(8, 16),
(9, 18),
(10, 20),
(11, 22),
(12, 24),
(13, 1),
(14, 3),
(15, 5),
(16, 7),
(17, 9),
(18, 11),
(19, 13),
(20, 15),
(21, 17),
(22, 19),
(23, 21),
(24, 23);

-- --------------------------------------------------------

--
-- Table structure for table `new`
--

CREATE TABLE `new` (
  `id` int(11) NOT NULL,
  `productID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `new`
--

INSERT INTO `new` (`id`, `productID`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15),
(16, 16),
(17, 17),
(18, 18),
(19, 19),
(20, 20),
(21, 21),
(22, 22),
(23, 23),
(24, 24);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `a_id` int(50) NOT NULL,
  `total` mediumint(200) NOT NULL,
  `billing_address` varchar(180) NOT NULL,
  `date` varchar(100) NOT NULL,
  `status` varchar(150) NOT NULL,
  `note` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `outstanding`
--

CREATE TABLE `outstanding` (
  `id` int(11) NOT NULL,
  `productID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `outstanding`
--

INSERT INTO `outstanding` (`id`, `productID`) VALUES
(1, 2),
(2, 4),
(3, 1),
(4, 3),
(5, 6),
(6, 8),
(7, 5),
(8, 7),
(9, 10),
(10, 12),
(11, 9),
(12, 11),
(13, 14),
(14, 16),
(15, 13),
(16, 15),
(17, 18),
(18, 20),
(19, 17),
(20, 19),
(21, 22),
(22, 24),
(23, 21),
(24, 23);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(50) NOT NULL,
  `ptitle` varchar(250) NOT NULL,
  `pimg` varchar(250) NOT NULL,
  `pprice` varchar(250) NOT NULL,
  `pgender` varchar(100) NOT NULL,
  `pkind` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `ptitle`, `pimg`, `pprice`, `pgender`, `pkind`) VALUES
(1, 'Giày Thể Thao Nam Bitis Hunter Street Còn Gì Dùng Đó HSM006300', 'https://product.hstatic.net/1000230642/product/hsm006300nau__10__f3fb2850cdd545049a232d62dd50950b_large.jpg', '560000', 'NAM', 'HUNTER'),
(2, 'Giày Thể Thao Nam Bitis Hunter X Dune Titan HSM005800', 'https://product.hstatic.net/1000230642/product/hsw005800xam__10__e332c39edb2642bba1c83a98477b713f_large.jpg', '600000', 'NAM', 'HUNTER'),
(3, 'Giày Thể Thao Nam Biti’s Hunter Street đế #BÀO x MARVEL Spiderman - Hunter-verse 2k23 edition HSM001898', 'https://product.hstatic.net/1000230642/product/08b_774a037f29d040d3bd57509f7ecd7e47.png', '800000', 'NAM', 'HUNTER'),
(4, 'Sandal Nam Bitis BDM001577', 'https://product.hstatic.net/1000230642/product/bdm001577den__2__4ea0417daf614f56a20152f6c442e8f0.jpg', '550000', 'NAM', 'SANDAL'),
(5, 'Giày Thể Thao Thông Dụng Nam Bitis Basic BSM000600', 'https://product.hstatic.net/1000230642/product/bsm000600trg__2__dc7ce618c3f14f9283a11fbff9e3b56a.jpg', '720000', 'NAM', 'GIAY_THE_THAO'),
(6, 'Giày Chạy Bộ Nam Bitis Hunter Running DSMH10000', 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-k8iou-color-xam_c0300a46d8944863b7b99f6702abb6b1.jpg', '890000', 'NAM', 'GIAY_CHAY_BO'),
(7, 'Giày Đá Bóng Nam Bitis Hunter Football HSM003600', 'https://product.hstatic.net/1000230642/product/hsm003600cam__2__ebba4c44b4b64642ae2694d0de986b86.jpg', '799000', 'NAM', 'GIAY_DA_BANH'),
(8, 'Giày Da Nam Bitis X DMM371880', 'https://product.hstatic.net/1000230642/product/dmm371880vdb__2__8ff7b0c0fd324878b6322fd045834604.jpg', '1300000', 'NAM', 'GIAY_TAY'),
(9, 'Dép Nam Bitis BPM000200', 'https://product.hstatic.net/1000230642/product/bpm000200nau_3f3dce10d397426996afb71785826ab8.jpg', '300000', 'NAM', 'DEP'),
(10, 'Giày Thể Thao Nữ Gosto GFW018100', 'https://product.hstatic.net/1000230642/product/gfw018100hog__2__0379dd9a60484bd5965aa7839565482c_1024x1024.jpg', '1011000', 'NU', 'GIAY_THE_THAO'),
(11, 'Sandal Nữ Biti\'s Hunter HEW000800', 'https://product.hstatic.net/1000230642/product/hew000800hog_d467a56b559f46c1aaead88baf13e923_1024x1024.jpg', '520000', 'NU', 'SANDAL'),
(12, 'Giày Búp Bê Nữ Biti\'s BBW001688', 'https://product.hstatic.net/1000230642/product/bbw001688xdg2_b324da45894b4547ab16a5e4173e7825_1024x1024.jpg', '369000', 'NU', 'GIAY_BUP_BE'),
(13, 'Giày Bít Thời Trang Nữ Biti\'s BFW003588', 'https://product.hstatic.net/1000230642/product/bfw003588kem__2__f7ddeb5aeb3442539d5740193b53e68d_1024x1024.jpg', '432000', 'NU', 'GIAY_THOI_TRANG'),
(14, 'Giày Chạy Bộ Nữ Biti\'s Hunter Running DSWH08300', 'https://product.hstatic.net/1000230642/product/hay-bo-nu-biti-s-hunter-running-tiger-dswh08300cam-cam-ls3g5-color-cam_a6f2a5322e6742aa83eb8c32b20f1485_1024x1024.jpg', '735750', 'NU', 'GIAY_CHAY_BO'),
(15, 'Giày Thể Thao Nữ Biti\'s BSW002300', 'https://product.hstatic.net/1000230642/product/bsw002300xam2_0266e9c574c845a2b2c4f61623e26c11_1024x1024.jpg', '555000', 'NU', 'GIAY_THE_THAO'),
(16, 'Dép Eva Phun Nữ Biti\'s BEW000900', 'https://product.hstatic.net/1000230642/product/bew000900hog__2__28ba40e840084077a34276a4edac5758_1024x1024.jpg', '265000', 'NU', 'DEP'),
(17, 'Giày Thể Thao Bé Trai Biti\'s Spiderman BSB004398', 'https://product.hstatic.net/1000230642/product/bsb004398xdg__2__cc74839870d743eda169ffebddbbcedd_1024x1024.jpg', '579000', 'BE_TRAI', 'GIAY_THE_THAO'),
(18, 'Sandal Bé Trai Biti\'s BEB002100', 'https://product.hstatic.net/1000230642/product/beb002100cam_e8107d2c85ce48f6a73264ec5fd711bc_1024x1024.jpg', '305000', 'BE_TRAI', 'SANDAL'),
(19, 'Dép Eva Bé Trai Biti\'s DEB010101', 'https://product.hstatic.net/1000230642/product/deb010101trg__2__1d14e5c7ef184088bbeb33003f28d151_1024x1024.jpg', '221000', 'BE_TRAI', 'DEP'),
(20, 'Giày búp bê bé gái DBB010901', 'https://product.hstatic.net/1000230642/product/ttn_6844_50d2f558d2e74a1f8bd5dcb79a00fd87_1024x1024.jpg', '344000', 'BE_TRAI', 'GIAY_BUP_BE'),
(21, 'Giày Thể Thao Bé Gái Biti\'s BSG002600', 'https://product.hstatic.net/1000230642/product/bsg002600hog__2__7f24ad58575340ba87654040a82889bb_1024x1024.jpg', '447000', 'BE_GAI', 'GIAY_THE_THAO'),
(22, 'Sandal Bé Gái Biti\'s BEG002200', 'https://product.hstatic.net/1000230642/product/beg002200vag__4__270e08ca1e654a84b8ccedaae48618b7_1024x1024.jpg', '310000', 'BE_GAI', 'SANDAL'),
(23, 'Dép Eva Phun Bé Gái Biti\'s E-Cloud BEG001801', 'https://product.hstatic.net/1000230642/product/beg001801vag__2__1f339d6856974ba3ac4df1471d1ddac1_1024x1024.jpg', '128000', 'BE_GAI', 'DEP'),
(24, 'Giày Tập Đi Bé Gái DTG003900', 'https://product.hstatic.net/1000230642/product/giay-tap-di-be-gai-dtg003900cam-cam-u8nfg-color-cam_edbba01013b5474bade2182eb08b24ca_1024x1024.jpg', '172000', 'BE_GAI', 'GIAY_TAP_DI'),
(65, 'demo 11:23 4/5/2024', 'anh chinh new', '11111111', 'NAM', 'DEP'),
(66, 'demo demo demo demo 243:43 23/sdf/we', 'anh 2', '2222222', 'NU', 'SANDAL'),
(67, 'demoemoemdoea sdif a23 123', 'anh chinh', '999000', 'NAM', 'SANDAL');

-- --------------------------------------------------------

--
-- Table structure for table `size`
--

CREATE TABLE `size` (
  `id` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `soluong` int(11) NOT NULL,
  `size` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `size`
--

INSERT INTO `size` (`id`, `productID`, `soluong`, `size`) VALUES
(1, 1, 35, 37),
(2, 1, 47, 40),
(4, 1, 96, 42),
(6, 1, 34, 44),
(7, 1, 16, 45),
(10, 2, 54, 41),
(11, 2, 87, 42),
(12, 2, 92, 43),
(13, 2, 34, 44),
(14, 2, 16, 45),
(15, 3, 23, 39),
(16, 3, 39, 40),
(17, 3, 54, 41),
(18, 3, 87, 42),
(19, 3, 92, 43),
(20, 3, 34, 44),
(21, 3, 16, 45),
(22, 4, 23, 39),
(23, 4, 39, 40),
(24, 4, 54, 41),
(25, 4, 87, 42),
(26, 4, 92, 43),
(27, 4, 34, 44),
(28, 4, 16, 45),
(29, 5, 23, 39),
(30, 5, 39, 40),
(31, 5, 54, 41),
(32, 5, 87, 42),
(33, 5, 92, 43),
(34, 5, 34, 44),
(35, 5, 16, 45),
(36, 6, 23, 39),
(37, 6, 39, 40),
(38, 6, 54, 41),
(39, 6, 87, 42),
(40, 6, 92, 43),
(41, 6, 34, 44),
(42, 6, 16, 45),
(43, 7, 23, 39),
(44, 7, 39, 40),
(45, 7, 54, 41),
(46, 7, 87, 42),
(47, 7, 92, 43),
(48, 7, 34, 44),
(49, 7, 16, 45),
(50, 8, 23, 39),
(51, 8, 39, 40),
(52, 8, 54, 41),
(53, 8, 87, 42),
(54, 8, 92, 43),
(55, 8, 34, 44),
(56, 8, 16, 45),
(57, 9, 23, 39),
(58, 9, 39, 40),
(59, 9, 54, 41),
(60, 9, 87, 42),
(61, 9, 92, 43),
(62, 9, 34, 44),
(63, 9, 16, 45),
(64, 10, 11, 35),
(65, 10, 12, 36),
(66, 10, 11, 37),
(67, 10, 13, 38),
(68, 10, 12, 39),
(69, 11, 16, 35),
(70, 11, 18, 36),
(71, 11, 33, 37),
(72, 11, 37, 38),
(73, 11, 23, 39),
(74, 12, 12, 35),
(75, 12, 16, 36),
(76, 12, 16, 37),
(77, 12, 12, 38),
(78, 12, 11, 39),
(79, 13, 11, 35),
(80, 13, 13, 36),
(81, 13, 11, 37),
(82, 13, 13, 38),
(83, 13, 13, 39),
(84, 14, 33, 35),
(85, 14, 15, 36),
(86, 14, 12, 37),
(87, 14, 11, 38),
(88, 14, 16, 39),
(89, 15, 14, 35),
(90, 15, 14, 36),
(91, 15, 14, 37),
(92, 15, 17, 38),
(93, 15, 18, 39),
(94, 16, 11, 35),
(95, 16, 13, 36),
(96, 16, 11, 37),
(97, 16, 14, 38),
(98, 16, 11, 39),
(99, 16, 12, 40),
(100, 17, 11, 30),
(101, 17, 14, 31),
(102, 17, 11, 32),
(103, 17, 16, 33),
(104, 17, 15, 34),
(105, 17, 11, 35),
(106, 18, 11, 30),
(107, 18, 19, 31),
(108, 18, 11, 32),
(109, 18, 15, 33),
(110, 18, 12, 34),
(111, 19, 12, 30),
(112, 19, 12, 31),
(113, 19, 15, 32),
(114, 19, 11, 33),
(115, 19, 16, 34),
(116, 20, 14, 28),
(117, 20, 15, 29),
(118, 20, 11, 30),
(119, 20, 16, 31),
(120, 20, 11, 32),
(121, 21, 11, 30),
(122, 21, 16, 31),
(123, 21, 11, 32),
(124, 21, 16, 33),
(125, 21, 14, 34),
(126, 22, 11, 35),
(127, 22, 14, 36),
(128, 22, 16, 37),
(129, 22, 11, 38),
(130, 22, 11, 39),
(131, 23, 20, 24),
(132, 23, 11, 25),
(133, 23, 11, 26),
(134, 23, 15, 27),
(135, 23, 12, 28),
(136, 24, 11, 20),
(137, 24, 11, 21),
(138, 24, 15, 22),
(139, 24, 14, 23),
(141, 64, 43, 23),
(142, 64, 13, 34),
(143, 65, 34, 23),
(144, 65, 44, 24),
(145, 65, 78, 25),
(146, 66, 43, 23),
(147, 66, 55, 24),
(148, 66, 88, 25),
(149, 67, 43, 23),
(150, 67, 34, 34),
(151, 67, 43, 28);

-- --------------------------------------------------------

--
-- Table structure for table `subimage`
--

CREATE TABLE `subimage` (
  `id` int(11) NOT NULL,
  `productID` int(11) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subimage`
--

INSERT INTO `subimage` (`id`, `productID`, `img`) VALUES
(1, 1, 'https://product.hstatic.net/1000230642/product/hsm006300nau__10__f3fb2850cdd545049a232d62dd50950b_large.jpg'),
(2, 1, 'https://product.hstatic.net/1000230642/product/hsm006300nau__5__0796b1ba019443c28887441c3fc58c9e.jpg'),
(3, 1, 'https://product.hstatic.net/1000230642/product/hsm006300nau__4__06e23d42a7084abe8248e3477b739c1c.jpg'),
(4, 1, 'https://product.hstatic.net/1000230642/product/hsm006300nau__8__bb6e0325e75a443bae1e30d2b11007e3_large.jpg'),
(5, 1, 'https://product.hstatic.net/1000230642/product/hsm006300nau__6__4e5b7a35fd8441119d57a69604fe83dd_large.jpg'),
(6, 1, 'https://product.hstatic.net/1000230642/product/hsm006300nau__7__12585c3b53794a0089f5c21f2967768b_large.jpg'),
(7, 2, 'https://product.hstatic.net/1000230642/product/hsw005800xam__10__e332c39edb2642bba1c83a98477b713f_large.jpg'),
(8, 2, 'https://product.hstatic.net/1000230642/product/hsw005800xam__5__4d8957499caf49eb94f82b1bbae99dc1_large.jpg'),
(9, 2, 'https://product.hstatic.net/1000230642/product/hsw005800xam__4__06b7a5bfa1f64ebaa7f19f385527776b_large.jpg'),
(10, 2, 'https://product.hstatic.net/1000230642/product/hsw005800xam__7__bac203e149e94d759f8588be0ccf4143_large.jpg'),
(11, 2, 'https://product.hstatic.net/1000230642/product/hsw005800xam__8__18c5b59677ff41e4800b4742d888ea00_large.jpg'),
(12, 2, 'https://product.hstatic.net/1000230642/product/hsw005800xam__6__2013d04823914baeabc103e2e9a92343_large.jpg'),
(13, 3, 'https://product.hstatic.net/1000230642/product/02__1__c82b70b0ca0248a0b38dd171c3a3259a_large.png'),
(14, 3, 'https://product.hstatic.net/1000230642/product/03_a611d7213cc14f5d91bcdefe18724e37_large.png'),
(15, 3, 'https://product.hstatic.net/1000230642/product/07_62a37637988d418cb1ca988193b197d2_large.png'),
(16, 3, 'https://product.hstatic.net/1000230642/product/hsm001898den__2__e97f18376d594007bd65d1de7022fb15_large.jpg'),
(17, 3, 'https://product.hstatic.net/1000230642/product/hsm001898den__3__10d4ac5cd32446cfb4043e54fab8824c_large.jpg'),
(18, 3, 'https://product.hstatic.net/1000230642/product/hsm001898den__4__c1441a1eb0c548de97f5ab9a9b908e47_large.jpg'),
(19, 4, 'https://product.hstatic.net/1000230642/product/bdm001577den__4__0b1de713b2644d009c1713cf5ca5ed15_large.jpg'),
(20, 4, 'https://product.hstatic.net/1000230642/product/bdm001577den__5__d4941313d4c5446ea6a724ed09a2d0fb_large.jpg'),
(21, 4, 'https://product.hstatic.net/1000230642/product/bdm001577den__6__196b5602a938472e8c4958232ddbc9e6_large.jpg'),
(22, 4, 'https://product.hstatic.net/1000230642/product/bdm001577den__10__80c2eacf41a9487986ff7e51e9e555bc_large.jpg'),
(23, 4, 'https://product.hstatic.net/1000230642/product/bdm001577den__7__4710abc05df34910b4806d413f18319c_large.jpg'),
(24, 4, 'https://product.hstatic.net/1000230642/product/bdm001577den__3__44b8ca514944426ba1919eb1bd83babd_large.jpg'),
(25, 5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__4__94266f8069ff4ac49686105f0b2bdd2c_large.jpg'),
(26, 5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__5__7b26d250a70b453f8ba2292c7f8d311f_large.jpg'),
(27, 5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__10__1490f0bcdd4649b18f73017c6c9f2f06_large.jpg'),
(28, 5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__6__b99127a3cb4c428b8f8afabdcf1f48d4_large.jpg'),
(29, 5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__3__3886f199f5894caba94b8019aa6e497e_large.jpg'),
(30, 5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__7__478ee3c6c7374f33b526f445f9100dff_large.jpg'),
(31, 6, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-otjch-color-xam_e696c7663f104389bd7cb6643fd96ebc_large.jpg'),
(32, 6, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-otjch-color-xam_e696c7663f104389bd7cb6643fd96ebc_large.jpg'),
(33, 6, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-0mhwh-color-xam_19903831807a42ac974e1fb3be33a70a_large.jpg'),
(34, 6, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-bbkmo-color-xam_889d079814b7447bb5d4b92b8f068d64_large.jpg'),
(35, 6, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-ebgzk-color-xam_cca5961011ea439fb8887bc015d0c338_large.jpg'),
(36, 6, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-6q57j-color-xam_a8463c6a86a44bc59c1e908c9a2050ee_large.jpg'),
(37, 7, 'https://product.hstatic.net/1000230642/product/hsm003600cam__4__c8f18003aac449bb8b85e9d8dde75608_large.jpg'),
(38, 7, 'https://product.hstatic.net/1000230642/product/hsm003600cam__5__656911ee3f8b40bdac0ed41a762fd5ee_large.jpg'),
(39, 7, 'https://product.hstatic.net/1000230642/product/hsm003600cam__10__37b06c4f3fa54ef8a3999b76afdef645_large.jpg'),
(40, 7, 'https://product.hstatic.net/1000230642/product/hsm003600cam__6__53d01a00db48476c9367ec8c85b2fde2_large.jpg'),
(41, 7, 'https://product.hstatic.net/1000230642/product/hsm003600cam__7__16c9cb8719ff432e991c305289ac8d19_large.jpg'),
(42, 7, 'https://product.hstatic.net/1000230642/product/hsm003600cam__3__d95af1eec7474e41b10c8e723f829750_large.jpg'),
(43, 8, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__4__99a7a2390f514d0f8c4614d21821e6ee_large.jpg'),
(44, 8, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__4__99a7a2390f514d0f8c4614d21821e6ee_large.jpg'),
(45, 8, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__1__efc31df2ac2d4ac2b7842421a24946e6_large.jpg'),
(46, 8, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__5__2bdf05422820415d82c3b5b801031289_large.jpg'),
(47, 8, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__6__38250fc558334d63a166a903a9766524_large.jpg'),
(48, 8, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__3__6b5fbd5f1b3f453295133047489ae0b6_large.jpg'),
(49, 9, 'https://product.hstatic.net/1000230642/product/bpm000200nau_3f3dce10d397426996afb71785826ab8_grande.jpg'),
(50, 9, 'https://product.hstatic.net/1000230642/product/bpm000200nau_3f3dce10d397426996afb71785826ab8_grande.jpg'),
(51, 9, 'https://product.hstatic.net/1000230642/product/bpm000200nau_3f3dce10d397426996afb71785826ab8_grande.jpg'),
(52, 9, 'https://product.hstatic.net/1000230642/product/bpm000200den_7ab91e86c1ea48b0a8b6d9e07ba04858_grande.jpg'),
(53, 9, 'https://product.hstatic.net/1000230642/product/bpm000200den_7ab91e86c1ea48b0a8b6d9e07ba04858_grande.jpg'),
(54, 9, 'https://product.hstatic.net/1000230642/product/bpm000200den_7ab91e86c1ea48b0a8b6d9e07ba04858_grande.jpg'),
(55, 10, 'https://product.hstatic.net/1000230642/product/gfw018100hog__10__c98c2c53dce9424c89564942dd025994_large.jpg'),
(56, 10, 'https://product.hstatic.net/1000230642/product/gfw018100hog__5__bbd7e496d4fb41cf99374253aeb02f8a_large.jpg'),
(57, 10, 'https://product.hstatic.net/1000230642/product/gfw018100hog__4__e1d90a0320a84c13b93c15c0c64bd5a5_large.jpg'),
(58, 10, 'https://product.hstatic.net/1000230642/product/gfw018100hog__8__2587e016ea3e42a183e7fd0555748be2_large.jpg'),
(59, 10, 'https://product.hstatic.net/1000230642/product/gfw018100hog__6__dd211a89a7504e0b9f041054125d5220_large.jpg'),
(60, 10, 'https://product.hstatic.net/1000230642/product/gfw018100hog__7__0bc44560d36f4200ab2d622f377808d6_large.jpg'),
(61, 11, 'https://product.hstatic.net/1000230642/product/hew000800kem_676108b0c3ea4258be2ab513c61bec34_1024x1024.jpg'),
(62, 11, 'https://product.hstatic.net/1000230642/product/hew000800kem_676108b0c3ea4258be2ab513c61bec34_1024x1024.jpg'),
(63, 11, 'https://product.hstatic.net/1000230642/product/hew000800kem_676108b0c3ea4258be2ab513c61bec34_1024x1024.jpg'),
(64, 11, 'https://product.hstatic.net/1000230642/product/hew000800den_8dcdcd44e5054054ab2f1b8cf98ad243_1024x1024.jpg'),
(65, 11, 'https://product.hstatic.net/1000230642/product/hew000800den_8dcdcd44e5054054ab2f1b8cf98ad243_1024x1024.jpg'),
(66, 11, 'https://product.hstatic.net/1000230642/product/hew000800den_8dcdcd44e5054054ab2f1b8cf98ad243_1024x1024.jpg'),
(67, 12, 'https://product.hstatic.net/1000230642/product/bbw001688xdg5_33e7f27a9bc54f0eb9864024793fe512_large.jpg'),
(68, 12, 'https://product.hstatic.net/1000230642/product/bbw001688xdg4_db8448bea7a24a2a822da4969a16e98c_large.jpg'),
(69, 12, 'https://product.hstatic.net/1000230642/product/bbw001688xdg10_b5a4a743d75e4e5f9661d30b69adf7d2_large.jpg'),
(70, 12, 'https://product.hstatic.net/1000230642/product/bbw001688xdg7_093494f60e4d4587bbbfa93658e38bb3_large.jpg'),
(71, 12, 'https://product.hstatic.net/1000230642/product/bbw001688xdg3_e24572cd44f144e1bfc2f73a819d664c_large.jpg'),
(72, 12, 'https://product.hstatic.net/1000230642/product/bbw001688xdg8_b5a1c870522443e5930ed7f7e38cba67_large.jpg'),
(73, 13, 'https://product.hstatic.net/1000230642/product/bfw003588kem__6__dbe18d85821f4643b38cbd3fce1d2bd7_large.jpg'),
(74, 13, 'https://product.hstatic.net/1000230642/product/bfw003588kem__10__2d270cee81d44d4ab768d7861a452fd7_large.jpg'),
(75, 13, 'https://product.hstatic.net/1000230642/product/bfw003588kem__5__bf842a58d3a54b93857c9e47e8746999_large.jpg'),
(76, 13, 'https://product.hstatic.net/1000230642/product/bfw003588kem__4__b0f6011dac6040c494806166d875dd12_large.jpg'),
(77, 13, 'https://product.hstatic.net/1000230642/product/bfw003588kem__7__8b9af68760174da5a319d39877f95156_large.jpg'),
(78, 13, 'https://product.hstatic.net/1000230642/product/bfw003588kem__8__0779d94f843e4969892d8b012921c677_large.jpg'),
(79, 14, 'https://product.hstatic.net/1000230642/product/hay-bo-nu-biti-s-hunter-running-tiger-dswh08300cam-cam-44wku-color-cam_9508ea8371684fcaa09ac74fa5ecb6da_large.jpg'),
(80, 14, 'https://product.hstatic.net/1000230642/product/hay-bo-nu-biti-s-hunter-running-tiger-dswh08300cam-cam-a3del-color-cam_dc9795c4a4ab4ed9ae8fd3f4cc23bf79_large.jpg'),
(81, 14, 'https://product.hstatic.net/1000230642/product/hay-bo-nu-biti-s-hunter-running-tiger-dswh08300cam-cam-za0yv-color-cam_3c66a580b8d64dd29b3ec149ac932916_large.jpg'),
(82, 14, 'https://product.hstatic.net/1000230642/product/hay-bo-nu-biti-s-hunter-running-tiger-dswh08300cam-cam-qupje-color-cam_f97ec97e515c4094a6c497f8f2cad933_large.jpg'),
(83, 14, 'https://product.hstatic.net/1000230642/product/hay-bo-nu-biti-s-hunter-running-black-dswh08300den-den-xd3z1-color-den_28ba4c3fb40948a7a0020be6276c7123_large.jpg'),
(84, 14, 'https://product.hstatic.net/1000230642/product/hay-bo-nu-biti-s-hunter-running-black-dswh08300den-den-ye3e8-color-den_53c4eef3a3074f6fae93e19525a6fbae_large.jpg'),
(85, 15, 'https://product.hstatic.net/1000230642/product/bsw002300xam10_82cc3c44d6e545e6aececd3df4ff04da_large.jpg'),
(86, 15, 'https://product.hstatic.net/1000230642/product/bsw002300xam5_b91b4c2359b743e88cfd3781935d2aaa_large.jpg'),
(87, 15, 'https://product.hstatic.net/1000230642/product/bsw002300xam4_065bf1695fc6497c8241ce154e6a8799_large.jpg'),
(88, 15, 'https://product.hstatic.net/1000230642/product/bsw002300xam6_4b91c5e37585492f825525802e08c5c9_large.jpg'),
(89, 15, 'https://product.hstatic.net/1000230642/product/bsw002300xam7_52d5103795224652a5bc7e736004c9eb_large.jpg'),
(90, 15, 'https://product.hstatic.net/1000230642/product/bsw002300xam3_c1ed99c8ad3849b88808c9c46d884a47_large.jpg'),
(91, 16, 'https://product.hstatic.net/1000230642/product/bew000900hog__10__cd1e44f68fbb447a9ab2ff1bff7ca66c_large.jpg'),
(92, 16, 'https://product.hstatic.net/1000230642/product/bew000900hog__5__15363fba742b44b581f2522c16fa08eb_large.jpg'),
(93, 16, 'https://product.hstatic.net/1000230642/product/bew000900hog__4__25a3821ebc5b4d40a90b280bd6ec15d7_large.jpg'),
(94, 16, 'https://product.hstatic.net/1000230642/product/bew000900hog__8__88cf705548404d20a7db1c675ce5a6ee_large.jpg'),
(95, 16, 'https://product.hstatic.net/1000230642/product/bew000900hog__3__ebc9392f858f404f9e73806de148b89e_large.jpg'),
(96, 16, 'https://product.hstatic.net/1000230642/product/bew000900hog__6__3c338ff2744e4f01b3f377310784cab6_large.jpg'),
(97, 17, 'https://product.hstatic.net/1000230642/product/bsb004398xdg__4__09dc05a4c81e496e8b0a173d77220800_large.jpg'),
(98, 17, 'https://product.hstatic.net/1000230642/product/bsb004398xdg__5__10c811cb9be441459b8388bfb247a4e6_large.jpg'),
(99, 17, 'https://product.hstatic.net/1000230642/product/bsb004398xdg__6__beb8c624b64c4843a2d2ea3389f34af6_large.jpg'),
(100, 17, 'https://product.hstatic.net/1000230642/product/bsb004398xdg__10__74cd96a1255f4cf0a58305bcafff29c8_large.jpg'),
(101, 17, 'https://product.hstatic.net/1000230642/product/bsb004398xdg__3__eac7d5645ebb4eac97be6f74bc8b9bc1_large.jpg'),
(102, 17, 'https://product.hstatic.net/1000230642/product/bsb004398xdg__7__9ece3c4c11be47849e8c11d1206ea9dd_large.jpg'),
(103, 18, 'https://product.hstatic.net/1000230642/product/beb002100cam_e8107d2c85ce48f6a73264ec5fd711bc_1024x1024.jpg'),
(104, 18, 'https://product.hstatic.net/1000230642/product/beb002100cam_e8107d2c85ce48f6a73264ec5fd711bc_1024x1024.jpg'),
(105, 18, 'https://product.hstatic.net/1000230642/product/beb002100cam_e8107d2c85ce48f6a73264ec5fd711bc_1024x1024.jpg'),
(106, 18, 'https://product.hstatic.net/1000230642/product/beb002100vag_d6e2a8cf9f85471790623871eb823aca_1024x1024.jpg'),
(107, 18, 'https://product.hstatic.net/1000230642/product/beb002100vag_d6e2a8cf9f85471790623871eb823aca_1024x1024.jpg'),
(108, 18, 'https://product.hstatic.net/1000230642/product/beb002100vag_d6e2a8cf9f85471790623871eb823aca_1024x1024.jpg'),
(109, 19, 'https://product.hstatic.net/1000230642/product/deb010101trg__4__09960109e9b14c4d8de5042a01a422a3_large.jpg'),
(110, 19, 'https://product.hstatic.net/1000230642/product/deb010101trg__5__4b273d16f94d4a5f8e370ba665405aaa_large.jpg'),
(111, 19, 'https://product.hstatic.net/1000230642/product/deb010101trg__6__18079d0865c5461ab8b9d564e2f69258_large.jpg'),
(112, 19, 'https://product.hstatic.net/1000230642/product/deb010101trg__10__2c8f594b5b204af6b18f7b33034e185a_large.jpg'),
(113, 19, 'https://product.hstatic.net/1000230642/product/deb010101trg__7__26e827265f2a4dca88fda7779ffc24e9_large.jpg'),
(114, 19, 'https://product.hstatic.net/1000230642/product/deb010101trg__3__c0dbe6a1e022444b93d05542b3d9e3b0_large.jpg'),
(115, 20, 'https://product.hstatic.net/1000230642/product/ttn_6845_fa41016b09714c1ba0cd28cfc7998327_large.jpg'),
(116, 20, 'https://product.hstatic.net/1000230642/product/ttn_6846_3300aa6a1c3740d9b64f2314498b1b88_large.jpg'),
(117, 20, 'https://product.hstatic.net/1000230642/product/ttn_6847_ac2d0d24a6174353863113c072acb0e0_large.jpg'),
(118, 20, 'https://product.hstatic.net/1000230642/product/ttn_6848_bdedb42a6d9f4df4bfd9b42634383c28_large.jpg'),
(119, 20, 'https://product.hstatic.net/1000230642/product/ttn_6849_ae1f530e71f24a0ea487ca2ea41c3592_large.jpg'),
(120, 20, 'https://product.hstatic.net/1000230642/product/ttn_6850_3e55c75f5d8744e7b7eb042c6421792a_large.jpg'),
(121, 21, 'https://product.hstatic.net/1000230642/product/bsg002600hog__10__f6104e6cd9e549049a65ed2af209042f_large.jpg'),
(122, 21, 'https://product.hstatic.net/1000230642/product/bsg002600hog__5__64b7be96e2384775b103f45433419e92_large.jpg'),
(123, 21, 'https://product.hstatic.net/1000230642/product/bsg002600hog__4__6f8bf72165814940a14b996d8667be85_large.jpg'),
(124, 21, 'https://product.hstatic.net/1000230642/product/bsg002600hog__8__c6c1afb5a0824f49b3997e989304e213_large.jpg'),
(125, 21, 'https://product.hstatic.net/1000230642/product/bsg002600hog__6__d129e67dafc54610b9142e4ac3a4ffb4_large.jpg'),
(126, 21, 'https://product.hstatic.net/1000230642/product/bsg002600hog__7__a678ef9b3c574028ba0eb9e4aba6f150_large.jpg'),
(127, 22, 'https://product.hstatic.net/1000230642/product/beg002200vag__5__27af10f8b3f2441b9b39589e37a788b4_large.jpg'),
(128, 22, 'https://product.hstatic.net/1000230642/product/beg002200vag__6__49353a2cdd304bcb8edddb3dad2099e2_large.jpg'),
(129, 22, 'https://product.hstatic.net/1000230642/product/beg002200vag__10__cc3af31fab2b47e8874edc58dd35c50a_large.jpg'),
(130, 22, 'https://product.hstatic.net/1000230642/product/beg002200vag__3__548c7541f99446048d53f1890a196952_large.jpg'),
(131, 22, 'https://product.hstatic.net/1000230642/product/beg002200vag__7__b926c044172146209478f9f3ae95f6da_large.jpg'),
(132, 22, 'https://product.hstatic.net/1000230642/product/beg002200vag__8__cbeea712c323469da1dfdf2fc92f91a6_large.jpg'),
(133, 23, 'https://product.hstatic.net/1000230642/product/beg001801vag__3__ece61c35e1584849a9ff62e5b2fb4718_large.jpg'),
(134, 23, 'https://product.hstatic.net/1000230642/product/beg001801vag__4__f7a78da122ed45eca6ec65e1ce23d20d_large.jpg'),
(135, 23, 'https://product.hstatic.net/1000230642/product/beg001801vag__5__5c8e3d5af5ab45288e2d73a81f2a4f09_large.jpg'),
(136, 23, 'https://product.hstatic.net/1000230642/product/beg001801vag__6__c51881bd771f4715b7e4f7751cfb9c6e_large.jpg'),
(137, 23, 'https://product.hstatic.net/1000230642/product/beg001801vag__7__8a19f73c8f4a471399408ec508e63ab2_large.jpg'),
(138, 23, 'https://product.hstatic.net/1000230642/product/beg001801vag__8__d139a993522d4989b2c37d610eea820a_large.jpg'),
(139, 24, 'https://product.hstatic.net/1000230642/product/giay-tap-di-be-gai-dtg003900cam-cam-cz9u6-color-cam_d47f2083e52246e78936c13635394aa3_large.jpg'),
(140, 24, 'https://product.hstatic.net/1000230642/product/giay-tap-di-be-gai-dtg003900cam-cam-k1fsf-color-cam_00524debd2c8464abe06b84cc2da5651_large.jpg'),
(141, 24, 'https://product.hstatic.net/1000230642/product/giay-tap-di-be-gai-dtg003900cam-cam-qfaaj-color-cam_b4dbc5aca30e4bc2a5d618a23466fcdf_large.jpg'),
(142, 24, 'https://product.hstatic.net/1000230642/product/giay-tap-di-be-gai-dtg003900cam-cam-cz9u6-color-cam_d47f2083e52246e78936c13635394aa3_large.jpg'),
(143, 24, 'https://product.hstatic.net/1000230642/product/giay-tap-di-be-gai-dtg003900cam-cam-k1fsf-color-cam_00524debd2c8464abe06b84cc2da5651_large.jpg'),
(144, 24, 'https://product.hstatic.net/1000230642/product/giay-tap-di-be-gai-dtg003900cam-cam-qfaaj-color-cam_b4dbc5aca30e4bc2a5d618a23466fcdf_large.jpg'),
(145, 64, 'sdfgdfgdf'),
(146, 64, 'sdfgwe4'),
(147, 64, 'wert43tgr'),
(148, 65, 'anh 543'),
(151, 65, 'anh chinh new'),
(152, 66, 'anh 1'),
(153, 66, 'anh 2'),
(154, 66, 'anh 3'),
(155, 66, 'anh 4'),
(156, 0, ''),
(157, 3, 'https://product.hstatic.net/1000230642/product/08b_774a037f29d040d3bd57509f7ecd7e47.png'),
(158, 0, ''),
(160, 0, ''),
(161, 4, 'https://product.hstatic.net/1000230642/product/bdm001577den__2__4ea0417daf614f56a20152f6c442e8f0.jpg'),
(162, 0, ''),
(163, 5, 'https://product.hstatic.net/1000230642/product/bsm000600trg__2__dc7ce618c3f14f9283a11fbff9e3b56a.jpg'),
(164, 0, ''),
(165, 6, 'https://product.hstatic.net/1000230642/product/hay-bo-nam-biti-s-hunter-running-gray-dsmh10000xam-xam-k8iou-color-xam_c0300a46d8944863b7b99f6702abb6b1.jpg'),
(166, 0, ''),
(167, 7, 'https://product.hstatic.net/1000230642/product/hsm003600cam__2__ebba4c44b4b64642ae2694d0de986b86.jpg'),
(168, 0, ''),
(169, 8, 'https://product.hstatic.net/1000230642/product/dmm371880vdb__2__8ff7b0c0fd324878b6322fd045834604.jpg'),
(170, 0, ''),
(171, 9, 'https://product.hstatic.net/1000230642/product/bpm000200nau_3f3dce10d397426996afb71785826ab8.jpg'),
(172, 0, ''),
(173, 10, 'https://product.hstatic.net/1000230642/product/gfw018100hog__2__0379dd9a60484bd5965aa7839565482c_1024x1024.jpg'),
(174, 0, ''),
(175, 11, 'https://product.hstatic.net/1000230642/product/hew000800hog_d467a56b559f46c1aaead88baf13e923_1024x1024.jpg'),
(176, 0, ''),
(177, 12, 'https://product.hstatic.net/1000230642/product/bbw001688xdg2_b324da45894b4547ab16a5e4173e7825_1024x1024.jpg'),
(178, 0, ''),
(179, 13, 'https://product.hstatic.net/1000230642/product/bfw003588kem__2__f7ddeb5aeb3442539d5740193b53e68d_1024x1024.jpg'),
(180, 0, ''),
(181, 14, 'https://product.hstatic.net/1000230642/product/hay-bo-nu-biti-s-hunter-running-tiger-dswh08300cam-cam-ls3g5-color-cam_a6f2a5322e6742aa83eb8c32b20f1485_1024x1024.jpg'),
(182, 0, ''),
(183, 15, 'https://product.hstatic.net/1000230642/product/bsw002300xam2_0266e9c574c845a2b2c4f61623e26c11_1024x1024.jpg'),
(184, 0, ''),
(185, 16, 'https://product.hstatic.net/1000230642/product/bew000900hog__2__28ba40e840084077a34276a4edac5758_1024x1024.jpg'),
(186, 0, ''),
(187, 17, 'https://product.hstatic.net/1000230642/product/bsb004398xdg__2__cc74839870d743eda169ffebddbbcedd_1024x1024.jpg'),
(188, 0, ''),
(189, 19, 'https://product.hstatic.net/1000230642/product/deb010101trg__2__1d14e5c7ef184088bbeb33003f28d151_1024x1024.jpg'),
(190, 0, ''),
(191, 20, 'https://product.hstatic.net/1000230642/product/ttn_6844_50d2f558d2e74a1f8bd5dcb79a00fd87_1024x1024.jpg'),
(192, 0, ''),
(193, 21, 'https://product.hstatic.net/1000230642/product/bsg002600hog__2__7f24ad58575340ba87654040a82889bb_1024x1024.jpg'),
(194, 0, ''),
(195, 22, 'https://product.hstatic.net/1000230642/product/beg002200vag__4__270e08ca1e654a84b8ccedaae48618b7_1024x1024.jpg'),
(196, 0, ''),
(197, 23, 'https://product.hstatic.net/1000230642/product/beg001801vag__2__1f339d6856974ba3ac4df1471d1ddac1_1024x1024.jpg'),
(198, 0, ''),
(199, 24, 'https://product.hstatic.net/1000230642/product/giay-tap-di-be-gai-dtg003900cam-cam-u8nfg-color-cam_edbba01013b5474bade2182eb08b24ca_1024x1024.jpg'),
(200, 67, 'anh 1'),
(201, 67, 'anh 2'),
(202, 67, 'anh chinh'),
(203, 0, ''),
(204, 67, 'anh 3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cart_product` (`p_id`),
  ADD KEY `fk_cart_account` (`a_id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_comment_product` (`p_id`),
  ADD KEY `fk_comment_account` (`a_id`);

--
-- Indexes for table `description`
--
ALTER TABLE `description`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `discount`
--
ALTER TABLE `discount`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `new`
--
ALTER TABLE `new`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_order_account` (`a_id`);

--
-- Indexes for table `outstanding`
--
ALTER TABLE `outstanding`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subimage`
--
ALTER TABLE `subimage`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `description`
--
ALTER TABLE `description`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `discount`
--
ALTER TABLE `discount`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `new`
--
ALTER TABLE `new`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `outstanding`
--
ALTER TABLE `outstanding`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `size`
--
ALTER TABLE `size`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=152;

--
-- AUTO_INCREMENT for table `subimage`
--
ALTER TABLE `subimage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=205;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `fk_cart_account` FOREIGN KEY (`a_id`) REFERENCES `account` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_cart_product` FOREIGN KEY (`p_id`) REFERENCES `product` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `fk_comment_account` FOREIGN KEY (`a_id`) REFERENCES `account` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_comment_product` FOREIGN KEY (`p_id`) REFERENCES `product` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_order_account` FOREIGN KEY (`a_id`) REFERENCES `account` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
