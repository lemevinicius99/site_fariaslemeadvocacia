import { NextResponse } from "next/server";
// TODO: integrar envio (Resend/SMTP) e registro no LinkLei. Hoje só valida e redireciona.
export async function POST(req) {
  const f = await req.formData();
  if (f.get("site")) return NextResponse.redirect(new URL("/contato", req.url), 303);
  if (!f.get("nome") || !f.get("telefone")) return NextResponse.json({ erro: "Nome e telefone são obrigatórios." }, { status: 400 });
  return NextResponse.redirect(new URL("/contato?enviado=1", req.url), 303);
}
