import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import type { Go } from '@/lib/constants';
import { PageHero } from '@/components/Layout';

export function Gallery({ go }: { go: Go }) {
  return <><PageHero eyebrow="Smile stories" title="Every smile has a story." text="A considered gallery for consent-approved patient cases and clinic photography." />
    <section className="section"><div className="container empty-state"><div className="empty-icon"><Sparkles /></div><h2>Approved smile stories will appear here.</h2><p>We only publish patient imagery with appropriate consent. There are no approved cases to show yet.</p><button className="text-link" onClick={() => go('/contact-us')}>Ask the clinic a question <ArrowRight size={17} /></button></div></section></>;
}

export function Testimonials({ go }: { go: Go }) {
  return <><PageHero eyebrow="Patient experiences" title="What patients choose to share." text="Real experiences belong to real people. Approved testimonials will be added here by the clinic." />
    <section className="section"><div className="container empty-state"><div className="empty-icon"><MessageCircle /></div><h2>Patient stories are coming soon.</h2><p>We do not invent reviews or ratings. This space will only show approved patient feedback.</p><button className="button primary" onClick={() => go('/book-appointment')}>Start your own care journey <ArrowRight size={17} /></button></div></section></>;
}
