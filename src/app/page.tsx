'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const router = useRouter();

  return (
    <div className="p-4">
      <button 
        className="border-2 px-8 py-2 rounded-xl"
        type="button"
        onClick={() => router.push('/UseStateUsecase')}
      > useState
      </button>
      <button 
        className="border-2 px-8 py-2 rounded-xl"
        type="button"
        onClick={() => router.push('/UseEffectUsecase')}
      > UseEffect
      </button>
    </div>
  );
}
