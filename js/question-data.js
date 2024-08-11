const questions = [
  {
    question:
      "Trong các luận điểm sau đây về văn hóa, luận điểm nào của HCM nói về chức năng của văn hóa?",
    answers: [
      {
        text: "A. Kháng chiến hóa văn hóa, văn hóa hóa kháng chiến",
        correct: false,
      },
      { text: "B. Văn hóa cũng là 1 mặt trận", correct: false },
      { text: "C. Xây dựng chính trị: dân quyền", correct: false },
      {
        text: "D. Văn hóa phải thiết thực phục vụ nhân dân,\ngóp phần vào việc nâng cao đời sống vui tươi, lành mạnh của quần chúng",
        correct: true,
      },
    ],
  },
  {
    question:
      'Hoàn thiện câu sau đây của HCM: "Văn hóa phải [...] cho quốc dân đi"',
    answers: [
      { text: "A. Mở đường", correct: false },
      { text: "B. Chỉ đường", correct: false },
      { text: "C. Soi đường", correct: true },
      { text: "D. Dẫn đường", correct: false },
    ],
  },
  {
    question: "Theo HCM, chức năng của văn hóa là?",
    answers: [
      {
        text: "A. Bồi dưỡng tư tưởng đúng đắn và tình cảm cao đẹp",
        correct: false,
      },
      { text: "B. Nâng cao dân trí", correct: false },
      {
        text: "C. Bồi dưỡng những phẩm chất và phong cách tốt đẹp",
        correct: false,
      },
      { text: "D. Tất cả đều đúng", correct: true },
    ],
  },
  {
    question:
      "Theo HCM, muốn thức tỉnh 1 dân tộc trước hết phải thức tỉnh bộ phận dân cư nào?",
    answers: [
      { text: "A. Thanh niên", correct: true },
      { text: "B. Trí thức", correct: false },
      { text: "C. Phụ nữ", correct: false },
      { text: "D. Nông dân", correct: false },
    ],
  },
  {
    question:
      "Trong cách mạng dân tộc dân chủ nhân dân, nền văn hóa mới có những tính chất nào?",
    answers: [
      { text: "A. Dân tộc, đại chúng, hiện đại", correct: false },
      { text: "B. Dân tộc, khoa học, dân chúng", correct: false },
      { text: "C. Dân tộc, khoa học, đại chúng", correct: true },
      { text: "D. Dân tộc, khoa học, quần chúng", correct: false },
    ],
  },
  {
    question:
      "HCM đánh giá cao nhất yếu tố nào trong giá trị văn hóa dân tộc?",
    answers: [
      { text: "A. Lòng yêu nước", correct: false },
      { text: "B. Ý thức đoàn kết cộng đồng", correct: false },
      { text: "C. Lòng thương người", correct: false },
      { text: "D. Yêu lao động", correct: true },
    ],
  },
  {
    question: "Tư tưởng đạo đức của HCM bắt nguồn từ?",
    answers: [
      { text: "A. Truyền thống đạo đức của dân tộc Việt Nam", correct: false },
      {
        text: "B. Kế thừa tư tưởng đạo đức phương Đông và tinh hoa văn hóa nhân loại",
        correct: false,
      },
      {
        text: "C. Tư tưởng đạo đức và những tấm gương đạo đức của Marx, Engels, Lenin",
        correct: false,
      },
      { text: "D. Tất cả đều đúng", correct: true },
    ],
  },
  {
    question:
      "Phẩm chất đạo đức cơ bản của con người Việt Nam trong thời đại mới theo tư tưởng HCM là?",
    answers: [
      {
        text: "A. Trung với nước, hiếu với dân. Yêu thương con người",
        correct: false,
      },
      { text: "B. Cần, kiệm, liêm, chính và chí công vô tư", correct: false },
      { text: "C. Có tinh thần quốc tế trong sáng", correct: false },
      { text: "D. Cả A, B và C", correct: true },
    ],
  },
  {
    question: "Con người theo quan niệm của HCM là?",
    answers: [
      {
        text: "A. Vốn quý nhất, nhân tố quan trọng của cách mạng",
        correct: false,
      },
      {
        text: "B. Vốn quý nhất, nhân tố quyết định thành công của cách mạng",
        correct: true,
      },
      { text: "C. Vốn quý của cách mạng", correct: false },
      { text: "D. Động lực của cách mạng", correct: false },
    ],
  },
  {
    question: ' Theo HCM: "[...] là gốc của cách mạng"',
    answers: [
      { text: "A. Tài năng", correct: false },
      { text: "B. Đạo đức", correct: true },
      { text: "C. Bản lĩnh chính trị", correct: false },
      { text: "D. Phẩm chất chính trị", correct: false },
    ],
  },
  {
    question:
      " HCM đề cập đến đạo đức trong những quan hệ nào sau đây?",
    answers: [
      { text: "A. Đối với mình", correct: false },
      { text: "B. Đối với người", correct: false },
      { text: "C. Đối với việc", correct: false },
      { text: "D. Cả A, B và C", correct: true },
    ],
  },
  {
    question:
      " Theo tư tưởng HCM, để phát huy động lực con người, cần phải?",
    answers: [
      {
        text: "A. Phát huy sức mạnh của cả cộng đồng dân tộc và sức mạnh của cá nhân người lao động",
        correct: false,
      },
      {
        text: "B. Phát huy sức mạnh đoàn kết của cả cộng đồng dân tộc",
        correct: false,
      },
      { text: "C. Phát huy sức mạnh của cá nhân con người", correct: false },
      { text: "D. Kêu gọi toàn dân", correct: true },
    ],
  },
  {
    question:
      " Theo tư tưởng HCM, tính đại chúng của nền văn hóa được thể hiện ở chỗ?",
    answers: [
      {
        text: "A. Nền văn hóa ấy phải phục vụ cho nhân dân và do nhân dân xây dựng nên",
        correct: true,
      },
      { text: "B. Đó là 1 nền văn hóa đa dạng", correct: false },
      {
        text: "C. Đó là 1 nền văn hóa vượt ra khỏi biên giới quốc gia",
        correct: false,
      },
      { text: "D. Đó là 1 nền văn hóa rộng lớn", correct: false },
    ],
  },
  {
    question:
      ' "Người cách mạng phải có [...], không có [...] thì dù tài giỏi đến mấy cũng không lãnh đạo được nhân dân"',
    answers: [
      { text: "A. Tài năng và đạo đức", correct: false },
      { text: "B. Đạo đức cách mạng", correct: true },
      { text: "C. Bản lĩnh chính trị", correct: false },
      { text: "D. Uy tín", correct: false },
    ],
  },
  {
    question:
      ' "Bồi dưỡng thế hệ cách mạng cho đời sau là 1 việc [...] và rất cần thiết"',
    answers: [
      { text: "A. Không thể thiếu", correct: false },
      { text: "B. Tương đối quan trọng", correct: true },
      { text: "C. Rất quan trọng", correct: false },
      { text: "D. Rất nên làm", correct: false },
    ],
  },
  {
    question:
      "Theo tư tưởng Hồ Chí Minh, trong xã hội ta lực lượng nào có quyền lực cao nhất?",
    answers: [
      { text: "A. Đảng cộng sản Việt Nam", correct: false },
      { text: "B. Chính phủ nước cộng hòa XHCNVN", correct: false },
      { text: "C. Quốc hội nước CHXHCNVN", correct: false },
      { text: "D. Nhân dân Việt Nam", correct: true },  // Đáp án đúng
    ],
  },
  {
    question:
      "“Ở nước ta, chính quyền là của nhân dân, do nhân dân làm chủ. Nhân dân là ông chủ nắm chính quyền. Nhân dân bầu ra đại biểu thay mặt mình thi hành chính quyền ấy. Thế là dân chủ”. Câu trên trích từ tác phẩm nào của chủ tịch Hồ Chí Minh?",
    answers: [
      { text: "A. Đường cách mệnh", correct: false },
      { text: "B. Sửa đổi lề lối làm việc", correct: false },
      { text: "C. Di chúc", correct: false },
      { text: "D. Thường thức chính trị", correct: true },  // Đáp án đúng
    ],
  },
  {
    question:
      "Một trong những yêu sách 8 điểm gửi hội nghị Vec xây mà Nguyễn Ái Quốc đã nêu lên là:",
    answers: [
      { text: "A. Đòi quyền bình đẳng cho các dân tộc", correct: false },
      { text: "B. Đòi quyền độc lập dân tộc", correct: true },  // Đáp án đúng
      { text: "C. Đòi quyền tự trị dân tộc", correct: false },
      { text: "D. Đòi quyền bình đẳng về pháp lý cho nhân dân Đông dương", correct: false },
    ],
  },
  {
    question:
      "Văn kiện nào thể hiện rõ nhất tư tưởng dân chủ của chủ tịch Hồ Chí Minh?",
    answers: [
      { text: "A. Chương trình của mặt trận Việt minh", correct: false },
      { text: "B. Tuyên ngôn độc lập", correct: false },
      { text: "C. Hiến pháp 1946", correct: true },  // Đáp án đúng
      { text: "D. Hiến pháp 1959", correct: false },
    ],
  },
  {
    question:
      "Theo Hồ Chí Minh, để thực hiện được dân chủ trong xã hội, trước tiên cần thực hiện dân chủ trong tổ chức nào?",
    answers: [
      { text: "A. Dân chủ trong chính quyền các cấp", correct: false },
      { text: "B. Dân chủ trong quốc hội", correct: false },
      { text: "C. Dân chủ trong tổ chức Đảng", correct: true },  // Đáp án đúng
      { text: "D. Dân chủ trong các đoàn thể nhân dân", correct: false },
    ],
  },
  {
    question:
      "Chủ tịch Hồ Chí Minh đã dùng hình ảnh gì để nói về sức mạnh vạn năng của dân chủ?",
    answers: [
      { text: "A. Cánh cửa", correct: false },
      { text: "B. Cái búa", correct: false },
      { text: "C. Cái liềm", correct: false },
      { text: "D. Cái chìa khóa", correct: true },  // Đáp án đúng
    ],
  },
  {
    question:
      "Chủ tịch Hồ Chí Minh đã tham khảo mô hình nhà nước nào để xây dựng nhà nước của dân, do dân, vì dân?",
    answers: [
      { text: "A. Nhà nước phong kiến", correct: false },
      { text: "B. Nhà nước tư sản", correct: false },
      { text: "C. Nhà nước Xô viết", correct: false },
      { text: "D. Cả 3 kiểu nhà nước kể trên", correct: true },  // Đáp án đúng
    ],
  },
  {
    question:
      "Quan điểm cơ bản nhất của chủ tịch Hồ Chí Minh về xây dựng nhà nước cách mạng?",
    answers: [
      { text: "A. Nhà nước pháp quyền Việt Nam", correct: false },
      { text: "B. Nhà nước công-nông", correct: false },
      { text: "C. Nhà nước chuyên chính vô sản", correct: false },
      { text: "D. Nhà nước do nhân dân lao động làm chủ", correct: true },  // Đáp án đúng
    ],
  },
  {
    question:
      "Tư tưởng Hồ Chí Minh về xây dựng nhà nước cách mạng Việt Nam có mấy nội dung?",
    answers: [
      { text: "A. 2 nội dung", correct: false },
      { text: "B. 3 nội dung", correct: true },  // Đáp án đúng
      { text: "C. 4 nội dung", correct: false },
      { text: "D. 5 nội dung", correct: false },
    ],
  },
  {
    question: "Nội hàm “nhà nước của dân” gồm những vấn đề gì?",
    answers: [
      { text: "A. Mọi quyền lực nhà nước đều thuộc về nhân dân", correct: false },
      { text: "B. Nhân dân có quyền kiểm soát mọi hoạt động của nhà nước.", correct: false },
      { text: "C. Nhà nước phải có trách nhiệm bảo đảm quyền làm chủ của nhân dân", correct: false },
      { text: "D. Cả 3 vấn đề trên.", correct: true },  // Đáp án đúng
    ],
  },
  {
    question: "Theo quan điểm của Hồ Chí Minh và cả trên thực tế, nhân dân ta có những quyền gì để làm chủ nhà nước?",
    answers: [
      { text: "A. Toàn bộ công dân bầu ra quốc hội - cơ quan quyền lực cao nhất của nhà nước, cơ quan duy nhất có quyền lập pháp", correct: false },
      { text: "B. Quốc hội bầu ra chủ tịch nước, uỷ ban thường vụ quốc hội và chính phủ", correct: false },
      { text: "C. Chính phủ là cơ quan hành chính cao nhất của nhà nước, thực hiện các nghị quyết của quốc hội và chấp hành pháp luật; mọi hoạt động quản lý xã hội bằng pháp luật đều nhằm thực hiện ý chí của nhân dân (thông qua quốc hội do dân bầu ra", correct: false },
      { text: "D. Cả 3 vấn đề trên", correct: true },  // Đáp án đúng
    ],
  },
  {
    question: "Đặc điểm cơ bản để nhận biết nhà nước ta mang bản chất giai cấp công nhân là gì?",
    answers: [
      { text: "A. Nhà nước ta là sản phẩm của cuộc cách mạng do giai cấp công nhân lãnh đạo", correct: false },
      { text: "B. Mục tiêu hàng đầu của nhà nước ta là mang lại và bảo vệ lợi ích của giai cấp công nhân", correct: false },
      { text: "C. Nhà nước ta quản lý, điều hành xã hội theo định hướng xã hội chủ nghĩa", correct: false },
      { text: "D. Nhà nước ta do Đảng cộng sản lãnh đạo", correct: true },  // Đáp án đúng
    ],
  },
  {
    question: "Đảng lãnh đạo nhà nước bằng phương thức nào?",
    answers: [
      { text: "A. Bằng đường lối, chủ trương để nhà nước thể chế hóa thành pháp luật, chính sách, kế hoạch", correct: false },
      { text: "B. Bằng hoạt động của tổ chức Đảng và đảng viên trong các cơ quan nhà nước", correct: false },
      { text: "C. Bằng công tác kiểm tra của Đảng đối với hoạt động của nhà nước", correct: false },
      { text: "D. Cả 3 vấn đề trên", correct: true },  // Đáp án đúng
    ],
  },
  {
    question: "Tính nhân dân, tính dân tộc của nhà nước ta thể hiện ở những nội dung nào?",
    answers: [
      { text: "A. Nhà nước ta ra đời là kết quả của cuộc đấu tranh lâu dài của các thế hệ người Việt Nam", correct: false },
      { text: "B. Nhà nước ta bảo vệ lợi ích của các tầng lớp nhân dân, lấy lợi ích của dân tộc làm cơ bản", correct: false },
      { text: "C. Nhà nước ta được dân tộc giao phó điều hành đất nước trong kháng chiến và trong xây dựng hòa bình", correct: false },
      { text: "D. Cả 3 nội dung trên", correct: true },  // Đáp án đúng
    ],
  },
  {
    question: "“Cải cách nền pháp lý ở Đông Dương bằng cách làm cho người bản xứ cũng được quyền hưởng những bảo đảm về mặt pháp luật như người châu Âu; thay thế chế độ ra các sắc lệnh bằng chế độ ra các đạo luật”. Câu trên trích từ tác phẩm nào của Bác Hồ?",
    answers: [
      { text: "A. Bản án chế độ thực dân Pháp", correct: false },
      { text: "B. Đường cách mệnh", correct: false },
      { text: "C. Yêu sách gửi hội nghị Vecxay", correct: true },  // Đáp án đúng
      { text: "D. Báo “Người cùng khổ”", correct: false },
    ],
  },
  {
    question: "Nội dung quan niệm của Chủ tịch Hồ Chí Minh về một nhà nước có hiệu lực pháp lý mạnh mẽ?",
    answers: [
      { text: "A. Xây dựng một nhà nước hợp pháp, hợp hiến", correct: false },
      { text: "B. Quản lý xã hội bằng pháp luật và đưa pháp luật vào cuộc sống", correct: false },
      { text: "C. Xây dựng đội ngũ công chức đủ đức, đủ tài", correct: false },
      { text: "D. Tất cả các nội dung trên", correct: true },  // Đáp án đúng
    ],
  },
  {
    question: "Để có một nhà nước hợp pháp, hợp hiến, việc làm đầu tiên của Hồ Chí Minh sau cách mạng tháng Tám năm 1945 là gì?",
    answers: [
      { text: "A. Thiết kế mô hình nhà nước cách mạng", correct: false },
      { text: "B. Lựa chọn, sắp xếp cán bộ", correct: false },
      { text: "C. Tổ chức tổng tuyển cử trong cả nước", correct: true },  // Đáp án đúng
      { text: "D. Kêu gọi thế giới công nhận chính quyền mới", correct: false },
    ],
  },
  {
    question: "Mục đích của tổng tuyển cử trong cả nước, theo chế độ phổ thông đầu phiếu là gì?",
    answers: [
      { text: "A. Để nhà nước cách mạng có cơ sở pháp lý vững chắc trong quan hệ với quân Đồng minh", correct: false },
      { text: "B. Để có mối quan hệ quốc tế bình đẳng về mặt nhà nước", correct: false },
      { text: "C. Mới có thể thiết lập một cơ chế quyền lực hợp pháp theo đúng thông lệ quốc tế", correct: false },
      { text: "D. Tất cả mục đích trên", correct: true },  // Đáp án đúng
    ],
  },
  {
    question: "Quốc hội đầu tiên của nước Việt Nam mới họp phiên đầu tiên vào thời gian nào?",
    answers: [
      { text: "A. 2-3-1945", correct: false },
      { text: "B. 2-3-1946", correct: true },  // Đáp án đúng
      { text: "C. 2-3-1947", correct: false },
      { text: "D. 2-3-1948", correct: false },
    ],
  },
  {
    question: "Ai là chủ tịch chính phủ đầu tiên của nước Việt Nam mới?",
    answers: [
      { text: "A. Huỳnh Thúc Kháng", correct: false },
      { text: "B. Tôn Đức Thắng", correct: false },
      { text: "C. Phạm Văn Đồng", correct: false },
      { text: "D. Hồ Chí Minh", correct: true },  // Đáp án đúng
    ],
  },
  {
    question: "Để pháp luật được thực hiện nghiêm túc, cần có những điều kiện gì?",
    answers: [
      { text: "A. Nâng cao dân trí", correct: false },
      { text: "B. Giáo dục pháp luật cho nhân dân", correct: false },
      { text: "C. Cán bộ, Đảng viên phải nêu gương chấp hành pháp luật", correct: false },
      { text: "D. Tất cả các điều kiện trên", correct: true },  // Đáp án đúng
    ],
  },
  {
    question: "Theo Hồ Chí Minh, trong thực thi pháp luật cần chú trọng điều gì nhất?",
    answers: [
      { text: "A. Coi pháp luật là độc tôn", correct: false },
      { text: "B. Đề cao công lý", correct: false },
      { text: "C. Đề cao yếu tố tình cảm hơn pháp luật", correct: false },
      { text: "D. Coi thường cả 2 mặt Lý tình", correct: true },  // Đáp án đúng
    ],
  },
  {
    question: "Theo Hồ Chí Minh, xây dựng đội ngũ công chức nhà nước theo những tiêu chuẩn nào?",
    answers: [
      { text: "A. Tuyệt đối trung thành với cách mạng, liên hệ mật thiết với nhân dân", correct: false },
      { text: "B. Giỏi chuyên môn, nghiệp vụ", correct: false },
      { text: "C. Dám phụ trách, quyết đoán, dám chịu trách nhiệm, thắng không kiêu, bại không nản; thường xuyên tự phê bình và phê bình vì sự trong sạch của nhà nước", correct: false },
      { text: "D. Tất cả những tiêu chuẩn trên", correct: true },  // Đáp án đúng
    ],
  },
  {
    question: "Theo Hồ Chí Minh, muốn xây dựng nhà nước trong sạch vững mạnh, cần chống những căn bệnh nào?",
    answers: [
      { text: "A. Đặc quyền, đặc lợi", correct: false },
      { text: "B. Tham ô, lãng phí, quan liêu", correct: false },
      { text: "C. Tất cả những căn bệnh trên", correct: true },  // Đáp án đúng
      { text: "D. Tư túng, chia rẽ, kiêu ngạo", correct: false },
    ],
  },
];