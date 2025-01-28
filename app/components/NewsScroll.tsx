'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const newsItems = [
  { 
    id: 1, 
    title: 'Top project in AI2Web3 NYC. Invited to Venture Incubation.', 
    date: '13 Dec 2024',
    content: 'Presented our project that bridged the gap between Web3 enthusiasts and Funding/Grants Opportunities along with personalized guidance to build a portfolio for each application with the help of developed AI Agents, RAG and Decentralized Networks. Read More in Project #1'
  },
  { 
    id: 2, 
    title: 'Invited to the World Trade Center', 
    date: '14 Dec 2024',
    content: 'Invited to the office of Morph and Euth in World Trade Center, NYC as the Finalist of the AI2Web3 Bootcamp.'
  },
  { 
    id: 3, 
    title: 'Madison Square Garden Office invitation, NYC', 
    date: '13 Jan 2025',
    content: 'Got selected to network with experts from Tech, Marketing, Events, Entertainment and HR Teams within MSG Entertainment at their NYC office. Never knew, MSG owns the Sphere in Las Vegas too.'
  },
  { 
    id: 4, 
    title: 'Built this Website', 
    date: '24 Jan 2025',
    content: 'Finally ended the procrastination and built myself a personal website. lol.'
  },
].reverse()

export default function NewsScroll() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="neu-card p-6 w-full rounded-corners">
      <h2 className="text-xl font-bold mb-6">LATEST* (Dec'24 onwards)</h2>
      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        {newsItems.map((item, index) => (
          <div 
            key={item.id}
            className={`rounded-corners transition-all duration-300 ${
              expandedItems.includes(item.id) 
                ? 'neu-card-inset' 
                : 'neu-button'
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full text-left p-4 flex justify-between items-start"
            >
              <div>
                <h3 className="text-base font-medium">
                  {item.title}
                </h3>
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                  {item.date}
                </p>
              </div>
              {expandedItems.includes(item.id) ? (
                <ChevronUp className="w-5 h-5 mt-1 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 mt-1 flex-shrink-0" />
              )}
            </button>
            {expandedItems.includes(item.id) && (
              <div className="px-4 pb-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

