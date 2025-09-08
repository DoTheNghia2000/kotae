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
      exampleVi: "Cuối tuần mình có kế hoạch đi du lịch."
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
      kanji: "定める",
      hiragana: "さだめる",
      pos: "Động từ",
      meaning: "quy định, định ra",
      exampleJa: "法律で定められています。",
      exampleVi: "Điều đó được quy định trong luật."
   },
   {
      kanji: "用",
      hiragana: "よう",
      pos: "Danh từ",
      meaning: "việc cần, mục đích",
      exampleJa: "急用で帰ります。",
      exampleVi: "Vì có việc gấp nên tôi về."
   },
   {
      kanji: "用事",
      hiragana: "ようじ",
      pos: "Danh từ",
      meaning: "việc bận, công chuyện",
      exampleJa: "用事があるので先に帰ります。",
      exampleVi: "Vì có việc bận nên tôi về trước."
   },
   {
      kanji: "天気予報",
      hiragana: "てんきよほう",
      pos: "Danh từ",
      meaning: "dự báo thời tiết",
      exampleJa: "天気予報によると明日は雨です。",
      exampleVi: "Theo dự báo thời tiết thì ngày mai trời mưa."
   },
   {
      kanji: "定か",
      hiragana: "さだか",
      pos: "Tính từ (な形容詞)",
      meaning: "chắc chắn, rõ ràng",
      exampleJa: "原因は定かではない。",
      exampleVi: "Nguyên nhân thì không rõ ràng."
   },
   {
      kanji: "用いられて",
      hiragana: "もちいられて",
      pos: "Động từ (thể bị động)",
      meaning: "được sử dụng",
      exampleJa: "この言葉はよく用いられています。",
      exampleVi: "Từ này thường được sử dụng."
   },
   {
      kanji: "利用",
      hiragana: "りよう",
      pos: "Danh từ / Động từ",
      meaning: "sử dụng, tận dụng",
      exampleJa: "電車を利用して通勤します。",
      exampleVi: "Tôi đi làm bằng cách sử dụng tàu điện."
   },
   {
      kanji: "大事",
      hiragana: "だいじ",
      pos: "Tính từ (な形容詞)",
      meaning: "quan trọng",
      exampleJa: "健康は大事です。",
      exampleVi: "Sức khỏe là quan trọng."
   },
   {
      kanji: "予習",
      hiragana: "よしゅう",
      pos: "Danh từ / Động từ",
      meaning: "soạn bài, học trước",
      exampleJa: "授業の前に予習します。",
      exampleVi: "Tôi soạn bài trước giờ học."
   },
   {
      kanji: "定規",
      hiragana: "じょうぎ",
      pos: "Danh từ",
      meaning: "thước kẻ",
      exampleJa: "定規で線を引いてください。",
      exampleVi: "Hãy dùng thước kẻ để vẽ đường thẳng."
   },
   {
      kanji: "事",
      hiragana: "こと",
      pos: "Danh từ",
      meaning: "việc, sự việc",
      exampleJa: "大事な事を忘れました。",
      exampleVi: "Tôi đã quên mất một việc quan trọng."
   },
   {
      kanji: "習い事",
      hiragana: "ならいごと",
      pos: "Danh từ",
      meaning: "việc học thêm (ngoài trường)",
      exampleJa: "子供にピアノの習い事をさせています。",
      exampleVi: "Tôi cho con học thêm piano."
   },
   {
      kanji: "定まらない",
      hiragana: "さだまらない",
      pos: "Động từ",
      meaning: "không ổn định, chưa quyết định",
      exampleJa: "進路が定まらない。",
      exampleVi: "Định hướng tương lai chưa ổn định."
   },
   {
      kanji: "用紙",
      hiragana: "ようし",
      pos: "Danh từ",
      meaning: "giấy (mẫu đơn, phiếu)",
      exampleJa: "申込用紙に記入してください。",
      exampleVi: "Hãy điền vào mẫu đơn."
   },
   {
      kanji: "工事",
      hiragana: "こうじ",
      pos: "Danh từ",
      meaning: "công trình, thi công",
      exampleJa: "道路の工事が始まりました。",
      exampleVi: "Công trình sửa đường đã bắt đầu."
   },
   {
      kanji: "食事",
      hiragana: "しょくじ",
      pos: "Danh từ / Động từ",
      meaning: "bữa ăn, ăn uống",
      exampleJa: "家族と一緒に食事します。",
      exampleVi: "Tôi ăn cơm cùng gia đình."
   },
   {
      kanji: "好事家",
      hiragana: "こうずか",
      pos: "Danh từ",
      meaning: "người có sở thích đặc biệt",
      exampleJa: "彼は骨董品の好事家です。",
      exampleVi: "Anh ấy là người có thú sưu tầm đồ cổ."
   },
   {
      kanji: "押して",
      hiragana: "おして",
      pos: "Động từ (thể て)",
      meaning: "ấn, nhấn, đẩy",
      exampleJa: "ボタンを押してください。",
      exampleVi: "Hãy nhấn nút."
   },
   {
      kanji: "押さえた",
      hiragana: "おさえた",
      pos: "Động từ (thể quá khứ)",
      meaning: "giữ chặt, nắm giữ",
      exampleJa: "帽子が飛ばないように手で押さえた。",
      exampleVi: "Tôi giữ chặt cái mũ bằng tay để nó không bay mất."
   },
   {
      kanji: "強引に",
      hiragana: "ごういんに",
      pos: "Trạng từ",
      meaning: "cưỡng ép, bắt buộc",
      exampleJa: "彼は強引に話を進めた。",
      exampleVi: "Anh ta đã cưỡng ép đẩy câu chuyện đi tiếp."
   },
   {
      kanji: "取材",
      hiragana: "しゅざい",
      pos: "Danh từ / Động từ",
      meaning: "thu thập thông tin, phỏng vấn (báo chí)",
      exampleJa: "記者が事件について取材した。",
      exampleVi: "Phóng viên đã thu thập thông tin về vụ việc."
   },
   {
      kanji: "押印",
      hiragana: "おういん",
      pos: "Danh từ / Động từ",
      meaning: "đóng dấu",
      exampleJa: "書類に押印してください。",
      exampleVi: "Hãy đóng dấu vào tài liệu."
   },
   {
      kanji: "引ける",
      hiragana: "ひける",
      pos: "Động từ",
      meaning: "kết thúc (tiết học), rút lui",
      exampleJa: "授業は四時に引ける。",
      exampleVi: "Tiết học kết thúc lúc 4 giờ."
   },
   {
      kanji: "消える",
      hiragana: "きえる",
      pos: "Động từ",
      meaning: "biến mất, tắt",
      exampleJa: "電気が消えた。",
      exampleVi: "Đèn đã tắt."
   },
   {
      kanji: "消防車",
      hiragana: "しょうぼうしゃ",
      pos: "Danh từ",
      meaning: "xe cứu hỏa",
      exampleJa: "消防車が火事の現場に急いで行った。",
      exampleVi: "Xe cứu hỏa đã nhanh chóng tới hiện trường vụ cháy."
   },
   {
      kanji: "押された",
      hiragana: "おされた",
      pos: "Động từ (thể bị động, quá khứ)",
      meaning: "bị đẩy",
      exampleJa: "人ごみに押された。",
      exampleVi: "Tôi bị đẩy trong đám đông."
   },
   {
      kanji: "引火",
      hiragana: "いんか",
      pos: "Danh từ / Động từ",
      meaning: "bắt lửa, bén lửa",
      exampleJa: "ガソリンに火が引火した。",
      exampleVi: "Ngọn lửa bén vào xăng."
   },
   {
      kanji: "引用",
      hiragana: "いんよう",
      pos: "Danh từ / Động từ",
      meaning: "trích dẫn",
      exampleJa: "本から一文を引用しました。",
      exampleVi: "Tôi đã trích dẫn một câu từ sách."
   },
   {
      kanji: "消し",
      hiragana: "けし",
      pos: "Danh từ",
      meaning: "tẩy, xóa (thường dùng với 消しゴム)",
      exampleJa: "消しゴムを貸してください。",
      exampleVi: "Hãy cho tôi mượn cục tẩy."
   },
   {
      kanji: "引く",
      hiragana: "ひく",
      pos: "Động từ",
      meaning: "kéo, tra cứu, bị (cảm)",
      exampleJa: "辞書を引く。",
      exampleVi: "Tra từ điển."
   },
   {
      kanji: "引き出す",
      hiragana: "ひきだす",
      pos: "Động từ",
      meaning: "rút ra (tiền, ý kiến)",
      exampleJa: "銀行からお金を引き出しました。",
      exampleVi: "Tôi đã rút tiền từ ngân hàng."
   },
   {
      kanji: "取り消す",
      hiragana: "とりけす",
      pos: "Động từ",
      meaning: "hủy bỏ, thu hồi",
      exampleJa: "予約を取り消しました。",
      exampleVi: "Tôi đã hủy đặt chỗ."
   },
   {
      kanji: "消化",
      hiragana: "しょうか",
      pos: "Danh từ / Động từ",
      meaning: "tiêu hóa; xử lý",
      exampleJa: "食べ物を消化する。",
      exampleVi: "Tiêu hóa thức ăn."
   },
   {
      kanji: "戸",
      hiragana: "と",
      pos: "Danh từ",
      meaning: "cửa (cửa kéo, cửa trượt)",
      exampleJa: "戸を閉めてください。",
      exampleVi: "Hãy đóng cửa lại."
   },
   {
      kanji: "門戸",
      hiragana: "もんこ",
      pos: "Danh từ",
      meaning: "cánh cửa (mang nghĩa trừu tượng, cơ hội)",
      exampleJa: "世界に門戸を開く。",
      exampleVi: "Mở cửa ra thế giới."
   },
   {
      kanji: "窓",
      hiragana: "まど",
      pos: "Danh từ",
      meaning: "cửa sổ",
      exampleJa: "窓を開けてください。",
      exampleVi: "Hãy mở cửa sổ."
   },
   {
      kanji: "六階",
      hiragana: "ろっかい",
      pos: "Danh từ",
      meaning: "tầng 6",
      exampleJa: "私の部屋は六階にあります。",
      exampleVi: "Phòng của tôi ở tầng 6."
   },
   {
      kanji: "石段",
      hiragana: "いしだん",
      pos: "Danh từ",
      meaning: "bậc thang đá",
      exampleJa: "神社へ石段を登ります。",
      exampleVi: "Tôi leo lên bậc thang đá để vào đền."
   },
   {
      kanji: "戸外",
      hiragana: "こがい",
      pos: "Danh từ",
      meaning: "ngoài trời",
      exampleJa: "戸外で遊ぶのが好きです。",
      exampleVi: "Tôi thích chơi ngoài trời."
   },
   {
      kanji: "車窓",
      hiragana: "しゃそう",
      pos: "Danh từ",
      meaning: "cửa sổ xe",
      exampleJa: "車窓からの景色がきれいです。",
      exampleVi: "Phong cảnh nhìn từ cửa sổ xe rất đẹp."
   },
   {
      kanji: "階段",
      hiragana: "かいだん",
      pos: "Danh từ",
      meaning: "cầu thang",
      exampleJa: "階段を上る。",
      exampleVi: "Leo cầu thang."
   },
   {
      kanji: "手段",
      hiragana: "しゅだん",
      pos: "Danh từ",
      meaning: "phương tiện, cách thức",
      exampleJa: "問題を解決する手段を考える。",
      exampleVi: "Suy nghĩ cách thức giải quyết vấn đề."
   },
   {
      kanji: "井戸水",
      hiragana: "いどみず",
      pos: "Danh từ",
      meaning: "nước giếng",
      exampleJa: "昔は井戸水を使っていた。",
      exampleVi: "Ngày xưa người ta dùng nước giếng."
   },
   {
      kanji: "同窓会",
      hiragana: "どうそうかい",
      pos: "Danh từ",
      meaning: "họp lớp",
      exampleJa: "高校の同窓会に参加する。",
      exampleVi: "Tôi tham gia buổi họp lớp cấp 3."
   },
   {
      kanji: "窓口",
      hiragana: "まどぐち",
      pos: "Danh từ",
      meaning: "quầy tiếp nhận",
      exampleJa: "切符を窓口で買いました。",
      exampleVi: "Tôi mua vé ở quầy tiếp nhận."
   },
   {
      kanji: "一戸建て",
      hiragana: "いっこだて",
      pos: "Danh từ",
      meaning: "nhà riêng biệt",
      exampleJa: "郊外に一戸建てを買いました。",
      exampleVi: "Tôi đã mua một căn nhà riêng ở ngoại ô."
   },
   {
      kanji: "四階",
      hiragana: "よんかい",
      pos: "Danh từ",
      meaning: "tầng 4",
      exampleJa: "図書館は四階にあります。",
      exampleVi: "Thư viện ở tầng 4."
   },
   {
      kanji: "段階",
      hiragana: "だんかい",
      pos: "Danh từ",
      meaning: "giai đoạn, bước",
      exampleJa: "準備の段階に入る。",
      exampleVi: "Bắt đầu bước chuẩn bị."
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
      kanji: "移植",
      hiragana: "いしょく",
      pos: "Danh từ / Động từ",
      meaning: "cấy ghép, di thực",
      exampleJa: "心臓移植の手術を受ける。",
      exampleVi: "Phẫu thuật cấy ghép tim."
   },
   {
      kanji: "言葉",
      hiragana: "ことば",
      pos: "Danh từ",
      meaning: "từ ngữ, ngôn ngữ",
      exampleJa: "優しい言葉をかける。",
      exampleVi: "Nói những lời dịu dàng."
   },
   {
      kanji: "実",
      hiragana: "み",
      pos: "Danh từ",
      meaning: "quả, hạt",
      exampleJa: "木に赤い実がなっている。",
      exampleVi: "Trên cây có những quả đỏ."
   },
   {
      kanji: "実家",
      hiragana: "じっか",
      pos: "Danh từ",
      meaning: "nhà bố mẹ (quê nhà)",
      exampleJa: "お盆に実家へ帰る。",
      exampleVi: "Vào lễ Obon tôi về quê."
   },
   {
      kanji: "植物",
      hiragana: "しょくぶつ",
      pos: "Danh từ",
      meaning: "thực vật, cây cối",
      exampleJa: "植物を育てる。",
      exampleVi: "Trồng và chăm sóc thực vật."
   },
   {
      kanji: "葉",
      hiragana: "は",
      pos: "Danh từ",
      meaning: "lá cây",
      exampleJa: "木の葉が落ちた。",
      exampleVi: "Lá cây đã rụng."
   },
   {
      kanji: "実現",
      hiragana: "じつげん",
      pos: "Danh từ / Động từ",
      meaning: "hiện thực hóa, thành hiện thực",
      exampleJa: "夢を実現する。",
      exampleVi: "Hiện thực hóa giấc mơ."
   },
   {
      kanji: "根元",
      hiragana: "ねもと",
      pos: "Danh từ",
      meaning: "gốc rễ, căn nguyên",
      exampleJa: "木の根元に花が咲いている。",
      exampleVi: "Có hoa nở ở gốc cây."
   },
   {
      kanji: "植わって",
      hiragana: "うわって",
      pos: "Động từ (thể て)",
      meaning: "được trồng",
      exampleJa: "庭に大きな木が植わっている。",
      exampleVi: "Trong vườn có trồng một cây lớn."
   },
   {
      kanji: "紅葉",
      hiragana: "こうよう / もみじ",
      pos: "Danh từ",
      meaning: "lá đỏ mùa thu; cây lá đỏ",
      exampleJa: "秋になると山が紅葉します。",
      exampleVi: "Khi thu đến, núi chuyển sang màu lá đỏ."
   },
   {
      kanji: "実力",
      hiragana: "じつりょく",
      pos: "Danh từ",
      meaning: "thực lực, năng lực thật sự",
      exampleJa: "試験で実力を発揮する。",
      exampleVi: "Thể hiện thực lực trong kỳ thi."
   },
   {
      kanji: "屋根",
      hiragana: "やね",
      pos: "Danh từ",
      meaning: "mái nhà",
      exampleJa: "屋根に雪が積もっている。",
      exampleVi: "Tuyết chất đầy trên mái nhà."
   },
   {
      kanji: "植木",
      hiragana: "うえき",
      pos: "Danh từ",
      meaning: "cây cảnh",
      exampleJa: "庭に植木を置く。",
      exampleVi: "Đặt cây cảnh trong vườn."
   },
   {
      kanji: "根",
      hiragana: "ね",
      pos: "Danh từ",
      meaning: "rễ cây",
      exampleJa: "木の根が深く張っている。",
      exampleVi: "Rễ cây bám rất sâu."
   },
   {
      kanji: "根本",
      hiragana: "こんぽん",
      pos: "Danh từ",
      meaning: "gốc rễ, căn bản",
      exampleJa: "根本的な問題を解決する必要がある。",
      exampleVi: "Cần giải quyết vấn đề căn bản."
   },
   {
      kanji: "建つ",
      hiragana: "たつ",
      pos: "Động từ",
      meaning: "được xây dựng",
      exampleJa: "駅の前に新しいビルが建った。",
      exampleVi: "Một tòa nhà mới được xây trước ga."
   },
   {
      kanji: "築く",
      hiragana: "きずく",
      pos: "Động từ",
      meaning: "xây dựng (công trình, quan hệ)",
      exampleJa: "信頼関係を築く。",
      exampleVi: "Xây dựng mối quan hệ tin tưởng."
   },
   {
      kanji: "新築",
      hiragana: "しんちく",
      pos: "Danh từ",
      meaning: "xây mới",
      exampleJa: "新築の家に引っ越しました。",
      exampleVi: "Tôi đã chuyển đến căn nhà mới xây."
   },
   {
      kanji: "構造",
      hiragana: "こうぞう",
      pos: "Danh từ",
      meaning: "cấu trúc, cơ cấu",
      exampleJa: "脳の構造を研究する。",
      exampleVi: "Nghiên cứu cấu trúc của não."
   },
   {
      kanji: "木造",
      hiragana: "もくぞう",
      pos: "Danh từ",
      meaning: "làm bằng gỗ",
      exampleJa: "木造の建物は味がある。",
      exampleVi: "Nhà xây bằng gỗ có nét riêng."
   },
   {
      kanji: "建立",
      hiragana: "こんりゅう",
      pos: "Danh từ",
      meaning: "xây dựng (chùa, đền)",
      exampleJa: "古い寺を建立する。",
      exampleVi: "Xây dựng ngôi chùa cổ."
   },
   {
      kanji: "改造",
      hiragana: "かいぞう",
      pos: "Danh từ / Động từ",
      meaning: "cải tạo, tân trang",
      exampleJa: "古い車を改造した。",
      exampleVi: "Tôi đã cải tạo chiếc xe cũ."
   },
   {
      kanji: "構える",
      hiragana: "かまえる",
      pos: "Động từ",
      meaning: "dựng lên, vào tư thế; sở hữu",
      exampleJa: "新しい店を構える。",
      exampleVi: "Mở một cửa hàng mới."
   },
   {
      kanji: "造る",
      hiragana: "つくる",
      pos: "Động từ",
      meaning: "chế tạo, xây dựng",
      exampleJa: "船を造る。",
      exampleVi: "Chế tạo tàu thuyền."
   },
   {
      kanji: "造花",
      hiragana: "ぞうか",
      pos: "Danh từ",
      meaning: "hoa giả",
      exampleJa: "部屋に造花を飾った。",
      exampleVi: "Trang trí phòng bằng hoa giả."
   },
   {
      kanji: "建てる",
      hiragana: "たてる",
      pos: "Động từ",
      meaning: "xây (nhà, công trình)",
      exampleJa: "家を建てる。",
      exampleVi: "Xây nhà."
   },
   {
      kanji: "築",
      hiragana: "きず",
      pos: "Danh từ / Bộ thủ",
      meaning: "xây dựng (dùng trong từ ghép)",
      exampleJa: "築十年の家。",
      exampleVi: "Ngôi nhà đã xây 10 năm."
   },
   {
      kanji: "構内",
      hiragana: "こうない",
      pos: "Danh từ",
      meaning: "bên trong khuôn viên (trường, nhà ga)",
      exampleJa: "駅構内は禁煙です。",
      exampleVi: "Bên trong ga cấm hút thuốc."
   },
   {
      kanji: "建造物",
      hiragana: "けんぞうぶつ",
      pos: "Danh từ",
      meaning: "công trình kiến trúc",
      exampleJa: "歴史的な建造物を見学する。",
      exampleVi: "Tham quan các công trình kiến trúc lịch sử."
   },
   {
      kanji: "建築",
      hiragana: "けんちく",
      pos: "Danh từ / Động từ",
      meaning: "kiến trúc, xây dựng",
      exampleJa: "建築を勉強しています。",
      exampleVi: "Tôi đang học kiến trúc."
   },
   {
      kanji: "構成",
      hiragana: "こうせい",
      pos: "Danh từ",
      meaning: "cấu thành, cấu tạo",
      exampleJa: "文章の構成を考える。",
      exampleVi: "Suy nghĩ về bố cục bài văn."
   },
   {
      kanji: "構わない",
      hiragana: "かまわない",
      pos: "Động từ",
      meaning: "không sao, không vấn đề",
      exampleJa: "少し遅れても構わない。",
      exampleVi: "Dù có muộn một chút cũng không sao."
   },
   {
      kanji: "造船",
      hiragana: "ぞうせん",
      pos: "Danh từ",
      meaning: "đóng tàu",
      exampleJa: "日本は造船で有名です。",
      exampleVi: "Nhật Bản nổi tiếng về ngành đóng tàu."
   },
   {
      kanji: "設ける",
      hiragana: "もうける",
      pos: "Động từ",
      meaning: "thiết lập, tạo ra",
      exampleJa: "新しい規則を設ける。",
      exampleVi: "Thiết lập quy tắc mới."
   },
   {
      kanji: "設定",
      hiragana: "せってい",
      pos: "Danh từ / Động từ",
      meaning: "thiết lập, cài đặt",
      exampleJa: "アプリの設定を変更する。",
      exampleVi: "Thay đổi cài đặt ứng dụng."
   },
   {
      kanji: "電柱",
      hiragana: "でんちゅう",
      pos: "Danh từ",
      meaning: "cột điện",
      exampleJa: "電柱にポスターが貼ってある。",
      exampleVi: "Trên cột điện có dán áp phích."
   },
   {
      kanji: "向いた",
      hiragana: "むいた",
      pos: "Động từ (quá khứ)",
      meaning: "hướng về; phù hợp",
      exampleJa: "彼は教師に向いた性格だ。",
      exampleVi: "Anh ấy có tính cách phù hợp làm giáo viên."
   },
   {
      kanji: "向こう",
      hiragana: "むこう",
      pos: "Danh từ",
      meaning: "bên kia, phía đối diện",
      exampleJa: "川の向こうに家が見える。",
      exampleVi: "Có thể nhìn thấy ngôi nhà bên kia sông."
   },
   {
      kanji: "建設",
      hiragana: "けんせつ",
      pos: "Danh từ / Động từ",
      meaning: "xây dựng (công trình lớn)",
      exampleJa: "新しい橋を建設する。",
      exampleVi: "Xây dựng cây cầu mới."
   },
   {
      kanji: "柱",
      hiragana: "はしら",
      pos: "Danh từ",
      meaning: "cột, trụ",
      exampleJa: "家の柱が太い。",
      exampleVi: "Cột nhà rất to."
   },
   {
      kanji: "金庫",
      hiragana: "きんこ",
      pos: "Danh từ",
      meaning: "két sắt",
      exampleJa: "お金を金庫に入れる。",
      exampleVi: "Cho tiền vào két sắt."
   },
   {
      kanji: "方向",
      hiragana: "ほうこう",
      pos: "Danh từ",
      meaning: "phương hướng",
      exampleJa: "正しい方向に進む。",
      exampleVi: "Tiến về hướng đúng."
   },
   {
      kanji: "設計",
      hiragana: "せっけい",
      pos: "Danh từ / Động từ",
      meaning: "thiết kế",
      exampleJa: "家の設計図を見る。",
      exampleVi: "Xem bản thiết kế nhà."
   },
   {
      kanji: "車庫",
      hiragana: "しゃこ",
      pos: "Danh từ",
      meaning: "gara xe",
      exampleJa: "車庫に車を入れる。",
      exampleVi: "Cho xe vào gara."
   },
   {
      kanji: "設立",
      hiragana: "せつりつ",
      pos: "Danh từ / Động từ",
      meaning: "thành lập",
      exampleJa: "会社を設立する。",
      exampleVi: "Thành lập công ty."
   },
   {
      kanji: "大黒柱",
      hiragana: "だいこくばしら",
      pos: "Danh từ",
      meaning: "trụ cột chính (của gia đình, tập thể)",
      exampleJa: "父は家族の大黒柱だ。",
      exampleVi: "Bố là trụ cột của gia đình."
   },
   {
      kanji: "向上心",
      hiragana: "こうじょうしん",
      pos: "Danh từ",
      meaning: "khát vọng vươn lên, cầu tiến",
      exampleJa: "彼は向上心が強い。",
      exampleVi: "Anh ấy có tinh thần cầu tiến mạnh mẽ."
   },
   {
      kanji: "熱い",
      hiragana: "あつい",
      pos: "Tính từ",
      meaning: "nóng (nhiệt độ cao, đồ vật nóng)",
      exampleJa: "このスープはとても熱いです。",
      exampleVi: "Món súp này rất nóng."
   },
   {
      kanji: "冷える",
      hiragana: "ひえる",
      pos: "Động từ",
      meaning: "lạnh đi, nguội đi",
      exampleJa: "夜になると体が冷えます。",
      exampleVi: "Về đêm cơ thể bị lạnh."
   },
   {
      kanji: "冷たい",
      hiragana: "つめたい",
      pos: "Tính từ",
      meaning: "lạnh (cảm giác khi chạm vào)",
      exampleJa: "冷たい水を飲みたいです。",
      exampleVi: "Mình muốn uống nước lạnh."
   },
   {
      kanji: "温まる",
      hiragana: "あたたまる",
      pos: "Động từ",
      meaning: "ấm lên (tự động từ)",
      exampleJa: "お風呂に入って体が温まった。",
      exampleVi: "Sau khi vào bồn tắm thì cơ thể đã ấm lên."
   },
   {
      kanji: "温度",
      hiragana: "おんど",
      pos: "Danh từ",
      meaning: "nhiệt độ",
      exampleJa: "部屋の温度を下げてください。",
      exampleVi: "Hãy giảm nhiệt độ phòng xuống."
   },
   {
      kanji: "高熱",
      hiragana: "こうねつ",
      pos: "Danh từ",
      meaning: "sốt cao",
      exampleJa: "彼は高熱で学校を休んだ。",
      exampleVi: "Anh ấy nghỉ học vì sốt cao."
   },
   {
      kanji: "冷やす",
      hiragana: "ひやす",
      pos: "Động từ",
      meaning: "làm lạnh, ướp lạnh",
      exampleJa: "飲み物を冷やしておきます。",
      exampleVi: "Tôi sẽ làm lạnh sẵn đồ uống."
   },
   {
      kanji: "冷める",
      hiragana: "さめる",
      pos: "Động từ",
      meaning: "nguội đi (tự động từ)",
      exampleJa: "スープが冷めてしまった。",
      exampleVi: "Món súp đã nguội mất rồi."
   },
   {
      kanji: "温かい",
      hiragana: "あたたかい",
      pos: "Tính từ",
      meaning: "ấm áp (cảm giác, đồ vật)",
      exampleJa: "温かい手ですね。",
      exampleVi: "Bàn tay thật ấm áp."
   },
   {
      kanji: "度",
      hiragana: "ど",
      pos: "Danh từ, Hậu tố",
      meaning: "độ (nhiệt độ, tần suất)",
      exampleJa: "三度目の挑戦です。",
      exampleVi: "Đây là lần thử thách thứ ba."
   },
   {
      kanji: "熱心に",
      hiragana: "ねっしんに",
      pos: "Trạng từ",
      meaning: "một cách nhiệt tình",
      exampleJa: "彼は熱心に勉強している。",
      exampleVi: "Anh ấy học hành rất nhiệt tình."
   },
   {
      kanji: "冷やかす",
      hiragana: "ひやかす",
      pos: "Động từ",
      meaning: "chế giễu, trêu chọc",
      exampleJa: "友達を冷やかさないでください。",
      exampleVi: "Đừng trêu chọc bạn bè."
   },
   {
      kanji: "温かな",
      hiragana: "あたたかな",
      pos: "Tính từ (na)",
      meaning: "ấm áp (cách nói trang trọng hơn 温かい)",
      exampleJa: "温かな家庭を作りたいです。",
      exampleVi: "Mình muốn xây dựng một gia đình ấm áp."
   },
   {
      kanji: "体温計",
      hiragana: "たいおんけい",
      pos: "Danh từ",
      meaning: "nhiệt kế",
      exampleJa: "体温計で熱を測る。",
      exampleVi: "Đo sốt bằng nhiệt kế."
   },
   {
      kanji: "冷",
      hiragana: "れい",
      pos: "Danh từ/Hán tự",
      meaning: "sự lạnh, cái lạnh",
      exampleJa: "冷蔵庫に入れてください。",
      exampleVi: "Hãy cho vào tủ lạnh."
   },
   {
      kanji: "冷ます",
      hiragana: "さます",
      pos: "Động từ",
      meaning: "làm nguội (tha động từ)",
      exampleJa: "スープを冷ましてから飲む。",
      exampleVi: "Làm nguội súp rồi mới uống."
   },
   {
      kanji: "温める",
      hiragana: "あたためる",
      pos: "Động từ",
      meaning: "làm ấm, hâm nóng",
      exampleJa: "料理を電子レンジで温める。",
      exampleVi: "Làm nóng đồ ăn bằng lò vi sóng."
   },
   {
      kanji: "支度",
      hiragana: "したく",
      pos: "Danh từ, Động từ",
      meaning: "chuẩn bị (quần áo, hành lý, bữa ăn...)",
      exampleJa: "出かける支度をする。",
      exampleVi: "Chuẩn bị để đi ra ngoài."
   },
   {
      kanji: "法度",
      hiragana: "はっと",
      pos: "Danh từ",
      meaning: "luật cấm, điều cấm kỵ",
      exampleJa: "それは昔の法度だ。",
      exampleVi: "Đó là luật cấm ngày xưa."
   },
   {
      kanji: "卵",
      hiragana: "たまご",
      pos: "Danh từ",
      meaning: "trứng",
      exampleJa: "朝ごはんに卵を食べる。",
      exampleVi: "Ăn trứng vào bữa sáng."
   },
   {
      kanji: "乳",
      hiragana: "ちち / にゅう",
      pos: "Danh từ",
      meaning: "sữa, nhũ",
      exampleJa: "牛の乳を飲む。",
      exampleVi: "Uống sữa bò."
   },
   {
      kanji: "小麦粉",
      hiragana: "こむぎこ",
      pos: "Danh từ",
      meaning: "bột mì",
      exampleJa: "ケーキを作るために小麦粉を買った。",
      exampleVi: "Mua bột mì để làm bánh."
   },
   {
      kanji: "粉薬",
      hiragana: "こなぐすり",
      pos: "Danh từ",
      meaning: "thuốc bột",
      exampleJa: "粉薬を水で飲む。",
      exampleVi: "Uống thuốc bột với nước."
   },
   {
      kanji: "塩",
      hiragana: "しお",
      pos: "Danh từ",
      meaning: "muối",
      exampleJa: "スープに塩を少し入れる。",
      exampleVi: "Cho một ít muối vào súp."
   },
   {
      kanji: "卵白",
      hiragana: "らんぱく",
      pos: "Danh từ",
      meaning: "lòng trắng trứng",
      exampleJa: "卵白を泡立てる。",
      exampleVi: "Đánh bông lòng trắng trứng."
   },
   {
      kanji: "乳歯",
      hiragana: "にゅうし",
      pos: "Danh từ",
      meaning: "răng sữa",
      exampleJa: "子供の乳歯が抜けた。",
      exampleVi: "Răng sữa của đứa trẻ đã rụng."
   },
   {
      kanji: "粉末",
      hiragana: "ふんまつ",
      pos: "Danh từ",
      meaning: "dạng bột, bột mịn",
      exampleJa: "この薬は粉末です。",
      exampleVi: "Thuốc này ở dạng bột."
   },
   {
      kanji: "塩味",
      hiragana: "しおあじ",
      pos: "Danh từ",
      meaning: "vị mặn, vị muối",
      exampleJa: "このスープは塩味が強い。",
      exampleVi: "Món súp này vị mặn mạnh."
   },
   {
      kanji: "塩素",
      hiragana: "えんそ",
      pos: "Danh từ",
      meaning: "clo",
      exampleJa: "プールには塩素が入っている。",
      exampleVi: "Trong hồ bơi có chứa clo."
   },
   {
      kanji: "牛乳",
      hiragana: "ぎゅうにゅう",
      pos: "Danh từ",
      meaning: "sữa bò",
      exampleJa: "毎朝牛乳を飲みます。",
      exampleVi: "Mỗi sáng tôi uống sữa bò."
   },
   {
      kanji: "哺乳類",
      hiragana: "ほにゅうるい",
      pos: "Danh từ",
      meaning: "loài động vật có vú",
      exampleJa: "人間は哺乳類です。",
      exampleVi: "Con người là động vật có vú."
   },
   {
      kanji: "花粉",
      hiragana: "かふん",
      pos: "Danh từ",
      meaning: "phấn hoa",
      exampleJa: "春は花粉アレルギーがひどい。",
      exampleVi: "Mùa xuân bị dị ứng phấn hoa nặng."
   },
   {
      kanji: "産卵",
      hiragana: "さんらん",
      pos: "Danh từ, Động từ",
      meaning: "sự đẻ trứng",
      exampleJa: "カメは浜辺で産卵する。",
      exampleVi: "Rùa đẻ trứng trên bãi biển."
   },
   {
      kanji: "乳飲み子",
      hiragana: "ちのみご",
      pos: "Danh từ",
      meaning: "trẻ sơ sinh còn bú sữa",
      exampleJa: "乳飲み子を抱いている。",
      exampleVi: "Đang bế đứa trẻ còn bú sữa."
   },
   {
      kanji: "粉雪",
      hiragana: "こなゆき",
      pos: "Danh từ",
      meaning: "tuyết rơi li ti, tuyết bột",
      exampleJa: "粉雪が静かに降っている。",
      exampleVi: "Tuyết rơi li ti đang rơi nhẹ nhàng."
   },
   {
      kanji: "塩分",
      hiragana: "えんぶん",
      pos: "Danh từ",
      meaning: "lượng muối",
      exampleJa: "塩分を取りすぎないようにしましょう。",
      exampleVi: "Chúng ta hãy tránh ăn quá nhiều muối."
   },
   {
      kanji: "野菜",
      hiragana: "やさい",
      pos: "Danh từ",
      meaning: "rau, rau củ",
      exampleJa: "毎日野菜を食べる。",
      exampleVi: "Ăn rau mỗi ngày."
   },
   {
      kanji: "成果",
      hiragana: "せいか",
      pos: "Danh từ",
      meaning: "thành quả, kết quả",
      exampleJa: "努力の成果が出た。",
      exampleVi: "Thành quả của nỗ lực đã xuất hiện."
   },
   {
      kanji: "豆まき",
      hiragana: "まめまき",
      pos: "Danh từ",
      meaning: "tục ném đậu (trong lễ Setsubun ở Nhật)",
      exampleJa: "節分に豆まきをする。",
      exampleVi: "Ném đậu trong lễ Setsubun."
   },
   {
      kanji: "空き缶",
      hiragana: "あきかん",
      pos: "Danh từ",
      meaning: "lon rỗng, vỏ lon",
      exampleJa: "空き缶をリサイクルに出す。",
      exampleVi: "Đem lon rỗng đi tái chế."
   },
   {
      kanji: "菜の花",
      hiragana: "なのはな",
      pos: "Danh từ",
      meaning: "hoa cải dầu",
      exampleJa: "春になると菜の花が咲く。",
      exampleVi: "Mùa xuân đến thì hoa cải dầu nở."
   },
   {
      kanji: "果たす",
      hiragana: "はたす",
      pos: "Động từ",
      meaning: "hoàn thành, đạt được",
      exampleJa: "彼はついに夢を果たした。",
      exampleVi: "Anh ấy cuối cùng đã đạt được ước mơ."
   },
   {
      kanji: "豆腐",
      hiragana: "とうふ",
      pos: "Danh từ",
      meaning: "đậu phụ",
      exampleJa: "豆腐は体にいい食べ物です。",
      exampleVi: "Đậu phụ là món ăn tốt cho sức khỏe."
   },
   {
      kanji: "大豆",
      hiragana: "だいず",
      pos: "Danh từ",
      meaning: "đậu nành",
      exampleJa: "大豆から豆乳を作る。",
      exampleVi: "Sản xuất sữa đậu nành từ đậu nành."
   },
   {
      kanji: "缶",
      hiragana: "かん",
      pos: "Danh từ",
      meaning: "lon, hộp thiếc",
      exampleJa: "缶を開ける。",
      exampleVi: "Mở cái lon."
   },
   {
      kanji: "生野菜",
      hiragana: "なまやさい",
      pos: "Danh từ",
      meaning: "rau sống",
      exampleJa: "生野菜サラダを食べる。",
      exampleVi: "Ăn salad rau sống."
   },
   {
      kanji: "果てた",
      hiragana: "はてた",
      pos: "Động từ (quá khứ)",
      meaning: "kết thúc, cùng cực",
      exampleJa: "果てた命を救うことはできない。",
      exampleVi: "Không thể cứu được một mạng sống đã kết thúc."
   },
   {
      kanji: "豆",
      hiragana: "まめ",
      pos: "Danh từ",
      meaning: "hạt đậu",
      exampleJa: "豆を煮る。",
      exampleVi: "Nấu hạt đậu."
   },
   {
      kanji: "缶チューハイ",
      hiragana: "かんチューハイ",
      pos: "Danh từ",
      meaning: "lon chuhai (đồ uống có cồn pha)",
      exampleJa: "缶チューハイを一本飲んだ。",
      exampleVi: "Uống một lon chuhai."
   },
   {
      kanji: "菜園",
      hiragana: "さいえん",
      pos: "Danh từ",
      meaning: "vườn rau",
      exampleJa: "家庭菜園を始める。",
      exampleVi: "Bắt đầu làm vườn rau tại nhà."
   },
   {
      kanji: "果",
      hiragana: "は / か",
      pos: "Danh từ, Hán tự",
      meaning: "quả, kết quả",
      exampleJa: "努力の果を見る。",
      exampleVi: "Nhìn thấy kết quả của nỗ lực."
   },
   {
      kanji: "豆知識",
      hiragana: "まめちしき",
      pos: "Danh từ",
      meaning: "kiến thức vặt, mẹo nhỏ",
      exampleJa: "面白い豆知識を教えてください。",
      exampleVi: "Hãy cho tôi biết một kiến thức thú vị vặt vãnh."
   },
   {
      kanji: "缶詰め",
      hiragana: "かんづめ",
      pos: "Danh từ",
      meaning: "đồ hộp",
      exampleJa: "ツナの缶詰めを買った。",
      exampleVi: "Tôi đã mua đồ hộp cá ngừ."
   },
   {
      kanji: "果物",
      hiragana: "くだもの",
      pos: "Danh từ",
      meaning: "hoa quả, trái cây",
      exampleJa: "果物を毎日食べる。",
      exampleVi: "Ăn trái cây mỗi ngày."
   },
   {
      kanji: "小豆",
      hiragana: "あずき",
      pos: "Danh từ",
      meaning: "đậu đỏ",
      exampleJa: "小豆であんこを作る。",
      exampleVi: "Làm nhân đậu đỏ từ đậu đỏ."
   },
   {
      kanji: "杯",
      hiragana: "はい",
      pos: "Danh từ, Hậu tố",
      meaning: "cốc, chén (đơn vị đếm)",
      exampleJa: "ビールを三杯飲んだ。",
      exampleVi: "Uống ba cốc bia."
   },
   {
      kanji: "乾杯",
      hiragana: "かんぱい",
      pos: "Danh từ, Động từ",
      meaning: "cạn ly, nâng ly chúc mừng",
      exampleJa: "友達と乾杯する。",
      exampleVi: "Cạn ly với bạn bè."
   },
   {
      kanji: "二枚目",
      hiragana: "にまいめ",
      pos: "Danh từ",
      meaning: "tờ thứ hai / soái ca (từ lóng)",
      exampleJa: "彼は二枚目の俳優だ。",
      exampleVi: "Anh ấy là một diễn viên đẹp trai."
   },
   {
      kanji: "匹敵",
      hiragana: "ひってき",
      pos: "Động từ, Danh từ",
      meaning: "sánh ngang, tương xứng",
      exampleJa: "彼に匹敵する人はいない。",
      exampleVi: "Không có ai sánh ngang với anh ấy."
   },
   {
      kanji: "分量",
      hiragana: "ぶんりょう",
      pos: "Danh từ",
      meaning: "khối lượng, liều lượng",
      exampleJa: "調味料の分量を量る。",
      exampleVi: "Đo khối lượng gia vị."
   },
   {
      kanji: "一杯",
      hiragana: "いっぱい",
      pos: "Danh từ, Trạng từ",
      meaning: "một cốc / đầy",
      exampleJa: "水を一杯飲む。",
      exampleVi: "Uống một cốc nước."
   },
   {
      kanji: "枚数",
      hiragana: "まいすう",
      pos: "Danh từ",
      meaning: "số tờ, số miếng",
      exampleJa: "写真の枚数を数える。",
      exampleVi: "Đếm số lượng tấm ảnh."
   },
   {
      kanji: "二匹",
      hiragana: "にひき",
      pos: "Danh từ (đơn vị đếm)",
      meaning: "hai con (động vật nhỏ)",
      exampleJa: "猫を二匹飼っている。",
      exampleVi: "Tôi nuôi hai con mèo."
   },
   {
      kanji: "計量",
      hiragana: "けいりょう",
      pos: "Danh từ, Động từ",
      meaning: "đo lường",
      exampleJa: "材料を計量する。",
      exampleVi: "Đo lường nguyên liệu."
   },
   {
      kanji: "重量",
      hiragana: "じゅうりょう",
      pos: "Danh từ",
      meaning: "trọng lượng",
      exampleJa: "荷物の重量を測る。",
      exampleVi: "Đo trọng lượng hành lý."
   },
   {
      kanji: "三枚",
      hiragana: "さんまい",
      pos: "Danh từ (đơn vị đếm)",
      meaning: "ba tờ, ba miếng (vật mỏng, dẹt)",
      exampleJa: "紙を三枚ください。",
      exampleVi: "Cho tôi ba tờ giấy."
   },
   {
      kanji: "二十匹",
      hiragana: "にじゅっぴき",
      pos: "Danh từ (đơn vị đếm)",
      meaning: "hai mươi con (động vật nhỏ)",
      exampleJa: "魚を二十匹釣った。",
      exampleVi: "Tôi câu được hai mươi con cá."
   },
   {
      kanji: "量る",
      hiragana: "はかる",
      pos: "Động từ",
      meaning: "đo (cân nặng, dung tích, số lượng)",
      exampleJa: "体重を量る。",
      exampleVi: "Đo cân nặng."
   },
   {
      kanji: "五枚",
      hiragana: "ごまい",
      pos: "Danh từ (đơn vị đếm)",
      meaning: "năm tờ, năm miếng",
      exampleJa: "切符を五枚買った。",
      exampleVi: "Tôi đã mua năm tấm vé."
   },
   {
      kanji: "三匹",
      hiragana: "さんびき",
      pos: "Danh từ (đơn vị đếm)",
      meaning: "ba con (động vật nhỏ)",
      exampleJa: "犬を三匹飼っている。",
      exampleVi: "Tôi nuôi ba con chó."
   },
];

