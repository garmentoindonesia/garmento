import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const BLOG_IMAGE_PATH = path.join(
  process.cwd(),
  "public",
  "blog"
);

export async function POST(
  request: Request
) {
  try {
    const formData =
      await request.formData();

    const slug =
      formData.get("slug") as string;

    const file =
      formData.get("file") as File;

    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug wajib diisi",
        },
        { status: 400 }
      );
    }

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          message: "File tidak ditemukan",
        },
        { status: 400 }
      );
    }

    const bytes =
      await file.arrayBuffer();

    const buffer =
      Buffer.from(bytes);

    const filePath = path.join(
      BLOG_IMAGE_PATH,
      `${slug}.jpg`
    );

    fs.writeFileSync(
      filePath,
      buffer
    );

    return NextResponse.json({
      success: true,
      message: "Cover berhasil diupload",
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Upload gagal",
      },
      {
        status: 500,
      }
    );
  }
}