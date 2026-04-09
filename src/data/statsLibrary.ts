
import { Hash, Sparkles, LayoutGrid, MousePointer2, Monitor, Split, Zap, Clock, PieChart, TrendingUp, BarChart3, Database } from 'lucide-react';

export const statsCategories = [
  "Basic",
  "Counter (Animated)",
  "Card-Based",
  "Icon Stats",
  "Split Layout",
  "Progress Bars",
  "Circular / Charts",
  "SaaS / KPI",
  "Timeline / Growth",
  "Interactive",
  "Minimal / Clean",
  "Creative / Premium"
];

export const statsLibrary = [
  {
    category: "Basic",
    items: [
      {
        id: "stats-basic",
        name: "Simple 3-Column Stats",
        tag: "STATS • BASIC",
        desc: "A clean, horizontal row for key metrics and numbers.",
        componentName: "StatsBasic",
        defaultProps: {
          bgColor: "#09090b",
          textColor: "#ffffff",
          cols: 3
        }
      }
    ]
  },
  {
    category: "Counter (Animated)",
    items: [
      {
        id: "stats-counter",
        name: "Animated Number Counter",
        tag: "STATS • COUNTER",
        desc: "Numbers that count up from zero on scroll trigger.",
        componentName: "StatsCounter",
        defaultProps: {
          bgColor: "#09090b",
          accentColor: "#6366f1"
        }
      }
    ]
  },
  {
    category: "Card-Based",
    items: [
      {
        id: "stats-cards",
        name: "Premium Glass Stats Cards",
        tag: "STATS • CARDS",
        desc: "Individual metric cards with glassmorphic effects.",
        componentName: "StatsCards",
        defaultProps: {
          bgColor: "#09090b",
          cardBg: "rgba(255,255,255,0.03)"
        }
      }
    ]
  },
  {
    category: "Icon Stats",
    items: [
      {
        id: "stats-icon",
        name: "Graphic Icon Metrics",
        tag: "STATS • ICON",
        desc: "Combines high-fidelity icons with key performance numbers.",
        componentName: "StatsIcon",
        defaultProps: {
          bgColor: "#09090b",
          iconColor: "#6366f1"
        }
      }
    ]
  },
  {
    category: "Split Layout",
    items: [
        {
           id: "stats-split",
           name: "Metrics + Content Split",
           tag: "STATS • SPLIT",
           desc: "Balanced section with headlines on one side and stats on the other.",
           componentName: "StatsSplit",
           defaultProps: {
               bgColor: "#0d0d0f",
               cols: 2
           }
        }
    ]
  },
  {
    category: "Progress Bars",
    items: [
        {
           id: "stats-progress",
           name: "Animated Metric Progress",
           tag: "STATS • PROGRESS",
           desc: "Visualizes percentages using smooth horizontal loading bars.",
           componentName: "StatsProgress",
           defaultProps: {
               bgColor: "#09090b",
               barColor: "#10b981"
           }
        }
    ]
  },
  {
    category: "Circular / Charts",
    items: [
        {
           id: "stats-charts",
           name: "Radial Progress Circles",
           tag: "STATS • CHARTS",
           desc: "Highly visual donut charts for conversion and performance stats.",
           componentName: "StatsCircular",
           defaultProps: {
               bgColor: "#09090b",
               accentColor: "#6366f1"
           }
        }
    ]
  },
  {
    category: "SaaS / KPI",
    items: [
        {
           id: "stats-saas",
           name: "SaaS Multi-Metric Dashboard",
           tag: "STATS • KPI",
           desc: "Comprehensive multi-column layout for product performance.",
           componentName: "StatsSaaS",
           defaultProps: {
               bgColor: "#09090b",
               accentColor: "#8b5cf6"
           }
        }
    ]
  },
  {
    category: "Timeline / Growth",
    items: [
        {
           id: "stats-timeline",
           name: "Historical Growth Timeline",
           tag: "STATS • TIMELINE",
           desc: "Displays metrics in a vertical sequence to show evolution.",
           componentName: "StatsTimeline",
           defaultProps: {
               bgColor: "#000000",
               accentColor: "#f43f5e"
           }
        }
    ]
  },
  {
     category: "Interactive",
     items: [
        {
           id: "stats-interactive",
           name: "Hover Dynamic Counters",
           tag: "STATS • INTERACTIVE",
           desc: "Counters that re-animate on hover for micro-interaction.",
           componentName: "StatsInteractive",
           defaultProps: {
               bgColor: "#09090b",
               accentColor: "#6366f1"
           }
        }
     ]
  },
  {
     category: "Minimal / Clean",
     items: [
        {
           id: "stats-minimal",
           name: "Minimalist Numeric Layout",
           tag: "STATS • MINIMAL",
           desc: "Clean typography-focused display for core business data.",
           componentName: "StatsMinimal",
           defaultProps: {
               bgColor: "#09090b"
           }
        }
     ]
  },
  {
     category: "Creative / Premium",
     items: [
        {
           id: "stats-creative",
           name: "3D Perspective Metrics",
           tag: "STATS • PREMIUM",
           desc: "Floating 3D metrics with glow effects and parallax motion.",
           componentName: "StatsCreative3D",
           defaultProps: {
               bgColor: "#000000",
               accentColor: "#00fff2"
           }
        }
     ]
  }
];

export const generateStatsCode = (componentName: string, props: any) => {
  return `
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ${componentName} = () => {
  return (
    <section className="py-20 px-6 bg-[${props.bgColor || '#09090b'}]">
      <div className="max-w-7xl mx-auto">
        {/* Stats Implementation */}
      </div>
    </section>
  );
};

export default ${componentName};
  `.trim();
};
