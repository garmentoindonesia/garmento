import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY!,
});

export async function POST(
  request: Request
) {
  try {
    const { slug } =
      await request.json();

    const prompt = `
Buatkan file MDX blog GARMENTO dengan format SEO siap publish.

SLUG: ${slug}

---

1. FRONTMATTER (WAJIB EXACT FORMAT INI)

---
title: "{judul SEO natural, tidak clickbait berlebihan}"
excerpt: "{ringkasan 1–2 kalimat SEO friendly}"
cover: "/blog/${slug}.jpg"
date: "2026-06-06"
category: "{Produksi Kaos Custom | Polo Shirt Corporate | Bahan & Edukasi}"
author: "GARMENTO"
keywords:
  - {keyword utama}
  - {keyword turunan 1}
  - {keyword turunan 2}
  - {keyword turunan 3}
featured: true
---

2. STRUKTUR ARTIKEL

- H1 sesuai topik
- Intro
- H2 utama
- H2 detail
- H2 simulasi
- H2 tips
- H2 kesimpulan
- H2 CTA

3. GAYA

- natural
- SEO friendly
- tidak kaku
- blog perusahaan garment

4. WAJIB ADA

- bullet list
- simulasi jika relevan
- CTA

5. INTERNAL LINK

Maksimal 2 internal link.

Topik Kaos:
 /layanan/produksi-kaos-custom

Topik Polo:
 /layanan/produksi-polo-shirt

JANGAN tambahkan www, https:// maupun naked domain apapun.

6. OUTPUT

FULL MDX SIAP COPAS

JANGAN beri penjelasan.
JANGAN gunakan markdown code block.
Keluarkan MDX final saja.
`;

    const result =
      await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

    const content =
      result.text ?? "";

    return NextResponse.json({
      success: true,
      content,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Generate gagal",
      },
      {
        status: 500,
      }
    );
  }
}