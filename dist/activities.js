// رينو: عدّل الأدلة والأسئلة مع ولي الأمر. answer يبدأ من صفر.
window.RINO_TRIPS=[
 {id:'sea',name:'ميناء المستكشف',short:'البحر',icon:'⛵',x:-55,color:0x43b7c1,vehicle:'المركب',drive:'قد المركب بالأسهم عبر الحلقات الثلاث في البحر.',
 clues:[
 {name:'مخزن الشحن',label:'CARGO',pos:[-12,-13],english:'Morning cargo: 248 boxes. Afternoon cargo: 176 boxes. Total = morning + afternoon.',arabic:'سجّل عدد صناديق الصباح وبعد الظهر. هتحتاج تجمعهم لتجهيز الشحنة.'},
 {name:'ورشة العجلات',label:'WHEELS',pos:[11,-19],english:'Each kit has 4 wheels. The workshop needs 6 kits. Equal groups can be counted by multiplication.',arabic:'كل طقم فيه 4 عجلات، والورشة محتاجة 6 أطقم. فكّر في المجموعات المتساوية.'},
 {name:'قاموس القبطان',label:'CAPTAIN',pos:[13,-1],english:'The captain carries a beige bag. He puts the map inside his bag. Bag = a container for carrying things.',arabic:'اقرأ معنى bag من الجملة. Beige معناها بيج.'}
 ],questions:[
 {prompt:'How many cargo boxes arrive in total?',options:['414 boxes','424 boxes','324 boxes'],answer:1,hint:'ارجع لدليل CARGO: اجمع 248 و176. الآحاد 8 + 6 = 14.',explain:'248 + 176 = 424. Add ones, tens, then hundreds; carry when needed.'},
 {prompt:'How many wheels do 6 kits need?',options:['24 wheels','10 wheels','20 wheels'],answer:0,hint:'دليل WHEELS: كل طقم 4 عجلات. احسب 6 × 4.',explain:'6 × 4 = 24 wheels. Six equal groups of four.'},
 {prompt:'What is a bag?',options:['A window · نافذة','An island · جزيرة','A container for carrying things · حقيبة'],answer:2,hint:'افتح دليل CAPTAIN وفكّر في شنطة رينو.',explain:'Bag = حقيبة. The map goes inside the bag.'}
 ]},
 {id:'rail',name:'محطة الرحلات',short:'القطر',icon:'🚆',x:0,color:0xf8bc65,vehicle:'القطر',drive:'قد القطر عبر المحطات الثلاث. ↑ أو W للتقدم و↓ للرجوع؛ السكة بتوجّهك.',
 clues:[
 {name:'جدول المحطة',label:'TIMETABLE',pos:[-12,-13],english:'Explorer train: Departure 10:30. Arrival 11:15. 1 hour = 60 minutes.',arabic:'احسب زمن الرحلة على خطوتين: لنهاية الساعة، ثم لموعد الوصول.'},
 {name:'شباك التذاكر',label:'TICKETS',pos:[11,-19],english:'One ticket costs 12 coins. Rino buys 3 tickets. Total cost = price × number of tickets.',arabic:'فكّر في 10 × 3 وبعدين 2 × 3 علشان تحسب ثمن التذاكر.'},
 {name:'لوحة الأمان',label:'SAFETY',pos:[13,-1],english:'Wait behind the yellow line. Board the train only when it stops. He has a ticket.',arabic:'Behind = خلف. Stops = يتوقف. مع He نستخدم has. اقرأ تعليمات الركوب.'}
 ],questions:[
 {prompt:'Departure 10:30, arrival 11:15. How long is the trip?',options:['45 minutes','85 minutes','30 minutes'],answer:0,hint:'من 10:30 إلى 11:00 نصف ساعة، ثم 15 دقيقة كمان.',explain:'30 + 15 = 45 minutes. The trip crosses into the next hour.'},
 {prompt:'Three tickets cost 12 coins each. What is the total?',options:['15 coins','32 coins','36 coins'],answer:2,hint:'12 × 3 = (10 × 3) + (2 × 3).',explain:'30 + 6 = 36 coins. Multiplication gives the total cost.'},
 {prompt:'Which action follows the station safety rule?',options:['Run onto the track.','Wait behind the yellow line until the train stops.','Board a moving train.'],answer:1,hint:'شوف أول سطرين في دليل SAFETY: Wait behind… / only when it stops.',explain:'Wait behind the line and board only when the train stops.'}
 ]},
 {id:'air',name:'مطار رينو',short:'الطيارة',icon:'✈',x:55,color:0x9da4f4,vehicle:'الطيارة',drive:'قد الطيارة بالأسهم عبر حلقات الجو. الإقلاع والهبوط تلقائيان؛ أنت توجه الرحلة.',
 clues:[
 {name:'ميزان الحقائب',label:'BAGGAGE',pos:[-12,-13],english:'There are 8 bags. Each bag weighs 7 kg. The training plane can carry up to 60 kg of bags.',arabic:'سجّل عدد الحقائب ووزن الواحدة وحد الحمولة. هتستخدمهم في قاعدة الإقلاع.'},
 {name:'غرفة الطقس',label:'WEATHER',pos:[11,-19],english:'Today: CLEAR skies, light wind. Clear = no clouds blocking the sky. The pilot checks weather before take-off.',arabic:'ابحث عن معنى CLEAR في التقرير. الطيار بيراجع الجو قبل الإقلاع.'},
 {name:'حاسوب الطيار',label:'FLIGHT CODE',pos:[13,-1],english:'IF bags <= 60 AND weather == CLEAR: allow take-off. Both conditions must be true.',arabic:'<= أقل من أو يساوي. AND لازم الشرطين يكونوا صح. استخدم أدلة الوزن والطقس.'}
 ],questions:[
 {prompt:'8 bags weigh 7 kg each. What is the total weight?',options:['15 kg','54 kg','56 kg'],answer:2,hint:'احسب 8 × 7. ممكن 8 × 5 + 8 × 2.',explain:'40 + 16 = 56 kg. This is below the 60 kg limit.'},
 {prompt:'The weather report says CLEAR. What does it mean here?',options:['The sky is free of blocking clouds.','A heavy storm.','The airport is closed.'],answer:0,hint:'افتح دليل WEATHER واقرأ التعريف اللي بعد Clear =.',explain:'Clear describes the sky. Reading the report helps the pilot plan.'},
 {prompt:'Bags = 56 kg. Limit = 60 kg. Weather = CLEAR. Does the training code allow take-off?',options:['No, 56 is greater than 60.','Yes, both conditions are true.','No, there is a storm.'],answer:1,hint:'هل 56 <= 60؟ وهل الطقس CLEAR؟ راجع FLIGHT CODE.',explain:'Yes. Both conditions are true. AND needs both. This simplified rule is for our game.'}
 ]}
];
