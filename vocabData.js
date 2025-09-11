const vocabData = [
   {
      kanji: "男性",
      hiragana: "だんせい",
      pos: "Danh từ",
      meaning: "nam giới",
      exampleJa: "彼は男性です。",
      exampleVi: "Anh ấy là nam giới."
   },
   {
      kanji: "女性",
      hiragana: "じょせい",
      pos: "Danh từ",
      meaning: "nữ giới",
      exampleJa: "女性が多いクラスです。",
      exampleVi: "Lớp học có nhiều nữ giới."
   },
   {
      kanji: "高齢",
      hiragana: "こうれい",
      pos: "Danh từ / Tính từ đuôi な",
      meaning: "cao tuổi",
      exampleJa: "高齢の方が増えています。",
      exampleVi: "Số người cao tuổi đang tăng lên."
   },
   {
      kanji: "年上",
      hiragana: "としうえ",
      pos: "Danh từ / Tính từ đuôi の",
      meaning: "lớn tuổi hơn",
      exampleJa: "彼は私の年上です。",
      exampleVi: "Anh ấy lớn tuổi hơn tôi."
   },
   {
      kanji: "目上",
      hiragana: "めうえ",
      pos: "Danh từ",
      meaning: "cấp trên / người trên",
      exampleJa: "目上の人には敬語を使います。",
      exampleVi: "Với người trên, phải dùng kính ngữ."
   },
   {
      kanji: "先輩",
      hiragana: "せんぱい",
      pos: "Danh từ",
      meaning: "tiền bối / người đi trước",
      exampleJa: "先輩にアドバイスをもらいました。",
      exampleVi: "Tôi nhận được lời khuyên từ tiền bối."
   },
   {
      kanji: "後輩",
      hiragana: "こうはい",
      pos: "Danh từ",
      meaning: "hậu bối / người đi sau",
      exampleJa: "後輩を指導します。",
      exampleVi: "Tôi hướng dẫn hậu bối."
   },
   {
      kanji: "上司",
      hiragana: "じょうし",
      pos: "Danh từ",
      meaning: "cấp trên / sếp",
      exampleJa: "上司に報告します。",
      exampleVi: "Tôi báo cáo với sếp."
   },
   {
      kanji: "相手",
      hiragana: "あいて",
      pos: "Danh từ",
      meaning: "đối phương / người kia",
      exampleJa: "相手の意見を尊重します。",
      exampleVi: "Tôn trọng ý kiến của đối phương."
   },
   {
      kanji: "知り合い",
      hiragana: "しりあい",
      pos: "Danh từ",
      meaning: "người quen",
      exampleJa: "知り合いに会いました。",
      exampleVi: "Tôi đã gặp một người quen."
   },
   {
      kanji: "友人",
      hiragana: "ゆうじん",
      pos: "Danh từ",
      meaning: "bạn bè",
      exampleJa: "友人と映画に行きます。",
      exampleVi: "Tôi đi xem phim với bạn bè."
   },
   {
      kanji: "仲",
      hiragana: "なか",
      pos: "Danh từ",
      meaning: "mối quan hệ / tình cảm giữa người với người",
      exampleJa: "彼とは仲がいいです。",
      exampleVi: "Tôi có mối quan hệ tốt với anh ấy."
   },
   {
      kanji: "生年月日",
      hiragana: "せいねんがっぴ",
      pos: "Danh từ",
      meaning: "ngày tháng năm sinh",
      exampleJa: "生年月日を教えてください。",
      exampleVi: "Hãy cho tôi biết ngày tháng năm sinh của bạn."
   },
   {
      kanji: "誕生",
      hiragana: "たんじょう",
      pos: "Danh từ / Danh từ suru",
      meaning: "sinh ra / ra đời",
      exampleJa: "赤ちゃんが誕生しました。",
      exampleVi: "Đứa bé đã ra đời."
   },
   {
      kanji: "年",
      hiragana: "とし",
      pos: "Danh từ",
      meaning: "năm / tuổi",
      exampleJa: "今年で30年です。",
      exampleVi: "Năm nay là 30 năm."
   },
   {
      kanji: "出身",
      hiragana: "しゅっしん",
      pos: "Danh từ / Danh từ の",
      meaning: "quê quán / nơi xuất thân",
      exampleJa: "私は東京出身です。",
      exampleVi: "Tôi xuất thân từ Tokyo."
   },
   {
      kanji: "故郷",
      hiragana: "ふるさと",
      pos: "Danh từ",
      meaning: "quê hương",
      exampleJa: "故郷に帰ります。",
      exampleVi: "Tôi sẽ về quê hương."
   },
   {
      kanji: "成長",
      hiragana: "せいちょう",
      pos: "Danh từ / Danh từ suru",
      meaning: "trưởng thành / phát triển",
      exampleJa: "子供の成長が早いです。",
      exampleVi: "Trẻ con lớn lên rất nhanh."
   },
   {
      kanji: "成人",
      hiragana: "せいじん",
      pos: "Danh từ",
      meaning: "người trưởng thành",
      exampleJa: "成人式に参加しました。",
      exampleVi: "Tôi đã tham gia lễ thành niên."
   },
   {
      kanji: "合格",
      hiragana: "ごうかく",
      pos: "Danh từ / Danh từ suru",
      meaning: "đậu / đạt (kỳ thi)",
      exampleJa: "試験に合格しました。",
      exampleVi: "Tôi đã đậu kỳ thi."
   },
   {
      kanji: "退学",
      hiragana: "たいがく",
      pos: "Danh từ / Danh từ suru",
      meaning: "bỏ học / thôi học",
      exampleJa: "大学を退学しました。",
      exampleVi: "Tôi đã thôi học đại học."
   },
   {
      kanji: "進学",
      hiragana: "しんがく",
      pos: "Danh từ / Danh từ suru",
      meaning: "học lên (cấp học cao hơn)",
      exampleJa: "高校に進学します。",
      exampleVi: "Tôi sẽ học lên cấp 3."
   },
   {
      kanji: "就職",
      hiragana: "しゅうしょく",
      pos: "Danh từ / Danh từ suru",
      meaning: "tìm việc / đi làm",
      exampleJa: "会社に就職しました。",
      exampleVi: "Tôi đã đi làm ở công ty."
   },
   {
      kanji: "退職",
      hiragana: "たいしょく",
      pos: "Danh từ / Danh từ suru",
      meaning: "nghỉ việc / thôi việc",
      exampleJa: "先月退職しました。",
      exampleVi: "Tôi đã nghỉ việc tháng trước."
   },
   {
      kanji: "失業",
      hiragana: "しつぎょう",
      pos: "Danh từ / Danh từ suru",
      meaning: "thất nghiệp",
      exampleJa: "失業中です。",
      exampleVi: "Tôi đang thất nghiệp."
   },
   {
      kanji: "残業",
      hiragana: "ざんぎょう",
      pos: "Danh từ / Danh từ suru",
      meaning: "làm thêm giờ",
      exampleJa: "毎日残業しています。",
      exampleVi: "Tôi làm thêm giờ mỗi ngày."
   },
   {
      kanji: "生活",
      hiragana: "せいかつ",
      pos: "Danh từ / Danh từ suru",
      meaning: "cuộc sống / sinh hoạt",
      exampleJa: "東京で生活しています。",
      exampleVi: "Tôi đang sống ở Tokyo."
   },
   {
      kanji: "通勤",
      hiragana: "つうきん",
      pos: "Danh từ / Danh từ suru",
      meaning: "đi làm / đi làm hàng ngày",
      exampleJa: "毎日電車で通勤します。",
      exampleVi: "Tôi đi làm bằng tàu điện mỗi ngày."
   },
   {
      kanji: "学歴",
      hiragana: "がくれき",
      pos: "Danh từ",
      meaning: "học vấn / trình độ học vấn",
      exampleJa: "学歴は重要ですか？",
      exampleVi: "Học vấn có quan trọng không?"
   },
   {
      kanji: "給料",
      hiragana: "きゅうりょう",
      pos: "Danh từ",
      meaning: "lương",
      exampleJa: "給料が上がりました。",
      exampleVi: "Lương đã tăng."
   },
   {
      kanji: "面接",
      hiragana: "めんせつ",
      pos: "Danh từ / Danh từ suru",
      meaning: "phỏng vấn",
      exampleJa: "面接に行きます。",
      exampleVi: "Tôi sẽ đi phỏng vấn."
   },
   {
      kanji: "休憩",
      hiragana: "きゅうけい",
      pos: "Danh từ / Danh từ suru",
      meaning: "nghỉ giải lao",
      exampleJa: "10分休憩しましょう。",
      exampleVi: "Chúng ta nghỉ giải lao 10 phút nhé."
   },
   {
      kanji: "観光",
      hiragana: "かんこう",
      pos: "Danh từ / Danh từ suru",
      meaning: "tham quan, du lịch",
      exampleJa: "京都を観光します。",
      exampleVi: "Tôi sẽ tham quan Kyoto."
   },
   {
      kanji: "帰国",
      hiragana: "きこく",
      pos: "Danh từ / Danh từ suru",
      meaning: "về nước",
      exampleJa: "来月帰国します。",
      exampleVi: "Tháng sau tôi sẽ về nước."
   },
   {
      kanji: "帰省",
      hiragana: "きせい",
      pos: "Danh từ / Danh từ suru",
      meaning: "về thăm quê",
      exampleJa: "お盆に帰省します。",
      exampleVi: "Tôi sẽ về thăm quê vào dịp Obon."
   },
   {
      kanji: "帰宅",
      hiragana: "きたく",
      pos: "Danh từ / Danh từ suru",
      meaning: "về nhà",
      exampleJa: "毎日6時に帰宅します。",
      exampleVi: "Tôi về nhà lúc 6 giờ mỗi ngày."
   },
   {
      kanji: "参加",
      hiragana: "さんか",
      pos: "Danh từ / Danh từ suru",
      meaning: "tham gia",
      exampleJa: "会議に参加します。",
      exampleVi: "Tôi sẽ tham gia cuộc họp."
   },
   {
      kanji: "出席",
      hiragana: "しゅっせき",
      pos: "Danh từ / Danh từ suru",
      meaning: "có mặt, tham dự",
      exampleJa: "授業に出席します。",
      exampleVi: "Tôi tham dự lớp học."
   },
   {
      kanji: "欠席",
      hiragana: "けっせき",
      pos: "Danh từ / Danh từ suru",
      meaning: "vắng mặt",
      exampleJa: "昨日は欠席しました。",
      exampleVi: "Hôm qua tôi đã vắng mặt."
   },
   {
      kanji: "遅刻",
      hiragana: "ちこく",
      pos: "Danh từ / Danh từ suru",
      meaning: "đến muộn",
      exampleJa: "電車が遅れて遅刻しました。",
      exampleVi: "Tôi đi muộn vì tàu trễ."
   },
   {
      kanji: "化粧",
      hiragana: "けしょう",
      pos: "Danh từ / Danh từ suru",
      meaning: "trang điểm",
      exampleJa: "毎朝化粧します。",
      exampleVi: "Tôi trang điểm mỗi sáng."
   },
   {
      kanji: "計算",
      hiragana: "けいさん",
      pos: "Danh từ / Danh từ suru",
      meaning: "tính toán",
      exampleJa: "お金を計算します。",
      exampleVi: "Tôi tính tiền."
   },
   {
      kanji: "計画",
      hiragana: "けいかく",
      pos: "Danh từ / Danh từ suru",
      meaning: "kế hoạch",
      exampleJa: "旅行の計画を立てます。",
      exampleVi: "Tôi lập kế hoạch du lịch."
   },
   {
      kanji: "成功",
      hiragana: "せいこう",
      pos: "Danh từ / Danh từ suru",
      meaning: "thành công",
      exampleJa: "試験に成功しました。",
      exampleVi: "Tôi đã thành công trong kỳ thi."
   },
   {
      kanji: "失敗",
      hiragana: "しっぱい",
      pos: "Danh từ / Danh từ suru",
      meaning: "thất bại",
      exampleJa: "計画が失敗しました。",
      exampleVi: "Kế hoạch đã thất bại."
   },
   {
      kanji: "準備",
      hiragana: "じゅんび",
      pos: "Danh từ / Danh từ suru",
      meaning: "chuẩn bị",
      exampleJa: "明日の準備をします。",
      exampleVi: "Tôi chuẩn bị cho ngày mai."
   },
   {
      kanji: "整理",
      hiragana: "せいり",
      pos: "Danh từ / Danh từ suru",
      meaning: "sắp xếp, dọn dẹp",
      exampleJa: "机を整理します。",
      exampleVi: "Tôi dọn dẹp bàn làm việc."
   },
   {
      kanji: "注文",
      hiragana: "ちゅうもん",
      pos: "Danh từ / Danh từ suru",
      meaning: "đặt hàng, gọi món",
      exampleJa: "ピザを注文しました。",
      exampleVi: "Tôi đã đặt pizza."
   },
   {
      kanji: "貯金",
      hiragana: "ちょきん",
      pos: "Danh từ / Danh từ suru",
      meaning: "tiết kiệm tiền",
      exampleJa: "毎月貯金します。",
      exampleVi: "Tôi tiết kiệm tiền hàng tháng."
   },
   {
      kanji: "徹夜",
      hiragana: "てつや",
      pos: "Danh từ / Danh từ suru",
      meaning: "thức trắng đêm",
      exampleJa: "徹夜で勉強しました。",
      exampleVi: "Tôi thức trắng đêm học bài."
   },
   {
      kanji: "引っ越し",
      hiragana: "ひっこし",
      pos: "Danh từ / Danh từ suru",
      meaning: "chuyển nhà",
      exampleJa: "来週引っ越しします。",
      exampleVi: "Tuần sau tôi sẽ chuyển nhà."
   },
   {
      kanji: "身長",
      hiragana: "しんちょう",
      pos: "Danh từ",
      meaning: "chiều cao",
      exampleJa: "私の身長は170cmです。",
      exampleVi: "Chiều cao của tôi là 170cm."
   },
   {
      kanji: "体重",
      hiragana: "たいじゅう",
      pos: "Danh từ",
      meaning: "cân nặng",
      exampleJa: "最近体重が増えました。",
      exampleVi: "Gần đây tôi tăng cân."
   },
   {
      kanji: "けが",
      hiragana: "けが",
      pos: "Danh từ",
      meaning: "vết thương",
      exampleJa: "手にけがをしました。",
      exampleVi: "Tôi bị thương ở tay."
   },
   {
      kanji: "会",
      hiragana: "かい",
      pos: "Danh từ",
      meaning: "hội / buổi gặp",
      exampleJa: "クラブの会に参加します。",
      exampleVi: "Tôi sẽ tham gia buổi gặp của câu lạc bộ."
   },
   {
      kanji: "趣味",
      hiragana: "しゅみ",
      pos: "Danh từ",
      meaning: "sở thích",
      exampleJa: "私の趣味は読書です。",
      exampleVi: "Sở thích của tôi là đọc sách."
   },
   {
      kanji: "興味",
      hiragana: "きょうみ",
      pos: "Danh từ",
      meaning: "sở thích / quan tâm",
      exampleJa: "音楽に興味があります。",
      exampleVi: "Tôi quan tâm đến âm nhạc."
   },
   {
      kanji: "思い出",
      hiragana: "おもいで",
      pos: "Danh từ",
      meaning: "kỷ niệm",
      exampleJa: "旅行の思い出は大切です。",
      exampleVi: "Kỷ niệm du lịch rất quý giá."
   },
   {
      kanji: "冗談",
      hiragana: "じょうだん",
      pos: "Danh từ",
      meaning: "trò đùa",
      exampleJa: "それは冗談ですか？",
      exampleVi: "Đó là trò đùa đúng không?"
   },
   {
      kanji: "目的",
      hiragana: "もくてき",
      pos: "Danh từ",
      meaning: "mục đích",
      exampleJa: "旅行の目的は観光です。",
      exampleVi: "Mục đích của chuyến du lịch là tham quan."
   },
   {
      kanji: "約束",
      hiragana: "やくそく",
      pos: "Danh từ / Danh từ suru",
      meaning: "lời hứa / cuộc hẹn",
      exampleJa: "友達と約束があります。",
      exampleVi: "Tôi có hẹn với bạn bè."
   },
   {
      kanji: "おしゃべり",
      hiragana: "おしゃべり",
      pos: "Danh từ / Tính từ đuôi な",
      meaning: "nói chuyện, tám chuyện",
      exampleJa: "彼はおしゃべりが好きです。",
      exampleVi: "Anh ấy thích nói chuyện."
   },
   {
      kanji: "遠慮",
      hiragana: "えんりょ",
      pos: "Danh từ / Danh từ suru",
      meaning: "ngại ngùng, khách khí",
      exampleJa: "遠慮しないで食べてください。",
      exampleVi: "Đừng ngại, hãy ăn đi."
   },
   {
      kanji: "我慢",
      hiragana: "がまん",
      pos: "Danh từ / Danh từ suru",
      meaning: "nhẫn nhịn, chịu đựng",
      exampleJa: "痛みを我慢します。",
      exampleVi: "Tôi chịu đựng cơn đau."
   },
   {
      kanji: "迷惑",
      hiragana: "めいわく",
      pos: "Danh từ / Tính từ đuôi な",
      meaning: "phiền hà, quấy rầy",
      exampleJa: "迷惑をかけてすみません。",
      exampleVi: "Xin lỗi vì đã làm phiền."
   },
   {
      kanji: "希望",
      hiragana: "きぼう",
      pos: "Danh từ / Danh từ suru",
      meaning: "hy vọng, mong muốn",
      exampleJa: "希望の職業に就きたいです。",
      exampleVi: "Tôi muốn có công việc theo ý muốn."
   },
   {
      kanji: "夢",
      hiragana: "ゆめ",
      pos: "Danh từ",
      meaning: "giấc mơ, ước mơ",
      exampleJa: "将来の夢は医者になることです。",
      exampleVi: "Ước mơ tương lai của tôi là trở thành bác sĩ."
   },
   {
      kanji: "賛成",
      hiragana: "さんせい",
      pos: "Danh từ / Danh từ suru",
      meaning: "tán thành, đồng ý",
      exampleJa: "私は賛成です。",
      exampleVi: "Tôi tán thành."
   },
   {
      kanji: "反対",
      hiragana: "はんたい",
      pos: "Danh từ / Danh từ suru",
      meaning: "phản đối",
      exampleJa: "その案に反対します。",
      exampleVi: "Tôi phản đối đề án đó."
   },
   {
      kanji: "想像",
      hiragana: "そうぞう",
      pos: "Danh từ / Danh từ suru",
      meaning: "tưởng tượng",
      exampleJa: "未来を想像します。",
      exampleVi: "Tôi tưởng tượng về tương lai."
   },
   {
      kanji: "努力",
      hiragana: "どりょく",
      pos: "Danh từ / Danh từ suru",
      meaning: "nỗ lực, cố gắng",
      exampleJa: "毎日努力しています。",
      exampleVi: "Tôi nỗ lực mỗi ngày."
   },
   {
      kanji: "太陽",
      hiragana: "たいよう",
      pos: "Danh từ",
      meaning: "mặt trời",
      exampleJa: "太陽が輝いています。",
      exampleVi: "Mặt trời đang chiếu sáng."
   },
   {
      kanji: "地球",
      hiragana: "ちきゅう",
      pos: "Danh từ",
      meaning: "trái đất",
      exampleJa: "地球は青いです。",
      exampleVi: "Trái đất màu xanh."
   },
   {
      kanji: "温度",
      hiragana: "おんど",
      pos: "Danh từ",
      meaning: "nhiệt độ",
      exampleJa: "今日は温度が高いです。",
      exampleVi: "Hôm nay nhiệt độ cao."
   },
   {
      kanji: "湿度",
      hiragana: "しつど",
      pos: "Danh từ",
      meaning: "độ ẩm",
      exampleJa: "湿度が高いです。",
      exampleVi: "Độ ẩm cao."
   },
   {
      kanji: "湿気",
      hiragana: "しっけ",
      pos: "Danh từ",
      meaning: "hơi ẩm",
      exampleJa: "部屋に湿気があります。",
      exampleVi: "Trong phòng có hơi ẩm."
   },
   {
      kanji: "梅雨",
      hiragana: "つゆ",
      pos: "Danh từ",
      meaning: "mùa mưa (ở Nhật)",
      exampleJa: "梅雨の時期は雨が多いです。",
      exampleVi: "Mùa mưa có nhiều mưa."
   },
   {
      kanji: "かび",
      hiragana: "かび",
      pos: "Danh từ",
      meaning: "mốc",
      exampleJa: "パンにかびが生えました。",
      exampleVi: "Bánh mì bị mốc."
   },
   {
      kanji: "暖房",
      hiragana: "だんぼう",
      pos: "Danh từ / Danh từ suru",
      meaning: "hệ thống sưởi",
      exampleJa: "冬は暖房を使います。",
      exampleVi: "Mùa đông tôi dùng máy sưởi."
   },
   {
      kanji: "皮",
      hiragana: "かわ",
      pos: "Danh từ",
      meaning: "vỏ, da",
      exampleJa: "リンゴの皮をむきます。",
      exampleVi: "Tôi gọt vỏ táo."
   },
   {
      kanji: "缶",
      hiragana: "かん",
      pos: "Danh từ",
      meaning: "lon, hộp kim loại",
      exampleJa: "ジュースの缶を開けます。",
      exampleVi: "Tôi mở lon nước ngọt."
   },
   {
      kanji: "画面",
      hiragana: "がめん",
      pos: "Danh từ",
      meaning: "màn hình",
      exampleJa: "画面が暗いです。",
      exampleVi: "Màn hình tối."
   },
   {
      kanji: "番組",
      hiragana: "ばんぐみ",
      pos: "Danh từ",
      meaning: "chương trình (truyền hình, radio)",
      exampleJa: "面白い番組を見ます。",
      exampleVi: "Tôi xem chương trình thú vị."
   },
   {
      kanji: "記事",
      hiragana: "きじ",
      pos: "Danh từ",
      meaning: "bài báo, tin tức",
      exampleJa: "新聞の記事を読みます。",
      exampleVi: "Tôi đọc bài báo trên báo."
   },
   {
      kanji: "近所",
      hiragana: "きんじょ",
      pos: "Danh từ",
      meaning: "hàng xóm, khu vực lân cận",
      exampleJa: "近所の人と話します。",
      exampleVi: "Tôi nói chuyện với hàng xóm."
   },
   {
      kanji: "警察",
      hiragana: "けいさつ",
      pos: "Danh từ",
      meaning: "cảnh sát",
      exampleJa: "警察に通報しました。",
      exampleVi: "Tôi báo cho cảnh sát."
   },
   {
      kanji: "犯人",
      hiragana: "はんにん",
      pos: "Danh từ",
      meaning: "thủ phạm",
      exampleJa: "犯人は捕まりました。",
      exampleVi: "Thủ phạm đã bị bắt."
   },
   {
      kanji: "ご銭",
      hiragana: "ごせん",
      pos: "Danh từ",
      meaning: "tiền lẻ / tiền xu (lịch sự)",
      exampleJa: "財布にご銭があります。",
      exampleVi: "Trong ví có tiền lẻ."
   },
   {
      kanji: "ご馳走",
      hiragana: "ごちそう",
      pos: "Danh từ / Danh từ suru",
      meaning: "bữa ăn ngon, chiêu đãi",
      exampleJa: "昨日はご馳走になりました。",
      exampleVi: "Hôm qua tôi được chiêu đãi bữa ngon."
   },
   {
      kanji: "作者",
      hiragana: "さくしゃ",
      pos: "Danh từ",
      meaning: "tác giả",
      exampleJa: "この本の作者は有名です。",
      exampleVi: "Tác giả cuốn sách này nổi tiếng."
   },
   {
      kanji: "作品",
      hiragana: "さくひん",
      pos: "Danh từ",
      meaning: "tác phẩm",
      exampleJa: "彼の作品は美しいです。",
      exampleVi: "Tác phẩm của anh ấy đẹp."
   },
   {
      kanji: "制服",
      hiragana: "せいふく",
      pos: "Danh từ",
      meaning: "đồng phục",
      exampleJa: "学校の制服を着ます。",
      exampleVi: "Tôi mặc đồng phục của trường."
   },
   {
      kanji: "洗剤",
      hiragana: "せんざい",
      pos: "Danh từ",
      meaning: "xà phòng, chất tẩy rửa",
      exampleJa: "洗剤で服を洗います。",
      exampleVi: "Tôi giặt quần áo bằng xà phòng."
   },
   {
      kanji: "底",
      hiragana: "そこ",
      pos: "Danh từ",
      meaning: "đáy",
      exampleJa: "箱の底を見ます。",
      exampleVi: "Tôi nhìn đáy hộp."
   },
   {
      kanji: "地下",
      hiragana: "ちか",
      pos: "Danh từ / Danh từ の",
      meaning: "dưới đất, tầng hầm",
      exampleJa: "地下に駐車場があります。",
      exampleVi: "Có bãi đậu xe dưới tầng hầm."
   },
   {
      kanji: "寺",
      hiragana: "てら",
      pos: "Danh từ",
      meaning: "chùa",
      exampleJa: "有名な寺に行きます。",
      exampleVi: "Tôi sẽ đi đến một ngôi chùa nổi tiếng."
   },
   {
      kanji: "道路",
      hiragana: "どうろ",
      pos: "Danh từ",
      meaning: "đường phố, đường đi",
      exampleJa: "道路が混んでいます。",
      exampleVi: "Đường phố đông."
   },
   {
      kanji: "坂",
      hiragana: "さか",
      pos: "Danh từ",
      meaning: "dốc",
      exampleJa: "坂を上ります。",
      exampleVi: "Tôi leo lên dốc."
   },
   {
      kanji: "煙",
      hiragana: "けむり",
      pos: "Danh từ",
      meaning: "khói",
      exampleJa: "煙が出ています。",
      exampleVi: "Có khói bốc lên."
   },
   {
      kanji: "灰",
      hiragana: "はい",
      pos: "Danh từ",
      meaning: "tro",
      exampleJa: "灰を捨てます。",
      exampleVi: "Tôi đổ tro đi."
   },
   {
      kanji: "判",
      hiragana: "はん",
      pos: "Danh từ",
      meaning: "con dấu, dấu xác nhận",
      exampleJa: "書類に判を押します。",
      exampleVi: "Tôi đóng dấu vào tài liệu."
   },
   {
      kanji: "名刺",
      hiragana: "めいし",
      pos: "Danh từ",
      meaning: "danh thiếp",
      exampleJa: "名刺を交換します。",
      exampleVi: "Tôi trao đổi danh thiếp."
   },
   {
      kanji: "免許",
      hiragana: "めんきょ",
      pos: "Danh từ",
      meaning: "giấy phép, bằng cấp",
      exampleJa: "運転免許を持っています。",
      exampleVi: "Tôi có bằng lái xe."
   },
   {
      kanji: "多く",
      hiragana: "おおく",
      pos: "Danh từ / Trạng từ",
      meaning: "nhiều, phần lớn",
      exampleJa: "多くの人が参加しました。",
      exampleVi: "Nhiều người đã tham gia."
   },
   {
      kanji: "前半",
      hiragana: "ぜんはん",
      pos: "Danh từ",
      meaning: "nửa đầu",
      exampleJa: "試合の前半が終わりました。",
      exampleVi: "Nửa đầu trận đấu đã kết thúc."
   },
   {
      kanji: "後半",
      hiragana: "こうはん",
      pos: "Danh từ",
      meaning: "nửa sau",
      exampleJa: "試合の後半が始まります。",
      exampleVi: "Nửa sau trận đấu bắt đầu."
   },
   {
      kanji: "最高",
      hiragana: "さいこう",
      pos: "Danh từ / Tính từ đuôi な",
      meaning: "tốt nhất, cao nhất",
      exampleJa: "今日は最高の気分です。",
      exampleVi: "Hôm nay tôi cảm thấy tuyệt vời nhất."
   },
   {
      kanji: "最低",
      hiragana: "さいてい",
      pos: "Danh từ / Tính từ đuôi な",
      meaning: "tệ nhất, thấp nhất",
      exampleJa: "今日は最低の日です。",
      exampleVi: "Hôm nay là ngày tệ nhất."
   },
   {
      kanji: "最初",
      hiragana: "さいしょ",
      pos: "Danh từ",
      meaning: "đầu tiên",
      exampleJa: "最初からやり直します。",
      exampleVi: "Tôi sẽ làm lại từ đầu."
   },
   {
      kanji: "最後",
      hiragana: "さいご",
      pos: "Danh từ",
      meaning: "cuối cùng",
      exampleJa: "最後まで頑張ります。",
      exampleVi: "Tôi sẽ cố gắng đến cuối cùng."
   },
   {
      kanji: "自動",
      hiragana: "じどう",
      pos: "Danh từ / Tính từ đuôi の",
      meaning: "tự động",
      exampleJa: "自動ドアが開きます。",
      exampleVi: "Cửa tự động mở."
   },
   {
      kanji: "種類",
      hiragana: "しゅるい",
      pos: "Danh từ",
      meaning: "loại, chủng loại",
      exampleJa: "果物の種類が多いです。",
      exampleVi: "Có nhiều loại trái cây."
   },
   {
      kanji: "性格",
      hiragana: "せいかく",
      pos: "Danh từ",
      meaning: "tính cách",
      exampleJa: "彼の性格は優しいです。",
      exampleVi: "Tính cách của anh ấy hiền lành."
   },
   {
      kanji: "性質",
      hiragana: "せいしつ",
      pos: "Danh từ",
      meaning: "bản chất, tính chất",
      exampleJa: "この薬の性質を知っていますか？",
      exampleVi: "Bạn có biết tính chất của thuốc này không?"
   },
   {
      kanji: "順番",
      hiragana: "じゅんばん",
      pos: "Danh từ",
      meaning: "thứ tự, lần lượt",
      exampleJa: "順番を守ってください。",
      exampleVi: "Hãy giữ thứ tự."
   },
   {
      kanji: "番",
      hiragana: "ばん",
      pos: "Danh từ",
      meaning: "lượt, số thứ tự",
      exampleJa: "次はあなたの番です。",
      exampleVi: "Tiếp theo là lượt của bạn."
   },
   {
      kanji: "方法",
      hiragana: "ほうほう",
      pos: "Danh từ",
      meaning: "phương pháp",
      exampleJa: "勉強の方法を教えてください。",
      exampleVi: "Hãy chỉ cho tôi phương pháp học."
   },
   {
      kanji: "製品",
      hiragana: "せいひん",
      pos: "Danh từ",
      meaning: "sản phẩm",
      exampleJa: "新しい製品が発売されました。",
      exampleVi: "Sản phẩm mới đã được bán ra."
   },
   {
      kanji: "値上がり",
      hiragana: "ねあがり",
      pos: "Danh từ / Danh từ suru",
      meaning: "tăng giá",
      exampleJa: "物価が値上がりしました。",
      exampleVi: "Giá cả đã tăng."
   },
   {
      kanji: "生",
      hiragana: "なま",
      pos: "Danh từ / Tính từ đuôi な",
      meaning: "tươi sống, thô, sống",
      exampleJa: "生の魚を食べます。",
      exampleVi: "Tôi ăn cá tươi."
   },
   {
      kanji: "渇く",
      hiragana: "かわく",
      pos: "Động từ",
      meaning: "khát",
      exampleJa: "喉が渇きました。",
      exampleVi: "Tôi khát nước."
   },
   {
      kanji: "嗅ぐ",
      hiragana: "かぐ",
      pos: "Động từ",
      meaning: "ngửi",
      exampleJa: "花の香りを嗅ぎます。",
      exampleVi: "Tôi ngửi mùi hoa."
   },
   {
      kanji: "叩く",
      hiragana: "たたく",
      pos: "Động từ",
      meaning: "đánh, vỗ, gõ",
      exampleJa: "机を叩きます。",
      exampleVi: "Tôi gõ vào bàn."
   },
   {
      kanji: "殴る",
      hiragana: "なぐる",
      pos: "Động từ",
      meaning: "đấm, đánh",
      exampleJa: "彼を殴ってしまいました。",
      exampleVi: "Tôi đã đánh anh ấy."
   },
   {
      kanji: "ける",
      hiragana: "ける",
      pos: "Động từ",
      meaning: "đá",
      exampleJa: "ボールをけります。",
      exampleVi: "Tôi đá bóng."
   },
   {
      kanji: "抱く",
      hiragana: "だく",
      pos: "Động từ",
      meaning: "ôm, ấp ủ (tình cảm)",
      exampleJa: "赤ちゃんを抱きます。",
      exampleVi: "Tôi ôm em bé."
   },
   {
      kanji: "倒れる",
      hiragana: "たおれる",
      pos: "Động từ",
      meaning: "ngã, đổ",
      exampleJa: "木が倒れました。",
      exampleVi: "Cây đã đổ."
   },
   {
      kanji: "倒す",
      hiragana: "たおす",
      pos: "Động từ",
      meaning: "làm ngã, đánh đổ",
      exampleJa: "本棚を倒してしまいました。",
      exampleVi: "Tôi làm đổ giá sách."
   },
   {
      kanji: "起きる",
      hiragana: "おきる",
      pos: "Động từ",
      meaning: "thức dậy, xảy ra",
      exampleJa: "毎朝7時に起きます。",
      exampleVi: "Tôi thức dậy lúc 7 giờ mỗi sáng."
   },
   {
      kanji: "起こる",
      hiragana: "おこる",
      pos: "Động từ",
      meaning: "xảy ra, diễn ra",
      exampleJa: "事故が起こりました。",
      exampleVi: "Đã xảy ra tai nạn."
   },
   {
      kanji: "尋ねる",
      hiragana: "たずねる",
      pos: "Động từ",
      meaning: "hỏi, thăm",
      exampleJa: "先生に道を尋ねました。",
      exampleVi: "Tôi hỏi thầy giáo đường đi."
   },
   {
      kanji: "起こす",
      hiragana: "おこす",
      pos: "Động từ",
      meaning: "đánh thức, gây ra",
      exampleJa: "子供を起こします。",
      exampleVi: "Tôi đánh thức con."
   },
   {
      kanji: "呼ぶ",
      hiragana: "よぶ",
      pos: "Động từ",
      meaning: "gọi, kêu",
      exampleJa: "友達を呼びます。",
      exampleVi: "Tôi gọi bạn."
   },
   {
      kanji: "叫ぶ",
      hiragana: "さけぶ",
      pos: "Động từ",
      meaning: "la hét, kêu to",
      exampleJa: "助けを叫びました。",
      exampleVi: "Tôi đã hét lên cầu cứu."
   },
   {
      kanji: "黙る",
      hiragana: "だまる",
      pos: "Động từ",
      meaning: "im lặng, câm",
      exampleJa: "授業中は黙ってください。",
      exampleVi: "Hãy im lặng trong giờ học."
   },
   {
      kanji: "飼う",
      hiragana: "かう",
      pos: "Động từ",
      meaning: "nuôi (động vật)",
      exampleJa: "犬を飼っています。",
      exampleVi: "Tôi nuôi một con chó."
   },
   {
      kanji: "数える",
      hiragana: "かぞえる",
      pos: "Động từ",
      meaning: "đếm",
      exampleJa: "りんごを数えます。",
      exampleVi: "Tôi đếm táo."
   },
   {
      kanji: "乾く",
      hiragana: "かわく",
      pos: "Động từ",
      meaning: "khô",
      exampleJa: "服が乾きました。",
      exampleVi: "Quần áo đã khô."
   },
   {
      kanji: "乾かす",
      hiragana: "かわかす",
      pos: "Động từ",
      meaning: "làm khô",
      exampleJa: "洗濯物を乾かします。",
      exampleVi: "Tôi làm khô quần áo giặt."
   },
   {
      kanji: "畳む",
      hiragana: "たたむ",
      pos: "Động từ",
      meaning: "gấp, xếp",
      exampleJa: "洗濯物を畳みます。",
      exampleVi: "Tôi gấp quần áo giặt."
   },
   {
      kanji: "誘う",
      hiragana: "さそう",
      pos: "Động từ",
      meaning: "mời, rủ",
      exampleJa: "友達を映画に誘います。",
      exampleVi: "Tôi rủ bạn đi xem phim."
   },
   {
      kanji: "おごる",
      hiragana: "おごる",
      pos: "Động từ",
      meaning: "chiêu đãi, mời",
      exampleJa: "友達に昼ご飯をおごります。",
      exampleVi: "Tôi mời bạn ăn trưa."
   },
   {
      kanji: "預かる",
      hiragana: "あずかる",
      pos: "Động từ",
      meaning: "giữ, trông nom",
      exampleJa: "荷物を預かります。",
      exampleVi: "Tôi giữ hành lý."
   },
   {
      kanji: "預ける",
      hiragana: "あずける",
      pos: "Động từ",
      meaning: "gửi, giao phó",
      exampleJa: "子供を保育園に預けます。",
      exampleVi: "Tôi gửi con ở nhà trẻ."
   },
   {
      kanji: "決まる",
      hiragana: "きまる",
      pos: "Động từ",
      meaning: "được quyết định",
      exampleJa: "会議の日時が決まりました。",
      exampleVi: "Ngày giờ họp đã được quyết định."
   },
   {
      kanji: "決める",
      hiragana: "きめる",
      pos: "Động từ",
      meaning: "quyết định",
      exampleJa: "行き先を決めます。",
      exampleVi: "Tôi quyết định nơi đi."
   },
   {
      kanji: "写る",
      hiragana: "うつる",
      pos: "Động từ",
      meaning: "được chụp, phản chiếu",
      exampleJa: "写真に私が写っています。",
      exampleVi: "Tôi xuất hiện trong bức ảnh."
   },
   {
      kanji: "写す",
      hiragana: "うつす",
      pos: "Động từ",
      meaning: "chụp lại, sao chép",
      exampleJa: "写真を写します。",
      exampleVi: "Tôi chụp bức ảnh."
   },
   {
      kanji: "思い出す",
      hiragana: "おもいだす",
      pos: "Động từ",
      meaning: "nhớ lại",
      exampleJa: "昔のことを思い出します。",
      exampleVi: "Tôi nhớ lại chuyện xưa."
   },
   {
      kanji: "教わる",
      hiragana: "おそわる",
      pos: "Động từ",
      meaning: "được dạy, học hỏi",
      exampleJa: "先生に習字を教わります。",
      exampleVi: "Tôi học viết chữ từ thầy giáo."
   },
   {
      kanji: "申し込む",
      hiragana: "もうしこむ",
      pos: "Động từ",
      meaning: "đăng ký, đề nghị",
      exampleJa: "旅行に申し込みました。",
      exampleVi: "Tôi đã đăng ký chuyến du lịch."
   },
   {
      kanji: "断る",
      hiragana: "ことわる",
      pos: "Động từ",
      meaning: "từ chối, bác bỏ",
      exampleJa: "誘いを断りました。",
      exampleVi: "Tôi đã từ chối lời mời."
   },
   {
      kanji: "見つかる",
      hiragana: "みつかる",
      pos: "Động từ",
      meaning: "được tìm thấy",
      exampleJa: "財布が見つかりました。",
      exampleVi: "Ví đã được tìm thấy."
   },
   {
      kanji: "見つける",
      hiragana: "みつける",
      pos: "Động từ",
      meaning: "tìm thấy",
      exampleJa: "財布を見つけました。",
      exampleVi: "Tôi tìm thấy ví."
   },
   {
      kanji: "捕まる",
      hiragana: "つかまる",
      pos: "Động từ",
      meaning: "bị bắt, nắm được",
      exampleJa: "泥棒が捕まりました。",
      exampleVi: "Tên trộm đã bị bắt."
   },
   {
      kanji: "捕まえる",
      hiragana: "つかまえる",
      pos: "Động từ",
      meaning: "bắt, nắm",
      exampleJa: "ボールを捕まえます。",
      exampleVi: "Tôi bắt bóng."
   },
   {
      kanji: "乗る",
      hiragana: "のる",
      pos: "Động từ",
      meaning: "leo lên, đi (phương tiện)",
      exampleJa: "バスに乗ります。",
      exampleVi: "Tôi lên xe buýt."
   },
   {
      kanji: "乗せる",
      hiragana: "のせる",
      pos: "Động từ",
      meaning: "chở, đặt lên",
      exampleJa: "荷物を車に乗せます。",
      exampleVi: "Tôi chở hành lý lên xe."
   },
   {
      kanji: "下りる",
      hiragana: "おりる",
      pos: "Động từ",
      meaning: "xuống (từ phương tiện)",
      exampleJa: "駅で下りる。",
      exampleVi: "Tôi xuống ở ga."
   },
   {
      kanji: "降りる",
      hiragana: "おりる",
      pos: "Động từ",
      meaning: "xuống (xe, núi)",
      exampleJa: "バスから降ります。",
      exampleVi: "Tôi xuống xe buýt."
   },
   {
      kanji: "降ろす",
      hiragana: "おろす",
      pos: "Động từ",
      meaning: "hạ xuống, cho xuống",
      exampleJa: "荷物を降ろします。",
      exampleVi: "Tôi hạ hành lý xuống."
   },
   {
      kanji: "下ろす",
      hiragana: "おろす",
      pos: "Động từ",
      meaning: "rút tiền, hạ xuống",
      exampleJa: "銀行でお金を下ろします。",
      exampleVi: "Tôi rút tiền ở ngân hàng."
   },
   {
      kanji: "直る",
      hiragana: "なおる",
      pos: "Động từ",
      meaning: "được sửa, lành",
      exampleJa: "時計が直りました。",
      exampleVi: "Đồng hồ đã được sửa."
   },
   {
      kanji: "直す",
      hiragana: "なおす",
      pos: "Động từ",
      meaning: "sửa, chỉnh",
      exampleJa: "時計を直します。",
      exampleVi: "Tôi sửa đồng hồ."
   },
   {
      kanji: "治る",
      hiragana: "なおる",
      pos: "Động từ",
      meaning: "khỏi bệnh",
      exampleJa: "風邪が治りました。",
      exampleVi: "Tôi đã khỏi cảm."
   },
   {
      kanji: "治す",
      hiragana: "なおす",
      pos: "Động từ",
      meaning: "chữa bệnh, chữa trị",
      exampleJa: "病気を治します。",
      exampleVi: "Tôi chữa bệnh."
   },
   {
      kanji: "亡くなる",
      hiragana: "なくなる",
      pos: "Động từ",
      meaning: "mất, qua đời",
      exampleJa: "おじいさんが亡くなりました。",
      exampleVi: "Ông tôi đã qua đời."
   },
   {
      kanji: "亡くす",
      hiragana: "なくす",
      pos: "Động từ",
      meaning: "mất đi, mất người thân",
      exampleJa: "親を亡くしました。",
      exampleVi: "Tôi đã mất cha mẹ."
   },
   {
      kanji: "生まれる",
      hiragana: "うまれる",
      pos: "Động từ",
      meaning: "được sinh ra",
      exampleJa: "東京で生まれました。",
      exampleVi: "Tôi được sinh ra ở Tokyo."
   },
   {
      kanji: "生む",
      hiragana: "うむ",
      pos: "Động từ",
      meaning: "sinh, đẻ",
      exampleJa: "赤ちゃんを生みます。",
      exampleVi: "Tôi sinh em bé."
   },
   {
      kanji: "産む",
      hiragana: "うむ",
      pos: "Động từ",
      meaning: "sinh sản, đẻ",
      exampleJa: "牛が子牛を産みました。",
      exampleVi: "Con bò đã đẻ bê con."
   },
   {
      kanji: "出会う",
      hiragana: "であう",
      pos: "Động từ",
      meaning: "gặp gỡ, tình cờ gặp",
      exampleJa: "友達に出会いました。",
      exampleVi: "Tôi đã gặp bạn bè."
   },
   {
      kanji: "訪ねる",
      hiragana: "たずねる",
      pos: "Động từ",
      meaning: "thăm, đến thăm",
      exampleJa: "友達の家を訪ねます。",
      exampleVi: "Tôi đến thăm nhà bạn."
   },
   {
      kanji: "付き合う",
      hiragana: "つきあう",
      pos: "Động từ",
      meaning: "hẹn hò, giao du, quan hệ",
      exampleJa: "彼と付き合っています。",
      exampleVi: "Tôi đang hẹn hò với anh ấy."
   },
   {
      kanji: "効く",
      hiragana: "きく",
      pos: "Động từ",
      meaning: "có tác dụng, hiệu quả",
      exampleJa: "この薬はよく効きます。",
      exampleVi: "Thuốc này rất hiệu quả."
   },
   {
      kanji: "はやす",
      hiragana: "はやす",
      pos: "Động từ",
      meaning: "nuôi (râu, tóc)",
      exampleJa: "ひげをはやしています。",
      exampleVi: "Tôi đang nuôi râu."
   },
   {
      kanji: "経つ",
      hiragana: "たつ",
      pos: "Động từ",
      meaning: "trôi qua (thời gian)",
      exampleJa: "日本に来て一年が経ちました。",
      exampleVi: "Đã trôi qua một năm kể từ khi tôi đến Nhật."
   },
   {
      kanji: "間に合う",
      hiragana: "まにあう",
      pos: "Động từ",
      meaning: "kịp thời, đúng giờ",
      exampleJa: "電車に間に合いました。",
      exampleVi: "Tôi đã kịp lên tàu."
   },
   {
      kanji: "間に合わせる",
      hiragana: "まにあわせる",
      pos: "Động từ",
      meaning: "làm kịp, hoàn thành đúng giờ",
      exampleJa: "レポートを間に合わせました。",
      exampleVi: "Tôi đã hoàn thành báo cáo đúng hạn."
   },
   {
      kanji: "通う",
      hiragana: "かよう",
      pos: "Động từ",
      meaning: "đi lại thường xuyên (trường, nơi làm việc)",
      exampleJa: "学校に通っています。",
      exampleVi: "Tôi đi học đều đặn."
   },
   {
      kanji: "込む",
      hiragana: "こむ",
      pos: "Động từ",
      meaning: "đông đúc, chen chúc",
      exampleJa: "駅が込んでいます。",
      exampleVi: "Ga tàu rất đông."
   },
   {
      kanji: "すれ違う",
      hiragana: "すれちがう",
      pos: "Động từ",
      meaning: "vượt qua nhau, đi lướt qua",
      exampleJa: "道で友達とすれ違いました。",
      exampleVi: "Tôi đã đi lướt qua bạn trên đường."
   },
   {
      kanji: "掛かる",
      hiragana: "かかる",
      pos: "Động từ",
      meaning: "tốn (thời gian, tiền), treo",
      exampleJa: "仕事に時間が掛かります。",
      exampleVi: "Công việc mất nhiều thời gian."
   },
   {
      kanji: "掛ける",
      hiragana: "かける",
      pos: "Động từ",
      meaning: "treo, đặt, gọi (điện thoại)",
      exampleJa: "壁に絵を掛けます。",
      exampleVi: "Tôi treo tranh lên tường."
   },
   {
      kanji: "動く",
      hiragana: "うごく",
      pos: "Động từ",
      meaning: "chuyển động, hoạt động",
      exampleJa: "時計が動いています。",
      exampleVi: "Đồng hồ đang chạy."
   },
   {
      kanji: "動かす",
      hiragana: "うごかす",
      pos: "Động từ",
      meaning: "làm di chuyển, vận hành",
      exampleJa: "机を動かします。",
      exampleVi: "Tôi di chuyển bàn."
   },
   {
      kanji: "離れる",
      hiragana: "はなれる",
      pos: "Động từ",
      meaning: "rời khỏi, cách xa",
      exampleJa: "席を離れます。",
      exampleVi: "Tôi rời khỏi chỗ ngồi."
   },
   {
      kanji: "離す",
      hiragana: "はなす",
      pos: "Động từ",
      meaning: "buông, thả, tách ra",
      exampleJa: "手を離してください。",
      exampleVi: "Hãy buông tay ra."
   },
   {
      kanji: "ぶつかる",
      hiragana: "ぶつかる",
      pos: "Động từ",
      meaning: "va chạm, đụng phải",
      exampleJa: "車とぶつかりました。",
      exampleVi: "Tôi đã va chạm với xe."
   },
   {
      kanji: "ぶつける",
      hiragana: "ぶつける",
      pos: "Động từ",
      meaning: "đâm vào, va vào",
      exampleJa: "壁に頭をぶつけました。",
      exampleVi: "Tôi đập đầu vào tường."
   },
   {
      kanji: "こぼれる",
      hiragana: "こぼれる",
      pos: "Động từ",
      meaning: "bị tràn, bị đổ ra",
      exampleJa: "水がこぼれました。",
      exampleVi: "Nước đã bị đổ ra."
   },
   {
      kanji: "こぼす",
      hiragana: "こぼす",
      pos: "Động từ",
      meaning: "làm tràn, làm đổ",
      exampleJa: "牛乳をこぼしました。",
      exampleVi: "Tôi làm đổ sữa."
   },
   {
      kanji: "ふく",
      hiragana: "ふく",
      pos: "Động từ",
      meaning: "lau, chùi",
      exampleJa: "机をふきます。",
      exampleVi: "Tôi lau bàn."
   },
   {
      kanji: "片付く",
      hiragana: "かたづく",
      pos: "Động từ",
      meaning: "ngăn nắp, được dọn dẹp",
      exampleJa: "部屋が片付きました。",
      exampleVi: "Phòng đã được dọn gọn."
   },
   {
      kanji: "片付ける",
      hiragana: "かたづける",
      pos: "Động từ",
      meaning: "dọn dẹp, sắp xếp",
      exampleJa: "部屋を片付けます。",
      exampleVi: "Tôi dọn dẹp phòng."
   },
   {
      kanji: "包む",
      hiragana: "つつむ",
      pos: "Động từ",
      meaning: "gói, bọc",
      exampleJa: "プレゼントを包みます。",
      exampleVi: "Tôi gói quà."
   },
   {
      kanji: "張る",
      hiragana: "はる",
      pos: "Động từ",
      meaning: "dán, căng ra",
      exampleJa: "壁にポスターを張ります。",
      exampleVi: "Tôi dán poster lên tường."
   },
   {
      kanji: "無くなる",
      hiragana: "なくなる",
      pos: "Động từ",
      meaning: "mất, hết",
      exampleJa: "財布が無くなりました。",
      exampleVi: "Ví đã bị mất."
   },
   {
      kanji: "無くす",
      hiragana: "なくす",
      pos: "Động từ",
      meaning: "làm mất",
      exampleJa: "鍵を無くしました。",
      exampleVi: "Tôi làm mất chìa khóa."
   },
   {
      kanji: "足りる",
      hiragana: "たりる",
      pos: "Động từ",
      meaning: "đủ",
      exampleJa: "お金が足ります。",
      exampleVi: "Tiền đủ."
   },
   {
      kanji: "残る",
      hiragana: "のこる",
      pos: "Động từ",
      meaning: "còn lại, sót lại",
      exampleJa: "ご飯が残っています。",
      exampleVi: "Cơm còn lại."
   },
   {
      kanji: "残す",
      hiragana: "のこす",
      pos: "Động từ",
      meaning: "để lại, sót lại",
      exampleJa: "ご飯を残しました。",
      exampleVi: "Tôi để lại cơm."
   },
   {
      kanji: "腐る",
      hiragana: "くさる",
      pos: "Động từ",
      meaning: "thối rữa, hỏng",
      exampleJa: "果物が腐りました。",
      exampleVi: "Trái cây đã hỏng."
   },
   {
      kanji: "むける",
      hiragana: "むける",
      pos: "Động từ",
      meaning: "bị bóc, bị lột",
      exampleJa: "皮がむけました。",
      exampleVi: "Vỏ bị lột."
   },
   {
      kanji: "むく",
      hiragana: "むく",
      pos: "Động từ",
      meaning: "gọt, lột",
      exampleJa: "りんごの皮をむきます。",
      exampleVi: "Tôi gọt vỏ táo."
   },
   {
      kanji: "滑る",
      hiragana: "すべる",
      pos: "Động từ",
      meaning: "trượt, trơn",
      exampleJa: "道路で滑りました。",
      exampleVi: "Tôi trượt trên đường."
   },
   {
      kanji: "積もる",
      hiragana: "つもる",
      pos: "Động từ",
      meaning: "chất đống, phủ đầy",
      exampleJa: "雪が積もっています。",
      exampleVi: "Tuyết đã phủ đầy."
   },
   {
      kanji: "積む",
      hiragana: "つむ",
      pos: "Động từ",
      meaning: "xếp, chất lên",
      exampleJa: "荷物を車に積みます。",
      exampleVi: "Tôi xếp hành lý lên xe."
   },
   {
      kanji: "空く",
      hiragana: "あく",
      pos: "Động từ",
      meaning: "trống, rảnh",
      exampleJa: "席が空いています。",
      exampleVi: "Chỗ ngồi còn trống."
   },
   {
      kanji: "空ける",
      hiragana: "あける",
      pos: "Động từ",
      meaning: "mở, làm trống",
      exampleJa: "ドアを空けます。",
      exampleVi: "Tôi mở cửa."
   },
   {
      kanji: "下がる",
      hiragana: "さがる",
      pos: "Động từ",
      meaning: "hạ xuống, giảm",
      exampleJa: "温度が下がります。",
      exampleVi: "Nhiệt độ giảm."
   },
   {
      kanji: "下げる",
      hiragana: "さげる",
      pos: "Động từ",
      meaning: "hạ, giảm, treo",
      exampleJa: "値段を下げます。",
      exampleVi: "Tôi giảm giá."
   },
   {
      kanji: "冷える",
      hiragana: "ひえる",
      pos: "Động từ",
      meaning: "lạnh đi",
      exampleJa: "飲み物が冷えました。",
      exampleVi: "Đồ uống đã lạnh."
   },
   {
      kanji: "冷やす",
      hiragana: "ひやす",
      pos: "Động từ",
      meaning: "làm lạnh",
      exampleJa: "飲み物を冷やします。",
      exampleVi: "Tôi làm lạnh đồ uống."
   },
   {
      kanji: "冷める",
      hiragana: "さめる",
      pos: "Động từ",
      meaning: "nguội đi",
      exampleJa: "ご飯が冷めました。",
      exampleVi: "Cơm đã nguội."
   },
   {
      kanji: "冷ます",
      hiragana: "さます",
      pos: "Động từ",
      meaning: "làm nguội",
      exampleJa: "ご飯を冷まします。",
      exampleVi: "Tôi làm nguội cơm."
   },
   {
      kanji: "燃える",
      hiragana: "もえる",
      pos: "Động từ",
      meaning: "cháy",
      exampleJa: "木が燃えています。",
      exampleVi: "Cây đang cháy."
   },
   {
      kanji: "燃やす",
      hiragana: "もやす",
      pos: "Động từ",
      meaning: "đốt cháy",
      exampleJa: "紙を燃やします。",
      exampleVi: "Tôi đốt giấy."
   },
   {
      kanji: "沸く",
      hiragana: "わく",
      pos: "Động từ",
      meaning: "sôi, sục sôi",
      exampleJa: "お湯が沸きました。",
      exampleVi: "Nước đã sôi."
   },
   {
      kanji: "沸かす",
      hiragana: "わかす",
      pos: "Động từ",
      meaning: "đun sôi",
      exampleJa: "お湯を沸かします。",
      exampleVi: "Tôi đun nước sôi."
   },
   {
      kanji: "鳴る",
      hiragana: "なる",
      pos: "Động từ",
      meaning: "kêu, reo (chuông, điện thoại)",
      exampleJa: "電話が鳴っています。",
      exampleVi: "Điện thoại đang reo."
   },
   {
      kanji: "鳴らす",
      hiragana: "ならす",
      pos: "Động từ",
      meaning: "làm kêu, rung (chuông)",
      exampleJa: "ベルを鳴らします。",
      exampleVi: "Tôi rung chuông."
   },
   {
      kanji: "役立つ",
      hiragana: "やくだつ",
      pos: "Động từ",
      meaning: "có ích, hữu ích",
      exampleJa: "この本は勉強に役立ちます。",
      exampleVi: "Cuốn sách này có ích cho việc học."
   },
   {
      kanji: "役に立つ",
      hiragana: "やくにたつ",
      pos: "Động từ",
      meaning: "có ích, giúp được việc gì đó",
      exampleJa: "この情報は役に立ちます。",
      exampleVi: "Thông tin này rất hữu ích."
   },
   {
      kanji: "役立てる",
      hiragana: "やくだてる",
      pos: "Động từ",
      meaning: "sử dụng, tận dụng cho hữu ích",
      exampleJa: "経験を仕事に役立てます。",
      exampleVi: "Tôi tận dụng kinh nghiệm cho công việc."
   },
   {
      kanji: "役に立てる",
      hiragana: "やくにたてる",
      pos: "Động từ",
      meaning: "tận dụng để có ích",
      exampleJa: "知識を役に立てます。",
      exampleVi: "Tôi tận dụng kiến thức cho việc hữu ích."
   },
   {
      kanji: "飾り",
      hiragana: "かざり",
      pos: "Danh từ",
      meaning: "trang trí, đồ trang trí",
      exampleJa: "部屋に飾りを置きます。",
      exampleVi: "Tôi đặt đồ trang trí trong phòng."
   },
   {
      kanji: "遊び",
      hiragana: "あそび",
      pos: "Danh từ",
      meaning: "chơi, trò chơi",
      exampleJa: "子供は公園で遊びます。",
      exampleVi: "Trẻ con chơi ở công viên."
   },
   {
      kanji: "集まり",
      hiragana: "あつまり",
      pos: "Danh từ",
      meaning: "cuộc tụ họp, cuộc họp mặt",
      exampleJa: "友達の集まりに行きます。",
      exampleVi: "Tôi đi đến buổi tụ họp của bạn bè."
   },
   {
      kanji: "教え",
      hiragana: "おしえ",
      pos: "Danh từ",
      meaning: "lời dạy, giáo lý, bài học",
      exampleJa: "先生の教えを守ります。",
      exampleVi: "Tôi tuân theo lời dạy của thầy."
   },
   {
      kanji: "踊り",
      hiragana: "おどり",
      pos: "Danh từ",
      meaning: "múa, điệu múa",
      exampleJa: "盆踊りを踊ります。",
      exampleVi: "Tôi múa điệu Bon."
   },
   {
      kanji: "思い",
      hiragana: "おもい",
      pos: "Danh từ",
      meaning: "suy nghĩ, cảm xúc",
      exampleJa: "彼の思いを聞きました。",
      exampleVi: "Tôi đã nghe suy nghĩ của anh ấy."
   },
   {
      kanji: "考え",
      hiragana: "かんがえ",
      pos: "Danh từ",
      meaning: "ý tưởng, suy nghĩ",
      exampleJa: "新しい考えを出します。",
      exampleVi: "Tôi đưa ra ý tưởng mới."
   },
   {
      kanji: "片づけ",
      hiragana: "かたづけ",
      pos: "Danh từ",
      meaning: "dọn dẹp",
      exampleJa: "部屋の片づけをします。",
      exampleVi: "Tôi dọn dẹp phòng."
   },
   {
      kanji: "手伝い",
      hiragana: "てつだい",
      pos: "Danh từ",
      meaning: "giúp đỡ",
      exampleJa: "掃除の手伝いをします。",
      exampleVi: "Tôi giúp dọn dẹp."
   },
   {
      kanji: "働き",
      hiragana: "はたらき",
      pos: "Danh từ",
      meaning: "công việc, chức năng",
      exampleJa: "心臓の働きは大切です。",
      exampleVi: "Chức năng của tim rất quan trọng."
   },
   {
      kanji: "決まり",
      hiragana: "きまり",
      pos: "Danh từ",
      meaning: "quy định, quyết định",
      exampleJa: "学校の決まりを守ります。",
      exampleVi: "Tôi tuân thủ quy định của trường."
   },
   {
      kanji: "騒ぎ",
      hiragana: "さわぎ",
      pos: "Danh từ",
      meaning: "ồn ào, náo động",
      exampleJa: "子供たちの騒ぎがうるさいです。",
      exampleVi: "Tiếng ồn của bọn trẻ thật ồn ào."
   },
   {
      kanji: "知らせ",
      hiragana: "しらせ",
      pos: "Danh từ",
      meaning: "thông báo, tin tức",
      exampleJa: "知らせを受け取りました。",
      exampleVi: "Tôi đã nhận được thông báo."
   },
   {
      kanji: "頼み",
      hiragana: "たのみ",
      pos: "Danh từ",
      meaning: "yêu cầu, nhờ vả",
      exampleJa: "友達に頼みをしました。",
      exampleVi: "Tôi nhờ bạn một việc."
   },
   {
      kanji: "疲れ",
      hiragana: "つかれ",
      pos: "Danh từ",
      meaning: "sự mệt mỏi",
      exampleJa: "仕事の疲れが取れません。",
      exampleVi: "Tôi không hết mệt sau công việc."
   },
   {
      kanji: "違い",
      hiragana: "ちがい",
      pos: "Danh từ",
      meaning: "sự khác nhau, khác biệt",
      exampleJa: "二つの物の違いを説明します。",
      exampleVi: "Tôi giải thích sự khác nhau của hai vật."
   },
   {
      kanji: "始め",
      hiragana: "はじめ",
      pos: "Danh từ",
      meaning: "bắt đầu",
      exampleJa: "授業の始めに挨拶します。",
      exampleVi: "Tôi chào hỏi vào đầu giờ học."
   },
   {
      kanji: "続き",
      hiragana: "つづき",
      pos: "Danh từ",
      meaning: "tiếp tục, phần tiếp theo",
      exampleJa: "本の続きを読みます。",
      exampleVi: "Tôi đọc phần tiếp theo của cuốn sách."
   },
   {
      kanji: "暮れ",
      hiragana: "くれ",
      pos: "Danh từ",
      meaning: "cuối năm, hoàng hôn",
      exampleJa: "一年の暮れに大掃除をします。",
      exampleVi: "Cuối năm tôi dọn dẹp nhà cửa."
   },
   {
      kanji: "行き",
      hiragana: "いき",
      pos: "Danh từ",
      meaning: "đi, hướng đi",
      exampleJa: "行きの電車に乗ります。",
      exampleVi: "Tôi lên chuyến tàu đi."
   },
   {
      kanji: "帰り",
      hiragana: "かえり",
      pos: "Danh từ",
      meaning: "trở về, chuyến về",
      exampleJa: "帰りのバスに乗ります。",
      exampleVi: "Tôi lên xe buýt để về."
   },
   {
      kanji: "急ぎ",
      hiragana: "いそぎ",
      pos: "Danh từ",
      meaning: "gấp, khẩn trương",
      exampleJa: "急ぎの仕事があります。",
      exampleVi: "Có công việc gấp."
   },
   {
      kanji: "遅れ",
      hiragana: "おくれ",
      pos: "Danh từ",
      meaning: "chậm trễ, muộn",
      exampleJa: "電車の遅れがありました。",
      exampleVi: "Đã có sự chậm trễ của tàu."
   },
   {
      kanji: "貸し",
      hiragana: "かし",
      pos: "Danh từ",
      meaning: "sự cho mượn, khoản vay",
      exampleJa: "本の貸し借りをします。",
      exampleVi: "Tôi cho và mượn sách."
   },
   {
      kanji: "借り",
      hiragana: "かり",
      pos: "Danh từ",
      meaning: "sự mượn, vay",
      exampleJa: "友達から本を借りました。",
      exampleVi: "Tôi mượn sách từ bạn."
   },
   {
      kanji: "勝ち",
      hiragana: "かち",
      pos: "Danh từ",
      meaning: "thắng",
      exampleJa: "試合で勝ちました。",
      exampleVi: "Chúng tôi đã thắng trận đấu."
   },
   {
      kanji: "負け",
      hiragana: "まけ",
      pos: "Danh từ",
      meaning: "thua",
      exampleJa: "試合で負けました。",
      exampleVi: "Tôi đã thua trận đấu."
   },
   {
      kanji: "迎え",
      hiragana: "むかえ",
      pos: "Danh từ",
      meaning: "đón, tiếp đón",
      exampleJa: "駅まで迎えに行きます。",
      exampleVi: "Tôi đi đón ở ga."
   },
   {
      kanji: "始まり",
      hiragana: "はじまり",
      pos: "Danh từ",
      meaning: "bắt đầu",
      exampleJa: "授業の始まりです。",
      exampleVi: "Đây là phần bắt đầu của giờ học."
   },
   {
      kanji: "終わり",
      hiragana: "おわり",
      pos: "Danh từ",
      meaning: "kết thúc",
      exampleJa: "授業の終わりです。",
      exampleVi: "Đây là kết thúc của giờ học."
   },
   {
      kanji: "戻り",
      hiragana: "もどり",
      pos: "Danh từ",
      meaning: "sự trở lại",
      exampleJa: "家に戻りましょう。",
      exampleVi: "Chúng ta hãy về nhà."
   },
   {
      kanji: "別れ",
      hiragana: "わかれ",
      pos: "Danh từ",
      meaning: "chia tay",
      exampleJa: "友達と別れました。",
      exampleVi: "Tôi đã chia tay bạn bè."
   },
   {
      kanji: "喜び",
      hiragana: "よろこび",
      pos: "Danh từ",
      meaning: "niềm vui",
      exampleJa: "合格の喜びを感じます。",
      exampleVi: "Tôi cảm nhận niềm vui khi đỗ."
   },
   {
      kanji: "楽しみ",
      hiragana: "たのしみ",
      pos: "Danh từ",
      meaning: "niềm vui, điều mong đợi",
      exampleJa: "旅行が楽しみです。",
      exampleVi: "Tôi mong chờ chuyến du lịch."
   },
   {
      kanji: "笑い",
      hiragana: "わらい",
      pos: "Danh từ",
      meaning: "tiếng cười",
      exampleJa: "友達の笑いが聞こえます。",
      exampleVi: "Tôi nghe tiếng cười của bạn."
   },
   {
      kanji: "驚き",
      hiragana: "おどろき",
      pos: "Danh từ",
      meaning: "sự ngạc nhiên",
      exampleJa: "驚きのニュースを聞きました。",
      exampleVi: "Tôi nghe tin tức đầy bất ngờ."
   },
   {
      kanji: "怒り",
      hiragana: "いかり",
      pos: "Danh từ",
      meaning: "sự tức giận",
      exampleJa: "彼の態度に怒りを感じます。",
      exampleVi: "Tôi cảm thấy tức giận với thái độ của anh ấy."
   },
   {
      kanji: "悲しみ",
      hiragana: "かなしみ",
      pos: "Danh từ",
      meaning: "nỗi buồn",
      exampleJa: "悲しみを乗り越えます。",
      exampleVi: "Tôi vượt qua nỗi buồn."
   },
   {
      kanji: "幸せな",
      hiragana: "しあわせな",
      pos: "Tính từ",
      meaning: "hạnh phúc",
      exampleJa: "幸せな生活を送ります。",
      exampleVi: "Tôi sống một cuộc sống hạnh phúc."
   },
   {
      kanji: "得意な",
      hiragana: "とくいな",
      pos: "Tính từ",
      meaning: "giỏi, thế mạnh",
      exampleJa: "数学が得意です。",
      exampleVi: "Tôi giỏi môn toán."
   },
   {
      kanji: "苦手な",
      hiragana: "にがてな",
      pos: "Tính từ",
      meaning: "yếu, kém, không giỏi",
      exampleJa: "歌が苦手です。",
      exampleVi: "Tôi không giỏi hát."
   },
   {
      kanji: "熱心な",
      hiragana: "ねっしんな",
      pos: "Tính từ",
      meaning: "nhiệt tình, chăm chỉ",
      exampleJa: "勉強に熱心です。",
      exampleVi: "Tôi chăm chỉ học tập."
   },
   {
      kanji: "夢中な",
      hiragana: "むちゅうな",
      pos: "Tính từ",
      meaning: "say mê, chú tâm",
      exampleJa: "ゲームに夢中です。",
      exampleVi: "Tôi say mê chơi game."
   },
   {
      kanji: "退屈な",
      hiragana: "たいくつな",
      pos: "Tính từ",
      meaning: "chán, tẻ nhạt",
      exampleJa: "授業が退屈です。",
      exampleVi: "Giờ học thật chán."
   },
   {
      kanji: "健康な",
      hiragana: "けんこうな",
      pos: "Tính từ",
      meaning: "khỏe mạnh",
      exampleJa: "健康な体を保ちます。",
      exampleVi: "Tôi giữ cơ thể khỏe mạnh."
   },
   {
      kanji: "苦しい",
      hiragana: "くるしい",
      pos: "Tính từ",
      meaning: "khó khăn, đau đớn",
      exampleJa: "息が苦しいです。",
      exampleVi: "Tôi khó thở."
   },
   {
      kanji: "平気な",
      hiragana: "へいきな",
      pos: "Tính từ",
      meaning: "bình tĩnh, không sao",
      exampleJa: "怪我をしても平気です。",
      exampleVi: "Dù bị thương tôi vẫn bình thường."
   },
   {
      kanji: "悔しい",
      hiragana: "くやしい",
      pos: "Tính từ",
      meaning: "hối tiếc, cay cú",
      exampleJa: "試合に負けて悔しいです。",
      exampleVi: "Tôi cảm thấy cay cú khi thua trận."
   },
   {
      kanji: "うらやましい",
      hiragana: "うらやましい",
      pos: "Tính từ",
      meaning: "ghen tị, ghen ghét",
      exampleJa: "友達が成功してうらやましいです。",
      exampleVi: "Tôi ghen tị khi bạn tôi thành công."
   },
   {
      kanji: "かゆい",
      hiragana: "かゆい",
      pos: "Tính từ",
      meaning: "ngứa",
      exampleJa: "虫に刺されてかゆいです。",
      exampleVi: "Tôi bị côn trùng cắn và ngứa."
   },
   {
      kanji: "おとなしい",
      hiragana: "おとなしい",
      pos: "Tính từ",
      meaning: "hiền lành, trầm tính",
      exampleJa: "彼はおとなしい性格です。",
      exampleVi: "Anh ấy có tính cách hiền lành."
   },
   {
      kanji: "我慢強い",
      hiragana: "がまんづよい",
      pos: "Tính từ",
      meaning: "kiên nhẫn, chịu đựng giỏi",
      exampleJa: "彼女は我慢強いです。",
      exampleVi: "Cô ấy rất kiên nhẫn."
   },
   {
      kanji: "正直な",
      hiragana: "しょうじきな",
      pos: "Tính từ",
      meaning: "thật thà, trung thực",
      exampleJa: "正直な人が好きです。",
      exampleVi: "Tôi thích người thật thà."
   },
   {
      kanji: "けちな",
      hiragana: "けちな",
      pos: "Tính từ",
      meaning: "keo kiệt, bủn xỉn",
      exampleJa: "彼はけちな人です。",
      exampleVi: "Anh ấy là người keo kiệt."
   },
   {
      kanji: "わがままな",
      hiragana: "わがままな",
      pos: "Tính từ",
      meaning: "ích kỷ, tự ý muốn",
      exampleJa: "子供がわがままです。",
      exampleVi: "Đứa trẻ rất ích kỷ."
   },
   {
      kanji: "積極的な",
      hiragana: "せっきょくてきな",
      pos: "Tính từ",
      meaning: "tích cực, chủ động",
      exampleJa: "積極的に行動します。",
      exampleVi: "Tôi hành động một cách tích cực."
   },
   {
      kanji: "消極的な",
      hiragana: "しょうきょくてきな",
      pos: "Tính từ",
      meaning: "tiêu cực, thụ động",
      exampleJa: "消極的に考えます。",
      exampleVi: "Tôi suy nghĩ một cách thụ động."
   },
   {
      kanji: "満足な",
      hiragana: "まんぞくな",
      pos: "Tính từ",
      meaning: "hài lòng, thỏa mãn",
      exampleJa: "結果に満足です。",
      exampleVi: "Tôi hài lòng với kết quả."
   },
   {
      kanji: "不満な",
      hiragana: "ふまんな",
      pos: "Tính từ",
      meaning: "không hài lòng",
      exampleJa: "サービスに不満です。",
      exampleVi: "Tôi không hài lòng với dịch vụ."
   },
   {
      kanji: "不安な",
      hiragana: "ふあんな",
      pos: "Tính từ",
      meaning: "lo lắng, bất an",
      exampleJa: "明日の試験が不安です。",
      exampleVi: "Tôi lo lắng cho kỳ thi ngày mai."
   },
   {
      kanji: "大変な",
      hiragana: "たいへんな",
      pos: "Tính từ",
      meaning: "khó khăn, vất vả",
      exampleJa: "仕事が大変です。",
      exampleVi: "Công việc rất vất vả."
   },
   {
      kanji: "無理な",
      hiragana: "むりな",
      pos: "Tính từ",
      meaning: "vô lý, quá sức",
      exampleJa: "無理なお願いをしました。",
      exampleVi: "Tôi đã đưa ra yêu cầu quá sức."
   },
   {
      kanji: "不注意な",
      hiragana: "ふちゅういな",
      pos: "Tính từ",
      meaning: "cẩu thả, bất cẩn",
      exampleJa: "不注意で事故が起きました。",
      exampleVi: "Vì bất cẩn mà xảy ra tai nạn."
   },
   {
      kanji: "楽な",
      hiragana: "らくな",
      pos: "Tính từ",
      meaning: "dễ chịu, thoải mái",
      exampleJa: "この椅子は楽です。",
      exampleVi: "Cái ghế này thoải mái."
   },
   {
      kanji: "面倒な",
      hiragana: "めんどうな",
      pos: "Tính từ",
      meaning: "phiền phức, rắc rối",
      exampleJa: "手続きが面倒です。",
      exampleVi: "Thủ tục thật phiền phức."
   },
   {
      kanji: "失礼な",
      hiragana: "しつれいな",
      pos: "Tính từ",
      meaning: "thất lễ, khiếm nhã",
      exampleJa: "失礼な態度です。",
      exampleVi: "Thái độ thật thất lễ."
   },
   {
      kanji: "当然な",
      hiragana: "とうぜんな",
      pos: "Tính từ",
      meaning: "đương nhiên, tất nhiên",
      exampleJa: "努力すれば成功は当然です。",
      exampleVi: "Nếu nỗ lực thì thành công là điều tất nhiên."
   },
   {
      kanji: "意外な",
      hiragana: "いがいな",
      pos: "Tính từ",
      meaning: "ngoài dự đoán, bất ngờ",
      exampleJa: "結果は意外でした。",
      exampleVi: "Kết quả thật bất ngờ."
   },
   {
      kanji: "結構な",
      hiragana: "けっこうな",
      pos: "Tính từ",
      meaning: "đẹp, tuyệt, ổn",
      exampleJa: "結構な出来栄えです。",
      exampleVi: "Đây là sản phẩm tuyệt vời."
   },
   {
      kanji: "派手な",
      hiragana: "はでな",
      pos: "Tính từ",
      meaning: "loè loẹt, sặc sỡ",
      exampleJa: "彼は派手な服を着ています。",
      exampleVi: "Anh ấy mặc quần áo sặc sỡ."
   },
   {
      kanji: "地味な",
      hiragana: "じみな",
      pos: "Tính từ",
      meaning: "giản dị, đơn giản",
      exampleJa: "地味な服を選びます。",
      exampleVi: "Tôi chọn quần áo giản dị."
   },
   {
      kanji: "おしゃれな",
      hiragana: "おしゃれな",
      pos: "Tính từ",
      meaning: "thời trang, sành điệu",
      exampleJa: "彼女はおしゃれです。",
      exampleVi: "Cô ấy rất sành điệu."
   },
   {
      kanji: "変な",
      hiragana: "へんな",
      pos: "Tính từ",
      meaning: "lạ, kỳ quặc",
      exampleJa: "変な音がします。",
      exampleVi: "Có tiếng động lạ."
   },
   {
      kanji: "不思議な",
      hiragana: "ふしぎな",
      pos: "Tính từ",
      meaning: "kỳ lạ, thần bí",
      exampleJa: "不思議な話を聞きました。",
      exampleVi: "Tôi nghe một câu chuyện kỳ lạ."
   },
   {
      kanji: "ましな",
      hiragana: "ましな",
      pos: "Tính từ",
      meaning: "tốt hơn, hơn một chút",
      exampleJa: "前よりましです。",
      exampleVi: "Tốt hơn trước một chút."
   },
   {
      kanji: "むだな",
      hiragana: "むだな",
      pos: "Tính từ",
      meaning: "lãng phí, vô ích",
      exampleJa: "むだな時間を過ごしました。",
      exampleVi: "Tôi đã lãng phí thời gian."
   },
   {
      kanji: "自由な",
      hiragana: "じゆうな",
      pos: "Tính từ",
      meaning: "tự do",
      exampleJa: "自由な時間があります。",
      exampleVi: "Tôi có thời gian tự do."
   },
   {
      kanji: "不自由な",
      hiragana: "ふじゆうな",
      pos: "Tính từ",
      meaning: "không tự do, khó khăn",
      exampleJa: "足が不自由です。",
      exampleVi: "Chân tôi bị hạn chế vận động."
   },
   {
      kanji: "暖まる",
      hiragana: "あたたまる",
      pos: "Động từ tự động từ",
      meaning: "ấm lên",
      exampleJa: "部屋が暖まります。",
      exampleVi: "Phòng ấm lên."
   },
   {
      kanji: "暖める",
      hiragana: "あたためる",
      pos: "Động từ tha động từ",
      meaning: "làm ấm",
      exampleJa: "部屋を暖めます。",
      exampleVi: "Tôi làm ấm phòng."
   },
   {
      kanji: "温まる",
      hiragana: "あたたまる",
      pos: "Động từ tự động từ",
      meaning: "nóng lên, ấm lên",
      exampleJa: "お風呂で体が温まります。",
      exampleVi: "Cơ thể ấm lên trong bồn tắm."
   },
   {
      kanji: "温める",
      hiragana: "あたためる",
      pos: "Động từ tha động từ",
      meaning: "làm nóng, làm ấm",
      exampleJa: "スープを温めます。",
      exampleVi: "Tôi làm nóng súp."
   },
   {
      kanji: "高まる",
      hiragana: "たかまる",
      pos: "Động từ tự động từ",
      meaning: "tăng lên, nâng cao",
      exampleJa: "気持ちが高まります。",
      exampleVi: "Cảm xúc tăng lên."
   },
   {
      kanji: "高める",
      hiragana: "たかめる",
      pos: "Động từ tha động từ",
      meaning: "nâng cao, làm tăng",
      exampleJa: "能力を高めます。",
      exampleVi: "Tôi nâng cao năng lực."
   },
   {
      kanji: "強まる",
      hiragana: "つよまる",
      pos: "Động từ tự động từ",
      meaning: "mạnh lên, tăng cường",
      exampleJa: "風が強まります。",
      exampleVi: "Gió mạnh lên."
   },
   {
      kanji: "強める",
      hiragana: "つよめる",
      pos: "Động từ tha động từ",
      meaning: "làm mạnh, tăng cường",
      exampleJa: "運動で体を強めます。",
      exampleVi: "Tôi tăng cường cơ thể bằng tập thể dục."
   },
   {
      kanji: "弱まる",
      hiragana: "よわまる",
      pos: "Động từ tự động từ",
      meaning: "yếu đi, giảm bớt",
      exampleJa: "雨が弱まります。",
      exampleVi: "Mưa giảm bớt."
   },
   {
      kanji: "弱める",
      hiragana: "よわめる",
      pos: "Động từ tha động từ",
      meaning: "làm yếu, giảm bớt",
      exampleJa: "音を弱めます。",
      exampleVi: "Tôi giảm âm thanh."
   },
   {
      kanji: "広まる",
      hiragana: "ひろまる",
      pos: "Động từ tự động từ",
      meaning: "lan rộng, phổ biến",
      exampleJa: "情報が広まります。",
      exampleVi: "Thông tin được lan rộng."
   },
   {
      kanji: "広める",
      hiragana: "ひろめる",
      pos: "Động từ tha động từ",
      meaning: "làm lan rộng, phổ biến",
      exampleJa: "知識を広めます。",
      exampleVi: "Tôi phổ biến kiến thức."
   },
   {
      kanji: "深まる",
      hiragana: "ふかまる",
      pos: "Động từ tự động từ",
      meaning: "sâu thêm, tăng lên",
      exampleJa: "理解が深まります。",
      exampleVi: "Hiểu biết sâu thêm."
   },
   {
      kanji: "深める",
      hiragana: "ふかめる",
      pos: "Động từ tha động từ",
      meaning: "làm sâu thêm, tăng cường",
      exampleJa: "関係を深めます。",
      exampleVi: "Tôi làm sâu sắc thêm mối quan hệ."
   },
];
