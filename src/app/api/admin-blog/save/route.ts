import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const BLOG_PATH = path.join(
  process.cwd(),
  "src",
  "content",
  "blog"
);

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
        {
          status: 400,
        }
      );
    }

    if (!content?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Konten MDX kosong",
        },
        {
          status: 400,
        }
      );
    }

    const filePath = path.join(
      BLOG_PATH,
      `${slug}.mdx`
    );

    if (fs.existsSync(filePath)) {
    return NextResponse.json(
        {
        success: false,
        message: "Slug sudah digunakan",
        },
        {
        status: 409,
        }
    );
    }

    fs.writeFileSync(
      filePath,
      content,
      "utf8"
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