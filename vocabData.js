const vocabData = [
   {
      kanji: "男性",
      hiragana: "だんせい",
      pos: "Danh từ",
      meaning: "nam giới",
      exampleJa: "この店は男性のお客さんが多いです。",
      exampleVi: "Quán này có nhiều khách nam."
   },
   {
      kanji: "女性",
      hiragana: "じょせい",
      pos: "Danh từ",
      meaning: "nữ giới",
      exampleJa: "女性だけのパーティーです。",
      exampleVi: "Đây là buổi tiệc chỉ dành cho nữ."
   },
   {
      kanji: "高齢",
      hiragana: "こうれい",
      pos: "Danh từ",
      meaning: "cao tuổi",
      exampleJa: "高齢の方に席を譲りましょう。",
      exampleVi: "Hãy nhường ghế cho người cao tuổi."
   },
   {
      kanji: "年上",
      hiragana: "としうえ",
      pos: "Danh từ",
      meaning: "người lớn tuổi hơn",
      exampleJa: "彼は私より年上です。",
      exampleVi: "Anh ấy lớn tuổi hơn tôi."
   },
   {
      kanji: "目上",
      hiragana: "めうえ",
      pos: "Danh từ",
      meaning: "người bề trên, cấp trên",
      exampleJa: "目上の人には敬語を使うべきです。",
      exampleVi: "Nên dùng kính ngữ với người bề trên."
   },
   {
      kanji: "先輩",
      hiragana: "せんぱい",
      pos: "Danh từ",
      meaning: "tiền bối, đàn anh/chị",
      exampleJa: "先輩に勉強の方法を教えてもらいました。",
      exampleVi: "Tôi được đàn anh/chị chỉ cho cách học."
   },
   {
      kanji: "後輩",
      hiragana: "こうはい",
      pos: "Danh từ",
      meaning: "hậu bối, đàn em",
      exampleJa: "後輩をよく面倒見る。",
      exampleVi: "Tôi thường quan tâm đến đàn em."
   },
   {
      kanji: "上司",
      hiragana: "じょうし",
      pos: "Danh từ",
      meaning: "cấp trên",
      exampleJa: "上司に報告する。",
      exampleVi: "Báo cáo với cấp trên."
   },
   {
      kanji: "相手",
      hiragana: "あいて",
      pos: "Danh từ",
      meaning: "đối phương, đối tượng",
      exampleJa: "話し相手がいないので寂しいです。",
      exampleVi: "Vì không có người trò chuyện nên tôi thấy buồn."
   },
   {
      kanji: "知り合い",
      hiragana: "しりあい",
      pos: "Danh từ",
      meaning: "người quen",
      exampleJa: "町で知り合いに会った。",
      exampleVi: "Tôi gặp người quen ở trong phố."
   },
   {
      kanji: "友人",
      hiragana: "ゆうじん",
      pos: "Danh từ",
      meaning: "bạn bè",
      exampleJa: "彼は大学時代の友人です。",
      exampleVi: "Anh ấy là bạn thời đại học của tôi."
   },
   {
      kanji: "仲",
      hiragana: "なか",
      pos: "Danh từ",
      meaning: "quan hệ, mối quan hệ",
      exampleJa: "二人は仲がいい。",
      exampleVi: "Hai người đó có quan hệ rất tốt."
   },
   {
      kanji: "生年月日",
      hiragana: "せいねんがっぴ",
      pos: "Danh từ",
      meaning: "ngày tháng năm sinh",
      exampleJa: "申込書に生年月日を書く。",
      exampleVi: "Ghi ngày tháng năm sinh vào đơn đăng ký."
   },
   {
      kanji: "誕生",
      hiragana: "たんじょう",
      pos: "Danh từ",
      meaning: "sự ra đời",
      exampleJa: "娘の誕生を祝う。",
      exampleVi: "Chúc mừng sự ra đời của con gái."
   },
   {
      kanji: "年",
      hiragana: "とし",
      pos: "Danh từ",
      meaning: "năm, tuổi",
      exampleJa: "来年はいい年になりますように。",
      exampleVi: "Mong năm sau sẽ là một năm tốt đẹp."
   },
   {
      kanji: "出身",
      hiragana: "しゅっしん",
      pos: "Danh từ",
      meaning: "xuất thân, quê quán",
      exampleJa: "私はベトナム出身です。",
      exampleVi: "Tôi xuất thân từ Việt Nam."
   },
   {
      kanji: "故郷",
      hiragana: "こきょう",
      pos: "Danh từ",
      meaning: "cố hương, quê hương",
      exampleJa: "休みに故郷へ帰る。",
      exampleVi: "Kỳ nghỉ tôi về quê hương."
   },
   {
      kanji: "成長",
      hiragana: "せいちょう",
      pos: "Danh từ / Động từ",
      meaning: "trưởng thành, phát triển",
      exampleJa: "子供の成長は早い。",
      exampleVi: "Sự trưởng thành của trẻ con rất nhanh."
   },
   {
      kanji: "成人",
      hiragana: "せいじん",
      pos: "Danh từ",
      meaning: "người trưởng thành",
      exampleJa: "日本では20歳で成人になる。",
      exampleVi: "Ở Nhật, 20 tuổi được coi là trưởng thành."
   },
   {
      kanji: "合格",
      hiragana: "ごうかく",
      pos: "Danh từ / Động từ",
      meaning: "thi đỗ, đậu",
      exampleJa: "試験に合格した。",
      exampleVi: "Tôi đã đậu kỳ thi."
   },
   {
      kanji: "退学",
      hiragana: "たいがく",
      pos: "Danh từ / Động từ",
      meaning: "bỏ học, thôi học",
      exampleJa: "病気で大学を退学した。",
      exampleVi: "Tôi nghỉ học đại học vì bệnh."
   },
   {
      kanji: "進学",
      hiragana: "しんがく",
      pos: "Danh từ / Động từ",
      meaning: "học lên (cấp cao hơn)",
      exampleJa: "大学院に進学する。",
      exampleVi: "Tôi học lên cao học."
   },
   {
      kanji: "就職",
      hiragana: "しゅうしょく",
      pos: "Danh từ / Động từ",
      meaning: "xin việc, có việc làm",
      exampleJa: "日本で就職したい。",
      exampleVi: "Tôi muốn xin việc ở Nhật."
   },
   {
      kanji: "退職",
      hiragana: "たいしょく",
      pos: "Danh từ / Động từ",
      meaning: "nghỉ việc, nghỉ hưu",
      exampleJa: "父は先月退職した。",
      exampleVi: "Bố tôi đã nghỉ việc tháng trước."
   },
   {
      kanji: "失業",
      hiragana: "しつぎょう",
      pos: "Danh từ / Động từ",
      meaning: "thất nghiệp",
      exampleJa: "会社が倒産して失業した。",
      exampleVi: "Công ty phá sản nên tôi bị thất nghiệp."
   },
   {
      kanji: "残業",
      hiragana: "ざんぎょう",
      pos: "Danh từ / Động từ",
      meaning: "làm thêm giờ",
      exampleJa: "毎日残業が多い。",
      exampleVi: "Ngày nào tôi cũng phải làm thêm nhiều."
   },
   {
      kanji: "生活",
      hiragana: "せいかつ",
      pos: "Danh từ / Động từ",
      meaning: "cuộc sống, sinh hoạt",
      exampleJa: "日本での生活に慣れた。",
      exampleVi: "Tôi đã quen với cuộc sống ở Nhật."
   },
   {
      kanji: "通勤",
      hiragana: "つうきん",
      pos: "Danh từ / Động từ",
      meaning: "đi làm (di chuyển đến công ty)",
      exampleJa: "毎日電車で通勤する。",
      exampleVi: "Hằng ngày tôi đi làm bằng tàu điện."
   },
   {
      kanji: "学歴",
      hiragana: "がくれき",
      pos: "Danh từ",
      meaning: "quá trình học vấn",
      exampleJa: "学歴より経験が大事だ。",
      exampleVi: "Kinh nghiệm quan trọng hơn học vấn."
   },
   {
      kanji: "給料",
      hiragana: "きゅうりょう",
      pos: "Danh từ",
      meaning: "lương",
      exampleJa: "給料が上がった。",
      exampleVi: "Lương đã tăng."
   },
   {
      kanji: "面接",
      hiragana: "めんせつ",
      pos: "Danh từ / Động từ",
      meaning: "phỏng vấn",
      exampleJa: "明日、会社の面接がある。",
      exampleVi: "Ngày mai tôi có buổi phỏng vấn ở công ty."
   },
   {
      kanji: "休憩",
      hiragana: "きゅうけい",
      pos: "Danh từ / Động từ",
      meaning: "nghỉ giải lao",
      exampleJa: "10分休憩しましょう。",
      exampleVi: "Chúng ta hãy nghỉ giải lao 10 phút."
   },
   {
      kanji: "観光",
      hiragana: "かんこう",
      pos: "Danh từ / Động từ",
      meaning: "tham quan, du lịch",
      exampleJa: "京都を観光する。",
      exampleVi: "Tôi đi tham quan Kyoto."
   },
   {
      kanji: "帰国",
      hiragana: "きこく",
      pos: "Danh từ / Động từ",
      meaning: "về nước",
      exampleJa: "夏休みに帰国する予定です。",
      exampleVi: "Tôi dự định về nước vào kỳ nghỉ hè."
   },
   {
      kanji: "帰省",
      hiragana: "きせい",
      pos: "Danh từ / Động từ",
      meaning: "về quê",
      exampleJa: "正月に帰省する人が多い。",
      exampleVi: "Có nhiều người về quê vào dịp Tết."
   },
   {
      kanji: "帰宅",
      hiragana: "きたく",
      pos: "Danh từ / Động từ",
      meaning: "về nhà",
      exampleJa: "昨夜は遅く帰宅した。",
      exampleVi: "Tối qua tôi về nhà muộn."
   },
   {
      kanji: "参加",
      hiragana: "さんか",
      pos: "Danh từ / Động từ",
      meaning: "tham gia",
      exampleJa: "ボランティア活動に参加する。",
      exampleVi: "Tôi tham gia hoạt động tình nguyện."
   },
   {
      kanji: "出席",
      hiragana: "しゅっせき",
      pos: "Danh từ / Động từ",
      meaning: "có mặt, tham dự",
      exampleJa: "会議に出席する。",
      exampleVi: "Tôi tham dự cuộc họp."
   },
   {
      kanji: "欠席",
      hiragana: "けっせき",
      pos: "Danh từ / Động từ",
      meaning: "vắng mặt",
      exampleJa: "今日は授業を欠席します。",
      exampleVi: "Hôm nay tôi vắng mặt ở lớp học."
   },
   {
      kanji: "遅刻",
      hiragana: "ちこく",
      pos: "Danh từ / Động từ",
      meaning: "đi trễ",
      exampleJa: "授業に遅刻した。",
      exampleVi: "Tôi đã đi trễ giờ học."
   },
   {
      kanji: "化粧",
      hiragana: "けしょう",
      pos: "Danh từ / Động từ",
      meaning: "trang điểm",
      exampleJa: "毎朝、化粧に30分かかる。",
      exampleVi: "Mỗi sáng tôi mất 30 phút để trang điểm."
   },
   {
      kanji: "計算",
      hiragana: "けいさん",
      pos: "Danh từ / Động từ",
      meaning: "tính toán",
      exampleJa: "頭の中で計算する。",
      exampleVi: "Tôi tính toán trong đầu."
   },
   {
      kanji: "計画",
      hiragana: "けいかく",
      pos: "Danh từ / Động từ",
      meaning: "kế hoạch",
      exampleJa: "旅行の計画を立てる。",
      exampleVi: "Lập kế hoạch đi du lịch."
   },
   {
      kanji: "成功",
      hiragana: "せいこう",
      pos: "Danh từ / Động từ",
      meaning: "thành công",
      exampleJa: "努力が成功につながった。",
      exampleVi: "Nỗ lực đã dẫn đến thành công."
   },
   {
      kanji: "失敗",
      hiragana: "しっぱい",
      pos: "Danh từ / Động từ",
      meaning: "thất bại",
      exampleJa: "テストに失敗した。",
      exampleVi: "Tôi đã thất bại trong kỳ kiểm tra."
   },
   {
      kanji: "準備",
      hiragana: "じゅんび",
      pos: "Danh từ / Động từ",
      meaning: "chuẩn bị",
      exampleJa: "旅行の準備をする。",
      exampleVi: "Tôi chuẩn bị cho chuyến du lịch."
   },
   {
      kanji: "整理",
      hiragana: "せいり",
      pos: "Danh từ / Động từ",
      meaning: "sắp xếp, chỉnh lý",
      exampleJa: "資料を整理する。",
      exampleVi: "Tôi sắp xếp tài liệu."
   },
   {
      kanji: "注文",
      hiragana: "ちゅうもん",
      pos: "Danh từ / Động từ",
      meaning: "gọi món, đặt hàng",
      exampleJa: "レストランでピザを注文する。",
      exampleVi: "Tôi gọi pizza trong nhà hàng."
   },
   {
      kanji: "貯金",
      hiragana: "ちょきん",
      pos: "Danh từ / Động từ",
      meaning: "tiết kiệm tiền, gửi tiết kiệm",
      exampleJa: "毎月少しずつ貯金する。",
      exampleVi: "Tôi tiết kiệm từng chút một mỗi tháng."
   },
   {
      kanji: "徹夜",
      hiragana: "てつや",
      pos: "Danh từ / Động từ",
      meaning: "thức trắng đêm",
      exampleJa: "試験の前日に徹夜した。",
      exampleVi: "Tôi đã thức trắng đêm trước ngày thi."
   },
   {
      kanji: "引っ越し",
      hiragana: "ひっこし",
      pos: "Danh từ / Động từ",
      meaning: "chuyển nhà",
      exampleJa: "来週引っ越しする予定です。",
      exampleVi: "Tôi dự định chuyển nhà vào tuần tới."
   },
   {
      kanji: "身長",
      hiragana: "しんちょう",
      pos: "Danh từ",
      meaning: "chiều cao cơ thể",
      exampleJa: "身長を測る。",
      exampleVi: "Đo chiều cao cơ thể."
   },
   {
      kanji: "体重",
      hiragana: "たいじゅう",
      pos: "Danh từ",
      meaning: "cân nặng",
      exampleJa: "体重が増えた。",
      exampleVi: "Tôi đã tăng cân."
   },
   {
      kanji: "けが",
      hiragana: "けが",
      pos: "Danh từ / Động từ",
      meaning: "vết thương, bị thương",
      exampleJa: "スポーツでけがをした。",
      exampleVi: "Tôi bị thương khi chơi thể thao."
   },
   {
      kanji: "会",
      hiragana: "かい",
      pos: "Danh từ",
      meaning: "cuộc họp, hội",
      exampleJa: "忘年会に出席する。",
      exampleVi: "Tôi tham dự tiệc tất niên."
   },
   {
      kanji: "趣味",
      hiragana: "しゅみ",
      pos: "Danh từ",
      meaning: "sở thích",
      exampleJa: "趣味は読書です。",
      exampleVi: "Sở thích của tôi là đọc sách."
   },
   {
      kanji: "興味",
      hiragana: "きょうみ",
      pos: "Danh từ",
      meaning: "hứng thú, quan tâm",
      exampleJa: "歴史に興味がある。",
      exampleVi: "Tôi có hứng thú với lịch sử."
   },
   {
      kanji: "思い出",
      hiragana: "おもいで",
      pos: "Danh từ",
      meaning: "kỷ niệm, hồi ức",
      exampleJa: "子供のころの思い出を話す。",
      exampleVi: "Tôi kể lại những kỷ niệm thời thơ ấu."
   },
   {
      kanji: "冗談",
      hiragana: "じょうだん",
      pos: "Danh từ",
      meaning: "chuyện đùa, lời nói đùa",
      exampleJa: "冗談を言ってみんなを笑わせた。",
      exampleVi: "Tôi nói đùa làm mọi người cười."
   },
   {
      kanji: "目的",
      hiragana: "もくてき",
      pos: "Danh từ",
      meaning: "mục đích",
      exampleJa: "旅行の目的は観光です。",
      exampleVi: "Mục đích chuyến đi là tham quan."
   },
   {
      kanji: "約束",
      hiragana: "やくそく",
      pos: "Danh từ / Động từ",
      meaning: "lời hứa, hẹn",
      exampleJa: "友達と約束を守る。",
      exampleVi: "Tôi giữ lời hứa với bạn."
   },
   {
      kanji: "おしゃべり",
      hiragana: "おしゃべり",
      pos: "Danh từ / Tính từ / Động từ",
      meaning: "nói chuyện, tán gẫu",
      exampleJa: "友達とおしゃべりするのが楽しい。",
      exampleVi: "Tôi thích tán gẫu với bạn bè."
   },
   {
      kanji: "遠慮",
      hiragana: "えんりょ",
      pos: "Danh từ / Động từ",
      meaning: "ngại ngùng, từ chối, khách khí",
      exampleJa: "どうぞ遠慮しないでください。",
      exampleVi: "Xin đừng ngại, cứ tự nhiên."
   },
   {
      kanji: "我慢",
      hiragana: "がまん",
      pos: "Danh từ / Động từ",
      meaning: "chịu đựng, nhẫn nhịn",
      exampleJa: "痛みを我慢する。",
      exampleVi: "Tôi chịu đựng cơn đau."
   },
   {
      kanji: "迷惑",
      hiragana: "めいわく",
      pos: "Danh từ / Tính từ",
      meaning: "phiền phức, làm phiền",
      exampleJa: "人に迷惑をかけてはいけない。",
      exampleVi: "Không được gây phiền phức cho người khác."
   },
   {
      kanji: "希望",
      hiragana: "きぼう",
      pos: "Danh từ / Động từ",
      meaning: "hy vọng, nguyện vọng",
      exampleJa: "将来の希望を語る。",
      exampleVi: "Tôi nói về ước mơ tương lai."
   },
   {
      kanji: "夢",
      hiragana: "ゆめ",
      pos: "Danh từ",
      meaning: "giấc mơ, ước mơ",
      exampleJa: "医者になるのが夢です。",
      exampleVi: "Ước mơ của tôi là trở thành bác sĩ."
   },
   {
      kanji: "賛成",
      hiragana: "さんせい",
      pos: "Danh từ / Động từ",
      meaning: "tán thành, đồng ý",
      exampleJa: "私はその意見に賛成です。",
      exampleVi: "Tôi đồng ý với ý kiến đó."
   },
   {
      kanji: "反対",
      hiragana: "はんたい",
      pos: "Danh từ / Động từ",
      meaning: "phản đối",
      exampleJa: "提案に反対する人が多い。",
      exampleVi: "Có nhiều người phản đối đề xuất đó."
   },
   {
      kanji: "想像",
      hiragana: "そうぞう",
      pos: "Danh từ / Động từ",
      meaning: "tưởng tượng",
      exampleJa: "未来を想像する。",
      exampleVi: "Tôi tưởng tượng về tương lai."
   },
   {
      kanji: "努力",
      hiragana: "どりょく",
      pos: "Danh từ / Động từ",
      meaning: "nỗ lực, cố gắng",
      exampleJa: "努力すれば成功できる。",
      exampleVi: "Nếu nỗ lực thì có thể thành công."
   },
   {
      kanji: "太陽",
      hiragana: "たいよう",
      pos: "Danh từ",
      meaning: "mặt trời",
      exampleJa: "太陽が昇る。",
      exampleVi: "Mặt trời mọc."
   },
   {
      kanji: "地球",
      hiragana: "ちきゅう",
      pos: "Danh từ",
      meaning: "trái đất",
      exampleJa: "地球は丸い。",
      exampleVi: "Trái đất hình tròn."
   },
   {
      kanji: "温度",
      hiragana: "おんど",
      pos: "Danh từ",
      meaning: "nhiệt độ",
      exampleJa: "温度を測る。",
      exampleVi: "Đo nhiệt độ."
   },
   {
      kanji: "湿度",
      hiragana: "しつど",
      pos: "Danh từ",
      meaning: "độ ẩm",
      exampleJa: "日本の夏は湿度が高い。",
      exampleVi: "Mùa hè ở Nhật độ ẩm cao."
   },
   {
      kanji: "湿気",
      hiragana: "しっけ",
      pos: "Danh từ",
      meaning: "hơi ẩm, ẩm thấp",
      exampleJa: "梅雨は湿気が多い。",
      exampleVi: "Mùa mưa có nhiều hơi ẩm."
   },
   {
      kanji: "梅雨",
      hiragana: "つゆ",
      pos: "Danh từ",
      meaning: "mùa mưa",
      exampleJa: "梅雨の時期は洗濯物が乾きにくい。",
      exampleVi: "Vào mùa mưa, đồ giặt khó khô."
   },
   {
      kanji: "かび",
      hiragana: "かび",
      pos: "Danh từ",
      meaning: "nấm mốc",
      exampleJa: "古いパンにかびが生えた。",
      exampleVi: "Bánh mì cũ đã bị mốc."
   },
   {
      kanji: "暖房",
      hiragana: "だんぼう",
      pos: "Danh từ",
      meaning: "máy sưởi, hệ thống sưởi",
      exampleJa: "冬は暖房をつける。",
      exampleVi: "Mùa đông thì bật máy sưởi."
   },
   {
      kanji: "皮",
      hiragana: "かわ",
      pos: "Danh từ",
      meaning: "da, vỏ",
      exampleJa: "りんごの皮をむく。",
      exampleVi: "Gọt vỏ táo."
   },
   {
      kanji: "缶",
      hiragana: "かん",
      pos: "Danh từ",
      meaning: "lon, hộp kim loại",
      exampleJa: "ビール缶を捨てる。",
      exampleVi: "Vứt lon bia đi."
   },
   {
      kanji: "画面",
      hiragana: "がめん",
      pos: "Danh từ",
      meaning: "màn hình",
      exampleJa: "スマホの画面が割れた。",
      exampleVi: "Màn hình điện thoại bị nứt."
   },
   {
      kanji: "番組",
      hiragana: "ばんぐみ",
      pos: "Danh từ",
      meaning: "chương trình (TV, radio)",
      exampleJa: "好きなテレビ番組を見る。",
      exampleVi: "Xem chương trình tivi yêu thích."
   },
   {
      kanji: "記事",
      hiragana: "きじ",
      pos: "Danh từ",
      meaning: "bài báo, phóng sự",
      exampleJa: "新聞の記事を読む。",
      exampleVi: "Đọc bài báo trên báo chí."
   },
   {
      kanji: "近所",
      hiragana: "きんじょ",
      pos: "Danh từ",
      meaning: "hàng xóm, lân cận",
      exampleJa: "近所に友達が住んでいる。",
      exampleVi: "Bạn tôi sống gần nhà."
   },
   {
      kanji: "警察",
      hiragana: "けいさつ",
      pos: "Danh từ",
      meaning: "cảnh sát",
      exampleJa: "事故を警察に知らせる。",
      exampleVi: "Báo tai nạn cho cảnh sát."
   },
   {
      kanji: "犯人",
      hiragana: "はんにん",
      pos: "Danh từ",
      meaning: "tội phạm, hung thủ",
      exampleJa: "犯人を捕まえた。",
      exampleVi: "Bắt được hung thủ."
   },
   {
      kanji: "ご銭",
      hiragana: "ごせん",
      pos: "Danh từ",
      meaning: "tiền xu (ít dùng, có thể do lỗi chính tả là 小銭)",
      exampleJa: "バスに乗るとき小銭が必要だ。",
      exampleVi: "Khi đi xe buýt cần có tiền lẻ."
   },
   {
      kanji: "ごちそう",
      hiragana: "ごちそう",
      pos: "Danh từ / Động từ",
      meaning: "chiêu đãi, món ngon",
      exampleJa: "友達にごちそうになる。",
      exampleVi: "Được bạn chiêu đãi."
   },
   {
      kanji: "作者",
      hiragana: "さくしゃ",
      pos: "Danh từ",
      meaning: "tác giả",
      exampleJa: "この小説の作者は有名だ。",
      exampleVi: "Tác giả của tiểu thuyết này nổi tiếng."
   },
   {
      kanji: "作品",
      hiragana: "さくひん",
      pos: "Danh từ",
      meaning: "tác phẩm",
      exampleJa: "美術館に新しい作品が展示された。",
      exampleVi: "Tác phẩm mới được trưng bày trong bảo tàng."
   },
   {
      kanji: "制服",
      hiragana: "せいふく",
      pos: "Danh từ",
      meaning: "đồng phục",
      exampleJa: "学生は制服を着る。",
      exampleVi: "Học sinh mặc đồng phục."
   },
   {
      kanji: "洗剤",
      hiragana: "せんざい",
      pos: "Danh từ",
      meaning: "chất tẩy rửa",
      exampleJa: "洗剤で食器を洗う。",
      exampleVi: "Rửa bát bằng nước rửa chén."
   },
   {
      kanji: "底",
      hiragana: "そこ",
      pos: "Danh từ",
      meaning: "đáy",
      exampleJa: "海の底が見えない。",
      exampleVi: "Không thể nhìn thấy đáy biển."
   },
   {
      kanji: "地下",
      hiragana: "ちか",
      pos: "Danh từ",
      meaning: "ngầm, dưới mặt đất",
      exampleJa: "地下鉄で通勤する。",
      exampleVi: "Đi làm bằng tàu điện ngầm."
   },
   {
      kanji: "寺",
      hiragana: "てら",
      pos: "Danh từ",
      meaning: "chùa",
      exampleJa: "京都には有名な寺が多い。",
      exampleVi: "Ở Kyoto có nhiều ngôi chùa nổi tiếng."
   },
   {
      kanji: "道路",
      hiragana: "どうろ",
      pos: "Danh từ",
      meaning: "đường xá",
      exampleJa: "道路が混んでいる。",
      exampleVi: "Đường đang bị kẹt xe."
   },
   {
      kanji: "坂",
      hiragana: "さか",
      pos: "Danh từ",
      meaning: "dốc",
      exampleJa: "坂を上るのは大変だ。",
      exampleVi: "Leo dốc rất vất vả."
   },
   {
      kanji: "煙",
      hiragana: "けむり",
      pos: "Danh từ",
      meaning: "khói",
      exampleJa: "たばこの煙は体に悪い。",
      exampleVi: "Khói thuốc lá có hại cho cơ thể."
   },
   {
      kanji: "灰",
      hiragana: "はい",
      pos: "Danh từ",
      meaning: "tro, tàn (thuốc, lửa)",
      exampleJa: "灰皿にたばこの灰を捨てる。",
      exampleVi: "Vứt tàn thuốc vào gạt tàn."
   },
   {
      kanji: "判",
      hiragana: "はん",
      pos: "Danh từ",
      meaning: "con dấu, dấu đóng",
      exampleJa: "書類に判を押す。",
      exampleVi: "Đóng dấu vào tài liệu."
   },
   {
      kanji: "名刺",
      hiragana: "めいし",
      pos: "Danh từ",
      meaning: "danh thiếp",
      exampleJa: "名刺を交換する。",
      exampleVi: "Trao đổi danh thiếp."
   },
   {
      kanji: "免許",
      hiragana: "めんきょ",
      pos: "Danh từ",
      meaning: "giấy phép, bằng",
      exampleJa: "車の運転免許を取る。",
      exampleVi: "Lấy bằng lái xe."
   },
   {
      kanji: "多く",
      hiragana: "おおく",
      pos: "Danh từ / Trạng từ",
      meaning: "nhiều",
      exampleJa: "多くの学生がその試験を受けた。",
      exampleVi: "Nhiều học sinh đã tham dự kỳ thi đó."
   },
   {
      kanji: "前半",
      hiragana: "ぜんはん",
      pos: "Danh từ",
      meaning: "nửa đầu",
      exampleJa: "試合の前半は0対0だった。",
      exampleVi: "Nửa đầu trận đấu là 0 đều."
   },
   {
      kanji: "後半",
      hiragana: "こうはん",
      pos: "Danh từ",
      meaning: "nửa sau",
      exampleJa: "映画の後半はとても感動的だった。",
      exampleVi: "Nửa sau của bộ phim rất cảm động."
   },
   {
      kanji: "最高",
      hiragana: "さいこう",
      pos: "Danh từ / Tính từ",
      meaning: "cao nhất, tuyệt vời nhất",
      exampleJa: "今日は最高に楽しい日だ。",
      exampleVi: "Hôm nay là một ngày vui nhất."
   },
   {
      kanji: "最低",
      hiragana: "さいてい",
      pos: "Danh từ / Tính từ",
      meaning: "thấp nhất, tệ nhất",
      exampleJa: "今月の気温は最低3度だった。",
      exampleVi: "Nhiệt độ tháng này thấp nhất là 3 độ."
   },
   {
      kanji: "最初",
      hiragana: "さいしょ",
      pos: "Danh từ",
      meaning: "lúc đầu, đầu tiên",
      exampleJa: "最初に自己紹介をしてください。",
      exampleVi: "Trước tiên hãy giới thiệu bản thân."
   },
   {
      kanji: "最後",
      hiragana: "さいご",
      pos: "Danh từ",
      meaning: "cuối cùng",
      exampleJa: "最後まであきらめない。",
      exampleVi: "Không bỏ cuộc cho đến cuối cùng."
   },
   {
      kanji: "自動",
      hiragana: "じどう",
      pos: "Danh từ / Tính từ",
      meaning: "tự động",
      exampleJa: "このドアは自動で開く。",
      exampleVi: "Cánh cửa này mở tự động."
   },
   {
      kanji: "種類",
      hiragana: "しゅるい",
      pos: "Danh từ",
      meaning: "loại, chủng loại",
      exampleJa: "この花にはいろいろな種類がある。",
      exampleVi: "Loài hoa này có nhiều loại khác nhau."
   },
   {
      kanji: "性格",
      hiragana: "せいかく",
      pos: "Danh từ",
      meaning: "tính cách",
      exampleJa: "彼は優しい性格だ。",
      exampleVi: "Anh ấy có tính cách hiền lành."
   },
   {
      kanji: "性質",
      hiragana: "せいしつ",
      pos: "Danh từ",
      meaning: "tính chất, bản chất",
      exampleJa: "水は液体の性質を持っている。",
      exampleVi: "Nước có tính chất của chất lỏng."
   },
   {
      kanji: "順番",
      hiragana: "じゅんばん",
      pos: "Danh từ",
      meaning: "thứ tự, lần lượt",
      exampleJa: "順番を待つ。",
      exampleVi: "Chờ đến lượt."
   },
   {
      kanji: "番",
      hiragana: "ばん",
      pos: "Danh từ",
      meaning: "số (thứ tự), lượt",
      exampleJa: "次はあなたの番です。",
      exampleVi: "Tiếp theo là lượt của bạn."
   },
   {
      kanji: "方法",
      hiragana: "ほうほう",
      pos: "Danh từ",
      meaning: "phương pháp",
      exampleJa: "新しい勉強方法を試す。",
      exampleVi: "Thử phương pháp học mới."
   },
   {
      kanji: "製品",
      hiragana: "せいひん",
      pos: "Danh từ",
      meaning: "sản phẩm",
      exampleJa: "工場で新しい製品を作る。",
      exampleVi: "Sản xuất sản phẩm mới trong nhà máy."
   },
   {
      kanji: "値上がり",
      hiragana: "ねあがり",
      pos: "Danh từ",
      meaning: "sự tăng giá",
      exampleJa: "電気代の値上がりが続いている。",
      exampleVi: "Tiền điện vẫn tiếp tục tăng giá."
   },
   {
      kanji: "生",
      hiragana: "なま",
      pos: "Danh từ / Tính từ",
      meaning: "tươi, sống, thô",
      exampleJa: "生の魚を食べる。",
      exampleVi: "Ăn cá sống."
   },
   {
      kanji: "渇く",
      hiragana: "かわく",
      pos: "Động từ",
      meaning: "khát, khô",
      exampleJa: "のどが渇いた。",
      exampleVi: "Khát nước."
   },
   {
      kanji: "嗅ぐ",
      hiragana: "かぐ",
      pos: "Động từ",
      meaning: "ngửi",
      exampleJa: "花のにおいを嗅ぐ。",
      exampleVi: "Ngửi hương hoa."
   },
   {
      kanji: "叩く",
      hiragana: "たたく",
      pos: "Động từ",
      meaning: "đánh, gõ, vỗ",
      exampleJa: "子供のおしりを叩く。",
      exampleVi: "Đánh vào mông trẻ con."
   },
   {
      kanji: "殴る",
      hiragana: "なぐる",
      pos: "Động từ",
      meaning: "đấm, đánh",
      exampleJa: "けんかして相手を殴った。",
      exampleVi: "Cãi nhau rồi đánh đối phương."
   },
   {
      kanji: "ける",
      hiragana: "ける",
      pos: "Động từ",
      meaning: "đá",
      exampleJa: "ボールをける。",
      exampleVi: "Đá quả bóng."
   },
   {
      kanji: "抱く",
      hiragana: "だく",
      pos: "Động từ",
      meaning: "ôm",
      exampleJa: "赤ちゃんを抱く。",
      exampleVi: "Ôm em bé."
   },
   {
      kanji: "倒れる",
      hiragana: "たおれる",
      pos: "Động từ",
      meaning: "ngã, đổ",
      exampleJa: "地震で建物が倒れた。",
      exampleVi: "Tòa nhà đổ vì động đất."
   },
   {
      kanji: "倒す",
      hiragana: "たおす",
      pos: "Động từ",
      meaning: "làm đổ, đánh bại",
      exampleJa: "敵を倒す。",
      exampleVi: "Đánh bại kẻ địch."
   },
   {
      kanji: "起きる",
      hiragana: "おきる",
      pos: "Động từ",
      meaning: "thức dậy, xảy ra",
      exampleJa: "毎朝7時に起きる。",
      exampleVi: "Mỗi sáng tôi dậy lúc 7 giờ."
   },
   {
      kanji: "起こる",
      hiragana: "おこる",
      pos: "Động từ",
      meaning: "xảy ra",
      exampleJa: "事故が起こった。",
      exampleVi: "Tai nạn đã xảy ra."
   },
   {
      kanji: "尋ねる",
      hiragana: "たずねる",
      pos: "Động từ",
      meaning: "hỏi, thăm",
      exampleJa: "道を尋ねる。",
      exampleVi: "Hỏi đường."
   },
   {
      kanji: "起こす",
      hiragana: "おこす",
      pos: "Động từ",
      meaning: "đánh thức, gây ra",
      exampleJa: "子供を起こす。",
      exampleVi: "Đánh thức đứa trẻ."
   },
   {
      kanji: "呼ぶ",
      hiragana: "よぶ",
      pos: "Động từ",
      meaning: "gọi, mời",
      exampleJa: "友達を呼ぶ。",
      exampleVi: "Gọi bạn."
   },
   {
      kanji: "叫ぶ",
      hiragana: "さけぶ",
      pos: "Động từ",
      meaning: "gào, hét",
      exampleJa: "大声で叫ぶ。",
      exampleVi: "Hét lớn tiếng."
   },
   {
      kanji: "黙る",
      hiragana: "だまる",
      pos: "Động từ",
      meaning: "im lặng",
      exampleJa: "彼は黙って部屋を出た。",
      exampleVi: "Anh ấy im lặng rời khỏi phòng."
   },
   {
      kanji: "飼う",
      hiragana: "かう",
      pos: "Động từ",
      meaning: "nuôi (động vật)",
      exampleJa: "犬を飼っている。",
      exampleVi: "Đang nuôi chó."
   },
   {
      kanji: "数える",
      hiragana: "かぞえる",
      pos: "Động từ",
      meaning: "đếm",
      exampleJa: "数字を数える。",
      exampleVi: "Đếm số."
   },
   {
      kanji: "乾く",
      hiragana: "かわく",
      pos: "Động từ",
      meaning: "khô",
      exampleJa: "洗濯物が乾いた。",
      exampleVi: "Quần áo đã khô."
   },
   {
      kanji: "乾かす",
      hiragana: "かわかす",
      pos: "Động từ",
      meaning: "làm khô",
      exampleJa: "髪をドライヤーで乾かす。",
      exampleVi: "Sấy khô tóc bằng máy sấy."
   },
   {
      kanji: "畳む",
      hiragana: "たたむ",
      pos: "Động từ",
      meaning: "gấp, xếp",
      exampleJa: "洗濯物を畳む。",
      exampleVi: "Gấp quần áo."
   },
   {
      kanji: "誘う",
      hiragana: "さそう",
      pos: "Động từ",
      meaning: "mời, rủ rê",
      exampleJa: "友達を映画に誘う。",
      exampleVi: "Rủ bạn đi xem phim."
   },
   {
      kanji: "おごる",
      hiragana: "おごる",
      pos: "Động từ",
      meaning: "khao, đãi",
      exampleJa: "後輩に昼ご飯をおごる。",
      exampleVi: "Khao đàn em bữa trưa."
   },
   {
      kanji: "預かる",
      hiragana: "あずかる",
      pos: "Động từ",
      meaning: "trông nom, giữ hộ",
      exampleJa: "友達の荷物を預かる。",
      exampleVi: "Giữ hộ hành lý cho bạn."
   },
   {
      kanji: "預ける",
      hiragana: "あずける",
      pos: "Động từ",
      meaning: "gửi, giao cho",
      exampleJa: "子供を保育園に預ける。",
      exampleVi: "Gửi con ở nhà trẻ."
   },
   {
      kanji: "決まる",
      hiragana: "きまる",
      pos: "Động từ",
      meaning: "được quyết định",
      exampleJa: "試合の日が決まった。",
      exampleVi: "Ngày thi đấu đã được quyết định."
   },
   {
      kanji: "決める",
      hiragana: "きめる",
      pos: "Động từ",
      meaning: "quyết định",
      exampleJa: "進学か就職かを決める。",
      exampleVi: "Quyết định học tiếp hay đi làm."
   },
   {
      kanji: "写る",
      hiragana: "うつる",
      pos: "Động từ",
      meaning: "được chụp/hiện lên (ảnh)",
      exampleJa: "写真に友達がよく写っている。",
      exampleVi: "Bạn tôi được chụp rõ trong bức ảnh."
   },
   {
      kanji: "写す",
      hiragana: "うつす",
      pos: "Động từ",
      meaning: "chụp, sao chép, chép lại",
      exampleJa: "黒板の字をノートに写す。",
      exampleVi: "Chép chữ trên bảng vào vở."
   },
   {
      kanji: "思い出す",
      hiragana: "おもいだす",
      pos: "Động từ",
      meaning: "nhớ lại, hồi tưởng",
      exampleJa: "昔の友達を思い出した。",
      exampleVi: "Tôi nhớ lại người bạn ngày xưa."
   },
   {
      kanji: "教わる",
      hiragana: "おそわる",
      pos: "Động từ",
      meaning: "được dạy, học từ ai",
      exampleJa: "先生に日本語を教わる。",
      exampleVi: "Được thầy giáo dạy tiếng Nhật."
   },
   {
      kanji: "申し込む",
      hiragana: "もうしこむ",
      pos: "Động từ",
      meaning: "đăng ký, xin",
      exampleJa: "日本語講座に申し込む。",
      exampleVi: "Đăng ký khóa học tiếng Nhật."
   },
   {
      kanji: "断る",
      hiragana: "ことわる",
      pos: "Động từ",
      meaning: "từ chối, xin phép trước",
      exampleJa: "招待を断った。",
      exampleVi: "Tôi đã từ chối lời mời."
   },
   {
      kanji: "見つかる",
      hiragana: "みつかる",
      pos: "Động từ",
      meaning: "được tìm thấy",
      exampleJa: "なくした鍵が見つかった。",
      exampleVi: "Chiếc chìa khóa bị mất đã được tìm thấy."
   },
   {
      kanji: "見つける",
      hiragana: "みつける",
      pos: "Động từ",
      meaning: "tìm thấy",
      exampleJa: "新しいレストランを見つけた。",
      exampleVi: "Tôi tìm thấy một nhà hàng mới."
   },
   {
      kanji: "捕まる",
      hiragana: "つかまる",
      pos: "Động từ",
      meaning: "bị bắt, bị tóm",
      exampleJa: "泥棒が警察に捕まった。",
      exampleVi: "Tên trộm đã bị cảnh sát bắt."
   },
   {
      kanji: "捕まえる",
      hiragana: "つかまえる",
      pos: "Động từ",
      meaning: "bắt, tóm lấy",
      exampleJa: "警察が犯人を捕まえた。",
      exampleVi: "Cảnh sát đã bắt được tội phạm."
   },
   {
      kanji: "乗る",
      hiragana: "のる",
      pos: "Động từ",
      meaning: "lên (xe, tàu...)",
      exampleJa: "電車に乗る。",
      exampleVi: "Lên tàu điện."
   },
   {
      kanji: "乗せる",
      hiragana: "のせる",
      pos: "Động từ",
      meaning: "cho lên, chất lên, chở đi",
      exampleJa: "子供を車に乗せる。",
      exampleVi: "Cho con lên xe ô tô."
   },
   {
      kanji: "下りる",
      hiragana: "おりる",
      pos: "Động từ",
      meaning: "xuống (xe, núi...)",
      exampleJa: "バスを下りる。",
      exampleVi: "Xuống xe buýt."
   },
   {
      kanji: "降りる",
      hiragana: "おりる",
      pos: "Động từ",
      meaning: "xuống, rơi xuống",
      exampleJa: "雨が降りる。",
      exampleVi: "Mưa rơi xuống."
   },
   {
      kanji: "降ろす",
      hiragana: "おろす",
      pos: "Động từ",
      meaning: "cho xuống, dỡ xuống",
      exampleJa: "荷物をトラックから降ろす。",
      exampleVi: "Dỡ hành lý từ xe tải xuống."
   },
   {
      kanji: "下ろす",
      hiragana: "おろす",
      pos: "Động từ",
      meaning: "rút (tiền), hạ xuống",
      exampleJa: "銀行からお金を下ろす。",
      exampleVi: "Rút tiền từ ngân hàng."
   },
   {
      kanji: "直る",
      hiragana: "なおる",
      pos: "Động từ",
      meaning: "được sửa, khỏi bệnh",
      exampleJa: "壊れたパソコンが直った。",
      exampleVi: "Máy tính hỏng đã được sửa xong."
   },
   {
      kanji: "直す",
      hiragana: "なおす",
      pos: "Động từ",
      meaning: "sửa chữa",
      exampleJa: "間違いを直す。",
      exampleVi: "Sửa lỗi sai."
   },
   {
      kanji: "治る",
      hiragana: "なおる",
      pos: "Động từ",
      meaning: "khỏi bệnh, lành lại",
      exampleJa: "けがが治った。",
      exampleVi: "Vết thương đã lành."
   },
   {
      kanji: "治す",
      hiragana: "なおす",
      pos: "Động từ",
      meaning: "chữa trị, điều trị",
      exampleJa: "病気を治す。",
      exampleVi: "Chữa bệnh."
   },
   {
      kanji: "亡くなる",
      hiragana: "なくなる",
      pos: "動詞",
      meaning: "chết, mất",
      exampleJa: "祖母が昨年亡くなった。",
      exampleVi: "Bà tôi đã mất năm ngoái."
   },
   {
      kanji: "亡くす",
      hiragana: "なくす",
      pos: "動詞",
      meaning: "mất (người thân)",
      exampleJa: "彼は事故で友人を亡くした。",
      exampleVi: "Anh ấy đã mất bạn trong một vụ tai nạn."
   },
   {
      kanji: "生まれる",
      hiragana: "うまれる",
      pos: "動詞",
      meaning: "được sinh ra",
      exampleJa: "私は大阪で生まれた。",
      exampleVi: "Tôi sinh ra ở Osaka."
   },
   {
      kanji: "生む",
      hiragana: "うむ",
      pos: "動詞",
      meaning: "sinh ra, tạo ra",
      exampleJa: "努力は必ず結果を生む。",
      exampleVi: "Nỗ lực chắc chắn sẽ tạo ra kết quả."
   },
   {
      kanji: "産む",
      hiragana: "うむ",
      pos: "動詞",
      meaning: "sinh nở",
      exampleJa: "彼女は元気な子供を産んだ。",
      exampleVi: "Cô ấy đã sinh một em bé khỏe mạnh."
   },
   {
      kanji: "出会う",
      hiragana: "であう",
      pos: "動詞",
      meaning: "gặp gỡ (tình cờ)",
      exampleJa: "駅で友達に出会った。",
      exampleVi: "Tôi tình cờ gặp bạn ở ga."
   },
   {
      kanji: "訪ねる",
      hiragana: "たずねる",
      pos: "動詞",
      meaning: "thăm, ghé thăm",
      exampleJa: "週末に友人の家を訪ねた。",
      exampleVi: "Cuối tuần tôi đã đến thăm nhà bạn."
   },
   {
      kanji: "付き合う",
      hiragana: "つきあう",
      pos: "動詞",
      meaning: "giao du, hẹn hò",
      exampleJa: "彼と3年付き合っている。",
      exampleVi: "Tôi đã hẹn hò với anh ấy 3 năm."
   },
   {
      kanji: "効く",
      hiragana: "きく",
      pos: "動詞",
      meaning: "có hiệu quả",
      exampleJa: "この薬は頭痛によく効く。",
      exampleVi: "Thuốc này rất hiệu quả với đau đầu."
   },
   {
      kanji: "生やす",
      hiragana: "はやす",
      pos: "動詞",
      meaning: "nuôi (râu, tóc), mọc",
      exampleJa: "彼はひげを生やしている。",
      exampleVi: "Anh ấy để râu."
   },
   {
      kanji: "経つ",
      hiragana: "たつ",
      pos: "動詞",
      meaning: "trôi qua (thời gian)",
      exampleJa: "日本に来て5年が経った。",
      exampleVi: "Đã 5 năm trôi qua kể từ khi tôi đến Nhật."
   },
   {
      kanji: "間に合う",
      hiragana: "まにあう",
      pos: "動詞",
      meaning: "kịp",
      exampleJa: "電車に間に合った。",
      exampleVi: "Tôi đã kịp chuyến tàu."
   },
   {
      kanji: "間に合わせる",
      hiragana: "まにあわせる",
      pos: "動詞",
      meaning: "làm cho kịp, xoay sở tạm thời",
      exampleJa: "古い道具で仕事を間に合わせる。",
      exampleVi: "Tạm thời làm việc với dụng cụ cũ."
   },
   {
      kanji: "通う",
      hiragana: "かよう",
      pos: "動詞",
      meaning: "đi lại thường xuyên",
      exampleJa: "毎日学校に通っている。",
      exampleVi: "Tôi đi học hằng ngày."
   },
   {
      kanji: "込む",
      hiragana: "こむ",
      pos: "動詞",
      meaning: "đông đúc",
      exampleJa: "電車がとても込んでいる。",
      exampleVi: "Tàu điện rất đông."
   },
   {
      kanji: "すれ違う",
      hiragana: "すれちがう",
      pos: "動詞",
      meaning: "đi lướt qua nhau",
      exampleJa: "駅で彼とすれ違った。",
      exampleVi: "Tôi lướt qua anh ấy ở nhà ga."
   },
   {
      kanji: "掛かる",
      hiragana: "かかる",
      pos: "動詞",
      meaning: "tốn (thời gian, chi phí)",
      exampleJa: "この仕事には時間が掛かる。",
      exampleVi: "Công việc này tốn nhiều thời gian."
   },
   {
      kanji: "掛ける",
      hiragana: "かける",
      pos: "動詞",
      meaning: "treo, gọi (điện thoại), nhân (toán)",
      exampleJa: "壁にカレンダーを掛ける。",
      exampleVi: "Treo lịch lên tường."
   },
   {
      kanji: "動く",
      hiragana: "うごく",
      pos: "動詞",
      meaning: "chuyển động, hoạt động",
      exampleJa: "機械が動いている。",
      exampleVi: "Máy đang hoạt động."
   },
   {
      kanji: "動かす",
      hiragana: "うごかす",
      pos: "動詞",
      meaning: "làm cho di chuyển, vận hành",
      exampleJa: "体を動かす運動をする。",
      exampleVi: "Tập thể dục để vận động cơ thể."
   },
   {
      kanji: "役立てる / 役に立てる",
      hiragana: "やくだてる / やくにたてる",
      pos: "動詞",
      meaning: "tận dụng, làm cho có ích",
      exampleJa: "経験を仕事に役立てる。",
      exampleVi: "Tận dụng kinh nghiệm vào công việc."
   },
   {
      kanji: "飾り",
      hiragana: "かざり",
      pos: "Danh từ",
      meaning: "trang trí",
      exampleJa: "クリスマスツリーに飾りをつける。",
      exampleVi: "Trang trí cây thông Noel."
   },
   {
      kanji: "遊び",
      hiragana: "あそび",
      pos: "Danh từ",
      meaning: "trò chơi, sự vui chơi",
      exampleJa: "子供の遊びを見ている。",
      exampleVi: "Đang xem bọn trẻ chơi."
   },
   {
      kanji: "集まり",
      hiragana: "あつまり",
      pos: "Danh từ",
      meaning: "cuộc họp, buổi tụ tập",
      exampleJa: "親戚の集まりに参加する。",
      exampleVi: "Tham gia buổi tụ tập họ hàng."
   },
   {
      kanji: "教え",
      hiragana: "おしえ",
      pos: "Danh từ",
      meaning: "lời dạy, chỉ dạy",
      exampleJa: "先生の教えを守る。",
      exampleVi: "Tuân theo lời dạy của thầy giáo."
   },
   {
      kanji: "踊り",
      hiragana: "おどり",
      pos: "Danh từ",
      meaning: "điệu nhảy",
      exampleJa: "祭りで踊りを見る。",
      exampleVi: "Xem điệu nhảy ở lễ hội."
   },
   {
      kanji: "思い",
      hiragana: "おもい",
      pos: "Danh từ",
      meaning: "suy nghĩ, cảm xúc",
      exampleJa: "彼への思いを伝える。",
      exampleVi: "Truyền đạt tình cảm dành cho anh ấy."
   },
   {
      kanji: "考え",
      hiragana: "かんがえ",
      pos: "Danh từ",
      meaning: "suy nghĩ, ý tưởng",
      exampleJa: "いい考えが浮かんだ。",
      exampleVi: "Nảy ra một ý tưởng hay."
   },
   {
      kanji: "片づけ",
      hiragana: "かたづけ",
      pos: "Danh từ",
      meaning: "sự dọn dẹp",
      exampleJa: "食事の片づけをする。",
      exampleVi: "Dọn dẹp sau bữa ăn."
   },
   {
      kanji: "手伝い",
      hiragana: "てつだい",
      pos: "Danh từ",
      meaning: "sự giúp đỡ",
      exampleJa: "母の料理の手伝いをする。",
      exampleVi: "Giúp mẹ nấu ăn."
   },
   {
      kanji: "働き",
      hiragana: "はたらき",
      pos: "Danh từ",
      meaning: "hoạt động, chức năng",
      exampleJa: "薬の働きを調べる。",
      exampleVi: "Tìm hiểu tác dụng của thuốc."
   },
   {
      kanji: "決まり",
      hiragana: "きまり",
      pos: "Danh từ",
      meaning: "quy định, luật lệ",
      exampleJa: "学校の決まりを守る。",
      exampleVi: "Tuân thủ quy định của trường học."
   },
   {
      kanji: "騒ぎ",
      hiragana: "さわぎ",
      pos: "Danh từ",
      meaning: "sự ồn ào, huyên náo",
      exampleJa: "外で大きな騒ぎがあった。",
      exampleVi: "Ngoài kia có một vụ náo loạn lớn."
   },
   {
      kanji: "知らせ",
      hiragana: "しらせ",
      pos: "Danh từ",
      meaning: "thông báo, tin tức",
      exampleJa: "合格の知らせを受けた。",
      exampleVi: "Nhận được thông báo đỗ."
   },
   {
      kanji: "頼み",
      hiragana: "たのみ",
      pos: "Danh từ",
      meaning: "nhờ vả, yêu cầu",
      exampleJa: "友達の頼みを聞く。",
      exampleVi: "Nghe lời nhờ vả của bạn."
   },
   {
      kanji: "疲れ",
      hiragana: "つかれ",
      pos: "Danh từ",
      meaning: "sự mệt mỏi",
      exampleJa: "仕事の疲れがたまる。",
      exampleVi: "Sự mệt mỏi vì công việc tích tụ lại."
   },
   {
      kanji: "違い",
      hiragana: "ちがい",
      pos: "Danh từ",
      meaning: "sự khác biệt",
      exampleJa: "二つの商品の違いを比べる。",
      exampleVi: "So sánh sự khác nhau giữa hai sản phẩm."
   },
   {
      kanji: "始め",
      hiragana: "はじめ",
      pos: "Danh từ",
      meaning: "sự bắt đầu",
      exampleJa: "会議の始めに挨拶をする。",
      exampleVi: "Phát biểu chào hỏi vào lúc bắt đầu cuộc họp."
   },
   {
      kanji: "続き",
      hiragana: "つづき",
      pos: "Danh từ",
      meaning: "sự tiếp tục, phần tiếp theo",
      exampleJa: "ドラマの続きを見る。",
      exampleVi: "Xem phần tiếp theo của bộ phim."
   },
   {
      kanji: "暮れ",
      hiragana: "くれ",
      pos: "Danh từ",
      meaning: "cuối (ngày, năm)",
      exampleJa: "年の暮れは忙しい。",
      exampleVi: "Cuối năm rất bận rộn."
   },
   {
      kanji: "行き",
      hiragana: "いき",
      pos: "Danh từ",
      meaning: "lượt đi",
      exampleJa: "東京行きの電車に乗る。",
      exampleVi: "Lên chuyến tàu đi Tokyo."
   },
   {
      kanji: "帰り",
      hiragana: "かえり",
      pos: "Danh từ",
      meaning: "lượt về, sự trở về",
      exampleJa: "仕事の帰りに買い物をする。",
      exampleVi: "Mua đồ trên đường về sau giờ làm."
   },
   {
      kanji: "急ぎ",
      hiragana: "いそぎ",
      pos: "Danh từ",
      meaning: "vội vàng, gấp rút",
      exampleJa: "急ぎの仕事を片付ける。",
      exampleVi: "Giải quyết công việc gấp rút."
   },
   {
      kanji: "遅れ",
      hiragana: "おくれ",
      pos: "Danh từ",
      meaning: "sự chậm trễ",
      exampleJa: "電車の遅れで会議に間に合わなかった。",
      exampleVi: "Vì tàu bị trễ nên không kịp cuộc họp."
   },
   {
      kanji: "貸し",
      hiragana: "かし",
      pos: "Danh từ",
      meaning: "cho vay, cho mượn",
      exampleJa: "お金の貸し借りは友達としない。",
      exampleVi: "Không vay mượn tiền với bạn bè."
   },
   {
      kanji: "借り",
      hiragana: "かり",
      pos: "Danh từ",
      meaning: "mượn",
      exampleJa: "図書館で本の借りがある。",
      exampleVi: "Có sách mượn ở thư viện."
   },
   {
      kanji: "勝ち",
      hiragana: "かち",
      pos: "Danh từ",
      meaning: "chiến thắng",
      exampleJa: "チームの勝ちを喜ぶ。",
      exampleVi: "Vui mừng trước chiến thắng của đội."
   },
   {
      kanji: "負け",
      hiragana: "まけ",
      pos: "Danh từ",
      meaning: "thua",
      exampleJa: "試合の負けを認める。",
      exampleVi: "Thừa nhận thất bại trong trận đấu."
   },
   {
      kanji: "迎え",
      hiragana: "むかえ",
      pos: "Danh từ",
      meaning: "đón tiếp, đi đón",
      exampleJa: "駅まで友達を迎えに行く。",
      exampleVi: "Đi đón bạn ở nhà ga."
   },
   {
      kanji: "始まり",
      hiragana: "はじまり",
      pos: "Danh từ",
      meaning: "sự khởi đầu",
      exampleJa: "新学期の始まりは4月だ。",
      exampleVi: "Sự khởi đầu của năm học mới là vào tháng 4."
   },
   {
      kanji: "終わり",
      hiragana: "おわり",
      pos: "Danh từ",
      meaning: "sự kết thúc",
      exampleJa: "会議の終わりに質問があった。",
      exampleVi: "Có câu hỏi vào cuối cuộc họp."
   },
   {
      kanji: "戻り",
      hiragana: "もどり",
      pos: "Danh từ",
      meaning: "sự quay lại, trở lại",
      exampleJa: "昼休みの後は仕事に戻りましょう。",
      exampleVi: "Sau giờ nghỉ trưa, hãy trở lại công việc."
   },
   {
      kanji: "別れ",
      hiragana: "わかれ",
      pos: "Danh từ",
      meaning: "chia tay, ly biệt",
      exampleJa: "卒業式は友達との別れの日だ。",
      exampleVi: "Lễ tốt nghiệp là ngày chia tay bạn bè."
   },
   {
      kanji: "喜び",
      hiragana: "よろこび",
      pos: "Danh từ",
      meaning: "niềm vui",
      exampleJa: "合格の喜びを家族と分かち合う。",
      exampleVi: "Chia sẻ niềm vui đỗ đạt với gia đình."
   },
   {
      kanji: "楽しみ",
      hiragana: "たのしみ",
      pos: "Danh từ",
      meaning: "niềm vui, điều mong chờ",
      exampleJa: "旅行を楽しみにしている。",
      exampleVi: "Tôi mong chờ chuyến du lịch."
   },
   {
      kanji: "笑い",
      hiragana: "わらい",
      pos: "Danh từ",
      meaning: "tiếng cười",
      exampleJa: "会場は笑いでいっぱいだった。",
      exampleVi: "Hội trường tràn ngập tiếng cười."
   },
   {
      kanji: "驚き",
      hiragana: "おどろき",
      pos: "Danh từ",
      meaning: "sự ngạc nhiên",
      exampleJa: "彼の上達の速さに驚きました。",
      exampleVi: "Tôi ngạc nhiên về tốc độ tiến bộ của anh ấy."
   },
   {
      kanji: "怒り",
      hiragana: "いかり",
      pos: "Danh từ",
      meaning: "sự tức giận",
      exampleJa: "不公平な扱いに怒りを感じる。",
      exampleVi: "Cảm thấy tức giận vì bị đối xử bất công."
   },
   {
      kanji: "悲しみ",
      hiragana: "かなしみ",
      pos: "Danh từ",
      meaning: "nỗi buồn",
      exampleJa: "別れの悲しみを乗り越える。",
      exampleVi: "Vượt qua nỗi buồn chia ly."
   },
   {
      kanji: "幸せな",
      hiragana: "しあわせな",
      pos: "Tính từ-na",
      meaning: "hạnh phúc",
      exampleJa: "幸せな生活を送る。",
      exampleVi: "Sống một cuộc sống hạnh phúc."
   },
   {
      kanji: "得意な",
      hiragana: "とくいな",
      pos: "Tính từ-na",
      meaning: "giỏi, thành thạo",
      exampleJa: "私は料理が得意です。",
      exampleVi: "Tôi giỏi nấu ăn."
   },
   {
      kanji: "苦手な",
      hiragana: "にがてな",
      pos: "Tính từ-na",
      meaning: "kém, yếu, dở",
      exampleJa: "数学は苦手だ。",
      exampleVi: "Tôi kém môn toán."
   },
   {
      kanji: "熱心な",
      hiragana: "ねっしんな",
      pos: "Tính từ-na",
      meaning: "nhiệt tình",
      exampleJa: "彼は勉強に熱心だ。",
      exampleVi: "Anh ấy rất nhiệt tình trong việc học."
   },
   {
      kanji: "夢中な",
      hiragana: "むちゅうな",
      pos: "Tính từ-na",
      meaning: "say mê, miệt mài",
      exampleJa: "子供はゲームに夢中だ。",
      exampleVi: "Trẻ con say mê trò chơi."
   },
   {
      kanji: "退屈な",
      hiragana: "たいくつな",
      pos: "Tính từ-na",
      meaning: "chán, buồn tẻ",
      exampleJa: "退屈な映画だった。",
      exampleVi: "Đó là một bộ phim buồn tẻ."
   },
   {
      kanji: "健康な",
      hiragana: "けんこうな",
      pos: "Tính từ-na",
      meaning: "khoẻ mạnh",
      exampleJa: "健康な体を保つ。",
      exampleVi: "Giữ một cơ thể khoẻ mạnh."
   },
   {
      kanji: "苦しい",
      hiragana: "くるしい",
      pos: "Tính từ-i",
      meaning: "khó khăn, đau đớn, khổ sở",
      exampleJa: "息が苦しい。",
      exampleVi: "Khó thở."
   },
   {
      kanji: "平気な",
      hiragana: "へいきな",
      pos: "Tính từ-na",
      meaning: "bình thản, thản nhiên",
      exampleJa: "失敗しても平気な顔をしている。",
      exampleVi: "Dù thất bại nhưng vẫn giữ vẻ mặt thản nhiên."
   },
   {
      kanji: "悔しい",
      hiragana: "くやしい",
      pos: "Tính từ-i",
      meaning: "tiếc nuối, cay cú",
      exampleJa: "試合に負けて悔しい。",
      exampleVi: "Thua trận thật tiếc nuối."
   },
   {
      kanji: "うらやましい",
      hiragana: "うらやましい",
      pos: "Tính từ-i",
      meaning: "ghen tị, ganh tỵ",
      exampleJa: "友達の成功がうらやましい。",
      exampleVi: "Ghen tỵ với thành công của bạn."
   },
   {
      kanji: "かゆい",
      hiragana: "かゆい",
      pos: "Tính từ-i",
      meaning: "ngứa",
      exampleJa: "虫に刺されて腕がかゆい。",
      exampleVi: "Bị muỗi đốt nên cánh tay bị ngứa."
   },
   {
      kanji: "おとなしい",
      hiragana: "おとなしい",
      pos: "Tính từ-i",
      meaning: "trầm lặng, hiền lành",
      exampleJa: "彼女はおとなしい性格だ。",
      exampleVi: "Cô ấy có tính cách hiền lành, trầm lặng."
   },
   {
      kanji: "我慢強い",
      hiragana: "がまんづよい",
      pos: "Tính từ-i",
      meaning: "chịu đựng giỏi, kiên nhẫn",
      exampleJa: "彼は我慢強い人だ。",
      exampleVi: "Anh ấy là người rất kiên nhẫn."
   },
   {
      kanji: "正直な",
      hiragana: "しょうじきな",
      pos: "Tính từ-na",
      meaning: "thành thật",
      exampleJa: "正直な答えをする。",
      exampleVi: "Đưa ra câu trả lời thành thật."
   },
   {
      kanji: "けちな",
      hiragana: "けちな",
      pos: "Tính từ-na",
      meaning: "keo kiệt",
      exampleJa: "彼はお金にけちだ。",
      exampleVi: "Anh ta keo kiệt về tiền bạc."
   },
   {
      kanji: "わがままな",
      hiragana: "わがままな",
      pos: "Tính từ-na",
      meaning: "ích kỷ, bướng bỉnh",
      exampleJa: "子供のわがままを許す。",
      exampleVi: "Chiều theo tính ích kỷ của trẻ con."
   },
   {
      kanji: "積極的な",
      hiragana: "せっきょくてきな",
      pos: "Tính từ-na",
      meaning: "tích cực, chủ động",
      exampleJa: "積極的に意見を言う。",
      exampleVi: "Chủ động đưa ra ý kiến."
   },
   {
      kanji: "消極的な",
      hiragana: "しょうきょくてきな",
      pos: "Tính từ-na",
      meaning: "tiêu cực, thụ động",
      exampleJa: "彼は消極的な性格だ。",
      exampleVi: "Anh ta có tính cách thụ động."
   },
   {
      kanji: "満足な",
      hiragana: "まんぞくな",
      pos: "Tính từ-na",
      meaning: "hài lòng, thỏa mãn",
      exampleJa: "結果に満足している。",
      exampleVi: "Hài lòng với kết quả."
   },
   {
      kanji: "不満な",
      hiragana: "ふまんな",
      pos: "Tính từ-na",
      meaning: "bất mãn, không hài lòng",
      exampleJa: "給料に不満がある。",
      exampleVi: "Có sự bất mãn về lương."
   },
   {
      kanji: "不安な",
      hiragana: "ふあんな",
      pos: "Tính từ-na",
      meaning: "bất an, lo lắng",
      exampleJa: "将来が不安だ。",
      exampleVi: "Lo lắng về tương lai."
   },
   {
      kanji: "大変な",
      hiragana: "たいへんな",
      pos: "Tính từ-na",
      meaning: "vất vả, khủng khiếp",
      exampleJa: "大変な仕事を引き受ける。",
      exampleVi: "Nhận một công việc vất vả."
   },
   {
      kanji: "無理な",
      hiragana: "むりな",
      pos: "Tính từ-na",
      meaning: "vô lý, quá sức",
      exampleJa: "そんな無理なお願いはできない。",
      exampleVi: "Không thể chấp nhận lời yêu cầu vô lý như thế."
   },
   {
      kanji: "不注意な",
      hiragana: "ふちゅういな",
      pos: "Tính từ-na",
      meaning: "cẩu thả, bất cẩn",
      exampleJa: "不注意な運転は危険だ。",
      exampleVi: "Lái xe bất cẩn rất nguy hiểm."
   },
   {
      kanji: "楽な",
      hiragana: "らくな",
      pos: "Tính từ-na",
      meaning: "thoải mái, dễ dàng",
      exampleJa: "楽な姿勢で座る。",
      exampleVi: "Ngồi trong tư thế thoải mái."
   },
   {
      kanji: "面倒な",
      hiragana: "めんどうな",
      pos: "Tính từ-na",
      meaning: "phiền phức",
      exampleJa: "面倒な手続きが多い。",
      exampleVi: "Có nhiều thủ tục phiền phức."
   },
   {
      kanji: "失礼な",
      hiragana: "しつれいな",
      pos: "Tính từ-na",
      meaning: "thất lễ, vô lễ",
      exampleJa: "人の話を聞かないのは失礼だ。",
      exampleVi: "Không nghe người khác nói là thất lễ."
   },
   {
      kanji: "当然な",
      hiragana: "とうぜんな",
      pos: "Tính từ-na",
      meaning: "đương nhiên",
      exampleJa: "努力すれば成功するのは当然だ。",
      exampleVi: "Nỗ lực thì thành công là điều đương nhiên."
   },
   {
      kanji: "意外な",
      hiragana: "いがいな",
      pos: "Tính từ-na",
      meaning: "ngoài dự kiến, bất ngờ",
      exampleJa: "意外な結果になった。",
      exampleVi: "Kết quả trở nên ngoài dự kiến."
   },
   {
      kanji: "結構な",
      hiragana: "けっこうな",
      pos: "Tính từ-na",
      meaning: "tốt, đủ rồi",
      exampleJa: "結構なお品をいただきました。",
      exampleVi: "Tôi đã nhận được món quà quý giá."
   },
   {
      kanji: "派手な",
      hiragana: "はでな",
      pos: "Tính từ-na",
      meaning: "lòe loẹt, sặc sỡ",
      exampleJa: "派手な服を着る。",
      exampleVi: "Mặc quần áo lòe loẹt."
   },
   {
      kanji: "地味な",
      hiragana: "じみな",
      pos: "Tính từ-na",
      meaning: "giản dị, mộc mạc",
      exampleJa: "地味な色のスーツを選ぶ。",
      exampleVi: "Chọn bộ vest màu giản dị."
   },
   {
      kanji: "おしゃれな",
      hiragana: "おしゃれな",
      pos: "Tính từ-na",
      meaning: "sành điệu, hợp thời trang",
      exampleJa: "彼女はとてもおしゃれだ。",
      exampleVi: "Cô ấy rất sành điệu."
   },
   {
      kanji: "変な",
      hiragana: "へんな",
      pos: "Tính từ-na",
      meaning: "lạ, kỳ lạ",
      exampleJa: "変な音が聞こえる。",
      exampleVi: "Nghe thấy tiếng động lạ."
   },
   {
      kanji: "不思議な",
      hiragana: "ふしぎな",
      pos: "Tính từ-na",
      meaning: "kỳ lạ, khó hiểu",
      exampleJa: "不思議な出来事があった。",
      exampleVi: "Đã có một sự việc kỳ lạ xảy ra."
   },
   {
      kanji: "ましな",
      hiragana: "ましな",
      pos: "Tính từ-na",
      meaning: "tốt hơn, khá hơn",
      exampleJa: "失敗しても挑戦しないよりましだ。",
      exampleVi: "Dù thất bại nhưng vẫn còn khá hơn là không thử."
   },
   {
      kanji: "むだな",
      hiragana: "むだな",
      pos: "Tính từ-na",
      meaning: "vô ích, lãng phí",
      exampleJa: "むだな努力をしない。",
      exampleVi: "Không nỗ lực vô ích."
   },
   {
      kanji: "自由な",
      hiragana: "じゆうな",
      pos: "Tính từ-na",
      meaning: "tự do",
      exampleJa: "自由な時間を楽しむ。",
      exampleVi: "Tận hưởng thời gian tự do."
   },
   {
      kanji: "不自由な",
      hiragana: "ふじゆうな",
      pos: "Tính từ-na",
      meaning: "không tự do, bất tiện",
      exampleJa: "足をけがして不自由な生活をしている。",
      exampleVi: "Bị thương chân nên đang sống cuộc sống bất tiện."
   },
   {
      kanji: "暖まる",
      hiragana: "あたたまる",
      pos: "動詞",
      meaning: "ấm lên (tự động từ)",
      exampleJa: "体が暖まる。",
      exampleVi: "Cơ thể ấm lên."
   },
   {
      kanji: "暖める",
      hiragana: "あたためる",
      pos: "動詞",
      meaning: "làm ấm (tha động từ)",
      exampleJa: "スープを暖める。",
      exampleVi: "Làm ấm súp."
   },
   {
      kanji: "温まる",
      hiragana: "あたたまる",
      pos: "動詞",
      meaning: "ấm lên (nước, không khí)",
      exampleJa: "温泉に入って体が温まる。",
      exampleVi: "Tắm suối nước nóng cơ thể ấm lên."
   },
   {
      kanji: "温める",
      hiragana: "あたためる",
      pos: "動詞",
      meaning: "làm nóng, hâm nóng",
      exampleJa: "ご飯を電子レンジで温める。",
      exampleVi: "Hâm cơm bằng lò vi sóng."
   },
   {
      kanji: "高まる",
      hiragana: "たかまる",
      pos: "動詞",
      meaning: "tăng cao (tự động từ)",
      exampleJa: "関心が高まる。",
      exampleVi: "Mối quan tâm tăng cao."
   },
   {
      kanji: "高める",
      hiragana: "たかめる",
      pos: "動詞",
      meaning: "nâng cao (tha động từ)",
      exampleJa: "技術を高める。",
      exampleVi: "Nâng cao kỹ thuật."
   },
   {
      kanji: "強まる",
      hiragana: "つよまる",
      pos: "動詞",
      meaning: "mạnh lên (tự động từ)",
      exampleJa: "雨が強まる。",
      exampleVi: "Mưa mạnh hơn."
   },
   {
      kanji: "強める",
      hiragana: "つよめる",
      pos: "動詞",
      meaning: "làm mạnh thêm (tha động từ)",
      exampleJa: "声を強める。",
      exampleVi: "Nói to giọng hơn."
   },
   {
      kanji: "弱まる",
      hiragana: "よわまる",
      pos: "動詞",
      meaning: "yếu đi, suy giảm (tự động từ)",
      exampleJa: "台風の勢力が弱まった。",
      exampleVi: "Sức mạnh của cơn bão đã suy yếu."
   },
   {
      kanji: "弱める",
      hiragana: "よわめる",
      pos: "動詞",
      meaning: "làm yếu đi, làm giảm (tha động từ)",
      exampleJa: "火を弱める。",
      exampleVi: "Hạ nhỏ lửa."
   },
   {
      kanji: "広まる",
      hiragana: "ひろまる",
      pos: "動詞",
      meaning: "lan rộng, phổ biến (tự động từ)",
      exampleJa: "そのうわさが広まった。",
      exampleVi: "Tin đồn đó lan rộng."
   },
   {
      kanji: "広める",
      hiragana: "ひろめる",
      pos: "動詞",
      meaning: "lan truyền, quảng bá (tha động từ)",
      exampleJa: "習慣を広める。",
      exampleVi: "Quảng bá thói quen."
   },
   {
      kanji: "深まる",
      hiragana: "ふかまる",
      pos: "動詞",
      meaning: "sâu thêm, tăng lên (tự động từ)",
      exampleJa: "秋が深まる。",
      exampleVi: "Mùa thu trở nên sâu hơn (đậm hơn)."
   },
   {
      kanji: "深める",
      hiragana: "ふかめる",
      pos: "動詞",
      meaning: "làm sâu thêm, làm đậm thêm (tha động từ)",
      exampleJa: "理解を深める。",
      exampleVi: "Làm sâu thêm sự hiểu biết."
   }
];
