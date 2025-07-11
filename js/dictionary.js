'use strict';
const words = {
    en: {
        "Rei Shiatsu - Home": "Rei Shiatsu - Home",
        "Rei Shiatsu - FAQ": "Rei Shiatsu - Q&A",
        "Rei Shiatsu - Prices": "Rei Shiatsu - Prices",
        "Rei Shiatsu - About Me": "Rei Shiatsu - About Me",
        "English": "English",
        "Japanese": "Japanese",
        "HOME": "HOME", 
        "QUESTIONS": "Q&A",
        "PRICES": "PRICES",
        "ABOUT ME": "ABOUT ME",
        "Our Location": "住所",
        "Appointment Only": "Appointment Only",
        "Please text me": "Please text me",
        "Opening Hours": "Opening Hours",
        "Testimonials": "Testimonials",
        "First Quote 1": "One of the best massages I’ve ever had! Before the massage she asked me if anything hurt, or if she should focus on any areas.  I told her that my lower back and neck were a bit tight.  She was able to focus on the lower back and neck, and helped stretch my legs, arms, and lower back. She was able to apply good appropriate pressure.  I find that a lot of massage therapists aren’t able to apply enough pressure, but that was no issue for Rei, the pressure was perfect, and at the end of the massage I felt loose and relaxed.  Would definitely recommend and go again!",
        "First Quote 2": " ",
        "First Quote 3": " ",
        "-M": "-M",
        "Second Quote 1": "I was very satisfied with her massage!  She took enough time to do counseling to  provide me with good care for pregnant before starting massage.  I'd like to recommend her to not only for pregnant but everyone!",
        "Second Quote 2": " ",
        "Second Quote 3": " ",
        "Second Quote 4": " ",
        "Second Quote 5": " ",
        "-S": "-S",
        "Third Quote 1": "If you want deep tissue, this is the massage for you!  It can be painful, but your body feels amazing afterwards!  Rei will customize the massage for you, so you don't have to go that hard, but I love it!!",
        "Third Quote 2": " ",
        "Third Quote 3": " ",
        "Third Quote 4": " ",
        "Third Quote 5": " ",
        "-K": "-K",



        "Prologue": "Prologue",
        "I’m Rei Tan, a Massage therapist in the Bay Area.": "I’m Rei Tan, a Massage therapist in the Bay Area.",
        "Prologue info": "I have recently been given the opportunity to work as a massage therapist in the Bay Area. I hope to be able to help those who work hard every day, whether it be from work or childcare fatigue, find relief. If you have any questions or would like to make a reservation, please send a text message to the phone number posted. I cannot answer the phone while I am at work, so if you leave a text, I will get back to you as soon as possible.",
        "Shiatsu Benefits": "Shiatsu Benefits",
        "Shiatsu is a Japanese form of therapeutic bodywork, that combines Chinese concepts of medicine, traditional Japanese therapies, as well as more modern western knowledge in order to harmonize the body. While its modern research has been limited, multitudes of benefits have been found. Listed here are some of the documented benefits, feel free to click on the images to view the studies from trusted scientific societies and foundations that support each benefit.": "Shiatsu is a Japanese form of therapeutic bodywork, that combines Chinese concepts of medicine, traditional Japanese therapies, as well as more modern western knowledge in order to harmonize the body. While its modern research has been limited, multitudes of benefits have been found. Listed here are some of the documented benefits, feel free to click on the images to view the studies from trusted scientific societies and foundations that support each benefit.",
        "Reduces Stress": "Reduces Stress",
        "A Japanese cancer study showed that with just a simple passive shiatsu treatment there was both a reduction in anxiety and an increase in patient's relaxation and overall comfort.": "A Japanese cancer study showed that with just a simple passive shiatsu treatment there was both a reduction in anxiety and an increase in patient's relaxation and overall comfort.",
        "Increases Sleep Quality": "Increases Sleep Quality",
        "Studies with cancer patients have shown an increase in well-being and quality of life with a 35% decrease in fatigue and a general increase in quality of sleep and overall energy.": "Studies with cancer patients have shown an increase in well-being and quality of life with a 35% decrease in fatigue and a general increase in quality of sleep and overall energy.",
        "Helps with Joint Pain": "Helps with Joint Pain",
        "The Arthritis Foundation, the largest nonprofit organization for America's leading cause of disability, recommends shiatsu as a complementary natural therapy to help with joint pain.": "The Arthritis Foundation, the largest nonprofit organization for America's leading cause of disability, recommends shiatsu as a complementary natural therapy to help with joint pain.",
        "Rei Shiatsu": "Rei Shiatsu",
        "Winchester Boulevard": "Winchester Boulevard",
        "We are located in Function Better Holistic Center.": "We are located in Function Better Holistic Center.",
        "Text: (510) 684-0386": "Text: (510) 684-0386",
        "What to Expect": "What to Expect",
        "Massage sessions combine elements of acupuncture and stretching into a full body massage. We recommend loose-fitting clothing such as pajamas, we have a room that you can change in, in order to get the best experience. The first half of the session you will be lying on your stomach and then on your back during the later half. If you can't lie on your stomach or have any difficulties you may like on your side or back. In the beginning of the massage the pressure will be light before gradually transitioning stronger. Please let us know at any time if you experience any pain or discomfort.": "Massage sessions combine elements of acupuncture and stretching into a full body massage. We recommend loose-fitting clothing such as pajamas, we have a room that you can change in, in order to get the best experience. The first half of the session you will be lying on your stomach and then on your back during the later half. If you can't lie on your stomach or have any difficulties you may like on your side or back. In the beginning of the massage the pressure will be light before gradually transitioning stronger. Please let us know at any time if you experience any pain or discomfort.",
        "After the Session": "After the Session",
        "You should drink lots of water and continue to stretch your entire body. Because we will be working muscles that you may not usually work with regularly, your blood flow may improve causing dizziness, so please move with care. Also be aware that drinking alcohol on the day of the session may cause you to get drunk faster than normal.": "You should drink lots of water and continue to stretch your entire body. Because we will be working muscles that you may not usually work with regularly, your blood flow may improve causing dizziness, so please move with care. Also be aware that drinking alcohol on the day of the session may cause you to get drunk faster than normal.",
        "We are located in Function Better Holistic Center.": "We are located in Function Better Holistic Center.",
        "Check Us Out": "Check Us Out",

        "About Me": "About Me",
        "Why Shiatsu?": "Why Shiatsu?",
        "I moved to America in 2004 from Japan, and for the longest time suffered from painful stiff shoulders. But upon coming to America, I discovered relief through shiatsu, a Japanese massage therapy, which has helped me find the relief I needed. Ever since, I’ve wanted to share this revitalizing experience with others too.": "I moved to America in 2004 from Japan, and for the longest time suffered from painful stiff shoulders. But upon coming to America, I discovered relief through shiatsu, a Japanese massage therapy, which has helped me find the relief I needed. Ever since, I’ve wanted to share this revitalizing experience with others too.",
        "I studied at": "I studied at ",
        "McKinnon Body Therapy Center": "McKinnon Body Therapy Center",
        ", and I have developed my own unique style of treatment with over 10 years of experience by incorporating my understanding of Japanese folk medicine, reflex zone therapy, exercise, and Thai massage. While I don’t think my English is perfect and may cause inconveniences, I will try to convey my utmost sincerity and care.": ", and I have developed my own unique style of treatment with over 10 years of experience by incorporating my understanding of Japanese folk medicine, reflex zone therapy, exercise, and Thai massage. While I don’t think my English is perfect and may cause inconveniences, I will try to convey my utmost sincerity and care.",
        "Experience": "Experience",

        "Do you have a parking lot?": "Do you have a parking lot?",
        "We have a parking lot on the premises, however if there are no spaces please use the street. Please arrive early as parking tends to fill up quickly.": "We have a parking lot on the premises, however if there are no spaces please use the street. Please arrive early as parking tends to fill up quickly.",
        "What is Shiatsu?": "What is Shiatsu?",
        "Shiatsu is a massage technique unique to Japan that originates from traditional asian medicine. It is based on bodywork techniques from Thailand and China that uses pressure points to relieve the body inside out. And in Japanese (指圧 or しあつ) it means \"finger pressure\" due to being a form of acupuncture that utilizes the fingers instead of needles. Where and how quickly the pressure is applied is changed slowly according to the body’s state, bringing it into balance and relieving it of fatigue.": "Shiatsu is a massage technique unique to Japan that originates from traditional asian medicine. It is based on bodywork techniques from Thailand and China that uses pressure points to relieve the body inside out. And in Japanese (指圧 or しあつ) it means \"finger pressure\" due to being a form of acupuncture that utilizes the fingers instead of needles. Where and how quickly the pressure is applied is changed slowly according to the body’s state, bringing it into balance and relieving it of fatigue.",
        "When should I consider Shiatsu?": "When should I consider Shiatsu?",
        "Shiatsu addresses various concerns and needs in modern society, such as improving chronic conditions, maintaining daily health, and preventing illness. Specifically, it is effective for back pain, stiff shoulders, sensitivity to cold, headache, indigestion, loss of appetite, constipation, menstrual pain, sciatica, etc.": "Shiatsu addresses various concerns and needs in modern society, such as improving chronic conditions, maintaining daily health, and preventing illness. Specifically, it is effective for back pain, stiff shoulders, sensitivity to cold, headache, indigestion, loss of appetite, constipation, menstrual pain, sciatica, etc.",
        "Does Shiatsu hurt?": "Does Shiatsu hurt?",
        "For more sensitive individuals it can hurt, however it is more of a relieving sensation. And per the customer's request we can gradually work from a lighter to deeper massage to ensure a more comfortable experience. Please don't hesitate to let me know if anything is too uncomfortable.": "For more sensitive individuals it can hurt, however it is more of a relieving sensation. And per the customer's request we can gradually work from a lighter to deeper massage to ensure a more comfortable experience. Please don't hesitate to let me know if anything is too uncomfortable.",
        "How can I book an appointment?": "How can I book an appointment?",
        "We are currently only booking via phone.": "We are currently only booking via phone, please text (510) 684-0386. We will reply as soon as possible, between the hours of 9AM to 7PM.",
        "What should I wear?": "What should I wear?",
        "We recommend wearing loose fit clothing such as pajamas or sweatpants, there will be a private area where you can change. We also recommend removing accessories and bras.": "We recommend wearing loose fit clothing such as pajamas or sweatpants, there will be a private area where you can change. We also recommend removing accessories and bras.",
        "How can I pay?": "How can I pay?",
        "We currently accept cash, Zelle, and Venmo.": "We currently accept cash, Zelle, and Venmo.",
        "Is there a cancellation fee?": "Is there a cancellation fee?",
        "There will not be a fee so long as the reservation is cancelled 24 hours in advance. However, there will be a $50 charge within 24 hours. And in the case that the reservation was never canceled, there will be a $100 charge.": "There will not be a fee so long as the reservation is cancelled 24 hours in advance. However, there will be a $50 charge within 24 hours. And in the case that the reservation was never canceled, there will be a $100 charge.",
        "What happens if I'm late?": "What happens if I'm late?",
        "Service will be provided within the scheduled time. Please note that there will not be any discounts or extensions for late arrivals.": "Service will be provided within the scheduled time. Please note that there will not be any discounts or extensions for late arrivals.",

        "Prices and Packages": "Prices and Packages",
        "STANDARD SESSION": "STANDARD SESSION",
        "1 Personalized Session": "1 Personalized Session",
        "1 Hour": "1 Hour",
        "STARTING": "STARTING",
        "EXTENSION": "EXTENSION",
        "30 Minute Extension": "30 Minute Extension",
        "Additional": "Additional",
        "DELUXE PACKAGE": "DELUXE PACKAGE",
        "3 Personalized Sessions": "3 Personalized Sessions",
        "1 Hour Each": "1 Hour Each",
        "PREMIUM PACKAGE": "PREMIUM PACKAGE",
        "4 Personalized Sessions": "4 Personalized Sessions",
        "* You need to pay for the full amount of the package at once.": "* You need to pay for the full amount of the package at once."

    }, 
    jp: {
        "Rei Shiatsu - Home": "Rei Shiatsu - ホーム",
        "Rei Shiatsu - FAQ": "Rei Shiatsu - 質問",
        "Rei Shiatsu - Prices": "Rei Shiatsu - 料金表",
        "Rei Shiatsu - About Me": "Rei Shiatsu - 自己紹介",
        "English": "英語",
        "Japanese": "日本語",
        "HOME": "ホーム", 
        "QUESTIONS": "質問",
        "PRICES": "料金表",
        "ABOUT ME": "自己紹介",
        "Our Location": "住所",
        "Appointment Only": "ご予約の方のみ受け付けております",
        "Please text me": "テキストにてお問い合わせ下さい",
        "Opening Hours": "営業時間",
        "Testimonials": "お客様の感想",
        "First Quote 1": "アメリカに来てから、長年マッサージを受けには行っていなかったのですが、日本のようなマッサージを受けれると聞いて、嬉しくて、すぐに伺いました。",
        "First Quote 2": "結果、痛い所はないかなど、細かく聞いて下さり、久しぶりに日本のような指圧マッサージをうけることができました。",
        "First Quote 3": "身体も以前に比べたら、かなり軽くなりました。定期的に通いたいと思います。本当にありがとうございました。また、どうぞ宜しくお願い致します。",
        "-M": "M.T.",
        "Second Quote 1": "イベント明けに全身の疲れを取ろうとマッサージお願いしてみて、すごくよかったので、子育やら仕事やら、家事などでお疲れのママや、もちろんパパにもおすすめです！",
        "Second Quote 2": "３回セットでお願いして試してみました、マッサージ後の体の軽さはもちろん、その後の体の疲労がいつもより軽い！",
        "Second Quote 3": "そして、体の自分での改善のストレッチなども教えて頂けるので、体が悲鳴を上げてる方！必見です！",
        "Second Quote 4": "偏頭痛などおこらず、薬も飲まず、行けてます！奇跡です！本当にマッサージのおかげです。",
        "Second Quote 5": "ぜひ、１回でも、２-３回でも続けてみるとより効果てきめんでした。",
        "-S": "A.M.",
        "Third Quote 1": "ベイエリアのマッサージ店は数え切れないほどあるため、よい店を見つけることは困難です。",
        "Third Quote 2": "経験上かなり怪しい店が多く。英語が通じなかったり、マッサージも優しすぎて物足りない事がほとんどでした。",
        "Third Quote 3": "それに対して日本人で、専門的なトレーニングを受けた本格的なマッサージです。",
        "Third Quote 4": "規定の時間、丁寧にマッサージをしてくれます。具合の悪いところについて日本語で細かく説明できる点も日本人には魅力です。",
        "Third Quote 5": "マッサージのトレーニングはアメリカで受けたそうで、日本で学んだわけではないそうです。主に指圧のような押すマッサージと、タイ式のような伸ばすマッサージでした。",
        "-K": "K.Y.",
        "Prologue": "はじめに",
        "I’m Rei Tan, a Massage therapist in the Bay Area.": "初めまして私は Rei Tan と申します。",
        "Prologue info": "この度縁があってベイエリアでマッサージセラピストをさせて頂いております。仕事疲れ、育児疲れなど毎日頑張っている皆様の笑顔と癒やしのお手伝いができればと思います。質問やご予約は左記の番号にテキストメッセージで承っております。仕事中には電話に出ることができないので、テキスト(日本語対応してます)を残して頂けたら早急に折り返しご連絡いたします。",
        "Shiatsu Benefits": "指圧とは",
        "Shiatsu is a Japanese form of therapeutic bodywork, that combines Chinese concepts of medicine, traditional Japanese therapies, as well as more modern western knowledge in order to harmonize the body. While its modern research has been limited, multitudes of benefits have been found. Listed here are some of the documented benefits, feel free to click on the images to view the studies from trusted scientific societies and foundations that support each benefit.": "疾病の予防並びに治療を目的に、母指を中心として四指並びに手掌のみを使用し、全身に定められたツボと呼ばれる指圧点を押圧しその圧反射により生体機能に作用させ、本来人間の身体に備わっている自然治癒力の働きを促進させる日本独特の手技療法である。（ウィキペディアより",
        "Reduces Stress": "適応障",
        "A Japanese cancer study showed that with just a simple passive shiatsu treatment there was both a reduction in anxiety and an increase in patient's relaxation and overall comfort.": "指圧は日常生活における慢性的な不調や疾患の改善、毎日の健康維持や病気の予防から回復を促すため、様々な不調に適用できます。ストレスによる体の不調、更年期障害、生理痛、冷え性など様々な症状に対応しています。目的に応じた、適切なポイント・適切な圧加減・適切な施術時間により、身体に余計な不快感を与えることはありません。",
        "Increases Sleep Quality": "不眠症",
        "Studies with cancer patients have shown an increase in well-being and quality of life with a 35% decrease in fatigue and a general increase in quality of sleep and overall energy.": "不眠になってしまう原因は人によって様々ですが、姿勢の悪さ、ストレス、栄養不足、不規則な生活などなど、その人の身体の状態、生活環境によって、不眠になっている原因は人それぞれです。しかし、不眠の方たちに、共通して言えることが自律神経の乱れということです。指圧を受けることで自律神経の緊張状態が緩和されれば、副交感神経が優位になり、自律神経失調によるさまざまな症状を改善。そして自然治癒力の働きも促進します。",
        "Helps with Joint Pain": "さまざまな痛み",
        "The Arthritis Foundation, the largest nonprofit organization for America's leading cause of disability, recommends shiatsu as a complementary natural therapy to help with joint pain.": "筋緊張や神経痛など興奮状態にある筋や神経に対して指圧を施すことで、この興奮を抑え・鎮める効果が期待できます。デスクワークなどで長時間同じ姿勢をとる方に多い慢性的な肩こりは、肩に関する筋肉が常にこの興奮状態にあることが原因です。内臓の不調・異常は自律神経を伝い、体表に”こり”や”痛み”となって現れます。指圧では、患部に刺激を与えることで、内臓の働きを整え、改善する効果が期待できます。",
        "Rei Shiatsu": "Rei Shiatsu",
        "Winchester Boulevard": "Winchester Boulevard",
        "We are located in Function Better Holistic Center.": "Function Better Holistic Center表示のあるサロン内になります。",
        "Text: (510) 684-0386": "テキスト: (510) 684-0386",
        "What to Expect": "施術を受けるにあたって",
        "Massage sessions combine elements of acupuncture and stretching into a full body massage. We recommend loose-fitting clothing such as pajamas, we have a room that you can change in, in order to get the best experience. The first half of the session you will be lying on your stomach and then on your back during the later half. If you can't lie on your stomach or have any difficulties you may like on your side or back. In the beginning of the massage the pressure will be light before gradually transitioning stronger. Please let us know at any time if you experience any pain or discomfort.": "服装はリラックスして受けていただけるように、ゆったりとしていて施術を受ける人がストレスなく動ける服装でお願いしています。指圧は圧加減の強弱調節が非常に大切です。そのためには患者様とのコミュニケーションが重要になります例えば、私達が一方的に強さを決めたり施術箇所を決めたりはいたしません。しっかりと希望を聞き、筋やお体の状態に応じて調整していきます。ただしご要望であっても必要以上に強く圧を加えることも致しません。例えば、強ければ効くというものではありませんし筋緊張を誘発してもみ起こしの原因にもなります。",
        "After the Session": "術後について",
        "You should drink lots of water and continue to stretch your entire body. Because we will be working muscles that you may not usually work with regularly, your blood flow may improve causing dizziness, so please move with care. Also be aware that drinking alcohol on the day of the session may cause you to get drunk faster than normal.": "指圧後は水分補給を忘れないようにお願いします。そして飲酒はやめましょう。指圧を受けた後は血流が促進された状態だからです。「体内にアルコール分がめぐる状態」と「指圧で血行が良くなる状態」が合わさると、通常の飲酒時よりも酔いが早くまわり、悪酔いしやすい状態になり危険です。施術により筋肉を伸ばしても、筋膜が癒着していると十分な効果が得られないことがあります。その為ストレッチも取り入れながら指圧マッサージを行うことで、筋肉も効果的に解すようにしています。術後もお家で軽いストレッチをされることを推奨しています。",
        "We are located in Function Better Holistic Center.": "Function Better Holistic Center表示のあるサロン内になります。",
        "Check Us Out": "こちらを",

        "About Me": "自己紹介",
        "Why Shiatsu?": "指圧を始めたいと思ったきっかけ？",
        "I moved to America in 2004 from Japan, and for the longest time suffered from painful stiff shoulders. But upon coming to America, I discovered relief through shiatsu, a Japanese massage therapy, which has helped me find the relief I needed. Ever since, I’ve wanted to share this revitalizing experience with others too.": "私は2004年に日本からアメリカに引っ越してきました。日本に在住時から長い間肩こりには苦しんでいました。アメリカに来たときに日本のマッサージ療法である指圧を試す機会があり、術後に私の肩が軽くなって動かしやすくなっていて日々の生活が楽になっていると感じました。最近は電子機器、スマホの普及やアメリカの強い冷房などで以前にも増して肩こりで悩まれている方々が増えているように思えます。そんな方々の助けにもなるのではないかと思いマッサージ師の資格を目指すことになりました。",
        "I studied at": "私は",
        "McKinnon Body Therapy Center": "マッキノンボディセラピーセンター",
        ", and I have developed my own unique style of treatment with over 10 years of experience by incorporating my understanding of Japanese folk medicine, reflex zone therapy, exercise, and Thai massage. While I don’t think my English is perfect and may cause inconveniences, I will try to convey my utmost sincerity and care.": "で日本の民間療法、反射ゾーンセラピー、タイマッサージの勉強をしてマッサージ師の資格を習得しました。学校に通いながら10年以上の経験を生かして独自の治療スタイルを模索しさらなる技術アップを続けています。",
        "Experience": "経験実績",

        "Do you have a parking lot?": "駐車場はありますか？",
        "We have a parking lot on the premises, however if there are no spaces please use the street. Please arrive early as parking tends to fill up quickly.": "敷地内にも駐車場はありますが、埋まっている場合路上駐車をお願いしてます。時間に余裕を持って来られる事をお勧めします。",
        "What is Shiatsu?": "指圧とは？",
        "Shiatsu is a massage technique unique to Japan that originates from traditional asian medicine. It is based on bodywork techniques from Thailand and China that uses pressure points to relieve the body inside out. And in Japanese (指圧 or しあつ) it means \"finger pressure\" due to being a form of acupuncture that utilizes the fingers instead of needles. Where and how quickly the pressure is applied is changed slowly according to the body’s state, bringing it into balance and relieving it of fatigue.": "日本独特の技法であって手指や手のひらを使い体表に圧を加える技法です。筋肉の疲労物質を除去し筋肉を正常化させ体の均衡を保つことを目的としています。",
        "When should I consider Shiatsu?": "指圧の利用タイミング？",
        "Shiatsu addresses various concerns and needs in modern society, such as improving chronic conditions, maintaining daily health, and preventing illness. Specifically, it is effective for back pain, stiff shoulders, sensitivity to cold, headache, indigestion, loss of appetite, constipation, menstrual pain, sciatica, etc.": "指圧を利用される方々は、疲れたからリラックスしたいなどリラクゼーション目的とした方から痛みや不快な気持ちを改善したいというご希望でいらっしゃる方まで様々です。ご予約の際に問診をしてお客様に合った施術をご提案させていただいています。",
        "Does Shiatsu hurt?": "指圧は痛いですか？",
        "For more sensitive individuals it can hurt, however it is more of a relieving sensation. And per the customer's request we can gradually work from a lighter to deeper massage to ensure a more comfortable experience. Please don't hesitate to let me know if anything is too uncomfortable.": "指圧というと痛いというイメージを持つ人も多いと思いますが、実際は痛い指圧のほうが効いているということはありません。やみくもに痛い施術は皮膚の炎症を引き起こしてしまう場合があります。指圧は心地よい圧を身体の奥まで浸透させるので痛いと思うことがあれば遠慮なく申し出ください。",
        "How can I book an appointment?": "予約はどうしたらいいですか？",
        "We are currently only booking via phone.": "現在テキストでのご予約のみとなっておりますので、(510) 684-0386 までメッセージをお送りください(日本語可能)午前9時から午後7時の間にできるだけ早く、返信させていただきます。",
        "What should I wear?": "何を着ていけばいいですか？",
        "We recommend wearing loose fit clothing such as pajamas or sweatpants, there will be a private area where you can change. We also recommend removing accessories and bras.": "服装はリラックスして受けていただけるように、ゆったりとしていて施術を受ける人がストレスなく動ける服装でお願いしています。",
        "How can I pay?": "支払い方法を教えてください？"　,
        "We currently accept cash, Zelle, and Venmo.": "現金の他、ゼラ・ベンモに対応してます。",
        "Is there a cancellation fee?": "キャンセル料はかかりますか？",
        "There will not be a fee so long as the reservation is cancelled 24 hours in advance. However, there will be a $50 charge within 24 hours. And in the case that the reservation was never canceled, there will be a $100 charge.": "予約時間の24時間前までにご連絡頂ければキャンセル料はいただいておりません。２４時間以内に連絡を頂いてからのキャンセルとなった場合は５０ドル、連絡がなかった場合は１００ドル請求させて頂いております。あしからずご了承ください。",
        "What happens if I'm late?": "予約に遅れた場合？",
        "Service will be provided within the scheduled time. Please note that there will not be any discounts or extensions for late arrivals.": "次の予約のお客様にご迷惑をおかけすることとなりますので延長をして施術をすることはできません。恐れ入りますが時間内での施術となります。",

        "Prices and Packages": "料金表、パッケージ",
        "STANDARD SESSION": "通常料金",
        "1 Personalized Session": "お一人様",
        "1 Hour": "一時間",
        "STARTING": "　",
        "EXTENSION": "延長",
        "30 Minute Extension": "30分",
        "Additional": "　",
        "DELUXE PACKAGE": "デラックスパッケージ",
        "3 Personalized Sessions": "3回分",
        "1 Hour Each": "1時間",
        "PREMIUM PACKAGE": "プレミアムパッケージ",
        "4 Personalized Sessions": "4回分",
        "* You need to pay for the full amount of the package at once.": "* パッケージは1回目の使用時に全額を払う必要があります。"
    }
};