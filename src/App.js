// src/components/MoodShiftDashboard.jsx
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  LeafIcon, StarIcon, HorizonIcon, FlameIcon, BrokenCircleIcon, 
  CompassIcon, SpiralIcon, EclipseIcon 
} from '@/components/icons';
import AuraLogo from '@/assets/aura-logo.png';

// Move archetypes outside the component so useEffect doesn't need it as dependency
const archetypes = {
  grounded: { n:'The Grounded Soul', g:'from-green-200 to-beige-100', m:'You’ve found your center.', i:<LeafIcon/>, b:'Sage & Sand Box', p:'$49', c:['Cedarwood scent','Weighted stone','Guided ritual'] },
  creative: { n:'The Creative Spark', g:'from-lilac-300 to-coral-200', m:'Your ideas are blooming.', i:<StarIcon/>, b:'Lilac & Coral Box', p:'$55', c:['Citrus & Jasmine','Kinetic sand','Creative ritual'] },
  dreamer: { n:'The Dream Builder', g:'from-indigo-400 to-sky-300', m:'Your dreams are shaping.', i:<HorizonIcon/>, b:'Indigo Sky Box', p:'$52', c:['Lavender','Textured cards','Blueprint ritual'] },
  caregiver: { n:'The Burned-Out Caregiver', g:'from-rose-200 to-cream-100', m:'It’s time to receive.', i:<FlameIcon/>, b:'Rose & Cream Box', p:'$50', c:['Vanilla & Honey','Mini blanket','Refill ritual'] },
  lonely: { n:'The Lonely Heart', g:'from-dusty-rose to-mauve-haze', m:'You’re not alone.', i:<BrokenCircleIcon/>, b:'Dusty Rose Box', p:'$48', c:['Rose & Patchouli','Comfort crystal','Gentle return ritual'] },
  explorer: { n:'The Restless Explorer', g:'from-teal-300 to-amber-200', m:'Discovery begins within.', i:<CompassIcon/>, b:'Teal & Amber Box', p:'$53', c:['Lemongrass','Braided cord','Wander ritual'] },
  overloaded: { n:'The Overloaded Mind', g:'from-mist-blue-200 to-silver-300', m:'Quiet the noise.', i:<SpiralIcon/>, b:'Mist & Silver Box', p:'$51', c:['Eucalyptus & Mint','Cooling object','Calm reset ritual'] },
  shadow: { n:'The Shadow Dweller', g:'from-charcoal-500 to-midnight-violet', m:'Your greatest rebirth.', i:<EclipseIcon/>, b:'Charcoal Violet Box', p:'$56', c:['Myrrh','Sandpaper stone','Embrace eclipse ritual'] }
};

export default function MoodShiftDashboard() {
  const [cur, setCur] = useState('grounded');
  const [hist, setHist] = useState([]);
  const [tab, setTab] = useState('dashboard');
  const controls = useAnimation();

  // Safe useEffect, no ESLint warning
  useEffect(() => {
    const interval = setInterval(() => {
      const keys = Object.keys(archetypes);
      const next = keys[Math.floor(Math.random() * keys.length)];
      setCur(next);
      setHist(h => [...h.slice(-49), { archetype: next, timestamp: new Date() }]);
    }, 5000);

    return () => clearInterval(interval);
  }, []); // ✅ safe because archetypes is static

  const c = archetypes[cur];

  return (
    <motion.div 
      className={`min-h-screen flex flex-col items-center justify-start text-center bg-gradient-to-br ${c.g}`} 
      animate={controls} 
      style={{ paddingTop: 60 }}
    >
      <img src={AuraLogo} alt="AURA Logo" className="w-48 mb-6"/>
      
      <div className="flex gap-4 mb-6">
        {['dashboard','reviews','social','payment','shipping'].map(t => (
          <Button 
            key={t} 
            variant={tab === t ? 'default' : 'secondary'} 
            onClick={() => setTab(t)}
          >
            {t[0].toUpperCase() + t.slice(1)}
          </Button>
        ))}
      </div>

      {tab === 'dashboard' && (
        <>
          <motion.div className="flex items-center gap-3 mb-3 z-10">
            {c.i}
            <motion.h1 className="text-4xl font-semibold">{c.n}</motion.h1>
          </motion.div>
          <motion.p className="text-lg text-gray-700 max-w-2xl mb-6 z-10 px-6">{c.m}</motion.p>

          <Card className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg w-full max-w-4xl mb-6">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-3">Mood Box Options & Pricing</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.keys(archetypes).map(k => {
                  const a = archetypes[k];
                  const [from, to] = a.g.split(' to-'); 
                  return (
                    <motion.div 
                      key={k} 
                      className="p-3 rounded-xl text-center border border-gray-200" 
                      style={{ background: `linear-gradient(135deg, ${from.replace('from-','#')}, ${to.replace('to-','#')})` }}
                    >
                      {a.i}
                      <p className="font-semibold mt-1">{a.b}</p>
                      <p className="text-sm mt-1">{a.p}</p>
                      <ul className="text-xs mt-1 text-left list-disc list-inside">
                        {a.c.map((item, j) => <li key={j}>{item}</li>)}
                      </ul>
                      <Button className="mt-2">Add to Cart</Button>
                    </motion.div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Button className="mb-6 mt-6" onClick={() => alert('Sync Your Soul ritual started!')}>
            Start Sync Your Soul
          </Button>
        </>
      )}
    </motion.div>
  );
      }
