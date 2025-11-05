import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  LeafIcon,
  StarIcon,
  HorizonIcon,
  FlameIcon,
  BrokenCircleIcon,
  CompassIcon,
  SpiralIcon,
  EclipseIcon
} from '@/components/icons';
import AuraLogo from '@/assets/aura-logo.png';

export default function MoodShiftDashboard() {
  // --- React State Hooks ---
  const [currentArchetype, setCurrentArchetype] = useState('grounded');
  const [history, setHistory] = useState([]); // ✅ This fixes the 'setHistory not defined' error
  const [activeTab, setActiveTab] = useState('dashboard');

  // Animation Controls
  const controls = useAnimation();

  // Archetypes Object
  const archetypes = {
    grounded: {
      name: 'The Grounded Soul',
      gradient: 'from-green-200 to-beige-100',
      message: 'You’ve found your center. Let’s help you stay rooted in peace.',
      icon: <LeafIcon />,
      box: 'Sage & Sand Box',
      price: '$49',
      contents: ['Cedarwood scent', 'Weighted stone', 'Guided grounding ritual']
    },
    // ... (rest of archetypes)
  };

  // --- useEffect Hook ---
  useEffect(() => {
    const interval = setInterval(() => {
      const keys = Object.keys(archetypes);
      const nextIndex = Math.floor(Math.random() * keys.length);
      const nextArchetype = keys[nextIndex];
      setCurrentArchetype(nextArchetype);
      setHistory(prev => [
        ...prev.slice(-49),
        { archetype: nextArchetype, timestamp: new Date() }
      ]);
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
