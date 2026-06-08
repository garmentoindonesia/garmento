import { NextResponse } from "next/server";
import { uploadToGithub } from "@/lib/github";

export async function POST(
  request: Request
) {
  try {

    const {
      slug,
      content,
    } = await request.json();

    if (!slug?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug wajib diisi",
        },
        { status: 400 }
      );
    }

    if (!content?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Konten kosong",
        },
        { status: 400 }
      );
    }

    await uploadToGithub(
      `src/content/blog/${slug}.mdx`,
      Buffer
        .from(content)
        .toString("base64"),
      `Add blog ${slug}`
    );

    return NextResponse.json({
      success: true,
      message: "Artikel berhasil disimpan",
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Gagal menyimpan artikel",
      },
      {
        status: 500,
      }
    );
  }
}