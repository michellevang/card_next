"use client"

import Image from "next/image";
import Link from "next/link";
import cardstyle from './page.module.scss';

export default function Home() {

  return (
    
    <main>

    <section id={cardstyle.cardContainer}>
      <div id={cardstyle.card}></div>
    </section>

    </main>
    
  );
}
