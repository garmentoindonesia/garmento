import { NextResponse } from "next/server";

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
category: "{Produksi Kaos Custom | Polo Shirt Corporate | Bahan & Edukasi (pilih yang paling sesuai topik dan cluster thinking di nomor 6 bawah)}"
author: "GARMENTO"
keywords:
  - {keyword utama}
  - {keyword turunan 1}
  - {keyword turunan 2}
  - {keyword turunan 3}
featured: true
---

2. STRUKTUR ARTIKEL:

- H1 sesuai topik
- Intro 1–2 paragraf
- H2 penjelasan utama
- H2 breakdown / faktor / detail penting
- H2 simulasi (jika relevan)
- H2 tips
- H2 kesimpulan
- H2 CTA penutup

3. GAYA PENULISAN:

- natural
- SEO friendly
- tidak kaku
- cocok blog perusahaan garment
- kalimat tidak terlalu panjang
- hindari repetisi berlebihan

4. WAJIB ADA:

- bullet list
- penjelasan harga (jika relevan)
- contoh simulasi (jika cocok)
- CTA di bagian akhir

5. INTERNAL LINKING (WAJIB)

Maksimal 2 internal link per artikel.

RULE CLUSTER:

A.
Topik kaos custom, harga kaos,
sablon kaos, produksi kaos

→ wajib link:
 /layanan/produksi-kaos-custom

B.
Topik polo shirt,
seragam polo

→ wajib link:
 /layanan/produksi-polo-shirt

C.
Topik bahan kaos,
rubber, plastisol,
edukasi sablon

→ pilih sesuai konteks:
 /layanan/produksi-kaos-custom
 atau
 /layanan/produksi-polo-shirt

6. CLUSTER THINKING

Artikel harus masuk salah satu:

- Produksi Kaos Custom
- Polo Shirt Corporate
- Bahan & Edukasi

7. OUTPUT

- FULL MDX SIAP COPAS
- tanpa penjelasan tambahan
`;

    return NextResponse.json({
      success: true,
      prompt,
    });

  } catch {

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