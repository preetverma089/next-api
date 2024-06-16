import { NextResponse } from "next/server";
import { user } from "@/util/db";
export async function GET(request, content) {
  const data = user.filter((item) => {
    return item.id == content.params.id;
  });
  return NextResponse.json(
    data.length == 0
      ? { result: "NO Data Found", success: false }
      : { result: data, success: true },
    {
      status: 200,
    }
  );
}
