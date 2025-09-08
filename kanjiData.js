const kanjiData = [
   {
      kanji: "起きる",
      hiragana: "おきる",
      pos: "Động từ",
      meaning: "thức dậy",
      exampleJa: "毎朝6時に起きます。",
      exampleVi: "Mỗi sáng tôi thức dậy lúc 6 giờ."
   },
   {
      kanji: "起こす",
      hiragana: "おこす",
      pos: "Động từ",
      meaning: "đánh thức, gây ra",
      exampleJa: "母が私を起こしました。",
      exampleVi: "Mẹ đã đánh thức tôi."
   },
   {
      kanji: "寝台車",
      hiragana: "しんだいしゃ",
      pos: "Danh từ",
      meaning: "toa tàu giường nằm",
      exampleJa: "寝台車で大阪へ行きました。",
      exampleVi: "Tôi đã đi Osaka bằng toa giường nằm."
   },
   {
      kanji: "日光浴",
      hiragana: "にっこうよく",
      pos: "Danh từ",
      meaning: "tắm nắng",
      exampleJa: "海で日光浴をしました。",
      exampleVi: "Tôi đã tắm nắng ở biển."
   },
   {
      kanji: "お湯",
      hiragana: "おゆ",
      pos: "Danh từ",
      meaning: "nước nóng",
      exampleJa: "お湯をわかしています。",
      exampleVi: "Tôi đang đun nước nóng."
   },
   {
      kanji: "起こる",
      hiragana: "おこる",
      pos: "Động từ",
      meaning: "xảy ra",
      exampleJa: "事故が起こりました。",
      exampleVi: "Đã xảy ra tai nạn."
   },
   {
      kanji: "寝室",
      hiragana: "しんしつ",
      pos: "Danh từ",
      meaning: "phòng ngủ",
      exampleJa: "寝室は二階にあります。",
      exampleVi: "Phòng ngủ ở tầng hai."
   },
   {
      kanji: "浴びる",
      hiragana: "あびる",
      pos: "Động từ",
      meaning: "tắm, dội, chiếu",
      exampleJa: "毎朝シャワーを浴びます。",
      exampleVi: "Mỗi sáng tôi tắm vòi sen."
   },
   {
      kanji: "浴室",
      hiragana: "よくしつ",
      pos: "Danh từ",
      meaning: "phòng tắm",
      exampleJa: "浴室は広いです。",
      exampleVi: "Phòng tắm thì rộng."
   },
   {
      kanji: "熱湯",
      hiragana: "ねっとう",
      pos: "Danh từ",
      meaning: "nước sôi",
      exampleJa: "熱湯に気をつけてください。",
      exampleVi: "Hãy cẩn thận với nước sôi."
   },
   {
      kanji: "早起き",
      hiragana: "はやおき",
      pos: "Danh từ",
      meaning: "thức dậy sớm",
      exampleJa: "父は毎日早起きです。",
      exampleVi: "Bố tôi ngày nào cũng dậy sớm."
   },
   {
      kanji: "昼寝",
      hiragana: "ひるね",
      pos: "Danh từ",
      meaning: "ngủ trưa",
      exampleJa: "昼寝を30分しました。",
      exampleVi: "Tôi đã ngủ trưa 30 phút."
   },
   {
      kanji: "水浴び",
      hiragana: "みずあび",
      pos: "Danh từ",
      meaning: "tắm nước",
      exampleJa: "川で水浴びをしました。",
      exampleVi: "Tôi đã tắm sông."
   },
   {
      kanji: "海水浴場",
      hiragana: "かいすいよくじょう",
      pos: "Danh từ",
      meaning: "bãi tắm biển",
      exampleJa: "夏に海水浴場へ行きます。",
      exampleVi: "Mùa hè tôi đi bãi tắm biển."
   },
   {
      kanji: "起動",
      hiragana: "きどう",
      pos: "Danh từ/Động từ",
      meaning: "khởi động",
      exampleJa: "パソコンを起動します。",
      exampleVi: "Khởi động máy tính."
   },
   {
      kanji: "寝かす",
      hiragana: "ねかす",
      pos: "Động từ",
      meaning: "cho ngủ, đặt nằm",
      exampleJa: "赤ちゃんを寝かせます。",
      exampleVi: "Tôi cho em bé ngủ."
   },
   {
      kanji: "浴びせる",
      hiragana: "あびせる",
      pos: "Động từ",
      meaning: "dội, rót vào, chĩa vào",
      exampleJa: "質問を浴びせられました。",
      exampleVi: "Tôi bị dồn dập câu hỏi."
   },
   {
      kanji: "湯船",
      hiragana: "ゆぶね",
      pos: "Danh từ",
      meaning: "bồn tắm",
      exampleJa: "湯船に入ってリラックスします。",
      exampleVi: "Tôi ngâm bồn để thư giãn."
   },
   {
      kanji: "浴衣",
      hiragana: "ゆかた",
      pos: "Danh từ",
      meaning: "yukata (kimono mặc mùa hè)",
      exampleJa: "夏祭りで浴衣を着ます。",
      exampleVi: "Mặc yukata trong lễ hội mùa hè."
   },
   {
      kanji: "洗う",
      hiragana: "あらう",
      pos: "Động từ",
      meaning: "rửa, giặt",
      exampleJa: "手を洗ってください。",
      exampleVi: "Hãy rửa tay."
   },
   {
      kanji: "水洗",
      hiragana: "すいせん",
      pos: "Danh từ",
      meaning: "xả nước, rửa bằng nước",
      exampleJa: "水洗トイレがあります。",
      exampleVi: "Có nhà vệ sinh xả nước."
   },
   {
      kanji: "干す",
      hiragana: "ほす",
      pos: "Động từ",
      meaning: "phơi khô",
      exampleJa: "洗濯物を干します。",
      exampleVi: "Phơi quần áo đã giặt."
   },
   {
      kanji: "若干名",
      hiragana: "じゃっかんめい",
      pos: "Danh từ",
      meaning: "một vài người",
      exampleJa: "アルバイトを若干名募集します。",
      exampleVi: "Tuyển một vài nhân viên làm thêm."
   },
   {
      kanji: "活動",
      hiragana: "かつどう",
      pos: "Danh từ/Động từ",
      meaning: "hoạt động",
      exampleJa: "ボランティア活動に参加します。",
      exampleVi: "Tôi tham gia hoạt động tình nguyện."
   },
   {
      kanji: "洗剤",
      hiragana: "せんざい",
      pos: "Danh từ",
      meaning: "chất tẩy rửa, xà phòng",
      exampleJa: "洗剤で食器を洗います。",
      exampleVi: "Rửa bát bằng nước rửa chén."
   },
   {
      kanji: "干物",
      hiragana: "ひもの",
      pos: "Danh từ",
      meaning: "đồ khô (cá khô, mực khô...)",
      exampleJa: "干物を焼いて食べます。",
      exampleVi: "Nướng đồ khô để ăn."
   },
   {
      kanji: "生活",
      hiragana: "せいかつ",
      pos: "Danh từ/Động từ",
      meaning: "cuộc sống, sinh hoạt",
      exampleJa: "日本で生活しています。",
      exampleVi: "Tôi đang sinh sống ở Nhật."
   },
   {
      kanji: "活発に",
      hiragana: "かっぱつに",
      pos: "Trạng từ",
      meaning: "một cách năng động, sôi nổi",
      exampleJa: "子供が活発に遊んでいます。",
      exampleVi: "Bọn trẻ chơi rất năng động."
   },
   {
      kanji: "手洗い",
      hiragana: "てあらい",
      pos: "Danh từ",
      meaning: "rửa tay",
      exampleJa: "食事の前に手洗いをしましょう。",
      exampleVi: "Trước khi ăn hãy rửa tay."
   },
   {
      kanji: "洗濯",
      hiragana: "せんたく",
      pos: "Danh từ/Động từ",
      meaning: "giặt giũ",
      exampleJa: "毎日洗濯をします。",
      exampleVi: "Ngày nào tôi cũng giặt đồ."
   },
   {
      kanji: "食生活",
      hiragana: "しょくせいかつ",
      pos: "Danh từ",
      meaning: "chế độ ăn uống, thói quen ăn uống",
      exampleJa: "食生活に気をつけています。",
      exampleVi: "Tôi chú ý đến chế độ ăn uống."
   },
   {
      kanji: "活用",
      hiragana: "かつよう",
      pos: "Danh từ/Động từ",
      meaning: "tận dụng, sử dụng hiệu quả",
      exampleJa: "辞書を活用します。",
      exampleVi: "Tôi tận dụng từ điển."
   },
   {
      kanji: "洗面所",
      hiragana: "せんめんじょ",
      pos: "Danh từ",
      meaning: "nhà tắm, nơi rửa mặt",
      exampleJa: "洗面所は台所の隣です。",
      exampleVi: "Nhà tắm ở cạnh bếp."
   },
   {
      kanji: "活気",
      hiragana: "かっき",
      pos: "Danh từ",
      meaning: "sôi động, náo nhiệt",
      exampleJa: "市場は活気があります。",
      exampleVi: "Khu chợ rất sôi động."
   },
   {
      kanji: "干渉",
      hiragana: "かんしょう",
      pos: "Danh từ/Động từ",
      meaning: "can thiệp, xen vào",
      exampleJa: "人の生活に干渉しないでください。",
      exampleVi: "Xin đừng can thiệp vào cuộc sống của người khác."
   },
   {
      kanji: "拾う",
      hiragana: "ひろう",
      pos: "Động từ",
      meaning: "nhặt, lượm",
      exampleJa: "道で財布を拾いました。",
      exampleVi: "Tôi nhặt được ví trên đường."
   },
   {
      kanji: "拾万円",
      hiragana: "じゅうまんえん",
      pos: "Danh từ",
      meaning: "mười vạn yên (100.000 yên)",
      exampleJa: "拾万円を貯金しました。",
      exampleVi: "Tôi đã tiết kiệm 100.000 yên."
   },
   {
      kanji: "四捨五入",
      hiragana: "ししゃごにゅう",
      pos: "Danh từ/Động từ",
      meaning: "làm tròn số",
      exampleJa: "数字を四捨五入します。",
      exampleVi: "Làm tròn con số."
   },
   {
      kanji: "燃す",
      hiragana: "もす",
      pos: "Động từ",
      meaning: "đốt cháy",
      exampleJa: "紙を燃します。",
      exampleVi: "Đốt giấy."
   },
   {
      kanji: "袋",
      hiragana: "ふくろ",
      pos: "Danh từ",
      meaning: "túi, bao",
      exampleJa: "袋をください。",
      exampleVi: "Làm ơn cho tôi cái túi."
   },
   {
      kanji: "拾得物",
      hiragana: "しゅうとくぶつ",
      pos: "Danh từ",
      meaning: "đồ nhặt được",
      exampleJa: "拾得物を交番に届けました。",
      exampleVi: "Tôi mang đồ nhặt được đến đồn cảnh sát."
   },
   {
      kanji: "捨てる",
      hiragana: "すてる",
      pos: "Động từ",
      meaning: "vứt, bỏ",
      exampleJa: "ごみを捨てないでください。",
      exampleVi: "Xin đừng vứt rác."
   },
   {
      kanji: "燃えた",
      hiragana: "もえた",
      pos: "Động từ (quá khứ)",
      meaning: "đã cháy",
      exampleJa: "古い家が燃えた。",
      exampleVi: "Ngôi nhà cũ đã cháy."
   },
   {
      kanji: "燃料",
      hiragana: "ねんりょう",
      pos: "Danh từ",
      meaning: "nhiên liệu",
      exampleJa: "車は燃料が必要です。",
      exampleVi: "Xe cần có nhiên liệu."
   },
   {
      kanji: "紙袋",
      hiragana: "かみぶくろ",
      pos: "Danh từ",
      meaning: "túi giấy",
      exampleJa: "紙袋にりんごを入れました。",
      exampleVi: "Tôi cho táo vào túi giấy."
   },
   {
      kanji: "手袋",
      hiragana: "てぶくろ",
      pos: "Danh từ",
      meaning: "găng tay",
      exampleJa: "冬に手袋をします。",
      exampleVi: "Mùa đông tôi đeo găng tay."
   },
   {
      kanji: "燃やす",
      hiragana: "もやす",
      pos: "Động từ",
      meaning: "đốt cháy",
      exampleJa: "落ち葉を燃やしました。",
      exampleVi: "Tôi đã đốt lá rụng."
   },
   {
      kanji: "足袋",
      hiragana: "たび",
      pos: "Danh từ",
      meaning: "tất tabi (mang với kimono)",
      exampleJa: "着物に足袋を合わせます。",
      exampleVi: "Mang tất tabi với kimono."
   },
   {
      kanji: "風袋",
      hiragana: "ふうたい",
      pos: "Danh từ",
      meaning: "bao bì (trọng lượng bao bì)",
      exampleJa: "風袋を引いて重さを測ります。",
      exampleVi: "Trừ bì để đo trọng lượng."
   },
   {
      kanji: "日曜日",
      hiragana: "にちようび",
      pos: "Danh từ",
      meaning: "chủ nhật",
      exampleJa: "日曜日に友達と会います。",
      exampleVi: "Tôi gặp bạn vào chủ nhật."
   },
   {
      kanji: "週末",
      hiragana: "しゅうまつ",
      pos: "Danh từ",
      meaning: "cuối tuần",
      exampleJa: "週末に映画を見ました。",
      exampleVi: "Cuối tuần tôi đã xem phim."
   },
   {
      kanji: "結末",
      hiragana: "けつまつ",
      pos: "Danh từ",
      meaning: "kết cục, kết thúc",
      exampleJa: "話の結末を知りたいです。",
      exampleVi: "Tôi muốn biết kết cục của câu chuyện."
   },
   {
      kanji: "昨晩",
      hiragana: "さくばん",
      pos: "Danh từ",
      meaning: "tối qua",
      exampleJa: "昨晩は雨でした。",
      exampleVi: "Tối qua trời mưa."
   },
   {
      kanji: "翌朝",
      hiragana: "よくあさ",
      pos: "Danh từ",
      meaning: "sáng hôm sau",
      exampleJa: "翌朝早く出発しました。",
      exampleVi: "Sáng hôm sau tôi khởi hành sớm."
   },
   {
      kanji: "火曜日",
      hiragana: "かようび",
      pos: "Danh từ",
      meaning: "thứ ba",
      exampleJa: "火曜日に会議があります。",
      exampleVi: "Có cuộc họp vào thứ ba."
   },
   {
      kanji: "期末",
      hiragana: "きまつ",
      pos: "Danh từ",
      meaning: "cuối kỳ",
      exampleJa: "期末試験があります。",
      exampleVi: "Có kỳ thi cuối kỳ."
   },
   {
      kanji: "末",
      hiragana: "すえ",
      pos: "Danh từ",
      meaning: "cuối, sau cùng",
      exampleJa: "月の末に旅行します。",
      exampleVi: "Tôi sẽ đi du lịch vào cuối tháng."
   },
   {
      kanji: "翌日",
      hiragana: "よくじつ",
      pos: "Danh từ",
      meaning: "ngày hôm sau",
      exampleJa: "翌日に結果が分かります。",
      exampleVi: "Ngày hôm sau sẽ biết kết quả."
   },
   {
      kanji: "曜日",
      hiragana: "ようび",
      pos: "Danh từ",
      meaning: "thứ (trong tuần)",
      exampleJa: "今日は何曜日ですか。",
      exampleVi: "Hôm nay là thứ mấy?"
   },
   {
      kanji: "月末",
      hiragana: "げつまつ",
      pos: "Danh từ",
      meaning: "cuối tháng",
      exampleJa: "月末にお金を払います。",
      exampleVi: "Tôi sẽ trả tiền vào cuối tháng."
   },
   {
      kanji: "年末",
      hiragana: "ねんまつ",
      pos: "Danh từ",
      meaning: "cuối năm",
      exampleJa: "年末は忙しいです。",
      exampleVi: "Cuối năm rất bận rộn."
   },
   {
      kanji: "昨夜",
      hiragana: "さくや",
      pos: "Danh từ",
      meaning: "tối qua, đêm qua",
      exampleJa: "昨夜はよく眠れました。",
      exampleVi: "Đêm qua tôi ngủ ngon."
   },
   {
      kanji: "木曜日",
      hiragana: "もくようび",
      pos: "Danh từ",
      meaning: "thứ năm",
      exampleJa: "木曜日にテストがあります。",
      exampleVi: "Có bài kiểm tra vào thứ năm."
   },
   {
      kanji: "末っ子",
      hiragana: "すえっこ",
      pos: "Danh từ",
      meaning: "con út",
      exampleJa: "彼は三人兄弟の末っ子です。",
      exampleVi: "Anh ấy là con út trong ba anh em."
   },
   {
      kanji: "昨日",
      hiragana: "きのう",
      pos: "Danh từ",
      meaning: "hôm qua",
      exampleJa: "昨日映画を見ました。",
      exampleVi: "Hôm qua tôi đã xem phim."
   },
   {
      kanji: "昨日",
      hiragana: "さくじつ",
      pos: "Danh từ (trang trọng)",
      meaning: "hôm qua",
      exampleJa: "昨日はありがとうございました。",
      exampleVi: "Hôm qua cảm ơn anh/chị rất nhiều."
   },
   {
      kanji: "翌年",
      hiragana: "よくねん",
      pos: "Danh từ",
      meaning: "năm sau đó",
      exampleJa: "翌年大学に入りました。",
      exampleVi: "Năm sau đó tôi vào đại học."
   },
   {
      kanji: "一昨年",
      hiragana: "いっさくねん",
      pos: "Danh từ (trang trọng, văn viết)",
      meaning: "năm kia",
      exampleJa: "一昨年日本へ行きました。",
      exampleVi: "Năm kia tôi đã đi Nhật."
   },
   {
      kanji: "一昨年",
      hiragana: "おととし",
      pos: "Danh từ (thông dụng, văn nói)",
      meaning: "năm kia",
      exampleJa: "おととし大学を卒業しました。",
      exampleVi: "Năm kia tôi đã tốt nghiệp đại học."
   },
   {
      kanji: "末子",
      hiragana: "まっし / すえっこ",
      pos: "Danh từ",
      meaning: "con út",
      exampleJa: "彼は三人兄弟の末子です。",
      exampleVi: "Anh ấy là con út trong ba anh em."
   },
   {
      kanji: "予定",
      hiragana: "よてい",
      pos: "Danh từ",
      meaning: "dự định, kế hoạch",
      exampleJa: "週末に旅行の予定があります。",
      exampleVi: "Cuối tuần tôi có kế hoạch đi du lịch."
   },
   {
      kanji: "定年",
      hiragana: "ていねん",
      pos: "Danh từ",
      meaning: "tuổi nghỉ hưu",
      exampleJa: "父は来年定年を迎えます。",
      exampleVi: "Bố tôi sẽ đến tuổi nghỉ hưu vào năm sau."
   },
   {
      kanji: "用事",
      hiragana: "ようじ",
      pos: "Danh từ",
      meaning: "việc bận, công chuyện",
      exampleJa: "今日は用事があるので早く帰ります。",
      exampleVi: "Hôm nay tôi có việc bận nên về sớm."
   },
   {
      kanji: "天気予報",
      hiragana: "てんきよほう",
      pos: "Danh từ",
      meaning: "dự báo thời tiết",
      exampleJa: "天気予報によると、明日は雨です。",
      exampleVi: "Theo dự báo thời tiết thì ngày mai trời mưa."
   },
   {
      kanji: "利用",
      hiragana: "りよう",
      pos: "Danh từ/Động từ",
      meaning: "sử dụng, tận dụng",
      exampleJa: "このカードは図書館で利用できます。",
      exampleVi: "Thẻ này có thể sử dụng ở thư viện."
   },
   {
      kanji: "大事",
      hiragana: "だいじ",
      pos: "Tính từ (な)",
      meaning: "quan trọng",
      exampleJa: "健康はとても大事です。",
      exampleVi: "Sức khỏe rất quan trọng."
   },
   {
      kanji: "予習",
      hiragana: "よしゅう",
      pos: "Danh từ/Động từ",
      meaning: "soạn bài, học trước",
      exampleJa: "授業の前に予習をします。",
      exampleVi: "Tôi học trước bài trước khi lên lớp."
   },
   {
      kanji: "定規",
      hiragana: "じょうぎ",
      pos: "Danh từ",
      meaning: "thước kẻ",
      exampleJa: "定規で線を引いてください。",
      exampleVi: "Hãy kẻ một đường bằng thước."
   },
   {
      kanji: "食事",
      hiragana: "しょくじ",
      pos: "Danh từ/Động từ",
      meaning: "ăn uống, bữa ăn",
      exampleJa: "友達と一緒に食事をしました。",
      exampleVi: "Tôi đã ăn cùng bạn."
   },
   {
      kanji: "押す",
      hiragana: "おす",
      pos: "Động từ",
      meaning: "ấn, nhấn, đẩy",
      exampleJa: "このボタンを押してください。",
      exampleVi: "Hãy nhấn nút này."
   },
   {
      kanji: "押さえる",
      hiragana: "おさえる",
      pos: "Động từ",
      meaning: "giữ, ấn xuống",
      exampleJa: "ドアを手で押さえてください。",
      exampleVi: "Hãy giữ cửa bằng tay."
   },
   {
      kanji: "取材",
      hiragana: "しゅざい",
      pos: "Danh từ/Động từ",
      meaning: "thu thập thông tin, phỏng vấn",
      exampleJa: "記者が事件について取材しています。",
      exampleVi: "Phóng viên đang thu thập thông tin về vụ việc."
   },
   {
      kanji: "消える",
      hiragana: "きえる",
      pos: "Động từ",
      meaning: "tắt, biến mất",
      exampleJa: "電気が消えました。",
      exampleVi: "Đèn đã tắt."
   },
   {
      kanji: "引く",
      hiragana: "ひく",
      pos: "Động từ",
      meaning: "kéo, rút, tra cứu",
      exampleJa: "ドアを引いてください。",
      exampleVi: "Hãy kéo cửa ra."
   },
   {
      kanji: "取り消す",
      hiragana: "とりけす",
      pos: "Động từ",
      meaning: "hủy bỏ",
      exampleJa: "予約を取り消しました。",
      exampleVi: "Tôi đã hủy đặt chỗ."
   },
   {
      kanji: "消化",
      hiragana: "しょうか",
      pos: "Danh từ/Động từ",
      meaning: "tiêu hóa; xử lý",
      exampleJa: "食べ物をよく消化します。",
      exampleVi: "Tiêu hóa tốt thức ăn."
   },
   {
      kanji: "戸",
      hiragana: "と",
      pos: "Danh từ",
      meaning: "cửa (cửa ra vào, cửa gỗ)",
      exampleJa: "戸を開けてください。",
      exampleVi: "Hãy mở cửa ra."
   },
   {
      kanji: "窓",
      hiragana: "まど",
      pos: "Danh từ",
      meaning: "cửa sổ",
      exampleJa: "窓から富士山が見えます。",
      exampleVi: "Từ cửa sổ có thể nhìn thấy núi Phú Sĩ."
   },
   {
      kanji: "階段",
      hiragana: "かいだん",
      pos: "Danh từ",
      meaning: "cầu thang",
      exampleJa: "階段を上ります。",
      exampleVi: "Tôi leo lên cầu thang."
   },
   {
      kanji: "手段",
      hiragana: "しゅだん",
      pos: "Danh từ",
      meaning: "phương pháp, cách thức",
      exampleJa: "良い手段を考えましょう。",
      exampleVi: "Hãy nghĩ ra một phương pháp tốt."
   },
   {
      kanji: "井戸水",
      hiragana: "いどみず",
      pos: "Danh từ",
      meaning: "nước giếng",
      exampleJa: "昔は井戸水を使っていました。",
      exampleVi: "Ngày xưa người ta dùng nước giếng."
   },
   {
      kanji: "同窓会",
      hiragana: "どうそうかい",
      pos: "Danh từ",
      meaning: "họp lớp",
      exampleJa: "来週同窓会があります。",
      exampleVi: "Tuần sau sẽ có buổi họp lớp."
   },
   {
      kanji: "一戸建て",
      hiragana: "いっこだて",
      pos: "Danh từ",
      meaning: "nhà riêng, nhà độc lập",
      exampleJa: "郊外に一戸建てを買いました。",
      exampleVi: "Tôi đã mua một căn nhà riêng ở ngoại ô."
   },
   {
      kanji: "段階",
      hiragana: "だんかい",
      pos: "Danh từ",
      meaning: "giai đoạn, bước",
      exampleJa: "準備は第一段階です。",
      exampleVi: "Chuẩn bị là giai đoạn đầu tiên."
   },
   {
      kanji: "植える",
      hiragana: "うえる",
      pos: "Động từ",
      meaning: "trồng (cây)",
      exampleJa: "庭に花を植えました。",
      exampleVi: "Tôi đã trồng hoa trong vườn."
   },
   {
      kanji: "実",
      hiragana: "み",
      pos: "Danh từ",
      meaning: "quả, hạt",
      exampleJa: "木に赤い実がなっています。",
      exampleVi: "Cây có những quả đỏ."
   },
   {
      kanji: "実家",
      hiragana: "じっか",
      pos: "Danh từ",
      meaning: "nhà bố mẹ đẻ",
      exampleJa: "夏休みに実家に帰ります。",
      exampleVi: "Kỳ nghỉ hè tôi về nhà bố mẹ."
   },
   {
      kanji: "植物",
      hiragana: "しょくぶつ",
      pos: "Danh từ",
      meaning: "thực vật, cây cỏ",
      exampleJa: "植物がよく育っています。",
      exampleVi: "Thực vật phát triển tốt."
   },
   {
      kanji: "葉",
      hiragana: "は",
      pos: "Danh từ",
      meaning: "lá cây",
      exampleJa: "木の葉が落ちました。",
      exampleVi: "Lá cây đã rụng."
   },
   {
      kanji: "実現",
      hiragana: "じつげん",
      pos: "Danh từ/Động từ",
      meaning: "thực hiện, biến thành hiện thực",
      exampleJa: "夢を実現させたいです。",
      exampleVi: "Tôi muốn biến giấc mơ thành hiện thực."
   },
   {
      kanji: "根元",
      hiragana: "ねもと",
      pos: "Danh từ",
      meaning: "gốc rễ",
      exampleJa: "木の根元に花が咲いています。",
      exampleVi: "Có hoa nở ở gốc cây."
   },
   {
      kanji: "紅葉",
      hiragana: "こうよう",
      pos: "Danh từ/Động từ",
      meaning: "lá đỏ mùa thu; momiji",
      exampleJa: "京都で紅葉を見ました。",
      exampleVi: "Tôi đã ngắm lá đỏ ở Kyoto."
   },
   {
      kanji: "屋根",
      hiragana: "やね",
      pos: "Danh từ",
      meaning: "mái nhà",
      exampleJa: "屋根に雪が積もっています。",
      exampleVi: "Tuyết chất đầy trên mái nhà."
   },
   {
      kanji: "植木",
      hiragana: "うえき",
      pos: "Danh từ",
      meaning: "cây trồng trong chậu hoặc trong vườn",
      exampleJa: "庭に植木を置きました。",
      exampleVi: "Tôi đặt cây cảnh trong vườn."
   },
   {
      kanji: "根",
      hiragana: "ね",
      pos: "Danh từ",
      meaning: "rễ cây",
      exampleJa: "木の根は深いです。",
      exampleVi: "Rễ cây ăn rất sâu."
   },
   {
      kanji: "根本",
      hiragana: "こんぽん",
      pos: "Danh từ",
      meaning: "căn bản, gốc rễ",
      exampleJa: "問題の根本を考えましょう。",
      exampleVi: "Hãy suy nghĩ về căn nguyên của vấn đề."
   },
   {
      kanji: "建つ",
      hiragana: "たつ",
      pos: "Động từ",
      meaning: "được xây dựng",
      exampleJa: "駅の近くに新しいビルが建ちました。",
      exampleVi: "Một tòa nhà mới đã được xây gần ga."
   },
   {
      kanji: "建てる",
      hiragana: "たてる",
      pos: "Động từ",
      meaning: "xây, dựng",
      exampleJa: "家を建てています。",
      exampleVi: "Tôi đang xây nhà."
   },
   {
      kanji: "築く",
      hiragana: "きずく",
      pos: "Động từ",
      meaning: "xây dựng (trừu tượng và cụ thể)",
      exampleJa: "努力して信頼関係を築きました。",
      exampleVi: "Tôi đã xây dựng được mối quan hệ tin cậy bằng nỗ lực."
   },
   {
      kanji: "新築",
      hiragana: "しんちく",
      pos: "Danh từ",
      meaning: "xây mới",
      exampleJa: "新築のマンションに引っ越しました。",
      exampleVi: "Tôi đã chuyển đến căn hộ mới xây."
   },
   {
      kanji: "構造",
      hiragana: "こうぞう",
      pos: "Danh từ",
      meaning: "cấu tạo, kết cấu",
      exampleJa: "この橋の構造は特別です。",
      exampleVi: "Kết cấu của cây cầu này rất đặc biệt."
   },
   {
      kanji: "木造",
      hiragana: "もくぞう",
      pos: "Danh từ",
      meaning: "bằng gỗ",
      exampleJa: "この家は木造です。",
      exampleVi: "Ngôi nhà này được làm bằng gỗ."
   },
   {
      kanji: "構える",
      hiragana: "かまえる",
      pos: "Động từ",
      meaning: "có, sở hữu; lập (tư thế, vị trí)",
      exampleJa: "駅前に大きな店を構えています。",
      exampleVi: "Anh ấy sở hữu một cửa hàng lớn trước ga."
   },
   {
      kanji: "造る",
      hiragana: "つくる",
      pos: "Động từ",
      meaning: "chế tạo, làm (cái lớn, quy mô)",
      exampleJa: "船を造っています。",
      exampleVi: "Người ta đang đóng tàu."
   },
   {
      kanji: "造花",
      hiragana: "ぞうか",
      pos: "Danh từ",
      meaning: "hoa giả",
      exampleJa: "部屋に造花が飾られています。",
      exampleVi: "Trong phòng có trang trí hoa giả."
   },
   {
      kanji: "建造物",
      hiragana: "けんぞうぶつ",
      pos: "Danh từ",
      meaning: "công trình kiến trúc",
      exampleJa: "この寺は古い建造物です。",
      exampleVi: "Ngôi chùa này là một công trình kiến trúc cổ."
   },
   {
      kanji: "建築",
      hiragana: "けんちく",
      pos: "Danh từ",
      meaning: "kiến trúc",
      exampleJa: "建築を勉強しています。",
      exampleVi: "Tôi đang học kiến trúc."
   },
   {
      kanji: "構成",
      hiragana: "こうせい",
      pos: "Danh từ",
      meaning: "cấu thành, cấu trúc",
      exampleJa: "チームの構成を考えます。",
      exampleVi: "Tôi sẽ suy nghĩ về cơ cấu của đội."
   },
   {
      kanji: "構わない",
      hiragana: "かまわない",
      pos: "Cụm từ",
      meaning: "không sao, không vấn đề",
      exampleJa: "ここに座っても構いませんか。",
      exampleVi: "Ngồi ở đây có sao không?"
   },
   {
      kanji: "造船",
      hiragana: "ぞうせん",
      pos: "Danh từ",
      meaning: "đóng tàu",
      exampleJa: "この町は造船が盛んです。",
      exampleVi: "Thị trấn này phát triển ngành đóng tàu."
   },
   {
      kanji: "設ける",
      hiragana: "もうける",
      pos: "Động từ",
      meaning: "thiết lập, lập ra",
      exampleJa: "新しいルールを設けました。",
      exampleVi: "Đã lập ra quy định mới."
   },
   {
      kanji: "設定",
      hiragana: "せってい",
      pos: "Danh từ/Động từ",
      meaning: "cài đặt, thiết lập",
      exampleJa: "パソコンの設定を変えました。",
      exampleVi: "Tôi đã thay đổi cài đặt của máy tính."
   },
   {
      kanji: "電柱",
      hiragana: "でんちゅう",
      pos: "Danh từ",
      meaning: "cột điện",
      exampleJa: "道に電柱があります。",
      exampleVi: "Trên đường có cột điện."
   },
   {
      kanji: "向こう",
      hiragana: "むこう",
      pos: "Danh từ/Đại từ",
      meaning: "bên kia, phía đối diện",
      exampleJa: "川の向こうに家があります。",
      exampleVi: "Bên kia sông có một ngôi nhà."
   },
   {
      kanji: "建設",
      hiragana: "けんせつ",
      pos: "Danh từ/Động từ",
      meaning: "xây dựng",
      exampleJa: "新しい橋が建設されています。",
      exampleVi: "Một cây cầu mới đang được xây dựng."
   },
   {
      kanji: "柱",
      hiragana: "はしら",
      pos: "Danh từ",
      meaning: "cột, trụ",
      exampleJa: "家の柱が太いです。",
      exampleVi: "Cột nhà rất to."
   },
   {
      kanji: "金庫",
      hiragana: "きんこ",
      pos: "Danh từ",
      meaning: "két sắt",
      exampleJa: "お金を金庫に入れました。",
      exampleVi: "Tôi đã bỏ tiền vào két sắt."
   },
   {
      kanji: "方向",
      hiragana: "ほうこう",
      pos: "Danh từ",
      meaning: "phương hướng",
      exampleJa: "東の方向に歩きます。",
      exampleVi: "Tôi đi về hướng đông."
   },
   {
      kanji: "設計",
      hiragana: "せっけい",
      pos: "Danh từ/Động từ",
      meaning: "thiết kế",
      exampleJa: "家を設計しています。",
      exampleVi: "Tôi đang thiết kế một ngôi nhà."
   },
   {
      kanji: "車庫",
      hiragana: "しゃこ",
      pos: "Danh từ",
      meaning: "nhà để xe",
      exampleJa: "車庫に車を入れました。",
      exampleVi: "Tôi đã đưa xe vào gara."
   },
   {
      kanji: "設立",
      hiragana: "せつりつ",
      pos: "Danh từ/Động từ",
      meaning: "thành lập",
      exampleJa: "会社を設立しました。",
      exampleVi: "Tôi đã thành lập công ty."
   },
   {
      kanji: "大黒柱",
      hiragana: "だいこくばしら",
      pos: "Danh từ",
      meaning: "trụ cột (gia đình, tổ chức)",
      exampleJa: "父は家族の大黒柱です。",
      exampleVi: "Bố là trụ cột của gia đình."
   },
   {
      kanji: "向上心",
      hiragana: "こうじょうしん",
      pos: "Danh từ",
      meaning: "tinh thần cầu tiến",
      exampleJa: "向上心を持つことは大事です。",
      exampleVi: "Có tinh thần cầu tiến là điều quan trọng."
   }
];

