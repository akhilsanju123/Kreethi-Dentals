import { ArrowRight, Stethoscope } from 'lucide-react';
import type { Go } from '@/lib/constants';
import { PageHero } from '@/components/Layout';

export function Doctors({ go }: { go: Go }) {
  return <><PageHero eyebrow="The people behind your smile" title="Meet your dental care team." text="Professional profiles will appear here as verified clinic information is added by the practice." />
    <section className="section"><div className="container empty-state"><div className="empty-icon"><Stethoscope /></div><h2>Our team profiles are being prepared.</h2><p>We are keeping this space ready for verified names, qualifications and biographies from the clinic.</p><button className="button primary" onClick={() => go('/book-appointment')}>Request a consultation <ArrowRight size={17} /></button></div></section></>;
}

export function DoctorProfile({ slug, go }: { slug: string; go: Go }) {
  return <><PageHero eyebrow="Verified profile" title="Your care team profile is coming soon." text={`The clinic has not published verified profile information for ${slug.replace(/-/g, ' ')} yet.`} />
    <section className="section"><div className="container empty-state"><div className="empty-icon"><Stethoscope /></div><h2>Only verified clinic information appears here.</h2><p>Qualifications, registration details, languages and availability will be added by the practice before publication.</p><button className="button primary" onClick={() => go('/book-appointment')}>Request a consultation <ArrowRight size={17} /></button></div></section></>;
}
