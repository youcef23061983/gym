import { Cardio } from "./data";
import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json(Cardio);
}
