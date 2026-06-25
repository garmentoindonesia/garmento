import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const { slug } = await request.json();

    const today =
      new Date()
        .toISOString()
        .split("T")[0];

    const prompt = `
Buatkan file MDX blog dengan format SEO siap publish.

SLUG: ${slug}

---

1. FRONTMATTER (WAJIB EXACT FORMAT INI)

---
title: "{judul SEO natural, tidak clickbait berlebihan}"
excerpt: "{ringkasan 1–2 kalimat SEO friendly}"
cover: "/blog/${slug}.jpg"
date: "${today}"
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
- profesional
- informatif

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

Tulis artikel dalam format FULL MDX siap terbit.

Artikel HARUS sepenuhnya netral dan TIDAK BOLEH menyebut, mengaitkan, membandingkan, atau mereferensikan GARMENTO dalam isi artikel, heading, CTA, meta description, FAQ, maupun narasi apa pun.

Penyebutan GARMENTO HANYA diperbolehkan pada field author dan internal linking yang memang diperlukan.

Keluarkan hasil final MDX saja.

JANGAN beri penjelasan.
JANGAN beri catatan tambahan.
JANGAN gunakan markdown code block.
JANGAN gunakan pembuka atau penutup percakapan.
JANGAN gunakan format selain MDX final.
`;

    const result =
      await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

    const content =
      result.text?.trim() ?? "";

    const validDateRegex =
      /date:\\s*["']\\d{4}-\\d{2}-\\d{2}["']/;

    if (!validDateRegex.test(content)) {
      return NextResponse.json(
        {
          success: false,
          message: "Format tanggal invalid dari AI",
        },
        {
          status: 500,
        }
      );
    }

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