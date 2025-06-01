import React from "react";
import DuelForm from "../components/DuelForm";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>CareDuel – Clash for a Cause</title>
        <meta
          name="description"
          content="CareDuel is a platform to debate, vote, and uplift social causes through friendly duels and community support."
        />
      </Helmet>

      <main className="min-h-screen bg-gray-100 p-6 font-['Roboto']">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-['Poppins'] font-bold text-[#E53935] mb-6">
            Clash for a Cause 🎯
          </h1>

          <p className="mb-4 text-gray-700">
            CareDuel brings people together to debate and vote on charitable causes. By voting, you help shine a spotlight on the issues that matter most—from education equity to environmental action. Join a duel, share your voice, and see which cause wins the week!
          </p>

          <p className="text-gray-700">
            Every week, two impactful causes go head-to-head. You decide the winner. Each vote represents community support and unlocks new visibility for that cause. Ready to make a difference? Start a duel or vote now to help your favorite cause win!
          </p>
        </div>

        <section className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center text-[#3949AB] font-['Poppins']">
            Start a New Duel
          </h2>
          <DuelForm />
        </section>
      </main>
    </>
  );
}
