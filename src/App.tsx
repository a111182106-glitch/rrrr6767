/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* Page 0: Personal Website (Resume) */}
      <section className="bg-gray-100 py-20 px-6 lg:px-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row w-full">
          {/* Left Column (Profile Info) */}
          <div className="bg-slate-900 text-white lg:w-1/3 p-10 flex flex-col items-center text-center lg:items-start lg:text-left relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <img src="https://lh3.googleusercontent.com/sitesv/AA5AbUD4BdY-MlcOZKmEVxnYHq0KVVr-fx7cGLB4_Dc0l3jT0zyzCIuqBrIOonPKd5V2iGihozLjx3yaW_g6qe7EWLzEza4pd1RU5bO6b2EASYv4TqftmMFScLVrhewGKrYStN_P5yWf3WA55WaaBj5Z-V_sPZ6-2Wj_ktK7fneTYHjqyqd0rST6ZDyDGM442qKzwc_QZbysRTlOE-Q1TCACjl6U9GktrR22v2BgV1o=w1280" alt="background" className="w-full h-full object-cover grayscale blur-sm" />
            </div>
            
            <div className="relative z-10 w-full flex flex-col items-center lg:items-start">
              <div className="w-48 h-48 rounded-full border-4 border-white overflow-hidden mb-6 shadow-2xl bg-gradient-to-br from-indigo-500/30 to-purple-500/30">
                <img src="/profile.png.jpg" alt="李冠頡" className="w-full h-full object-cover object-top" />
              </div>
              <h1 className="text-3xl font-bold mb-2 tracking-wide font-sans">李冠頡<span className="text-xl ml-2 font-medium">(廷廷)</span></h1>
              <p className="text-gray-300 font-mono tracking-wider mb-6 text-sm">LI KUAN JIE</p>
              
              <div className="space-y-4 w-full">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="font-semibold text-sm mb-1 tracking-widest text-indigo-300">PROFESSION</p>
                  <p className="text-sm">行銷企劃 ｜ 社群經營 ｜ 專案執行</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="font-semibold text-sm mb-1 tracking-widest text-indigo-300">PROFILE</p>
                  <p className="text-sm text-gray-200">雙魚座 ｜ B型 ｜ 2007-02-24</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="font-semibold text-sm mb-1 tracking-widest text-indigo-300">CONTACT</p>
                  <p className="text-sm break-all"><a href="mailto:a111182106@nkust.edu.tw" className="hover:text-white hover:underline transition-all">a111182106@nkust.edu.tw</a></p>
                </div>
              </div>
            </div>
            
            {/* Social Links placeholder based on extracted image tags */}
            <div className="flex gap-4 mt-10 relative z-10 w-full justify-center lg:justify-start">
               <img src="https://ssl.gstatic.com/atari/images/sociallinks/facebook_white_28dp.png" alt="FB" className="w-6 h-6 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
               <img src="https://ssl.gstatic.com/atari/images/sociallinks/instagram_white_28dp.png" alt="IG" className="w-6 h-6 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
               <img src="https://ssl.gstatic.com/atari/images/sociallinks/youtube_white_28dp.png" alt="YT" className="w-6 h-6 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
               <img src="https://ssl.gstatic.com/atari/images/sociallinks/twitter_white_28dp.png" alt="X" className="w-6 h-6 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>
          
          {/* Right Column (Content) */}
          <div className="lg:w-2/3 p-8 lg:p-12">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="mb-10 flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <h2 className="text-sm font-bold tracking-widest text-slate-400 mb-4 border-b pb-2 uppercase">About Me</h2>
                  <p className="text-gray-700 leading-relaxed text-lg bg-slate-50 p-5 rounded-r-xl border-l-4 border-slate-800 italic">
                    你好，我叫李冠頡，可以叫我廷廷，我對於股票操作有濃厚興趣，大家都叫我<span className="font-bold text-slate-900 border-b-2 border-green-500">高科巴菲特</span>，現在主要靠操盤維生。
                  </p>
                </div>
                <div className="w-full md:w-5/12 flex-shrink-0">
                  <img src="/monster.png" alt="Monster Form" className="w-full h-auto rounded-2xl shadow-xl border-4 border-white object-cover transform hover:scale-105 transition-transform duration-300" />
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-sm font-bold tracking-widest text-slate-400 mb-6 border-b pb-2 uppercase">工作經歷 Experience</h2>
                
                <div className="relative pl-6 border-l-2 border-slate-200 space-y-8">
                  {/* Experience 2 */}
                  <div className="relative">
                    <div className="absolute w-3 h-3 bg-slate-800 rounded-full -left-[31px] top-1.5 ring-4 ring-white"></div>
                    <p className="text-sm font-bold text-slate-500 mb-1 font-mono">2025 ~ 現在</p>
                    <h3 className="text-xl font-bold font-sans text-slate-900">卓鮑國際</h3>
                    <p className="text-indigo-600 font-medium mb-3">高階金牌經理</p>
                    <p className="text-gray-600">東南亞跨境人力資源仲介(柬埔寨)</p>
                  </div>
                  
                  {/* Experience 1 */}
                  <div className="relative">
                    <div className="absolute w-3 h-3 bg-slate-400 rounded-full -left-[31px] top-1.5 ring-4 ring-white"></div>
                    <p className="text-sm font-bold text-slate-500 mb-1 font-mono">2019 ~ 2025</p>
                    <h3 className="text-xl font-bold font-sans text-slate-900">蘋果森林有限公司</h3>
                    <p className="text-indigo-600 font-medium mb-3">資深融資專員兼逾期款項處理專員</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start"><span className="text-red-500 font-bold mr-2">»</span>「手機/機車/勞保貸，有憑證就能貸」</li>
                      <li className="flex items-start"><span className="text-red-500 font-bold mr-2">»</span>「門檻超低，不看信用紀錄/協商戶可」</li>
                      <li className="flex items-start"><span className="text-red-500 font-bold mr-2">»</span>「幾分鐘過件，當天撥款」</li>
                      <li className="flex items-start"><span className="text-red-500 font-bold mr-2">»</span>「一棒協商，欠款收場」</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h2 className="text-sm font-bold tracking-widest text-slate-400 mb-6 border-b pb-2 uppercase">學歷 Education</h2>
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-bold text-slate-500 mb-1 font-mono">2022/9-現在</p>
                      <h3 className="text-lg font-bold text-slate-800">高科大</h3>
                      <p className="text-gray-600 text-sm">航運技術系</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 mb-1 font-mono">2019-2022</p>
                      <h3 className="text-lg font-bold text-slate-800">社會大學</h3>
                      <p className="text-gray-600 text-sm">球類運動系 球棒組</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-sm font-bold tracking-widest text-slate-400 mb-6 border-b pb-2 uppercase">語言能力 Languages</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <span className="font-bold font-sans text-slate-700">英文</span>
                      <div className="text-right">
                        <span className="text-sm font-medium text-slate-700 mr-2">精通</span>
                        <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full font-mono">TOEIC 900</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <span className="font-bold font-sans text-slate-700">台語</span>
                      <div className="text-right">
                        <span className="text-sm font-medium text-slate-700 mr-2">精通</span>
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">精通台式問候</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <span className="font-bold font-sans text-slate-700">日文</span>
                      <span className="text-sm font-medium text-slate-500">八嘎鴨漏</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <span className="font-bold font-sans text-slate-700">韓文</span>
                      <span className="text-sm font-medium text-slate-500">西八</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Page 1: Introduction & Budget */}
      <section className="flex flex-col lg:flex-row min-h-screen">
        <div className="w-full lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              💦🔫清明不只祭祖，更要祭靈魂：<br />
              沖繩『大人系』跳島紓壓之旅🔞
            </h1>
            <h2 className="text-2xl text-gray-600 font-medium mb-10 flex items-center">
              <span className="mr-2">🌙</span> 沖繩 4 天 3 夜「大人系」夜生活行程
            </h2>

            <div className="mb-4">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="mr-2">💰</span> 預算總覽 (單人估計)
              </h3>

              <div className="space-y-4">
                <div className="border border-red-200 rounded-xl p-5 shadow-sm">
                  <h4 className="font-bold text-lg mb-2 flex items-center text-gray-800">
                    <span className="mr-2">✈️</span> 機票∕住宿
                  </h4>
                  <p className="text-gray-700 font-medium mb-1">約 NT$ 28,000 - 38,000</p>
                  <p className="text-gray-500 text-sm">清明旺季建議提早半年訂</p>
                </div>

                <div className="border border-red-200 rounded-xl p-5 shadow-sm">
                  <h4 className="font-bold text-lg mb-2 flex items-center text-gray-800">
                    <span className="mr-2">🍽️</span> 日常餐飲與交通
                  </h4>
                  <p className="text-gray-700 font-medium mb-1">約 NT$ 12,000</p>
                  <p className="text-gray-500 text-sm">含和牛、海鮮、計程車費</p>
                </div>

                <div className="border border-red-200 rounded-xl p-5 shadow-sm">
                  <h4 className="font-bold text-lg mb-2 flex items-center text-gray-800">
                    <span className="mr-2">🎉</span> 夜生活專項
                  </h4>
                  <p className="text-gray-700 font-medium mb-1">約 NT$ 15,000 - 30,000</p>
                  <p className="text-gray-500 text-sm">視秀場預約及俱樂部消費頻率</p>
                </div>

                <div className="border border-red-200 rounded-xl p-5 shadow-sm">
                  <h4 className="font-bold text-lg mb-2 flex items-center text-gray-800">
                    <span className="mr-2">💴</span> 總計建議預算
                  </h4>
                  <p className="text-gray-700 font-medium">NT$ 55,000 - 80,000</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen relative overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-700 to-orange-500">
          <img
            src="https://images.unsplash.com/photo-1542051812871-7575008b871c?auto=format&fit=crop&q=80&w=1200"
            alt="Neon street sunset"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent mix-blend-multiply"></div>
          <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20">
            Made with GAMMA
          </div>
        </div>
      </section>

      {/* Page 2: Itinerary */}
      <section className="bg-gray-50 p-10 lg:p-20 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto w-full"
        >
          <h2 className="text-3xl font-bold mb-10 flex items-center">
            <span className="mr-3">🗓️</span> 每日詳細行程與三餐規劃
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Day 1 */}
            <div className="border border-red-400 bg-white rounded-xl overflow-hidden shadow-sm flex flex-col">
              <div className="border-b border-red-200 py-3 text-center text-xl font-medium text-gray-700">1</div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Day 1: 4/3 (五) 初探松山不夜城</h3>
                <p className="text-gray-600 mb-4 font-medium">地點：那霸市松山區 (Matsuyama)</p>
                <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-5">
                  <li><span className="font-bold">午餐：琉球茶房 (Ashibiuna)</span>。位於首里城附近，在百年古宅迴廊吃沖繩排骨麵與炊飯。</li>
                  <li><span className="font-bold">晚餐：松山 琉球和牛 Lion</span>。頂級和牛燒肉，為晚上的酒精馬拉松墊胃。</li>
                  <li><span className="font-bold">20:30 Churasun6 (63angel)</span>：沖繩最強鋼管與歌舞秀。</li>
                  <li><span className="font-bold">22:30 Club epica</span>：感受 2026 年最新的 EDM 派對。</li>
                </ul>
              </div>
            </div>

            {/* Day 2 */}
            <div className="border border-red-400 bg-white rounded-xl overflow-hidden shadow-sm flex flex-col">
              <div className="border-b border-red-200 py-3 text-center text-xl font-medium text-gray-700">2</div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Day 2: 4/4 (六) 辻地區歷史與感官探索</h3>
                <p className="text-gray-600 mb-4 font-medium">地點：辻 (Tsuji) & 若狹海灘</p>
                <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-5">
                  <li><span className="font-bold">早餐：波上宮附近 CAFE</span>。簡單飯糰配咖啡，享受海邊清晨。</li>
                  <li><span className="font-bold">午餐：第一牧志公設市場</span>。親自挑選龍蝦、夜光貝，二樓現煮現吃。</li>
                  <li><span className="font-bold">晚餐：Jack's Steak House (傑克牛排)</span>。那霸老牌美式牛排，重口味最適合備戰。</li>
                  <li><span className="font-bold">18:00 辻地區文化觀察</span>：巡禮歷史悠久的花街與泡泡浴外觀。</li>
                  <li><span className="font-bold">21:00 松山 Girl's Bar 體驗</span>：尋找標榜「Foreigner Welcome」的酒吧，體驗純日式聊天文化。</li>
                </ul>
              </div>
            </div>

            {/* Day 3 */}
            <div className="border border-red-400 bg-white rounded-xl overflow-hidden shadow-sm flex flex-col">
              <div className="border-b border-red-200 py-3 text-center text-xl font-medium text-gray-700">3</div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Day 3: 4/5 (日) 櫻坂懷舊微醺之旅</h3>
                <p className="text-gray-600 mb-4 font-medium">地點：櫻坂 (Sakurazaka) & 國際通</p>
                <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-5">
                  <li><span className="font-bold">早餐：Pork Tamago Onigiri (炸蝦飯糰)</span>。國際通排隊名店，補充蛋白質。</li>
                  <li><span className="font-bold">午餐：瀨長島 Umikaji Terrace</span>。在白色建築群看飛機起降，吃塔可飯 (Taco Rice)。</li>
                  <li><span className="font-bold">晚餐：國際通 屋台村</span>。集結 20 家特色攤位，推薦串燒與沖繩泡盛酒。</li>
                  <li><span className="font-bold">20:00 櫻坂 Le Bois</span>：在高質感的隱藏酒吧喝杯葡萄酒。</li>
                  <li><span className="font-bold">22:00 櫻坂路邊小酒吧</span>：挑戰 10 人座不到的昭和酒吧，與當地熟客互動。</li>
                </ul>
              </div>
            </div>

            {/* Day 4 */}
            <div className="border border-red-400 bg-white rounded-xl overflow-hidden shadow-sm flex flex-col">
              <div className="border-b border-red-200 py-3 text-center text-xl font-medium text-gray-700">4</div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Day 4: 4/6 (一) 清醒、採買、歸途</h3>
                <p className="text-gray-600 mb-4 font-medium">地點：國際通 & 那霸機場</p>
                <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-5">
                  <li><span className="font-bold">早餐：飯店內用或便利商店</span>（體驗日本 2026 限定甜點）。</li>
                  <li><span className="font-bold">午餐：暖暮拉麵 (那霸牧志店)</span>。清爽的豚骨湯頭，是宿醉後的救贖。</li>
                  <li><span className="font-bold">14:00 唐吉訶德 (Don Quijote)</span>：最後衝刺採買藥妝與伴手禮。</li>
                  <li><span className="font-bold">16:30 前往機場辦理登機</span>。</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
             <div className="bg-black/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20">
               Made with GAMMA
             </div>
          </div>
        </motion.div>
      </section>

      {/* Page 3: Notes & Safety */}
      <section className="flex flex-col lg:flex-row min-h-screen bg-white">
        <div className="w-full lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-10 flex items-center">
              <span className="mr-3">⚠️</span> 2026 執行筆記
            </h2>

            <div className="space-y-6">
              <div className="border border-red-300 rounded-xl p-6 shadow-sm relative pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                  <span className="mr-2">🚗</span> 交通
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  晚上跑店建議全程使用 Uber 或 DiDi，方便定位且不用開口溝通地址，避免酒駕。
                </p>
              </div>

              <div className="border border-red-300 rounded-xl p-6 shadow-sm relative pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                  <span className="mr-2">📅</span> 訂位連結
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  2026 年清明假期預計人潮會多出 30%，Lion 燒肉與 Churasun6 務必在 <span className="font-bold">3 月中旬前完成線上訂位</span>。
                </p>
              </div>

              <div className="border border-red-300 rounded-xl p-6 shadow-sm relative pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                  <span className="mr-2">🛡️</span> 安全防範
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  松山區若遇到路邊拉客（特別是黑人或態度強硬者），請禮貌搖頭快步離開，目標直接設定在你要去的店名。
                </p>
              </div>

              <div className="bg-[#fadfd4] rounded-xl p-6 shadow-sm flex mt-8 items-start">
                 <span className="mr-3 text-xl mt-1 text-red-500">💡</span>
                 <div className="flex flex-col gap-4 w-full">
                   <iframe src="https://www.youtube.com/embed/ayTsB4ZZUuw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full aspect-video rounded-lg shadow-sm object-cover"></iframe>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen relative overflow-hidden bg-gradient-to-tr from-pink-800 via-purple-800 to-indigo-900">
          <img
            src="https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&q=80&w=1200"
            alt="Neon alley night"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-90"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent mix-blend-multiply"></div>
           <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20">
            Made with GAMMA
          </div>
        </div>
      </section>
    </div>
  );
}

