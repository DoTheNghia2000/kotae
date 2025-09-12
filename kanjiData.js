const kanjiData = [
   // ==== 起 ====
   {
      kanji: "起きる",
      hiragana: "おきる",
      pos: "Động từ (tự động từ)",
      kun: "お(きる)",
      on: "",
      meaning: "thức dậy, xảy ra",
      exampleJa: "毎朝6時に起きます。",
      exampleVi: "Mỗi sáng tôi thức dậy lúc 6 giờ."
   },
   {
      kanji: "起こす",
      hiragana: "おこす",
      pos: "Động từ (tha động từ)",
      kun: "お(こす)",
      on: "",
      meaning: "đánh thức, gây ra",
      exampleJa: "母が私を起こしました。",
      exampleVi: "Mẹ đã đánh thức tôi."
   },
   {
      kanji: "起動",
      hiragana: "きどう",
      pos: "Danh từ / Động từする",
      kun: "",
      on: "キ",
      meaning: "khởi động (máy tính, thiết bị)",
      exampleJa: "スマホを起動します。",
      exampleVi: "Khởi động điện thoại."
   },

   // ==== 寝 ====
   {
      kanji: "寝室",
      hiragana: "しんしつ",
      pos: "Danh từ",
      kun: "",
      on: "シン",
      meaning: "phòng ngủ",
      exampleJa: "寝室は二階にあります。",
      exampleVi: "Phòng ngủ ở tầng hai."
   },
   {
      kanji: "寝台車",
      hiragana: "しんだいしゃ",
      pos: "Danh từ",
      kun: "",
      on: "シン",
      meaning: "toa giường nằm (tàu hỏa)",
      exampleJa: "寝台車で旅行しました。",
      exampleVi: "Tôi đã đi du lịch bằng tàu có toa giường nằm."
   },
   {
      kanji: "昼寝",
      hiragana: "ひるね",
      pos: "Danh từ / Động từする",
      kun: "ね",
      on: "",
      meaning: "ngủ trưa",
      exampleJa: "昼寝をして元気になりました。",
      exampleVi: "Ngủ trưa xong tôi thấy khỏe hơn."
   },
   {
      kanji: "寝かす",
      hiragana: "ねかす",
      pos: "Động từ (tha động từ)",
      kun: "ね(かす)",
      on: "",
      meaning: "cho ngủ, đặt nằm xuống",
      exampleJa: "母親が子供を寝かせました。",
      exampleVi: "Mẹ cho con ngủ."
   },

   // ==== 浴 ====
   {
      kanji: "浴びる",
      hiragana: "あびる",
      pos: "Động từ (tha động từ)",
      kun: "あ(びる)",
      on: "",
      meaning: "tắm, dội, hứng (ánh sáng, nước...)",
      exampleJa: "朝シャワーを浴びます。",
      exampleVi: "Buổi sáng tôi tắm vòi sen."
   },
   {
      kanji: "日光浴",
      hiragana: "にっこうよく",
      pos: "Danh từ / Động từする",
      kun: "",
      on: "ヨク",
      meaning: "tắm nắng",
      exampleJa: "海で日光浴をしました。",
      exampleVi: "Tôi đã tắm nắng ở biển."
   },
   {
      kanji: "浴室",
      hiragana: "よくしつ",
      pos: "Danh từ",
      kun: "",
      on: "ヨク",
      meaning: "phòng tắm",
      exampleJa: "浴室を掃除しました。",
      exampleVi: "Tôi đã dọn phòng tắm."
   },
   {
      kanji: "水浴び",
      hiragana: "みずあび",
      pos: "Danh từ / Động từする",
      kun: "あ(びる)",
      on: "",
      meaning: "tắm (dưới sông, hồ, nước)",
      exampleJa: "子供が川で水浴びをしています。",
      exampleVi: "Bọn trẻ đang tắm sông."
   },
   {
      kanji: "浴びせる",
      hiragana: "あびせる",
      pos: "Động từ (tha động từ)",
      kun: "あ(びせる)",
      on: "",
      meaning: "dội vào, trút (lời nói, câu hỏi...)",
      exampleJa: "彼に質問を浴びせました。",
      exampleVi: "Tôi đã dồn dập hỏi anh ta."
   },
   {
      kanji: "海水浴",
      hiragana: "かいすいよく",
      pos: "Danh từ / Động từする",
      kun: "",
      on: "ヨク",
      meaning: "tắm biển",
      exampleJa: "家族で海水浴に行きました。",
      exampleVi: "Gia đình tôi đã đi tắm biển."
   },
   {
      kanji: "浴衣",
      hiragana: "ゆかた",
      pos: "Danh từ",
      kun: "ゆ",
      on: "",
      meaning: "Áo yukata (kimono mặc mùa hè)",
      exampleJa: "夏祭りで浴衣を着る。",
      exampleVi: "Mặc yukata trong lễ hội mùa hè."
   },


   // ==== 湯 ====
   {
      kanji: "湯",
      hiragana: "ゆ",
      pos: "Danh từ",
      kun: "ゆ",
      on: "",
      meaning: "nước nóng",
      exampleJa: "お湯を沸かします。",
      exampleVi: "Đun nước nóng."
   },
   {
      kanji: "熱湯",
      hiragana: "ねっとう",
      pos: "Danh từ",
      kun: "",
      on: "トウ",
      meaning: "nước sôi",
      exampleJa: "熱湯をカップに入れました。",
      exampleVi: "Tôi cho nước sôi vào cốc."
   },
   {
      kanji: "湯船",
      hiragana: "ゆぶね",
      pos: "Danh từ",
      kun: "ゆ",
      on: "",
      meaning: "bồn tắm",
      exampleJa: "湯船にゆっくり入ります。",
      exampleVi: "Tôi ngâm mình thoải mái trong bồn tắm."
   },
   {
      kanji: "洗う",
      hiragana: "あらう",
      pos: "Động từ",
      kun: "あら(う)",
      on: "せん",
      meaning: "rửa / giặt",
      exampleJa: "手を石けんで洗います。",
      exampleVi: "Tôi rửa tay bằng xà phòng."
   },
   {
      kanji: "洗剤",
      hiragana: "せんざい",
      pos: "Danh từ",
      kun: "",
      on: "せん",
      meaning: "chất tẩy rửa / bột giặt",
      exampleJa: "新しい洗剤を買いました。",
      exampleVi: "Tôi đã mua chất tẩy rửa mới."
   },
   {
      kanji: "水洗",
      hiragana: "すいせん",
      pos: "Danh từ /する動詞",
      kun: "",
      on: "せん",
      meaning: "rửa bằng nước",
      exampleJa: "この野菜は水洗してください。",
      exampleVi: "Hãy rửa rau này bằng nước."
   },
   {
      kanji: "手洗い",
      hiragana: "てあらい",
      pos: "Danh từ",
      kun: "あら(い)",
      on: "",
      meaning: "rửa tay / nhà vệ sinh",
      exampleJa: "外から帰ったら手洗いをしましょう。",
      exampleVi: "Khi đi từ ngoài về hãy rửa tay."
   },
   {
      kanji: "洗面所",
      hiragana: "せんめんじょ",
      pos: "Danh từ",
      kun: "",
      on: "せん",
      meaning: "phòng rửa mặt / nhà vệ sinh",
      exampleJa: "洗面所で顔を洗います。",
      exampleVi: "Tôi rửa mặt ở phòng rửa mặt."
   },
   {
      kanji: "洗濯物",
      hiragana: "せんたくもの",
      pos: "Danh từ",
      kun: "",
      on: "せん",
      meaning: "quần áo giặt",
      exampleJa: "洗濯物を干してください。",
      exampleVi: "Hãy phơi quần áo đã giặt."
   },

   // === 干 ===
   {
      kanji: "干す",
      hiragana: "ほす",
      pos: "Động từ",
      kun: "ほ(す)",
      on: "",
      meaning: "phơi (quần áo, đồ vật)",
      exampleJa: "洗濯物を外に干します。",
      exampleVi: "Tôi phơi quần áo ngoài trời."
   },
   {
      kanji: "干物",
      hiragana: "ひもの",
      pos: "Danh từ",
      kun: "ひ(もの)",
      on: "",
      meaning: "đồ khô (thường là cá khô)",
      exampleJa: "干物を朝ご飯に食べます。",
      exampleVi: "Tôi ăn cá khô vào bữa sáng."
   },
   {
      kanji: "若干名",
      hiragana: "じゃっかんめい",
      pos: "Danh từ",
      kun: "",
      on: "カン",
      meaning: "một vài người / số ít",
      exampleJa: "若干名の募集があります。",
      exampleVi: "Có tuyển một vài người."
   },
   {
      kanji: "干渉",
      hiragana: "かんしょう",
      pos: "Danh từ / Động từ",
      kun: "",
      on: "カン",
      meaning: "Can thiệp, xen vào",
      exampleJa: "他人の生活に干渉する。",
      exampleVi: "Can thiệp vào cuộc sống của người khác."
   },

   // === 活 ===
   {
      kanji: "生活",
      hiragana: "せいかつ",
      pos: "Danh từ /する動詞",
      kun: "",
      on: "かつ",
      meaning: "cuộc sống / sinh hoạt",
      exampleJa: "都会で生活するのは大変です。",
      exampleVi: "Sống ở thành phố rất vất vả."
   },
   {
      kanji: "活動",
      hiragana: "かつどう",
      pos: "Danh từ /する動詞",
      kun: "",
      on: "かつ",
      meaning: "hoạt động",
      exampleJa: "学生のボランティア活動があります。",
      exampleVi: "Có hoạt động tình nguyện của sinh viên."
   },
   {
      kanji: "活発に",
      hiragana: "かっぱつに",
      pos: "Trạng từ",
      kun: "",
      on: "かつ",
      meaning: "một cách sôi nổi / hoạt bát",
      exampleJa: "子供たちは活発に遊んでいます。",
      exampleVi: "Bọn trẻ chơi đùa rất sôi nổi."
   },
   {
      kanji: "食生活",
      hiragana: "しょくせいかつ",
      pos: "Danh từ",
      kun: "",
      on: "かつ",
      meaning: "chế độ ăn uống / thói quen ăn uống",
      exampleJa: "健康のために食生活を見直しましょう。",
      exampleVi: "Hãy xem lại chế độ ăn uống vì sức khỏe."
   },
   {
      kanji: "活気",
      hiragana: "かっき",
      pos: "Danh từ",
      kun: "",
      on: "かつ",
      meaning: "sự náo nhiệt / sôi động",
      exampleJa: "市場は活気にあふれている。",
      exampleVi: "Chợ tràn đầy sức sống, náo nhiệt."
   },
   {
      kanji: "活用",
      hiragana: "かつよう",
      pos: "Danh từ /する動詞",
      kun: "",
      on: "かつ",
      meaning: "tận dụng / ứng dụng",
      exampleJa: "インターネットを活用します。",
      exampleVi: "Tôi tận dụng Internet."
   },

   // === 濯 ===
   {
      kanji: "洗濯",
      hiragana: "せんたく",
      pos: "Danh từ /する動詞",
      kun: "",
      on: "たく",
      meaning: "giặt giũ",
      exampleJa: "毎週日曜日に洗濯をします。",
      exampleVi: "Chủ nhật nào tôi cũng giặt quần áo."
   },
   {
      kanji: "拾う",
      hiragana: "ひろう",
      pos: "Động từ",
      kun: "ひろ(う)",
      on: "",
      meaning: "nhặt, lượm",
      exampleJa: "道で財布を拾いました。",
      exampleVi: "Tôi nhặt được ví trên đường."
   },
   {
      kanji: "拾得物",
      hiragana: "しゅうとくぶつ",
      pos: "Danh từ",
      kun: "",
      on: "しゅう",
      meaning: "đồ nhặt được",
      exampleJa: "駅の拾得物は事務所に届けられます。",
      exampleVi: "Đồ nhặt được ở ga sẽ được mang đến văn phòng."
   },
   {
      kanji: "拾万円",
      hiragana: "じゅうまんえん",
      pos: "Danh từ",
      kun: "",
      on: "じゅう",
      meaning: "mười vạn yên (100.000 yên). Cách viết trang trọng của 十万円.",
      exampleJa: "拾万円の賞金をもらいました。",
      exampleVi: "Tôi đã nhận được giải thưởng 100.000 yên."
   },

   // === 捨 ===
   {
      kanji: "捨てる",
      hiragana: "すてる",
      pos: "Động từ",
      kun: "す(てる)",
      on: "",
      meaning: "vứt bỏ, từ bỏ",
      exampleJa: "古い服を捨てます。",
      exampleVi: "Tôi vứt quần áo cũ."
   },
   {
      kanji: "四捨五入",
      hiragana: "ししゃごにゅう",
      pos: "Danh từ / する動詞",
      kun: "",
      on: "しゃ",
      meaning: "làm tròn số",
      exampleJa: "小数点以下を四捨五入します。",
      exampleVi: "Làm tròn phần thập phân."
   },

   // === 燃 ===
   {
      kanji: "燃える",
      hiragana: "もえる",
      pos: "Động từ",
      kun: "も(える)",
      on: "",
      meaning: "cháy, bốc cháy",
      exampleJa: "家が燃えています。",
      exampleVi: "Ngôi nhà đang cháy."
   },
   {
      kanji: "燃す",
      hiragana: "もす",
      pos: "Động từ",
      kun: "も(す)",
      on: "",
      meaning: "đốt, làm cháy",
      exampleJa: "ごみを燃します。",
      exampleVi: "Tôi đốt rác."
   },
   {
      kanji: "燃料",
      hiragana: "ねんりょう",
      pos: "Danh từ",
      kun: "",
      on: "ねん",
      meaning: "nhiên liệu",
      exampleJa: "石油は大切な燃料です。",
      exampleVi: "Dầu mỏ là nguồn nhiên liệu quan trọng."
   },
   {
      kanji: "燃やす",
      hiragana: "もやす",
      pos: "Động từ",
      kun: "も(やす)",
      on: "",
      meaning: "đốt cháy",
      exampleJa: "古い手紙を燃やしました。",
      exampleVi: "Tôi đã đốt những bức thư cũ."
   },

   // === 袋 ===
   {
      kanji: "袋",
      hiragana: "ふくろ",
      pos: "Danh từ",
      kun: "ふくろ",
      on: "",
      meaning: "túi",
      exampleJa: "袋を持ってきてください。",
      exampleVi: "Hãy mang túi đến."
   },
   {
      kanji: "紙袋",
      hiragana: "かみぶくろ",
      pos: "Danh từ",
      kun: "ぶくろ",
      on: "",
      meaning: "túi giấy",
      exampleJa: "紙袋に入れてください。",
      exampleVi: "Xin hãy bỏ vào túi giấy."
   },
   {
      kanji: "手袋",
      hiragana: "てぶくろ",
      pos: "Danh từ",
      kun: "ぶくろ",
      on: "",
      meaning: "găng tay",
      exampleJa: "冬は手袋をします。",
      exampleVi: "Mùa đông tôi đeo găng tay."
   },
   {
      kanji: "足袋",
      hiragana: "たび",
      pos: "Danh từ",
      kun: "たび",
      on: "",
      meaning: "Tất tabi (tất xỏ ngón đi với kimono)",
      exampleJa: "和服に足袋を履く。",
      exampleVi: "Đi tất tabi khi mặc kimono."
   },
   {
      kanji: "風袋",
      hiragana: "ふうたい",
      pos: "Danh từ",
      kun: "",
      on: "タイ",
      meaning: "Bao bì, khối lượng vỏ bọc",
      exampleJa: "風袋を差し引いて重さを量る。",
      exampleVi: "Trừ khối lượng bao bì để cân."
   },
   {
      kanji: "日曜日",
      hiragana: "にちようび",
      pos: "Danh từ",
      kun: "",
      on: "よう",
      meaning: "Chủ nhật",
      exampleJa: "日曜日に友達と会います。",
      exampleVi: "Chủ nhật tôi gặp bạn bè."
   },
   {
      kanji: "火曜日",
      hiragana: "かようび",
      pos: "Danh từ",
      kun: "",
      on: "よう",
      meaning: "Thứ ba",
      exampleJa: "火曜日に会議があります。",
      exampleVi: "Có cuộc họp vào thứ ba."
   },
   {
      kanji: "木曜日",
      hiragana: "もくようび",
      pos: "Danh từ",
      kun: "",
      on: "よう",
      meaning: "Thứ năm",
      exampleJa: "木曜日は授業が二つあります。",
      exampleVi: "Thứ năm tôi có hai tiết học."
   },
   {
      kanji: "曜日",
      hiragana: "ようび",
      pos: "Danh từ",
      kun: "",
      on: "よう",
      meaning: "ngày trong tuần",
      exampleJa: "今日は何曜日ですか。",
      exampleVi: "Hôm nay là thứ mấy?"
   },

   // === 末 ===
   {
      kanji: "週末",
      hiragana: "しゅうまつ",
      pos: "Danh từ",
      kun: "",
      on: "まつ",
      meaning: "cuối tuần",
      exampleJa: "週末は映画を見ます。",
      exampleVi: "Cuối tuần tôi xem phim."
   },
   {
      kanji: "期末",
      hiragana: "きまつ",
      pos: "Danh từ",
      kun: "",
      on: "まつ",
      meaning: "cuối kỳ",
      exampleJa: "期末試験があります。",
      exampleVi: "Có kỳ thi cuối kỳ."
   },
   {
      kanji: "結末",
      hiragana: "けつまつ",
      pos: "Danh từ",
      kun: "",
      on: "まつ",
      meaning: "kết cục, kết thúc",
      exampleJa: "物語の結末に驚きました。",
      exampleVi: "Tôi bất ngờ với kết cục của câu chuyện."
   },
   {
      kanji: "末",
      hiragana: "すえ",
      pos: "Danh từ",
      kun: "すえ",
      on: "",
      meaning: "cuối, sau cùng",
      exampleJa: "努力の末に成功した。",
      exampleVi: "Sau cùng đã thành công nhờ nỗ lực."
   },
   {
      kanji: "月末",
      hiragana: "げつまつ",
      pos: "Danh từ",
      kun: "",
      on: "まつ",
      meaning: "cuối tháng",
      exampleJa: "月末に給料をもらいます。",
      exampleVi: "Cuối tháng tôi nhận lương."
   },
   {
      kanji: "末っ子",
      hiragana: "すえっこ",
      pos: "Danh từ",
      kun: "すえ",
      on: "",
      meaning: "con út",
      exampleJa: "彼は三人兄弟の末っ子です。",
      exampleVi: "Anh ấy là con út trong ba anh em."
   },
   {
      kanji: "年末",
      hiragana: "ねんまつ",
      pos: "Danh từ",
      kun: "",
      on: "まつ",
      meaning: "cuối năm",
      exampleJa: "年末は忙しいです。",
      exampleVi: "Cuối năm rất bận rộn."
   },

   // === 翌 ===
   {
      kanji: "翌朝",
      hiragana: "よくあさ",
      pos: "Danh từ",
      kun: "",
      on: "よく",
      meaning: "sáng hôm sau",
      exampleJa: "翌朝早く出発しました。",
      exampleVi: "Sáng hôm sau tôi xuất phát sớm."
   },
   {
      kanji: "翌日",
      hiragana: "よくじつ",
      pos: "Danh từ",
      kun: "",
      on: "よく",
      meaning: "ngày hôm sau",
      exampleJa: "翌日に結果が発表された。",
      exampleVi: "Kết quả được công bố vào ngày hôm sau."
   },
   {
      kanji: "翌年",
      hiragana: "よくねん",
      pos: "Danh từ",
      kun: "",
      on: "よく",
      meaning: "năm sau (năm tiếp theo)",
      exampleJa: "翌年に会社を辞めました。",
      exampleVi: "Năm sau tôi đã nghỉ việc."
   },

   // === 昨 ===
   {
      kanji: "昨晩",
      hiragana: "さくばん",
      pos: "Danh từ",
      kun: "",
      on: "さく",
      meaning: "tối hôm qua",
      exampleJa: "昨晩はよく眠れました。",
      exampleVi: "Tối qua tôi ngủ ngon."
   },
   {
      kanji: "昨年",
      hiragana: "さくねん",
      pos: "Danh từ",
      kun: "",
      on: "さく",
      meaning: "năm ngoái",
      exampleJa: "昨年日本へ行きました。",
      exampleVi: "Năm ngoái tôi đã đi Nhật."
   },
   {
      kanji: "昨日",
      hiragana: "きのう",
      pos: "Danh từ",
      kun: "きのう",
      on: "",
      meaning: "hôm qua",
      exampleJa: "昨日は雨でした。",
      exampleVi: "Hôm qua trời mưa."
   },
   {
      kanji: "昨夜",
      hiragana: "さくや",
      pos: "Danh từ",
      kun: "",
      on: "さく",
      meaning: "đêm qua",
      exampleJa: "昨夜は星がきれいでした。",
      exampleVi: "Đêm qua sao rất đẹp."
   },
   {
      kanji: "一昨年",
      hiragana: "おととし",
      pos: "Danh từ (thời gian)",
      kun: "おととし",
      on: "",
      meaning: "Năm kia",
      exampleJa: "一昨年、日本に行った。",
      exampleVi: "Năm kia tôi đã đi Nhật."
   },
   {
      kanji: "一昨日",
      hiragana: "おととい",
      pos: "Danh từ (thời gian)",
      kun: "おととい",
      on: "",
      meaning: "Hôm kia",
      exampleJa: "一昨日は雨が降った。",
      exampleVi: "Hôm kia trời mưa."
   },

   // === 予 ===
   {
      kanji: "予定",
      hiragana: "よてい",
      pos: "Danh từ / する動詞",
      kun: "",
      on: "よ",
      meaning: "dự định, kế hoạch",
      exampleJa: "明日の予定を決めました。",
      exampleVi: "Tôi đã quyết định kế hoạch cho ngày mai."
   },
   {
      kanji: "天気予報",
      hiragana: "てんきよほう",
      pos: "Danh từ",
      kun: "",
      on: "よ",
      meaning: "dự báo thời tiết",
      exampleJa: "天気予報によると明日は雨です。",
      exampleVi: "Theo dự báo thời tiết thì ngày mai trời mưa."
   },

   // === 定 ===
   {
      kanji: "定年",
      hiragana: "ていねん",
      pos: "Danh từ",
      kun: "",
      on: "てい",
      meaning: "tuổi nghỉ hưu",
      exampleJa: "彼は定年まで働きました。",
      exampleVi: "Ông ấy đã làm việc đến tuổi nghỉ hưu."
   },
   {
      kanji: "定か",
      hiragana: "さだか",
      pos: "Tính từ đuôi な",
      kun: "さだ(か)",
      on: "",
      meaning: "chắc chắn, rõ ràng",
      exampleJa: "その話は定かではない。",
      exampleVi: "Câu chuyện đó không chắc chắn."
   },
   {
      kanji: "定める",
      hiragana: "さだめる",
      pos: "Động từ",
      kun: "さだ(める)",
      on: "",
      meaning: "quy định, quyết định",
      exampleJa: "法律を定める。",
      exampleVi: "Ban hành luật pháp."
   },
   {
      kanji: "定まらない",
      hiragana: "さだまらない",
      pos: "Động từ",
      kun: "さだ(まる)",
      on: "",
      meaning: "chưa quyết định, không ổn định",
      exampleJa: "方針が定まらない。",
      exampleVi: "Chính sách chưa được quyết định."
   },
   {
      kanji: "定規",
      hiragana: "じょうぎ",
      pos: "Danh từ",
      kun: "",
      on: "じょう",
      meaning: "thước kẻ",
      exampleJa: "定規で線を引きます。",
      exampleVi: "Tôi kẻ đường thẳng bằng thước."
   },

   // === 用 ===
   {
      kanji: "用いられて",
      hiragana: "もちいられて",
      pos: "Động từ (thể bị động/te)",
      kun: "もち(いる)",
      on: "",
      meaning: "được sử dụng",
      exampleJa: "この言葉はよく用いられている。",
      exampleVi: "Từ này thường được sử dụng."
   },
   {
      kanji: "用",
      hiragana: "よう",
      pos: "Danh từ",
      kun: "",
      on: "よう",
      meaning: "công việc, việc cần",
      exampleJa: "急な用ができました。",
      exampleVi: "Tôi có việc gấp."
   },
   {
      kanji: "利用",
      hiragana: "りよう",
      pos: "Danh từ / する動詞",
      kun: "",
      on: "よう",
      meaning: "sử dụng, lợi dụng",
      exampleJa: "図書館を利用します。",
      exampleVi: "Tôi sử dụng thư viện."
   },
   {
      kanji: "用事",
      hiragana: "ようじ",
      pos: "Danh từ",
      kun: "",
      on: "よう",
      meaning: "việc bận, công chuyện",
      exampleJa: "用事があって行けません。",
      exampleVi: "Tôi bận việc nên không thể đi được."
   },
   {
      kanji: "用習",
      hiragana: "ようしゅう",
      pos: "Danh từ",
      kun: "",
      on: "よう",
      meaning: "bài học thực hành (ít dùng, văn viết)",
      exampleJa: "用習として覚えました。",
      exampleVi: "Tôi đã ghi nhớ như một bài tập thực hành."
   },
   {
      kanji: "用紙",
      hiragana: "ようし",
      pos: "Danh từ",
      kun: "",
      on: "よう",
      meaning: "mẫu giấy, biểu mẫu",
      exampleJa: "用紙に名前を書いてください。",
      exampleVi: "Xin hãy viết tên vào mẫu giấy."
   },

   // === 事 ===
   {
      kanji: "事",
      hiragana: "こと",
      pos: "Danh từ",
      kun: "こと",
      on: "",
      meaning: "sự việc, chuyện",
      exampleJa: "大事な事を忘れないでください。",
      exampleVi: "Xin đừng quên chuyện quan trọng."
   },
   {
      kanji: "工事",
      hiragana: "こうじ",
      pos: "Danh từ / する動詞",
      kun: "",
      on: "じ",
      meaning: "công trình, thi công",
      exampleJa: "道路工事が行われています。",
      exampleVi: "Đang thi công đường."
   },
   {
      kanji: "習い事",
      hiragana: "ならいごと",
      pos: "Danh từ",
      kun: "なら(い)",
      on: "",
      meaning: "việc học thêm, môn học ngoại khóa",
      exampleJa: "子供の習い事を探しています。",
      exampleVi: "Tôi đang tìm lớp học thêm cho con."
   },
   {
      kanji: "食事",
      hiragana: "しょくじ",
      pos: "Danh từ / する動詞",
      kun: "",
      on: "じ",
      meaning: "bữa ăn, dùng bữa",
      exampleJa: "友達と食事をしました。",
      exampleVi: "Tôi đã ăn cùng bạn."
   },
   {
      kanji: "大事な",
      hiragana: "だいじな",
      pos: "Tính từ đuôi な",
      kun: "",
      on: "じ",
      meaning: "quan trọng",
      exampleJa: "これは大事な書類です。",
      exampleVi: "Đây là tài liệu quan trọng."
   },
   {
      kanji: "好事家",
      hiragana: "こうずか",
      pos: "Danh từ",
      kun: "",
      on: "コウ",
      meaning: "Người sành sỏi, người có sở thích đặc biệt (nhất là sưu tầm)",
      exampleJa: "彼は骨董品の好事家だ。",
      exampleVi: "Ông ấy là người sành sỏi đồ cổ."
   },
   // === 押 ===
   {
      kanji: "押す",
      hiragana: "おす",
      pos: "Động từ",
      kun: "お(す)",
      on: "",
      meaning: "ấn, nhấn",
      exampleJa: "ボタンを押してください。",
      exampleVi: "Hãy nhấn nút."
   },
   {
      kanji: "押印",
      hiragana: "おういん",
      pos: "Danh từ / する動詞",
      kun: "",
      on: "おう",
      meaning: "đóng dấu",
      exampleJa: "書類に押印が必要です。",
      exampleVi: "Cần đóng dấu vào tài liệu."
   },
   {
      kanji: "押さえた",
      hiragana: "おさえた",
      pos: "Động từ (quá khứ)",
      kun: "おさ(える)",
      on: "",
      meaning: "đè, giữ chặt",
      exampleJa: "彼はドアを押さえた。",
      exampleVi: "Anh ấy đã giữ chặt cánh cửa."
   },

   // === 引 ===
   {
      kanji: "引ける",
      hiragana: "ひける",
      pos: "Động từ",
      kun: "ひ(ける)",
      on: "",
      meaning: "kết thúc, đóng cửa",
      exampleJa: "今日は早く店が引ける。",
      exampleVi: "Hôm nay cửa hàng đóng cửa sớm."
   },
   {
      kanji: "強引に",
      hiragana: "ごういんに",
      pos: "Trạng từ",
      kun: "",
      on: "いん",
      meaning: "một cách cưỡng ép, bắt buộc",
      exampleJa: "彼は強引に話を進めた。",
      exampleVi: "Anh ấy đã thúc đẩy câu chuyện một cách cưỡng ép."
   },
   {
      kanji: "引火",
      hiragana: "いんか",
      pos: "Danh từ / する動詞",
      kun: "",
      on: "いん",
      meaning: "bắt lửa, bén lửa",
      exampleJa: "ガソリンに火が引火した。",
      exampleVi: "Xăng đã bắt lửa."
   },
   {
      kanji: "引き出す",
      hiragana: "ひきだす",
      pos: "Động từ",
      kun: "ひ(く)",
      on: "",
      meaning: "kéo ra, rút ra",
      exampleJa: "銀行からお金を引き出す。",
      exampleVi: "Rút tiền từ ngân hàng."
   },
   {
      kanji: "引用",
      hiragana: "いんよう",
      pos: "Danh từ / する動詞",
      kun: "",
      on: "いん",
      meaning: "trích dẫn",
      exampleJa: "有名な言葉を引用しました。",
      exampleVi: "Tôi đã trích dẫn một câu nói nổi tiếng."
   },

   // === 取 ===
   {
      kanji: "取る",
      hiragana: "とる",
      pos: "Động từ",
      kun: "と(る)",
      on: "",
      meaning: "lấy, cầm",
      exampleJa: "本を棚から取る。",
      exampleVi: "Lấy sách từ kệ."
   },
   {
      kanji: "取材",
      hiragana: "しゅざい",
      pos: "Danh từ / する動詞",
      kun: "",
      on: "しゅ",
      meaning: "thu thập tư liệu, phỏng vấn",
      exampleJa: "新聞記者が事件を取材する。",
      exampleVi: "Nhà báo thu thập tư liệu về vụ án."
   },
   {
      kanji: "取り消す",
      hiragana: "とりけす",
      pos: "Động từ",
      kun: "と(る)",
      on: "",
      meaning: "hủy bỏ, rút lại",
      exampleJa: "予約を取り消しました。",
      exampleVi: "Tôi đã hủy đặt chỗ."
   },

   // === 消 ===
   {
      kanji: "消える",
      hiragana: "きえる",
      pos: "Động từ",
      kun: "き(える)",
      on: "",
      meaning: "biến mất, tắt",
      exampleJa: "電気が消えた。",
      exampleVi: "Đèn đã tắt."
   },
   {
      kanji: "消す",
      hiragana: "けす",
      pos: "Động từ",
      kun: "け(す)",
      on: "",
      meaning: "tắt, xóa",
      exampleJa: "テレビを消してください。",
      exampleVi: "Hãy tắt tivi đi."
   },
   {
      kanji: "消防車",
      hiragana: "しょうぼうしゃ",
      pos: "Danh từ",
      kun: "",
      on: "しょう",
      meaning: "xe cứu hỏa",
      exampleJa: "消防車が急いで出動した。",
      exampleVi: "Xe cứu hỏa đã nhanh chóng xuất phát."
   },
   {
      kanji: "消化",
      hiragana: "しょうか",
      pos: "Danh từ / する動詞",
      kun: "",
      on: "しょう",
      meaning: "tiêu hóa",
      exampleJa: "食べ物の消化が悪い。",
      exampleVi: "Tiêu hóa thức ăn kém."
   },
   // === 戸 ===
   {
      kanji: "井戸水",
      hiragana: "いどみず",
      pos: "Danh từ",
      kun: "と",
      on: "",
      meaning: "nước giếng",
      exampleJa: "昔は井戸水を使っていました。",
      exampleVi: "Ngày xưa người ta dùng nước giếng."
   },
   {
      kanji: "一戸建て",
      hiragana: "いっこだて",
      pos: "Danh từ",
      kun: "",
      on: "こ",
      meaning: "nhà riêng (biệt thự độc lập)",
      exampleJa: "郊外に一戸建てを買いました。",
      exampleVi: "Tôi đã mua một căn nhà riêng ở ngoại ô."
   },
   {
      kanji: "戸",
      hiragana: "と",
      pos: "Danh từ",
      kun: "と",
      on: "",
      meaning: "cửa",
      exampleJa: "戸を閉めてください。",
      exampleVi: "Hãy đóng cửa."
   },
   {
      kanji: "戸外",
      hiragana: "こがい",
      pos: "Danh từ",
      kun: "",
      on: "こ",
      meaning: "ngoài trời",
      exampleJa: "戸外で運動する。",
      exampleVi: "Tập thể dục ngoài trời."
   },
   {
      kanji: "門戸",
      hiragana: "もんこ",
      pos: "Danh từ",
      kun: "",
      on: "こ",
      meaning: "cánh cửa, lối vào (nghĩa bóng: cơ hội)",
      exampleJa: "外国に門戸を開く。",
      exampleVi: "Mở cửa với nước ngoài."
   },

   // === 窓 ===
   {
      kanji: "同窓会",
      hiragana: "どうそうかい",
      pos: "Danh từ",
      kun: "",
      on: "そう",
      meaning: "họp lớp",
      exampleJa: "高校の同窓会に参加しました。",
      exampleVi: "Tôi đã tham gia buổi họp lớp cấp 3."
   },
   {
      kanji: "窓",
      hiragana: "まど",
      pos: "Danh từ",
      kun: "まど",
      on: "",
      meaning: "cửa sổ",
      exampleJa: "窓から景色が見える。",
      exampleVi: "Có thể nhìn thấy phong cảnh từ cửa sổ."
   },
   {
      kanji: "窓口",
      hiragana: "まどぐち",
      pos: "Danh từ",
      kun: "まど",
      on: "",
      meaning: "quầy giao dịch",
      exampleJa: "切符を窓口で買う。",
      exampleVi: "Mua vé tại quầy giao dịch."
   },
   {
      kanji: "車窓",
      hiragana: "しゃそう",
      pos: "Danh từ",
      kun: "",
      on: "そう",
      meaning: "cửa sổ xe",
      exampleJa: "車窓からの眺めがきれいだ。",
      exampleVi: "Phong cảnh nhìn từ cửa sổ xe rất đẹp."
   },

   // === 階 ===
   {
      kanji: "階",
      hiragana: "かい",
      pos: "Danh từ (trợ số từ)",
      kun: "",
      on: "かい",
      meaning: "tầng",
      exampleJa: "この建物は十階建てです。",
      exampleVi: "Tòa nhà này có 10 tầng."
   },
   {
      kanji: "階段",
      hiragana: "かいだん",
      pos: "Danh từ",
      kun: "",
      on: "かい",
      meaning: "cầu thang",
      exampleJa: "階段を上る。",
      exampleVi: "Đi lên cầu thang."
   },
   {
      kanji: "段階",
      hiragana: "だんかい",
      pos: "Danh từ",
      kun: "",
      on: "かい",
      meaning: "giai đoạn, bước",
      exampleJa: "準備の段階に入った。",
      exampleVi: "Đã bước vào giai đoạn chuẩn bị."
   },
   {
      kanji: "六階",
      hiragana: "ろっかい",
      pos: "Danh từ (số đếm)",
      kun: "",
      on: "かい",
      meaning: "tầng sáu",
      exampleJa: "六階にレストランがあります。",
      exampleVi: "Có nhà hàng ở tầng sáu."
   },

   // === 段 ===
   {
      kanji: "石段",
      hiragana: "いしだん",
      pos: "Danh từ",
      kun: "",
      on: "だん",
      meaning: "bậc thang bằng đá",
      exampleJa: "神社への石段を登る。",
      exampleVi: "Leo lên bậc thang đá dẫn đến đền."
   },
   {
      kanji: "手段",
      hiragana: "しゅだん",
      pos: "Danh từ",
      kun: "",
      on: "だん",
      meaning: "phương tiện, cách thức",
      exampleJa: "平和的な手段で解決する。",
      exampleVi: "Giải quyết bằng phương tiện hòa bình."
   },
   // ====== 植 ======
   {
      kanji: "植わる",
      hiragana: "うわる",
      pos: "Động từ",
      kun: "う",
      on: "",
      meaning: "Được trồng, mọc",
      exampleJa: "庭に木が植わっている。",
      exampleVi: "Cây được trồng trong vườn."
   },
   {
      kanji: "植木",
      hiragana: "うえき",
      pos: "Danh từ",
      kun: "う",
      on: "",
      meaning: "Cây trồng trong chậu / cây cảnh",
      exampleJa: "植木に水をやる。",
      exampleVi: "Tưới nước cho cây cảnh."
   },
   {
      kanji: "植える",
      hiragana: "うえる",
      pos: "Động từ",
      kun: "う",
      on: "",
      meaning: "Trồng (cây)",
      exampleJa: "庭に花を植える。",
      exampleVi: "Trồng hoa trong vườn."
   },
   {
      kanji: "植物",
      hiragana: "しょくぶつ",
      pos: "Danh từ",
      kun: "",
      on: "ショク",
      meaning: "Thực vật",
      exampleJa: "植物の勉強をしている。",
      exampleVi: "Tôi đang học về thực vật."
   },
   {
      kanji: "移植",
      hiragana: "いしょく",
      pos: "Danh từ / Động từ",
      kun: "",
      on: "ショク",
      meaning: "Cấy ghép / di thực",
      exampleJa: "心臓移植の手術が行われた。",
      exampleVi: "Ca phẫu thuật ghép tim đã được tiến hành."
   },

   // ====== 葉 ======
   {
      kanji: "紅葉",
      hiragana: "こうよう / もみじ",
      pos: "Danh từ",
      kun: "もみじ",
      on: "ヨウ",
      meaning: "Lá đỏ mùa thu",
      exampleJa: "秋は紅葉がきれいだ。",
      exampleVi: "Mùa thu lá đỏ rất đẹp."
   },
   {
      kanji: "葉",
      hiragana: "は",
      pos: "Danh từ",
      kun: "は",
      on: "",
      meaning: "Lá cây",
      exampleJa: "木の葉が落ちる。",
      exampleVi: "Lá cây rụng xuống."
   },
   {
      kanji: "言葉",
      hiragana: "ことば",
      pos: "Danh từ",
      kun: "ば",
      on: "",
      meaning: "Từ ngữ, ngôn ngữ",
      exampleJa: "新しい言葉を覚える。",
      exampleVi: "Học từ mới."
   },

   // ====== 実 ======
   {
      kanji: "実",
      hiragana: "み",
      pos: "Danh từ",
      kun: "み",
      on: "",
      meaning: "Quả, hạt",
      exampleJa: "木に実がなる。",
      exampleVi: "Cây ra quả."
   },
   {
      kanji: "実力",
      hiragana: "じつりょく",
      pos: "Danh từ",
      kun: "",
      on: "ジツ",
      meaning: "Thực lực, năng lực thực sự",
      exampleJa: "実力を試す。",
      exampleVi: "Thử sức thực lực."
   },
   {
      kanji: "実現",
      hiragana: "じつげん",
      pos: "Danh từ / Động từ",
      kun: "",
      on: "ジツ",
      meaning: "Hiện thực hóa, thực hiện",
      exampleJa: "夢を実現する。",
      exampleVi: "Biến giấc mơ thành hiện thực."
   },
   {
      kanji: "実家",
      hiragana: "じっか",
      pos: "Danh từ",
      kun: "",
      on: "ジツ",
      meaning: "Nhà bố mẹ đẻ",
      exampleJa: "正月は実家に帰る。",
      exampleVi: "Tết tôi về nhà bố mẹ."
   },

   // ====== 根 ======
   {
      kanji: "根",
      hiragana: "ね",
      pos: "Danh từ",
      kun: "ね",
      on: "",
      meaning: "Rễ cây",
      exampleJa: "木の根が地面に広がっている。",
      exampleVi: "Rễ cây lan rộng trong lòng đất."
   },
   {
      kanji: "屋根",
      hiragana: "やね",
      pos: "Danh từ",
      kun: "ね",
      on: "",
      meaning: "Mái nhà",
      exampleJa: "屋根に雪が積もった。",
      exampleVi: "Tuyết phủ trên mái nhà."
   },
   {
      kanji: "根本",
      hiragana: "こんぽん",
      pos: "Danh từ",
      kun: "",
      on: "コン",
      meaning: "Căn bản, gốc rễ",
      exampleJa: "問題の根本を考える。",
      exampleVi: "Suy nghĩ về gốc rễ của vấn đề."
   },
   {
      kanji: "根元",
      hiragana: "ねもと",
      pos: "Danh từ",
      kun: "ね",
      on: "",
      meaning: "Gốc, căn nguyên",
      exampleJa: "木の根元に花を植える。",
      exampleVi: "Trồng hoa ở gốc cây."
   },
   // ====== 建 ======
   {
      kanji: "建てる",
      hiragana: "たてる",
      pos: "Động từ",
      kun: "た",
      on: "",
      meaning: "Xây, dựng",
      exampleJa: "家を建てる。",
      exampleVi: "Xây nhà."
   },
   {
      kanji: "建つ",
      hiragana: "たつ",
      pos: "Động từ",
      kun: "た",
      on: "",
      meaning: "Được xây, mọc lên",
      exampleJa: "新しいビルが建つ。",
      exampleVi: "Một tòa nhà mới được xây lên."
   },
   {
      kanji: "建築",
      hiragana: "けんちく",
      pos: "Danh từ",
      kun: "",
      on: "ケン",
      meaning: "Kiến trúc",
      exampleJa: "建築を勉強している。",
      exampleVi: "Tôi đang học kiến trúc."
   },
   {
      kanji: "建造物",
      hiragana: "けんぞうぶつ",
      pos: "Danh từ",
      kun: "",
      on: "ケン",
      meaning: "Công trình xây dựng",
      exampleJa: "歴史的な建造物を見学する。",
      exampleVi: "Tham quan các công trình lịch sử."
   },
   {
      kanji: "建立",
      hiragana: "こんりゅう",
      pos: "Danh từ / Động từ",
      kun: "",
      on: "リュウ",
      meaning: "Xây dựng, thành lập (thường dùng cho chùa, đền)",
      exampleJa: "寺を建立する。",
      exampleVi: "Xây dựng ngôi chùa."
   },

   // ====== 築 ======
   {
      kanji: "築",
      hiragana: "きずく",
      pos: "Động từ",
      kun: "きず",
      on: "",
      meaning: "Xây dựng (trừu tượng, vật chất)",
      exampleJa: "信頼関係を築く。",
      exampleVi: "Xây dựng mối quan hệ tin tưởng."
   },
   {
      kanji: "改築",
      hiragana: "かいちく",
      pos: "Danh từ / Động từ",
      kun: "",
      on: "チク",
      meaning: "Cải tạo, xây lại",
      exampleJa: "古い家を改築する。",
      exampleVi: "Cải tạo lại căn nhà cũ."
   },
   {
      kanji: "新築",
      hiragana: "しんちく",
      pos: "Danh từ",
      kun: "",
      on: "チク",
      meaning: "Xây mới",
      exampleJa: "新築のマンションに引っ越した。",
      exampleVi: "Tôi đã chuyển vào chung cư mới xây."
   },

   // ====== 構 ======
   {
      kanji: "構成",
      hiragana: "こうせい",
      pos: "Danh từ",
      kun: "",
      on: "コウ",
      meaning: "Cấu trúc, tổ chức, thành phần",
      exampleJa: "文章の構成を考える。",
      exampleVi: "Suy nghĩ về cấu trúc bài văn."
   },
   {
      kanji: "構内",
      hiragana: "こうない",
      pos: "Danh từ",
      kun: "",
      on: "コウ",
      meaning: "Khuôn viên, trong phạm vi",
      exampleJa: "駅構内で待ち合わせする。",
      exampleVi: "Hẹn gặp trong khuôn viên nhà ga."
   },
   {
      kanji: "構わない",
      hiragana: "かまわない",
      pos: "Cụm động từ",
      kun: "かま",
      on: "",
      meaning: "Không sao, không vấn đề",
      exampleJa: "少し遅れても構わない。",
      exampleVi: "Trễ một chút cũng không sao."
   },
   {
      kanji: "構える",
      hiragana: "かまえる",
      pos: "Động từ",
      kun: "かま",
      on: "",
      meaning: "Dựng lên, chuẩn bị tư thế",
      exampleJa: "店を構える。",
      exampleVi: "Mở cửa hàng."
   },
   {
      kanji: "構造",
      hiragana: "こうぞう",
      pos: "Danh từ",
      kun: "",
      on: "コウ",
      meaning: "Cấu tạo, cơ cấu",
      exampleJa: "ビルの構造を調べる。",
      exampleVi: "Tìm hiểu cấu tạo của tòa nhà."
   },

   // ====== 造 ======
   {
      kanji: "造船",
      hiragana: "ぞうせん",
      pos: "Danh từ",
      kun: "",
      on: "ゾウ",
      meaning: "Đóng tàu",
      exampleJa: "造船業が盛んだ。",
      exampleVi: "Ngành đóng tàu phát triển mạnh."
   },
   {
      kanji: "造る",
      hiragana: "つくる",
      pos: "Động từ",
      kun: "つく",
      on: "",
      meaning: "Làm, chế tạo",
      exampleJa: "家具を造る。",
      exampleVi: "Làm đồ gỗ."
   },
   {
      kanji: "木造",
      hiragana: "もくぞう",
      pos: "Danh từ",
      kun: "",
      on: "ゾウ",
      meaning: "Làm bằng gỗ",
      exampleJa: "木造の家に住んでいる。",
      exampleVi: "Tôi sống trong ngôi nhà gỗ."
   },
   {
      kanji: "造花",
      hiragana: "ぞうか",
      pos: "Danh từ",
      kun: "",
      on: "ゾウ",
      meaning: "Hoa giả",
      exampleJa: "造花を飾る。",
      exampleVi: "Trang trí bằng hoa giả."
   },
   // ====== 設 ======
   {
      kanji: "設計",
      hiragana: "せっけい",
      pos: "Danh từ",
      kun: "",
      on: "セツ",
      meaning: "Thiết kế",
      exampleJa: "家の設計をする。",
      exampleVi: "Thiết kế ngôi nhà."
   },
   {
      kanji: "設立",
      hiragana: "せつりつ",
      pos: "Danh từ / Động từ",
      kun: "",
      on: "セツ",
      meaning: "Thành lập, thiết lập",
      exampleJa: "会社を設立する。",
      exampleVi: "Thành lập công ty."
   },
   {
      kanji: "建設",
      hiragana: "けんせつ",
      pos: "Danh từ / Động từ",
      kun: "",
      on: "セツ",
      meaning: "Xây dựng",
      exampleJa: "道路を建設する。",
      exampleVi: "Xây dựng đường."
   },
   {
      kanji: "設ける",
      hiragana: "もうける",
      pos: "Động từ",
      kun: "もう",
      on: "",
      meaning: "Thiết lập, tạo ra",
      exampleJa: "新しいルールを設ける。",
      exampleVi: "Thiết lập quy tắc mới."
   },
   {
      kanji: "設定",
      hiragana: "せってい",
      pos: "Danh từ / Động từ",
      kun: "",
      on: "セツ",
      meaning: "Cài đặt, thiết lập",
      exampleJa: "パソコンの設定を変える。",
      exampleVi: "Thay đổi cài đặt của máy tính."
   },

   // ====== 柱 ======
   {
      kanji: "大黒柱",
      hiragana: "だいこくばしら",
      pos: "Danh từ",
      kun: "はしら",
      on: "",
      meaning: "Trụ cột (gia đình, tổ chức)",
      exampleJa: "父は家族の大黒柱だ。",
      exampleVi: "Cha là trụ cột của gia đình."
   },
   {
      kanji: "柱",
      hiragana: "はしら",
      pos: "Danh từ",
      kun: "はしら",
      on: "",
      meaning: "Cột, trụ",
      exampleJa: "柱によりかかる。",
      exampleVi: "Dựa vào cột."
   },
   {
      kanji: "電柱",
      hiragana: "でんちゅう",
      pos: "Danh từ",
      kun: "",
      on: "チュウ",
      meaning: "Cột điện",
      exampleJa: "電柱に登る。",
      exampleVi: "Leo lên cột điện."
   },

   // ====== 庫 ======
   {
      kanji: "車庫",
      hiragana: "しゃこ",
      pos: "Danh từ",
      kun: "",
      on: "コ",
      meaning: "Nhà xe, ga-ra",
      exampleJa: "車を車庫に入れる。",
      exampleVi: "Cho xe vào ga-ra."
   },
   {
      kanji: "金庫",
      hiragana: "きんこ",
      pos: "Danh từ",
      kun: "",
      on: "コ",
      meaning: "Két sắt, kho bạc",
      exampleJa: "金庫にお金を入れる。",
      exampleVi: "Cất tiền vào két sắt."
   },
   {
      kanji: "庫裏",
      hiragana: "くり",
      pos: "Danh từ",
      kun: "くり",
      on: "",
      meaning: "Khu bếp / nhà bếp trong chùa",
      exampleJa: "庫裏で食事を作る。",
      exampleVi: "Nấu ăn trong khu bếp của chùa."
   },

   // ====== 向 ======
   {
      kanji: "向く",
      hiragana: "むく",
      pos: "Động từ",
      kun: "む",
      on: "",
      meaning: "Hướng về, thích hợp",
      exampleJa: "右を向く。",
      exampleVi: "Quay sang bên phải."
   },
   {
      kanji: "向ける",
      hiragana: "むける",
      pos: "Động từ",
      kun: "む",
      on: "",
      meaning: "Hướng tới, nhắm vào",
      exampleJa: "若者に向ける本。",
      exampleVi: "Cuốn sách dành cho giới trẻ."
   },
   {
      kanji: "向上心",
      hiragana: "こうじょうしん",
      pos: "Danh từ",
      kun: "",
      on: "コウ",
      meaning: "Tinh thần cầu tiến",
      exampleJa: "彼は向上心が強い。",
      exampleVi: "Anh ấy có tinh thần cầu tiến mạnh mẽ."
   },
   {
      kanji: "向かう",
      hiragana: "むかう",
      pos: "Động từ",
      kun: "む",
      on: "",
      meaning: "Tiến về, đi tới",
      exampleJa: "駅に向かう。",
      exampleVi: "Tiến về nhà ga."
   },
   {
      kanji: "向こう",
      hiragana: "むこう",
      pos: "Danh từ / Trạng từ",
      kun: "む",
      on: "",
      meaning: "Bên kia, đối diện",
      exampleJa: "川の向こうに行く。",
      exampleVi: "Đi sang bên kia sông."
   },
   {
      kanji: "方向",
      hiragana: "ほうこう",
      pos: "Danh từ",
      kun: "",
      on: "コウ",
      meaning: "Phương hướng",
      exampleJa: "方向を間違える。",
      exampleVi: "Nhầm phương hướng."
   },
   {
      kanji: "熱心に",
      hiragana: "ねっしんに",
      pos: "Trạng từ",
      kun: "",
      on: "ネツ",
      meaning: "Nhiệt tình, hết lòng",
      exampleJa: "熱心に勉強する。",
      exampleVi: "Học hành nhiệt tình."
   },
   {
      kanji: "熱い",
      hiragana: "あつい",
      pos: "Tính từ",
      kun: "あつ",
      on: "",
      meaning: "Nóng (nhiệt độ, cảm xúc)",
      exampleJa: "熱いお茶を飲む。",
      exampleVi: "Uống trà nóng."
   },
   {
      kanji: "高熱",
      hiragana: "こうねつ",
      pos: "Danh từ",
      kun: "",
      on: "ネツ",
      meaning: "Sốt cao",
      exampleJa: "高熱が出る。",
      exampleVi: "Bị sốt cao."
   },

   // ====== 冷 ======
   {
      kanji: "冷や",
      hiragana: "ひや",
      pos: "Danh từ",
      kun: "ひ",
      on: "",
      meaning: "Lạnh (thức uống lạnh, đồ mát)",
      exampleJa: "冷やでビールを飲む。",
      exampleVi: "Uống bia lạnh."
   },
   {
      kanji: "冷やかす",
      hiragana: "ひやかす",
      pos: "Động từ",
      kun: "ひや",
      on: "",
      meaning: "Trêu chọc, ghẹo",
      exampleJa: "友達を冷やかす。",
      exampleVi: "Trêu chọc bạn bè."
   },
   {
      kanji: "冷ます",
      hiragana: "さます",
      pos: "Động từ",
      kun: "さ",
      on: "",
      meaning: "Làm nguội, làm lạnh",
      exampleJa: "スープを冷ます。",
      exampleVi: "Làm nguội súp."
   },
   {
      kanji: "冷える",
      hiragana: "ひえる",
      pos: "Động từ",
      kun: "ひ",
      on: "",
      meaning: "Trở nên lạnh",
      exampleJa: "体が冷える。",
      exampleVi: "Cơ thể bị lạnh."
   },
   {
      kanji: "冷やす",
      hiragana: "ひやす",
      pos: "Động từ",
      kun: "ひや",
      on: "",
      meaning: "Làm lạnh",
      exampleJa: "ビールを冷やす。",
      exampleVi: "Làm lạnh bia."
   },
   {
      kanji: "冷たい",
      hiragana: "つめたい",
      pos: "Tính từ",
      kun: "つめ",
      on: "",
      meaning: "Lạnh (cảm giác, thái độ)",
      exampleJa: "冷たい水を飲む。",
      exampleVi: "Uống nước lạnh."
   },
   {
      kanji: "冷める",
      hiragana: "さめる",
      pos: "Động từ",
      kun: "さ",
      on: "",
      meaning: "Nguội đi, mất nhiệt; nguội lạnh (tình cảm)",
      exampleJa: "熱が冷める。",
      exampleVi: "Cơn sốt hạ xuống."
   },

   // ====== 温 ======
   {
      kanji: "温かな",
      hiragana: "あたたかな",
      pos: "Tính từ",
      kun: "あたた",
      on: "",
      meaning: "Ấm áp",
      exampleJa: "温かな家庭。",
      exampleVi: "Gia đình ấm áp."
   },
   {
      kanji: "温める",
      hiragana: "あたためる",
      pos: "Động từ",
      kun: "あたた",
      on: "",
      meaning: "Làm ấm, hâm nóng",
      exampleJa: "ご飯を温める。",
      exampleVi: "Hâm nóng cơm."
   },
   {
      kanji: "体温計",
      hiragana: "たいおんけい",
      pos: "Danh từ",
      kun: "",
      on: "オン",
      meaning: "Nhiệt kế",
      exampleJa: "体温計で熱を測る。",
      exampleVi: "Đo nhiệt độ bằng nhiệt kế."
   },
   {
      kanji: "温まる",
      hiragana: "あたたまる",
      pos: "Động từ",
      kun: "あたた",
      on: "",
      meaning: "Trở nên ấm áp",
      exampleJa: "体が温まる。",
      exampleVi: "Cơ thể trở nên ấm áp."
   },
   {
      kanji: "温かい",
      hiragana: "あたたかい",
      pos: "Tính từ",
      kun: "あたた",
      on: "",
      meaning: "Ấm, ấm áp",
      exampleJa: "温かいスープを飲む。",
      exampleVi: "Uống súp ấm."
   },
   {
      kanji: "温度",
      hiragana: "おんど",
      pos: "Danh từ",
      kun: "",
      on: "オン",
      meaning: "Nhiệt độ",
      exampleJa: "温度を測る。",
      exampleVi: "Đo nhiệt độ."
   },

   // ====== 度 ======
   {
      kanji: "度",
      hiragana: "ど",
      pos: "Danh từ, hậu tố",
      kun: "",
      on: "ド",
      meaning: "Độ, lần",
      exampleJa: "三度目の挑戦。",
      exampleVi: "Lần thử thách thứ ba."
   },
   {
      kanji: "度",
      hiragana: "たび",
      pos: "Danh từ",
      kun: "たび",
      on: "",
      meaning: "Lần, dịp (cách đọc Kun)",
      exampleJa: "この度はお世話になりました。",
      exampleVi: "Lần này cảm ơn vì đã giúp đỡ."
   },
   {
      kanji: "支度",
      hiragana: "したく",
      pos: "Danh từ / Động từ (する)",
      kun: "",
      on: "タク",
      meaning: "Chuẩn bị, sửa soạn",
      exampleJa: "出かける支度をする。",
      exampleVi: "Chuẩn bị để đi ra ngoài."
   },
   {
      kanji: "法度",
      hiragana: "はっと",
      pos: "Danh từ",
      kun: "",
      on: "ド",
      meaning: "Pháp lệnh, luật lệ (thời phong kiến)",
      exampleJa: "江戸時代の法度を学ぶ。",
      exampleVi: "Học về pháp lệnh thời Edo."
   },
   // ====== 材 ======
   {
      kanji: "素材",
      hiragana: "そざい",
      pos: "Danh từ",
      kun: "",
      on: "ザイ",
      meaning: "Nguyên liệu",
      exampleJa: "この服は高級な素材で作られている。",
      exampleVi: "Bộ quần áo này được làm từ nguyên liệu cao cấp."
   },
   {
      kanji: "材料",
      hiragana: "ざいりょう",
      pos: "Danh từ",
      kun: "",
      on: "ザイ",
      meaning: "Nguyên liệu, vật liệu",
      exampleJa: "料理の材料を買う。",
      exampleVi: "Mua nguyên liệu nấu ăn."
   },
   {
      kanji: "人材",
      hiragana: "じんざい",
      pos: "Danh từ",
      kun: "",
      on: "ザイ",
      meaning: "Nhân tài, nguồn nhân lực",
      exampleJa: "会社にとって優秀な人材が必要だ。",
      exampleVi: "Công ty cần những nhân tài xuất sắc."
   },
   {
      kanji: "木材",
      hiragana: "もくざい",
      pos: "Danh từ",
      kun: "",
      on: "ザイ",
      meaning: "Gỗ, vật liệu gỗ",
      exampleJa: "木材を切り出す。",
      exampleVi: "Khai thác gỗ."
   },

   // ====== 型 ======
   {
      kanji: "型",
      hiragana: "かた",
      pos: "Danh từ",
      kun: "かた",
      on: "",
      meaning: "Khuôn, kiểu dáng",
      exampleJa: "新しい型の機械。",
      exampleVi: "Máy kiểu mới."
   },
   {
      kanji: "典型的な",
      hiragana: "てんけいてきな",
      pos: "Tính từ",
      kun: "",
      on: "ケイ",
      meaning: "Mang tính điển hình",
      exampleJa: "彼は典型的な日本人だ。",
      exampleVi: "Anh ấy là người Nhật điển hình."
   },
   {
      kanji: "模型",
      hiragana: "もけい",
      pos: "Danh từ",
      kun: "",
      on: "ケイ",
      meaning: "Mô hình",
      exampleJa: "飛行機の模型を作る。",
      exampleVi: "Làm mô hình máy bay."
   },

   // ====== 焼 ======
   {
      kanji: "焼く",
      hiragana: "やく",
      pos: "Động từ",
      kun: "や",
      on: "",
      meaning: "Nướng, đốt",
      exampleJa: "魚を焼く。",
      exampleVi: "Nướng cá."
   },
   {
      kanji: "焼ける",
      hiragana: "やける",
      pos: "Động từ",
      kun: "や",
      on: "",
      meaning: "Bị cháy, được nướng",
      exampleJa: "パンが焼けた。",
      exampleVi: "Bánh mì đã nướng xong."
   },
   {
      kanji: "延焼",
      hiragana: "えんしょう",
      pos: "Danh từ",
      kun: "",
      on: "ショウ",
      meaning: "Cháy lan",
      exampleJa: "火事が隣の家に延焼した。",
      exampleVi: "Đám cháy lan sang nhà bên cạnh."
   },
   {
      kanji: "日焼け",
      hiragana: "ひやけ",
      pos: "Danh từ / Động từ (する)",
      kun: "やけ",
      on: "",
      meaning: "Cháy nắng",
      exampleJa: "海で日焼けする。",
      exampleVi: "Bị cháy nắng ở biển."
   },

   // ====== 器 ======
   {
      kanji: "容器",
      hiragana: "ようき",
      pos: "Danh từ",
      kun: "",
      on: "キ",
      meaning: "Đồ chứa, đồ đựng",
      exampleJa: "この容器はガラスでできている。",
      exampleVi: "Đồ chứa này làm bằng thủy tinh."
   },
   {
      kanji: "器",
      hiragana: "うつわ",
      pos: "Danh từ",
      kun: "うつわ",
      on: "",
      meaning: "Đồ đựng, bát, chén",
      exampleJa: "器に料理を盛る。",
      exampleVi: "Bày món ăn ra bát."
   },
   {
      kanji: "器用な",
      hiragana: "きような",
      pos: "Tính từ",
      kun: "",
      on: "キ",
      meaning: "Khéo léo",
      exampleJa: "彼は手先が器用だ。",
      exampleVi: "Anh ấy rất khéo tay."
   },
   {
      kanji: "食器",
      hiragana: "しょっき",
      pos: "Danh từ",
      kun: "",
      on: "キ",
      meaning: "Đồ dùng bữa ăn (chén, bát, đũa, thìa…)",
      exampleJa: "食器を洗う。",
      exampleVi: "Rửa chén bát."
   },
   // ====== 卵 ======
   {
      kanji: "卵",
      hiragana: "たまご",
      pos: "Danh từ",
      kun: "たまご",
      on: "",
      meaning: "Trứng",
      exampleJa: "卵をゆでる。",
      exampleVi: "Luộc trứng."
   },
   {
      kanji: "産卵",
      hiragana: "さんらん",
      pos: "Danh từ / Động từ (する)",
      kun: "",
      on: "ラン",
      meaning: "Đẻ trứng",
      exampleJa: "魚が産卵する。",
      exampleVi: "Cá đẻ trứng."
   },
   {
      kanji: "卵白",
      hiragana: "らんぱく",
      pos: "Danh từ",
      kun: "",
      on: "ラン",
      meaning: "Lòng trắng trứng",
      exampleJa: "卵白を泡立てる。",
      exampleVi: "Đánh bông lòng trắng trứng."
   },

   // ====== 粉 ======
   {
      kanji: "粉雪",
      hiragana: "こなゆき",
      pos: "Danh từ",
      kun: "こな",
      on: "",
      meaning: "Tuyết bột",
      exampleJa: "粉雪が舞う。",
      exampleVi: "Tuyết bột bay."
   },
   {
      kanji: "花粉",
      hiragana: "かふん",
      pos: "Danh từ",
      kun: "",
      on: "フン",
      meaning: "Phấn hoa",
      exampleJa: "春は花粉が多い。",
      exampleVi: "Mùa xuân có nhiều phấn hoa."
   },
   {
      kanji: "小麦粉",
      hiragana: "こむぎこ",
      pos: "Danh từ",
      kun: "こ",
      on: "",
      meaning: "Bột mì",
      exampleJa: "小麦粉でパンを作る。",
      exampleVi: "Làm bánh mì bằng bột mì."
   },
   {
      kanji: "粉末",
      hiragana: "ふんまつ",
      pos: "Danh từ",
      kun: "",
      on: "フン",
      meaning: "Bột (dạng mịn)",
      exampleJa: "薬を粉末にする。",
      exampleVi: "Nghiền thuốc thành bột."
   },
   {
      kanji: "粉薬",
      hiragana: "こなぐすり",
      pos: "Danh từ",
      kun: "こな",
      on: "",
      meaning: "Thuốc bột",
      exampleJa: "粉薬を水で飲む。",
      exampleVi: "Uống thuốc bột với nước."
   },

   // ====== 乳 ======
   {
      kanji: "牛乳",
      hiragana: "ぎゅうにゅう",
      pos: "Danh từ",
      kun: "",
      on: "ニュウ",
      meaning: "Sữa bò",
      exampleJa: "毎朝牛乳を飲む。",
      exampleVi: "Mỗi sáng uống sữa bò."
   },
   {
      kanji: "乳飲み子",
      hiragana: "ちのみご",
      pos: "Danh từ",
      kun: "ち",
      on: "",
      meaning: "Trẻ còn bú sữa",
      exampleJa: "乳飲み子を育てる。",
      exampleVi: "Nuôi dưỡng trẻ còn bú."
   },
   {
      kanji: "哺乳類",
      hiragana: "ほにゅうるい",
      pos: "Danh từ",
      kun: "",
      on: "ニュウ",
      meaning: "Động vật có vú",
      exampleJa: "人間は哺乳類だ。",
      exampleVi: "Con người là động vật có vú."
   },
   {
      kanji: "乳",
      hiragana: "ちち",
      pos: "Danh từ",
      kun: "ちち",
      on: "",
      meaning: "Sữa, vú",
      exampleJa: "母の乳を飲む。",
      exampleVi: "Uống sữa mẹ."
   },
   {
      kanji: "乳歯",
      hiragana: "にゅうし",
      pos: "Danh từ",
      kun: "",
      on: "ニュウ",
      meaning: "Răng sữa",
      exampleJa: "乳歯が抜ける。",
      exampleVi: "Răng sữa rụng."
   },

   // ====== 塩 ======
   {
      kanji: "塩",
      hiragana: "しお",
      pos: "Danh từ",
      kun: "しお",
      on: "",
      meaning: "Muối",
      exampleJa: "塩を少し入れる。",
      exampleVi: "Cho một chút muối."
   },
   {
      kanji: "塩分",
      hiragana: "えんぶん",
      pos: "Danh từ",
      kun: "",
      on: "エン",
      meaning: "Hàm lượng muối",
      exampleJa: "塩分を控える。",
      exampleVi: "Hạn chế lượng muối."
   },
   {
      kanji: "塩味",
      hiragana: "しおあじ",
      pos: "Danh từ",
      kun: "しお",
      on: "",
      meaning: "Vị mặn",
      exampleJa: "塩味のスープ。",
      exampleVi: "Súp vị mặn."
   },
   {
      kanji: "塩素",
      hiragana: "えんそ",
      pos: "Danh từ",
      kun: "",
      on: "エン",
      meaning: "Clo",
      exampleJa: "プールに塩素を入れる。",
      exampleVi: "Cho clo vào hồ bơi."
   },
   // ====== 菜 ======
   {
      kanji: "野菜",
      hiragana: "やさい",
      pos: "Danh từ",
      kun: "",
      on: "サイ",
      meaning: "Rau",
      exampleJa: "毎日野菜を食べる。",
      exampleVi: "Mỗi ngày ăn rau."
   },
   {
      kanji: "生野菜",
      hiragana: "なまやさい",
      pos: "Danh từ",
      kun: "やさい",
      on: "",
      meaning: "Rau sống",
      exampleJa: "生野菜サラダを作る。",
      exampleVi: "Làm salad rau sống."
   },
   {
      kanji: "菜園",
      hiragana: "さいえん",
      pos: "Danh từ",
      kun: "",
      on: "サイ",
      meaning: "Vườn rau",
      exampleJa: "家の裏に菜園がある。",
      exampleVi: "Có vườn rau sau nhà."
   },
   {
      kanji: "菜の花",
      hiragana: "なのはな",
      pos: "Danh từ",
      kun: "な",
      on: "",
      meaning: "Hoa cải dầu",
      exampleJa: "菜の花畑が広がる。",
      exampleVi: "Cánh đồng hoa cải vàng trải rộng."
   },

   // ====== 果 ======
   {
      kanji: "果てる",
      hiragana: "はてる",
      pos: "Động từ",
      kun: "はてる",
      on: "",
      meaning: "Kết thúc, tận cùng",
      exampleJa: "命が果てる。",
      exampleVi: "Sinh mệnh chấm dứt."
   },
   {
      kanji: "果て",
      hiragana: "はて",
      pos: "Danh từ",
      kun: "はて",
      on: "",
      meaning: "Chỗ tận cùng, cùng cực",
      exampleJa: "世界の果てまで行く。",
      exampleVi: "Đi đến tận cùng thế giới."
   },
   {
      kanji: "成果",
      hiragana: "せいか",
      pos: "Danh từ",
      kun: "",
      on: "カ",
      meaning: "Thành quả",
      exampleJa: "努力の成果を得る。",
      exampleVi: "Đạt được thành quả từ nỗ lực."
   },
   {
      kanji: "果たす",
      hiragana: "はたす",
      pos: "Động từ",
      kun: "はたす",
      on: "",
      meaning: "Hoàn thành, thực hiện",
      exampleJa: "任務を果たす。",
      exampleVi: "Hoàn thành nhiệm vụ."
   },
   {
      kanji: "果実酒",
      hiragana: "かじつしゅ",
      pos: "Danh từ",
      kun: "",
      on: "カ",
      meaning: "Rượu hoa quả",
      exampleJa: "梅で果実酒を作る。",
      exampleVi: "Làm rượu hoa quả từ mận."
   },
   {
      kanji: "果物",
      hiragana: "くだもの",
      pos: "Danh từ",
      kun: "くだ",
      on: "",
      meaning: "Hoa quả, trái cây",
      exampleJa: "果物を食べる。",
      exampleVi: "Ăn trái cây."
   },

   // ====== 豆 ======
   {
      kanji: "豆",
      hiragana: "まめ",
      pos: "Danh từ",
      kun: "まめ",
      on: "",
      meaning: "Hạt đậu",
      exampleJa: "豆を植える。",
      exampleVi: "Gieo hạt đậu."
   },
   {
      kanji: "豆腐",
      hiragana: "とうふ",
      pos: "Danh từ",
      kun: "",
      on: "トウ",
      meaning: "Đậu phụ",
      exampleJa: "豆腐を食べる。",
      exampleVi: "Ăn đậu phụ."
   },
   {
      kanji: "大豆",
      hiragana: "だいず",
      pos: "Danh từ",
      kun: "",
      on: "ズ",
      meaning: "Đậu tương",
      exampleJa: "大豆からしょうゆを作る。",
      exampleVi: "Làm xì dầu từ đậu tương."
   },
   {
      kanji: "小豆",
      hiragana: "あずき",
      pos: "Danh từ",
      kun: "あずき",
      on: "",
      meaning: "Đậu đỏ",
      exampleJa: "小豆で餡を作る。",
      exampleVi: "Làm nhân đậu đỏ từ đậu azuki."
   },

   // ====== 缶 ======
   {
      kanji: "缶",
      hiragana: "かん",
      pos: "Danh từ",
      kun: "",
      on: "カン",
      meaning: "Lon, hộp kim loại",
      exampleJa: "缶を捨てる。",
      exampleVi: "Vứt lon."
   },
   {
      kanji: "空き缶",
      hiragana: "あきかん",
      pos: "Danh từ",
      kun: "かん",
      on: "",
      meaning: "Lon rỗng",
      exampleJa: "空き缶をリサイクルする。",
      exampleVi: "Tái chế lon rỗng."
   },
   // ====== 杯 ======
   {
      kanji: "一杯",
      hiragana: "いっぱい",
      pos: "Danh từ / Trạng từ",
      kun: "",
      on: "ハイ",
      meaning: "Một cốc, đầy",
      exampleJa: "水を一杯飲む。",
      exampleVi: "Uống một cốc nước."
   },
   {
      kanji: "杯",
      hiragana: "さかずき",
      pos: "Danh từ",
      kun: "さかずき",
      on: "",
      meaning: "Cốc, chén rượu",
      exampleJa: "杯を交わす。",
      exampleVi: "Cùng nhau cạn chén."
   },
   {
      kanji: "乾杯",
      hiragana: "かんぱい",
      pos: "Danh từ / Động từ",
      kun: "",
      on: "パイ",
      meaning: "Cạn ly",
      exampleJa: "友達と乾杯する。",
      exampleVi: "Cạn ly cùng bạn bè."
   },

   // ====== 枚 ======
   {
      kanji: "三枚",
      hiragana: "さんまい",
      pos: "Danh từ (trợ từ đếm)",
      kun: "",
      on: "マイ",
      meaning: "Ba tấm (giấy, áo, v.v.)",
      exampleJa: "紙を三枚ください。",
      exampleVi: "Cho tôi ba tờ giấy."
   },
   {
      kanji: "枚数",
      hiragana: "まいすう",
      pos: "Danh từ",
      kun: "",
      on: "マイ",
      meaning: "Số tấm, số tờ",
      exampleJa: "写真の枚数を数える。",
      exampleVi: "Đếm số tấm ảnh."
   },
   {
      kanji: "二枚目",
      hiragana: "にまいめ",
      pos: "Danh từ",
      kun: "",
      on: "マイ",
      meaning: "Tấm thứ hai / Trai đẹp",
      exampleJa: "彼は二枚目の俳優だ。",
      exampleVi: "Anh ấy là diễn viên đẹp trai."
   },

   // ====== 匹 ======
   {
      kanji: "二十匹",
      hiragana: "にじゅっぴき",
      pos: "Danh từ (trợ từ đếm)",
      kun: "ひき",
      on: "",
      meaning: "Hai mươi con (vật nhỏ)",
      exampleJa: "魚を二十匹買った。",
      exampleVi: "Mua 20 con cá."
   },
   {
      kanji: "三匹",
      hiragana: "さんびき",
      pos: "Danh từ (trợ từ đếm)",
      kun: "ひき",
      on: "",
      meaning: "Ba con (vật nhỏ)",
      exampleJa: "犬が三匹いる。",
      exampleVi: "Có ba con chó."
   },
   {
      kanji: "匹敵",
      hiragana: "ひってき",
      pos: "Động từ",
      kun: "",
      on: "ヒツ",
      meaning: "Sánh ngang, tương xứng",
      exampleJa: "彼の能力は先生に匹敵する。",
      exampleVi: "Năng lực của anh ấy sánh ngang với thầy giáo."
   },

   // ====== 量 ======
   {
      kanji: "量る",
      hiragana: "はかる",
      pos: "Động từ",
      kun: "はかる",
      on: "",
      meaning: "Đo, cân (trọng lượng, thể tích)",
      exampleJa: "米を量る。",
      exampleVi: "Cân gạo."
   },
   {
      kanji: "計量",
      hiragana: "けいりょう",
      pos: "Danh từ / Động từ",
      kun: "",
      on: "リョウ",
      meaning: "Đo lường",
      exampleJa: "荷物を計量する。",
      exampleVi: "Đo trọng lượng hành lý."
   },
   {
      kanji: "分量",
      hiragana: "ぶんりょう",
      pos: "Danh từ",
      kun: "",
      on: "リョウ",
      meaning: "Phân lượng, liều lượng",
      exampleJa: "薬の分量を守る。",
      exampleVi: "Tuân thủ liều lượng thuốc."
   },
   {
      kanji: "重量",
      hiragana: "じゅうりょう",
      pos: "Danh từ",
      kun: "",
      on: "リョウ",
      meaning: "Trọng lượng",
      exampleJa: "荷物の重量を量る。",
      exampleVi: "Cân trọng lượng hành lý."
   },
];

