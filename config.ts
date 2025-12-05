
/* 
  =============================================================
  💡 CONFIGURATION CENTER (编辑中心)
  
  在这里修改所有的文字、图片链接和音频链接。
  Edit all text, image links, and audio links here.
  =============================================================
*/

export const appConfig = {
  // 🎵 AUDIO SETTINGS (音频设置)
  music: {
    // 全局背景音乐 (Global Background Music) - Starts at opening
    // 建议：轻快温馨的纯音乐
    background: "/bgm.mp3", 
    
    // 第四页：彩蛋录音 (Promise/Voucher Page Audio) - Plays ONLY on the final page
    // 建议：你自己的录音，给他的终极承诺 (Your own voice recording)
    // 注意：进入该页面时背景音乐会自动变小，录音结束后背景音乐自动恢复。
    promiseVoice: "/2.m4a", 
  },

  // 🖼️ IMAGE SETTINGS (图片设置)
  images: {
    // 第二页：合照 (Photo on Greeting Page)
    greetingPhoto: "/j.jpg",
    // 第四页：兑换券底部头像 (Avatar on Voucher Page)
    voucherAvatar: "/p.jpg"
  },

  // 🎁 GIFT LIST (礼物列表)
  gifts: [
    {
      id: 1,
      icon: "Smile",
      iconColor: "text-blue-500",
      color: "bg-blue-100",
      textColor: "text-blue-600",
      title: "电动牙刷",
      text: "宝宝最爱自己的牙齿啦，我观察到宝宝就只有一个冲牙器，那如果再配上一个电动牙刷就完美了。希望宝宝好好呵护自己的牙齿早点摘下牙套，露出最自信的笑容！。"
    },
    {
      id: 2,
      icon: "Dumbbell",
      iconColor: "text-orange-500",
      color: "bg-orange-100",
      textColor: "text-orange-600",
      title: "蛋白粉",
      text: "我知道宝宝平时学习辛苦，但身体才是革命的本钱。多运动也可以抗焦虑，抗抑郁的啊。希望你变得更结实健康，不仅是为了身材，更是为了能陪我走更远的路。别舍不得喝，喝完再来找我要哦！"
    },
    {
      id: 3,
      icon: "Flame",
      iconColor: "text-red-500",
      color: "bg-red-100",
      textColor: "text-red-600",
      title: "暖手宝",
      text: "天气越来越冷了，你总是手脚冰凉。我在你旁边的时候你最喜欢把你的手直接贴我肉上，但我不再见你旁边的时候希望它能让你感到温暖。"
    },
    {
      id: 4,
      icon: "BatteryCharging",
      iconColor: "text-green-500",
      color: "bg-green-100",
      textColor: "text-green-600",
      title: "磁吸充电宝",
      text: "你的手机掉电总是那么快，怕联系不到你，也怕你出门焦虑。这个小巧轻便，随手一贴就能充。还给你准备了配套的手机壳（怕你嫌丑选的透明的你先凑活用吧），最最关键的一点它是专门为iphone17打造的哦。"
    }
  ],

  // 📝 TEXT CONTENT (文字内容)
  text: {
    // Stage 1: Opening
    opening: {
      title: "生日快乐",
      subtitle: "点击开启",
      headphonesHint: "请一定一定一定一定一定要佩戴耳机食用，宝宝！"
    },
    // Stage 2: Greeting Letter
    greeting: {
      title: "写给你的话",
      // Use \n for new lines (换行)
      letter: `To 我的宝宝李欣易：

生日快乐！

距离拍这张照片已经过去5年了。很高兴，能给你庆祝第6个生日，。

说实话，这一年看你这么辛苦，我真的挺心疼的。新的一岁，答应我，一定要对自己好一点，把身体和心情都照顾好，好吗？

至于你的那个梦想，我相信你一定能实现，因为在我眼里，你一直都是最优秀的。

现在的我，虽然还在蓄力阶段，但我向你承诺：无论发生什么，我都会坚定地站在你身边。我们两个人，没有什么过不去的坎。

准备了几个小礼物，虽然不贵重，但都藏着我的小心思，打开看看吧。`,
      button: "查看惊喜"
    },
    // Stage 4: Voucher
    voucher: {
      headerTitle: "BLACK GOLD",
      productName: "iPhone 17",
      productModel: "Pro Max",
      number: "No.00001 兑换凭证",
      promise: "不买打死我",
      englishSub: "bu mai da si wo.",
      fromLabel: "From",
      fromName: "王圣钦",
      dateLabel: "Date",
      dateValue: "2025"
    }
  }
};
