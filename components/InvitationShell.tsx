"use client";

import { InvitationProvider } from "@/lib/InvitationContext";
import ExpiryGate from "@/components/ExpiryGate";
import CoverOverlay from "@/components/CoverOverlay";
import AudioPlayer from "@/components/AudioPlayer";
import ButterflyBurst from "@/components/ButterflyBurst";
import Hero from "@/components/Hero";
import QuoteSection from "@/components/QuoteSection";
import CoupleProfile from "@/components/CoupleProfile";
import Countdown from "@/components/Countdown";
import EventDetail from "@/components/EventDetail";
import LoveStory from "@/components/LoveStory";
import Gallery from "@/components/Gallery";
import DigitalEnvelope from "@/components/DigitalEnvelope";
import RsvpForm from "@/components/RsvpForm";
import Footer from "@/components/Footer";



export default function InvitationShell({ guestName }: { guestName: string }) {
  return (
    <InvitationProvider guestName={guestName}>
      <ExpiryGate>
        <CoverOverlay />
        <ButterflyBurst />
        <AudioPlayer />
        <main className="relative">
          <Hero />
          <QuoteSection />
          <CoupleProfile />
          <Countdown />
          <EventDetail />
          <LoveStory />
          <Gallery />
          <DigitalEnvelope />
          <RsvpForm />
        </main>
        <Footer />
      </ExpiryGate>
    </InvitationProvider>
  );
}