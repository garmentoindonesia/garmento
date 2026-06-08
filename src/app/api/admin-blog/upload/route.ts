import { NextResponse } from "next/server";
import { uploadToGithub } from "@/lib/github";

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
        {
          status: 400,
        }
      );
    }

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          message: "File tidak ditemukan",
        },
        {
          status: 400,
        }
      );
    }

    const bytes =
      await file.arrayBuffer();

    const base64 =
      Buffer
        .from(bytes)
        .toString("base64");

    await uploadToGithub(
      `public/blog/${slug}.jpg`,
      base64,
      `Add cover ${slug}`
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