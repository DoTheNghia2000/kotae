const vocabData = [
   {
      kanji: "男性",
      hiragana: "だんせい",
      pos: "Danh từ",
      meaning: "nam giới",
      exampleJa: "男性トイレはどこですか。",
      exampleVi: "Nhà vệ sinh nam ở đâu?"
   },
   {
      kanji: "女性",
      hiragana: "じょせい",
      pos: "Danh từ",
      meaning: "nữ giới, phụ nữ",
      exampleJa: "この会社は女性社員が多いです。",
      exampleVi: "Công ty này có nhiều nhân viên nữ."
   },
   {
      kanji: "男女",
      hiragana: "だんじょ",
      pos: "Danh từ",
      meaning: "nam và nữ",
      exampleJa: "このクラスは男女が半分ずついます。",
      exampleVi: "Trong lớp này nam nữ chia đều một nửa."
   },
   {
      kanji: "高齢",
      hiragana: "こうれい",
      pos: "Danh từ",
      meaning: "cao tuổi",
      exampleJa: "高齢の方に席を譲りました。",
      exampleVi: "Tôi nhường ghế cho người cao tuổi."
   },
   {
      kanji: "高齢者",
      hiragana: "こうれいしゃ",
      pos: "Danh từ",
      meaning: "người cao tuổi",
      exampleJa: "日本は高齢者が増えています。",
      exampleVi: "Ở Nhật Bản, số người cao tuổi đang tăng."
   },
   {
      kanji: "高齢化社会",
      hiragana: "こうれいかしゃかい",
      pos: "Danh từ",
      meaning: "xã hội già hóa",
      exampleJa: "日本は高齢化社会になっています。",
      exampleVi: "Nhật Bản đang trở thành xã hội già hóa."
   },
   {
      kanji: "年上",
      hiragana: "としうえ",
      pos: "Danh từ",
      meaning: "người lớn tuổi hơn",
      exampleJa: "彼は私より三つ年上です。",
      exampleVi: "Anh ấy lớn hơn tôi ba tuổi."
   },
   {
      kanji: "年下",
      hiragana: "としした",
      pos: "Danh từ",
      meaning: "người ít tuổi hơn",
      exampleJa: "私は彼女より二歳年下です。",
      exampleVi: "Tôi ít tuổi hơn cô ấy hai tuổi."
   },
   {
      kanji: "年長",
      hiragana: "ねんちょう",
      pos: "Danh từ",
      meaning: "lớn tuổi, cao niên",
      exampleJa: "年長の人の話をよく聞きましょう。",
      exampleVi: "Hãy lắng nghe lời của người lớn tuổi."
   },
   {
      kanji: "目上",
      hiragana: "めうえ",
      pos: "Danh từ",
      meaning: "người bề trên",
      exampleJa: "目上の人に失礼なことを言ってはいけません。",
      exampleVi: "Không được nói lời thất lễ với người bề trên."
   },
   {
      kanji: "目下",
      hiragana: "めした",
      pos: "Danh từ",
      meaning: "người bề dưới",
      exampleJa: "彼は目下の人にも優しいです。",
      exampleVi: "Anh ấy đối xử tốt ngay cả với người cấp dưới."
   },
   {
      kanji: "先輩",
      hiragana: "せんぱい",
      pos: "Danh từ",
      meaning: "đàn anh, tiền bối",
      exampleJa: "先輩に日本語を教えてもらいました。",
      exampleVi: "Tôi được đàn anh dạy tiếng Nhật."
   },
   {
      kanji: "後輩",
      hiragana: "こうはい",
      pos: "Danh từ",
      meaning: "đàn em, hậu bối",
      exampleJa: "私は会社で後輩がたくさんいます。",
      exampleVi: "Tôi có nhiều đàn em trong công ty."
   },
   {
      kanji: "上司",
      hiragana: "じょうし",
      pos: "Danh từ",
      meaning: "cấp trên",
      exampleJa: "上司に相談しました。",
      exampleVi: "Tôi đã trao đổi với cấp trên."
   },
   {
      kanji: "部下",
      hiragana: "ぶか",
      pos: "Danh từ",
      meaning: "cấp dưới",
      exampleJa: "部下を大切にする上司です。",
      exampleVi: "Đây là một cấp trên biết quan tâm đến cấp dưới."
   },
   {
      kanji: "同僚",
      hiragana: "どうりょう",
      pos: "Danh từ",
      meaning: "đồng nghiệp",
      exampleJa: "同僚と飲みに行きます。",
      exampleVi: "Tôi đi uống cùng đồng nghiệp."
   },
   {
      kanji: "相手",
      hiragana: "あいて",
      pos: "Danh từ",
      meaning: "đối phương, đối tác",
      exampleJa: "相手の気持ちを考えてください。",
      exampleVi: "Hãy nghĩ đến cảm xúc của đối phương."
   },
   {
      kanji: "話相手",
      hiragana: "はなしあいて",
      pos: "Danh từ",
      meaning: "người để trò chuyện",
      exampleJa: "話相手がいなくて寂しいです。",
      exampleVi: "Không có ai để nói chuyện nên tôi thấy cô đơn."
   },
   {
      kanji: "結婚相手",
      hiragana: "けっこんあいて",
      pos: "Danh từ",
      meaning: "đối tượng kết hôn",
      exampleJa: "結婚相手を探しています。",
      exampleVi: "Tôi đang tìm người kết hôn."
   },
   {
      kanji: "相談相手",
      hiragana: "そうだんあいて",
      pos: "Danh từ",
      meaning: "người để trao đổi, bàn bạc",
      exampleJa: "相談相手がいて助かります。",
      exampleVi: "Thật may là có người để bàn bạc."
   },
   {
      kanji: "知り合い",
      hiragana: "しりあい",
      pos: "Danh từ",
      meaning: "người quen",
      exampleJa: "駅で知り合いに会いました。",
      exampleVi: "Tôi đã gặp người quen ở nhà ga."
   },
   {
      kanji: "知人",
      hiragana: "ちじん",
      pos: "Danh từ",
      meaning: "người quen, người biết",
      exampleJa: "彼は学生時代の知人です。",
      exampleVi: "Anh ấy là người quen thời sinh viên."
   },
   {
      kanji: "友達",
      hiragana: "ともだち",
      pos: "Danh từ",
      meaning: "bạn bè",
      exampleJa: "友達と映画を見ました。",
      exampleVi: "Tôi đã đi xem phim với bạn."
   },
   {
      kanji: "友人",
      hiragana: "ゆうじん",
      pos: "Danh từ",
      meaning: "bạn bè (trang trọng)",
      exampleJa: "高校の友人に会いました。",
      exampleVi: "Tôi đã gặp lại bạn thời cấp 3."
   },
   {
      kanji: "親友",
      hiragana: "しんゆう",
      pos: "Danh từ",
      meaning: "bạn thân",
      exampleJa: "彼は私の親友です。",
      exampleVi: "Anh ấy là bạn thân của tôi."
   },
   {
      kanji: "仲",
      hiragana: "なか",
      pos: "Danh từ",
      meaning: "mối quan hệ",
      exampleJa: "二人の仲がいいです。",
      exampleVi: "Quan hệ của hai người rất tốt."
   },
   {
      kanji: "仲がいい",
      hiragana: "なかがいい",
      pos: "Cụm từ",
      meaning: "quan hệ tốt, thân thiết",
      exampleJa: "私は兄と仲がいいです。",
      exampleVi: "Tôi thân thiết với anh trai."
   },
   {
      kanji: "仲が悪い",
      hiragana: "なかがわるい",
      pos: "Cụm từ",
      meaning: "quan hệ xấu",
      exampleJa: "彼は弟と仲が悪いです。",
      exampleVi: "Anh ấy không hòa thuận với em trai."
   },
   {
      kanji: "仲間",
      hiragana: "なかま",
      pos: "Danh từ",
      meaning: "bạn bè, đồng đội",
      exampleJa: "仲間と旅行しました。",
      exampleVi: "Tôi đã đi du lịch cùng bạn bè."
   },
   {
      kanji: "仲良し",
      hiragana: "なかよし",
      pos: "Danh từ",
      meaning: "bạn thân thiết",
      exampleJa: "子供のころから仲良しです。",
      exampleVi: "Chúng tôi đã thân thiết từ nhỏ."
   },
   {
      kanji: "生年月日",
      hiragana: "せいねんがっぴ",
      pos: "Danh từ",
      meaning: "ngày tháng năm sinh",
      exampleJa: "生年月日を教えてください。",
      exampleVi: "Xin cho biết ngày tháng năm sinh của bạn."
   },
   {
      kanji: "誕生日",
      hiragana: "たんじょうび",
      pos: "Danh từ",
      meaning: "ngày sinh nhật",
      exampleJa: "明日は私の誕生日です。",
      exampleVi: "Ngày mai là sinh nhật của tôi."
   },
   {
      kanji: "誕生",
      hiragana: "たんじょう",
      pos: "Danh từ",
      meaning: "sự ra đời",
      exampleJa: "新しい会社の誕生を祝います。",
      exampleVi: "Chúc mừng sự ra đời của công ty mới."
   },
   {
      kanji: "年",
      hiragana: "とし / ねん",
      pos: "Danh từ",
      meaning: "năm, tuổi",
      exampleJa: "来年はいい年になりますように。",
      exampleVi: "Hy vọng năm sau sẽ là một năm tốt."
   },
   {
      kanji: "年が始まる",
      hiragana: "としがはじまる",
      pos: "Cụm từ",
      meaning: "năm mới bắt đầu",
      exampleJa: "１月から新しい年が始まります。",
      exampleVi: "Một năm mới bắt đầu từ tháng 1."
   },
   {
      kanji: "年が明ける",
      hiragana: "としがあける",
      pos: "Cụm từ",
      meaning: "năm mới sang",
      exampleJa: "年が明けて気持ちを新たにしました。",
      exampleVi: "Sang năm mới, tôi làm mới tinh thần."
   },
   {
      kanji: "年が過ぎる",
      hiragana: "としがすぎる",
      pos: "Cụm từ",
      meaning: "năm trôi qua",
      exampleJa: "年が過ぎるのは早いです。",
      exampleVi: "Một năm trôi qua thật nhanh."
   },
   {
      kanji: "年明け",
      hiragana: "としあけ",
      pos: "Danh từ",
      meaning: "đầu năm mới",
      exampleJa: "年明けに初詣に行きます。",
      exampleVi: "Đầu năm tôi đi lễ chùa đầu năm."
   },
   {
      kanji: "年を取る",
      hiragana: "としをとる",
      pos: "Động từ",
      meaning: "già đi, thêm tuổi",
      exampleJa: "年を取っても元気です。",
      exampleVi: "Dù đã già nhưng vẫn khỏe mạnh."
   },
   {
      kanji: "お年寄り",
      hiragana: "おとしより",
      pos: "Danh từ",
      meaning: "người già",
      exampleJa: "お年寄りに席を譲りましょう。",
      exampleVi: "Hãy nhường ghế cho người già."
   },
   {
      kanji: "年齢",
      hiragana: "ねんれい",
      pos: "Danh từ",
      meaning: "tuổi tác",
      exampleJa: "年齢を聞いてもいいですか。",
      exampleVi: "Tôi có thể hỏi tuổi bạn được không?"
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
      kanji: "出身地",
      hiragana: "しゅっしんち",
      pos: "Danh từ",
      meaning: "nơi sinh",
      exampleJa: "彼の出身地は大阪です。",
      exampleVi: "Quê anh ấy ở Osaka."
   },
   {
      kanji: "出身校",
      hiragana: "しゅっしんこう",
      pos: "Danh từ",
      meaning: "trường xuất thân",
      exampleJa: "出身校はどこですか。",
      exampleVi: "Bạn học trường nào ra?"
   },
   {
      kanji: "地名出身",
      hiragana: "ちめいしゅっしん",
      pos: "Danh từ",
      meaning: "xuất thân từ địa phương",
      exampleJa: "地名出身の人が集まりました。",
      exampleVi: "Những người cùng quê đã tụ họp lại."
   },
   {
      kanji: "学校名出身",
      hiragana: "がっこうめいしゅっしん",
      pos: "Danh từ",
      meaning: "xuất thân từ trường",
      exampleJa: "学校名出身の友達です。",
      exampleVi: "Bạn tôi cùng xuất thân từ trường đó."
   },
   {
      kanji: "故郷",
      hiragana: "こきょう",
      pos: "Danh từ",
      meaning: "quê hương",
      exampleJa: "夏休みに故郷へ帰ります。",
      exampleVi: "Nghỉ hè tôi sẽ về quê."
   },
   {
      kanji: "ふるさと",
      hiragana: "ふるさと",
      pos: "Danh từ",
      meaning: "quê hương",
      exampleJa: "ふるさとが懐かしいです。",
      exampleVi: "Tôi nhớ quê hương."
   },
   {
      kanji: "成長",
      hiragana: "せいちょう",
      pos: "Danh từ / Động từ する",
      meaning: "sự trưởng thành, phát triển",
      exampleJa: "子どもは早く成長します。",
      exampleVi: "Trẻ con lớn nhanh."
   },
   {
      kanji: "高度経済成長",
      hiragana: "こうどけいざいせいちょう",
      pos: "Danh từ",
      meaning: "sự phát triển kinh tế cao độ",
      exampleJa: "日本は高度経済成長の時代がありました。",
      exampleVi: "Nhật Bản đã có thời kỳ tăng trưởng kinh tế cao độ."
   },
   {
      kanji: "成長率",
      hiragana: "せいちょうりつ",
      pos: "Danh từ",
      meaning: "tỷ lệ tăng trưởng",
      exampleJa: "今年の経済成長率は５％です。",
      exampleVi: "Tỷ lệ tăng trưởng kinh tế năm nay là 5%."
   },
   {
      kanji: "合格",
      hiragana: "ごうかく",
      pos: "Danh từ / Động từ する",
      meaning: "đỗ, trúng tuyển",
      exampleJa: "試験に合格しました。",
      exampleVi: "Tôi đã đỗ kỳ thi."
   },
   {
      kanji: "合格者",
      hiragana: "ごうかくしゃ",
      pos: "Danh từ",
      meaning: "người trúng tuyển",
      exampleJa: "合格者の名前が発表されました。",
      exampleVi: "Tên của những người trúng tuyển đã được công bố."
   },
   {
      kanji: "合格率",
      hiragana: "ごうかくりつ",
      pos: "Danh từ",
      meaning: "tỷ lệ đỗ",
      exampleJa: "この試験の合格率は高いです。",
      exampleVi: "Tỷ lệ đỗ của kỳ thi này cao."
   },
   {
      kanji: "不合格",
      hiragana: "ふごうかく",
      pos: "Danh từ / Động từ する",
      meaning: "trượt, rớt (thi)",
      exampleJa: "試験に不合格でした。",
      exampleVi: "Tôi đã trượt kỳ thi."
   },
   {
      kanji: "成人",
      hiragana: "せいじん",
      pos: "Danh từ",
      meaning: "người trưởng thành",
      exampleJa: "日本では２０歳で成人になります。",
      exampleVi: "Ở Nhật, 20 tuổi là trở thành người trưởng thành."
   },
   {
      kanji: "成人式",
      hiragana: "せいじんしき",
      pos: "Danh từ",
      meaning: "lễ trưởng thành",
      exampleJa: "成人式に着物を着ます。",
      exampleVi: "Trong lễ trưởng thành người ta mặc kimono."
   },
   {
      kanji: "未成年",
      hiragana: "みせいねん",
      pos: "Danh từ",
      meaning: "vị thành niên, chưa trưởng thành",
      exampleJa: "未成年はお酒を飲んではいけません。",
      exampleVi: "Người chưa trưởng thành thì không được uống rượu."
   },
   {
      kanji: "進学",
      hiragana: "しんがく",
      pos: "Danh từ / Động từ する",
      meaning: "học lên (cấp cao hơn)",
      exampleJa: "高校から大学に進学します。",
      exampleVi: "Tôi học lên đại học từ cấp ba."
   },
   {
      kanji: "進学率",
      hiragana: "しんがくりつ",
      pos: "Danh từ",
      meaning: "tỷ lệ học lên",
      exampleJa: "この学校の進学率は高いです。",
      exampleVi: "Tỷ lệ học lên của trường này cao."
   },
   {
      kanji: "退学",
      hiragana: "たいがく",
      pos: "Danh từ / Động từ する",
      meaning: "bỏ học, thôi học",
      exampleJa: "彼は病気で大学を退学しました。",
      exampleVi: "Anh ấy bỏ học đại học vì bệnh."
   },
   {
      kanji: "退学届",
      hiragana: "たいがくとどけ",
      pos: "Danh từ",
      meaning: "đơn xin thôi học",
      exampleJa: "退学届を先生に出しました。",
      exampleVi: "Tôi đã nộp đơn xin thôi học cho thầy."
   },
   {
      kanji: "処分",
      hiragana: "しょぶん",
      pos: "Danh từ / Động từ する",
      meaning: "xử lý, xử phạt",
      exampleJa: "ルールを破ると処分されます。",
      exampleVi: "Nếu vi phạm quy định sẽ bị xử phạt."
   },
   {
      kanji: "中退",
      hiragana: "ちゅうたい",
      pos: "Danh từ / Động từ する",
      meaning: "bỏ học giữa chừng",
      exampleJa: "大学を中退しました。",
      exampleVi: "Tôi đã bỏ học giữa chừng đại học."
   },
   {
      kanji: "就職",
      hiragana: "しゅうしょく",
      pos: "Danh từ / Động từ する",
      meaning: "tìm việc, đi làm",
      exampleJa: "来年、会社に就職します。",
      exampleVi: "Năm sau tôi sẽ đi làm ở công ty."
   },
   {
      kanji: "就職活動",
      hiragana: "しゅうしょくかつどう",
      pos: "Danh từ",
      meaning: "hoạt động tìm việc",
      exampleJa: "大学生は就職活動をしています。",
      exampleVi: "Sinh viên đại học đang tìm việc làm."
   },
   {
      kanji: "就職試験",
      hiragana: "しゅうしょくしけん",
      pos: "Danh từ",
      meaning: "kỳ thi xin việc",
      exampleJa: "就職試験を受けます。",
      exampleVi: "Tôi sẽ tham gia kỳ thi xin việc."
   },
   {
      kanji: "就職難",
      hiragana: "しゅうしょくなん",
      pos: "Danh từ",
      meaning: "khó khăn trong tìm việc",
      exampleJa: "今は就職難の時代です。",
      exampleVi: "Bây giờ là thời kỳ khó tìm việc."
   },
   {
      kanji: "退職",
      hiragana: "たいしょく",
      pos: "Danh từ / Động từ する",
      meaning: "nghỉ việc, nghỉ hưu",
      exampleJa: "父は会社を退職しました。",
      exampleVi: "Bố tôi đã nghỉ việc ở công ty."
   },
   {
      kanji: "履歴書",
      hiragana: "りれきしょ",
      pos: "Danh từ",
      meaning: "sơ yếu lý lịch",
      exampleJa: "履歴書を会社に送ります。",
      exampleVi: "Tôi gửi sơ yếu lý lịch cho công ty."
   },
   {
      kanji: "定年退職",
      hiragana: "ていねんたいしょく",
      pos: "Danh từ / Động từ する",
      meaning: "nghỉ hưu (đúng tuổi quy định)",
      exampleJa: "父は６０歳で定年退職しました。",
      exampleVi: "Bố tôi nghỉ hưu ở tuổi 60."
   },
   {
      kanji: "退職金",
      hiragana: "たいしょくきん",
      pos: "Danh từ",
      meaning: "tiền trợ cấp nghỉ hưu",
      exampleJa: "退職金をもらいました。",
      exampleVi: "Tôi đã nhận tiền trợ cấp nghỉ hưu."
   },
   {
      kanji: "辞職",
      hiragana: "じしょく",
      pos: "Danh từ / Động từ する",
      meaning: "từ chức",
      exampleJa: "社長が辞職しました。",
      exampleVi: "Giám đốc đã từ chức."
   },
   {
      kanji: "失業",
      hiragana: "しつぎょう",
      pos: "Danh từ / Động từ する",
      meaning: "thất nghiệp",
      exampleJa: "失業して生活が大変です。",
      exampleVi: "Bị thất nghiệp nên cuộc sống khó khăn."
   },
   {
      kanji: "失業率",
      hiragana: "しつぎょうりつ",
      pos: "Danh từ",
      meaning: "tỷ lệ thất nghiệp",
      exampleJa: "失業率が下がりました。",
      exampleVi: "Tỷ lệ thất nghiệp đã giảm."
   },
   {
      kanji: "失業者",
      hiragana: "しつぎょうしゃ",
      pos: "Danh từ",
      meaning: "người thất nghiệp",
      exampleJa: "失業者が増えています。",
      exampleVi: "Số người thất nghiệp đang tăng."
   },
   {
      kanji: "失業保険",
      hiragana: "しつぎょうほけん",
      pos: "Danh từ",
      meaning: "bảo hiểm thất nghiệp",
      exampleJa: "失業保険をもらいます。",
      exampleVi: "Tôi nhận bảo hiểm thất nghiệp."
   },
   {
      kanji: "首",
      hiragana: "くび",
      pos: "Danh từ",
      meaning: "cổ; sa thải",
      exampleJa: "会社を首になりました。",
      exampleVi: "Tôi bị công ty sa thải."
   },
   {
      kanji: "リストラ",
      hiragana: "りすとら",
      pos: "Danh từ / Động từ する",
      meaning: "tái cơ cấu, sa thải",
      exampleJa: "リストラで仕事を失いました。",
      exampleVi: "Tôi mất việc do bị tái cơ cấu."
   },
   {
      kanji: "残業",
      hiragana: "ざんぎょう",
      pos: "Danh từ / Động từ する",
      meaning: "làm thêm giờ",
      exampleJa: "毎日残業があります。",
      exampleVi: "Ngày nào tôi cũng có làm thêm giờ."
   },
   {
      kanji: "残業代",
      hiragana: "ざんぎょうだい",
      pos: "Danh từ",
      meaning: "tiền làm thêm",
      exampleJa: "残業代をもらいました。",
      exampleVi: "Tôi đã nhận tiền làm thêm."
   },
   {
      kanji: "残業時間",
      hiragana: "ざんぎょうじかん",
      pos: "Danh từ",
      meaning: "thời gian làm thêm",
      exampleJa: "今月の残業時間は多いです。",
      exampleVi: "Tháng này có nhiều giờ làm thêm."
   },
   {
      kanji: "生活",
      hiragana: "せいかつ",
      pos: "Danh từ / Động từ する",
      meaning: "cuộc sống, sinh hoạt",
      exampleJa: "日本で生活しています。",
      exampleVi: "Tôi đang sống ở Nhật."
   },
   {
      kanji: "生活が苦しい",
      hiragana: "せいかつがくるしい",
      pos: "Cụm từ",
      meaning: "cuộc sống khó khăn",
      exampleJa: "生活が苦しいので、アルバイトをしています。",
      exampleVi: "Vì cuộc sống khó khăn nên tôi đi làm thêm."
   },
   {
      kanji: "生活が楽だ",
      hiragana: "せいかつがらくだ",
      pos: "Cụm từ",
      meaning: "cuộc sống thoải mái, dễ chịu",
      exampleJa: "給料が上がって生活が楽になりました。",
      exampleVi: "Lương tăng nên cuộc sống đã thoải mái hơn."
   },
   {
      kanji: "豊かな生活を送る",
      hiragana: "ゆたかなせいかつをおくる",
      pos: "Cụm từ",
      meaning: "sống một cuộc sống đầy đủ, phong phú",
      exampleJa: "都会で豊かな生活を送っています。",
      exampleVi: "Tôi đang sống cuộc sống đầy đủ ở thành phố."
   },
   {
      kanji: "生活費",
      hiragana: "せいかつひ",
      pos: "Danh từ",
      meaning: "chi phí sinh hoạt",
      exampleJa: "生活費が高いです。",
      exampleVi: "Chi phí sinh hoạt cao."
   },
   {
      kanji: "学生生活",
      hiragana: "がくせいせいかつ",
      pos: "Danh từ",
      meaning: "đời sống sinh viên",
      exampleJa: "学生生活を楽しんでいます。",
      exampleVi: "Tôi đang tận hưởng đời sống sinh viên."
   },
   {
      kanji: "社会生活",
      hiragana: "しゃかいせいかつ",
      pos: "Danh từ",
      meaning: "đời sống xã hội",
      exampleJa: "社会生活に慣れるのは大変です。",
      exampleVi: "Làm quen với đời sống xã hội thì vất vả."
   },
   {
      kanji: "結婚生活",
      hiragana: "けっこんせいかつ",
      pos: "Danh từ",
      meaning: "cuộc sống hôn nhân",
      exampleJa: "結婚生活は楽しいです。",
      exampleVi: "Cuộc sống hôn nhân vui vẻ."
   },
   {
      kanji: "年金生活",
      hiragana: "ねんきんせいかつ",
      pos: "Danh từ",
      meaning: "cuộc sống bằng lương hưu",
      exampleJa: "祖父母は年金生活をしています。",
      exampleVi: "Ông bà tôi sống bằng lương hưu."
   },
   {
      kanji: "暮らし",
      hiragana: "くらし",
      pos: "Danh từ",
      meaning: "cuộc sống, sinh hoạt",
      exampleJa: "都会の暮らしに慣れました。",
      exampleVi: "Tôi đã quen với cuộc sống ở thành phố."
   },
   {
      kanji: "通勤",
      hiragana: "つうきん",
      pos: "Danh từ / Động từ する",
      meaning: "đi làm",
      exampleJa: "毎日電車で通勤します。",
      exampleVi: "Hàng ngày tôi đi làm bằng tàu điện."
   },
   {
      kanji: "通勤時間",
      hiragana: "つうきんじかん",
      pos: "Danh từ",
      meaning: "thời gian đi làm",
      exampleJa: "通勤時間は１時間です。",
      exampleVi: "Thời gian đi làm là 1 tiếng."
   },
   {
      kanji: "通学",
      hiragana: "つうがく",
      pos: "Danh từ / Động từ する",
      meaning: "đi học",
      exampleJa: "自転車で通学しています。",
      exampleVi: "Tôi đi học bằng xe đạp."
   },
   {
      kanji: "通院",
      hiragana: "つういん",
      pos: "Danh từ / Động từ する",
      meaning: "đi khám bệnh (theo định kỳ)",
      exampleJa: "週に一度病院に通院します。",
      exampleVi: "Tôi đi khám ở bệnh viện mỗi tuần một lần."
   },
   {
      kanji: "学歴",
      hiragana: "がくれき",
      pos: "Danh từ",
      meaning: "quá trình học vấn",
      exampleJa: "学歴が高いです。",
      exampleVi: "Trình độ học vấn cao."
   },
   {
      kanji: "学歴が高い",
      hiragana: "がくれきがたかい",
      pos: "Cụm từ",
      meaning: "học vấn cao",
      exampleJa: "彼は学歴が高いです。",
      exampleVi: "Anh ấy có học vấn cao."
   },
   {
      kanji: "学歴が低い",
      hiragana: "がくれきがひくい",
      pos: "Cụm từ",
      meaning: "học vấn thấp",
      exampleJa: "学歴が低くても成功できます。",
      exampleVi: "Dù học vấn thấp vẫn có thể thành công."
   },
   {
      kanji: "学歴をつける",
      hiragana: "がくれきをつける",
      pos: "Cụm từ",
      meaning: "có được học vấn",
      exampleJa: "大学に入って学歴をつけます。",
      exampleVi: "Vào đại học để có học vấn."
   },
   {
      kanji: "高学歴",
      hiragana: "こうがくれき",
      pos: "Danh từ",
      meaning: "học vấn cao",
      exampleJa: "彼は高学歴の人です。",
      exampleVi: "Anh ấy là người có học vấn cao."
   },
   {
      kanji: "学歴社会",
      hiragana: "がくれきしゃかい",
      pos: "Danh từ",
      meaning: "xã hội coi trọng học vấn",
      exampleJa: "日本は学歴社会です。",
      exampleVi: "Nhật Bản là xã hội coi trọng học vấn."
   },
   {
      kanji: "給料",
      hiragana: "きゅうりょう",
      pos: "Danh từ",
      meaning: "lương",
      exampleJa: "給料をもらいました。",
      exampleVi: "Tôi đã nhận lương."
   },
   {
      kanji: "給料日",
      hiragana: "きゅうりょうび",
      pos: "Danh từ",
      meaning: "ngày lĩnh lương",
      exampleJa: "今日は給料日です。",
      exampleVi: "Hôm nay là ngày lĩnh lương."
   },
   {
      kanji: "時給",
      hiragana: "じきゅう",
      pos: "Danh từ",
      meaning: "lương theo giờ",
      exampleJa: "時給１０００円です。",
      exampleVi: "Lương theo giờ là 1000 yên."
   },
   {
      kanji: "月給",
      hiragana: "げっきゅう",
      pos: "Danh từ",
      meaning: "lương tháng",
      exampleJa: "月給は２０万円です。",
      exampleVi: "Lương tháng là 200,000 yên."
   },
   {
      kanji: "面接",
      hiragana: "めんせつ",
      pos: "Danh từ / Động từ する",
      meaning: "phỏng vấn",
      exampleJa: "会社で面接を受けます。",
      exampleVi: "Tôi tham gia phỏng vấn ở công ty."
   },
   {
      kanji: "面接試験",
      hiragana: "めんせつしけん",
      pos: "Danh từ",
      meaning: "kỳ thi phỏng vấn",
      exampleJa: "明日面接試験があります。",
      exampleVi: "Ngày mai có kỳ thi phỏng vấn."
   },
   {
      kanji: "面接官",
      hiragana: "めんせつかん",
      pos: "Danh từ",
      meaning: "người phỏng vấn",
      exampleJa: "面接官に質問されました。",
      exampleVi: "Tôi bị người phỏng vấn hỏi."
   },
   {
      kanji: "休憩",
      hiragana: "きゅうけい",
      pos: "Danh từ / Động từ する",
      meaning: "nghỉ giải lao",
      exampleJa: "１０分休憩しましょう。",
      exampleVi: "Chúng ta nghỉ 10 phút."
   },
   {
      kanji: "休憩をとる",
      hiragana: "きゅうけいをとる",
      pos: "Cụm từ",
      meaning: "nghỉ giải lao",
      exampleJa: "少し休憩をとります。",
      exampleVi: "Tôi nghỉ giải lao một chút."
   },
   {
      kanji: "休憩時間",
      hiragana: "きゅうけいじかん",
      pos: "Danh từ",
      meaning: "thời gian nghỉ",
      exampleJa: "昼休みは休憩時間です。",
      exampleVi: "Buổi trưa là thời gian nghỉ ngơi."
   },
   {
      kanji: "休憩室",
      hiragana: "きゅうけいしつ",
      pos: "Danh từ",
      meaning: "phòng nghỉ",
      exampleJa: "休憩室で休みます。",
      exampleVi: "Tôi nghỉ trong phòng nghỉ."
   },
   {
      kanji: "休憩所",
      hiragana: "きゅうけいじょ",
      pos: "Danh từ",
      meaning: "chỗ nghỉ",
      exampleJa: "山の上に休憩所があります。",
      exampleVi: "Trên núi có chỗ nghỉ."
   },
   {
      kanji: "観光",
      hiragana: "かんこう",
      pos: "Danh từ / Động từ する",
      meaning: "tham quan, du lịch",
      exampleJa: "京都を観光します。",
      exampleVi: "Tôi đi tham quan Kyoto."
   },
   {
      kanji: "観光客",
      hiragana: "かんこうきゃく",
      pos: "Danh từ",
      meaning: "khách du lịch",
      exampleJa: "観光客が多いです。",
      exampleVi: "Có nhiều khách du lịch."
   },
   {
      kanji: "観光旅行",
      hiragana: "かんこうりょこう",
      pos: "Danh từ",
      meaning: "chuyến du lịch tham quan",
      exampleJa: "観光旅行に行きます。",
      exampleVi: "Tôi đi du lịch tham quan."
   },
   {
      kanji: "観光地",
      hiragana: "かんこうち",
      pos: "Danh từ",
      meaning: "địa điểm du lịch",
      exampleJa: "有名な観光地を訪れます。",
      exampleVi: "Tôi ghé thăm địa điểm du lịch nổi tiếng."
   },
   {
      kanji: "観光バス",
      hiragana: "かんこうバス",
      pos: "Danh từ",
      meaning: "xe buýt du lịch",
      exampleJa: "観光バスで町を回ります。",
      exampleVi: "Tôi đi quanh thành phố bằng xe buýt du lịch."
   },
   {
      kanji: "京都観光",
      hiragana: "きょうとかんこう",
      pos: "Danh từ",
      meaning: "tham quan Kyoto",
      exampleJa: "京都観光を楽しみました。",
      exampleVi: "Tôi đã tận hưởng chuyến tham quan Kyoto."
   },
   {
      kanji: "帰国",
      hiragana: "きこく",
      pos: "Danh từ / Động từ する",
      meaning: "về nước",
      exampleJa: "夏に帰国します。",
      exampleVi: "Mùa hè tôi về nước."
   },
   {
      kanji: "帰省",
      hiragana: "きせい",
      pos: "Danh từ / Động từ する",
      meaning: "về quê",
      exampleJa: "夏休みに帰省します。",
      exampleVi: "Kỳ nghỉ hè tôi về quê."
   },
   {
      kanji: "帰宅",
      hiragana: "きたく",
      pos: "Danh từ / Động từ する",
      meaning: "về nhà",
      exampleJa: "毎日８時に帰宅します。",
      exampleVi: "Hàng ngày tôi về nhà lúc 8 giờ."
   },
   {
      kanji: "帰宅時間",
      hiragana: "きたくじかん",
      pos: "Danh từ",
      meaning: "giờ về nhà",
      exampleJa: "帰宅時間は何時ですか。",
      exampleVi: "Bạn về nhà lúc mấy giờ?"
   },
   {
      kanji: "参加",
      hiragana: "さんか",
      pos: "Danh từ / Động từ する",
      meaning: "tham gia",
      exampleJa: "会議に参加します。",
      exampleVi: "Tôi tham gia cuộc họp."
   },
   {
      kanji: "参加者",
      hiragana: "さんかしゃ",
      pos: "Danh từ",
      meaning: "người tham gia",
      exampleJa: "参加者が多いです。",
      exampleVi: "Có nhiều người tham gia."
   },
   {
      kanji: "不参加",
      hiragana: "ふさんか",
      pos: "Danh từ / Động từ する",
      meaning: "không tham gia",
      exampleJa: "明日の会議は不参加です。",
      exampleVi: "Tôi không tham gia cuộc họp ngày mai."
   },
   {
      kanji: "出席",
      hiragana: "しゅっせき",
      pos: "Danh từ / Động từ する",
      meaning: "có mặt, tham dự",
      exampleJa: "授業に出席します。",
      exampleVi: "Tôi có mặt trong giờ học."
   },
   {
      kanji: "出席者",
      hiragana: "しゅっせきしゃ",
      pos: "Danh từ",
      meaning: "người tham dự",
      exampleJa: "出席者は３０人です。",
      exampleVi: "Có 30 người tham dự."
   },
   {
      kanji: "出席届",
      hiragana: "しゅっせきとどけ",
      pos: "Danh từ",
      meaning: "đơn xin có mặt / thông báo tham dự",
      exampleJa: "出席届を先生に出しました。",
      exampleVi: "Tôi đã nộp đơn xin tham dự cho thầy."
   },
   {
      kanji: "欠席",
      hiragana: "けっせき",
      pos: "Danh từ / Động từ する",
      meaning: "vắng mặt",
      exampleJa: "今日は授業を欠席します。",
      exampleVi: "Hôm nay tôi vắng mặt buổi học."
   },
   {
      kanji: "欠席者",
      hiragana: "けっせきしゃ",
      pos: "Danh từ",
      meaning: "người vắng mặt",
      exampleJa: "欠席者の名前を確認します。",
      exampleVi: "Xác nhận tên của người vắng mặt."
   },
   {
      kanji: "欠席届",
      hiragana: "けっせきとどけ",
      pos: "Danh từ",
      meaning: "đơn xin nghỉ (vắng mặt)",
      exampleJa: "欠席届を先生に出しました。",
      exampleVi: "Tôi đã nộp đơn xin nghỉ cho thầy."
   },
   {
      kanji: "遅刻",
      hiragana: "ちこく",
      pos: "Danh từ / Động từ する",
      meaning: "đi trễ",
      exampleJa: "学校に遅刻しました。",
      exampleVi: "Tôi đã đi học muộn."
   },
   {
      kanji: "化粧",
      hiragana: "けしょう",
      pos: "Danh từ / Động từ する",
      meaning: "trang điểm",
      exampleJa: "朝、化粧をします。",
      exampleVi: "Buổi sáng tôi trang điểm."
   },
   {
      kanji: "化粧を落とす",
      hiragana: "けしょうをおとす",
      pos: "Cụm từ",
      meaning: "tẩy trang",
      exampleJa: "寝る前に化粧を落とします。",
      exampleVi: "Tôi tẩy trang trước khi ngủ."
   },
   {
      kanji: "化粧が濃い",
      hiragana: "けしょうがこい",
      pos: "Cụm từ",
      meaning: "trang điểm đậm",
      exampleJa: "彼女は化粧が濃いです。",
      exampleVi: "Cô ấy trang điểm đậm."
   },
   {
      kanji: "化粧が薄い",
      hiragana: "けしょうがうすい",
      pos: "Cụm từ",
      meaning: "trang điểm nhạt",
      exampleJa: "今日は化粧が薄いです。",
      exampleVi: "Hôm nay cô ấy trang điểm nhẹ."
   },
   {
      kanji: "化粧品",
      hiragana: "けしょうひん",
      pos: "Danh từ",
      meaning: "mỹ phẩm",
      exampleJa: "化粧品を買いました。",
      exampleVi: "Tôi đã mua mỹ phẩm."
   },
   {
      kanji: "メイク",
      hiragana: "めいく",
      pos: "Danh từ / Động từ する",
      meaning: "trang điểm (katakana)",
      exampleJa: "出かける前にメイクします。",
      exampleVi: "Tôi trang điểm trước khi ra ngoài."
   },
   {
      kanji: "口紅",
      hiragana: "くちべに",
      pos: "Danh từ",
      meaning: "son môi",
      exampleJa: "口紅をつけます。",
      exampleVi: "Tôi đánh son."
   },
   {
      kanji: "計算",
      hiragana: "けいさん",
      pos: "Danh từ / Động từ する",
      meaning: "tính toán",
      exampleJa: "お金を計算します。",
      exampleVi: "Tôi tính tiền."
   },
   {
      kanji: "電卓",
      hiragana: "でんたく",
      pos: "Danh từ",
      meaning: "máy tính bỏ túi",
      exampleJa: "電卓で計算します。",
      exampleVi: "Tôi tính toán bằng máy tính bỏ túi."
   },
   {
      kanji: "電子式卓上計算機",
      hiragana: "でんししきたくじょうけいさんき",
      pos: "Danh từ",
      meaning: "máy tính điện tử để bàn",
      exampleJa: "電子式卓上計算機を使います。",
      exampleVi: "Tôi dùng máy tính điện tử để bàn."
   },
   {
      kanji: "計画",
      hiragana: "けいかく",
      pos: "Danh từ / Động từ する",
      meaning: "kế hoạch",
      exampleJa: "旅行を計画しています。",
      exampleVi: "Tôi đang lên kế hoạch du lịch."
   },
   {
      kanji: "計画を立てる",
      hiragana: "けいかくをたてる",
      pos: "Cụm từ",
      meaning: "lập kế hoạch",
      exampleJa: "来年の計画を立てます。",
      exampleVi: "Tôi lập kế hoạch cho năm sau."
   },
   {
      kanji: "プラン",
      hiragana: "ぷらん",
      pos: "Danh từ",
      meaning: "kế hoạch (plan - katakana)",
      exampleJa: "旅行のプランを考えます。",
      exampleVi: "Tôi suy nghĩ kế hoạch du lịch."
   },
   {
      kanji: "成功",
      hiragana: "せいこう",
      pos: "Danh từ / Động từ する",
      meaning: "thành công",
      exampleJa: "試験に成功しました。",
      exampleVi: "Tôi đã thi thành công."
   },
   {
      kanji: "大成功",
      hiragana: "だいせいこう",
      pos: "Danh từ",
      meaning: "đại thành công",
      exampleJa: "パーティーは大成功でした。",
      exampleVi: "Bữa tiệc đã rất thành công."
   },
   {
      kanji: "失敗",
      hiragana: "しっぱい",
      pos: "Danh từ / Động từ する",
      meaning: "thất bại",
      exampleJa: "計画は失敗しました。",
      exampleVi: "Kế hoạch đã thất bại."
   },
   {
      kanji: "大失敗",
      hiragana: "だいしっぱい",
      pos: "Danh từ",
      meaning: "thất bại lớn",
      exampleJa: "試験で大失敗しました。",
      exampleVi: "Tôi thất bại nặng trong kỳ thi."
   },
   {
      kanji: "準備",
      hiragana: "じゅんび",
      pos: "Danh từ / Động từ する",
      meaning: "chuẩn bị",
      exampleJa: "旅行の準備をします。",
      exampleVi: "Tôi chuẩn bị cho chuyến du lịch."
   },
   {
      kanji: "整理",
      hiragana: "せいり",
      pos: "Danh từ / Động từ する",
      meaning: "sắp xếp, chỉnh lý",
      exampleJa: "部屋を整理します。",
      exampleVi: "Tôi sắp xếp phòng."
   },
   {
      kanji: "用意",
      hiragana: "ようい",
      pos: "Danh từ / Động từ する",
      meaning: "chuẩn bị, sẵn sàng",
      exampleJa: "会議の資料を用意します。",
      exampleVi: "Tôi chuẩn bị tài liệu cho cuộc họp."
   },
   {
      kanji: "注文を取る",
      hiragana: "ちゅうもんをとる",
      pos: "Cụm từ",
      meaning: "nhận đặt hàng (order)",
      exampleJa: "店員が注文を取ります。",
      exampleVi: "Nhân viên nhận order."
   },
   {
      kanji: "注文をつける",
      hiragana: "ちゅうもんをつける",
      pos: "Cụm từ",
      meaning: "ra yêu cầu, đặt điều kiện",
      exampleJa: "料理に注文をつけます。",
      exampleVi: "Tôi ra yêu cầu cho món ăn."
   },
   {
      kanji: "貯金を下ろす",
      hiragana: "ちょきんをおろす",
      pos: "Cụm từ",
      meaning: "rút tiền tiết kiệm",
      exampleJa: "銀行で貯金を下ろします。",
      exampleVi: "Tôi rút tiền tiết kiệm ở ngân hàng."
   },
   {
      kanji: "貯金を引き出す",
      hiragana: "ちょきんをひきだす",
      pos: "Cụm từ",
      meaning: "rút tiền tiết kiệm",
      exampleJa: "ATMで貯金を引き出します。",
      exampleVi: "Tôi rút tiền tiết kiệm ở ATM."
   },
   {
      kanji: "貯金通帳",
      hiragana: "ちょきんつうちょう",
      pos: "Danh từ",
      meaning: "sổ tiết kiệm",
      exampleJa: "貯金通帳を持っています。",
      exampleVi: "Tôi có sổ tiết kiệm."
   },
   {
      kanji: "貯金箱",
      hiragana: "ちょきんばこ",
      pos: "Danh từ",
      meaning: "ống tiết kiệm",
      exampleJa: "子どもの貯金箱です。",
      exampleVi: "Đây là ống tiết kiệm của trẻ con."
   },
   {
      kanji: "預金",
      hiragana: "よきん",
      pos: "Danh từ / Động từ する",
      meaning: "gửi tiền, tiền gửi",
      exampleJa: "銀行にお金を預金します。",
      exampleVi: "Tôi gửi tiền vào ngân hàng."
   },
   {
      kanji: "徹夜",
      hiragana: "てつや",
      pos: "Danh từ / Động từ する",
      meaning: "thức trắng đêm",
      exampleJa: "試験のために徹夜しました。",
      exampleVi: "Tôi đã thức trắng đêm vì kỳ thi."
   },
   {
      kanji: "引っ越し",
      hiragana: "ひっこし",
      pos: "Danh từ / Động từ する",
      meaning: "chuyển nhà",
      exampleJa: "来月引っ越しします。",
      exampleVi: "Tháng sau tôi chuyển nhà."
   },
   {
      kanji: "引っ越す",
      hiragana: "ひっこす",
      pos: "Động từ",
      meaning: "chuyển nhà",
      exampleJa: "東京に引っ越します。",
      exampleVi: "Tôi chuyển nhà đến Tokyo."
   },
   {
      kanji: "身長が高い",
      hiragana: "しんちょうがたかい",
      pos: "Cụm từ",
      meaning: "cao (chiều cao)",
      exampleJa: "彼は身長が高いです。",
      exampleVi: "Anh ấy cao."
   },
   {
      kanji: "身長",
      hiragana: "しんちょう",
      pos: "Danh từ",
      meaning: "chiều cao cơ thể",
      exampleJa: "身長は１７０センチです。",
      exampleVi: "Chiều cao là 170 cm."
   },
   {
      kanji: "身長が低い",
      hiragana: "しんちょうがひくい",
      pos: "Cụm từ",
      meaning: "thấp (chiều cao)",
      exampleJa: "彼女は身長が低いです。",
      exampleVi: "Cô ấy thấp."
   },
   {
      kanji: "身長が伸びる",
      hiragana: "しんちょうがのびる",
      pos: "Cụm từ",
      meaning: "cao lên",
      exampleJa: "子どもの身長が伸びました。",
      exampleVi: "Chiều cao của đứa trẻ đã tăng."
   },
   {
      kanji: "背",
      hiragana: "せ",
      pos: "Danh từ",
      meaning: "lưng; dáng người; chiều cao",
      exampleJa: "背が高いです。",
      exampleVi: "Tôi cao."
   },
   {
      kanji: "体重",
      hiragana: "たいじゅう",
      pos: "Danh từ",
      meaning: "cân nặng",
      exampleJa: "体重を量ります。",
      exampleVi: "Tôi đo cân nặng."
   },
   {
      kanji: "体重が多い",
      hiragana: "たいじゅうがおおい",
      pos: "Cụm từ",
      meaning: "cân nặng nhiều",
      exampleJa: "彼は体重が多いです。",
      exampleVi: "Anh ấy cân nặng nhiều."
   },
   {
      kanji: "体重が少ない",
      hiragana: "たいじゅうがすくない",
      pos: "Cụm từ",
      meaning: "cân nặng ít",
      exampleJa: "妹は体重が少ないです。",
      exampleVi: "Em gái tôi cân nặng ít."
   },
   {
      kanji: "体重が増える",
      hiragana: "たいじゅうがふえる",
      pos: "Động từ",
      meaning: "tăng cân",
      exampleJa: "最近体重が増えました。",
      exampleVi: "Gần đây tôi đã tăng cân."
   },
   {
      kanji: "体重が減る",
      hiragana: "たいじゅうがへる",
      pos: "Động từ",
      meaning: "giảm cân",
      exampleJa: "運動して体重が減りました。",
      exampleVi: "Tập thể dục nên tôi đã giảm cân."
   },
   {
      kanji: "体重計",
      hiragana: "たいじゅうけい",
      pos: "Danh từ",
      meaning: "cân đo trọng lượng",
      exampleJa: "体重計に乗ります。",
      exampleVi: "Tôi bước lên cân."
   },
   {
      kanji: "太る",
      hiragana: "ふとる",
      pos: "Động từ",
      meaning: "béo lên",
      exampleJa: "冬に太りました。",
      exampleVi: "Tôi đã béo lên vào mùa đông."
   },
   {
      kanji: "痩せる",
      hiragana: "やせる",
      pos: "Động từ",
      meaning: "gầy đi",
      exampleJa: "彼女は少し痩せました。",
      exampleVi: "Cô ấy đã gầy đi một chút."
   },
   {
      kanji: "けが",
      hiragana: "けが",
      pos: "Danh từ",
      meaning: "vết thương, bị thương",
      exampleJa: "けがをしました。",
      exampleVi: "Tôi đã bị thương."
   },
   {
      kanji: "けがをする",
      hiragana: "けがをする",
      pos: "Động từ",
      meaning: "bị thương",
      exampleJa: "スポーツでけがをしました。",
      exampleVi: "Tôi bị thương khi chơi thể thao."
   },
   {
      kanji: "けがが治る",
      hiragana: "けががなおる",
      pos: "Động từ",
      meaning: "vết thương lành",
      exampleJa: "けがが治りました。",
      exampleVi: "Vết thương đã lành."
   },
   {
      kanji: "けがを治す",
      hiragana: "けがをなおす",
      pos: "Động từ",
      meaning: "chữa lành vết thương",
      exampleJa: "医者がけがを治しました。",
      exampleVi: "Bác sĩ đã chữa vết thương."
   },
   {
      kanji: "大けが",
      hiragana: "おおけが",
      pos: "Danh từ",
      meaning: "chấn thương nặng",
      exampleJa: "事故で大けがをしました。",
      exampleVi: "Tôi bị chấn thương nặng trong tai nạn."
   },
   {
      kanji: "けが人",
      hiragana: "けがにん",
      pos: "Danh từ",
      meaning: "người bị thương",
      exampleJa: "事故でけが人が出ました。",
      exampleVi: "Có người bị thương trong vụ tai nạn."
   },
   {
      kanji: "傷",
      hiragana: "きず",
      pos: "Danh từ",
      meaning: "vết thương, vết xước",
      exampleJa: "手に傷があります。",
      exampleVi: "Tay tôi có vết xước."
   },
   {
      kanji: "やけど",
      hiragana: "やけど",
      pos: "Danh từ",
      meaning: "bỏng",
      exampleJa: "熱い湯でやけどしました。",
      exampleVi: "Tôi bị bỏng do nước nóng."
   },
   {
      kanji: "骨折",
      hiragana: "こっせつ",
      pos: "Danh từ / Động từ する",
      meaning: "gãy xương",
      exampleJa: "足を骨折しました。",
      exampleVi: "Tôi bị gãy chân."
   },
   {
      kanji: "会",
      hiragana: "かい",
      pos: "Danh từ",
      meaning: "buổi họp, buổi tiệc",
      exampleJa: "明日会があります。",
      exampleVi: "Ngày mai có buổi họp."
   },
   {
      kanji: "忘年会",
      hiragana: "ぼうねんかい",
      pos: "Danh từ",
      meaning: "tiệc tất niên",
      exampleJa: "会社の忘年会に参加します。",
      exampleVi: "Tôi tham gia tiệc tất niên của công ty."
   },
   {
      kanji: "新年会",
      hiragana: "しんねんかい",
      pos: "Danh từ",
      meaning: "tiệc tân niên",
      exampleJa: "友達と新年会を開きました。",
      exampleVi: "Tôi đã tổ chức tiệc tân niên với bạn bè."
   },
   {
      kanji: "送別会",
      hiragana: "そうべつかい",
      pos: "Danh từ",
      meaning: "tiệc chia tay",
      exampleJa: "先生の送別会があります。",
      exampleVi: "Có tiệc chia tay thầy giáo."
   },
   {
      kanji: "歓迎会",
      hiragana: "かんげいかい",
      pos: "Danh từ",
      meaning: "tiệc chào mừng",
      exampleJa: "新入社員の歓迎会をしました。",
      exampleVi: "Chúng tôi đã tổ chức tiệc chào mừng nhân viên mới."
   },
   {
      kanji: "飲み会",
      hiragana: "のみかい",
      pos: "Danh từ",
      meaning: "tiệc nhậu",
      exampleJa: "友達と飲み会に行きました。",
      exampleVi: "Tôi đã đi nhậu với bạn."
   },
   {
      kanji: "宴会",
      hiragana: "えんかい",
      pos: "Danh từ",
      meaning: "yến tiệc",
      exampleJa: "ホテルで宴会があります。",
      exampleVi: "Có yến tiệc ở khách sạn."
   },
   {
      kanji: "誕生日会",
      hiragana: "たんじょうびかい",
      pos: "Danh từ",
      meaning: "tiệc sinh nhật",
      exampleJa: "友達の誕生日会に招待されました。",
      exampleVi: "Tôi được mời đến tiệc sinh nhật của bạn."
   },
   {
      kanji: "クリスマス",
      hiragana: "クリスマス",
      pos: "Danh từ",
      meaning: "Giáng sinh",
      exampleJa: "クリスマスにケーキを食べます。",
      exampleVi: "Tôi ăn bánh vào dịp Giáng sinh."
   },
   {
      kanji: "同窓会",
      hiragana: "どうそうかい",
      pos: "Danh từ",
      meaning: "họp lớp",
      exampleJa: "高校の同窓会に行きます。",
      exampleVi: "Tôi sẽ đi họp lớp cấp ba."
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
      kanji: "趣味が広い",
      hiragana: "しゅみがひろい",
      pos: "Cụm từ",
      meaning: "sở thích phong phú",
      exampleJa: "彼は趣味が広いです。",
      exampleVi: "Anh ấy có nhiều sở thích."
   },
   {
      kanji: "趣味がいい",
      hiragana: "しゅみがいい",
      pos: "Cụm từ",
      meaning: "gu thẩm mỹ tốt",
      exampleJa: "彼女は趣味がいいですね。",
      exampleVi: "Cô ấy có gu rất tốt nhỉ."
   },
   {
      kanji: "趣味が悪い",
      hiragana: "しゅみがわるい",
      pos: "Cụm từ",
      meaning: "gu thẩm mỹ kém",
      exampleJa: "その服は趣味が悪いです。",
      exampleVi: "Bộ quần áo đó gu kém quá."
   },
   {
      kanji: "興味",
      hiragana: "きょうみ",
      pos: "Danh từ",
      meaning: "hứng thú",
      exampleJa: "音楽に興味があります。",
      exampleVi: "Tôi có hứng thú với âm nhạc."
   },
   {
      kanji: "興味がある",
      hiragana: "きょうみがある",
      pos: "Cụm từ",
      meaning: "có hứng thú",
      exampleJa: "歴史に興味があります。",
      exampleVi: "Tôi có hứng thú với lịch sử."
   },
   {
      kanji: "興味がない",
      hiragana: "きょうみがない",
      pos: "Cụm từ",
      meaning: "không có hứng thú",
      exampleJa: "私はスポーツに興味がないです。",
      exampleVi: "Tôi không có hứng thú với thể thao."
   },
   {
      kanji: "興味を持つ",
      hiragana: "きょうみをもつ",
      pos: "Động từ",
      meaning: "có sự quan tâm, chú ý",
      exampleJa: "日本文化に興味を持ちました。",
      exampleVi: "Tôi đã quan tâm đến văn hóa Nhật Bản."
   },
   {
      kanji: "興味深い",
      hiragana: "きょうみぶかい",
      pos: "Tính từ",
      meaning: "rất thú vị",
      exampleJa: "興味深い話を聞きました。",
      exampleVi: "Tôi đã nghe một câu chuyện rất thú vị."
   },
   {
      kanji: "関心",
      hiragana: "かんしん",
      pos: "Danh từ",
      meaning: "sự quan tâm",
      exampleJa: "教育に関心があります。",
      exampleVi: "Tôi quan tâm đến giáo dục."
   },
   {
      kanji: "思い出",
      hiragana: "おもいで",
      pos: "Danh từ",
      meaning: "kỷ niệm",
      exampleJa: "いい思い出がたくさんあります。",
      exampleVi: "Tôi có rất nhiều kỷ niệm đẹp."
   },
   {
      kanji: "いい思い出",
      hiragana: "いいおもいで",
      pos: "Cụm từ",
      meaning: "kỷ niệm đẹp",
      exampleJa: "旅行はいい思い出になりました。",
      exampleVi: "Chuyến du lịch đã trở thành kỷ niệm đẹp."
   },
   {
      kanji: "思い出す",
      hiragana: "おもいだす",
      pos: "Động từ",
      meaning: "nhớ lại",
      exampleJa: "昔のことを思い出します。",
      exampleVi: "Tôi nhớ lại chuyện ngày xưa."
   },
   {
      kanji: "冗談",
      hiragana: "じょうだん",
      pos: "Danh từ",
      meaning: "trò đùa, nói đùa",
      exampleJa: "冗談を言いました。",
      exampleVi: "Tôi đã nói đùa."
   },
   {
      kanji: "冗談を言う",
      hiragana: "じょうだんをいう",
      pos: "Động từ",
      meaning: "nói đùa",
      exampleJa: "先生が冗談を言いました。",
      exampleVi: "Thầy giáo đã nói đùa."
   },
   {
      kanji: "目的地",
      hiragana: "もくてきち",
      pos: "Danh từ",
      meaning: "điểm đến",
      exampleJa: "目的地に着きました。",
      exampleVi: "Tôi đã đến điểm đến."
   },
   {
      kanji: "目標",
      hiragana: "もくひょう",
      pos: "Danh từ",
      meaning: "mục tiêu",
      exampleJa: "目標を決めます。",
      exampleVi: "Tôi đặt ra mục tiêu."
   },
   {
      kanji: "約束",
      hiragana: "やくそく",
      pos: "Danh từ / Động từ する",
      meaning: "lời hứa, hẹn",
      exampleJa: "友達と約束しました。",
      exampleVi: "Tôi đã hứa với bạn."
   },
   {
      kanji: "おしゃべり",
      hiragana: "おしゃべり",
      pos: "Danh từ / Động từ する",
      meaning: "nói chuyện phiếm",
      exampleJa: "友達とおしゃべりします。",
      exampleVi: "Tôi nói chuyện phiếm với bạn."
   },
   {
      kanji: "遠慮",
      hiragana: "えんりょ",
      pos: "Danh từ / Động từ する",
      meaning: "khách sáo, ngại ngùng",
      exampleJa: "どうぞ遠慮しないでください。",
      exampleVi: "Xin đừng khách sáo."
   },
   {
      kanji: "我慢",
      hiragana: "がまん",
      pos: "Danh từ / Động từ する",
      meaning: "chịu đựng, nhẫn nại",
      exampleJa: "痛みを我慢します。",
      exampleVi: "Tôi chịu đựng cơn đau."
   },
   {
      kanji: "我慢強い",
      hiragana: "がまんづよい",
      pos: "Tính từ",
      meaning: "chịu đựng giỏi, kiên nhẫn",
      exampleJa: "彼は我慢強い人です。",
      exampleVi: "Anh ấy là người rất kiên nhẫn."
   },
   {
      kanji: "迷惑",
      hiragana: "めいわく",
      pos: "Danh từ / Tính từ",
      meaning: "phiền phức",
      exampleJa: "迷惑をかけてすみません。",
      exampleVi: "Xin lỗi vì đã làm phiền."
   },
   {
      kanji: "迷惑がかかる",
      hiragana: "めいわくがかかる",
      pos: "Cụm từ",
      meaning: "gây phiền phức",
      exampleJa: "友達に迷惑がかかりました。",
      exampleVi: "Tôi đã gây phiền phức cho bạn."
   },
   {
      kanji: "迷惑をかける",
      hiragana: "めいわくをかける",
      pos: "Động từ",
      meaning: "làm phiền",
      exampleJa: "両親に迷惑をかけました。",
      exampleVi: "Tôi đã làm phiền bố mẹ."
   },
   {
      kanji: "近所",
      hiragana: "きんじょ",
      pos: "Danh từ",
      meaning: "hàng xóm, gần nhà",
      exampleJa: "近所にスーパーがあります。",
      exampleVi: "Gần nhà có siêu thị."
   },
   {
      kanji: "希望",
      hiragana: "きぼう",
      pos: "Danh từ / Động từ する",
      meaning: "hy vọng, nguyện vọng",
      exampleJa: "日本へ行く希望があります。",
      exampleVi: "Tôi có hy vọng đi Nhật."
   },
   {
      kanji: "希望者",
      hiragana: "きぼうしゃ",
      pos: "Danh từ",
      meaning: "người có nguyện vọng",
      exampleJa: "希望者は手を挙げてください。",
      exampleVi: "Người có nguyện vọng hãy giơ tay."
   },
   {
      kanji: "望み",
      hiragana: "のぞみ",
      pos: "Danh từ",
      meaning: "ước muốn, hi vọng",
      exampleJa: "望みを持っています。",
      exampleVi: "Tôi có ước muốn."
   },
   {
      kanji: "望む",
      hiragana: "のぞむ",
      pos: "Động từ",
      meaning: "mong muốn, khao khát",
      exampleJa: "成功を望んでいます。",
      exampleVi: "Tôi mong muốn thành công."
   },
   {
      kanji: "夢",
      hiragana: "ゆめ",
      pos: "Danh từ",
      meaning: "giấc mơ, ước mơ",
      exampleJa: "夢を見ることがあります。",
      exampleVi: "Thỉnh thoảng tôi nằm mơ."
   },
   {
      kanji: "夢を見る",
      hiragana: "ゆめをみる",
      pos: "Động từ",
      meaning: "nằm mơ",
      exampleJa: "昨日怖い夢を見ました。",
      exampleVi: "Hôm qua tôi mơ thấy giấc mơ đáng sợ."
   },
   {
      kanji: "夢から覚める",
      hiragana: "ゆめからさめる",
      pos: "Động từ",
      meaning: "tỉnh mơ",
      exampleJa: "夢から覚めました。",
      exampleVi: "Tôi tỉnh khỏi giấc mơ."
   },
   {
      kanji: "夢がある",
      hiragana: "ゆめがある",
      pos: "Cụm từ",
      meaning: "có ước mơ",
      exampleJa: "子供のころ夢がありました。",
      exampleVi: "Hồi nhỏ tôi có ước mơ."
   },
   {
      kanji: "夢がない",
      hiragana: "ゆめがない",
      pos: "Cụm từ",
      meaning: "không có ước mơ",
      exampleJa: "今は夢がありません。",
      exampleVi: "Hiện tại tôi không có ước mơ."
   },
   {
      kanji: "夢を持つ",
      hiragana: "ゆめをもつ",
      pos: "Động từ",
      meaning: "có ước mơ",
      exampleJa: "大きな夢を持っています。",
      exampleVi: "Tôi có một ước mơ lớn."
   },
   {
      kanji: "夢がかなう",
      hiragana: "ゆめがかなう",
      pos: "Động từ",
      meaning: "ước mơ thành hiện thực",
      exampleJa: "夢がかないますように。",
      exampleVi: "Mong ước mơ sẽ thành hiện thực."
   },
   {
      kanji: "夢を叶える",
      hiragana: "ゆめをかなえる",
      pos: "Động từ",
      meaning: "biến ước mơ thành hiện thực",
      exampleJa: "努力して夢を叶えます。",
      exampleVi: "Tôi sẽ nỗ lực để biến ước mơ thành hiện thực."
   },
   {
      kanji: "賛成",
      hiragana: "さんせい",
      pos: "Danh từ / Động từ する",
      meaning: "tán thành, đồng ý",
      exampleJa: "私はその意見に賛成です。",
      exampleVi: "Tôi tán thành ý kiến đó."
   },
   {
      kanji: "賛成意見",
      hiragana: "さんせいいけん",
      pos: "Danh từ",
      meaning: "ý kiến tán thành",
      exampleJa: "賛成意見が多いです。",
      exampleVi: "Có nhiều ý kiến tán thành."
   },
   {
      kanji: "反対",
      hiragana: "はんたい",
      pos: "Danh từ / Động từ する",
      meaning: "phản đối",
      exampleJa: "私はその計画に反対です。",
      exampleVi: "Tôi phản đối kế hoạch đó."
   },
   {
      kanji: "反対側",
      hiragana: "はんたいがわ",
      pos: "Danh từ",
      meaning: "phía đối diện",
      exampleJa: "駅の反対側にスーパーがあります。",
      exampleVi: "Có siêu thị ở phía đối diện nhà ga."
   },
   {
      kanji: "反対意見",
      hiragana: "はんたいいけん",
      pos: "Danh từ",
      meaning: "ý kiến phản đối",
      exampleJa: "反対意見もありました。",
      exampleVi: "Cũng có ý kiến phản đối."
   },
   {
      kanji: "想像",
      hiragana: "そうぞう",
      pos: "Danh từ / Động từ する",
      meaning: "tưởng tượng",
      exampleJa: "未来を想像します。",
      exampleVi: "Tôi tưởng tượng về tương lai."
   },
   {
      kanji: "想像がつく",
      hiragana: "そうぞうがつく",
      pos: "Động từ",
      meaning: "có thể tưởng tượng được",
      exampleJa: "その気持ちは想像がつきます。",
      exampleVi: "Tôi có thể tưởng tượng được cảm xúc đó."
   },
   {
      kanji: "想像力",
      hiragana: "そうぞうりょく",
      pos: "Danh từ",
      meaning: "trí tưởng tượng",
      exampleJa: "彼は想像力が豊かです。",
      exampleVi: "Anh ấy có trí tưởng tượng phong phú."
   },
   {
      kanji: "努力",
      hiragana: "どりょく",
      pos: "Danh từ / Động từ する",
      meaning: "nỗ lực",
      exampleJa: "合格のために努力します。",
      exampleVi: "Tôi nỗ lực để đỗ kỳ thi."
   },
   {
      kanji: "努力を重ねる",
      hiragana: "どりょくをかさねる",
      pos: "Cụm từ",
      meaning: "không ngừng nỗ lực",
      exampleJa: "彼は努力を重ねています。",
      exampleVi: "Anh ấy không ngừng nỗ lực."
   },
   {
      kanji: "努力が実る",
      hiragana: "どりょくがみのる",
      pos: "Cụm từ",
      meaning: "nỗ lực được đền đáp",
      exampleJa: "ついに努力が実りました。",
      exampleVi: "Cuối cùng thì nỗ lực đã được đền đáp."
   },
   {
      kanji: "努力家",
      hiragana: "どりょくか",
      pos: "Danh từ",
      meaning: "người siêng năng, chăm chỉ",
      exampleJa: "彼はとても努力家です。",
      exampleVi: "Anh ấy là người rất chăm chỉ."
   },

   {
      kanji: "太陽",
      hiragana: "たいよう",
      pos: "Danh từ",
      meaning: "Mặt trời",
      exampleJa: "太陽が昇ると明るくなります。",
      exampleVi: "Khi mặt trời mọc thì trời sáng lên."
   },
   {
      kanji: "太陽が昇る",
      hiragana: "たいようがのぼる",
      pos: "Động từ",
      meaning: "Mặt trời mọc",
      exampleJa: "夏は太陽が早く昇ります。",
      exampleVi: "Mùa hè mặt trời mọc sớm."
   },
   {
      kanji: "太陽が沈む",
      hiragana: "たいようがしずむ",
      pos: "Động từ",
      meaning: "Mặt trời lặn",
      exampleJa: "夕方、太陽が海に沈みます。",
      exampleVi: "Buổi chiều, mặt trời lặn xuống biển."
   },
   {
      kanji: "太陽が出る",
      hiragana: "たいようがでる",
      pos: "Động từ",
      meaning: "Mặt trời xuất hiện",
      exampleJa: "朝、太陽が出ました。",
      exampleVi: "Buổi sáng, mặt trời đã lên."
   },
   {
      kanji: "地球",
      hiragana: "ちきゅう",
      pos: "Danh từ",
      meaning: "Trái đất",
      exampleJa: "地球は青い星です。",
      exampleVi: "Trái đất là hành tinh xanh."
   },
   {
      kanji: "地球温暖化",
      hiragana: "ちきゅうおんだんか",
      pos: "Danh từ",
      meaning: "Hiện tượng nóng lên toàn cầu",
      exampleJa: "地球温暖化は大きな問題です。",
      exampleVi: "Hiện tượng nóng lên toàn cầu là một vấn đề lớn."
   },
   {
      kanji: "月",
      hiragana: "つき",
      pos: "Danh từ",
      meaning: "Mặt trăng",
      exampleJa: "月がきれいに見えます。",
      exampleVi: "Có thể nhìn thấy mặt trăng đẹp."
   },
   {
      kanji: "星",
      hiragana: "ほし",
      pos: "Danh từ",
      meaning: "Ngôi sao",
      exampleJa: "夜空に星がたくさんあります。",
      exampleVi: "Trên bầu trời đêm có rất nhiều ngôi sao."
   },
   {
      kanji: "温度",
      hiragana: "おんど",
      pos: "Danh từ",
      meaning: "Nhiệt độ",
      exampleJa: "水の温度を測ります。",
      exampleVi: "Đo nhiệt độ của nước."
   },
   {
      kanji: "温度が高い",
      hiragana: "おんどがたかい",
      pos: "Cụm từ",
      meaning: "Nhiệt độ cao",
      exampleJa: "今日は温度が高いです。",
      exampleVi: "Hôm nay nhiệt độ cao."
   },
   {
      kanji: "温度が低い",
      hiragana: "おんどがひくい",
      pos: "Cụm từ",
      meaning: "Nhiệt độ thấp",
      exampleJa: "この部屋は温度が低いです。",
      exampleVi: "Căn phòng này có nhiệt độ thấp."
   },
   {
      kanji: "温度が上がる",
      hiragana: "おんどがあがる",
      pos: "Động từ",
      meaning: "Nhiệt độ tăng",
      exampleJa: "午後から温度が上がります。",
      exampleVi: "Chiều nay nhiệt độ sẽ tăng."
   },
   {
      kanji: "温度が下がる",
      hiragana: "おんどがさがる",
      pos: "Động từ",
      meaning: "Nhiệt độ giảm",
      exampleJa: "夜になると温度が下がります。",
      exampleVi: "Ban đêm nhiệt độ giảm xuống."
   },
   {
      kanji: "温度を上がる",
      hiragana: "おんどをあげる",
      pos: "Động từ",
      meaning: "Làm tăng nhiệt độ",
      exampleJa: "ヒーターで部屋の温度を上げます。",
      exampleVi: "Dùng máy sưởi để tăng nhiệt độ phòng."
   },
   {
      kanji: "温度を下がる",
      hiragana: "おんどをさげる",
      pos: "Động từ",
      meaning: "Làm giảm nhiệt độ",
      exampleJa: "冷房で温度を下げます。",
      exampleVi: "Dùng máy lạnh để giảm nhiệt độ."
   },

   {
      kanji: "気温",
      hiragana: "きおん",
      pos: "Danh từ",
      meaning: "Nhiệt độ không khí",
      exampleJa: "今日の気温は30度です。",
      exampleVi: "Nhiệt độ hôm nay là 30 độ."
   },
   {
      kanji: "体温",
      hiragana: "たいおん",
      pos: "Danh từ",
      meaning: "Thân nhiệt",
      exampleJa: "体温を測ってください。",
      exampleVi: "Hãy đo thân nhiệt."
   },
   {
      kanji: "湿度",
      hiragana: "しつど",
      pos: "Danh từ",
      meaning: "Độ ẩm",
      exampleJa: "今日は湿度が高いです。",
      exampleVi: "Hôm nay độ ẩm cao."
   },
   {
      kanji: "湿度が高い",
      hiragana: "しつどがたかい",
      pos: "Cụm từ",
      meaning: "Độ ẩm cao",
      exampleJa: "日本の夏は湿度が高いです。",
      exampleVi: "Mùa hè ở Nhật Bản độ ẩm cao."
   },
   {
      kanji: "湿度が低い",
      hiragana: "しつどがひくい",
      pos: "Cụm từ",
      meaning: "Độ ẩm thấp",
      exampleJa: "冬は湿度が低いです。",
      exampleVi: "Mùa đông độ ẩm thấp."
   },
   {
      kanji: "湿気",
      hiragana: "しっけ",
      pos: "Danh từ",
      meaning: "Hơi ẩm",
      exampleJa: "部屋に湿気が多いです。",
      exampleVi: "Trong phòng có nhiều hơi ẩm."
   },
   {
      kanji: "蒸し暑い",
      hiragana: "むしあつい",
      pos: "Tính từ",
      meaning: "Nóng nực, oi bức",
      exampleJa: "今日は蒸し暑いですね。",
      exampleVi: "Hôm nay oi bức nhỉ."
   },
   {
      kanji: "湿気が多い",
      hiragana: "しっけがおおい",
      pos: "Cụm từ",
      meaning: "Nhiều hơi ẩm",
      exampleJa: "梅雨は湿気が多いです。",
      exampleVi: "Mùa mưa có nhiều hơi ẩm."
   },
   {
      kanji: "湿気が少ない",
      hiragana: "しっけがすくない",
      pos: "Cụm từ",
      meaning: "Ít hơi ẩm",
      exampleJa: "この部屋は湿気が少ないです。",
      exampleVi: "Căn phòng này ít hơi ẩm."
   },
   {
      kanji: "除湿",
      hiragana: "じょしつ",
      pos: "Danh từ/Động từ",
      meaning: "Hút ẩm, khử ẩm",
      exampleJa: "除湿機を使います。",
      exampleVi: "Dùng máy hút ẩm."
   },
   {
      kanji: "梅雨",
      hiragana: "つゆ",
      pos: "Danh từ",
      meaning: "Mùa mưa",
      exampleJa: "日本の梅雨は6月です。",
      exampleVi: "Mùa mưa ở Nhật là tháng 6."
   },
   {
      kanji: "梅雨に入る",
      hiragana: "つゆにはいる",
      pos: "Động từ",
      meaning: "Bước vào mùa mưa",
      exampleJa: "6月に梅雨に入ります。",
      exampleVi: "Tháng 6 bước vào mùa mưa."
   },
   {
      kanji: "梅雨が明ける",
      hiragana: "つゆがあける",
      pos: "Động từ",
      meaning: "Kết thúc mùa mưa",
      exampleJa: "7月に梅雨が明けます。",
      exampleVi: "Tháng 7 mùa mưa kết thúc."
   },
   {
      kanji: "梅雨入り",
      hiragana: "つゆいり",
      pos: "Danh từ",
      meaning: "Sự bắt đầu mùa mưa",
      exampleJa: "今年の梅雨入りは早いです。",
      exampleVi: "Mùa mưa năm nay bắt đầu sớm."
   },
   {
      kanji: "梅雨明け",
      hiragana: "つゆあけ",
      pos: "Danh từ",
      meaning: "Sự kết thúc mùa mưa",
      exampleJa: "梅雨明けは7月中旬です。",
      exampleVi: "Mùa mưa kết thúc vào giữa tháng 7."
   },
   {
      kanji: "梅雨前線",
      hiragana: "つゆぜんせん",
      pos: "Danh từ",
      meaning: "Dải mưa (frontal rain của mùa mưa)",
      exampleJa: "梅雨前線の影響で雨が続きます。",
      exampleVi: "Do dải mưa mùa mưa nên mưa kéo dài."
   },
   {
      kanji: "暖房",
      hiragana: "だんぼう",
      pos: "Danh từ",
      meaning: "Sưởi",
      exampleJa: "冬は暖房を使います。",
      exampleVi: "Mùa đông dùng máy sưởi."
   },
   {
      kanji: "暖房をつける",
      hiragana: "だんぼうをつける",
      pos: "Động từ",
      meaning: "Bật máy sưởi",
      exampleJa: "寒いので暖房をつけます。",
      exampleVi: "Vì lạnh nên bật máy sưởi."
   },
   {
      kanji: "暖房を消す",
      hiragana: "だんぼうをけす",
      pos: "Động từ",
      meaning: "Tắt máy sưởi",
      exampleJa: "部屋が暖かいので暖房を消します。",
      exampleVi: "Phòng đã ấm nên tắt máy sưởi."
   },
   {
      kanji: "暖房を入れる",
      hiragana: "だんぼうをいれる",
      pos: "Động từ",
      meaning: "Bật/mở máy sưởi",
      exampleJa: "暖房を入れてください。",
      exampleVi: "Hãy bật máy sưởi."
   },
   {
      kanji: "暖房を止める",
      hiragana: "だんぼうをとめる",
      pos: "Động từ",
      meaning: "Dừng/tắt máy sưởi",
      exampleJa: "寝る前に暖房を止めます。",
      exampleVi: "Trước khi ngủ thì tắt máy sưởi."
   },
   {
      kanji: "暖房が効く",
      hiragana: "だんぼうがきく",
      pos: "Cụm từ",
      meaning: "Máy sưởi có tác dụng",
      exampleJa: "この部屋は暖房がよく効きます。",
      exampleVi: "Phòng này máy sưởi hoạt động tốt."
   },
   {
      kanji: "冷房",
      hiragana: "れいぼう",
      pos: "Danh từ",
      meaning: "Điều hòa (làm mát)",
      exampleJa: "夏は冷房が必要です。",
      exampleVi: "Mùa hè cần điều hòa."
   },
   {
      kanji: "クーラー",
      hiragana: "くーらー",
      pos: "Danh từ",
      meaning: "Máy lạnh",
      exampleJa: "クーラーをつけてください。",
      exampleVi: "Hãy bật máy lạnh."
   },
   {
      kanji: "エアコン",
      hiragana: "えあこん",
      pos: "Danh từ",
      meaning: "Máy điều hòa",
      exampleJa: "エアコンは便利です。",
      exampleVi: "Máy điều hòa rất tiện lợi."
   },
   {
      kanji: "ヒーター",
      hiragana: "ひーたー",
      pos: "Danh từ",
      meaning: "Máy sưởi",
      exampleJa: "ヒーターを買いました。",
      exampleVi: "Tôi đã mua máy sưởi."
   },
   {
      kanji: "ストーブ",
      hiragana: "すとーぶ",
      pos: "Danh từ",
      meaning: "Lò sưởi",
      exampleJa: "ストーブの前に座ります。",
      exampleVi: "Ngồi trước lò sưởi."
   },
   {
      kanji: "皮",
      hiragana: "かわ",
      pos: "Danh từ",
      meaning: "Da, vỏ",
      exampleJa: "りんごの皮をむきます。",
      exampleVi: "Gọt vỏ táo."
   },
   {
      kanji: "皮をむく",
      hiragana: "かわをむく",
      pos: "Động từ",
      meaning: "Gọt vỏ",
      exampleJa: "じゃがいもの皮をむきます。",
      exampleVi: "Gọt vỏ khoai tây."
   },
   {
      kanji: "毛皮",
      hiragana: "けがわ",
      pos: "Danh từ",
      meaning: "Da lông thú",
      exampleJa: "毛皮のコートは高いです。",
      exampleVi: "Áo khoác da lông thú rất đắt."
   },
   {
      kanji: "缶",
      hiragana: "かん",
      pos: "Danh từ",
      meaning: "Lon, hộp kim loại",
      exampleJa: "缶をリサイクルします。",
      exampleVi: "Tái chế lon."
   },
   {
      kanji: "缶詰",
      hiragana: "かんづめ",
      pos: "Danh từ",
      meaning: "Đồ hộp",
      exampleJa: "缶詰を買いました。",
      exampleVi: "Tôi đã mua đồ hộp."
   },
   {
      kanji: "缶ビール",
      hiragana: "かんびーる",
      pos: "Danh từ",
      meaning: "Bia lon",
      exampleJa: "缶ビールを飲みます。",
      exampleVi: "Uống bia lon."
   },
   {
      kanji: "ドラム缶",
      hiragana: "どらむかん",
      pos: "Danh từ",
      meaning: "Thùng phi",
      exampleJa: "ドラム缶に油を入れます。",
      exampleVi: "Đổ dầu vào thùng phi."
   },
   {
      kanji: "びん",
      hiragana: "びん",
      pos: "Danh từ",
      meaning: "Chai",
      exampleJa: "びんに水を入れます。",
      exampleVi: "Đổ nước vào chai."
   },
   {
      kanji: "びんづめ",
      hiragana: "びんづめ",
      pos: "Danh từ",
      meaning: "Đồ đóng chai",
      exampleJa: "びんづめのジャムを買いました。",
      exampleVi: "Tôi đã mua mứt đóng chai."
   },
   {
      kanji: "ペットボトル",
      hiragana: "ぺっとぼとる",
      pos: "Danh từ",
      meaning: "Chai nhựa",
      exampleJa: "ペットボトルをリサイクルします。",
      exampleVi: "Tái chế chai nhựa."
   },
   {
      kanji: "画面",
      hiragana: "がめん",
      pos: "Danh từ",
      meaning: "Màn hình",
      exampleJa: "画面が暗いです。",
      exampleVi: "Màn hình tối."
   },
   {
      kanji: "番組",
      hiragana: "ばんぐみ",
      pos: "Danh từ",
      meaning: "Chương trình",
      exampleJa: "この番組は面白いです。",
      exampleVi: "Chương trình này thú vị."
   },
   {
      kanji: "テレビ番組",
      hiragana: "てれびばんぐみ",
      pos: "Danh từ",
      meaning: "Chương trình tivi",
      exampleJa: "好きなテレビ番組を見ます。",
      exampleVi: "Xem chương trình tivi yêu thích."
   },
   {
      kanji: "ニュース番組",
      hiragana: "にゅーすばんぐみ",
      pos: "Danh từ",
      meaning: "Chương trình tin tức",
      exampleJa: "ニュース番組を見ます。",
      exampleVi: "Xem chương trình tin tức."
   },
   {
      kanji: "歌番組",
      hiragana: "うたばんぐみ",
      pos: "Danh từ",
      meaning: "Chương trình ca nhạc",
      exampleJa: "歌番組を見るのが好きです。",
      exampleVi: "Tôi thích xem chương trình ca nhạc."
   },
   {
      kanji: "バラエティー番組",
      hiragana: "ばらえてぃーばんぐみ",
      pos: "Danh từ",
      meaning: "Chương trình tạp kỹ, giải trí",
      exampleJa: "バラエティー番組で笑いました。",
      exampleVi: "Tôi đã cười khi xem chương trình giải trí."
   },
   {
      kanji: "記事",
      hiragana: "きじ",
      pos: "Danh từ",
      meaning: "Bài báo",
      exampleJa: "新聞の記事を読みます。",
      exampleVi: "Đọc bài báo trên báo giấy."
   },
   {
      kanji: "新聞記事",
      hiragana: "しんぶんきじ",
      pos: "Danh từ",
      meaning: "Bài báo (trên báo chí)",
      exampleJa: "新聞記事をコピーしました。",
      exampleVi: "Tôi đã sao chép một bài báo."
   },
   {
      kanji: "雑誌記事",
      hiragana: "ざっしきじ",
      pos: "Danh từ",
      meaning: "Bài báo (trên tạp chí)",
      exampleJa: "雑誌記事を読みます。",
      exampleVi: "Đọc bài báo trên tạp chí."
   },
   {
      kanji: "付近",
      hiragana: "ふきん",
      pos: "Danh từ",
      meaning: "Khu vực lân cận",
      exampleJa: "駅付近にスーパーがあります。",
      exampleVi: "Gần ga có siêu thị."
   },
   {
      kanji: "近く",
      hiragana: "ちかく",
      pos: "Danh từ/Trạng từ",
      meaning: "Gần",
      exampleJa: "家の近くに公園があります。",
      exampleVi: "Gần nhà có công viên."
   },
   {
      kanji: "警察",
      hiragana: "けいさつ",
      pos: "Danh từ",
      meaning: "Cảnh sát",
      exampleJa: "警察を呼びました。",
      exampleVi: "Tôi đã gọi cảnh sát."
   },
   {
      kanji: "警察署",
      hiragana: "けいさつしょ",
      pos: "Danh từ",
      meaning: "Đồn cảnh sát",
      exampleJa: "警察署に行きます。",
      exampleVi: "Đi đến đồn cảnh sát."
   },
   {
      kanji: "警察官",
      hiragana: "けいさつかん",
      pos: "Danh từ",
      meaning: "Nhân viên cảnh sát",
      exampleJa: "警察官に聞きます。",
      exampleVi: "Hỏi cảnh sát."
   },
   {
      kanji: "警官",
      hiragana: "けいかん",
      pos: "Danh từ",
      meaning: "Cảnh sát (viết ngắn)",
      exampleJa: "警官が道を守ります。",
      exampleVi: "Cảnh sát giữ trật tự đường phố."
   },
   {
      kanji: "おまわりさん",
      hiragana: "おまわりさん",
      pos: "Danh từ",
      meaning: "Chú cảnh sát (thân mật)",
      exampleJa: "おまわりさんに道を聞きます。",
      exampleVi: "Hỏi đường chú cảnh sát."
   },
   {
      kanji: "交番",
      hiragana: "こうばん",
      pos: "Danh từ",
      meaning: "Trạm cảnh sát nhỏ",
      exampleJa: "交番は駅の前にあります。",
      exampleVi: "Trạm cảnh sát nhỏ ở trước ga."
   },
   {
      kanji: "犯人",
      hiragana: "はんにん",
      pos: "Danh từ",
      meaning: "Tội phạm, hung thủ",
      exampleJa: "犯人はまだ捕まりません。",
      exampleVi: "Hung thủ vẫn chưa bị bắt."
   },
   {
      kanji: "小銭",
      hiragana: "こぜに",
      pos: "Danh từ",
      meaning: "Tiền lẻ",
      exampleJa: "小銭を持っていますか。",
      exampleVi: "Bạn có mang tiền lẻ không?"
   },
   {
      kanji: "円玉",
      hiragana: "えんだま",
      pos: "Danh từ",
      meaning: "Đồng xu yên",
      exampleJa: "百円玉を持っています。",
      exampleVi: "Tôi có đồng xu 100 yên."
   },
   {
      kanji: "硬貨",
      hiragana: "こうか",
      pos: "Danh từ",
      meaning: "Tiền xu",
      exampleJa: "硬貨を集めています。",
      exampleVi: "Tôi sưu tầm tiền xu."
   },
   {
      kanji: "お札",
      hiragana: "おさつ",
      pos: "Danh từ",
      meaning: "Tiền giấy",
      exampleJa: "お札で払います。",
      exampleVi: "Trả bằng tiền giấy."
   },
   {
      kanji: "細かいお金",
      hiragana: "こまかいおかね",
      pos: "Danh từ",
      meaning: "Tiền lẻ",
      exampleJa: "細かいお金がありますか。",
      exampleVi: "Bạn có tiền lẻ không?"
   },
   {
      kanji: "ごちそう",
      hiragana: "ごちそう",
      pos: "Danh từ",
      meaning: "Bữa tiệc, món ăn ngon",
      exampleJa: "夕食はごちそうでした。",
      exampleVi: "Bữa tối thật là thịnh soạn."
   },
   {
      kanji: "ごちそうになる",
      hiragana: "ごちそうになる",
      pos: "Động từ",
      meaning: "Được mời ăn",
      exampleJa: "友達にごちそうになりました。",
      exampleVi: "Tôi đã được bạn mời ăn."
   },
   {
      kanji: "作者",
      hiragana: "さくしゃ",
      pos: "Danh từ",
      meaning: "Tác giả (nói chung)",
      exampleJa: "この小説の作者は有名です。",
      exampleVi: "Tác giả của tiểu thuyết này rất nổi tiếng."
   },
   {
      kanji: "筆者",
      hiragana: "ひっしゃ",
      pos: "Danh từ",
      meaning: "Người viết, tác giả (bài báo, văn chương)",
      exampleJa: "筆者の意見が書かれています。",
      exampleVi: "Ý kiến của tác giả được viết ra."
   },
   {
      kanji: "著者",
      hiragana: "ちょしゃ",
      pos: "Danh từ",
      meaning: "Tác giả (chuyên dùng cho sách)",
      exampleJa: "著者に質問します。",
      exampleVi: "Hỏi tác giả."
   },
   {
      kanji: "作品",
      hiragana: "さくひん",
      pos: "Danh từ",
      meaning: "Tác phẩm",
      exampleJa: "美術館で有名な作品を見ました。",
      exampleVi: "Tôi đã xem tác phẩm nổi tiếng ở bảo tàng mỹ thuật."
   },
   {
      kanji: "文学作品",
      hiragana: "ぶんがくさくひん",
      pos: "Danh từ",
      meaning: "Tác phẩm văn học",
      exampleJa: "この文学作品は古いです。",
      exampleVi: "Tác phẩm văn học này cổ xưa."
   },
   {
      kanji: "芸術作品",
      hiragana: "げいじゅつさくひん",
      pos: "Danh từ",
      meaning: "Tác phẩm nghệ thuật",
      exampleJa: "芸術作品を展示します。",
      exampleVi: "Trưng bày tác phẩm nghệ thuật."
   },
   {
      kanji: "制服",
      hiragana: "せいふく",
      pos: "Danh từ",
      meaning: "Đồng phục",
      exampleJa: "学生は制服を着ます。",
      exampleVi: "Học sinh mặc đồng phục."
   },
   {
      kanji: "私服",
      hiragana: "しふく",
      pos: "Danh từ",
      meaning: "Quần áo thường, đồ riêng",
      exampleJa: "休日は私服で出かけます。",
      exampleVi: "Ngày nghỉ tôi ra ngoài bằng đồ thường."
   },
   {
      kanji: "ユニフォーム",
      hiragana: "ゆにふぉーむ",
      pos: "Danh từ",
      meaning: "Đồng phục (thể thao, công việc)",
      exampleJa: "選手はユニフォームを着ています。",
      exampleVi: "Cầu thủ mặc đồng phục thi đấu."
   },
   {
      kanji: "洗剤",
      hiragana: "せんざい",
      pos: "Danh từ",
      meaning: "Chất tẩy rửa",
      exampleJa: "洗剤で服を洗います。",
      exampleVi: "Giặt quần áo bằng chất tẩy rửa."
   },
   {
      kanji: "合成洗剤",
      hiragana: "ごうせいせんざい",
      pos: "Danh từ",
      meaning: "Bột giặt tổng hợp",
      exampleJa: "合成洗剤を買いました。",
      exampleVi: "Tôi đã mua bột giặt tổng hợp."
   },
   {
      kanji: "せっけん",
      hiragana: "せっけん",
      pos: "Danh từ",
      meaning: "Xà phòng",
      exampleJa: "せっけんで手を洗います。",
      exampleVi: "Rửa tay bằng xà phòng."
   },
   {
      kanji: "底",
      hiragana: "そこ",
      pos: "Danh từ",
      meaning: "Đáy",
      exampleJa: "川の底が見えます。",
      exampleVi: "Có thể nhìn thấy đáy sông."
   },
   {
      kanji: "地下",
      hiragana: "ちか",
      pos: "Danh từ",
      meaning: "Dưới đất, tầng hầm",
      exampleJa: "地下に駐車場があります。",
      exampleVi: "Dưới tầng hầm có bãi đỗ xe."
   },
   {
      kanji: "地下鉄",
      hiragana: "ちかてつ",
      pos: "Danh từ",
      meaning: "Tàu điện ngầm",
      exampleJa: "地下鉄で通学します。",
      exampleVi: "Đi học bằng tàu điện ngầm."
   },
   {
      kanji: "地下道",
      hiragana: "ちかどう",
      pos: "Danh từ",
      meaning: "Đường hầm đi bộ",
      exampleJa: "地下道を通ります。",
      exampleVi: "Đi qua đường hầm."
   },
   {
      kanji: "地下街",
      hiragana: "ちかがい",
      pos: "Danh từ",
      meaning: "Khu phố ngầm",
      exampleJa: "地下街で買い物します。",
      exampleVi: "Mua sắm ở khu phố ngầm."
   },
   {
      kanji: "地上",
      hiragana: "ちじょう",
      pos: "Danh từ",
      meaning: "Mặt đất, trên mặt đất",
      exampleJa: "地上に出ます。",
      exampleVi: "Đi lên mặt đất."
   },
   {
      kanji: "寺",
      hiragana: "てら",
      pos: "Danh từ",
      meaning: "Chùa",
      exampleJa: "古い寺を見学しました。",
      exampleVi: "Tôi đã tham quan ngôi chùa cổ."
   },
   {
      kanji: "神社",
      hiragana: "じんじゃ",
      pos: "Danh từ",
      meaning: "Đền Thần đạo",
      exampleJa: "神社でお参りします。",
      exampleVi: "Đi lễ ở đền Thần đạo."
   },
   {
      kanji: "墓",
      hiragana: "はか",
      pos: "Danh từ",
      meaning: "Mộ",
      exampleJa: "墓を掃除します。",
      exampleVi: "Dọn dẹp mộ."
   },
   {
      kanji: "道路",
      hiragana: "どうろ",
      pos: "Danh từ",
      meaning: "Đường sá",
      exampleJa: "道路が広いです。",
      exampleVi: "Đường rộng."
   },
   {
      kanji: "高速道路",
      hiragana: "こうそくどうろ",
      pos: "Danh từ",
      meaning: "Đường cao tốc",
      exampleJa: "高速道路を走ります。",
      exampleVi: "Chạy trên đường cao tốc."
   },
   {
      kanji: "道",
      hiragana: "みち",
      pos: "Danh từ",
      meaning: "Con đường",
      exampleJa: "この道をまっすぐ行きます。",
      exampleVi: "Đi thẳng con đường này."
   },
   {
      kanji: "坂",
      hiragana: "さか",
      pos: "Danh từ",
      meaning: "Dốc",
      exampleJa: "坂を上ります。",
      exampleVi: "Leo dốc."
   },
   {
      kanji: "急な坂",
      hiragana: "きゅうなさか",
      pos: "Cụm từ",
      meaning: "Dốc đứng",
      exampleJa: "急な坂を下りるのは危ないです。",
      exampleVi: "Xuống dốc đứng thì nguy hiểm."
   },
   {
      kanji: "緩やかな坂",
      hiragana: "ゆるやかなさか",
      pos: "Cụm từ",
      meaning: "Dốc thoai thoải",
      exampleJa: "緩やかな坂を歩きます。",
      exampleVi: "Đi bộ trên dốc thoai thoải."
   },
   {
      kanji: "坂を上る",
      hiragana: "さかをのぼる",
      pos: "Động từ",
      meaning: "Leo dốc",
      exampleJa: "自転車で坂を上ります。",
      exampleVi: "Đạp xe lên dốc."
   },
   {
      kanji: "坂を下る",
      hiragana: "さかをくだる",
      pos: "Động từ",
      meaning: "Xuống dốc",
      exampleJa: "バスが坂を下ります。",
      exampleVi: "Xe buýt xuống dốc."
   },
   {
      kanji: "煙",
      hiragana: "けむり",
      pos: "Danh từ",
      meaning: "Khói",
      exampleJa: "工場から煙が出ています。",
      exampleVi: "Khói bốc ra từ nhà máy."
   },
   {
      kanji: "湯気",
      hiragana: "ゆげ",
      pos: "Danh từ",
      meaning: "Hơi nước, hơi nóng",
      exampleJa: "お風呂から湯気が出ています。",
      exampleVi: "Hơi nóng bốc lên từ bồn tắm."
   },
   {
      kanji: "灰",
      hiragana: "はい",
      pos: "Danh từ",
      meaning: "Tro",
      exampleJa: "灰が残りました。",
      exampleVi: "Còn lại tro."
   },
   {
      kanji: "灰皿",
      hiragana: "はいざら",
      pos: "Danh từ",
      meaning: "Gạt tàn thuốc",
      exampleJa: "灰皿に吸い殻を入れます。",
      exampleVi: "Bỏ tàn thuốc vào gạt tàn."
   },
   {
      kanji: "灰色",
      hiragana: "はいいろ",
      pos: "Danh từ",
      meaning: "Màu xám",
      exampleJa: "灰色の雲が広がっています。",
      exampleVi: "Mây xám bao phủ."
   },
   {
      kanji: "判",
      hiragana: "はん",
      pos: "Danh từ",
      meaning: "Con dấu",
      exampleJa: "判を押してください。",
      exampleVi: "Hãy đóng dấu."
   },
   {
      kanji: "判を押す",
      hiragana: "はんをおす",
      pos: "Động từ",
      meaning: "Đóng dấu",
      exampleJa: "書類に判を押しました。",
      exampleVi: "Đã đóng dấu vào tài liệu."
   },
   {
      kanji: "判をつく",
      hiragana: "はんをつく",
      pos: "Động từ",
      meaning: "Đóng dấu",
      exampleJa: "契約書に判をつきます。",
      exampleVi: "Đóng dấu vào hợp đồng."
   },
   {
      kanji: "はんこ",
      hiragana: "はんこ",
      pos: "Danh từ",
      meaning: "Con dấu (thông dụng)",
      exampleJa: "はんこを持っていますか。",
      exampleVi: "Bạn có mang con dấu không?"
   },
   {
      kanji: "印",
      hiragana: "いん",
      pos: "Danh từ",
      meaning: "Dấu, con dấu",
      exampleJa: "重要な書類に印を押します。",
      exampleVi: "Đóng dấu vào tài liệu quan trọng."
   },
   {
      kanji: "印鑑",
      hiragana: "いんかん",
      pos: "Danh từ",
      meaning: "Con dấu (dùng chính thức)",
      exampleJa: "銀行で印鑑が必要です。",
      exampleVi: "Ở ngân hàng cần con dấu."
   },
   {
      kanji: "名刺",
      hiragana: "めいし",
      pos: "Danh từ",
      meaning: "Danh thiếp",
      exampleJa: "名刺を交換しました。",
      exampleVi: "Đã trao đổi danh thiếp."
   },
   {
      kanji: "名刺交換",
      hiragana: "めいしこうかん",
      pos: "Danh từ/Động từ",
      meaning: "Trao đổi danh thiếp",
      exampleJa: "会議で名刺交換をしました。",
      exampleVi: "Đã trao đổi danh thiếp trong cuộc họp."
   },
   {
      kanji: "免許",
      hiragana: "めんきょ",
      pos: "Danh từ",
      meaning: "Giấy phép",
      exampleJa: "免許を持っています。",
      exampleVi: "Tôi có giấy phép."
   },
   {
      kanji: "免許を取る",
      hiragana: "めんきょをとる",
      pos: "Động từ",
      meaning: "Lấy bằng, nhận giấy phép",
      exampleJa: "運転免許を取りました。",
      exampleVi: "Tôi đã lấy bằng lái xe."
   },
   {
      kanji: "免許を与える",
      hiragana: "めんきょをあたえる",
      pos: "Động từ",
      meaning: "Cấp giấy phép",
      exampleJa: "政府が免許を与えます。",
      exampleVi: "Chính phủ cấp giấy phép."
   },
   {
      kanji: "運転免許",
      hiragana: "うんてんめんきょ",
      pos: "Danh từ",
      meaning: "Bằng lái xe",
      exampleJa: "運転免許を更新します。",
      exampleVi: "Gia hạn bằng lái xe."
   },
   {
      kanji: "教員免許",
      hiragana: "きょういんめんきょ",
      pos: "Danh từ",
      meaning: "Chứng chỉ giáo viên",
      exampleJa: "教員免許を持っています。",
      exampleVi: "Tôi có chứng chỉ giáo viên."
   },
   {
      kanji: "医師免許",
      hiragana: "いしめんきょ",
      pos: "Danh từ",
      meaning: "Chứng chỉ bác sĩ",
      exampleJa: "医師免許が必要です。",
      exampleVi: "Cần có chứng chỉ bác sĩ."
   },
   {
      kanji: "免許証",
      hiragana: "めんきょしょう",
      pos: "Danh từ",
      meaning: "Giấy phép, bằng (thường là bằng lái xe)",
      exampleJa: "免許証を見せてください。",
      exampleVi: "Hãy cho xem giấy phép lái xe."
   },
   {
      kanji: "多く",
      hiragana: "おおく",
      pos: "Trạng từ/Danh từ",
      meaning: "Nhiều",
      exampleJa: "多くの人が集まりました。",
      exampleVi: "Nhiều người đã tụ tập."
   },
   {
      kanji: "遠く",
      hiragana: "とおく",
      pos: "Danh từ/Trạng từ",
      meaning: "Xa",
      exampleJa: "遠くに山が見えます。",
      exampleVi: "Có thể nhìn thấy núi ở xa."
   },
   {
      kanji: "前半",
      hiragana: "ぜんはん",
      pos: "Danh từ",
      meaning: "Nửa đầu",
      exampleJa: "試合の前半は静かでした。",
      exampleVi: "Hiệp đầu của trận đấu khá yên tĩnh."
   },
   {
      kanji: "後半",
      hiragana: "こうはん",
      pos: "Danh từ",
      meaning: "Nửa sau",
      exampleJa: "映画の後半が面白かったです。",
      exampleVi: "Nửa sau của bộ phim rất hay."
   },
   {
      kanji: "退屈",
      hiragana: "たいくつ",
      pos: "Danh từ/Tính từ-na",
      meaning: "Buồn chán, nhàm chán",
      exampleJa: "授業が退屈でした。",
      exampleVi: "Tiết học thật nhàm chán."
   },
   {
      kanji: "最高",
      hiragana: "さいこう",
      pos: "Danh từ / Tính từ-na",
      meaning: "Cao nhất / Tuyệt vời",
      exampleJa: "今日は最高の気分です。",
      exampleVi: "Hôm nay tôi cảm thấy tuyệt vời nhất."
   },
   {
      kanji: "最低",
      hiragana: "さいてい",
      pos: "Danh từ / Tính từ-na",
      meaning: "Thấp nhất / Tồi tệ",
      exampleJa: "彼の態度は最低だ。",
      exampleVi: "Thái độ của anh ta thật tệ."
   },
   {
      kanji: "最初",
      hiragana: "さいしょ",
      pos: "Danh từ",
      meaning: "Lúc đầu, ban đầu",
      exampleJa: "最初に自己紹介をしてください。",
      exampleVi: "Hãy giới thiệu bản thân trước tiên."
   },
   {
      kanji: "最後",
      hiragana: "さいご",
      pos: "Danh từ",
      meaning: "Cuối cùng",
      exampleJa: "最後まで頑張ります。",
      exampleVi: "Tôi sẽ cố gắng đến cùng."
   },
   {
      kanji: "自動",
      hiragana: "じどう",
      pos: "Danh từ",
      meaning: "Tự động",
      exampleJa: "ドアが自動で開きます。",
      exampleVi: "Cửa tự động mở."
   },
   {
      kanji: "自動ドア",
      hiragana: "じどうドア",
      pos: "Danh từ",
      meaning: "Cửa tự động",
      exampleJa: "スーパーの入り口は自動ドアです。",
      exampleVi: "Lối vào siêu thị là cửa tự động."
   },
   {
      kanji: "自動販売機",
      hiragana: "じどうはんばいき",
      pos: "Danh từ",
      meaning: "Máy bán hàng tự động",
      exampleJa: "駅に自動販売機があります。",
      exampleVi: "Ở ga có máy bán hàng tự động."
   },
   {
      kanji: "全自動",
      hiragana: "ぜんじどう",
      pos: "Danh từ / Tính từ-na",
      meaning: "Hoàn toàn tự động",
      exampleJa: "全自動の洗濯機を買いました。",
      exampleVi: "Tôi đã mua máy giặt hoàn toàn tự động."
   },
   {
      kanji: "自動的な",
      hiragana: "じどうてきな",
      pos: "Tính từ-na",
      meaning: "Có tính tự động",
      exampleJa: "問題は自動的に解決されます。",
      exampleVi: "Vấn đề sẽ được giải quyết tự động."
   },
   {
      kanji: "手動",
      hiragana: "しゅどう",
      pos: "Danh từ",
      meaning: "Thủ công",
      exampleJa: "この機械は手動でも使えます。",
      exampleVi: "Máy này cũng có thể dùng thủ công."
   },
   {
      kanji: "種類",
      hiragana: "しゅるい",
      pos: "Danh từ",
      meaning: "Loại, chủng loại",
      exampleJa: "いろいろな種類の花があります。",
      exampleVi: "Có nhiều loại hoa khác nhau."
   },
   {
      kanji: "種類が多い",
      hiragana: "しゅるいがおおい",
      pos: "Cụm từ",
      meaning: "Nhiều loại",
      exampleJa: "この店は種類が多いです。",
      exampleVi: "Cửa hàng này có nhiều loại."
   },
   {
      kanji: "種類が少ない",
      hiragana: "しゅるいがすくない",
      pos: "Cụm từ",
      meaning: "Ít loại",
      exampleJa: "この市場は種類が少ないです。",
      exampleVi: "Chợ này có ít loại hàng."
   },
   {
      kanji: "種類が豊富だ",
      hiragana: "しゅるいがほうふだ",
      pos: "Cụm từ",
      meaning: "Phong phú, đa dạng",
      exampleJa: "このレストランはメニューの種類が豊富です。",
      exampleVi: "Nhà hàng này có thực đơn phong phú."
   },
   {
      kanji: "種",
      hiragana: "たね",
      pos: "Danh từ",
      meaning: "Hạt giống / Chủng loại",
      exampleJa: "この花の種をまきます。",
      exampleVi: "Tôi gieo hạt giống của loài hoa này."
   },
   {
      kanji: "性格",
      hiragana: "せいかく",
      pos: "Danh từ",
      meaning: "Tính cách",
      exampleJa: "彼は性格が明るいです。",
      exampleVi: "Anh ấy có tính cách vui vẻ."
   },
   {
      kanji: "性格がいい",
      hiragana: "せいかくがいい",
      pos: "Cụm từ",
      meaning: "Tính cách tốt",
      exampleJa: "彼女は性格がいいので友達が多いです。",
      exampleVi: "Vì cô ấy có tính cách tốt nên có nhiều bạn."
   },
   {
      kanji: "性格が悪い",
      hiragana: "せいかくがわるい",
      pos: "Cụm từ",
      meaning: "Tính cách xấu",
      exampleJa: "彼は性格が悪いと言われています。",
      exampleVi: "Người ta nói anh ấy có tính cách xấu."
   },
   {
      kanji: "性質",
      hiragana: "せいしつ",
      pos: "Danh từ",
      meaning: "Tính chất, bản chất",
      exampleJa: "水は液体という性質を持っています。",
      exampleVi: "Nước có tính chất là chất lỏng."
   },
   {
      kanji: "順番",
      hiragana: "じゅんばん",
      pos: "Danh từ",
      meaning: "Thứ tự, lượt",
      exampleJa: "順番を守ってください。",
      exampleVi: "Hãy tuân thủ thứ tự."
   },
   {
      kanji: "順番がくる",
      hiragana: "じゅんばんがくる",
      pos: "Cụm từ",
      meaning: "Đến lượt",
      exampleJa: "やっと私の順番がきました。",
      exampleVi: "Cuối cùng cũng đến lượt tôi."
   },
   {
      kanji: "順番を待つ",
      hiragana: "じゅんばんをまつ",
      pos: "Cụm từ",
      meaning: "Chờ đến lượt",
      exampleJa: "多くの人が順番を待っています。",
      exampleVi: "Nhiều người đang chờ đến lượt."
   },
   {
      kanji: "順",
      hiragana: "じゅん",
      pos: "Danh từ",
      meaning: "Thứ tự",
      exampleJa: "番号順に並んでください。",
      exampleVi: "Hãy xếp theo thứ tự số."
   },
   {
      kanji: "順序",
      hiragana: "じゅんじょ",
      pos: "Danh từ",
      meaning: "Trình tự",
      exampleJa: "順序を間違えないでください。",
      exampleVi: "Đừng nhầm lẫn trình tự."
   },
   {
      kanji: "番",
      hiragana: "ばん",
      pos: "Danh từ",
      meaning: "Số, lượt",
      exampleJa: "私の番はまだです。",
      exampleVi: "Chưa đến lượt tôi."
   },
   {
      kanji: "番がくる",
      hiragana: "ばんがくる",
      pos: "Cụm từ",
      meaning: "Đến lượt",
      exampleJa: "やっと自分の番がきた。",
      exampleVi: "Cuối cùng cũng đến lượt mình."
   },
   {
      kanji: "番を待つ",
      hiragana: "ばんをまつ",
      pos: "Cụm từ",
      meaning: "Chờ lượt",
      exampleJa: "病院で番を待ちます。",
      exampleVi: "Tôi chờ lượt ở bệnh viện."
   },
   {
      kanji: "番をする",
      hiragana: "ばんをする",
      pos: "Cụm từ",
      meaning: "Canh giữ, trông coi",
      exampleJa: "子供に留守番をさせます。",
      exampleVi: "Tôi để con trông nhà."
   },
   {
      kanji: "留守番",
      hiragana: "るすばん",
      pos: "Danh từ",
      meaning: "Việc trông nhà",
      exampleJa: "弟は留守番をしています。",
      exampleVi: "Em trai tôi đang trông nhà."
   },
   {
      kanji: "方法",
      hiragana: "ほうほう",
      pos: "Danh từ",
      meaning: "Phương pháp, cách làm",
      exampleJa: "いい方法を考えましょう。",
      exampleVi: "Hãy nghĩ ra một cách tốt đi."
   },
   {
      kanji: "方法がある",
      hiragana: "ほうほうがある",
      pos: "Cụm từ",
      meaning: "Có cách",
      exampleJa: "まだ方法があります。",
      exampleVi: "Vẫn còn cách."
   },
   {
      kanji: "方法がない",
      hiragana: "ほうほうがない",
      pos: "Cụm từ",
      meaning: "Không có cách",
      exampleJa: "もう方法がありません。",
      exampleVi: "Không còn cách nào nữa."
   },
   {
      kanji: "手段",
      hiragana: "しゅだん",
      pos: "Danh từ",
      meaning: "Phương tiện, cách thức",
      exampleJa: "交通手段は何がありますか。",
      exampleVi: "Có những phương tiện giao thông nào?"
   },
   {
      kanji: "製品",
      hiragana: "せいひん",
      pos: "Danh từ",
      meaning: "Sản phẩm",
      exampleJa: "この工場では新しい製品を作っています。",
      exampleVi: "Nhà máy này đang sản xuất sản phẩm mới."
   },
   {
      kanji: "電気製品",
      hiragana: "でんきせいひん",
      pos: "Danh từ",
      meaning: "Đồ điện",
      exampleJa: "電気製品は生活に欠かせません。",
      exampleVi: "Đồ điện là thứ không thể thiếu trong cuộc sống."
   },
   {
      kanji: "家電製品",
      hiragana: "かでんせいひん",
      pos: "Danh từ",
      meaning: "Đồ điện gia dụng",
      exampleJa: "家電製品を買い替えました。",
      exampleVi: "Tôi đã mua thay mới đồ điện gia dụng."
   },
   {
      kanji: "プラスチック製品",
      hiragana: "プラスチックせいひん",
      pos: "Danh từ",
      meaning: "Sản phẩm nhựa",
      exampleJa: "この店はプラスチック製品を売っています。",
      exampleVi: "Cửa hàng này bán sản phẩm nhựa."
   },
   {
      kanji: "日本製",
      hiragana: "にほんせい",
      pos: "Danh từ",
      meaning: "Hàng sản xuất tại Nhật",
      exampleJa: "この時計は日本製です。",
      exampleVi: "Chiếc đồng hồ này là hàng Nhật."
   },
   {
      kanji: "プラスチック製",
      hiragana: "プラスチックせい",
      pos: "Danh từ",
      meaning: "Chế tạo từ nhựa",
      exampleJa: "このコップはプラスチック製です。",
      exampleVi: "Cái cốc này làm bằng nhựa."
   },
   {
      kanji: "値上がり",
      hiragana: "ねあがり",
      pos: "Danh từ",
      meaning: "Sự tăng giá",
      exampleJa: "ガソリンが値上がりしました。",
      exampleVi: "Giá xăng đã tăng."
   },
   {
      kanji: "値下がり",
      hiragana: "ねさがり",
      pos: "Danh từ",
      meaning: "Sự giảm giá",
      exampleJa: "野菜の値段が値下がりしました。",
      exampleVi: "Giá rau đã giảm."
   },
   {
      kanji: "値上げ",
      hiragana: "ねあげ",
      pos: "Danh từ",
      meaning: "Việc tăng giá",
      exampleJa: "電気料金が値上げされました。",
      exampleVi: "Tiền điện đã bị tăng."
   },
   {
      kanji: "値下げ",
      hiragana: "ねさげ",
      pos: "Danh từ",
      meaning: "Việc giảm giá",
      exampleJa: "この店は値下げセールをしています。",
      exampleVi: "Cửa hàng này đang giảm giá."
   },
   {
      kanji: "生",
      hiragana: "なま",
      pos: "Danh từ / Tính từ",
      meaning: "Tươi, sống",
      exampleJa: "生の魚を食べます。",
      exampleVi: "Tôi ăn cá sống."
   },
   {
      kanji: "生野菜",
      hiragana: "なまやさい",
      pos: "Danh từ",
      meaning: "Rau sống",
      exampleJa: "生野菜をサラダにします。",
      exampleVi: "Dùng rau sống làm salad."
   },
   {
      kanji: "生魚",
      hiragana: "なまざかな",
      pos: "Danh từ",
      meaning: "Cá sống",
      exampleJa: "寿司は生魚を使います。",
      exampleVi: "Sushi dùng cá sống."
   },
   {
      kanji: "生肉",
      hiragana: "なまにく",
      pos: "Danh từ",
      meaning: "Thịt sống",
      exampleJa: "生肉を冷蔵庫に入れてください。",
      exampleVi: "Hãy cho thịt sống vào tủ lạnh."
   },
   {
      kanji: "生物",
      hiragana: "せいぶつ",
      pos: "Danh từ",
      meaning: "Sinh vật",
      exampleJa: "海には多くの生物がいます。",
      exampleVi: "Trong biển có nhiều sinh vật."
   },
   {
      kanji: "生ビール",
      hiragana: "なまビール",
      pos: "Danh từ",
      meaning: "Bia tươi",
      exampleJa: "居酒屋で生ビールを飲みました。",
      exampleVi: "Tôi đã uống bia tươi ở quán nhậu."
   },
   {
      kanji: "生ごみ",
      hiragana: "なまごみ",
      pos: "Danh từ",
      meaning: "Rác thải hữu cơ, rác nhà bếp",
      exampleJa: "生ごみを袋に入れて出してください。",
      exampleVi: "Hãy bỏ rác nhà bếp vào túi rồi mang ra ngoài."
   },
   {
      kanji: "渇く",
      hiragana: "かわく",
      pos: "Động từ",
      meaning: "Khát",
      exampleJa: "水を飲まないと喉が渇きます。",
      exampleVi: "Nếu không uống nước thì sẽ khát."
   },
   {
      kanji: "嗅ぐ",
      hiragana: "かぐ",
      pos: "Động từ",
      meaning: "Ngửi",
      exampleJa: "花のにおいを嗅ぎました。",
      exampleVi: "Tôi đã ngửi mùi hoa."
   },
   {
      kanji: "叩く",
      hiragana: "たたく",
      pos: "Động từ",
      meaning: "Đánh, gõ, vỗ",
      exampleJa: "子どもがおもちゃを叩いています。",
      exampleVi: "Đứa trẻ đang gõ đồ chơi."
   },
   {
      kanji: "殴る",
      hiragana: "なぐる",
      pos: "Động từ",
      meaning: "Đấm, đánh",
      exampleJa: "彼は壁を殴りました。",
      exampleVi: "Anh ấy đã đấm vào tường."
   },
   {
      kanji: "ける",
      hiragana: "ける",
      pos: "Động từ",
      meaning: "Đá",
      exampleJa: "ボールを強くけりました。",
      exampleVi: "Tôi đã đá quả bóng mạnh."
   },
   {
      kanji: "抱く",
      hiragana: "だく",
      pos: "Động từ",
      meaning: "Ôm",
      exampleJa: "母親が赤ちゃんを抱いています。",
      exampleVi: "Người mẹ đang ôm em bé."
   },
   {
      kanji: "倒れる",
      hiragana: "たおれる",
      pos: "Động từ",
      meaning: "Ngã, đổ, gục",
      exampleJa: "地震で木が倒れました。",
      exampleVi: "Cái cây đã đổ vì động đất."
   },
   {
      kanji: "倒す",
      hiragana: "たおす",
      pos: "Động từ",
      meaning: "Làm đổ, hạ gục",
      exampleJa: "風で花瓶を倒しました。",
      exampleVi: "Do gió tôi đã làm đổ bình hoa."
   },
   {
      kanji: "起きる",
      hiragana: "おきる",
      pos: "Động từ",
      meaning: "Thức dậy / xảy ra",
      exampleJa: "毎朝7時に起きます。",
      exampleVi: "Mỗi sáng tôi thức dậy lúc 7 giờ."
   },
   {
      kanji: "起こる",
      hiragana: "おこる",
      pos: "Động từ",
      meaning: "Xảy ra",
      exampleJa: "昨日、大きな事故が起こりました。",
      exampleVi: "Hôm qua đã xảy ra một vụ tai nạn lớn."
   },
   {
      kanji: "起こす",
      hiragana: "おこす",
      pos: "Động từ",
      meaning: "Đánh thức / gây ra",
      exampleJa: "母が私を起こしてくれました。",
      exampleVi: "Mẹ đã đánh thức tôi."
   },
   {
      kanji: "尋ねる",
      hiragana: "たずねる",
      pos: "Động từ",
      meaning: "Hỏi, thăm",
      exampleJa: "道を尋ねました。",
      exampleVi: "Tôi đã hỏi đường."
   },
   {
      kanji: "呼ぶ",
      hiragana: "よぶ",
      pos: "Động từ",
      meaning: "Gọi, mời",
      exampleJa: "友達を呼んでパーティーをします。",
      exampleVi: "Tôi mời bạn bè và tổ chức tiệc."
   },
   {
      kanji: "叫ぶ",
      hiragana: "さけぶ",
      pos: "Động từ",
      meaning: "Kêu, hét",
      exampleJa: "大声で叫びました。",
      exampleVi: "Tôi đã hét to."
   },
   {
      kanji: "叫び声",
      hiragana: "さけびごえ",
      pos: "Danh từ",
      meaning: "Tiếng hét",
      exampleJa: "遠くから叫び声が聞こえます。",
      exampleVi: "Có thể nghe thấy tiếng hét từ xa."
   },
   {
      kanji: "黙る",
      hiragana: "だまる",
      pos: "Động từ",
      meaning: "Im lặng",
      exampleJa: "先生の前で黙りました。",
      exampleVi: "Tôi đã im lặng trước mặt thầy giáo."
   },
   {
      kanji: "飼う",
      hiragana: "かう",
      pos: "Động từ",
      meaning: "Nuôi (thú)",
      exampleJa: "犬を飼っています。",
      exampleVi: "Tôi đang nuôi một con chó."
   },
   {
      kanji: "数える",
      hiragana: "かぞえる",
      pos: "Động từ",
      meaning: "Đếm",
      exampleJa: "お金を数えました。",
      exampleVi: "Tôi đã đếm tiền."
   },
   {
      kanji: "乾く",
      hiragana: "かわく",
      pos: "Động từ",
      meaning: "Khô",
      exampleJa: "洗濯物が乾きました。",
      exampleVi: "Quần áo đã khô."
   },
   {
      kanji: "乾きが速い",
      hiragana: "かわきがはやい",
      pos: "Cụm từ",
      meaning: "Khô nhanh",
      exampleJa: "このタオルは乾きが速いです。",
      exampleVi: "Cái khăn này khô nhanh."
   },
   {
      kanji: "乾きが遅い",
      hiragana: "かわきがおそい",
      pos: "Cụm từ",
      meaning: "Khô chậm",
      exampleJa: "冬は洗濯物の乾きが遅いです。",
      exampleVi: "Mùa đông quần áo phơi khô chậm."
   },
   {
      kanji: "乾かす",
      hiragana: "かわかす",
      pos: "Động từ",
      meaning: "Làm khô",
      exampleJa: "ドライヤーで髪を乾かします。",
      exampleVi: "Tôi làm khô tóc bằng máy sấy."
   },
   {
      kanji: "畳む",
      hiragana: "たたむ",
      pos: "Động từ",
      meaning: "Gấp, xếp",
      exampleJa: "洗濯物を畳みました。",
      exampleVi: "Tôi đã gấp quần áo."
   },
   {
      kanji: "誘う",
      hiragana: "さそう",
      pos: "Động từ",
      meaning: "Mời, rủ",
      exampleJa: "友達を映画に誘いました。",
      exampleVi: "Tôi đã rủ bạn đi xem phim."
   },
   {
      kanji: "誘いを受ける",
      hiragana: "さそいをうける",
      pos: "Cụm từ",
      meaning: "Nhận lời mời",
      exampleJa: "友達の誘いを受けました。",
      exampleVi: "Tôi đã nhận lời mời của bạn."
   },
   {
      kanji: "誘いを断る",
      hiragana: "さそいをことわる",
      pos: "Cụm từ",
      meaning: "Từ chối lời mời",
      exampleJa: "彼の誘いを断りました。",
      exampleVi: "Tôi đã từ chối lời mời của anh ấy."
   },
   {
      kanji: "おごる",
      hiragana: "おごる",
      pos: "Động từ",
      meaning: "Bao, khao",
      exampleJa: "今日は私が昼ご飯をおごります。",
      exampleVi: "Hôm nay tôi bao bữa trưa."
   },
   {
      kanji: "おごり",
      hiragana: "おごり",
      pos: "Danh từ",
      meaning: "Sự bao, khao",
      exampleJa: "この飲み物は彼のおごりです。",
      exampleVi: "Đồ uống này là anh ấy khao."
   },
   {
      kanji: "預かる",
      hiragana: "あずかる",
      pos: "Động từ",
      meaning: "Giữ hộ, trông hộ",
      exampleJa: "荷物を預かりました。",
      exampleVi: "Tôi đã giữ hộ hành lý."
   },
   {
      kanji: "預ける",
      hiragana: "あずける",
      pos: "Động từ",
      meaning: "Gửi, giao phó",
      exampleJa: "子どもを保育園に預けます。",
      exampleVi: "Tôi gửi con ở nhà trẻ."
   },
   {
      kanji: "決まる",
      hiragana: "きまる",
      pos: "Động từ",
      meaning: "Được quyết định",
      exampleJa: "会議の日が決まりました。",
      exampleVi: "Ngày họp đã được quyết định."
   },
   {
      kanji: "決める",
      hiragana: "きめる",
      pos: "Động từ",
      meaning: "Quyết định",
      exampleJa: "進学することを決めました。",
      exampleVi: "Tôi đã quyết định học lên."
   },
   {
      kanji: "写る",
      hiragana: "うつる",
      pos: "Động từ",
      meaning: "Được chụp / hiện ra",
      exampleJa: "写真によく写っています。",
      exampleVi: "Trong ảnh trông rất rõ."
   },
   {
      kanji: "写りがいい",
      hiragana: "うつりがいい",
      pos: "Cụm từ",
      meaning: "Lên hình đẹp",
      exampleJa: "このカメラは写りがいいです。",
      exampleVi: "Cái máy ảnh này chụp đẹp."
   },
   {
      kanji: "写りが悪い",
      hiragana: "うつりがわるい",
      pos: "Cụm từ",
      meaning: "Lên hình xấu",
      exampleJa: "暗い場所では写りが悪いです。",
      exampleVi: "Ở chỗ tối thì chụp xấu."
   },
   {
      kanji: "写す",
      hiragana: "うつす",
      pos: "Động từ",
      meaning: "Chụp, sao chép",
      exampleJa: "ノートを写しました。",
      exampleVi: "Tôi đã chép vở."
   },
   {
      kanji: "思い出す",
      hiragana: "おもいだす",
      pos: "Động từ",
      meaning: "Nhớ lại",
      exampleJa: "学生時代を思い出しました。",
      exampleVi: "Tôi nhớ lại thời học sinh."
   },
   {
      kanji: "教わる",
      hiragana: "おそわる",
      pos: "Động từ",
      meaning: "Được dạy, học hỏi",
      exampleJa: "先生に日本語を教わりました。",
      exampleVi: "Tôi đã được thầy dạy tiếng Nhật."
   },
   {
      kanji: "申し込む",
      hiragana: "もうしこむ",
      pos: "Động từ",
      meaning: "Đăng ký, xin",
      exampleJa: "日本語の試験に申し込みました。",
      exampleVi: "Tôi đã đăng ký kỳ thi tiếng Nhật."
   },
   {
      kanji: "断る",
      hiragana: "ことわる",
      pos: "Động từ",
      meaning: "Từ chối",
      exampleJa: "彼のお願いを断りました。",
      exampleVi: "Tôi đã từ chối lời nhờ của anh ấy."
   },
   {
      kanji: "断りを言う",
      hiragana: "ことわりをいう",
      pos: "Cụm từ",
      meaning: "Nói lời từ chối",
      exampleJa: "丁寧に断りを言いました。",
      exampleVi: "Tôi đã nói lời từ chối một cách lịch sự."
   },
   {
      kanji: "何の断りもない",
      hiragana: "なんのことわりもない",
      pos: "Cụm từ",
      meaning: "Không hề báo trước",
      exampleJa: "彼は何の断りもなく帰りました。",
      exampleVi: "Anh ấy đã về mà không báo trước."
   },
   {
      kanji: "見つかる",
      hiragana: "みつかる",
      pos: "Động từ",
      meaning: "Được tìm thấy",
      exampleJa: "財布が見つかりました。",
      exampleVi: "Cái ví đã được tìm thấy."
   },
   {
      kanji: "見つける",
      hiragana: "みつける",
      pos: "Động từ",
      meaning: "Tìm thấy",
      exampleJa: "新しい仕事を見つけました。",
      exampleVi: "Tôi đã tìm thấy công việc mới."
   },
   {
      kanji: "発見する",
      hiragana: "はっけんする",
      pos: "Động từ",
      meaning: "Phát hiện",
      exampleJa: "新しい星を発見しました。",
      exampleVi: "Tôi đã phát hiện ra một ngôi sao mới."
   },
   {
      kanji: "捕まる",
      hiragana: "つかまる",
      pos: "Động từ",
      meaning: "Bị bắt",
      exampleJa: "泥棒が警察に捕まりました。",
      exampleVi: "Tên trộm đã bị cảnh sát bắt."
   },
   {
      kanji: "捕まえる",
      hiragana: "つかまえる",
      pos: "Động từ",
      meaning: "Bắt, tóm",
      exampleJa: "警察が犯人を捕まえました。",
      exampleVi: "Cảnh sát đã bắt tội phạm."
   },
   {
      kanji: "乗る",
      hiragana: "のる",
      pos: "Động từ",
      meaning: "Lên xe, đi (phương tiện)",
      exampleJa: "バスに乗ります。",
      exampleVi: "Tôi đi xe buýt."
   },
   {
      kanji: "乗せる",
      hiragana: "のせる",
      pos: "Động từ",
      meaning: "Chở, cho lên",
      exampleJa: "子どもを車に乗せました。",
      exampleVi: "Tôi đã cho con lên xe."
   },
   {
      kanji: "降りる",
      hiragana: "おりる",
      pos: "Động từ",
      meaning: "Xuống xe",
      exampleJa: "次の駅で電車を降ります。",
      exampleVi: "Tôi xuống tàu ở ga tiếp theo."
   },
   {
      kanji: "降ろす",
      hiragana: "おろす",
      pos: "Động từ",
      meaning: "Cho xuống, dỡ xuống",
      exampleJa: "タクシーから荷物を降ろしました。",
      exampleVi: "Tôi đã dỡ hành lý từ taxi xuống."
   },
   {
      kanji: "下りる",
      hiragana: "おりる",
      pos: "Động từ",
      meaning: "Xuống (núi, cầu thang), được cấp (giấy phép)",
      exampleJa: "山を下りました。",
      exampleVi: "Tôi đã xuống núi."
   },
   {
      kanji: "上がる",
      hiragana: "あがる",
      pos: "Động từ",
      meaning: "Tăng lên, bước lên",
      exampleJa: "値段が上がりました。",
      exampleVi: "Giá đã tăng lên."
   },
   {
      kanji: "のぼる",
      hiragana: "のぼる",
      pos: "Động từ",
      meaning: "Leo, lên",
      exampleJa: "富士山に登りました。",
      exampleVi: "Tôi đã leo núi Phú Sĩ."
   },
   {
      kanji: "下ろす",
      hiragana: "おろす",
      pos: "Động từ",
      meaning: "Rút (tiền), hạ xuống",
      exampleJa: "銀行でお金を下ろしました。",
      exampleVi: "Tôi đã rút tiền ở ngân hàng."
   },
   {
      kanji: "挙げる",
      hiragana: "あげる",
      pos: "Động từ",
      meaning: "Nâng lên, đưa ra",
      exampleJa: "例を挙げて説明します。",
      exampleVi: "Tôi đưa ra ví dụ để giải thích."
   },
   {
      kanji: "積む",
      hiragana: "つむ",
      pos: "Động từ",
      meaning: "Chất, xếp",
      exampleJa: "トラックに荷物を積みました。",
      exampleVi: "Tôi đã chất hàng lên xe tải."
   },
   {
      kanji: "入れる",
      hiragana: "いれる",
      pos: "Động từ",
      meaning: "Cho vào, bỏ vào",
      exampleJa: "カバンに本を入れました。",
      exampleVi: "Tôi đã bỏ sách vào cặp."
   },
   {
      kanji: "出す",
      hiragana: "だす",
      pos: "Động từ",
      meaning: "Lấy ra, nộp",
      exampleJa: "宿題を出しました。",
      exampleVi: "Tôi đã nộp bài tập."
   },
   {
      kanji: "引き出す",
      hiragana: "ひきだす",
      pos: "Động từ",
      meaning: "Rút ra, kéo ra",
      exampleJa: "銀行からお金を引き出しました。",
      exampleVi: "Tôi đã rút tiền từ ngân hàng."
   },
   {
      kanji: "直る",
      hiragana: "なおる",
      pos: "Động từ",
      meaning: "Được sửa, được chữa",
      exampleJa: "壊れた時計が直りました。",
      exampleVi: "Chiếc đồng hồ hỏng đã được sửa."
   },
   {
      kanji: "直す",
      hiragana: "なおす",
      pos: "Động từ",
      meaning: "Sửa, chữa",
      exampleJa: "パソコンを直しました。",
      exampleVi: "Tôi đã sửa máy tính."
   },
   {
      kanji: "修理する",
      hiragana: "しゅうりする",
      pos: "Động từ",
      meaning: "Sửa chữa",
      exampleJa: "車を修理しました。",
      exampleVi: "Tôi đã sửa xe."
   },
   {
      kanji: "手直し",
      hiragana: "てなおし",
      pos: "Danh từ",
      meaning: "Chỉnh sửa, sửa lại",
      exampleJa: "レポートを少し手直ししました。",
      exampleVi: "Tôi đã chỉnh sửa lại báo cáo một chút."
   },
   {
      kanji: "治る",
      hiragana: "なおる",
      pos: "Động từ",
      meaning: "Khỏi (bệnh), lành",
      exampleJa: "風邪が治りました。",
      exampleVi: "Cảm đã khỏi."
   },
   {
      kanji: "治りが早い",
      hiragana: "なおりがはやい",
      pos: "Cụm từ",
      meaning: "Mau khỏi",
      exampleJa: "若い人は治りが早いです。",
      exampleVi: "Người trẻ thì mau khỏi bệnh."
   },
   {
      kanji: "治りが遅い",
      hiragana: "なおりがおそい",
      pos: "Cụm từ",
      meaning: "Khỏi chậm",
      exampleJa: "この病気は治りが遅いです。",
      exampleVi: "Bệnh này khỏi chậm."
   },
   {
      kanji: "治りが悪い",
      hiragana: "なおりがわるい",
      pos: "Cụm từ",
      meaning: "Khó khỏi, lâu lành",
      exampleJa: "けがの治りが悪いです。",
      exampleVi: "Vết thương này khó lành."
   },
   {
      kanji: "治す",
      hiragana: "なおす",
      pos: "Động từ",
      meaning: "Chữa bệnh, làm khỏi",
      exampleJa: "医者に風邪を治してもらいました。",
      exampleVi: "Tôi đã được bác sĩ chữa cảm."
   },
   {
      kanji: "亡くなる",
      hiragana: "なくなる",
      pos: "Động từ",
      meaning: "chết, mất (cách nói lịch sự)",
      exampleJa: "おじいさんが亡くなりました。",
      exampleVi: "Ông tôi đã mất."
   },
   {
      kanji: "亡くす",
      hiragana: "なくす",
      pos: "Động từ",
      meaning: "mất đi (người thân, bạn bè...)",
      exampleJa: "友だちを事故で亡くしました。",
      exampleVi: "Tôi đã mất bạn vì tai nạn."
   },
   {
      kanji: "生まれる",
      hiragana: "うまれる",
      pos: "Động từ",
      meaning: "được sinh ra",
      exampleJa: "日本で子どもが生まれました。",
      exampleVi: "Con tôi được sinh ra ở Nhật."
   },
   {
      kanji: "産む",
      hiragana: "うむ",
      pos: "Động từ",
      meaning: "sinh, đẻ (dùng cho mẹ)",
      exampleJa: "彼女は元気な赤ちゃんを産みました。",
      exampleVi: "Cô ấy đã sinh một em bé khỏe mạnh."
   },
   {
      kanji: "生む",
      hiragana: "うむ",
      pos: "Động từ",
      meaning: "tạo ra, sinh ra (nghĩa rộng)",
      exampleJa: "新しいアイデアを生む。",
      exampleVi: "Sinh ra ý tưởng mới."
   },
   {
      kanji: "出産",
      hiragana: "しゅっさん",
      pos: "Danh từ / する-Động từ",
      meaning: "sinh nở, sinh con",
      exampleJa: "姉は来月出産します。",
      exampleVi: "Chị tôi sẽ sinh con vào tháng sau."
   },
   {
      kanji: "出会う",
      hiragana: "であう",
      pos: "Động từ",
      meaning: "gặp gỡ (tình cờ)",
      exampleJa: "駅で友だちに出会いました。",
      exampleVi: "Tôi tình cờ gặp bạn ở ga."
   },
   {
      kanji: "出会い",
      hiragana: "であい",
      pos: "Danh từ",
      meaning: "cuộc gặp gỡ",
      exampleJa: "その出会いは私の人生を変えました。",
      exampleVi: "Cuộc gặp gỡ đó đã thay đổi cuộc đời tôi."
   },
   {
      kanji: "訪ねる",
      hiragana: "たずねる",
      pos: "Động từ",
      meaning: "thăm, ghé thăm",
      exampleJa: "先生の家を訪ねました。",
      exampleVi: "Tôi đã đến thăm nhà thầy giáo."
   },
   {
      kanji: "訪問",
      hiragana: "ほうもん",
      pos: "Danh từ / する-Động từ",
      meaning: "sự viếng thăm",
      exampleJa: "社長を訪問しました。",
      exampleVi: "Tôi đã đi thăm giám đốc."
   },
   {
      kanji: "付き合う",
      hiragana: "つきあう",
      pos: "Động từ",
      meaning: "kết giao, hẹn hò, đi cùng",
      exampleJa: "友だちと映画に付き合う。",
      exampleVi: "Tôi đi cùng bạn xem phim."
   },
   {
      kanji: "交際",
      hiragana: "こうさい",
      pos: "Danh từ / する-Động từ",
      meaning: "giao du, hẹn hò",
      exampleJa: "二人は３年前から交際しています。",
      exampleVi: "Hai người đó đã quen nhau từ 3 năm trước."
   },
   {
      kanji: "効く",
      hiragana: "きく",
      pos: "Động từ",
      meaning: "có tác dụng, hiệu quả",
      exampleJa: "この薬は頭痛によく効きます。",
      exampleVi: "Thuốc này rất hiệu quả với đau đầu."
   },
   {
      kanji: "効く目がある",
      hiragana: "きくめがある",
      pos: "Cụm từ",
      meaning: "có tác dụng",
      exampleJa: "この薬は効く目がある。",
      exampleVi: "Thuốc này có hiệu quả."
   },
   {
      kanji: "効く目がない",
      hiragana: "きくめがない",
      pos: "Cụm từ",
      meaning: "không có tác dụng",
      exampleJa: "この薬は効く目がない。",
      exampleVi: "Thuốc này không có hiệu quả."
   },
   {
      kanji: "効く目が強い",
      hiragana: "きくめがつよい",
      pos: "Cụm từ",
      meaning: "tác dụng mạnh",
      exampleJa: "この薬は効く目が強い。",
      exampleVi: "Thuốc này có tác dụng mạnh."
   },
   {
      kanji: "効く目が弱い",
      hiragana: "きくめがよわい",
      pos: "Cụm từ",
      meaning: "tác dụng yếu",
      exampleJa: "この薬は効く目が弱い。",
      exampleVi: "Thuốc này có tác dụng yếu."
   },
   {
      kanji: "はやる",
      hiragana: "はやる",
      pos: "Động từ",
      meaning: "thịnh hành, lan rộng",
      exampleJa: "若者の間でゲームがはやっている。",
      exampleVi: "Trò chơi đang thịnh hành trong giới trẻ."
   },
   {
      kanji: "ブーム",
      hiragana: "ぶーむ",
      pos: "Danh từ",
      meaning: "trào lưu, phong trào",
      exampleJa: "韓国ドラマがブームになっている。",
      exampleVi: "Phim Hàn đang trở thành trào lưu."
   },
   {
      kanji: "流行する",
      hiragana: "りゅうこうする",
      pos: "Động từ",
      meaning: "thịnh hành, phổ biến",
      exampleJa: "新しいファッションが流行している。",
      exampleVi: "Thời trang mới đang thịnh hành."
   },
   {
      kanji: "経つ",
      hiragana: "たつ",
      pos: "Động từ",
      meaning: "trôi qua (thời gian)",
      exampleJa: "日本に来て３年が経ちました。",
      exampleVi: "Đã 3 năm trôi qua từ khi tôi đến Nhật."
   },
   {
      kanji: "間に合う",
      hiragana: "まにあう",
      pos: "Động từ",
      meaning: "kịp, đúng giờ",
      exampleJa: "バスに間に合いました。",
      exampleVi: "Tôi đã kịp chuyến xe buýt."
   },
   {
      kanji: "間に合わせる",
      hiragana: "まにあわせる",
      pos: "Động từ",
      meaning: "làm cho kịp, tạm thời ứng phó",
      exampleJa: "この服でパーティーに間に合わせる。",
      exampleVi: "Tạm mặc bộ đồ này đi dự tiệc."
   },
   {
      kanji: "通う",
      hiragana: "かよう",
      pos: "Động từ",
      meaning: "đi học, đi làm (thường xuyên)",
      exampleJa: "大学に通っています。",
      exampleVi: "Tôi đang đi học đại học."
   },
   {
      kanji: "気持ちが通う",
      hiragana: "きもちがかよう",
      pos: "Cụm từ",
      meaning: "thấu hiểu, đồng cảm",
      exampleJa: "親子の気持ちが通う。",
      exampleVi: "Cha mẹ và con cái thấu hiểu nhau."
   },
   {
      kanji: "心が通う",
      hiragana: "こころがかよう",
      pos: "Cụm từ",
      meaning: "thấu hiểu, đồng điệu",
      exampleJa: "友人と心が通う。",
      exampleVi: "Tôi và bạn thân đồng điệu với nhau."
   },
   {
      kanji: "込む",
      hiragana: "こむ",
      pos: "Động từ",
      meaning: "đông đúc, chật kín",
      exampleJa: "電車が込んでいます。",
      exampleVi: "Tàu điện đang đông người."
   },
   {
      kanji: "人込み",
      hiragana: "ひとごみ",
      pos: "Danh từ",
      meaning: "đám đông",
      exampleJa: "人込みが苦手です。",
      exampleVi: "Tôi không thích đám đông."
   },
   {
      kanji: "すく",
      hiragana: "すく",
      pos: "Động từ",
      meaning: "vắng (ít người)",
      exampleJa: "電車がすいています。",
      exampleVi: "Tàu điện đang vắng người."
   },
   {
      kanji: "混雑",
      hiragana: "こんざつ",
      pos: "Danh từ / する-Động từ",
      meaning: "tình trạng đông đúc, hỗn loạn",
      exampleJa: "朝の駅は混雑しています。",
      exampleVi: "Nhà ga buổi sáng rất đông đúc."
   },
   {
      kanji: "すれ違う",
      hiragana: "すれちがう",
      pos: "Động từ",
      meaning: "lướt qua, đi ngược chiều, lỡ nhau",
      exampleJa: "駅で友だちとすれ違いました。",
      exampleVi: "Tôi đã lướt qua bạn ở ga."
   },
   {
      kanji: "すれ違い",
      hiragana: "すれちがい",
      pos: "Danh từ",
      meaning: "sự lỡ nhau, bất đồng",
      exampleJa: "二人の間にすれ違いがあった。",
      exampleVi: "Giữa hai người có sự bất đồng."
   },
   {
      kanji: "掛かる",
      hiragana: "かかる",
      pos: "Động từ",
      meaning: "mất (thời gian, chi phí), treo",
      exampleJa: "旅行にお金が掛かります。",
      exampleVi: "Đi du lịch tốn tiền."
   },
   {
      kanji: "掛ける",
      hiragana: "かける",
      pos: "Động từ",
      meaning: "treo, gọi điện, làm tốn",
      exampleJa: "電話を掛けます。",
      exampleVi: "Tôi gọi điện thoại."
   },
   {
      kanji: "動く",
      hiragana: "うごく",
      pos: "Động từ",
      meaning: "chuyển động, hoạt động",
      exampleJa: "車が動きません。",
      exampleVi: "Xe không chạy."
   },
   {
      kanji: "動き",
      hiragana: "うごき",
      pos: "Danh từ",
      meaning: "sự chuyển động, động thái",
      exampleJa: "機械の動きをチェックする。",
      exampleVi: "Kiểm tra chuyển động của máy móc."
   },
   {
      kanji: "動かす",
      hiragana: "うごかす",
      pos: "Động từ",
      meaning: "di chuyển, làm hoạt động",
      exampleJa: "体を動かしましょう。",
      exampleVi: "Hãy vận động cơ thể."
   },
   {
      kanji: "離れる",
      hiragana: "はなれる",
      pos: "Động từ",
      meaning: "cách xa, rời xa",
      exampleJa: "駅から離れた所に住んでいます。",
      exampleVi: "Tôi sống ở nơi cách xa ga."
   },
   {
      kanji: "離す",
      hiragana: "はなす",
      pos: "Động từ",
      meaning: "tách ra, để xa",
      exampleJa: "子どもから目を離さないでください。",
      exampleVi: "Xin đừng rời mắt khỏi trẻ nhỏ."
   },
   {
      kanji: "ぶつかる",
      hiragana: "ぶつかる",
      pos: "Động từ",
      meaning: "va vào, đụng vào",
      exampleJa: "車が電柱にぶつかりました。",
      exampleVi: "Xe ô tô đã đâm vào cột điện."
   },
   {
      kanji: "衝突する",
      hiragana: "しょうとつする",
      pos: "Động từ",
      meaning: "va chạm, xung đột",
      exampleJa: "二台の車が衝突した。",
      exampleVi: "Hai chiếc xe đã va chạm nhau."
   },
   {
      kanji: "ぶつける",
      hiragana: "ぶつける",
      pos: "Động từ",
      meaning: "đâm vào, va vào",
      exampleJa: "壁に頭をぶつけました。",
      exampleVi: "Tôi đã đập đầu vào tường."
   },
   {
      kanji: "こぼれる",
      hiragana: "こぼれる",
      pos: "Động từ",
      meaning: "tràn ra, bị đổ",
      exampleJa: "コップの水がこぼれました。",
      exampleVi: "Nước trong cốc bị tràn ra."
   },
   {
      kanji: "こぼす",
      hiragana: "こぼす",
      pos: "Động từ",
      meaning: "làm đổ, làm tràn",
      exampleJa: "テーブルにコーヒーをこぼしました。",
      exampleVi: "Tôi đã làm đổ cà phê ra bàn."
   },
   {
      kanji: "ふく",
      hiragana: "ふく",
      pos: "Động từ",
      meaning: "lau, chùi",
      exampleJa: "テーブルをきれいにふきます。",
      exampleVi: "Lau sạch bàn."
   },
   {
      kanji: "ふき取る",
      hiragana: "ふきとる",
      pos: "Động từ",
      meaning: "lau đi, chùi sạch",
      exampleJa: "水をタオルでふき取る。",
      exampleVi: "Lau khô nước bằng khăn."
   },
   {
      kanji: "片付く",
      hiragana: "かたづく",
      pos: "Động từ",
      meaning: "được dọn dẹp, được giải quyết",
      exampleJa: "部屋が片付いた。",
      exampleVi: "Phòng đã được dọn dẹp."
   },
   {
      kanji: "宿題が片付いた",
      hiragana: "しゅくだいがかたづいた",
      pos: "Cụm từ",
      meaning: "bài tập đã được làm xong",
      exampleJa: "宿題が片付いたので遊びに行きます。",
      exampleVi: "Vì đã làm xong bài tập nên tôi đi chơi."
   },
   {
      kanji: "事件が片付いた",
      hiragana: "じけんがかたづいた",
      pos: "Cụm từ",
      meaning: "vụ việc đã được giải quyết",
      exampleJa: "事件が片付いたと聞いて安心しました。",
      exampleVi: "Tôi yên tâm khi nghe rằng vụ việc đã được giải quyết."
   },
   {
      kanji: "問題が片付いた",
      hiragana: "もんだいがかたづいた",
      pos: "Cụm từ",
      meaning: "vấn đề đã được giải quyết",
      exampleJa: "大きな問題が片付いた。",
      exampleVi: "Vấn đề lớn đã được giải quyết."
   },
   {
      kanji: "片付ける",
      hiragana: "かたづける",
      pos: "Động từ",
      meaning: "dọn dẹp, giải quyết",
      exampleJa: "部屋を片付けてください。",
      exampleVi: "Hãy dọn dẹp phòng."
   },
   {
      kanji: "宿題を片付ける",
      hiragana: "しゅくだいをかたづける",
      pos: "Cụm từ",
      meaning: "làm xong bài tập",
      exampleJa: "宿題を片付けてから寝ます。",
      exampleVi: "Tôi làm xong bài tập rồi mới đi ngủ."
   },
   {
      kanji: "事件を片付ける",
      hiragana: "じけんをかたづける",
      pos: "Cụm từ",
      meaning: "giải quyết vụ việc",
      exampleJa: "警察が事件を片付けた。",
      exampleVi: "Cảnh sát đã giải quyết vụ việc."
   },
   {
      kanji: "問題を片付ける",
      hiragana: "もんだいをかたづける",
      pos: "Cụm từ",
      meaning: "giải quyết vấn đề",
      exampleJa: "先生が問題を片付けました。",
      exampleVi: "Thầy giáo đã giải quyết vấn đề."
   },
   {
      kanji: "包む",
      hiragana: "つつむ",
      pos: "Động từ",
      meaning: "gói, bọc",
      exampleJa: "プレゼントを紙で包みました。",
      exampleVi: "Tôi đã gói quà bằng giấy."
   },
   {
      kanji: "包み紙",
      hiragana: "つつみがみ",
      pos: "Danh từ",
      meaning: "giấy gói",
      exampleJa: "きれいな包み紙を使いました。",
      exampleVi: "Tôi đã dùng giấy gói đẹp."
   },
   {
      kanji: "包みを開ける",
      hiragana: "つつみをあける",
      pos: "Cụm từ",
      meaning: "mở gói quà",
      exampleJa: "包みを開けて中を見ました。",
      exampleVi: "Tôi mở gói quà ra xem bên trong."
   },
   {
      kanji: "包みを開く",
      hiragana: "つつみをひらく",
      pos: "Cụm từ",
      meaning: "mở gói",
      exampleJa: "子どもがうれしそうに包みを開いた。",
      exampleVi: "Đứa trẻ vui vẻ mở gói quà."
   },
   {
      kanji: "張る",
      hiragana: "はる",
      pos: "Động từ",
      meaning: "dán, căng ra",
      exampleJa: "ポスターを壁に張りました。",
      exampleVi: "Tôi đã dán áp phích lên tường."
   },
   {
      kanji: "はがす",
      hiragana: "はがす",
      pos: "Động từ",
      meaning: "bóc ra, gỡ ra",
      exampleJa: "壁のポスターをはがしました。",
      exampleVi: "Tôi đã gỡ áp phích trên tường."
   },
   {
      kanji: "無くなる",
      hiragana: "なくなる",
      pos: "Động từ",
      meaning: "mất đi, hết",
      exampleJa: "お金が無くなりました。",
      exampleVi: "Tiền đã hết."
   },
   {
      kanji: "やる気が無くなる",
      hiragana: "やるきがなくなる",
      pos: "Cụm từ",
      meaning: "mất động lực",
      exampleJa: "失敗してやる気が無くなった。",
      exampleVi: "Thất bại nên tôi mất động lực."
   },
   {
      kanji: "記憶が無くなる",
      hiragana: "きおくがなくなる",
      pos: "Cụm từ",
      meaning: "mất trí nhớ",
      exampleJa: "事故で記憶が無くなった。",
      exampleVi: "Do tai nạn nên tôi mất trí nhớ."
   },
   {
      kanji: "無くす",
      hiragana: "なくす",
      pos: "Động từ",
      meaning: "đánh mất, làm mất",
      exampleJa: "財布を無くしました。",
      exampleVi: "Tôi đã làm mất ví."
   },
   {
      kanji: "やる気を無くす",
      hiragana: "やるきをなくす",
      pos: "Cụm từ",
      meaning: "mất động lực",
      exampleJa: "先生の言葉でやる気を無くした。",
      exampleVi: "Lời của thầy giáo làm tôi mất động lực."
   },
   {
      kanji: "記憶を無くす",
      hiragana: "きおくをなくす",
      pos: "Cụm từ",
      meaning: "đánh mất ký ức",
      exampleJa: "頭を打って記憶を無くした。",
      exampleVi: "Bị đập đầu nên mất ký ức."
   },
   {
      kanji: "足りる",
      hiragana: "たりる",
      pos: "Động từ",
      meaning: "đủ",
      exampleJa: "お金は足りますか。",
      exampleVi: "Có đủ tiền không?"
   },
   {
      kanji: "残る",
      hiragana: "のこる",
      pos: "Động từ",
      meaning: "còn lại",
      exampleJa: "ご飯が少し残っています。",
      exampleVi: "Còn lại một ít cơm."
   },
   {
      kanji: "残り",
      hiragana: "のこり",
      pos: "Danh từ",
      meaning: "phần còn lại",
      exampleJa: "残りを食べてもいいですか。",
      exampleVi: "Tôi ăn phần còn lại có được không?"
   },
   {
      kanji: "残す",
      hiragana: "のこす",
      pos: "Động từ",
      meaning: "chừa lại, để lại",
      exampleJa: "ご飯を少し残しました。",
      exampleVi: "Tôi đã để lại một ít cơm."
   },
   {
      kanji: "腐る",
      hiragana: "くさる",
      pos: "Động từ",
      meaning: "thiu, hỏng",
      exampleJa: "魚が腐っています。",
      exampleVi: "Cá đã bị thiu."
   },
   {
      kanji: "むける",
      hiragana: "むける",
      pos: "Động từ",
      meaning: "bóc ra, tróc ra (tự bóc)",
      exampleJa: "皮がむけました。",
      exampleVi: "Da bị bong ra."
   },
   {
      kanji: "むく",
      hiragana: "むく",
      pos: "Động từ",
      meaning: "gọt, lột (vỏ)",
      exampleJa: "りんごの皮をむきます。",
      exampleVi: "Gọt vỏ táo."
   },
   {
      kanji: "滑る",
      hiragana: "すべる",
      pos: "Động từ",
      meaning: "trượt, trơn trượt",
      exampleJa: "雪で道が滑ります。",
      exampleVi: "Đường trơn vì tuyết."
   },
   {
      kanji: "積もる",
      hiragana: "つもる",
      pos: "Động từ",
      meaning: "chất đống, tích tụ",
      exampleJa: "雪が積もっています。",
      exampleVi: "Tuyết đang chất đống."
   },
   {
      kanji: "積む",
      hiragana: "つむ",
      pos: "Động từ",
      meaning: "chất lên, xếp lên",
      exampleJa: "荷物を車に積みました。",
      exampleVi: "Tôi đã chất hành lý lên xe."
   },
   {
      kanji: "おろす",
      hiragana: "おろす",
      pos: "Động từ",
      meaning: "dỡ xuống, hạ xuống",
      exampleJa: "車から荷物をおろす。",
      exampleVi: "Dỡ hành lý xuống xe."
   },
   {
      kanji: "空く",
      hiragana: "あく",
      pos: "Động từ",
      meaning: "trống, rảnh",
      exampleJa: "席が空いています。",
      exampleVi: "Ghế còn trống."
   },
   {
      kanji: "空き部屋",
      hiragana: "あきべや",
      pos: "Danh từ",
      meaning: "phòng trống",
      exampleJa: "ホテルに空き部屋がありますか。",
      exampleVi: "Khách sạn còn phòng trống không?"
   },
   {
      kanji: "空き地",
      hiragana: "あきち",
      pos: "Danh từ",
      meaning: "khu đất trống",
      exampleJa: "家の近くに空き地があります。",
      exampleVi: "Có một khu đất trống gần nhà."
   },
   {
      kanji: "空席",
      hiragana: "くうせき",
      pos: "Danh từ",
      meaning: "ghế trống",
      exampleJa: "電車に空席を見つけました。",
      exampleVi: "Tôi đã tìm thấy ghế trống trên tàu."
   },
   {
      kanji: "空室",
      hiragana: "くうしつ",
      pos: "Danh từ",
      meaning: "phòng trống",
      exampleJa: "このホテルは空室があります。",
      exampleVi: "Khách sạn này có phòng trống."
   },
   {
      kanji: "空きがある",
      hiragana: "あきがある",
      pos: "Cụm từ",
      meaning: "còn chỗ trống",
      exampleJa: "このクラスに空きがあります。",
      exampleVi: "Lớp học này còn chỗ trống."
   },
   {
      kanji: "空きがない",
      hiragana: "あきがない",
      pos: "Cụm từ",
      meaning: "không còn chỗ trống",
      exampleJa: "空きがないので入れません。",
      exampleVi: "Không còn chỗ trống nên không vào được."
   },
   {
      kanji: "空き時間",
      hiragana: "あきじかん",
      pos: "Danh từ",
      meaning: "thời gian rảnh",
      exampleJa: "空き時間に本を読みます。",
      exampleVi: "Tôi đọc sách trong thời gian rảnh."
   },
   {
      kanji: "ふさがある",
      hiragana: "ふさがある",
      pos: "Cụm từ",
      meaning: "bị lấp kín, không còn chỗ trống",
      exampleJa: "道が車でふさがっている。",
      exampleVi: "Đường bị xe cộ lấp kín."
   },
   {
      kanji: "空ける",
      hiragana: "あける",
      pos: "Động từ",
      meaning: "mở ra, làm trống ra",
      exampleJa: "一つ席を空けてください。",
      exampleVi: "Xin chừa cho tôi một chỗ ngồi."
   },
   {
      kanji: "ふさぐ",
      hiragana: "ふさぐ",
      pos: "Động từ",
      meaning: "che, lấp, chặn",
      exampleJa: "入り口をふさがないでください。",
      exampleVi: "Xin đừng chặn lối vào."
   },
   {
      kanji: "下がる",
      hiragana: "さがる",
      pos: "Động từ",
      meaning: "giảm xuống, hạ xuống",
      exampleJa: "熱が下がりました。",
      exampleVi: "Cơn sốt đã giảm."
   },
   {
      kanji: "上がる",
      hiragana: "あがる",
      pos: "Động từ",
      meaning: "tăng lên, nâng lên",
      exampleJa: "値段が上がりました。",
      exampleVi: "Giá đã tăng."
   },
   {
      kanji: "下げる",
      hiragana: "さげる",
      pos: "Động từ",
      meaning: "làm giảm, hạ xuống",
      exampleJa: "音を下げてください。",
      exampleVi: "Xin hãy giảm âm lượng xuống."
   },
   {
      kanji: "上げる",
      hiragana: "あげる",
      pos: "Động từ",
      meaning: "nâng lên, tăng lên",
      exampleJa: "手を上げてください。",
      exampleVi: "Xin hãy giơ tay lên."
   },
   {
      kanji: "冷える",
      hiragana: "ひえる",
      pos: "Động từ",
      meaning: "lạnh đi (tự động từ)",
      exampleJa: "冬は体が冷えやすい。",
      exampleVi: "Mùa đông cơ thể dễ bị lạnh."
   },
   {
      kanji: "あたたまる",
      hiragana: "あたたまる",
      pos: "Động từ",
      meaning: "ấm lên (tự động từ)",
      exampleJa: "体があたたまりました。",
      exampleVi: "Cơ thể đã ấm lên."
   },
   {
      kanji: "冷やす",
      hiragana: "ひやす",
      pos: "Động từ",
      meaning: "làm lạnh, làm mát",
      exampleJa: "ビールを冷やしておきます。",
      exampleVi: "Tôi làm lạnh bia sẵn."
   },
   {
      kanji: "あたためる",
      hiragana: "あたためる",
      pos: "Động từ",
      meaning: "làm ấm, hâm nóng",
      exampleJa: "スープをあたためます。",
      exampleVi: "Hâm nóng súp."
   },
   {
      kanji: "冷める",
      hiragana: "さめる",
      pos: "Động từ",
      meaning: "nguội đi (tự động từ)",
      exampleJa: "スープが冷めました。",
      exampleVi: "Súp đã nguội."
   },
   {
      kanji: "冷ます",
      hiragana: "さます",
      pos: "Động từ",
      meaning: "làm nguội",
      exampleJa: "お茶を冷ましてから飲みます。",
      exampleVi: "Làm nguội trà rồi uống."
   },
   {
      kanji: "燃える",
      hiragana: "もえる",
      pos: "Động từ",
      meaning: "cháy (tự động từ)",
      exampleJa: "家が燃えています。",
      exampleVi: "Ngôi nhà đang cháy."
   },
   {
      kanji: "燃やす",
      hiragana: "もやす",
      pos: "Động từ",
      meaning: "đốt cháy (tha động từ)",
      exampleJa: "ゴミを燃やします。",
      exampleVi: "Đốt rác."
   },
   {
      kanji: "沸く",
      hiragana: "わく",
      pos: "Động từ",
      meaning: "sôi (tự động từ)",
      exampleJa: "お湯が沸きました。",
      exampleVi: "Nước đã sôi."
   },
   {
      kanji: "風呂が沸く",
      hiragana: "ふろがわく",
      pos: "Cụm từ",
      meaning: "nước tắm đã nóng",
      exampleJa: "風呂が沸きました。",
      exampleVi: "Bồn tắm đã sẵn sàng."
   },
   {
      kanji: "沸かす",
      hiragana: "わかす",
      pos: "Động từ",
      meaning: "đun sôi",
      exampleJa: "お湯を沸かします。",
      exampleVi: "Đun sôi nước."
   },
   {
      kanji: "風呂を沸かす",
      hiragana: "ふろをわかす",
      pos: "Cụm từ",
      meaning: "đun nước tắm",
      exampleJa: "母が風呂を沸かしています。",
      exampleVi: "Mẹ đang đun nước tắm."
   },
   {
      kanji: "鳴る",
      hiragana: "なる",
      pos: "Động từ",
      meaning: "reo, kêu (tự động từ)",
      exampleJa: "電話が鳴っています。",
      exampleVi: "Điện thoại đang reo."
   },
   {
      kanji: "鳴らす",
      hiragana: "ならす",
      pos: "Động từ",
      meaning: "làm kêu, bấm (tha động từ)",
      exampleJa: "ベルを鳴らしてください。",
      exampleVi: "Xin hãy bấm chuông."
   },
   {
      kanji: "役立つ",
      hiragana: "やくだつ",
      pos: "Động từ",
      meaning: "có ích, hữu ích",
      exampleJa: "その本は勉強に役立ちます。",
      exampleVi: "Cuốn sách đó có ích cho việc học."
   },
   {
      kanji: "役に立つ",
      hiragana: "やくにたつ",
      pos: "Cụm từ",
      meaning: "có ích, giúp ích",
      exampleJa: "日本語が仕事に役に立つ。",
      exampleVi: "Tiếng Nhật giúp ích cho công việc."
   },
   {
      kanji: "役立てる",
      hiragana: "やくだてる",
      pos: "Động từ",
      meaning: "tận dụng, phát huy",
      exampleJa: "学んだ知識を仕事に役立てる。",
      exampleVi: "Tận dụng kiến thức đã học cho công việc."
   },
   {
      kanji: "役に立てる",
      hiragana: "やくにたてる",
      pos: "Cụm từ",
      meaning: "có thể giúp ích, phát huy được",
      exampleJa: "日本語を役に立てたいです。",
      exampleVi: "Tôi muốn phát huy tiếng Nhật để giúp ích."
   },
   {
      kanji: "飾り",
      hiragana: "かざり",
      pos: "Danh từ",
      meaning: "trang trí",
      exampleJa: "部屋に花の飾りがあります。",
      exampleVi: "Trong phòng có đồ trang trí bằng hoa."
   },
   {
      kanji: "遊び",
      hiragana: "あそび",
      pos: "Danh từ",
      meaning: "chơi, vui chơi",
      exampleJa: "子供たちは公園で遊びをしています。",
      exampleVi: "Bọn trẻ đang chơi ở công viên."
   },
   {
      kanji: "砂遊び",
      hiragana: "すなあそび",
      pos: "Danh từ",
      meaning: "chơi cát",
      exampleJa: "子供が砂遊びをしています。",
      exampleVi: "Đứa trẻ đang chơi cát."
   },
   {
      kanji: "集まる",
      hiragana: "あつまる",
      pos: "Động từ",
      meaning: "tập hợp, tụ tập",
      exampleJa: "人が駅前に集まっています。",
      exampleVi: "Mọi người đang tụ tập trước ga."
   },
   {
      kanji: "教える",
      hiragana: "おしえる",
      pos: "Động từ",
      meaning: "dạy, chỉ bảo",
      exampleJa: "先生が日本語を教えます。",
      exampleVi: "Thầy giáo dạy tiếng Nhật."
   },
   {
      kanji: "踊り",
      hiragana: "おどり",
      pos: "Danh từ",
      meaning: "nhảy múa",
      exampleJa: "祭りで踊りを見ました。",
      exampleVi: "Tôi đã xem múa ở lễ hội."
   },
   {
      kanji: "思う",
      hiragana: "おもう",
      pos: "Động từ",
      meaning: "nghĩ, cho rằng",
      exampleJa: "私はそう思います。",
      exampleVi: "Tôi nghĩ vậy."
   },
   {
      kanji: "考える",
      hiragana: "かんがえる",
      pos: "Động từ",
      meaning: "suy nghĩ, cân nhắc",
      exampleJa: "将来のことを考えています。",
      exampleVi: "Tôi đang suy nghĩ về tương lai."
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
      kanji: "手伝い",
      hiragana: "てつだい",
      pos: "Danh từ",
      meaning: "giúp đỡ",
      exampleJa: "母の手伝いをしました。",
      exampleVi: "Tôi đã giúp mẹ."
   },
   {
      kanji: "働き",
      hiragana: "はたらき",
      pos: "Danh từ",
      meaning: "làm việc, công việc",
      exampleJa: "彼の働きは会社に役立っています。",
      exampleVi: "Sự làm việc của anh ấy có ích cho công ty."
   },
   {
      kanji: "決まる",
      hiragana: "きまる",
      pos: "Động từ",
      meaning: "được quyết định",
      exampleJa: "会議の日が決まりました。",
      exampleVi: "Ngày họp đã được quyết định."
   },
   {
      kanji: "騒ぎ",
      hiragana: "さわぎ",
      pos: "Danh từ",
      meaning: "ồn ào, náo động",
      exampleJa: "外で大きな騒ぎがありました。",
      exampleVi: "Ngoài kia có một vụ náo loạn lớn."
   },
   {
      kanji: "知らせ",
      hiragana: "しらせ",
      pos: "Danh từ",
      meaning: "thông báo, tin tức",
      exampleJa: "先生から知らせがあります。",
      exampleVi: "Có thông báo từ thầy giáo."
   },
   {
      kanji: "頼み",
      hiragana: "たのみ",
      pos: "Danh từ",
      meaning: "nhờ vả, yêu cầu",
      exampleJa: "友達に頼みを聞きました。",
      exampleVi: "Tôi đã nghe lời nhờ vả của bạn."
   },
   {
      kanji: "疲れ",
      hiragana: "つかれ",
      pos: "Danh từ",
      meaning: "sự mệt mỏi",
      exampleJa: "仕事の疲れが取れません。",
      exampleVi: "Không hết mệt sau công việc."
   },
   {
      kanji: "違い",
      hiragana: "ちがい",
      pos: "Danh từ",
      meaning: "sự khác nhau",
      exampleJa: "日本語と中国語の違いは大きいです。",
      exampleVi: "Tiếng Nhật và tiếng Trung có sự khác biệt lớn."
   },
   {
      kanji: "始める",
      hiragana: "はじめる",
      pos: "Động từ",
      meaning: "bắt đầu",
      exampleJa: "勉強を始めます。",
      exampleVi: "Tôi bắt đầu học."
   },
   {
      kanji: "続き",
      hiragana: "つづき",
      pos: "Danh từ",
      meaning: "phần tiếp theo",
      exampleJa: "本の続きを読みたいです。",
      exampleVi: "Tôi muốn đọc tiếp cuốn sách."
   },
   {
      kanji: "暮れ",
      hiragana: "くれ",
      pos: "Danh từ",
      meaning: "hoàng hôn, cuối năm",
      exampleJa: "日が暮れました。",
      exampleVi: "Mặt trời đã lặn."
   },
   {
      kanji: "行き",
      hiragana: "いき",
      pos: "Danh từ",
      meaning: "lượt đi",
      exampleJa: "東京行きの電車です。",
      exampleVi: "Đây là chuyến tàu đi Tokyo."
   },
   {
      kanji: "帰り",
      hiragana: "かえり",
      pos: "Danh từ",
      meaning: "lượt về",
      exampleJa: "帰りに買い物をしました。",
      exampleVi: "Trên đường về tôi đã mua đồ."
   },
   {
      kanji: "急ぎ",
      hiragana: "いそぎ",
      pos: "Danh từ",
      meaning: "vội vàng, khẩn cấp",
      exampleJa: "急ぎの仕事があります。",
      exampleVi: "Có công việc gấp."
   },
   {
      kanji: "遅れ",
      hiragana: "おくれ",
      pos: "Danh từ",
      meaning: "sự chậm trễ",
      exampleJa: "電車に遅れが出ました。",
      exampleVi: "Tàu bị trễ."
   },
   {
      kanji: "時代遅れ",
      hiragana: "じだいおくれ",
      pos: "Danh từ",
      meaning: "lỗi thời",
      exampleJa: "その考えは時代遅れです。",
      exampleVi: "Cách nghĩ đó đã lỗi thời."
   },
   {
      kanji: "貸し",
      hiragana: "かし",
      pos: "Danh từ",
      meaning: "cho vay, cho mượn",
      exampleJa: "友達に貸しがあります。",
      exampleVi: "Tôi đã cho bạn mượn."
   },
   {
      kanji: "借り",
      hiragana: "かり",
      pos: "Danh từ",
      meaning: "mượn, vay",
      exampleJa: "借りを返します。",
      exampleVi: "Tôi trả lại món vay."
   },
   {
      kanji: "勝ち",
      hiragana: "かち",
      pos: "Danh từ",
      meaning: "thắng",
      exampleJa: "試合で勝ちました。",
      exampleVi: "Tôi đã thắng trận đấu."
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
      meaning: "đón tiếp",
      exampleJa: "駅まで迎えに行きます。",
      exampleVi: "Tôi đi đón ở ga."
   },
   {
      kanji: "始まり",
      hiragana: "はじまり",
      pos: "Danh từ",
      meaning: "sự bắt đầu",
      exampleJa: "映画の始まりが面白いです。",
      exampleVi: "Phần mở đầu của bộ phim thú vị."
   },
   {
      kanji: "終わり",
      hiragana: "おわり",
      pos: "Danh từ",
      meaning: "sự kết thúc",
      exampleJa: "夏休みの終わりです。",
      exampleVi: "Đã là cuối kỳ nghỉ hè."
   },
   {
      kanji: "戻り",
      hiragana: "もどり",
      pos: "Danh từ",
      meaning: "trở lại, hồi phục",
      exampleJa: "雨の戻りがあります。",
      exampleVi: "Mưa quay trở lại."
   },
   {
      kanji: "別れ",
      hiragana: "わかれ",
      pos: "Danh từ",
      meaning: "chia tay",
      exampleJa: "友達と別れが悲しいです。",
      exampleVi: "Tôi buồn khi chia tay bạn bè."
   },
   {
      kanji: "喜び",
      hiragana: "よろこび",
      pos: "Danh từ",
      meaning: "niềm vui",
      exampleJa: "合格の喜びを感じました。",
      exampleVi: "Tôi cảm thấy niềm vui khi đỗ."
   },
   {
      kanji: "大喜び",
      hiragana: "おおよろこび",
      pos: "Danh từ",
      meaning: "vô cùng vui sướng",
      exampleJa: "子供たちは大喜びでした。",
      exampleVi: "Bọn trẻ rất vui sướng."
   },
   {
      kanji: "楽しみ",
      hiragana: "たのしみ",
      pos: "Danh từ",
      meaning: "niềm vui, sự mong chờ",
      exampleJa: "旅行は楽しみです。",
      exampleVi: "Tôi mong chờ chuyến du lịch."
   },
   {
      kanji: "笑い",
      hiragana: "わらい",
      pos: "Danh từ",
      meaning: "tiếng cười",
      exampleJa: "その話で笑いが起きました。",
      exampleVi: "Câu chuyện đó gây ra tiếng cười."
   },
   {
      kanji: "大笑い",
      hiragana: "おおわらい",
      pos: "Danh từ",
      meaning: "cười lớn",
      exampleJa: "みんな大笑いしました。",
      exampleVi: "Mọi người đã cười lớn."
   },
   {
      kanji: "驚き",
      hiragana: "おどろき",
      pos: "Danh từ",
      meaning: "ngạc nhiên",
      exampleJa: "そのニュースは大きな驚きでした。",
      exampleVi: "Tin tức đó thật sự ngạc nhiên."
   },
   {
      kanji: "怒り",
      hiragana: "いかり",
      pos: "Danh từ",
      meaning: "sự tức giận",
      exampleJa: "彼は怒りを感じています。",
      exampleVi: "Anh ấy đang cảm thấy tức giận."
   },
   {
      kanji: "悲しみ",
      hiragana: "かなしみ",
      pos: "Danh từ",
      meaning: "nỗi buồn",
      exampleJa: "別れの悲しみがあります。",
      exampleVi: "Có nỗi buồn chia ly."
   },
];
