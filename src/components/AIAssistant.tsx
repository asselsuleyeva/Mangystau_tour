'use client';

import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, AlertTriangle, Compass, MapPin, CheckCircle, Lightbulb } from 'lucide-react';
import { useData } from '@/context/DataContext';

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuestion?: string;
}

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  time: string;
  suggestions?: string[];
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onClose, initialQuestion }) => {
  const { destinations } = useData();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: "Hi! I'm your Mangystau AI Guide. I can help you plan your route, choose destinations, understand local history, prepare for desert travel, and find the best season for your trip.",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: [
        'What should I visit in 3 days?',
        'Which places are best for photography?',
        'Can I visit Bozzhyra with a normal car?',
        'What should I bring to the desert?',
        'What is the best month to visit Mangystau?',
        'Tell me about Beket-Ata.'
      ]
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      const responseText = generateAIResponse(query, destinations);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#1D1715] border border-[#3A2D27] text-[#EFEAE1] w-full max-w-2xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#251D1A] border-b border-[#3A2D27] p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#D98A48] to-[#B36024] flex items-center justify-center shadow-lg">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white flex items-center gap-2">
                Mangystau AI Guide
                <span className="text-[10px] uppercase font-sans tracking-widest bg-[#D98A48]/20 text-[#E2A76F] px-2 py-0.5 rounded-full border border-[#D98A48]/30">
                  Live Knowledge Base
                </span>
              </h3>
              <p className="text-xs text-[#A39585]">Your official international travel assistant</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#A39585] hover:text-white rounded-lg hover:bg-[#322622] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm bg-[#181312]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-4 shadow-sm text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#D98A48] text-white rounded-br-none'
                    : 'bg-[#251D1A] border border-[#3A2D27] text-[#EFEAE1] rounded-bl-none'
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>
                <div
                  className={`text-[10px] mt-2 ${
                    msg.sender === 'user' ? 'text-amber-100 text-right' : 'text-[#8A7A6A]'
                  }`}
                >
                  {msg.time}
                </div>
              </div>

              {/* Suggestions pills */}
              {msg.suggestions && msg.suggestions.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2 max-w-[90%]">
                  {msg.suggestions.map((sug) => (
                    <button
                      key={sug}
                      onClick={() => handleSend(sug)}
                      className="text-xs bg-[#2B211C] hover:bg-[#3D2F28] text-[#E2A76F] border border-[#3A2D27] px-3 py-1.5 rounded-full text-left transition-colors flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3 h-3 text-[#E2A76F]" />
                      {sug}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-[#A39585] bg-[#251D1A] p-3 rounded-xl border border-[#3A2D27] w-fit">
              <Bot className="w-4 h-4 text-[#E2A76F] animate-spin" />
              <span>Analyzing destination database & safety routes...</span>
            </div>
          )}
        </div>

        {/* Quick Topics Footer */}
        <div className="px-4 py-2 bg-[#1A1412] border-t border-[#3A2D27] flex items-center gap-2 overflow-x-auto text-xs text-[#A39585]">
          <span className="font-semibold text-[#E2A76F] shrink-0 flex items-center gap-1">
            <Lightbulb className="w-3.5 h-3.5" /> Quick Topics:
          </span>
          {['4x4 Rules', 'Bozzhyra', 'Beket-Ata', 'Photography Tips', 'Best Season'].map((topic) => (
            <button
              key={topic}
              onClick={() => handleSend(`Tell me about ${topic}`)}
              className="bg-[#251D1A] hover:bg-[#322622] text-[#C8BCAC] px-2.5 py-1 rounded border border-[#3A2D27] shrink-0"
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-[#251D1A] border-t border-[#3A2D27] flex items-center gap-2">
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything about traveling to Mangystau..."
            className="flex-1 bg-[#181312] border border-[#3A2D27] rounded-xl px-4 py-3 text-sm text-[#EFEAE1] placeholder-[#8A7A6A] focus:outline-none focus:border-[#E2A76F]"
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputQuery.trim()}
            className="bg-[#D98A48] hover:bg-[#E2A76F] disabled:opacity-40 text-white p-3 rounded-xl font-semibold transition-colors flex items-center justify-center"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};

function generateAIResponse(query: string, destinations: any[]): string {
  const q = query.toLowerCase();

  // Driving / car question
  if (q.includes('normal car') || q.includes('sedan') || q.includes('car') && q.includes('bozzhyra')) {
    return `⚠️ IMPORTANT 4x4 SAFETY NOTICE FOR BOZZHYRA:

No, you CANNOT visit Bozzhyra with a normal car or sedan. 

• Road Access: Reaching Bozzhyra requires traveling across unpaved Ustyurt Plateau desert tracks, sharp limestone gravel, and deep silt dust (takyr).
• Recommended Vehicle: A high-clearance 4x4 off-road SUV (such as Toyota Land Cruiser or Nissan Patrol) equipped with off-road tires and an experienced local driver is strictly required.
• Risk: Standard cars will suffer severe undercarriage damage, tire punctures, or become hopelessly stranded without mobile network coverage.`;
  }

  // 3 Days trip
  if (q.includes('3 day') || q.includes('3-day') || q.includes('route') || q.includes('itinerary')) {
    return `Here is a recommended 3-Day Essential Mangystau Itinerary starting from Aktau:

DAY 1: Ancient Seabed & Northern Marvels
• Morning: Aktau → Karakiya Depression (-132m below sea level)
• Midday: Torysh Valley of Balls (spherical stone field)
• Afternoon: Sherkala Mountain & Ayrakty Castle Mountains
• Overnight: Return to Aktau or glamping near Shetpe.

DAY 2: Sacred Underground Mosques & Salt Horizon
• Morning: Drive to Shopan-Ata Underground Necropolis
• Midday: Sacred pilgrimage descent at Beket-Ata Underground Mosque
• Afternoon: Tuzbair Salt Flat for sunset mirror reflections.

DAY 3: The Monumental Bozzhyra Canyon
• Early Morning: Depart for Bozzhyra Canyon (4x4 off-road)
• Explore the iconic Bozzhyra Fangs viewpoint & white amphitheaters
• Return to Aktau by evening.

Tip: Ensure you hire a certified 4x4 driver with full spare equipment for Days 2 & 3!`;
  }

  // Photography
  if (q.includes('photo') || q.includes('camera') || q.includes('instagram') || q.includes('sunset')) {
    return `📸 BEST PHOTOGRAPHY SPOTS IN MANGYSTAU:

1. Bozzhyra Fangs: Sunset and sunrise paint the towering white chalk fangs in vivid gold, rose, and amber hues.
2. Tuzbair Salt Flat: After rain in spring, shallow surface water creates a world-famous mirror reflection of the sky.
3. Sherkala Mountain: The "Sphinx of the Steppe" shifts shape from yurt to lion depending on your camera position.
4. Torysh Valley of Balls: Low golden-hour shadows highlight the spherical stone geometry.
5. Shakpak-Ata Underground Mosque: Incredible exterior honeycomb cliff weathering (tafoni) and soft interior light wells.`;
  }

  // What to bring / desert gear
  if (q.includes('bring') || q.includes('pack') || q.includes('gear') || q.includes('water')) {
    return `🎒 DESERT EXPEDITION PACKING CHECKLIST:

• Water: Minimum 5 Litres of fresh drinking water per person per day.
• Footwear: Ankle-high trekking boots (loose chalk & sharp stones).
• Clothing: Sun-protective long sleeves, hat, sunglasses, plus a warm windproof jacket for sudden desert night temperature drops.
• Sacred Sites Etiquette: Modest clothing covering arms and legs (headscarf for women visiting Beket-Ata).
• Tech: High-capacity power bank + downloaded offline maps (Maps.me / Organic Maps).
• Cash: Cash in Kazakhstani Tenge (KZT) for rural fuel stops and traditional meals.`;
  }

  // Best season / month
  if (q.includes('month') || q.includes('season') || q.includes('when to visit') || q.includes('weather')) {
    return `🗓️ BEST TIME TO VISIT MANGYSTAU:

• GOLDEN SEASONS: April–May & September–October
These months offer mild daytime temperatures (20°C–25°C), cool nights, and ideal conditions for off-road hiking and photography. In April/May, steppe wildflowers and tulips bloom!

• SUMMER (June–August): Extreme heat often exceeds 40°C in desert canyons. Expedition travel is challenging unless conducted early morning or late evening.
• WINTER (December–February): Cold, windy, and sub-zero temperatures with occasional snow on chalk cliffs. Requires heavy winter expedition gear.`;
  }

  // Beket-Ata specific
  if (q.includes('beket') || q.includes('sacred') || q.includes('mosque')) {
    return `🕌 BEKET-ATA SACRED UNDERGROUND MOSQUE:

• Who was Beket-Ata? Beket Myrzagululy (1750–1813) was an 18th-century Sufi scholar, teacher, and architect who carved rock mosques across Mangystau.
• The Site: Carved directly into chalk canyon walls at Oglandy. It remains an active pilgrimage sanctuary and is nominated for UNESCO World Heritage status.
• Visitor Etiquette: Dress modestly (arms and legs covered, headscarf for women). Act respectfully, refrain from loud noise, and do not photograph pilgrims inside prayer chambers.
• Access: Paved road up to the pilgrim center, followed by a 1.5 km stone staircase descent into the canyon.`;
  }

  // Check matching specific destination
  const matchedDest = destinations.find(
    (d) => q.includes(d.name.toLowerCase()) || q.includes(d.slug.toLowerCase())
  );

  if (matchedDest) {
    return `📌 OVERVIEW FOR ${matchedDest.name.toUpperCase()}:

"${matchedDest.description}"

• Location: ${matchedDest.location}
• Access Type: ${matchedDest.accessType}
• Difficulty: ${matchedDest.difficulty}
• Best Season: ${matchedDest.bestSeason}
• Duration: ${matchedDest.duration}

Highlights:
${matchedDest.whatYouWillSee.map((item: string) => `• ${item}`).join('\n')}

Safety Note: ${matchedDest.safety[0] || 'Carry sufficient water and check weather conditions.'}`;
  }

  // Default response
  return `Thank you for your question about Mangystau! 

Mangystau is Kazakhstan's premier desert and geological wilderness region. Key highlights include:
- White chalk canyons (Bozzhyra, Tuzbair)
- Sacred underground mosques (Beket-Ata, Shopan-Ata, Shakpak-Ata)
- Geological marvels (Valley of Balls Torysh, Sherkala Mountain, Karakiya Depression)

To give you the most accurate advice, please let me know:
1. How many days do you plan to travel?
2. What is your preferred travel style (Adventure, Cultural, Photography, Family)?
3. Do you plan to rent a 4x4 or hire a local driver?

I recommend checking with a certified local guide or official tourism source because desert weather and off-road track conditions can change suddenly.`;
}
